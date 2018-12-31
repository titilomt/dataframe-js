/** Declaration file generated by dts-gen */

export class DataFrame {
    constructor(data: any, columns: any, ...args: any[]);

    bisect(percentage: any): any;

    cast(columnName: any, typeFunction: any): any;

    castAll(typeFunctions: any): any;

    chain(...args: any[]): any;

    count(): any;

    countValue(valueToCount: any, ...args: any[]): any;

    diff(dfToDiff: any, columnNames: any): any;

    dim(): any;

    distinct(columnName: any): any;

    drop(columnName: any): any;

    dropDuplicates(...args: any[]): any;

    filter(condition: any): any;

    find(condition: any): any;

    fullJoin(dfToJoin: any, columnNames: any): any;

    groupBy(...args: any[]): any;

    innerJoin(dfToJoin: any, columnNames: any): any;

    join(dfToJoin: any, columnNames: any, ...args: any[]): any;

    leftJoin(dfToJoin: any, columnNames: any): any;

    listColumns(): any;

    map(func: any): any;

    outerJoin(dfToJoin: any, columnNames: any): any;

    push(...args: any[]): any;

    reduce(func: any, init: any): any;

    reduceRight(func: any, init: any): any;

    rename(columnName: any, replacement: any): any;

    renameAll(newColumnNames: any): any;

    replace(value: any, replacement: any, columnNames: any): any;

    restructure(newColumnNames: any): any;

    rightJoin(dfToJoin: any, columnNames: any): any;

    sample(percentage: any): any;

    select(...args: any[]): any;

    show(...args: any[]): any;

    shuffle(): any;

    sortBy(columnNames: any, ...args: any[]): any;

    toArray(columnName: any): any;

    toCSV(...args: any[]): any;

    toCollection(ofRows: any): any;

    toDSV(...args: any[]): any;

    toDict(): any;

    toJSON(...args: any[]): any;

    toPSV(...args: any[]): any;

    toTSV(...args: any[]): any;

    toText(...args: any[]): any;

    transpose(tranposeColumnNames: any): any;

    union(dfToUnion: any): any;

    unique(columnName: any): any;

    where(condition: any): any;

    withColumn(columnName: any, ...args: any[]): any;

    static defaultModules: any[];

    static fromCSV(pathOrFile: any, ...args: any[]): any;

    static fromDSV(pathOrFile: any, ...args: any[]): any;

    static fromJSON(pathOrFile: any): any;

    static fromPSV(pathOrFile: any, ...args: any[]): any;

    static fromTSV(pathOrFile: any, ...args: any[]): any;

    static fromText(pathOrFile: any, ...args: any[]): any;

    static setDefaultModules(...args: any[]): void;

}

export class Row {
    constructor(data: any, columns: any);

    delete(columnToDel: any): any;

    get(columnToGet: any): any;

    has(columnName: any): any;

    hash(): any;

    select(...args: any[]): any;

    set(columnToSet: any, value: any): any;

    size(): any;

    toArray(): any;

    toDict(): any;

}

export namespace DataFrame {
    class sql {
        constructor(df: any);

        register(tableName: any, ...args: any[]): any;

        static dropTable(tableName: any): void;

        static dropTables(): void;

        static listTables(): any;

        static registerTable(df: any, tableName: any, ...args: any[]): void;

        static renameTable(tableName: any, replacement: any, ...args: any[]): void;

        static request(query: any): any;

        static tables: {
        };

    }

    namespace fromCSV {
        const prototype: {
        };

    }

    namespace fromDSV {
        const prototype: {
        };

    }

    namespace fromJSON {
        const prototype: {
        };

    }

    namespace fromPSV {
        const prototype: {
        };

    }

    namespace fromTSV {
        const prototype: {
        };

    }

    namespace fromText {
        const prototype: {
        };

    }

    namespace prototype {
        function bisect(percentage: any): any;

        function cast(columnName: any, typeFunction: any): any;

        function castAll(typeFunctions: any): any;

        function chain(...args: any[]): any;

        function count(): any;

        function countValue(valueToCount: any, ...args: any[]): any;

        function diff(dfToDiff: any, columnNames: any): any;

