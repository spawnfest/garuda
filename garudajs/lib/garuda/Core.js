"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Core = void 0;
const phoenix_1 = require("phoenix");
const Utils_1 = require("./Utils");
class Core {
    constructor(connConfig) {
        this.isGameRoomJoined = false;
        this.setupConfigs(connConfig);
        this.connectToSocket();
    }
    leaveGameChannel() {
        this.gameChannel.leave();
    }
    getGameChannel(roomName, params, callbackFunction) {
        let maxPlayer = params.maxPlayers ? params.maxPlayers : 2;
        let playerId = params.playerId ? params.playerId : this.playerId;
        let matchmakerChannelName;
        this.gameRoomName = roomName;
        if (params.matchId) {
            matchmakerChannelName = "garuda_matchmaker:" + params.matchId + ":" + roomName + ":" + maxPlayer;
            this.matchId = params.matchId;
        }
        else {
            matchmakerChannelName = "garuda_matchmaker:" + roomName + ":" + maxPlayer;
            this.matchId = "";
        }
        let matchSendInfo = {
            player_count: maxPlayer,
            player_id: playerId,
            room_name: matchmakerChannelName,
            match_id: this.matchId,
        };
        this.matchmakerChannel = this.socket.channel(matchmakerChannelName, matchSendInfo);
        this.matchmakerChannel.join()
            .receive("ok", resp => { console.log("Joined matchmaker"); })
            .receive("error", resp => { throw Error("unable to join matchmaker"); });
        this.matchmakerChannel.on("match_maker_event", (message) => {
            console.log("On match maker event", message);
            this.matchmakerChannel.leave();
            this.matchId = message["match_id"];
            this.gameChannel = this.matchId ? this.socket.channel("room_" + this.gameRoomName + ":" + this.matchId) : undefined;
            callbackFunction(this.gameChannel, message);
        });
    }
    /*
      Manage configs, that will be used for socket connections
    */
    setupConfigs(connConfig) {
        this.playerId = "gda_anon_" + Utils_1.getRandomId();
        this.socketUrl = connConfig.socketUrl;
    }
    connectToSocket() {
        this.socket = new phoenix_1.Socket(this.socketUrl);
        this.socket.connect();
        return this.socket;
    }
}
exports.Core = Core;
//# sourceMappingURL=Core.js.map