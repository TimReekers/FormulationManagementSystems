
namespace FormulationManagementSystems.VDSCSQL {
    export class SrcDstPathForm extends Serenity.PrefixedContext {
        static formKey = 'VDSCSQL.SrcDstPath';
    }

    export interface SrcDstPathForm {
        SrcTankId: Serenity.IntegerEditor;
        SrcPath: Serenity.StringEditor;
        DstTankId: Serenity.IntegerEditor;
        DstPath: Serenity.StringEditor;
        PathState: Serenity.StringEditor;
    }

    [,
        ['SrcTankId', () => Serenity.IntegerEditor],
        ['SrcPath', () => Serenity.StringEditor],
        ['DstTankId', () => Serenity.IntegerEditor],
        ['DstPath', () => Serenity.StringEditor],
        ['PathState', () => Serenity.StringEditor]
    ].forEach(x => Object.defineProperty(SrcDstPathForm.prototype, <string>x[0], {
        get: function () {
            return this.w(x[0], (x[1] as any)());
        },
        enumerable: true,
        configurable: true
    }));
}