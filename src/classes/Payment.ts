import {HasFormatter} from '../interfaces/HasFormatter.js'

export class Payment implements HasFormatter{
    constructor(
        public recipient: string,
        private details: string,
        readonly amount: number
    ) {
    }

    format(): string {
        return `Recipient ${this.recipient}`
    }
}