        function dim(): any;

        function distinct(columnName: any): any;

        function drop(columnName: any): any;

        function dropDuplicates(...args: any[]): any;

        function filter(condition: any): any;

        function find(condition: any): any;

        function fullJoin(dfToJoin: any, columnNames: any): any;

        function groupBy(...args: any[]): any;

        function innerJoin(dfToJoin: any, columnNames: any): any;

        function join(dfToJoin: any, columnNames: any, ...args: any[]): any;

        function leftJoin(dfToJoin: any, columnNames: any): any;

        function listColumns(): any;

        function map(func: any): any;

        function outerJoin(dfToJoin: any, columnNames: any): any;

        function push(...args: any[]): any;

        function reduce(func: any, init: any): any;

        function reduceRight(func: any, init: any): any;

        function rename(columnName: any, replacement: any): any;

        function renameAll(newColumnNames: any): any;

        function replace(value: any, replacement: any, columnNames: any): any;

        function restructure(newColumnNames: any): any;

        function rightJoin(dfToJoin: any, columnNames: any): any;

        function sample(percentage: any): any;

        function select(...args: any[]): any;

        function show(...args: any[]): any;

        function shuffle(): any;

        function sortBy(columnNames: any, ...args: any[]): any;

        function toArray(columnName: any): any;

        function toCSV(...args: any[]): any;

        function toCollection(ofRows: any): any;

        function toDSV(...args: any[]): any;

        function toDict(): any;

        function toJSON(...args: any[]): any;

        function toPSV(...args: any[]): any;

        function toTSV(...args: any[]): any;

        function toText(...args: any[]): any;

        function transpose(tranposeColumnNames: any): any;

        function union(dfToUnion: any): any;

        function unique(columnName: any): any;

        function where(condition: any): any;

        function withColumn(columnName: any, ...args: any[]): any;

        namespace bisect {
            const prototype: {
            };

        }

        namespace cast {
            const prototype: {
            };

        }

        namespace castAll {
            const prototype: {
            };

        }

        namespace chain {
            const prototype: {
            };

        }

        namespace count {
            const prototype: {
            };

        }

        namespace countValue {
            const prototype: {
            };

        }

        namespace diff {
            const prototype: {
            };

        }

        namespace dim {
            const prototype: {
            };

        }

        namespace distinct {
            const prototype: {
            };

        }

        namespace drop {
            const prototype: {
            };

        }

        namespace dropDuplicates {
            const prototype: {
            };

        }

        namespace filter {
            const prototype: {
            };

        }

        namespace find {
            const prototype: {
            };

        }

        namespace fullJoin {
            const prototype: {
            };

        }

        namespace groupBy {
            const prototype: {
            };

        }

        namespace innerJoin {
            const prototype: {
            };

        }

        namespace join {
            const prototype: {
            };

        }

        namespace leftJoin {
            const prototype: {
            };

        }

        namespace listColumns {
            const prototype: {
            };

        }

        namespace map {
            const prototype: {
            };

        }

        namespace outerJoin {
            const prototype: {
            };

        }

        namespace push {
            const prototype: {
            };

        }

        namespace reduce {
            const prototype: {
            };

        }

        namespace reduceRight {
            const prototype: {
            };

        }

        namespace rename {
            const prototype: {
            };

        }

        namespace renameAll {
            const prototype: {
            };

        }

        namespace replace {
            const prototype: {
            };

        }

        namespace restructure {
            const prototype: {
            };

        }

        namespace rightJoin {
            const prototype: {
            };

        }

        namespace sample {
            const prototype: {
            };

        }

        namespace select {
            const prototype: {
            };

        }

        namespace show {
            const prototype: {
            };

        }

        namespace shuffle {
            const prototype: {
            };

        }

        namespace sortBy {
            const prototype: {
            };

        }

        namespace toArray {
            const prototype: {
            };

        }

        namespace toCSV {
            const prototype: {
            };

        }

        namespace toCollection {
            const prototype: {
            };

        }

        namespace toDSV {
            const prototype: {
            };

        }

        namespace toDict {
            const prototype: {
            };

        }

        namespace toJSON {
            const prototype: {
            };

        }

