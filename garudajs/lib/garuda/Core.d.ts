import { IConnectionConfig, IJoinRoom } from "./Interfaces";
export declare class Core {
    private socket;
    private socketUrl;
    private playerId;
    private matchmakerChannel;
    private matchId;
    private gameChannel;
    private gameRoomName;
    private isGameRoomJoined;
    constructor(connConfig: IConnectionConfig);
    leaveGameChannel(): void;
    getGameChannel(roomName: string, params: IJoinRoom, callbackFunction: any): void;
    private setupConfigs;
    private connectToSocket;
}
