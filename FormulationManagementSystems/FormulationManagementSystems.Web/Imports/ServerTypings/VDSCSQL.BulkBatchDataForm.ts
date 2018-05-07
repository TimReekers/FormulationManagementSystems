
namespace FormulationManagementSystems.VDSCSQL {
    export class BulkBatchDataForm extends Serenity.PrefixedContext {
        static formKey = 'VDSCSQL.BulkBatchData';
    }

    export interface BulkBatchDataForm {
        BulkBatchId: Serenity.IntegerEditor;
        SourceTank: Serenity.StringEditor;
        DestinationTank: Serenity.StringEditor;
        Ingredient: Serenity.StringEditor;
        IngredientNumber: Serenity.IntegerEditor;
        Phase: Serenity.StringEditor;
        PhaseNumber: Serenity.IntegerEditor;
        StartTime: Serenity.DateEditor;
        EndTime: Serenity.DateEditor;
        Operator: Serenity.StringEditor;
        SupervisorOverride: Serenity.StringEditor;
        AdditionQty: Serenity.DecimalEditor;
        Status: Serenity.StringEditor;
        ScaleCheckOperator: Serenity.StringEditor;
        ScaleCheckWt: Serenity.IntegerEditor;
        ScaleId: Serenity.StringEditor;
        ValvesOpen: Serenity.StringEditor;
        ValveOpenBypass: Serenity.StringEditor;
        ValvesClose: Serenity.StringEditor;
        ValveCloseBypass: Serenity.StringEditor;
        RecipePhaseId: Serenity.IntegerEditor;
        CurrentStepIndex: Serenity.IntegerEditor;
        OperatorId: Serenity.IntegerEditor;
        SupervisorOverrideId: Serenity.IntegerEditor;
        SrcStartWt: Serenity.DecimalEditor;
        DstStartWt: Serenity.DecimalEditor;
        SrcEndWt: Serenity.DecimalEditor;
        DstEndWt: Serenity.DecimalEditor;
        PhaseTankRemembered: Serenity.StringEditor;
    }

    [,
        ['BulkBatchId', () => Serenity.IntegerEditor],
        ['SourceTank', () => Serenity.StringEditor],
        ['DestinationTank', () => Serenity.StringEditor],
        ['Ingredient', () => Serenity.StringEditor],
        ['IngredientNumber', () => Serenity.IntegerEditor],
        ['Phase', () => Serenity.StringEditor],
        ['PhaseNumber', () => Serenity.IntegerEditor],
        ['StartTime', () => Serenity.DateEditor],
        ['EndTime', () => Serenity.DateEditor],
        ['Operator', () => Serenity.StringEditor],
        ['SupervisorOverride', () => Serenity.StringEditor],
        ['AdditionQty', () => Serenity.DecimalEditor],
        ['Status', () => Serenity.StringEditor],
        ['ScaleCheckOperator', () => Serenity.StringEditor],
        ['ScaleCheckWt', () => Serenity.IntegerEditor],
        ['ScaleId', () => Serenity.StringEditor],
        ['ValvesOpen', () => Serenity.StringEditor],
        ['ValveOpenBypass', () => Serenity.StringEditor],
        ['ValvesClose', () => Serenity.StringEditor],
        ['ValveCloseBypass', () => Serenity.StringEditor],
        ['RecipePhaseId', () => Serenity.IntegerEditor],
        ['CurrentStepIndex', () => Serenity.IntegerEditor],
        ['OperatorId', () => Serenity.IntegerEditor],
        ['SupervisorOverrideId', () => Serenity.IntegerEditor],
        ['SrcStartWt', () => Serenity.DecimalEditor],
        ['DstStartWt', () => Serenity.DecimalEditor],
        ['SrcEndWt', () => Serenity.DecimalEditor],
        ['DstEndWt', () => Serenity.DecimalEditor],
        ['PhaseTankRemembered', () => Serenity.StringEditor]
    ].forEach(x => Object.defineProperty(BulkBatchDataForm.prototype, <string>x[0], {
        get: function () {
            return this.w(x[0], (x[1] as any)());
        },
        enumerable: true,
        configurable: true
    }));
}