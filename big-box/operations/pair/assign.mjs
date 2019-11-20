import Algebra from '../../template/algebra.mjs'
import PairOperation from './operation.mjs'

export default class Assignment extends PairOperation {
    constructor(args) {
        /** Defaults */
        const A = args.of.slice({ region: args.region || [] })

        /** Superclass */
        super({ ...args, of: A, result: A })

        /** Result */
        this.original = args.of
        this.result = args.result || this.resultant()

        /** Initialize */
        if (this.of.size > 0) {
            this.symbolicBoilerplate() // super class method 
            this.symbolicSourceTemplate() // super class method, utilizes helpers below
        }

        /** Create */
        this.invoke = new Function('A,B,R', this.source)
    }

    /** Symbolic Implementation */
    start() { }

    preLoop() { }

    inLoop() {
        return Algebra.assign(this.variables.result, Algebra.add(this.variables.of, this.variables.with))
    }

    postLoop() { }

    finish() { return 'return this.original' }

    /** (TODO) Pointwise Implementation */
}