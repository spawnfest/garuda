export interface IConnectionConfig {
    socketUrl: string;
}
export interface IJoinRoom {
    maxPlayers?: number;
    matchId?: string;
}
export interface IMatchSendInfo {
    player_count: number;
    player_id: string;
    room_name: string;
    match_id?: string;
}