        namespace toPSV {
            const prototype: {
            };

        }

        namespace toTSV {
            const prototype: {
            };

        }

        namespace toText {
            const prototype: {
            };

        }

        namespace transpose {
            const prototype: {
            };

        }

        namespace union {
            const prototype: {
            };

        }

        namespace unique {
            const prototype: {
            };

        }

        namespace where {
            const prototype: {
            };

        }

        namespace withColumn {
            const prototype: {
            };

        }

    }

    namespace setDefaultModules {
        const prototype: {
        };

    }

    namespace sql {
        namespace dropTable {
            const prototype: {
            };

        }

        namespace dropTables {
            const prototype: {
            };

        }

        namespace listTables {
            const prototype: {
            };

        }

        namespace prototype {
            function register(tableName: any, ...args: any[]): any;

            namespace register {
                // Too-deep object hierarchy from dataframe_js.DataFrame.sql.prototype.register
                const prototype: any;

            }

        }

        namespace registerTable {
            const prototype: {
            };

        }

        namespace renameTable {
            const prototype: {
            };

        }

        namespace request {
            const prototype: {
            };

        }

    }

}

export namespace Errors {
    function ArgumentTypeError(input: any, expected: any): any;

    function FileNotFoundError(fileName: any): any;

    function MixedTypeError(...args: any[]): any;

    function NoSuchColumnError(column: any, columns: any): any;

    function SQLParseError(message: any): any;

    function TableAlreadyExistsError(tableName: any): any;

    function WrongSchemaError(columns: any, expected: any): any;

    function WrongTableNameError(tableName: any): any;

    namespace ArgumentTypeError {
        const stackTraceLimit: number;

        function captureStackTrace(p0: any, p1: any): any;

        namespace prototype {
            const message: string;

            const name: string;

            function toString(): any;

        }

    }

    namespace FileNotFoundError {
        const stackTraceLimit: number;

        function captureStackTrace(p0: any, p1: any): any;

        namespace prototype {
            const message: string;

            const name: string;

            function toString(): any;

        }

    }

    namespace MixedTypeError {
        const stackTraceLimit: number;

        function captureStackTrace(p0: any, p1: any): any;

        namespace prototype {
            const message: string;

            const name: string;

            function toString(): any;

        }

    }

    namespace NoSuchColumnError {
        const stackTraceLimit: number;

        function captureStackTrace(p0: any, p1: any): any;

        namespace prototype {
            const message: string;

            const name: string;

            function toString(): any;

        }

    }

    namespace SQLParseError {
        const stackTraceLimit: number;

        function captureStackTrace(p0: any, p1: any): any;

        namespace prototype {
            const message: string;

            const name: string;

            function toString(): any;

        }

    }

    namespace TableAlreadyExistsError {
        const stackTraceLimit: number;

        function captureStackTrace(p0: any, p1: any): any;

        namespace prototype {
            const message: string;

            const name: string;

            function toString(): any;

        }

    }

    namespace WrongSchemaError {
        const stackTraceLimit: number;

        function captureStackTrace(p0: any, p1: any): any;

        namespace prototype {
            const message: string;

            const name: string;

            function toString(): any;

        }

    }

    namespace WrongTableNameError {
        const stackTraceLimit: number;

        function captureStackTrace(p0: any, p1: any): any;

        namespace prototype {
            const message: string;

            const name: string;

            function toString(): any;

        }

    }

}

export namespace Row {
    namespace prototype {
        function get(columnToGet: any): any;

        function has(columnName: any): any;

        function hash(): any;

        function select(...args: any[]): any;

        function set(columnToSet: any, value: any): any;

        function size(): any;

        function toArray(): any;

        function toDict(): any;

        namespace get {
            const prototype: {
            };

        }

        namespace has {
            const prototype: {
            };

        }

        namespace hash {
            const prototype: {
            };

        }

        namespace select {
            const prototype: {
            };

        }

        namespace set {
            const prototype: {
            };

        }

        namespace size {
            const prototype: {
            };

        }

        namespace toArray {
            const prototype: {
            };

        }

        namespace toDict {
            const prototype: {
            };

        }

    }

}

