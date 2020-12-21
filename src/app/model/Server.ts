export class Server{
    server: string;
    bank: string;
    selected: boolean;

    constructor(server: string, bank: string, selected: boolean) {
        this.server  = server;
        this.bank = bank;
        this.selected = selected;
    }

}
