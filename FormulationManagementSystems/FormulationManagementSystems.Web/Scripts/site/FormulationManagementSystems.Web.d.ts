/// <reference types="jquery" />
/// <reference types="jqueryui" />
declare namespace FormulationManagementSystems.Administration {
}
declare namespace FormulationManagementSystems.Administration {
    interface LanguageForm {
        LanguageId: Serenity.StringEditor;
        LanguageName: Serenity.StringEditor;
    }
    class LanguageForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace FormulationManagementSystems.Administration {
    interface LanguageRow {
        Id?: number;
        LanguageId?: string;
        LanguageName?: string;
    }
    namespace LanguageRow {
        const idProperty = "Id";
        const nameProperty = "LanguageName";
        const localTextPrefix = "Administration.Language";
        const lookupKey = "Administration.Language";
        function getLookup(): Q.Lookup<LanguageRow>;
        const enum Fields {
            Id,
            LanguageId,
            LanguageName,
        }
    }
}
declare namespace FormulationManagementSystems.Administration {
    namespace LanguageService {
        const baseUrl = "Administration/Language";
        function Create(request: Serenity.SaveRequest<LanguageRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<LanguageRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<LanguageRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<LanguageRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create,
            Update,
            Delete,
            Retrieve,
            List,
        }
    }
}
declare namespace FormulationManagementSystems.Administration {
}
declare namespace FormulationManagementSystems.Administration {
    interface RoleForm {
        RoleName: Serenity.StringEditor;
    }
    class RoleForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace FormulationManagementSystems.Administration {
    interface RolePermissionListRequest extends Serenity.ServiceRequest {
        RoleID?: number;
        Module?: string;
        Submodule?: string;
    }
}
declare namespace FormulationManagementSystems.Administration {
    interface RolePermissionListResponse extends Serenity.ListResponse<string> {
    }
}
declare namespace FormulationManagementSystems.Administration {
    interface RolePermissionRow {
        RolePermissionId?: number;
        RoleId?: number;
        PermissionKey?: string;
        RoleRoleName?: string;
    }
    namespace RolePermissionRow {
        const idProperty = "RolePermissionId";
        const nameProperty = "PermissionKey";
        const localTextPrefix = "Administration.RolePermission";
        const enum Fields {
            RolePermissionId,
            RoleId,
            PermissionKey,
            RoleRoleName,
        }
    }
}
declare namespace FormulationManagementSystems.Administration {
    namespace RolePermissionService {
        const baseUrl = "Administration/RolePermission";
        function Update(request: RolePermissionUpdateRequest, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: RolePermissionListRequest, onSuccess?: (response: RolePermissionListResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Update,
            List,
        }
    }
}
declare namespace FormulationManagementSystems.Administration {
    interface RolePermissionUpdateRequest extends Serenity.ServiceRequest {
        RoleID?: number;
        Module?: string;
        Submodule?: string;
        Permissions?: string[];
    }
}
declare namespace FormulationManagementSystems.Administration {
    interface RoleRow {
        RoleId?: number;
        RoleName?: string;
    }
    namespace RoleRow {
        const idProperty = "RoleId";
        const nameProperty = "RoleName";
        const localTextPrefix = "Administration.Role";
        const lookupKey = "Administration.Role";
        function getLookup(): Q.Lookup<RoleRow>;
        const enum Fields {
            RoleId,
            RoleName,
        }
    }
}
declare namespace FormulationManagementSystems.Administration {
    namespace RoleService {
        const baseUrl = "Administration/Role";
        function Create(request: Serenity.SaveRequest<RoleRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<RoleRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<RoleRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<RoleRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create,
            Update,
            Delete,
            Retrieve,
            List,
        }
    }
}
declare namespace FormulationManagementSystems.Administration {
    interface TranslationItem {
        Key?: string;
        SourceText?: string;
        TargetText?: string;
        CustomText?: string;
    }
}
declare namespace FormulationManagementSystems.Administration {
    interface TranslationListRequest extends Serenity.ListRequest {
        SourceLanguageID?: string;
        TargetLanguageID?: string;
    }
}
declare namespace FormulationManagementSystems.Administration {
    namespace TranslationService {
        const baseUrl = "Administration/Translation";
        function List(request: TranslationListRequest, onSuccess?: (response: Serenity.ListResponse<TranslationItem>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: TranslationUpdateRequest, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            List,
            Update,
        }
    }
}
declare namespace FormulationManagementSystems.Administration {
    interface TranslationUpdateRequest extends Serenity.ServiceRequest {
        TargetLanguageID?: string;
        Translations?: {
            [key: string]: string;
        };
    }
}
declare namespace FormulationManagementSystems.Administration {
}
declare namespace FormulationManagementSystems.Administration {
    interface UserForm {
        Username: Serenity.StringEditor;
        DisplayName: Serenity.StringEditor;
        Email: Serenity.EmailEditor;
        UserImage: Serenity.ImageUploadEditor;
        Password: Serenity.PasswordEditor;
        PasswordConfirm: Serenity.PasswordEditor;
        Source: Serenity.StringEditor;
    }
    class UserForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace FormulationManagementSystems.Administration {
    interface UserPermissionListRequest extends Serenity.ServiceRequest {
        UserID?: number;
        Module?: string;
        Submodule?: string;
    }
}
declare namespace FormulationManagementSystems.Administration {
    interface UserPermissionRow {
        UserPermissionId?: number;
        UserId?: number;
        PermissionKey?: string;
        Granted?: boolean;
        Username?: string;
        User?: string;
    }
    namespace UserPermissionRow {
        const idProperty = "UserPermissionId";
        const nameProperty = "PermissionKey";
        const localTextPrefix = "Administration.UserPermission";
        const enum Fields {
            UserPermissionId,
            UserId,
            PermissionKey,
            Granted,
            Username,
            User,
        }
    }
}
declare namespace FormulationManagementSystems.Administration {
    namespace UserPermissionService {
        const baseUrl = "Administration/UserPermission";
        function Update(request: UserPermissionUpdateRequest, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: UserPermissionListRequest, onSuccess?: (response: Serenity.ListResponse<UserPermissionRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function ListRolePermissions(request: UserPermissionListRequest, onSuccess?: (response: Serenity.ListResponse<string>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function ListPermissionKeys(request: Serenity.ServiceRequest, onSuccess?: (response: Serenity.ListResponse<string>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Update,
            List,
            ListRolePermissions,
            ListPermissionKeys,
        }
    }
}
declare namespace FormulationManagementSystems.Administration {
    interface UserPermissionUpdateRequest extends Serenity.ServiceRequest {
        UserID?: number;
        Module?: string;
        Submodule?: string;
        Permissions?: UserPermissionRow[];
    }
}
declare namespace FormulationManagementSystems.Administration {
    interface UserRoleListRequest extends Serenity.ServiceRequest {
        UserID?: number;
    }
}
declare namespace FormulationManagementSystems.Administration {
    interface UserRoleListResponse extends Serenity.ListResponse<number> {
    }
}
declare namespace FormulationManagementSystems.Administration {
    interface UserRoleRow {
        UserRoleId?: number;
        UserId?: number;
        RoleId?: number;
        Username?: string;
        User?: string;
    }
    namespace UserRoleRow {
        const idProperty = "UserRoleId";
        const localTextPrefix = "Administration.UserRole";
        const enum Fields {
            UserRoleId,
            UserId,
            RoleId,
            Username,
            User,
        }
    }
}
declare namespace FormulationManagementSystems.Administration {
    namespace UserRoleService {
        const baseUrl = "Administration/UserRole";
        function Update(request: UserRoleUpdateRequest, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: UserRoleListRequest, onSuccess?: (response: UserRoleListResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Update,
            List,
        }
    }
}
declare namespace FormulationManagementSystems.Administration {
    interface UserRoleUpdateRequest extends Serenity.ServiceRequest {
        UserID?: number;
        Roles?: number[];
    }
}
declare namespace FormulationManagementSystems.Administration {
    interface UserRow {
        UserId?: number;
        Username?: string;
        Source?: string;
        PasswordHash?: string;
        PasswordSalt?: string;
        DisplayName?: string;
        Email?: string;
        UserImage?: string;
        LastDirectoryUpdate?: string;
        IsActive?: number;
        Password?: string;
        PasswordConfirm?: string;
        InsertUserId?: number;
        InsertDate?: string;
        UpdateUserId?: number;
        UpdateDate?: string;
    }
    namespace UserRow {
        const idProperty = "UserId";
        const isActiveProperty = "IsActive";
        const nameProperty = "Username";
        const localTextPrefix = "Administration.User";
        const lookupKey = "Administration.User";
        function getLookup(): Q.Lookup<UserRow>;
        const enum Fields {
            UserId,
            Username,
            Source,
            PasswordHash,
            PasswordSalt,
            DisplayName,
            Email,
            UserImage,
            LastDirectoryUpdate,
            IsActive,
            Password,
            PasswordConfirm,
            InsertUserId,
            InsertDate,
            UpdateUserId,
            UpdateDate,
        }
    }
}
declare namespace FormulationManagementSystems.Administration {
    namespace UserService {
        const baseUrl = "Administration/User";
        function Create(request: Serenity.SaveRequest<UserRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<UserRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Undelete(request: Serenity.UndeleteRequest, onSuccess?: (response: Serenity.UndeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<UserRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<UserRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create,
            Update,
            Delete,
            Undelete,
            Retrieve,
            List,
        }
    }
}
declare namespace FormulationManagementSystems.BasicSamples {
    namespace BasicSamplesService {
        const baseUrl = "BasicSamples/BasicSamples";
        function OrdersByShipper(request: OrdersByShipperRequest, onSuccess?: (response: OrdersByShipperResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function OrderBulkAction(request: OrderBulkActionRequest, onSuccess?: (response: Serenity.ServiceResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            OrdersByShipper,
            OrderBulkAction,
        }
    }
}
declare namespace FormulationManagementSystems.BasicSamples {
    interface ChangingLookupTextForm {
        ProductID: ChangingLookupTextEditor;
        UnitPrice: Serenity.DecimalEditor;
        Quantity: Serenity.IntegerEditor;
        Discount: Serenity.DecimalEditor;
    }
    class ChangingLookupTextForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace FormulationManagementSystems.BasicSamples {
}
declare namespace FormulationManagementSystems.BasicSamples {
    interface CustomerGrossSalesListRequest extends Serenity.ListRequest {
        StartDate?: string;
        EndDate?: string;
    }
}
declare namespace FormulationManagementSystems.BasicSamples {
    namespace CustomerGrossSalesService {
        const baseUrl = "BasicSamples/CustomerGrossSales";
        function List(request: CustomerGrossSalesListRequest, onSuccess?: (response: Serenity.ListResponse<Northwind.CustomerGrossSalesRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            List,
        }
    }
}
declare namespace FormulationManagementSystems.BasicSamples {
}
declare namespace FormulationManagementSystems.BasicSamples {
    interface DragDropSampleForm {
        Title: Serenity.StringEditor;
    }
    class DragDropSampleForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace FormulationManagementSystems.BasicSamples {
    interface DragDropSampleRow {
        Id?: number;
        ParentId?: number;
        Title?: string;
    }
    namespace DragDropSampleRow {
        const idProperty = "Id";
        const nameProperty = "Title";
        const localTextPrefix = "Northwind.DragDropSample";
        const enum Fields {
            Id,
            ParentId,
            Title,
        }
    }
}
declare namespace FormulationManagementSystems.BasicSamples {
    namespace DragDropSampleService {
        const baseUrl = "BasicSamples/DragDropSample";
        function Create(request: Serenity.SaveRequest<DragDropSampleRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<DragDropSampleRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<DragDropSampleRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<DragDropSampleRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create,
            Update,
            Delete,
            Retrieve,
            List,
        }
    }
}
declare namespace FormulationManagementSystems.BasicSamples {
    interface FilteredLookupInDetailForm {
        CustomerID: Northwind.CustomerEditor;
        OrderDate: Serenity.DateEditor;
        CategoryID: Serenity.LookupEditor;
        DetailList: FilteredLookupDetailEditor;
    }
    class FilteredLookupInDetailForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace FormulationManagementSystems.BasicSamples {
    interface HardcodedValuesForm {
        SomeValue: HardcodedValuesEditor;
    }
    class HardcodedValuesForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace FormulationManagementSystems.BasicSamples {
}
declare namespace FormulationManagementSystems.BasicSamples {
    interface LookupFilterByMultipleForm {
        ProductName: Serenity.StringEditor;
        ProductImage: Serenity.ImageUploadEditor;
        Discontinued: Serenity.BooleanEditor;
        SupplierID: Serenity.LookupEditor;
        CategoryID: ProduceSeafoodCategoryEditor;
        QuantityPerUnit: Serenity.StringEditor;
        UnitPrice: Serenity.DecimalEditor;
        UnitsInStock: Serenity.IntegerEditor;
        UnitsOnOrder: Serenity.IntegerEditor;
        ReorderLevel: Serenity.IntegerEditor;
    }
    class LookupFilterByMultipleForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace FormulationManagementSystems.BasicSamples {
    interface OrderBulkActionRequest extends Serenity.ServiceRequest {
        OrderIDs?: number[];
    }
}
declare namespace FormulationManagementSystems.BasicSamples {
    interface OrdersByShipperRequest extends Serenity.ServiceRequest {
    }
}
declare namespace FormulationManagementSystems.BasicSamples {
    interface OrdersByShipperResponse extends Serenity.ServiceResponse {
        Values?: {
            [key: string]: any;
        }[];
        ShipperKeys?: string[];
        ShipperLabels?: string[];
    }
}
declare namespace FormulationManagementSystems.BasicSamples {
    interface PopulateLinkedDataForm {
        CustomerID: Northwind.CustomerEditor;
        CustomerContactName: Serenity.StringEditor;
        CustomerContactTitle: Serenity.StringEditor;
        CustomerCity: Serenity.StringEditor;
        CustomerRegion: Serenity.StringEditor;
        CustomerCountry: Serenity.StringEditor;
        CustomerPhone: Serenity.StringEditor;
        CustomerFax: Serenity.StringEditor;
        OrderDate: Serenity.DateEditor;
        RequiredDate: Serenity.DateEditor;
        EmployeeID: Serenity.LookupEditor;
        DetailList: Northwind.OrderDetailsEditor;
    }
    class PopulateLinkedDataForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace FormulationManagementSystems.BasicSamples {
    interface ProductExcelImportForm {
        FileName: Serenity.ImageUploadEditor;
    }
    class ProductExcelImportForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace FormulationManagementSystems.BasicSamples {
    namespace ProductExcelImportService {
        const baseUrl = "BasicSamples/ProductExcelImport";
        function ExcelImport(request: ExcelImportRequest, onSuccess?: (response: ExcelImportResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            ExcelImport,
        }
    }
}
declare namespace FormulationManagementSystems.BasicSamples {
    interface StaticTextBlockForm {
        StaticText: StaticTextBlock;
        SomeInput: Serenity.StringEditor;
        HtmlList: StaticTextBlock;
        FromLocalText: StaticTextBlock;
        DisplayFieldValue: StaticTextBlock;
    }
    class StaticTextBlockForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace FormulationManagementSystems.BasicSamples {
}
declare namespace FormulationManagementSystems.BasicSamples {
    interface VSGalleryQAPost {
        PostId?: number;
        PostedOn?: string;
        PostedByName?: string;
        PostedByUserId?: string;
        Message?: string;
    }
}
declare namespace FormulationManagementSystems.BasicSamples {
    namespace VSGalleryQAService {
        const baseUrl = "BasicSamples/VSGalleryQA";
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<VSGalleryQAThread>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            List,
        }
    }
}
declare namespace FormulationManagementSystems.BasicSamples {
    interface VSGalleryQAThread {
        ThreadId?: number;
        Title?: string;
        StartedOn?: string;
        StartedByName?: string;
        StartedByUserId?: string;
        LastPostOn?: string;
        PostCount?: number;
        Posts?: VSGalleryQAPost[];
    }
}
declare namespace FormulationManagementSystems.Common.Pages {
    interface UploadResponse extends Serenity.ServiceResponse {
        TemporaryFile?: string;
        Size?: number;
        IsImage?: boolean;
        Width?: number;
        Height?: number;
    }
}
declare namespace FormulationManagementSystems.Common {
    interface UserPreferenceRetrieveRequest extends Serenity.ServiceRequest {
        PreferenceType?: string;
        Name?: string;
    }
}
declare namespace FormulationManagementSystems.Common {
    interface UserPreferenceRetrieveResponse extends Serenity.ServiceResponse {
        Value?: string;
    }
}
declare namespace FormulationManagementSystems.Common {
    interface UserPreferenceRow {
        UserPreferenceId?: number;
        UserId?: number;
        PreferenceType?: string;
        Name?: string;
        Value?: string;
    }
    namespace UserPreferenceRow {
        const idProperty = "UserPreferenceId";
        const nameProperty = "Name";
        const localTextPrefix = "Common.UserPreference";
        const enum Fields {
            UserPreferenceId,
            UserId,
            PreferenceType,
            Name,
            Value,
        }
    }
}
declare namespace FormulationManagementSystems.Common {
    namespace UserPreferenceService {
        const baseUrl = "Common/UserPreference";
        function Update(request: UserPreferenceUpdateRequest, onSuccess?: (response: Serenity.ServiceResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: UserPreferenceRetrieveRequest, onSuccess?: (response: UserPreferenceRetrieveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Update,
            Retrieve,
        }
    }
}
declare namespace FormulationManagementSystems.Common {
    interface UserPreferenceUpdateRequest extends Serenity.ServiceRequest {
        PreferenceType?: string;
        Name?: string;
        Value?: string;
    }
}
declare namespace FormulationManagementSystems {
    interface ExcelImportRequest extends Serenity.ServiceRequest {
        FileName?: string;
    }
}
declare namespace FormulationManagementSystems {
    interface ExcelImportResponse extends Serenity.ServiceResponse {
        Inserted?: number;
        Updated?: number;
        ErrorList?: string[];
    }
}
declare namespace FormulationManagementSystems {
    interface GetNextNumberRequest extends Serenity.ServiceRequest {
        Prefix?: string;
        Length?: number;
    }
}
declare namespace FormulationManagementSystems {
    interface GetNextNumberResponse extends Serenity.ServiceResponse {
        Number?: number;
        Serial?: string;
    }
}
declare namespace FormulationManagementSystems.Membership {
    interface ChangePasswordForm {
        OldPassword: Serenity.PasswordEditor;
        NewPassword: Serenity.PasswordEditor;
        ConfirmPassword: Serenity.PasswordEditor;
    }
    class ChangePasswordForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace FormulationManagementSystems.Membership {
    interface ChangePasswordRequest extends Serenity.ServiceRequest {
        OldPassword?: string;
        NewPassword?: string;
        ConfirmPassword?: string;
    }
}
declare namespace FormulationManagementSystems.Membership {
    interface ForgotPasswordForm {
        Email: Serenity.EmailEditor;
    }
    class ForgotPasswordForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace FormulationManagementSystems.Membership {
    interface ForgotPasswordRequest extends Serenity.ServiceRequest {
        Email?: string;
    }
}
declare namespace FormulationManagementSystems.Membership {
    interface LoginForm {
        Username: Serenity.StringEditor;
        Password: Serenity.PasswordEditor;
    }
    class LoginForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace FormulationManagementSystems.Membership {
    interface LoginRequest extends Serenity.ServiceRequest {
        Username?: string;
        Password?: string;
    }
}
declare namespace FormulationManagementSystems.Membership {
    interface ResetPasswordForm {
        NewPassword: Serenity.PasswordEditor;
        ConfirmPassword: Serenity.PasswordEditor;
    }
    class ResetPasswordForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace FormulationManagementSystems.Membership {
    interface ResetPasswordRequest extends Serenity.ServiceRequest {
        Token?: string;
        NewPassword?: string;
        ConfirmPassword?: string;
    }
}
declare namespace FormulationManagementSystems.Membership {
    interface SignUpForm {
        DisplayName: Serenity.StringEditor;
        Email: Serenity.EmailEditor;
        ConfirmEmail: Serenity.EmailEditor;
        Password: Serenity.PasswordEditor;
        ConfirmPassword: Serenity.PasswordEditor;
    }
    class SignUpForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace FormulationManagementSystems.Membership {
    interface SignUpRequest extends Serenity.ServiceRequest {
        DisplayName?: string;
        Email?: string;
        Password?: string;
    }
}
declare namespace FormulationManagementSystems.Northwind {
}
declare namespace FormulationManagementSystems.Northwind {
    interface CategoryForm {
        CategoryName: Serenity.StringEditor;
        Description: Serenity.StringEditor;
    }
    class CategoryForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace FormulationManagementSystems.Northwind {
    interface CategoryLangRow {
        Id?: number;
        CategoryId?: number;
        LanguageId?: number;
        CategoryName?: string;
        Description?: string;
    }
    namespace CategoryLangRow {
        const idProperty = "Id";
        const nameProperty = "CategoryName";
        const localTextPrefix = "Northwind.CategoryLang";
        const enum Fields {
            Id,
            CategoryId,
            LanguageId,
            CategoryName,
            Description,
        }
    }
}
declare namespace FormulationManagementSystems.Northwind {
    namespace CategoryLangService {
        const baseUrl = "Northwind/CategoryLang";
        function Create(request: Serenity.SaveRequest<CategoryLangRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<CategoryLangRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<CategoryLangRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<CategoryLangRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create,
            Update,
            Delete,
            Retrieve,
            List,
        }
    }
}
declare namespace FormulationManagementSystems.Northwind {
    interface CategoryRow {
        CategoryID?: number;
        CategoryName?: string;
        Description?: string;
        Picture?: number[];
    }
    namespace CategoryRow {
        const idProperty = "CategoryID";
        const nameProperty = "CategoryName";
        const localTextPrefix = "Northwind.Category";
        const lookupKey = "Northwind.Category";
        function getLookup(): Q.Lookup<CategoryRow>;
        const enum Fields {
            CategoryID,
            CategoryName,
            Description,
            Picture,
        }
    }
}
declare namespace FormulationManagementSystems.Northwind {
    namespace CategoryService {
        const baseUrl = "Northwind/Category";
        function Create(request: Serenity.SaveRequest<CategoryRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<CategoryRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<CategoryRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<CategoryRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create,
            Update,
            Delete,
            Retrieve,
            List,
        }
    }
}
declare namespace FormulationManagementSystems.Northwind {
}
declare namespace FormulationManagementSystems.Northwind {
    interface CustomerCustomerDemoRow {
        ID?: number;
        CustomerID?: string;
        CustomerTypeID?: string;
        CustomerCompanyName?: string;
        CustomerContactName?: string;
        CustomerContactTitle?: string;
        CustomerAddress?: string;
        CustomerCity?: string;
        CustomerRegion?: string;
        CustomerPostalCode?: string;
        CustomerCountry?: string;
        CustomerPhone?: string;
        CustomerFax?: string;
        CustomerTypeCustomerDesc?: string;
    }
    namespace CustomerCustomerDemoRow {
        const idProperty = "ID";
        const nameProperty = "CustomerID";
        const localTextPrefix = "Northwind.CustomerCustomerDemo";
        const enum Fields {
            ID,
            CustomerID,
            CustomerTypeID,
            CustomerCompanyName,
            CustomerContactName,
            CustomerContactTitle,
            CustomerAddress,
            CustomerCity,
            CustomerRegion,
            CustomerPostalCode,
            CustomerCountry,
            CustomerPhone,
            CustomerFax,
            CustomerTypeCustomerDesc,
        }
    }
}
declare namespace FormulationManagementSystems.Northwind {
    interface CustomerDemographicRow {
        ID?: number;
        CustomerTypeID?: string;
        CustomerDesc?: string;
    }
    namespace CustomerDemographicRow {
        const idProperty = "ID";
        const nameProperty = "CustomerTypeID";
        const localTextPrefix = "Northwind.CustomerDemographic";
        const enum Fields {
            ID,
            CustomerTypeID,
            CustomerDesc,
        }
    }
}
declare namespace FormulationManagementSystems.Northwind {
    interface CustomerDetailsRow {
        Id?: number;
        LastContactDate?: string;
        LastContactedBy?: number;
        Email?: string;
        SendBulletin?: boolean;
        LastContactedByLastName?: string;
        LastContactedByFirstName?: string;
        LastContactedByTitle?: string;
        LastContactedByTitleOfCourtesy?: string;
        LastContactedByBirthDate?: string;
        LastContactedByHireDate?: string;
        LastContactedByAddress?: string;
        LastContactedByCity?: string;
        LastContactedByRegion?: string;
        LastContactedByPostalCode?: string;
        LastContactedByCountry?: string;
        LastContactedByHomePhone?: string;
        LastContactedByExtension?: string;
        LastContactedByPhoto?: number[];
        LastContactedByNotes?: string;
        LastContactedByReportsTo?: number;
        LastContactedByPhotoPath?: string;
    }
    namespace CustomerDetailsRow {
        const idProperty = "Id";
        const nameProperty = "Email";
        const localTextPrefix = "Northwind.CustomerDetails";
        const enum Fields {
            Id,
            LastContactDate,
            LastContactedBy,
            Email,
            SendBulletin,
            LastContactedByLastName,
            LastContactedByFirstName,
            LastContactedByTitle,
            LastContactedByTitleOfCourtesy,
            LastContactedByBirthDate,
            LastContactedByHireDate,
            LastContactedByAddress,
            LastContactedByCity,
            LastContactedByRegion,
            LastContactedByPostalCode,
            LastContactedByCountry,
            LastContactedByHomePhone,
            LastContactedByExtension,
            LastContactedByPhoto,
            LastContactedByNotes,
            LastContactedByReportsTo,
            LastContactedByPhotoPath,
        }
    }
}
declare namespace FormulationManagementSystems.Northwind {
    interface CustomerForm {
        CustomerID: Serenity.StringEditor;
        CompanyName: Serenity.StringEditor;
        ContactName: Serenity.StringEditor;
        ContactTitle: Serenity.StringEditor;
        Representatives: Serenity.LookupEditor;
        Address: Serenity.StringEditor;
        Country: Serenity.LookupEditor;
        City: Serenity.LookupEditor;
        Region: Serenity.StringEditor;
        PostalCode: Serenity.StringEditor;
        Phone: Serenity.StringEditor;
        Fax: Serenity.StringEditor;
        NoteList: NotesEditor;
        LastContactDate: Serenity.DateEditor;
        LastContactedBy: Serenity.LookupEditor;
        Email: Serenity.EmailEditor;
        SendBulletin: Serenity.BooleanEditor;
    }
    class CustomerForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace FormulationManagementSystems.Northwind {
    interface CustomerGrossSalesRow {
        CustomerId?: string;
        ContactName?: string;
        ProductId?: number;
        ProductName?: string;
        GrossAmount?: number;
    }
    namespace CustomerGrossSalesRow {
        const nameProperty = "ContactName";
        const localTextPrefix = "Northwind.CustomerGrossSales";
        const enum Fields {
            CustomerId,
            ContactName,
            ProductId,
            ProductName,
            GrossAmount,
        }
    }
}
declare namespace FormulationManagementSystems.Northwind {
    interface CustomerRepresentativesRow {
        RepresentativeId?: number;
        CustomerId?: number;
        EmployeeId?: number;
    }
    namespace CustomerRepresentativesRow {
        const idProperty = "RepresentativeId";
        const localTextPrefix = "Northwind.CustomerRepresentatives";
        const enum Fields {
            RepresentativeId,
            CustomerId,
            EmployeeId,
        }
    }
}
declare namespace FormulationManagementSystems.Northwind {
    interface CustomerRow {
        ID?: number;
        CustomerID?: string;
        CompanyName?: string;
        ContactName?: string;
        ContactTitle?: string;
        Address?: string;
        City?: string;
        Region?: string;
        PostalCode?: string;
        Country?: string;
        Phone?: string;
        Fax?: string;
        NoteList?: NoteRow[];
        Representatives?: number[];
        LastContactDate?: string;
        LastContactedBy?: number;
        Email?: string;
        SendBulletin?: boolean;
    }
    namespace CustomerRow {
        const idProperty = "ID";
        const nameProperty = "CompanyName";
        const localTextPrefix = "Northwind.Customer";
        const lookupKey = "Northwind.Customer";
        function getLookup(): Q.Lookup<CustomerRow>;
        const enum Fields {
            ID,
            CustomerID,
            CompanyName,
            ContactName,
            ContactTitle,
            Address,
            City,
            Region,
            PostalCode,
            Country,
            Phone,
            Fax,
            NoteList,
            Representatives,
            LastContactDate,
            LastContactedBy,
            Email,
            SendBulletin,
        }
    }
}
declare namespace FormulationManagementSystems.Northwind {
    namespace CustomerService {
        const baseUrl = "Northwind/Customer";
        function Create(request: Serenity.SaveRequest<CustomerRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<CustomerRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function GetNextNumber(request: GetNextNumberRequest, onSuccess?: (response: GetNextNumberResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<CustomerRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<CustomerRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create,
            Update,
            Delete,
            GetNextNumber,
            Retrieve,
            List,
        }
    }
}
declare namespace FormulationManagementSystems.Northwind {
    interface EmployeeRow {
        EmployeeID?: number;
        LastName?: string;
        FirstName?: string;
        FullName?: string;
        Title?: string;
        TitleOfCourtesy?: string;
        BirthDate?: string;
        HireDate?: string;
        Address?: string;
        City?: string;
        Region?: string;
        PostalCode?: string;
        Country?: string;
        HomePhone?: string;
        Extension?: string;
        Photo?: number[];
        Notes?: string;
        ReportsTo?: number;
        PhotoPath?: string;
        ReportsToFullName?: string;
        ReportsToLastName?: string;
        ReportsToFirstName?: string;
        ReportsToTitle?: string;
        ReportsToTitleOfCourtesy?: string;
        ReportsToBirthDate?: string;
        ReportsToHireDate?: string;
        ReportsToAddress?: string;
        ReportsToCity?: string;
        ReportsToRegion?: string;
        ReportsToPostalCode?: string;
        ReportsToCountry?: string;
        ReportsToHomePhone?: string;
        ReportsToExtension?: string;
        ReportsToPhoto?: number[];
        ReportsToNotes?: string;
        ReportsToReportsTo?: number;
        ReportsToPhotoPath?: string;
        Gender?: Gender;
    }
    namespace EmployeeRow {
        const idProperty = "EmployeeID";
        const nameProperty = "FullName";
        const localTextPrefix = "Northwind.Employee";
        const lookupKey = "Northwind.Employee";
        function getLookup(): Q.Lookup<EmployeeRow>;
        const enum Fields {
            EmployeeID,
            LastName,
            FirstName,
            FullName,
            Title,
            TitleOfCourtesy,
            BirthDate,
            HireDate,
            Address,
            City,
            Region,
            PostalCode,
            Country,
            HomePhone,
            Extension,
            Photo,
            Notes,
            ReportsTo,
            PhotoPath,
            ReportsToFullName,
            ReportsToLastName,
            ReportsToFirstName,
            ReportsToTitle,
            ReportsToTitleOfCourtesy,
            ReportsToBirthDate,
            ReportsToHireDate,
            ReportsToAddress,
            ReportsToCity,
            ReportsToRegion,
            ReportsToPostalCode,
            ReportsToCountry,
            ReportsToHomePhone,
            ReportsToExtension,
            ReportsToPhoto,
            ReportsToNotes,
            ReportsToReportsTo,
            ReportsToPhotoPath,
            Gender,
        }
    }
}
declare namespace FormulationManagementSystems.Northwind {
    interface EmployeeTerritoryRow {
        EmployeeID?: number;
        TerritoryID?: string;
        EmployeeLastName?: string;
        EmployeeFirstName?: string;
        EmployeeTitle?: string;
        EmployeeTitleOfCourtesy?: string;
        EmployeeBirthDate?: string;
        EmployeeHireDate?: string;
        EmployeeAddress?: string;
        EmployeeCity?: string;
        EmployeeRegion?: string;
        EmployeePostalCode?: string;
        EmployeeCountry?: string;
        EmployeeHomePhone?: string;
        EmployeeExtension?: string;
        EmployeePhoto?: number[];
        EmployeeNotes?: string;
        EmployeeReportsTo?: number;
        EmployeePhotoPath?: string;
        TerritoryTerritoryDescription?: string;
        TerritoryRegionID?: number;
    }
    namespace EmployeeTerritoryRow {
        const idProperty = "EmployeeID";
        const nameProperty = "TerritoryID";
        const localTextPrefix = "Northwind.EmployeeTerritory";
        const enum Fields {
            EmployeeID,
            TerritoryID,
            EmployeeLastName,
            EmployeeFirstName,
            EmployeeTitle,
            EmployeeTitleOfCourtesy,
            EmployeeBirthDate,
            EmployeeHireDate,
            EmployeeAddress,
            EmployeeCity,
            EmployeeRegion,
            EmployeePostalCode,
            EmployeeCountry,
            EmployeeHomePhone,
            EmployeeExtension,
            EmployeePhoto,
            EmployeeNotes,
            EmployeeReportsTo,
            EmployeePhotoPath,
            TerritoryTerritoryDescription,
            TerritoryRegionID,
        }
    }
}
declare namespace FormulationManagementSystems.Northwind {
    enum Gender {
        Male = 1,
        Female = 2,
    }
}
declare namespace FormulationManagementSystems.Northwind {
    interface NoteRow {
        NoteId?: number;
        EntityType?: string;
        EntityId?: number;
        Text?: string;
        InsertUserId?: number;
        InsertDate?: string;
        InsertUserDisplayName?: string;
    }
    namespace NoteRow {
        const idProperty = "NoteId";
        const nameProperty = "EntityType";
        const localTextPrefix = "Northwind.Note";
        const enum Fields {
            NoteId,
            EntityType,
            EntityId,
            Text,
            InsertUserId,
            InsertDate,
            InsertUserDisplayName,
        }
    }
}
declare namespace FormulationManagementSystems.Northwind {
}
declare namespace FormulationManagementSystems.Northwind {
}
declare namespace FormulationManagementSystems.Northwind {
    interface OrderDetailForm {
        ProductID: Serenity.LookupEditor;
        UnitPrice: Serenity.DecimalEditor;
        Quantity: Serenity.IntegerEditor;
        Discount: Serenity.DecimalEditor;
    }
    class OrderDetailForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace FormulationManagementSystems.Northwind {
    interface OrderDetailRow {
        DetailID?: number;
        OrderID?: number;
        ProductID?: number;
        UnitPrice?: number;
        Quantity?: number;
        Discount?: number;
        OrderCustomerID?: string;
        OrderEmployeeID?: number;
        OrderDate?: string;
        OrderShippedDate?: string;
        OrderShipVia?: number;
        OrderShipCity?: string;
        OrderShipCountry?: string;
        ProductName?: string;
        ProductDiscontinued?: boolean;
        ProductSupplierID?: number;
        ProductQuantityPerUnit?: string;
        ProductUnitPrice?: number;
        LineTotal?: number;
    }
    namespace OrderDetailRow {
        const idProperty = "DetailID";
        const localTextPrefix = "Northwind.OrderDetail";
        const enum Fields {
            DetailID,
            OrderID,
            ProductID,
            UnitPrice,
            Quantity,
            Discount,
            OrderCustomerID,
            OrderEmployeeID,
            OrderDate,
            OrderShippedDate,
            OrderShipVia,
            OrderShipCity,
            OrderShipCountry,
            ProductName,
            ProductDiscontinued,
            ProductSupplierID,
            ProductQuantityPerUnit,
            ProductUnitPrice,
            LineTotal,
        }
    }
}
declare namespace FormulationManagementSystems.Northwind {
    namespace OrderDetailService {
        const baseUrl = "Northwind/OrderDetail";
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<OrderDetailRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<OrderDetailRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Retrieve,
            List,
        }
    }
}
declare namespace FormulationManagementSystems.Northwind {
    interface OrderForm {
        CustomerID: CustomerEditor;
        OrderDate: Serenity.DateEditor;
        RequiredDate: Serenity.DateEditor;
        EmployeeID: Serenity.LookupEditor;
        DetailList: OrderDetailsEditor;
        ShippedDate: Serenity.DateEditor;
        ShipVia: Serenity.LookupEditor;
        Freight: Serenity.DecimalEditor;
        ShipName: Serenity.StringEditor;
        ShipAddress: Serenity.StringEditor;
        ShipCity: Serenity.StringEditor;
        ShipRegion: Serenity.StringEditor;
        ShipPostalCode: Serenity.StringEditor;
        ShipCountry: Serenity.StringEditor;
    }
    class OrderForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace FormulationManagementSystems.Northwind {
    interface OrderListRequest extends Serenity.ListRequest {
        ProductID?: number;
    }
}
declare namespace FormulationManagementSystems.Northwind {
    interface OrderRow {
        OrderID?: number;
        CustomerID?: string;
        EmployeeID?: number;
        OrderDate?: string;
        RequiredDate?: string;
        ShippedDate?: string;
        ShipVia?: number;
        Freight?: number;
        ShipName?: string;
        ShipAddress?: string;
        ShipCity?: string;
        ShipRegion?: string;
        ShipPostalCode?: string;
        ShipCountry?: string;
        CustomerCompanyName?: string;
        CustomerContactName?: string;
        CustomerContactTitle?: string;
        CustomerCity?: string;
        CustomerRegion?: string;
        CustomerCountry?: string;
        CustomerPhone?: string;
        CustomerFax?: string;
        EmployeeFullName?: string;
        EmployeeGender?: Gender;
        EmployeeReportsToFullName?: string;
        ShipViaCompanyName?: string;
        ShipViaPhone?: string;
        ShippingState?: OrderShippingState;
        DetailList?: OrderDetailRow[];
    }
    namespace OrderRow {
        const idProperty = "OrderID";
        const nameProperty = "CustomerID";
        const localTextPrefix = "Northwind.Order";
        const enum Fields {
            OrderID,
            CustomerID,
            EmployeeID,
            OrderDate,
            RequiredDate,
            ShippedDate,
            ShipVia,
            Freight,
            ShipName,
            ShipAddress,
            ShipCity,
            ShipRegion,
            ShipPostalCode,
            ShipCountry,
            CustomerCompanyName,
            CustomerContactName,
            CustomerContactTitle,
            CustomerCity,
            CustomerRegion,
            CustomerCountry,
            CustomerPhone,
            CustomerFax,
            EmployeeFullName,
            EmployeeGender,
            EmployeeReportsToFullName,
            ShipViaCompanyName,
            ShipViaPhone,
            ShippingState,
            DetailList,
        }
    }
}
declare namespace FormulationManagementSystems.Northwind {
    namespace OrderService {
        const baseUrl = "Northwind/Order";
        function Create(request: Serenity.SaveRequest<OrderRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<OrderRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<OrderRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: OrderListRequest, onSuccess?: (response: Serenity.ListResponse<OrderRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create,
            Update,
            Delete,
            Retrieve,
            List,
        }
    }
}
declare namespace FormulationManagementSystems.Northwind {
    enum OrderShippingState {
        NotShipped = 0,
        Shipped = 1,
    }
}
declare namespace FormulationManagementSystems.Northwind {
}
declare namespace FormulationManagementSystems.Northwind {
    interface ProductForm {
        ProductName: Serenity.StringEditor;
        ProductImage: Serenity.ImageUploadEditor;
        Discontinued: Serenity.BooleanEditor;
        SupplierID: Serenity.LookupEditor;
        CategoryID: Serenity.LookupEditor;
        QuantityPerUnit: Serenity.StringEditor;
        UnitPrice: Serenity.DecimalEditor;
        UnitsInStock: Serenity.IntegerEditor;
        UnitsOnOrder: Serenity.IntegerEditor;
        ReorderLevel: Serenity.IntegerEditor;
    }
    class ProductForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace FormulationManagementSystems.Northwind {
    interface ProductLangRow {
        Id?: number;
        ProductId?: number;
        LanguageId?: number;
        ProductName?: string;
    }
    namespace ProductLangRow {
        const idProperty = "Id";
        const nameProperty = "ProductName";
        const localTextPrefix = "Northwind.ProductLang";
        const enum Fields {
            Id,
            ProductId,
            LanguageId,
            ProductName,
        }
    }
}
declare namespace FormulationManagementSystems.Northwind {
    namespace ProductLangService {
        const baseUrl = "Northwind/ProductLang";
        function Create(request: Serenity.SaveRequest<ProductLangRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<ProductLangRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<ProductLangRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<ProductLangRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create,
            Update,
            Delete,
            Retrieve,
            List,
        }
    }
}
declare namespace FormulationManagementSystems.Northwind {
    interface ProductLogRow {
        ProductLogID?: number;
        OperationType?: Serenity.CaptureOperationType;
        ChangingUserId?: number;
        ValidFrom?: string;
        ValidUntil?: string;
        ProductID?: number;
        ProductName?: string;
        ProductImage?: string;
        Discontinued?: boolean;
        SupplierID?: number;
        CategoryID?: number;
        QuantityPerUnit?: string;
        UnitPrice?: number;
        UnitsInStock?: number;
        UnitsOnOrder?: number;
        ReorderLevel?: number;
    }
    namespace ProductLogRow {
        const idProperty = "ProductLogID";
        const localTextPrefix = "Northwind.ProductLog";
        const enum Fields {
            ProductLogID,
            OperationType,
            ChangingUserId,
            ValidFrom,
            ValidUntil,
            ProductID,
            ProductName,
            ProductImage,
            Discontinued,
            SupplierID,
            CategoryID,
            QuantityPerUnit,
            UnitPrice,
            UnitsInStock,
            UnitsOnOrder,
            ReorderLevel,
        }
    }
}
declare namespace FormulationManagementSystems.Northwind {
    interface ProductRow {
        ProductID?: number;
        ProductName?: string;
        ProductImage?: string;
        Discontinued?: boolean;
        SupplierID?: number;
        CategoryID?: number;
        QuantityPerUnit?: string;
        UnitPrice?: number;
        UnitsInStock?: number;
        UnitsOnOrder?: number;
        ReorderLevel?: number;
        SupplierCompanyName?: string;
        SupplierContactName?: string;
        SupplierContactTitle?: string;
        SupplierAddress?: string;
        SupplierCity?: string;
        SupplierRegion?: string;
        SupplierPostalCode?: string;
        SupplierCountry?: string;
        SupplierPhone?: string;
        SupplierFax?: string;
        SupplierHomePage?: string;
        CategoryName?: string;
        CategoryDescription?: string;
        CategoryPicture?: number[];
    }
    namespace ProductRow {
        const idProperty = "ProductID";
        const nameProperty = "ProductName";
        const localTextPrefix = "Northwind.Product";
        const lookupKey = "Northwind.Product";
        function getLookup(): Q.Lookup<ProductRow>;
        const enum Fields {
            ProductID,
            ProductName,
            ProductImage,
            Discontinued,
            SupplierID,
            CategoryID,
            QuantityPerUnit,
            UnitPrice,
            UnitsInStock,
            UnitsOnOrder,
            ReorderLevel,
            SupplierCompanyName,
            SupplierContactName,
            SupplierContactTitle,
            SupplierAddress,
            SupplierCity,
            SupplierRegion,
            SupplierPostalCode,
            SupplierCountry,
            SupplierPhone,
            SupplierFax,
            SupplierHomePage,
            CategoryName,
            CategoryDescription,
            CategoryPicture,
        }
    }
}
declare namespace FormulationManagementSystems.Northwind {
    namespace ProductService {
        const baseUrl = "Northwind/Product";
        function Create(request: Serenity.SaveRequest<ProductRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<ProductRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<ProductRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<ProductRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create,
            Update,
            Delete,
            Retrieve,
            List,
        }
    }
}
declare namespace FormulationManagementSystems.Northwind {
}
declare namespace FormulationManagementSystems.Northwind {
    interface RegionForm {
        RegionID: Serenity.IntegerEditor;
        RegionDescription: Serenity.StringEditor;
    }
    class RegionForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace FormulationManagementSystems.Northwind {
    interface RegionRow {
        RegionID?: number;
        RegionDescription?: string;
    }
    namespace RegionRow {
        const idProperty = "RegionID";
        const nameProperty = "RegionDescription";
        const localTextPrefix = "Northwind.Region";
        const lookupKey = "Northwind.Region";
        function getLookup(): Q.Lookup<RegionRow>;
        const enum Fields {
            RegionID,
            RegionDescription,
        }
    }
}
declare namespace FormulationManagementSystems.Northwind {
    namespace RegionService {
        const baseUrl = "Northwind/Region";
        function Create(request: Serenity.SaveRequest<RegionRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<RegionRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<RegionRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<RegionRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create,
            Update,
            Delete,
            Retrieve,
            List,
        }
    }
}
declare namespace FormulationManagementSystems.Northwind {
}
declare namespace FormulationManagementSystems.Northwind {
    interface SalesByCategoryRow {
        CategoryId?: number;
        CategoryName?: string;
        ProductName?: string;
        ProductSales?: number;
    }
    namespace SalesByCategoryRow {
        const nameProperty = "CategoryName";
        const localTextPrefix = "Northwind.SalesByCategory";
        const enum Fields {
            CategoryId,
            CategoryName,
            ProductName,
            ProductSales,
        }
    }
}
declare namespace FormulationManagementSystems.Northwind {
    namespace SalesByCategoryService {
        const baseUrl = "Northwind/SalesByCategory";
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<SalesByCategoryRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            List,
        }
    }
}
declare namespace FormulationManagementSystems.Northwind {
}
declare namespace FormulationManagementSystems.Northwind {
    interface ShipperForm {
        CompanyName: Serenity.StringEditor;
        Phone: PhoneEditor;
    }
    class ShipperForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace FormulationManagementSystems.Northwind {
    interface ShipperRow {
        ShipperID?: number;
        CompanyName?: string;
        Phone?: string;
    }
    namespace ShipperRow {
        const idProperty = "ShipperID";
        const nameProperty = "CompanyName";
        const localTextPrefix = "Northwind.Shipper";
        const lookupKey = "Northwind.Shipper";
        function getLookup(): Q.Lookup<ShipperRow>;
        const enum Fields {
            ShipperID,
            CompanyName,
            Phone,
        }
    }
}
declare namespace FormulationManagementSystems.Northwind {
    namespace ShipperService {
        const baseUrl = "Northwind/Shipper";
        function Create(request: Serenity.SaveRequest<ShipperRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<ShipperRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<ShipperRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<ShipperRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create,
            Update,
            Delete,
            Retrieve,
            List,
        }
    }
}
declare namespace FormulationManagementSystems.Northwind {
}
declare namespace FormulationManagementSystems.Northwind {
    interface SupplierForm {
        CompanyName: Serenity.StringEditor;
        ContactName: Serenity.StringEditor;
        ContactTitle: Serenity.StringEditor;
        Address: Serenity.StringEditor;
        Region: Serenity.StringEditor;
        PostalCode: Serenity.StringEditor;
        Country: Serenity.StringEditor;
        City: Serenity.StringEditor;
        Phone: Serenity.StringEditor;
        Fax: Serenity.StringEditor;
        HomePage: Serenity.StringEditor;
    }
    class SupplierForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace FormulationManagementSystems.Northwind {
    interface SupplierRow {
        SupplierID?: number;
        CompanyName?: string;
        ContactName?: string;
        ContactTitle?: string;
        Address?: string;
        City?: string;
        Region?: string;
        PostalCode?: string;
        Country?: string;
        Phone?: string;
        Fax?: string;
        HomePage?: string;
    }
    namespace SupplierRow {
        const idProperty = "SupplierID";
        const nameProperty = "CompanyName";
        const localTextPrefix = "Northwind.Supplier";
        const lookupKey = "Northwind.Supplier";
        function getLookup(): Q.Lookup<SupplierRow>;
        const enum Fields {
            SupplierID,
            CompanyName,
            ContactName,
            ContactTitle,
            Address,
            City,
            Region,
            PostalCode,
            Country,
            Phone,
            Fax,
            HomePage,
        }
    }
}
declare namespace FormulationManagementSystems.Northwind {
    namespace SupplierService {
        const baseUrl = "Northwind/Supplier";
        function Create(request: Serenity.SaveRequest<SupplierRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<SupplierRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<SupplierRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<SupplierRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create,
            Update,
            Delete,
            Retrieve,
            List,
        }
    }
}
declare namespace FormulationManagementSystems.Northwind {
}
declare namespace FormulationManagementSystems.Northwind {
    interface TerritoryForm {
        TerritoryID: Serenity.StringEditor;
        TerritoryDescription: Serenity.StringEditor;
        RegionID: Serenity.LookupEditor;
    }
    class TerritoryForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace FormulationManagementSystems.Northwind {
    interface TerritoryRow {
        ID?: number;
        TerritoryID?: string;
        TerritoryDescription?: string;
        RegionID?: number;
        RegionDescription?: string;
    }
    namespace TerritoryRow {
        const idProperty = "ID";
        const nameProperty = "TerritoryID";
        const localTextPrefix = "Northwind.Territory";
        const lookupKey = "Northwind.Territory";
        function getLookup(): Q.Lookup<TerritoryRow>;
        const enum Fields {
            ID,
            TerritoryID,
            TerritoryDescription,
            RegionID,
            RegionDescription,
        }
    }
}
declare namespace FormulationManagementSystems.Northwind {
    namespace TerritoryService {
        const baseUrl = "Northwind/Territory";
        function Create(request: Serenity.SaveRequest<TerritoryRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<TerritoryRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<TerritoryRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<TerritoryRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create,
            Update,
            Delete,
            Retrieve,
            List,
        }
    }
}
declare namespace FormulationManagementSystems {
    interface ScriptUserDefinition {
        Username?: string;
        DisplayName?: string;
        IsAdmin?: boolean;
        Permissions?: {
            [key: string]: boolean;
        };
    }
}
declare namespace FormulationManagementSystems.VDSCSQL {
    class AdditonFormForm extends Serenity.PrefixedContext {
        static formKey: string;
    }
    interface AdditonFormForm {
        FormId: Serenity.IntegerEditor;
        Description: Serenity.StringEditor;
    }
}
declare namespace FormulationManagementSystems.VDSCSQL {
    interface AdditonFormRow {
        Id?: number;
        FormId?: number;
        Description?: string;
    }
    namespace AdditonFormRow {
        const idProperty = "Id";
        const nameProperty = "Description";
        const localTextPrefix = "VDSCSQL.AdditonForm";
        namespace Fields {
            const Id: any;
            const FormId: any;
            const Description: any;
        }
    }
}
declare namespace FormulationManagementSystems.VDSCSQL {
    namespace AdditonFormService {
        const baseUrl = "VDSCSQL/AdditonForm";
        function Create(request: Serenity.SaveRequest<AdditonFormRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<AdditonFormRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<AdditonFormRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<AdditonFormRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        namespace Methods {
            const Create: string;
            const Update: string;
            const Delete: string;
            const Retrieve: string;
            const List: string;
        }
    }
}
declare namespace FormulationManagementSystems.VDSCSQL {
    class BulkBatchDataForm extends Serenity.PrefixedContext {
        static formKey: string;
    }
    interface BulkBatchDataForm {
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
}
declare namespace FormulationManagementSystems.VDSCSQL {
    interface BulkBatchDataRow {
        Id?: number;
        BulkBatchId?: number;
        SourceTank?: string;
        DestinationTank?: string;
        Ingredient?: string;
        IngredientNumber?: number;
        Phase?: string;
        PhaseNumber?: number;
        StartTime?: string;
        EndTime?: string;
        Operator?: string;
        SupervisorOverride?: string;
        AdditionQty?: number;
        Status?: string;
        ScaleCheckOperator?: string;
        ScaleCheckWt?: number;
        ScaleId?: string;
        ValvesOpen?: string;
        ValveOpenBypass?: string;
        ValvesClose?: string;
        ValveCloseBypass?: string;
        RecipePhaseId?: number;
        CurrentStepIndex?: number;
        OperatorId?: number;
        SupervisorOverrideId?: number;
        SrcStartWt?: number;
        DstStartWt?: number;
        SrcEndWt?: number;
        DstEndWt?: number;
        PhaseTankRemembered?: string;
    }
    namespace BulkBatchDataRow {
        const idProperty = "Id";
        const nameProperty = "SourceTank";
        const localTextPrefix = "VDSCSQL.BulkBatchData";
        namespace Fields {
            const Id: any;
            const BulkBatchId: any;
            const SourceTank: any;
            const DestinationTank: any;
            const Ingredient: any;
            const IngredientNumber: any;
            const Phase: any;
            const PhaseNumber: any;
            const StartTime: any;
            const EndTime: any;
            const Operator: any;
            const SupervisorOverride: any;
            const AdditionQty: any;
            const Status: any;
            const ScaleCheckOperator: any;
            const ScaleCheckWt: any;
            const ScaleId: any;
            const ValvesOpen: any;
            const ValveOpenBypass: any;
            const ValvesClose: any;
            const ValveCloseBypass: any;
            const RecipePhaseId: any;
            const CurrentStepIndex: any;
            const OperatorId: any;
            const SupervisorOverrideId: any;
            const SrcStartWt: any;
            const DstStartWt: any;
            const SrcEndWt: any;
            const DstEndWt: any;
            const PhaseTankRemembered: any;
        }
    }
}
declare namespace FormulationManagementSystems.VDSCSQL {
    namespace BulkBatchDataService {
        const baseUrl = "VDSCSQL/BulkBatchData";
        function Create(request: Serenity.SaveRequest<BulkBatchDataRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<BulkBatchDataRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<BulkBatchDataRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<BulkBatchDataRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        namespace Methods {
            const Create: string;
            const Update: string;
            const Delete: string;
            const Retrieve: string;
            const List: string;
        }
    }
}
declare namespace FormulationManagementSystems.VDSCSQL {
    class BulkBatchForm extends Serenity.PrefixedContext {
        static formKey: string;
    }
    interface BulkBatchForm {
        ProductionRequestId: Serenity.IntegerEditor;
        BatchNumber: Serenity.IntegerEditor;
        BatchTank: Serenity.StringEditor;
        DateCreated: Serenity.DateEditor;
        DateCompleted: Serenity.DateEditor;
        BatchQuantity: Serenity.DecimalEditor;
        BatchActive: Serenity.BooleanEditor;
        FpQty: Serenity.IntegerEditor;
        ReceivingTank: Serenity.StringEditor;
        RecipeId: Serenity.IntegerEditor;
    }
}
declare namespace FormulationManagementSystems.VDSCSQL {
    interface BulkBatchRow {
        Id?: number;
        ProductionRequestId?: number;
        BatchNumber?: number;
        BatchTank?: string;
        DateCreated?: string;
        DateCompleted?: string;
        BatchQuantity?: number;
        BatchActive?: boolean;
        FpQty?: number;
        ReceivingTank?: string;
        RecipeId?: number;
        ProductionRequestDateCreated?: string;
        ProductionRequestCustomerId?: number;
        ProductionRequestMaterialId?: number;
        ProductionRequestRecipeId?: number;
        ProductionRequestVdscAreaId?: number;
        ProductionRequestQuantityRequested?: number;
        ProductionRequestOperators?: number;
        ProductionRequestStatus?: string;
        ProductionRequestBeginDate?: string;
        ProductionRequestEndDate?: string;
        ProductionRequestAttachments?: string;
        ProductionRequestNotes?: string;
        ProductionRequestUseAlternateRecipe?: boolean;
        ProductionRequestComputeBatch?: boolean;
    }
    namespace BulkBatchRow {
        const idProperty = "Id";
        const nameProperty = "BatchTank";
        const localTextPrefix = "VDSCSQL.BulkBatch";
        namespace Fields {
            const Id: any;
            const ProductionRequestId: any;
            const BatchNumber: any;
            const BatchTank: any;
            const DateCreated: any;
            const DateCompleted: any;
            const BatchQuantity: any;
            const BatchActive: any;
            const FpQty: any;
            const ReceivingTank: any;
            const RecipeId: any;
            const ProductionRequestDateCreated: any;
            const ProductionRequestCustomerId: any;
            const ProductionRequestMaterialId: any;
            const ProductionRequestRecipeId: any;
            const ProductionRequestVdscAreaId: any;
            const ProductionRequestQuantityRequested: any;
            const ProductionRequestOperators: any;
            const ProductionRequestStatus: any;
            const ProductionRequestBeginDate: any;
            const ProductionRequestEndDate: any;
            const ProductionRequestAttachments: any;
            const ProductionRequestNotes: any;
            const ProductionRequestUseAlternateRecipe: any;
            const ProductionRequestComputeBatch: any;
        }
    }
}
declare namespace FormulationManagementSystems.VDSCSQL {
    namespace BulkBatchService {
        const baseUrl = "VDSCSQL/BulkBatch";
        function Create(request: Serenity.SaveRequest<BulkBatchRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<BulkBatchRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<BulkBatchRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<BulkBatchRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        namespace Methods {
            const Create: string;
            const Update: string;
            const Delete: string;
            const Retrieve: string;
            const List: string;
        }
    }
}
declare namespace FormulationManagementSystems.VDSCSQL {
    class BulkScanForm extends Serenity.PrefixedContext {
        static formKey: string;
    }
    interface BulkScanForm {
        BulkBatchDataId: Serenity.IntegerEditor;
        Barcode: Serenity.StringEditor;
        ScanDate: Serenity.DateEditor;
        MaterialQty: Serenity.DecimalEditor;
        Operator: Serenity.StringEditor;
        LotNumber: Serenity.StringEditor;
        QtyDate: Serenity.DateEditor;
    }
}
declare namespace FormulationManagementSystems.VDSCSQL {
    interface BulkScanRow {
        Id?: number;
        BulkBatchDataId?: number;
        Barcode?: string;
        ScanDate?: string;
        MaterialQty?: number;
        Operator?: string;
        LotNumber?: string;
        QtyDate?: string;
    }
    namespace BulkScanRow {
        const idProperty = "Id";
        const nameProperty = "Barcode";
        const localTextPrefix = "VDSCSQL.BulkScan";
        namespace Fields {
            const Id: any;
            const BulkBatchDataId: any;
            const Barcode: any;
            const ScanDate: any;
            const MaterialQty: any;
            const Operator: any;
            const LotNumber: any;
            const QtyDate: any;
        }
    }
}
declare namespace FormulationManagementSystems.VDSCSQL {
    namespace BulkScanService {
        const baseUrl = "VDSCSQL/BulkScan";
        function Create(request: Serenity.SaveRequest<BulkScanRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<BulkScanRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<BulkScanRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<BulkScanRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        namespace Methods {
            const Create: string;
            const Update: string;
            const Delete: string;
            const Retrieve: string;
            const List: string;
        }
    }
}
declare namespace FormulationManagementSystems.VDSCSQL {
    class BulkStorageTankForm extends Serenity.PrefixedContext {
        static formKey: string;
    }
    interface BulkStorageTankForm {
        CustomerId: Serenity.IntegerEditor;
        MaterialId: Serenity.IntegerEditor;
        Product: Serenity.StringEditor;
        Building: Serenity.StringEditor;
        Bay: Serenity.StringEditor;
        Tank: Serenity.StringEditor;
        Capacity: Serenity.DecimalEditor;
        Dimension: Serenity.StringEditor;
        VaporPressureAdjustedTo76F: Serenity.DecimalEditor;
        VaporPressure: Serenity.DecimalEditor;
        StrapChart: Serenity.IntegerEditor;
        ShipmentClearance: Serenity.BooleanEditor;
        TankBarcode: Serenity.StringEditor;
        BulkTank: Serenity.BooleanEditor;
        FlashPoint: Serenity.StringEditor;
    }
}
declare namespace FormulationManagementSystems.VDSCSQL {
    interface BulkStorageTankRow {
        Id?: number;
        CustomerId?: number;
        MaterialId?: number;
        Product?: string;
        Building?: string;
        Bay?: string;
        Tank?: string;
        Capacity?: number;
        Dimension?: string;
        VaporPressureAdjustedTo76F?: number;
        VaporPressure?: number;
        StrapChart?: number;
        ShipmentClearance?: boolean;
        TankBarcode?: string;
        BulkTank?: boolean;
        FlashPoint?: string;
        CustomerCompany?: string;
        CustomerCustomerIdent?: string;
        CustomerName?: string;
        MaterialVdscCode?: string;
        MaterialDescription?: string;
        MaterialCustomerId?: number;
        MaterialCustomerIdent?: string;
        MaterialGmid?: string;
        MaterialCustomerPartNumber?: string;
        MaterialUnitOfMeasure?: string;
        MaterialDensity?: number;
        MaterialUnitQty?: number;
        MaterialMaterialCode?: string;
        MaterialMaterialType?: string;
        MaterialProductionGoal?: number;
        MaterialDiscontinued?: boolean;
        MaterialMsds?: string;
        MaterialPalletSpaceWt?: number;
        MaterialBulkSr?: boolean;
        MaterialDrysr?: boolean;
        MaterialHotBoxItem?: boolean;
        MaterialBarcode?: string;
    }
    namespace BulkStorageTankRow {
        const idProperty = "Id";
        const nameProperty = "Product";
        const localTextPrefix = "VDSCSQL.BulkStorageTank";
        namespace Fields {
            const Id: any;
            const CustomerId: any;
            const MaterialId: any;
            const Product: any;
            const Building: any;
            const Bay: any;
            const Tank: any;
            const Capacity: any;
            const Dimension: any;
            const VaporPressureAdjustedTo76F: any;
            const VaporPressure: any;
            const StrapChart: any;
            const ShipmentClearance: any;
            const TankBarcode: any;
            const BulkTank: any;
            const FlashPoint: any;
            const CustomerCompany: any;
            const CustomerCustomerIdent: any;
            const CustomerName: any;
            const MaterialVdscCode: any;
            const MaterialDescription: any;
            const MaterialCustomerId: any;
            const MaterialCustomerIdent: any;
            const MaterialGmid: any;
            const MaterialCustomerPartNumber: any;
            const MaterialUnitOfMeasure: any;
            const MaterialDensity: any;
            const MaterialUnitQty: any;
            const MaterialMaterialCode: any;
            const MaterialMaterialType: any;
            const MaterialProductionGoal: any;
            const MaterialDiscontinued: any;
            const MaterialMsds: any;
            const MaterialPalletSpaceWt: any;
            const MaterialBulkSr: any;
            const MaterialDrysr: any;
            const MaterialHotBoxItem: any;
            const MaterialBarcode: any;
        }
    }
}
declare namespace FormulationManagementSystems.VDSCSQL {
    namespace BulkStorageTankService {
        const baseUrl = "VDSCSQL/BulkStorageTank";
        function Create(request: Serenity.SaveRequest<BulkStorageTankRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<BulkStorageTankRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<BulkStorageTankRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<BulkStorageTankRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        namespace Methods {
            const Create: string;
            const Update: string;
            const Delete: string;
            const Retrieve: string;
            const List: string;
        }
    }
}
declare namespace FormulationManagementSystems.VDSCSQL {
    class ConsumptionForm extends Serenity.PrefixedContext {
        static formKey: string;
    }
    interface ConsumptionForm {
        RecipePhaseId: Serenity.IntegerEditor;
        IngredientNumber: Serenity.IntegerEditor;
        IngredientMaterialId: Serenity.IntegerEditor;
        Percentage: Serenity.DecimalEditor;
        OptionalIngredient: Serenity.BooleanEditor;
        SrcDstPathIds: Serenity.StringEditor;
        TimeExpectation: Serenity.IntegerEditor;
        OpPrcHighLmt: Serenity.DecimalEditor;
        OpPrcLwLmt: Serenity.DecimalEditor;
        TlPrcHighLmt: Serenity.DecimalEditor;
        TlPrcLwLmt: Serenity.DecimalEditor;
        StepDescription: Serenity.StringEditor;
        HTemp1: Serenity.IntegerEditor;
        LTemp1: Serenity.IntegerEditor;
        AmPrcHighLmt: Serenity.DecimalEditor;
        AmPrcLwLmt: Serenity.DecimalEditor;
    }
}
declare namespace FormulationManagementSystems.VDSCSQL {
    interface ConsumptionRow {
        Id?: number;
        RecipePhaseId?: number;
        IngredientNumber?: number;
        IngredientMaterialId?: number;
        Percentage?: number;
        OptionalIngredient?: boolean;
        SrcDstPathIds?: string;
        TimeExpectation?: number;
        OpPrcHighLmt?: number;
        OpPrcLwLmt?: number;
        TlPrcHighLmt?: number;
        TlPrcLwLmt?: number;
        StepDescription?: string;
        HTemp1?: number;
        LTemp1?: number;
        AmPrcHighLmt?: number;
        AmPrcLwLmt?: number;
        RecipePhaseRecipeId?: number;
        RecipePhasePhaseName?: string;
        RecipePhasePhaseNumber?: number;
        RecipePhasePhaseOptional?: boolean;
        RecipePhaseProcedure?: string;
        RecipePhasePackagingInstructions?: string;
        IngredientMaterialVdscCode?: string;
        IngredientMaterialDescription?: string;
        IngredientMaterialCustomerId?: number;
        IngredientMaterialCustomerIdent?: string;
        IngredientMaterialGmid?: string;
        IngredientMaterialCustomerPartNumber?: string;
        IngredientMaterialUnitOfMeasure?: string;
        IngredientMaterialDensity?: number;
        IngredientMaterialUnitQty?: number;
        IngredientMaterialMaterialCode?: string;
        IngredientMaterialMaterialType?: string;
        IngredientMaterialProductionGoal?: number;
        IngredientMaterialDiscontinued?: boolean;
        IngredientMaterialMsds?: string;
        IngredientMaterialPalletSpaceWt?: number;
        IngredientMaterialBulkSr?: boolean;
        IngredientMaterialDrysr?: boolean;
        IngredientMaterialHotBoxItem?: boolean;
        IngredientMaterialBarcode?: string;
    }
    namespace ConsumptionRow {
        const idProperty = "Id";
        const nameProperty = "SrcDstPathIds";
        const localTextPrefix = "VDSCSQL.Consumption";
        namespace Fields {
            const Id: any;
            const RecipePhaseId: any;
            const IngredientNumber: any;
            const IngredientMaterialId: any;
            const Percentage: any;
            const OptionalIngredient: any;
            const SrcDstPathIds: any;
            const TimeExpectation: any;
            const OpPrcHighLmt: any;
            const OpPrcLwLmt: any;
            const TlPrcHighLmt: any;
            const TlPrcLwLmt: any;
            const StepDescription: any;
            const HTemp1: any;
            const LTemp1: any;
            const AmPrcHighLmt: any;
            const AmPrcLwLmt: any;
            const RecipePhaseRecipeId: any;
            const RecipePhasePhaseName: any;
            const RecipePhasePhaseNumber: any;
            const RecipePhasePhaseOptional: any;
            const RecipePhaseProcedure: any;
            const RecipePhasePackagingInstructions: any;
            const IngredientMaterialVdscCode: any;
            const IngredientMaterialDescription: any;
            const IngredientMaterialCustomerId: any;
            const IngredientMaterialCustomerIdent: any;
            const IngredientMaterialGmid: any;
            const IngredientMaterialCustomerPartNumber: any;
            const IngredientMaterialUnitOfMeasure: any;
            const IngredientMaterialDensity: any;
            const IngredientMaterialUnitQty: any;
            const IngredientMaterialMaterialCode: any;
            const IngredientMaterialMaterialType: any;
            const IngredientMaterialProductionGoal: any;
            const IngredientMaterialDiscontinued: any;
            const IngredientMaterialMsds: any;
            const IngredientMaterialPalletSpaceWt: any;
            const IngredientMaterialBulkSr: any;
            const IngredientMaterialDrysr: any;
            const IngredientMaterialHotBoxItem: any;
            const IngredientMaterialBarcode: any;
        }
    }
}
declare namespace FormulationManagementSystems.VDSCSQL {
    namespace ConsumptionService {
        const baseUrl = "VDSCSQL/Consumption";
        function Create(request: Serenity.SaveRequest<ConsumptionRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<ConsumptionRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<ConsumptionRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<ConsumptionRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        namespace Methods {
            const Create: string;
            const Update: string;
            const Delete: string;
            const Retrieve: string;
            const List: string;
        }
    }
}
declare namespace FormulationManagementSystems.VDSCSQL {
    class CustomerForm extends Serenity.PrefixedContext {
        static formKey: string;
    }
    interface CustomerForm {
        Company: Serenity.StringEditor;
        CustomerIdent: Serenity.StringEditor;
        CustomerName: Serenity.StringEditor;
    }
}
declare namespace FormulationManagementSystems.VDSCSQL {
    interface CustomerRow {
        Id?: number;
        Company?: string;
        CustomerIdent?: string;
        CustomerName?: string;
    }
    namespace CustomerRow {
        const idProperty = "Id";
        const nameProperty = "Company";
        const localTextPrefix = "VDSCSQL.Customer";
        namespace Fields {
            const Id: any;
            const Company: any;
            const CustomerIdent: any;
            const CustomerName: any;
        }
    }
}
declare namespace FormulationManagementSystems.VDSCSQL {
    namespace CustomerService {
        const baseUrl = "VDSCSQL/Customer";
        function Create(request: Serenity.SaveRequest<CustomerRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<CustomerRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<CustomerRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<CustomerRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        namespace Methods {
            const Create: string;
            const Update: string;
            const Delete: string;
            const Retrieve: string;
            const List: string;
        }
    }
}
declare namespace FormulationManagementSystems.VDSCSQL {
    class EmployeeForm extends Serenity.PrefixedContext {
        static formKey: string;
    }
    interface EmployeeForm {
        EmployeeIdent1: Serenity.StringEditor;
        VdscAreaId1: Serenity.IntegerEditor;
        FirstName1: Serenity.StringEditor;
        LastName1: Serenity.StringEditor;
        TeamLeader1: Serenity.BooleanEditor;
        AreaManager1: Serenity.BooleanEditor;
        OvertimePreference1: Serenity.BooleanEditor;
        Shift1: Serenity.StringEditor;
        ForkliftLicense1: Serenity.BooleanEditor;
        ShippingEmployee1: Serenity.BooleanEditor;
        EmploymentTerminated1: Serenity.BooleanEditor;
        EmpTermDate1: Serenity.DateEditor;
        EmpTermReason1: Serenity.StringEditor;
        VdscDepartmentId1: Serenity.IntegerEditor;
        EmpStartDate1: Serenity.DateEditor;
        EmpPhoneNum1: Serenity.StringEditor;
        EmpPhoneNum21: Serenity.StringEditor;
        EmpAddress1: Serenity.StringEditor;
        EmpTitle1: Serenity.StringEditor;
        EmpTimeCardNum1: Serenity.StringEditor;
        EmpLockerNum1: Serenity.StringEditor;
        UserName1: Serenity.StringEditor;
        Password1: Serenity.StringEditor;
    }
}
declare namespace FormulationManagementSystems.VDSCSQL {
    class EmployeeOvertimeForm extends Serenity.PrefixedContext {
        static formKey: string;
    }
    interface EmployeeOvertimeForm {
        EmployeeId: Serenity.IntegerEditor;
        DateWorked: Serenity.DateEditor;
        VdscAreaId: Serenity.IntegerEditor;
        Product: Serenity.StringEditor;
        DaysOfOvertimeWorked: Serenity.IntegerEditor;
    }
}
declare namespace FormulationManagementSystems.VDSCSQL {
    interface EmployeeOvertimeRow {
        Id?: number;
        EmployeeId?: number;
        DateWorked?: string;
        VdscAreaId?: number;
        Product?: string;
        DaysOfOvertimeWorked?: number;
        EmployeeIdent?: string;
        EmployeeVdscAreaId?: number;
        EmployeeFirstName?: string;
        EmployeeLastName?: string;
        EmployeeTeamLeader?: boolean;
        EmployeeAreaManager?: boolean;
        EmployeeOvertimePreference?: boolean;
        EmployeeShift?: string;
        EmployeeForkliftLicense?: boolean;
        EmployeeShippingEmployee?: boolean;
        EmployeeEmploymentTerminated?: boolean;
        EmployeeEmpTermDate?: string;
        EmployeeEmpTermReason?: string;
        EmployeeVdscDepartmentId?: number;
        EmployeeEmpStartDate?: string;
        EmployeeEmpPhoneNum?: string;
        EmployeeEmpPhoneNum2?: string;
        EmployeeEmpAddress?: string;
        EmployeeEmpTitle?: string;
        EmployeeEmpTimeCardNum?: string;
        EmployeeEmpLockerNum?: string;
        EmployeeUserName?: string;
        EmployeePassword?: string;
        VdscAreaGroupId?: number;
        VdscArea?: string;
        VdscAreaListOrder?: number;
    }
    namespace EmployeeOvertimeRow {
        const idProperty = "Id";
        const nameProperty = "Product";
        const localTextPrefix = "VDSCSQL.EmployeeOvertime";
        namespace Fields {
            const Id: any;
            const EmployeeId: any;
            const DateWorked: any;
            const VdscAreaId: any;
            const Product: any;
            const DaysOfOvertimeWorked: any;
            const EmployeeIdent: any;
            const EmployeeVdscAreaId: any;
            const EmployeeFirstName: any;
            const EmployeeLastName: any;
            const EmployeeTeamLeader: any;
            const EmployeeAreaManager: any;
            const EmployeeOvertimePreference: any;
            const EmployeeShift: any;
            const EmployeeForkliftLicense: any;
            const EmployeeShippingEmployee: any;
            const EmployeeEmploymentTerminated: any;
            const EmployeeEmpTermDate: any;
            const EmployeeEmpTermReason: any;
            const EmployeeVdscDepartmentId: any;
            const EmployeeEmpStartDate: any;
            const EmployeeEmpPhoneNum: any;
            const EmployeeEmpPhoneNum2: any;
            const EmployeeEmpAddress: any;
            const EmployeeEmpTitle: any;
            const EmployeeEmpTimeCardNum: any;
            const EmployeeEmpLockerNum: any;
            const EmployeeUserName: any;
            const EmployeePassword: any;
            const VdscAreaGroupId: any;
            const VdscArea: any;
            const VdscAreaListOrder: any;
        }
    }
}
declare namespace FormulationManagementSystems.VDSCSQL {
    namespace EmployeeOvertimeService {
        const baseUrl = "VDSCSQL/EmployeeOvertime";
        function Create(request: Serenity.SaveRequest<EmployeeOvertimeRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<EmployeeOvertimeRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<EmployeeOvertimeRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<EmployeeOvertimeRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        namespace Methods {
            const Create: string;
            const Update: string;
            const Delete: string;
            const Retrieve: string;
            const List: string;
        }
    }
}
declare namespace FormulationManagementSystems.VDSCSQL {
    class EmployeePhotoForm extends Serenity.PrefixedContext {
        static formKey: string;
    }
    interface EmployeePhotoForm {
        EmployeeId: Serenity.IntegerEditor;
        FileName: Serenity.StringEditor;
        ContentType: Serenity.StringEditor;
        EmployeePhoto: Serenity.StringEditor;
    }
}
declare namespace FormulationManagementSystems.VDSCSQL {
    interface EmployeePhotoRow {
        Id?: number;
        EmployeeId?: number;
        FileName?: string;
        ContentType?: string;
        EmployeePhoto?: number[];
    }
    namespace EmployeePhotoRow {
        const idProperty = "Id";
        const nameProperty = "FileName";
        const localTextPrefix = "VDSCSQL.EmployeePhoto";
        namespace Fields {
            const Id: any;
            const EmployeeId: any;
            const FileName: any;
            const ContentType: any;
            const EmployeePhoto: any;
        }
    }
}
declare namespace FormulationManagementSystems.VDSCSQL {
    namespace EmployeePhotoService {
        const baseUrl = "VDSCSQL/EmployeePhoto";
        function Create(request: Serenity.SaveRequest<EmployeePhotoRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<EmployeePhotoRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<EmployeePhotoRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<EmployeePhotoRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        namespace Methods {
            const Create: string;
            const Update: string;
            const Delete: string;
            const Retrieve: string;
            const List: string;
        }
    }
}
declare namespace FormulationManagementSystems.VDSCSQL {
    interface EmployeeRow {
        Id?: number;
        EmployeeIdent1?: string;
        VdscAreaId1?: number;
        FirstName1?: string;
        LastName1?: string;
        TeamLeader1?: boolean;
        AreaManager1?: boolean;
        OvertimePreference1?: boolean;
        Shift1?: string;
        ForkliftLicense1?: boolean;
        ShippingEmployee1?: boolean;
        EmploymentTerminated1?: boolean;
        EmpTermDate1?: string;
        EmpTermReason1?: string;
        VdscDepartmentId1?: number;
        EmpStartDate1?: string;
        EmpPhoneNum1?: string;
        EmpPhoneNum21?: string;
        EmpAddress1?: string;
        EmpTitle1?: string;
        EmpTimeCardNum1?: string;
        EmpLockerNum1?: string;
        UserName1?: string;
        Password1?: string;
        EmployeeIdent?: string;
        VdscAreaId?: number;
        FirstName?: string;
        LastName?: string;
        TeamLeader?: boolean;
        AreaManager?: boolean;
        OvertimePreference?: boolean;
        Shift?: string;
        ForkliftLicense?: boolean;
        ShippingEmployee?: boolean;
        EmploymentTerminated?: boolean;
        EmpTermDate?: string;
        EmpTermReason?: string;
        VdscDepartmentId?: number;
        EmpStartDate?: string;
        EmpPhoneNum?: string;
        EmpPhoneNum2?: string;
        EmpAddress?: string;
        EmpTitle?: string;
        EmpTimeCardNum?: string;
        EmpLockerNum?: string;
        UserName?: string;
        Password?: string;
        VdscAreaGroupId?: number;
        VdscArea?: string;
        VdscAreaListOrder?: number;
    }
    namespace EmployeeRow {
        const idProperty = "Id";
        const nameProperty = "EmployeeIdent1";
        const localTextPrefix = "VDSCSQL.Employee";
        namespace Fields {
            const Id: any;
            const EmployeeIdent1: any;
            const VdscAreaId1: any;
            const FirstName1: any;
            const LastName1: any;
            const TeamLeader1: any;
            const AreaManager1: any;
            const OvertimePreference1: any;
            const Shift1: any;
            const ForkliftLicense1: any;
            const ShippingEmployee1: any;
            const EmploymentTerminated1: any;
            const EmpTermDate1: any;
            const EmpTermReason1: any;
            const VdscDepartmentId1: any;
            const EmpStartDate1: any;
            const EmpPhoneNum1: any;
            const EmpPhoneNum21: any;
            const EmpAddress1: any;
            const EmpTitle1: any;
            const EmpTimeCardNum1: any;
            const EmpLockerNum1: any;
            const UserName1: any;
            const Password1: any;
            const EmployeeIdent: any;
            const VdscAreaId: any;
            const FirstName: any;
            const LastName: any;
            const TeamLeader: any;
            const AreaManager: any;
            const OvertimePreference: any;
            const Shift: any;
            const ForkliftLicense: any;
            const ShippingEmployee: any;
            const EmploymentTerminated: any;
            const EmpTermDate: any;
            const EmpTermReason: any;
            const VdscDepartmentId: any;
            const EmpStartDate: any;
            const EmpPhoneNum: any;
            const EmpPhoneNum2: any;
            const EmpAddress: any;
            const EmpTitle: any;
            const EmpTimeCardNum: any;
            const EmpLockerNum: any;
            const UserName: any;
            const Password: any;
            const VdscAreaGroupId: any;
            const VdscArea: any;
            const VdscAreaListOrder: any;
        }
    }
}
declare namespace FormulationManagementSystems.VDSCSQL {
    namespace EmployeeService {
        const baseUrl = "VDSCSQL/Employee";
        function Create(request: Serenity.SaveRequest<EmployeeRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<EmployeeRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<EmployeeRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<EmployeeRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        namespace Methods {
            const Create: string;
            const Update: string;
            const Delete: string;
            const Retrieve: string;
            const List: string;
        }
    }
}
declare namespace FormulationManagementSystems.VDSCSQL {
    class ManagerForm extends Serenity.PrefixedContext {
        static formKey: string;
    }
    interface ManagerForm {
        ManagerName: Serenity.StringEditor;
    }
}
declare namespace FormulationManagementSystems.VDSCSQL {
    interface ManagerRow {
        Id?: number;
        ManagerName?: string;
    }
    namespace ManagerRow {
        const idProperty = "Id";
        const nameProperty = "ManagerName";
        const localTextPrefix = "VDSCSQL.Manager";
        namespace Fields {
            const Id: any;
            const ManagerName: any;
        }
    }
}
declare namespace FormulationManagementSystems.VDSCSQL {
    namespace ManagerService {
        const baseUrl = "VDSCSQL/Manager";
        function Create(request: Serenity.SaveRequest<ManagerRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<ManagerRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<ManagerRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<ManagerRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        namespace Methods {
            const Create: string;
            const Update: string;
            const Delete: string;
            const Retrieve: string;
            const List: string;
        }
    }
}
declare namespace FormulationManagementSystems.VDSCSQL {
    class MaterialForm extends Serenity.PrefixedContext {
        static formKey: string;
    }
    interface MaterialForm {
        VdscCode: Serenity.StringEditor;
        Description: Serenity.StringEditor;
        CustomerId: Serenity.IntegerEditor;
        CustomerIdent: Serenity.StringEditor;
        Gmid: Serenity.StringEditor;
        CustomerPartNumber: Serenity.StringEditor;
        UnitOfMeasure: Serenity.StringEditor;
        Density: Serenity.DecimalEditor;
        UnitQty: Serenity.DecimalEditor;
        MaterialCode: Serenity.StringEditor;
        MaterialType: Serenity.StringEditor;
        ProductionGoal: Serenity.DecimalEditor;
        Discontinued: Serenity.BooleanEditor;
        Msds: Serenity.StringEditor;
        PalletSpaceWt: Serenity.DecimalEditor;
        BulkSr: Serenity.BooleanEditor;
        Drysr: Serenity.BooleanEditor;
        HotBoxItem: Serenity.BooleanEditor;
        Barcode: Serenity.StringEditor;
    }
}
declare namespace FormulationManagementSystems.VDSCSQL {
    interface MaterialRow {
        Id?: number;
        VdscCode?: string;
        Description?: string;
        CustomerId?: number;
        CustomerIdent?: string;
        Gmid?: string;
        CustomerPartNumber?: string;
        UnitOfMeasure?: string;
        Density?: number;
        UnitQty?: number;
        MaterialCode?: string;
        MaterialType?: string;
        ProductionGoal?: number;
        Discontinued?: boolean;
        Msds?: string;
        PalletSpaceWt?: number;
        BulkSr?: boolean;
        Drysr?: boolean;
        HotBoxItem?: boolean;
        Barcode?: string;
        CustomerCompany?: string;
        CustomerCustomerIdent?: string;
        CustomerName?: string;
    }
    namespace MaterialRow {
        const idProperty = "Id";
        const nameProperty = "VdscCode";
        const localTextPrefix = "VDSCSQL.Material";
        namespace Fields {
            const Id: any;
            const VdscCode: any;
            const Description: any;
            const CustomerId: any;
            const CustomerIdent: any;
            const Gmid: any;
            const CustomerPartNumber: any;
            const UnitOfMeasure: any;
            const Density: any;
            const UnitQty: any;
            const MaterialCode: any;
            const MaterialType: any;
            const ProductionGoal: any;
            const Discontinued: any;
            const Msds: any;
            const PalletSpaceWt: any;
            const BulkSr: any;
            const Drysr: any;
            const HotBoxItem: any;
            const Barcode: any;
            const CustomerCompany: any;
            const CustomerCustomerIdent: any;
            const CustomerName: any;
        }
    }
}
declare namespace FormulationManagementSystems.VDSCSQL {
    namespace MaterialService {
        const baseUrl = "VDSCSQL/Material";
        function Create(request: Serenity.SaveRequest<MaterialRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<MaterialRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<MaterialRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<MaterialRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        namespace Methods {
            const Create: string;
            const Update: string;
            const Delete: string;
            const Retrieve: string;
            const List: string;
        }
    }
}
declare namespace FormulationManagementSystems.VDSCSQL {
    class ProductionRequestForm extends Serenity.PrefixedContext {
        static formKey: string;
    }
    interface ProductionRequestForm {
        DateCreated: Serenity.DateEditor;
        CustomerId: Serenity.IntegerEditor;
        MaterialId: Serenity.IntegerEditor;
        RecipeId: Serenity.IntegerEditor;
        VdscAreaId: Serenity.IntegerEditor;
        QuantityRequested: Serenity.IntegerEditor;
        Operators: Serenity.IntegerEditor;
        Status: Serenity.StringEditor;
        BeginDate: Serenity.DateEditor;
        EndDate: Serenity.DateEditor;
        Attachments: Serenity.StringEditor;
        Notes: Serenity.StringEditor;
        UseAlternateRecipe: Serenity.BooleanEditor;
        ComputeBatch: Serenity.BooleanEditor;
    }
}
declare namespace FormulationManagementSystems.VDSCSQL {
    interface ProductionRequestRow {
        Id?: number;
        DateCreated?: string;
        CustomerId?: number;
        MaterialId?: number;
        RecipeId?: number;
        VdscAreaId?: number;
        QuantityRequested?: number;
        Operators?: number;
        Status?: string;
        BeginDate?: string;
        EndDate?: string;
        Attachments?: string;
        Notes?: string;
        UseAlternateRecipe?: boolean;
        ComputeBatch?: boolean;
        CustomerCompany?: string;
        CustomerCustomerIdent?: string;
        CustomerName?: string;
        MaterialVdscCode?: string;
        MaterialDescription?: string;
        MaterialCustomerId?: number;
        MaterialCustomerIdent?: string;
        MaterialGmid?: string;
        MaterialCustomerPartNumber?: string;
        MaterialUnitOfMeasure?: string;
        MaterialDensity?: number;
        MaterialUnitQty?: number;
        MaterialMaterialCode?: string;
        MaterialMaterialType?: string;
        MaterialProductionGoal?: number;
        MaterialDiscontinued?: boolean;
        MaterialMsds?: string;
        MaterialPalletSpaceWt?: number;
        MaterialBulkSr?: boolean;
        MaterialDrysr?: boolean;
        MaterialHotBoxItem?: boolean;
        MaterialBarcode?: string;
        RecipeMaterialId?: number;
        RecipeDescription?: string;
        RecipeDescriptionNotes?: string;
        RecipeBatchQty?: number;
        RecipeWeightRangeHigh?: number;
        RecipeWeightRangeLow?: number;
        VdscAreaGroupId?: number;
        VdscArea?: string;
        VdscAreaListOrder?: number;
    }
    namespace ProductionRequestRow {
        const idProperty = "Id";
        const nameProperty = "Status";
        const localTextPrefix = "VDSCSQL.ProductionRequest";
        namespace Fields {
            const Id: any;
            const DateCreated: any;
            const CustomerId: any;
            const MaterialId: any;
            const RecipeId: any;
            const VdscAreaId: any;
            const QuantityRequested: any;
            const Operators: any;
            const Status: any;
            const BeginDate: any;
            const EndDate: any;
            const Attachments: any;
            const Notes: any;
            const UseAlternateRecipe: any;
            const ComputeBatch: any;
            const CustomerCompany: any;
            const CustomerCustomerIdent: any;
            const CustomerName: any;
            const MaterialVdscCode: any;
            const MaterialDescription: any;
            const MaterialCustomerId: any;
            const MaterialCustomerIdent: any;
            const MaterialGmid: any;
            const MaterialCustomerPartNumber: any;
            const MaterialUnitOfMeasure: any;
            const MaterialDensity: any;
            const MaterialUnitQty: any;
            const MaterialMaterialCode: any;
            const MaterialMaterialType: any;
            const MaterialProductionGoal: any;
            const MaterialDiscontinued: any;
            const MaterialMsds: any;
            const MaterialPalletSpaceWt: any;
            const MaterialBulkSr: any;
            const MaterialDrysr: any;
            const MaterialHotBoxItem: any;
            const MaterialBarcode: any;
            const RecipeMaterialId: any;
            const RecipeDescription: any;
            const RecipeDescriptionNotes: any;
            const RecipeBatchQty: any;
            const RecipeWeightRangeHigh: any;
            const RecipeWeightRangeLow: any;
            const VdscAreaGroupId: any;
            const VdscArea: any;
            const VdscAreaListOrder: any;
        }
    }
}
declare namespace FormulationManagementSystems.VDSCSQL {
    namespace ProductionRequestService {
        const baseUrl = "VDSCSQL/ProductionRequest";
        function Create(request: Serenity.SaveRequest<ProductionRequestRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<ProductionRequestRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<ProductionRequestRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<ProductionRequestRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        namespace Methods {
            const Create: string;
            const Update: string;
            const Delete: string;
            const Retrieve: string;
            const List: string;
        }
    }
}
declare namespace FormulationManagementSystems.VDSCSQL {
    class RecipeForm extends Serenity.PrefixedContext {
        static formKey: string;
    }
    interface RecipeForm {
        MaterialId: Serenity.IntegerEditor;
        Description: Serenity.StringEditor;
        DescriptionNotes: Serenity.StringEditor;
        BatchQty: Serenity.DecimalEditor;
        WeightRangeHigh: Serenity.DecimalEditor;
        WeightRangeLow: Serenity.DecimalEditor;
    }
}
declare namespace FormulationManagementSystems.VDSCSQL {
    class RecipePhaseForm extends Serenity.PrefixedContext {
        static formKey: string;
    }
    interface RecipePhaseForm {
        RecipeId: Serenity.IntegerEditor;
        PhaseName: Serenity.StringEditor;
        PhaseNumber: Serenity.IntegerEditor;
        PhaseOptional: Serenity.BooleanEditor;
        Procedure: Serenity.StringEditor;
        PackagingInstructions: Serenity.StringEditor;
    }
}
declare namespace FormulationManagementSystems.VDSCSQL {
    interface RecipePhaseRow {
        Id?: number;
        RecipeId?: number;
        PhaseName?: string;
        PhaseNumber?: number;
        PhaseOptional?: boolean;
        Procedure?: string;
        PackagingInstructions?: string;
        RecipeMaterialId?: number;
        RecipeDescription?: string;
        RecipeDescriptionNotes?: string;
        RecipeBatchQty?: number;
        RecipeWeightRangeHigh?: number;
        RecipeWeightRangeLow?: number;
    }
    namespace RecipePhaseRow {
        const idProperty = "Id";
        const nameProperty = "PhaseName";
        const localTextPrefix = "VDSCSQL.RecipePhase";
        namespace Fields {
            const Id: any;
            const RecipeId: any;
            const PhaseName: any;
            const PhaseNumber: any;
            const PhaseOptional: any;
            const Procedure: any;
            const PackagingInstructions: any;
            const RecipeMaterialId: any;
            const RecipeDescription: any;
            const RecipeDescriptionNotes: any;
            const RecipeBatchQty: any;
            const RecipeWeightRangeHigh: any;
            const RecipeWeightRangeLow: any;
        }
    }
}
declare namespace FormulationManagementSystems.VDSCSQL {
    namespace RecipePhaseService {
        const baseUrl = "VDSCSQL/RecipePhase";
        function Create(request: Serenity.SaveRequest<RecipePhaseRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<RecipePhaseRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<RecipePhaseRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<RecipePhaseRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        namespace Methods {
            const Create: string;
            const Update: string;
            const Delete: string;
            const Retrieve: string;
            const List: string;
        }
    }
}
declare namespace FormulationManagementSystems.VDSCSQL {
    interface RecipeRow {
        Id?: number;
        MaterialId?: number;
        Description?: string;
        DescriptionNotes?: string;
        BatchQty?: number;
        WeightRangeHigh?: number;
        WeightRangeLow?: number;
        MaterialVdscCode?: string;
        MaterialDescription?: string;
        MaterialCustomerId?: number;
        MaterialCustomerIdent?: string;
        MaterialGmid?: string;
        MaterialCustomerPartNumber?: string;
        MaterialUnitOfMeasure?: string;
        MaterialDensity?: number;
        MaterialUnitQty?: number;
        MaterialMaterialCode?: string;
        MaterialMaterialType?: string;
        MaterialProductionGoal?: number;
        MaterialDiscontinued?: boolean;
        MaterialMsds?: string;
        MaterialPalletSpaceWt?: number;
        MaterialBulkSr?: boolean;
        MaterialDrysr?: boolean;
        MaterialHotBoxItem?: boolean;
        MaterialBarcode?: string;
    }
    namespace RecipeRow {
        const idProperty = "Id";
        const nameProperty = "Description";
        const localTextPrefix = "VDSCSQL.Recipe";
        namespace Fields {
            const Id: any;
            const MaterialId: any;
            const Description: any;
            const DescriptionNotes: any;
            const BatchQty: any;
            const WeightRangeHigh: any;
            const WeightRangeLow: any;
            const MaterialVdscCode: any;
            const MaterialDescription: any;
            const MaterialCustomerId: any;
            const MaterialCustomerIdent: any;
            const MaterialGmid: any;
            const MaterialCustomerPartNumber: any;
            const MaterialUnitOfMeasure: any;
            const MaterialDensity: any;
            const MaterialUnitQty: any;
            const MaterialMaterialCode: any;
            const MaterialMaterialType: any;
            const MaterialProductionGoal: any;
            const MaterialDiscontinued: any;
            const MaterialMsds: any;
            const MaterialPalletSpaceWt: any;
            const MaterialBulkSr: any;
            const MaterialDrysr: any;
            const MaterialHotBoxItem: any;
            const MaterialBarcode: any;
        }
    }
}
declare namespace FormulationManagementSystems.VDSCSQL {
    namespace RecipeService {
        const baseUrl = "VDSCSQL/Recipe";
        function Create(request: Serenity.SaveRequest<RecipeRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<RecipeRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<RecipeRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<RecipeRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        namespace Methods {
            const Create: string;
            const Update: string;
            const Delete: string;
            const Retrieve: string;
            const List: string;
        }
    }
}
declare namespace FormulationManagementSystems.VDSCSQL {
    class SrcDstPathForm extends Serenity.PrefixedContext {
        static formKey: string;
    }
    interface SrcDstPathForm {
        SrcTankId: Serenity.IntegerEditor;
        SrcPath: Serenity.StringEditor;
        DstTankId: Serenity.IntegerEditor;
        DstPath: Serenity.StringEditor;
        PathState: Serenity.StringEditor;
    }
}
declare namespace FormulationManagementSystems.VDSCSQL {
    interface SrcDstPathRow {
        Id?: number;
        SrcTankId?: number;
        SrcPath?: string;
        DstTankId?: number;
        DstPath?: string;
        PathState?: string;
        SrcTankCustomerId?: number;
        SrcTankMaterialId?: number;
        SrcTankProduct?: string;
        SrcTankBuilding?: string;
        SrcTankBay?: string;
        SrcTankTank?: string;
        SrcTankCapacity?: number;
        SrcTankDimension?: string;
        SrcTankVaporPressureAdjustedTo76F?: number;
        SrcTankVaporPressure?: number;
        SrcTankStrapChart?: number;
        SrcTankShipmentClearance?: boolean;
        SrcTankTankBarcode?: string;
        SrcTankBulkTank?: boolean;
        SrcTankFlashPoint?: string;
        DstTankCustomerId?: number;
        DstTankMaterialId?: number;
        DstTankProduct?: string;
        DstTankBuilding?: string;
        DstTankBay?: string;
        DstTankTank?: string;
        DstTankCapacity?: number;
        DstTankDimension?: string;
        DstTankVaporPressureAdjustedTo76F?: number;
        DstTankVaporPressure?: number;
        DstTankStrapChart?: number;
        DstTankShipmentClearance?: boolean;
        DstTankTankBarcode?: string;
        DstTankBulkTank?: boolean;
        DstTankFlashPoint?: string;
    }
    namespace SrcDstPathRow {
        const idProperty = "Id";
        const nameProperty = "SrcPath";
        const localTextPrefix = "VDSCSQL.SrcDstPath";
        namespace Fields {
            const Id: any;
            const SrcTankId: any;
            const SrcPath: any;
            const DstTankId: any;
            const DstPath: any;
            const PathState: any;
            const SrcTankCustomerId: any;
            const SrcTankMaterialId: any;
            const SrcTankProduct: any;
            const SrcTankBuilding: any;
            const SrcTankBay: any;
            const SrcTankTank: any;
            const SrcTankCapacity: any;
            const SrcTankDimension: any;
            const SrcTankVaporPressureAdjustedTo76F: any;
            const SrcTankVaporPressure: any;
            const SrcTankStrapChart: any;
            const SrcTankShipmentClearance: any;
            const SrcTankTankBarcode: any;
            const SrcTankBulkTank: any;
            const SrcTankFlashPoint: any;
            const DstTankCustomerId: any;
            const DstTankMaterialId: any;
            const DstTankProduct: any;
            const DstTankBuilding: any;
            const DstTankBay: any;
            const DstTankTank: any;
            const DstTankCapacity: any;
            const DstTankDimension: any;
            const DstTankVaporPressureAdjustedTo76F: any;
            const DstTankVaporPressure: any;
            const DstTankStrapChart: any;
            const DstTankShipmentClearance: any;
            const DstTankTankBarcode: any;
            const DstTankBulkTank: any;
            const DstTankFlashPoint: any;
        }
    }
}
declare namespace FormulationManagementSystems.VDSCSQL {
    namespace SrcDstPathService {
        const baseUrl = "VDSCSQL/SrcDstPath";
        function Create(request: Serenity.SaveRequest<SrcDstPathRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<SrcDstPathRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<SrcDstPathRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<SrcDstPathRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        namespace Methods {
            const Create: string;
            const Update: string;
            const Delete: string;
            const Retrieve: string;
            const List: string;
        }
    }
}
declare namespace FormulationManagementSystems.VDSCSQL {
    class SrlBulkMovementDataForm extends Serenity.PrefixedContext {
        static formKey: string;
    }
    interface SrlBulkMovementDataForm {
        SrlBulkMovementId: Serenity.IntegerEditor;
        BulkStorageTankId: Serenity.IntegerEditor;
        StartPhysical: Serenity.DecimalEditor;
        EndPhysical: Serenity.DecimalEditor;
        MovementQuantity: Serenity.DecimalEditor;
    }
}
declare namespace FormulationManagementSystems.VDSCSQL {
    interface SrlBulkMovementDataRow {
        Id?: number;
        SrlBulkMovementId?: number;
        BulkStorageTankId?: number;
        StartPhysical?: number;
        EndPhysical?: number;
        MovementQuantity?: number;
    }
    namespace SrlBulkMovementDataRow {
        const idProperty = "Id";
        const localTextPrefix = "VDSCSQL.SrlBulkMovementData";
        namespace Fields {
            const Id: any;
            const SrlBulkMovementId: any;
            const BulkStorageTankId: any;
            const StartPhysical: any;
            const EndPhysical: any;
            const MovementQuantity: any;
        }
    }
}
declare namespace FormulationManagementSystems.VDSCSQL {
    namespace SrlBulkMovementDataService {
        const baseUrl = "VDSCSQL/SrlBulkMovementData";
        function Create(request: Serenity.SaveRequest<SrlBulkMovementDataRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<SrlBulkMovementDataRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<SrlBulkMovementDataRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<SrlBulkMovementDataRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        namespace Methods {
            const Create: string;
            const Update: string;
            const Delete: string;
            const Retrieve: string;
            const List: string;
        }
    }
}
declare namespace FormulationManagementSystems.VDSCSQL {
    class SrlBulkMovementForm extends Serenity.PrefixedContext {
        static formKey: string;
    }
    interface SrlBulkMovementForm {
        CarrierId: Serenity.IntegerEditor;
        TrailerNumber: Serenity.StringEditor;
        TankId: Serenity.IntegerEditor;
        MovementType: Serenity.StringEditor;
        BillofLading: Serenity.StringEditor;
        StartWeighTime: Serenity.DateEditor;
        StartPumpTime: Serenity.DateEditor;
        EndPumpTime: Serenity.DateEditor;
        EndWeighTime: Serenity.DateEditor;
        OperatorId: Serenity.IntegerEditor;
        MovementStartDate: Serenity.DateEditor;
        EntranceLocation: Serenity.StringEditor;
        PreviousMaterialId: Serenity.StringEditor;
        MovementArea: Serenity.StringEditor;
        MovementEndDate: Serenity.DateEditor;
        GrossWeight: Serenity.DecimalEditor;
        TareWeight: Serenity.DecimalEditor;
        Notes: Serenity.StringEditor;
        MovementQuantity: Serenity.DecimalEditor;
    }
}
declare namespace FormulationManagementSystems.VDSCSQL {
    interface SrlBulkMovementRow {
        Id?: number;
        CarrierId?: number;
        TrailerNumber?: string;
        TankId?: number;
        MovementType?: string;
        BillofLading?: string;
        StartWeighTime?: string;
        StartPumpTime?: string;
        EndPumpTime?: string;
        EndWeighTime?: string;
        OperatorId?: number;
        MovementStartDate?: string;
        EntranceLocation?: string;
        PreviousMaterialId?: string;
        MovementArea?: string;
        MovementEndDate?: string;
        GrossWeight?: number;
        TareWeight?: number;
        Notes?: string;
        MovementQuantity?: number;
    }
    namespace SrlBulkMovementRow {
        const idProperty = "Id";
        const nameProperty = "TrailerNumber";
        const localTextPrefix = "VDSCSQL.SrlBulkMovement";
        namespace Fields {
            const Id: any;
            const CarrierId: any;
            const TrailerNumber: any;
            const TankId: any;
            const MovementType: any;
            const BillofLading: any;
            const StartWeighTime: any;
            const StartPumpTime: any;
            const EndPumpTime: any;
            const EndWeighTime: any;
            const OperatorId: any;
            const MovementStartDate: any;
            const EntranceLocation: any;
            const PreviousMaterialId: any;
            const MovementArea: any;
            const MovementEndDate: any;
            const GrossWeight: any;
            const TareWeight: any;
            const Notes: any;
            const MovementQuantity: any;
        }
    }
}
declare namespace FormulationManagementSystems.VDSCSQL {
    namespace SrlBulkMovementService {
        const baseUrl = "VDSCSQL/SrlBulkMovement";
        function Create(request: Serenity.SaveRequest<SrlBulkMovementRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<SrlBulkMovementRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<SrlBulkMovementRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<SrlBulkMovementRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        namespace Methods {
            const Create: string;
            const Update: string;
            const Delete: string;
            const Retrieve: string;
            const List: string;
        }
    }
}
declare namespace FormulationManagementSystems.VDSCSQL {
    class SrlBulkStorageTankDataForm extends Serenity.PrefixedContext {
        static formKey: string;
    }
    interface SrlBulkStorageTankDataForm {
        BulkStorageTankId: Serenity.IntegerEditor;
        MaterialId: Serenity.IntegerEditor;
        ChangeDate: Serenity.DateEditor;
        Notes: Serenity.StringEditor;
        CleanoutResults: Serenity.StringEditor;
    }
}
declare namespace FormulationManagementSystems.VDSCSQL {
    interface SrlBulkStorageTankDataRow {
        Id?: number;
        BulkStorageTankId?: number;
        MaterialId?: number;
        ChangeDate?: string;
        Notes?: string;
        CleanoutResults?: number[];
    }
    namespace SrlBulkStorageTankDataRow {
        const idProperty = "Id";
        const nameProperty = "Notes";
        const localTextPrefix = "VDSCSQL.SrlBulkStorageTankData";
        namespace Fields {
            const Id: any;
            const BulkStorageTankId: any;
            const MaterialId: any;
            const ChangeDate: any;
            const Notes: any;
            const CleanoutResults: any;
        }
    }
}
declare namespace FormulationManagementSystems.VDSCSQL {
    namespace SrlBulkStorageTankDataService {
        const baseUrl = "VDSCSQL/SrlBulkStorageTankData";
        function Create(request: Serenity.SaveRequest<SrlBulkStorageTankDataRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<SrlBulkStorageTankDataRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<SrlBulkStorageTankDataRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<SrlBulkStorageTankDataRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        namespace Methods {
            const Create: string;
            const Update: string;
            const Delete: string;
            const Retrieve: string;
            const List: string;
        }
    }
}
declare namespace FormulationManagementSystems.VDSCSQL {
    class SrlBulkTerminalClearanceForm extends Serenity.PrefixedContext {
        static formKey: string;
    }
    interface SrlBulkTerminalClearanceForm {
        BulkStorageTankId: Serenity.IntegerEditor;
        ClearanceDate: Serenity.DateEditor;
        ClearanceName: Serenity.StringEditor;
        ClearRemovalText: Serenity.StringEditor;
        ClearanceRemoveDate: Serenity.DateEditor;
        ClearanceRemovalName: Serenity.StringEditor;
        LotNumber: Serenity.StringEditor;
        ClearanceDuration: Serenity.DecimalEditor;
        TankClearance: Serenity.BooleanEditor;
    }
}
declare namespace FormulationManagementSystems.VDSCSQL {
    interface SrlBulkTerminalClearanceRow {
        Id?: number;
        BulkStorageTankId?: number;
        ClearanceDate?: string;
        ClearanceName?: string;
        ClearRemovalText?: string;
        ClearanceRemoveDate?: string;
        ClearanceRemovalName?: string;
        LotNumber?: string;
        ClearanceDuration?: number;
        TankClearance?: boolean;
    }
    namespace SrlBulkTerminalClearanceRow {
        const idProperty = "Id";
        const nameProperty = "ClearanceName";
        const localTextPrefix = "VDSCSQL.SrlBulkTerminalClearance";
        namespace Fields {
            const Id: any;
            const BulkStorageTankId: any;
            const ClearanceDate: any;
            const ClearanceName: any;
            const ClearRemovalText: any;
            const ClearanceRemoveDate: any;
            const ClearanceRemovalName: any;
            const LotNumber: any;
            const ClearanceDuration: any;
            const TankClearance: any;
        }
    }
}
declare namespace FormulationManagementSystems.VDSCSQL {
    namespace SrlBulkTerminalClearanceService {
        const baseUrl = "VDSCSQL/SrlBulkTerminalClearance";
        function Create(request: Serenity.SaveRequest<SrlBulkTerminalClearanceRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<SrlBulkTerminalClearanceRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<SrlBulkTerminalClearanceRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<SrlBulkTerminalClearanceRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        namespace Methods {
            const Create: string;
            const Update: string;
            const Delete: string;
            const Retrieve: string;
            const List: string;
        }
    }
}
declare namespace FormulationManagementSystems.VDSCSQL {
    class SrlCarrierForm extends Serenity.PrefixedContext {
        static formKey: string;
    }
    interface SrlCarrierForm {
        CarrierName: Serenity.StringEditor;
    }
}
declare namespace FormulationManagementSystems.VDSCSQL {
    interface SrlCarrierRow {
        Id?: number;
        CarrierName?: string;
    }
    namespace SrlCarrierRow {
        const idProperty = "Id";
        const nameProperty = "CarrierName";
        const localTextPrefix = "VDSCSQL.SrlCarrier";
        namespace Fields {
            const Id: any;
            const CarrierName: any;
        }
    }
}
declare namespace FormulationManagementSystems.VDSCSQL {
    namespace SrlCarrierService {
        const baseUrl = "VDSCSQL/SrlCarrier";
        function Create(request: Serenity.SaveRequest<SrlCarrierRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<SrlCarrierRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<SrlCarrierRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<SrlCarrierRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        namespace Methods {
            const Create: string;
            const Update: string;
            const Delete: string;
            const Retrieve: string;
            const List: string;
        }
    }
}
declare namespace FormulationManagementSystems.VDSCSQL {
    class SrlMsdsForm extends Serenity.PrefixedContext {
        static formKey: string;
    }
    interface SrlMsdsForm {
        MaterialId: Serenity.IntegerEditor;
        StorageFile: Serenity.StringEditor;
    }
}
declare namespace FormulationManagementSystems.VDSCSQL {
    interface SrlMsdsRow {
        Id?: number;
        MaterialId?: number;
        StorageFile?: number[];
    }
    namespace SrlMsdsRow {
        const idProperty = "Id";
        const localTextPrefix = "VDSCSQL.SrlMsds";
        namespace Fields {
            const Id: any;
            const MaterialId: any;
            const StorageFile: any;
        }
    }
}
declare namespace FormulationManagementSystems.VDSCSQL {
    namespace SrlMsdsService {
        const baseUrl = "VDSCSQL/SrlMsds";
        function Create(request: Serenity.SaveRequest<SrlMsdsRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<SrlMsdsRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<SrlMsdsRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<SrlMsdsRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        namespace Methods {
            const Create: string;
            const Update: string;
            const Delete: string;
            const Retrieve: string;
            const List: string;
        }
    }
}
declare namespace FormulationManagementSystems.VDSCSQL {
    class StepInstructionForm extends Serenity.PrefixedContext {
        static formKey: string;
    }
    interface StepInstructionForm {
        ConsumptionId: Serenity.IntegerEditor;
        StepInstructionTypeId: Serenity.IntegerEditor;
        Index: Serenity.IntegerEditor;
        Instruct1: Serenity.StringEditor;
        Hint1: Serenity.StringEditor;
        ScanValue1: Serenity.StringEditor;
        ErrorMsg1: Serenity.StringEditor;
    }
}
declare namespace FormulationManagementSystems.VDSCSQL {
    interface StepInstructionRow {
        Id?: number;
        ConsumptionId?: number;
        StepInstructionTypeId?: number;
        Index?: number;
        Instruct1?: string;
        Hint1?: string;
        ScanValue1?: string;
        ErrorMsg1?: string;
        ConsumptionRecipePhaseId?: number;
        ConsumptionIngredientNumber?: number;
        ConsumptionIngredientMaterialId?: number;
        ConsumptionPercentage?: number;
        ConsumptionOptionalIngredient?: boolean;
        ConsumptionSrcDstPathIds?: string;
        ConsumptionTimeExpectation?: number;
        ConsumptionOpPrcHighLmt?: number;
        ConsumptionOpPrcLwLmt?: number;
        ConsumptionTlPrcHighLmt?: number;
        ConsumptionTlPrcLwLmt?: number;
        ConsumptionStepDescription?: string;
        ConsumptionHTemp1?: number;
        ConsumptionLTemp1?: number;
        ConsumptionAmPrcHighLmt?: number;
        ConsumptionAmPrcLwLmt?: number;
        StepInstructionTypeStepInstructionName?: string;
    }
    namespace StepInstructionRow {
        const idProperty = "Id";
        const nameProperty = "Instruct1";
        const localTextPrefix = "VDSCSQL.StepInstruction";
        namespace Fields {
            const Id: any;
            const ConsumptionId: any;
            const StepInstructionTypeId: any;
            const Index: any;
            const Instruct1: any;
            const Hint1: any;
            const ScanValue1: any;
            const ErrorMsg1: any;
            const ConsumptionRecipePhaseId: any;
            const ConsumptionIngredientNumber: any;
            const ConsumptionIngredientMaterialId: any;
            const ConsumptionPercentage: any;
            const ConsumptionOptionalIngredient: any;
            const ConsumptionSrcDstPathIds: any;
            const ConsumptionTimeExpectation: any;
            const ConsumptionOpPrcHighLmt: any;
            const ConsumptionOpPrcLwLmt: any;
            const ConsumptionTlPrcHighLmt: any;
            const ConsumptionTlPrcLwLmt: any;
            const ConsumptionStepDescription: any;
            const ConsumptionHTemp1: any;
            const ConsumptionLTemp1: any;
            const ConsumptionAmPrcHighLmt: any;
            const ConsumptionAmPrcLwLmt: any;
            const StepInstructionTypeStepInstructionName: any;
        }
    }
}
declare namespace FormulationManagementSystems.VDSCSQL {
    namespace StepInstructionService {
        const baseUrl = "VDSCSQL/StepInstruction";
        function Create(request: Serenity.SaveRequest<StepInstructionRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<StepInstructionRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<StepInstructionRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<StepInstructionRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        namespace Methods {
            const Create: string;
            const Update: string;
            const Delete: string;
            const Retrieve: string;
            const List: string;
        }
    }
}
declare namespace FormulationManagementSystems.VDSCSQL {
    class StepInstructionTypeForm extends Serenity.PrefixedContext {
        static formKey: string;
    }
    interface StepInstructionTypeForm {
        StepInstructionName: Serenity.StringEditor;
    }
}
declare namespace FormulationManagementSystems.VDSCSQL {
    interface StepInstructionTypeRow {
        Id?: number;
        StepInstructionName?: string;
    }
    namespace StepInstructionTypeRow {
        const idProperty = "Id";
        const nameProperty = "StepInstructionName";
        const localTextPrefix = "VDSCSQL.StepInstructionType";
        namespace Fields {
            const Id: any;
            const StepInstructionName: any;
        }
    }
}
declare namespace FormulationManagementSystems.VDSCSQL {
    namespace StepInstructionTypeService {
        const baseUrl = "VDSCSQL/StepInstructionType";
        function Create(request: Serenity.SaveRequest<StepInstructionTypeRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<StepInstructionTypeRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<StepInstructionTypeRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<StepInstructionTypeRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        namespace Methods {
            const Create: string;
            const Update: string;
            const Delete: string;
            const Retrieve: string;
            const List: string;
        }
    }
}
declare namespace FormulationManagementSystems.VDSCSQL {
    class StepValueEntriesForm extends Serenity.PrefixedContext {
        static formKey: string;
    }
    interface StepValueEntriesForm {
        Description: Serenity.StringEditor;
        RecipePhaseId: Serenity.IntegerEditor;
    }
}
declare namespace FormulationManagementSystems.VDSCSQL {
    interface StepValueEntriesRow {
        Id?: number;
        Description?: string;
        RecipePhaseId?: number;
    }
    namespace StepValueEntriesRow {
        const idProperty = "Id";
        const nameProperty = "Description";
        const localTextPrefix = "VDSCSQL.StepValueEntries";
        namespace Fields {
            const Id: any;
            const Description: any;
            const RecipePhaseId: any;
        }
    }
}
declare namespace FormulationManagementSystems.VDSCSQL {
    namespace StepValueEntriesService {
        const baseUrl = "VDSCSQL/StepValueEntries";
        function Create(request: Serenity.SaveRequest<StepValueEntriesRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<StepValueEntriesRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<StepValueEntriesRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<StepValueEntriesRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        namespace Methods {
            const Create: string;
            const Update: string;
            const Delete: string;
            const Retrieve: string;
            const List: string;
        }
    }
}
declare namespace FormulationManagementSystems.VDSCSQL {
    class ValueEntriesDataForm extends Serenity.PrefixedContext {
        static formKey: string;
    }
    interface ValueEntriesDataForm {
        BulkBatchDataId: Serenity.IntegerEditor;
        StepValueEntriesId: Serenity.IntegerEditor;
        UserInput: Serenity.StringEditor;
    }
}
declare namespace FormulationManagementSystems.VDSCSQL {
    interface ValueEntriesDataRow {
        Id?: number;
        BulkBatchDataId?: number;
        StepValueEntriesId?: number;
        UserInput?: string;
        BulkBatchDataBulkBatchId?: number;
        BulkBatchDataSourceTank?: string;
        BulkBatchDataDestinationTank?: string;
        BulkBatchDataIngredient?: string;
        BulkBatchDataIngredientNumber?: number;
        BulkBatchDataPhase?: string;
        BulkBatchDataPhaseNumber?: number;
        BulkBatchDataStartTime?: string;
        BulkBatchDataEndTime?: string;
        BulkBatchDataOperator?: string;
        BulkBatchDataSupervisorOverride?: string;
        BulkBatchDataAdditionQty?: number;
        BulkBatchDataStatus?: string;
        BulkBatchDataScaleCheckOperator?: string;
        BulkBatchDataScaleCheckWt?: number;
        BulkBatchDataScaleId?: string;
        BulkBatchDataValvesOpen?: string;
        BulkBatchDataValveOpenBypass?: string;
        BulkBatchDataValvesClose?: string;
        BulkBatchDataValveCloseBypass?: string;
        BulkBatchDataRecipePhaseId?: number;
        BulkBatchDataCurrentStepIndex?: number;
        BulkBatchDataOperatorId?: number;
        BulkBatchDataSupervisorOverrideId?: number;
        BulkBatchDataSrcStartWt?: number;
        BulkBatchDataDstStartWt?: number;
        BulkBatchDataSrcEndWt?: number;
        BulkBatchDataDstEndWt?: number;
        BulkBatchDataPhaseTankRemembered?: string;
        StepValueEntriesDescription?: string;
        StepValueEntriesRecipePhaseId?: number;
    }
    namespace ValueEntriesDataRow {
        const idProperty = "Id";
        const nameProperty = "UserInput";
        const localTextPrefix = "VDSCSQL.ValueEntriesData";
        namespace Fields {
            const Id: any;
            const BulkBatchDataId: any;
            const StepValueEntriesId: any;
            const UserInput: any;
            const BulkBatchDataBulkBatchId: any;
            const BulkBatchDataSourceTank: any;
            const BulkBatchDataDestinationTank: any;
            const BulkBatchDataIngredient: any;
            const BulkBatchDataIngredientNumber: any;
            const BulkBatchDataPhase: any;
            const BulkBatchDataPhaseNumber: any;
            const BulkBatchDataStartTime: any;
            const BulkBatchDataEndTime: any;
            const BulkBatchDataOperator: any;
            const BulkBatchDataSupervisorOverride: any;
            const BulkBatchDataAdditionQty: any;
            const BulkBatchDataStatus: any;
            const BulkBatchDataScaleCheckOperator: any;
            const BulkBatchDataScaleCheckWt: any;
            const BulkBatchDataScaleId: any;
            const BulkBatchDataValvesOpen: any;
            const BulkBatchDataValveOpenBypass: any;
            const BulkBatchDataValvesClose: any;
            const BulkBatchDataValveCloseBypass: any;
            const BulkBatchDataRecipePhaseId: any;
            const BulkBatchDataCurrentStepIndex: any;
            const BulkBatchDataOperatorId: any;
            const BulkBatchDataSupervisorOverrideId: any;
            const BulkBatchDataSrcStartWt: any;
            const BulkBatchDataDstStartWt: any;
            const BulkBatchDataSrcEndWt: any;
            const BulkBatchDataDstEndWt: any;
            const BulkBatchDataPhaseTankRemembered: any;
            const StepValueEntriesDescription: any;
            const StepValueEntriesRecipePhaseId: any;
        }
    }
}
declare namespace FormulationManagementSystems.VDSCSQL {
    namespace ValueEntriesDataService {
        const baseUrl = "VDSCSQL/ValueEntriesData";
        function Create(request: Serenity.SaveRequest<ValueEntriesDataRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<ValueEntriesDataRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<ValueEntriesDataRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<ValueEntriesDataRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        namespace Methods {
            const Create: string;
            const Update: string;
            const Delete: string;
            const Retrieve: string;
            const List: string;
        }
    }
}
declare namespace FormulationManagementSystems.VDSCSQL {
    class ValveListForm extends Serenity.PrefixedContext {
        static formKey: string;
    }
    interface ValveListForm {
        ValveName: Serenity.StringEditor;
        ValveBarcode: Serenity.StringEditor;
        ValveDescription: Serenity.StringEditor;
        Bldg: Serenity.IntegerEditor;
    }
}
declare namespace FormulationManagementSystems.VDSCSQL {
    interface ValveListRow {
        Id?: number;
        ValveName?: string;
        ValveBarcode?: string;
        ValveDescription?: string;
        Bldg?: number;
    }
    namespace ValveListRow {
        const idProperty = "Id";
        const nameProperty = "ValveName";
        const localTextPrefix = "VDSCSQL.ValveList";
        namespace Fields {
            const Id: any;
            const ValveName: any;
            const ValveBarcode: any;
            const ValveDescription: any;
            const Bldg: any;
        }
    }
}
declare namespace FormulationManagementSystems.VDSCSQL {
    namespace ValveListService {
        const baseUrl = "VDSCSQL/ValveList";
        function Create(request: Serenity.SaveRequest<ValveListRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<ValveListRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<ValveListRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<ValveListRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        namespace Methods {
            const Create: string;
            const Update: string;
            const Delete: string;
            const Retrieve: string;
            const List: string;
        }
    }
}
declare namespace FormulationManagementSystems.VDSCSQL {
    class ValvePositionMapForm extends Serenity.PrefixedContext {
        static formKey: string;
    }
    interface ValvePositionMapForm {
        SrcDstPathId: Serenity.IntegerEditor;
        ValveListId: Serenity.IntegerEditor;
        ValveOrderNumber: Serenity.IntegerEditor;
        ValvePosition: Serenity.StringEditor;
    }
}
declare namespace FormulationManagementSystems.VDSCSQL {
    interface ValvePositionMapRow {
        Id?: number;
        SrcDstPathId?: number;
        ValveListId?: number;
        ValveOrderNumber?: number;
        ValvePosition?: string;
        SrcDstPathSrcTankId?: number;
        SrcDstPathSrcPath?: string;
        SrcDstPathDstTankId?: number;
        SrcDstPathDstPath?: string;
        SrcDstPathPathState?: string;
        ValveListValveName?: string;
        ValveListValveBarcode?: string;
        ValveListValveDescription?: string;
        ValveListBldg?: number;
    }
    namespace ValvePositionMapRow {
        const idProperty = "Id";
        const nameProperty = "ValvePosition";
        const localTextPrefix = "VDSCSQL.ValvePositionMap";
        namespace Fields {
            const Id: any;
            const SrcDstPathId: any;
            const ValveListId: any;
            const ValveOrderNumber: any;
            const ValvePosition: any;
            const SrcDstPathSrcTankId: any;
            const SrcDstPathSrcPath: any;
            const SrcDstPathDstTankId: any;
            const SrcDstPathDstPath: any;
            const SrcDstPathPathState: any;
            const ValveListValveName: any;
            const ValveListValveBarcode: any;
            const ValveListValveDescription: any;
            const ValveListBldg: any;
        }
    }
}
declare namespace FormulationManagementSystems.VDSCSQL {
    namespace ValvePositionMapService {
        const baseUrl = "VDSCSQL/ValvePositionMap";
        function Create(request: Serenity.SaveRequest<ValvePositionMapRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<ValvePositionMapRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<ValvePositionMapRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<ValvePositionMapRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        namespace Methods {
            const Create: string;
            const Update: string;
            const Delete: string;
            const Retrieve: string;
            const List: string;
        }
    }
}
declare namespace FormulationManagementSystems.VDSCSQL {
    class VdscAreaForm extends Serenity.PrefixedContext {
        static formKey: string;
    }
    interface VdscAreaForm {
        VdscAreaGroupId: Serenity.IntegerEditor;
        Area: Serenity.StringEditor;
        ListOrder: Serenity.IntegerEditor;
    }
}
declare namespace FormulationManagementSystems.VDSCSQL {
    class VdscAreaGroupForm extends Serenity.PrefixedContext {
        static formKey: string;
    }
    interface VdscAreaGroupForm {
        DepartmentId: Serenity.IntegerEditor;
        ListOrder: Serenity.IntegerEditor;
        ManagerId: Serenity.IntegerEditor;
    }
}
declare namespace FormulationManagementSystems.VDSCSQL {
    interface VdscAreaGroupRow {
        Id?: number;
        DepartmentId?: number;
        ListOrder?: number;
        ManagerId?: number;
        ManagerName?: string;
    }
    namespace VdscAreaGroupRow {
        const idProperty = "Id";
        const localTextPrefix = "VDSCSQL.VdscAreaGroup";
        namespace Fields {
            const Id: any;
            const DepartmentId: any;
            const ListOrder: any;
            const ManagerId: any;
            const ManagerName: any;
        }
    }
}
declare namespace FormulationManagementSystems.VDSCSQL {
    namespace VdscAreaGroupService {
        const baseUrl = "VDSCSQL/VdscAreaGroup";
        function Create(request: Serenity.SaveRequest<VdscAreaGroupRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<VdscAreaGroupRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<VdscAreaGroupRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<VdscAreaGroupRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        namespace Methods {
            const Create: string;
            const Update: string;
            const Delete: string;
            const Retrieve: string;
            const List: string;
        }
    }
}
declare namespace FormulationManagementSystems.VDSCSQL {
    interface VdscAreaRow {
        Id?: number;
        VdscAreaGroupId?: number;
        Area?: string;
        ListOrder?: number;
        VdscAreaGroupDepartmentId?: number;
        VdscAreaGroupListOrder?: number;
        VdscAreaGroupManagerId?: number;
    }
    namespace VdscAreaRow {
        const idProperty = "Id";
        const nameProperty = "Area";
        const localTextPrefix = "VDSCSQL.VdscArea";
        namespace Fields {
            const Id: any;
            const VdscAreaGroupId: any;
            const Area: any;
            const ListOrder: any;
            const VdscAreaGroupDepartmentId: any;
            const VdscAreaGroupListOrder: any;
            const VdscAreaGroupManagerId: any;
        }
    }
}
declare namespace FormulationManagementSystems.VDSCSQL {
    namespace VdscAreaService {
        const baseUrl = "VDSCSQL/VdscArea";
        function Create(request: Serenity.SaveRequest<VdscAreaRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<VdscAreaRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<VdscAreaRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<VdscAreaRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        namespace Methods {
            const Create: string;
            const Update: string;
            const Delete: string;
            const Retrieve: string;
            const List: string;
        }
    }
}
declare namespace FormulationManagementSystems.VDSCSQL {
    class VdscDepartmentForm extends Serenity.PrefixedContext {
        static formKey: string;
    }
    interface VdscDepartmentForm {
        DepartmentStr: Serenity.StringEditor;
        DepartmentCd: Serenity.StringEditor;
    }
}
declare namespace FormulationManagementSystems.VDSCSQL {
    interface VdscDepartmentRow {
        Id?: number;
        DepartmentStr?: string;
        DepartmentCd?: string;
    }
    namespace VdscDepartmentRow {
        const idProperty = "Id";
        const nameProperty = "DepartmentStr";
        const localTextPrefix = "VDSCSQL.VdscDepartment";
        namespace Fields {
            const Id: any;
            const DepartmentStr: any;
            const DepartmentCd: any;
        }
    }
}
declare namespace FormulationManagementSystems.VDSCSQL {
    namespace VdscDepartmentService {
        const baseUrl = "VDSCSQL/VdscDepartment";
        function Create(request: Serenity.SaveRequest<VdscDepartmentRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<VdscDepartmentRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<VdscDepartmentRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<VdscDepartmentRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        namespace Methods {
            const Create: string;
            const Update: string;
            const Delete: string;
            const Retrieve: string;
            const List: string;
        }
    }
}
declare namespace FormulationManagementSystems.Administration {
    class LanguageDialog extends Serenity.EntityDialog<LanguageRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: LanguageForm;
    }
}
declare namespace FormulationManagementSystems.Administration {
    class LanguageGrid extends Serenity.EntityGrid<LanguageRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof LanguageDialog;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
        protected getDefaultSortBy(): LanguageRow.Fields[];
    }
}
declare namespace FormulationManagementSystems.Administration {
    class RoleDialog extends Serenity.EntityDialog<RoleRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: RoleForm;
        protected getToolbarButtons(): Serenity.ToolButton[];
        protected updateInterface(): void;
    }
}
declare namespace FormulationManagementSystems.Administration {
    class RoleGrid extends Serenity.EntityGrid<RoleRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof RoleDialog;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
        protected getDefaultSortBy(): RoleRow.Fields[];
    }
}
declare namespace FormulationManagementSystems.Administration {
    class RolePermissionDialog extends Serenity.TemplatedDialog<RolePermissionDialogOptions> {
        private permissions;
        constructor(opt: RolePermissionDialogOptions);
        protected getDialogOptions(): JQueryUI.DialogOptions;
        protected getTemplate(): string;
    }
    interface RolePermissionDialogOptions {
        roleID?: number;
        title?: string;
    }
}
declare namespace FormulationManagementSystems.Administration {
    class TranslationGrid extends Serenity.EntityGrid<TranslationItem, any> {
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        private hasChanges;
        private searchText;
        private sourceLanguage;
        private targetLanguage;
        private targetLanguageKey;
        constructor(container: JQuery);
        protected onClick(e: JQueryEventObject, row: number, cell: number): any;
        protected getColumns(): Slick.Column[];
        protected createToolbarExtensions(): void;
        protected saveChanges(language: string): PromiseLike<any>;
        protected onViewSubmit(): boolean;
        protected getButtons(): Serenity.ToolButton[];
        protected createQuickSearchInput(): void;
        protected onViewFilter(item: TranslationItem): boolean;
        protected usePager(): boolean;
    }
}
declare namespace FormulationManagementSystems.Administration {
    class UserDialog extends Serenity.EntityDialog<UserRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getIsActiveProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: UserForm;
        constructor();
        protected getToolbarButtons(): Serenity.ToolButton[];
        protected updateInterface(): void;
        protected afterLoadEntity(): void;
    }
}
declare namespace FormulationManagementSystems.Administration {
    class UserGrid extends Serenity.EntityGrid<UserRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof UserDialog;
        protected getIdProperty(): string;
        protected getIsActiveProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
        protected getDefaultSortBy(): UserRow.Fields[];
    }
}
declare namespace FormulationManagementSystems.Authorization {
    let userDefinition: ScriptUserDefinition;
    function hasPermission(permissionKey: string): boolean;
}
declare namespace FormulationManagementSystems.Administration {
    class PermissionCheckEditor extends Serenity.DataGrid<PermissionCheckItem, PermissionCheckEditorOptions> {
        protected getIdProperty(): string;
        private searchText;
        private byParentKey;
        constructor(container: JQuery, opt: PermissionCheckEditorOptions);
        private getItemGrantRevokeClass(item, grant);
        private roleOrImplicit(key);
        private getItemEffectiveClass(item);
        protected getColumns(): Slick.Column[];
        setItems(items: PermissionCheckItem[]): void;
        protected onViewSubmit(): boolean;
        protected onViewFilter(item: PermissionCheckItem): boolean;
        private matchContains(item);
        private getDescendants(item, excludeGroups);
        protected onClick(e: any, row: any, cell: any): void;
        private getParentKey(key);
        protected getButtons(): Serenity.ToolButton[];
        protected createToolbarExtensions(): void;
        private getSortedGroupAndPermissionKeys(titleByKey);
        value: UserPermissionRow[];
        private _rolePermissions;
        rolePermissions: string[];
        private _implicitPermissions;
        implicitPermissions: Q.Dictionary<string[]>;
    }
    interface PermissionCheckEditorOptions {
        showRevoke?: boolean;
    }
    interface PermissionCheckItem {
        ParentKey?: string;
        Key?: string;
        Title?: string;
        IsGroup?: boolean;
        GrantRevoke?: boolean;
    }
}
declare namespace FormulationManagementSystems.Administration {
    class UserPermissionDialog extends Serenity.TemplatedDialog<UserPermissionDialogOptions> {
        private permissions;
        constructor(opt: UserPermissionDialogOptions);
        protected getDialogOptions(): JQueryUI.DialogOptions;
        protected getTemplate(): string;
    }
    interface UserPermissionDialogOptions {
        userID?: number;
        username?: string;
    }
}
declare namespace FormulationManagementSystems.Administration {
    class RoleCheckEditor extends Serenity.CheckTreeEditor<Serenity.CheckTreeItem<any>, any> {
        private searchText;
        constructor(div: JQuery);
        protected createToolbarExtensions(): void;
        protected getButtons(): any[];
        protected getTreeItems(): Serenity.CheckTreeItem<any>[];
        protected onViewFilter(item: any): boolean;
    }
}
declare namespace FormulationManagementSystems.Administration {
    class UserRoleDialog extends Serenity.TemplatedDialog<UserRoleDialogOptions> {
        private permissions;
        constructor(opt: UserRoleDialogOptions);
        protected getDialogOptions(): JQueryUI.DialogOptions;
        protected getTemplate(): string;
    }
    interface UserRoleDialogOptions {
        userID: number;
        username: string;
    }
}
declare var Morris: any;
declare namespace FormulationManagementSystems.BasicSamples {
    class ChartInDialog extends Serenity.TemplatedDialog<any> {
        private areaChart;
        static initializePage(): void;
        protected onDialogOpen(): void;
        protected arrange(): void;
        protected getTemplate(): string;
        protected getDialogOptions(): JQueryUI.DialogOptions;
    }
}
declare namespace FormulationManagementSystems.Northwind {
    class ProductDialog extends Serenity.EntityDialog<ProductRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: ProductForm;
    }
}
declare namespace FormulationManagementSystems.BasicSamples {
    class CloneableEntityDialog extends Northwind.ProductDialog {
        protected updateInterface(): void;
        /**
         * Overriding this method is optional to customize cloned entity
         */
        protected getCloningEntity(): Northwind.ProductRow;
    }
}
declare namespace FormulationManagementSystems.Northwind {
    class ProductGrid extends Serenity.EntityGrid<ProductRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): any;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        private pendingChanges;
        constructor(container: JQuery);
        protected getButtons(): Serenity.ToolButton[];
        protected onViewProcessData(response: any): Serenity.ListResponse<ProductRow>;
        /**
         * It would be nice if we could use autonumeric, Serenity editors etc. here, to control input validation,
         * but it's not supported by SlickGrid as we are only allowed to return a string, and should attach
         * no event handlers to rendered cell contents
         */
        private numericInputFormatter(ctx);
        private stringInputFormatter(ctx);
        /**
         * Sorry but you cannot use LookupEditor, e.g. Select2 here, only possible is a SELECT element
         */
        private selectFormatter(ctx, idField, lookup);
        private getEffectiveValue(item, field);
        protected getColumns(): Slick.Column[];
        private inputsChange(e);
        private setSaveButtonState();
        private saveClick();
        protected getQuickFilters(): Serenity.QuickFilter<Serenity.Widget<any>, any>[];
    }
}
declare namespace FormulationManagementSystems.BasicSamples {
    /**
     * Subclass of ProductGrid to override dialog type to CloneableEntityDialog
     */
    class CloneableEntityGrid extends Northwind.ProductGrid {
        protected getDialogType(): typeof CloneableEntityDialog;
        constructor(container: JQuery);
    }
}
declare namespace FormulationManagementSystems.Northwind {
    class OrderGrid extends Serenity.EntityGrid<OrderRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): any;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        protected shippingStateFilter: Serenity.EnumEditor;
        constructor(container: JQuery);
        protected getQuickFilters(): Serenity.QuickFilter<Serenity.Widget<any>, any>[];
        protected createQuickFilters(): void;
        protected getButtons(): Serenity.ToolButton[];
        protected getColumns(): Slick.Column[];
        protected onClick(e: JQueryEventObject, row: number, cell: number): void;
        set_shippingState(value: number): void;
        protected addButtonClick(): void;
    }
}
declare namespace FormulationManagementSystems.BasicSamples {
    class DefaultValuesInNewGrid extends Northwind.OrderGrid {
        constructor(container: JQuery);
        /**
         * This method is called when New Item button is clicked.
         * By default, it calls EditItem with an empty entity.
         * This is a good place to fill in default values for New Item button.
         */
        protected addButtonClick(): void;
        protected getButtons(): Serenity.ToolButton[];
    }
}
declare namespace FormulationManagementSystems.BasicSamples.DialogBoxes {
    function initializePage(): void;
}
declare namespace FormulationManagementSystems.Northwind {
    class OrderDialog extends Serenity.EntityDialog<OrderRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: OrderForm;
        constructor();
        getToolbarButtons(): Serenity.ToolButton[];
        protected updateInterface(): void;
    }
}
declare namespace FormulationManagementSystems.BasicSamples {
    /**
     * A version of order dialog converted to a panel by adding Serenity.Decorators.panel decorator.
     */
    class EntityDialogAsPanel extends Northwind.OrderDialog {
        constructor();
        protected updateInterface(): void;
        protected onSaveSuccess(response: any): void;
    }
}
declare namespace FormulationManagementSystems.Northwind {
    class CategoryDialog extends Serenity.EntityDialog<CategoryRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: CategoryForm;
    }
}
declare namespace FormulationManagementSystems.BasicSamples {
    class GetInsertedRecordIdDialog extends Northwind.CategoryDialog {
        /**
         * This method is called after the save request to service
         * is completed succesfully. This can be an insert or update.
         *
         * @param response Response that is returned from server
         */
        protected onSaveSuccess(response: Serenity.SaveResponse): void;
    }
}
declare namespace FormulationManagementSystems.Northwind {
    class CategoryGrid extends Serenity.EntityGrid<CategoryRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): any;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace FormulationManagementSystems.BasicSamples {
    /**
     * Subclass of CategoryGrid to override dialog type to GetInsertedRecordIdDialog
     */
    class GetInsertedRecordIdGrid extends Northwind.CategoryGrid {
        protected getDialogType(): typeof GetInsertedRecordIdDialog;
        constructor(container: JQuery);
    }
}
declare namespace FormulationManagementSystems.BasicSamples {
    /**
     * Our custom order dialog subclass that will have a tab to display and edit selected customer details.
     */
    class OtherFormInTabDialog extends Northwind.OrderDialog {
        private customerPropertyGrid;
        private customerForm;
        private customerValidator;
        constructor();
        getCustomerID(): number;
        loadEntity(entity: Northwind.OrderRow): void;
    }
}
declare namespace FormulationManagementSystems.BasicSamples {
    /**
     * Subclass of OrderGrid to override dialog type to OtherFormInTabDialog
     */
    class OtherFormInTabGrid extends Northwind.OrderGrid {
        protected getDialogType(): typeof OtherFormInTabDialog;
        constructor(container: JQuery);
    }
}
declare namespace FormulationManagementSystems.BasicSamples {
    /**
     * Our custom order dialog subclass that will have a tab to display and edit selected customer details.
     * With single toolbar for all forms
     */
    class OtherFormOneBarDialog extends Northwind.OrderDialog {
        private customerPropertyGrid;
        private customerForm;
        private customerValidator;
        private selfChange;
        constructor();
        getCustomerID(): number;
        loadEntity(entity: Northwind.OrderRow): void;
        protected saveCustomer(callback: (response: Serenity.SaveResponse) => void, onSuccess?: (response: Serenity.SaveResponse) => void): boolean;
        protected saveOrder(callback: (response: Serenity.SaveResponse) => void): void;
        protected saveAll(callback: (response: Serenity.SaveResponse) => void): void;
        protected save(callback: (response: Serenity.SaveResponse) => void): void;
    }
}
declare namespace FormulationManagementSystems.BasicSamples {
    /**
     * Subclass of OrderGrid to override dialog type to OtherFormInTabOneBarDialog
     */
    class OtherFormInTabOneBarGrid extends Northwind.OrderGrid {
        protected getDialogType(): typeof OtherFormOneBarDialog;
        constructor(container: JQuery);
    }
}
declare namespace FormulationManagementSystems.BasicSamples {
    class PopulateLinkedDataDialog extends Serenity.EntityDialog<Northwind.OrderRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: PopulateLinkedDataForm;
        constructor();
        private setCustomerDetails(details);
        /**
         * This dialog will have CSS class "s-PopulateLinkedDataDialog"
         * We are changing it here to "s-OrderDialog", to make it use default OrderDialog styles
         * This has no effect other than looks on populate linked data demonstration
         */
        protected getCssClass(): string;
    }
}
declare namespace FormulationManagementSystems.BasicSamples {
    /**
     * A subclass of OrderGrid that launches PopulateLinkedDataDialog
     */
    class PopulateLinkedDataGrid extends Northwind.OrderGrid {
        protected getDialogType(): typeof PopulateLinkedDataDialog;
        constructor(container: JQuery);
    }
}
declare namespace FormulationManagementSystems.Northwind {
    class SupplierDialog extends Serenity.EntityDialog<SupplierRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: SupplierForm;
        protected getLanguages(): string[][];
    }
}
declare namespace FormulationManagementSystems.BasicSamples {
    class ReadOnlyDialog extends Northwind.SupplierDialog {
        /**
         * This is the method that gets list of tool
         * buttons to be created in a dialog.
         *
         * Here we'll remove save and close button, and
         * apply changes buttons.
         */
        protected getToolbarButtons(): Serenity.ToolButton[];
        /**
         * This method is a good place to update states of
         * interface elements. It is called after dialog
         * is initialized and an entity is loaded into dialog.
         * This is also called in new item mode.
         */
        protected updateInterface(): void;
        /**
         * This method is called when dialog title needs to be updated.
         * Base class returns something like 'Edit xyz' for edit mode,
         * and 'New xyz' for new record mode.
         *
         * But our dialog is readonly, so we should change it to 'View xyz'
         */
        protected getEntityTitle(): string;
        /**
         * This method is actually the one that calls getEntityTitle()
         * and updates the dialog title. We could do it here too...
         */
        protected updateTitle(): void;
    }
}
declare namespace FormulationManagementSystems.Northwind {
    class SupplierGrid extends Serenity.EntityGrid<SupplierRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): any;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace FormulationManagementSystems.BasicSamples {
    /**
     * A readonly grid that launches ReadOnlyDialog
     */
    class ReadOnlyGrid extends Northwind.SupplierGrid {
        protected getDialogType(): typeof ReadOnlyDialog;
        constructor(container: JQuery);
        /**
         * Removing add button from grid using its css class
         */
        protected getButtons(): Serenity.ToolButton[];
    }
}
declare namespace FormulationManagementSystems.Northwind {
    class CustomerDialog extends Serenity.EntityDialog<CustomerRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: CustomerForm;
        private ordersGrid;
        private loadedState;
        constructor();
        getSaveState(): string;
        loadResponse(data: any): void;
        loadEntity(entity: CustomerRow): void;
        onSaveSuccess(response: any): void;
    }
}
declare namespace FormulationManagementSystems.BasicSamples {
    class SerialAutoNumberDialog extends Northwind.CustomerDialog {
        constructor();
        protected afterLoadEntity(): void;
        private getNextNumber();
    }
}
declare namespace FormulationManagementSystems.Northwind {
    class CustomerGrid extends Serenity.EntityGrid<CustomerRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): any;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
        getButtons(): Serenity.ToolButton[];
    }
}
declare namespace FormulationManagementSystems.BasicSamples {
    /**
     * Subclass of CustomerGrid to override dialog type to SerialAutoNumberDialog
     */
    class SerialAutoNumberGrid extends Northwind.CustomerGrid {
        protected getDialogType(): typeof SerialAutoNumberDialog;
        constructor(container: JQuery);
    }
}
declare namespace FormulationManagementSystems.Common {
    class GridEditorDialog<TEntity> extends Serenity.EntityDialog<TEntity, any> {
        protected getIdProperty(): string;
        onSave: (options: Serenity.ServiceOptions<Serenity.SaveResponse>, callback: (response: Serenity.SaveResponse) => void) => void;
        onDelete: (options: Serenity.ServiceOptions<Serenity.DeleteResponse>, callback: (response: Serenity.DeleteResponse) => void) => void;
        destroy(): void;
        protected updateInterface(): void;
        protected saveHandler(options: Serenity.ServiceOptions<Serenity.SaveResponse>, callback: (response: Serenity.SaveResponse) => void): void;
        protected deleteHandler(options: Serenity.ServiceOptions<Serenity.DeleteResponse>, callback: (response: Serenity.DeleteResponse) => void): void;
    }
}
declare namespace FormulationManagementSystems.BasicSamples {
    class ChangingLookupTextDialog extends Common.GridEditorDialog<Northwind.OrderDetailRow> {
        protected getFormKey(): string;
        protected getLocalTextPrefix(): string;
        protected form: ChangingLookupTextForm;
        constructor();
        protected updateInterface(): void;
    }
}
declare namespace FormulationManagementSystems.BasicSamples {
    /**
     * Our custom product editor type
     */
    class ChangingLookupTextEditor extends Serenity.LookupEditorBase<Serenity.LookupEditorOptions, Northwind.ProductRow> {
        constructor(container: JQuery, options: Serenity.LookupEditorOptions);
        protected getLookupKey(): string;
        protected getItemText(item: Northwind.ProductRow, lookup: Q.Lookup<Northwind.ProductRow>): string;
    }
}
declare namespace FormulationManagementSystems.Northwind {
    class OrderDetailDialog extends Common.GridEditorDialog<OrderDetailRow> {
        protected getFormKey(): string;
        protected getLocalTextPrefix(): string;
        protected form: OrderDetailForm;
        constructor();
    }
}
declare namespace FormulationManagementSystems.BasicSamples {
    /**
     * Our subclass of order detail dialog with a CategoryID property
     * that will be used to set CascadeValue of product editor
     */
    class FilteredLookupOrderDetailDialog extends Northwind.OrderDetailDialog {
        constructor();
        /**
         * This method is called just before an entity is loaded to dialog
         * This is also called for new record mode with an empty entity
         */
        protected beforeLoadEntity(entity: any): void;
        categoryID: number;
    }
}
declare namespace FormulationManagementSystems.Common {
    class GridEditorBase<TEntity> extends Serenity.EntityGrid<TEntity, any> implements Serenity.IGetEditValue, Serenity.ISetEditValue {
        protected getIdProperty(): string;
        protected nextId: number;
        constructor(container: JQuery);
        protected id(entity: TEntity): any;
        protected getNextId(): string;
        protected setNewId(entity: TEntity): void;
        protected save(opt: Serenity.ServiceOptions<any>, callback: (r: Serenity.ServiceResponse) => void): void;
        protected deleteEntity(id: number): boolean;
        protected validateEntity(row: TEntity, id: number): boolean;
        protected setEntities(items: TEntity[]): void;
        protected getNewEntity(): TEntity;
        protected getButtons(): Serenity.ToolButton[];
        protected editItem(entityOrId: any): void;
        getEditValue(property: any, target: any): void;
        setEditValue(source: any, property: any): void;
        value: TEntity[];
        protected getGridCanLoad(): boolean;
        protected usePager(): boolean;
        protected getInitialTitle(): any;
        protected createQuickSearchInput(): void;
    }
}
declare namespace FormulationManagementSystems.Northwind {
    class OrderDetailsEditor extends Common.GridEditorBase<OrderDetailRow> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof OrderDetailDialog;
        protected getLocalTextPrefix(): string;
        constructor(container: JQuery);
        validateEntity(row: any, id: any): boolean;
    }
}
declare namespace FormulationManagementSystems.BasicSamples {
    /**
     * Our subclass of Order Details editor with a CategoryID property
     */
    class FilteredLookupDetailEditor extends Northwind.OrderDetailsEditor {
        protected getDialogType(): typeof FilteredLookupOrderDetailDialog;
        constructor(container: JQuery);
        categoryID: number;
        /**
         * This method is called to initialize an edit dialog created by
         * grid editor when Add button or an edit link is clicked
         * We have an opportunity here to pass CategoryID to edit dialog
         */
        protected initEntityDialog(itemType: string, dialog: Serenity.Widget<any>): void;
    }
}
declare namespace FormulationManagementSystems.BasicSamples {
    /**
     * Basic order dialog with a category selection
     */
    class FilteredLookupInDetailDialog extends Serenity.EntityDialog<Northwind.OrderRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        private form;
        constructor();
    }
}
declare namespace FormulationManagementSystems.BasicSamples {
    /**
     * Subclass of OrderGrid to override dialog type to FilteredLookupInDetailDialog
     */
    class FilteredLookupInDetailGrid extends Northwind.OrderGrid {
        protected getDialogType(): typeof FilteredLookupInDetailDialog;
        constructor(container: JQuery);
    }
}
declare namespace FormulationManagementSystems.BasicSamples {
    /**
     * This is our custom product dialog that uses a different product form
     * (LookupFilterByMultipleForm) with our special category editor.
     */
    class LookupFilterByMultipleDialog extends Northwind.ProductDialog {
        protected getFormKey(): string;
    }
}
declare namespace FormulationManagementSystems.BasicSamples {
    /**
     * Subclass of ProductGrid to override dialog type to CloneableEntityDialog
     */
    class LookupFilterByMultipleGrid extends Northwind.ProductGrid {
        protected getDialogType(): typeof LookupFilterByMultipleDialog;
        constructor(container: JQuery);
        /**
         * This method is called just before List request is sent to service.
         * You have an opportunity here to cancel request or modify it.
         * Here we'll add a custom criteria to list request.
         */
        protected onViewSubmit(): boolean;
    }
}
declare namespace FormulationManagementSystems.BasicSamples {
    /**
     * This is our category editor that will show only categories of Produce and
     * Seafood. We are subclassing LookupEditorBase which also LookupEditor
     * derives from.
     *
     * After compiling and transforming templates, this editor type will be
     * available in server side to use in our LookupFilterByMultipleForm,
     * which is a version of ProductForm that uses our custom editor.
     */
    class ProduceSeafoodCategoryEditor extends Serenity.LookupEditorBase<Serenity.LookupEditorOptions, Northwind.CategoryRow> {
        constructor(container: JQuery, opt: Serenity.LookupEditorOptions);
        /**
         * Normally LookupEditor requires a lookup key to determine which set of
         * lookup data to show in editor. As our editor will only show category
         * data, we lock it to category lookup key.
         */
        protected getLookupKey(): string;
        /**
         * Here we are filtering by category name but you could filter by any field.
         * Just make sure the fields you filter on has [LookupInclude] attribute on them,
         * otherwise their value will be null in client side as they are not sent back
         * from server in lookup script.
         */
        protected getItems(lookup: Q.Lookup<Northwind.CategoryRow>): Northwind.CategoryRow[];
    }
}
declare namespace FormulationManagementSystems.BasicSamples {
    class HardcodedValuesDialog extends Serenity.PropertyDialog<any, any> {
        protected getFormKey(): string;
        protected form: HardcodedValuesForm;
        constructor();
    }
}
declare namespace FormulationManagementSystems.BasicSamples {
    /**
     * Our select editor with hardcoded values.
     *
     * When you define a new editor type, make sure you build
     * and transform templates for it to be available
     * in server side forms, e.g. [HardCodedValuesEditor]
     */
    class HardcodedValuesEditor extends Serenity.Select2Editor<any, any> {
        constructor(container: JQuery);
    }
}
declare namespace FormulationManagementSystems.BasicSamples {
    class StaticTextBlockDialog extends Serenity.PropertyDialog<any, any> {
        protected getFormKey(): string;
        protected form: StaticTextBlockForm;
        constructor();
        /**
         * Here we override loadInitialEntity method to set value for "DisplayFieldValue" field.
         * If this was an EntityDialog, your field value would be originating from server side entity.
         */
        protected loadInitialEntity(): void;
        protected getDialogOptions(): JQueryUI.DialogOptions;
    }
}
declare namespace FormulationManagementSystems.Common {
    class BulkServiceAction {
        protected keys: string[];
        protected queue: string[];
        protected queueIndex: number;
        protected progressDialog: BasicProgressDialog;
        protected pendingRequests: number;
        protected completedRequests: number;
        protected errorByKey: Q.Dictionary<Serenity.ServiceError>;
        private successCount;
        private errorCount;
        done: () => void;
        protected createProgressDialog(): void;
        protected getConfirmationFormat(): string;
        protected getConfirmationMessage(targetCount: any): string;
        protected confirm(targetCount: any, action: any): void;
        protected getNothingToProcessMessage(): string;
        protected nothingToProcess(): void;
        protected getParallelRequests(): number;
        protected getBatchSize(): number;
        protected startParallelExecution(): void;
        protected serviceCallCleanup(): void;
        protected executeForBatch(batch: string[]): void;
        protected executeNextBatch(): void;
        protected getAllHadErrorsFormat(): string;
        protected showAllHadErrors(): void;
        protected getSomeHadErrorsFormat(): string;
        protected showSomeHadErrors(): void;
        protected getAllSuccessFormat(): string;
        protected showAllSuccess(): void;
        protected showResults(): void;
        execute(keys: string[]): void;
        get_successCount(): any;
        set_successCount(value: number): void;
        get_errorCount(): any;
        set_errorCount(value: number): void;
    }
}
declare namespace FormulationManagementSystems.BasicSamples {
    class OrderBulkAction extends Common.BulkServiceAction {
        /**
         * This controls how many service requests will be used in parallel.
         * Determine this number based on how many requests your server
         * might be able to handle, and amount of wait on external resources.
         */
        protected getParallelRequests(): number;
        /**
         * These number of records IDs will be sent to your service in one
         * service call. If your service is designed to handle one record only,
         * set it to 1. But note that, if you have 5000 records, this will
         * result in 5000 service calls / requests.
         */
        protected getBatchSize(): number;
        /**
         * This is where you should call your service.
         * Batch parameter contains the selected order IDs
         * that should be processed in this service call.
         */
        protected executeForBatch(batch: any): void;
    }
}
declare namespace FormulationManagementSystems.BasicSamples {
    class CancellableBulkActionGrid extends Northwind.OrderGrid {
        private rowSelection;
        constructor(container: JQuery);
        protected createToolbarExtensions(): void;
        protected getButtons(): {
            title: string;
            cssClass: string;
            onClick: () => void;
        }[];
        protected getColumns(): Slick.Column[];
        protected getViewOptions(): Slick.RemoteViewOptions;
    }
}
declare namespace FormulationManagementSystems.BasicSamples {
    class ConditionalFormattingGrid extends Serenity.EntityGrid<Northwind.ProductRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): any;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
        /**
         * We override getColumns() to be able to add a custom CSS class to UnitPrice
         * We could also add this class in ProductColumns.cs but didn't want to modify
         * it solely for this sample.
         */
        protected getColumns(): Slick.Column[];
        /**
         * This method is called for all rows
         * @param item Data item for current row
         * @param index Index of the row in grid
         */
        protected getItemCssClass(item: Northwind.ProductRow, index: number): string;
    }
}
declare namespace FormulationManagementSystems.BasicSamples {
    class CustomLinksInGrid extends Northwind.OrderGrid {
        constructor(container: JQuery);
        /**
         * We override getColumns() to change format functions for some columns.
         * You could also write them as formatter classes, and use them at server side
         */
        protected getColumns(): Slick.Column[];
        protected onClick(e: JQueryEventObject, row: number, cell: number): void;
        /**
         * This method is called for columns with [EditLink] attribute,
         * but only for edit links of this grid's own item type.
         * It is also called by Add Product button with a NULL entityOrId
         * parameter so we should check that entityOrId is a string
         * to be sure it is originating from a link.
         *
         * As we changed format for other columns, this will only be called
         * for links in remaining OrderID column
         */
        protected editItem(entityOrId: any): void;
    }
}
declare namespace FormulationManagementSystems.BasicSamples {
    class DragDropSampleDialog extends Serenity.EntityDialog<DragDropSampleRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: DragDropSampleForm;
    }
}
declare namespace FormulationManagementSystems.BasicSamples {
    class DragDropSampleGrid extends Serenity.EntityGrid<DragDropSampleRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof DragDropSampleDialog;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        private dragging;
        constructor(container: JQuery);
        /**
         * This method will determine if item can be moved under a given target
         * An item can't be moved under itself, under one of its children
         */
        private canMoveUnder(item, target);
        /**
         * Gets children list of an item
         */
        private getChildren(item);
        /**
         * Gets all parents of an item
         */
        private getParents(item);
        protected getButtons(): any[];
        protected usePager(): boolean;
    }
}
declare namespace FormulationManagementSystems {
    class SelectableEntityGrid<TItem, TOptions> extends Serenity.EntityGrid<TItem, TOptions> {
        protected getSlickOptions(): Slick.GridOptions;
        protected createSlickGrid(): Slick.Grid;
    }
}
declare namespace FormulationManagementSystems.BasicSamples {
    class RowSelectionGrid extends SelectableEntityGrid<Northwind.SupplierRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): any;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace FormulationManagementSystems.BasicSamples {
    class GridFilteredByCriteria extends Northwind.ProductGrid {
        constructor(container: JQuery);
        protected onViewSubmit(): boolean;
    }
}
declare namespace FormulationManagementSystems.BasicSamples {
    class GroupingAndSummariesInGrid extends Northwind.ProductGrid {
        constructor(container: JQuery);
        protected createSlickGrid(): Slick.Grid;
        protected getColumns(): Slick.Column[];
        protected getSlickOptions(): Slick.GridOptions;
        protected usePager(): boolean;
        protected getButtons(): {
            title: string;
            cssClass: string;
            onClick: () => void;
        }[];
    }
}
declare namespace FormulationManagementSystems.BasicSamples {
    class InitialValuesForQuickFilters extends Northwind.OrderGrid {
        constructor(container: JQuery);
        /**
         * This method is called to get list of quick filters to be created for this grid.
         * By default, it returns quick filter objects corresponding to properties that
         * have a [QuickFilter] attribute at server side OrderColumns.cs
         */
        protected getQuickFilters(): Serenity.QuickFilter<Serenity.Widget<any>, any>[];
        /**
         * This method is another possible place to modify quick filter widgets.
         * It is where the quick filter widgets are actually created.
         *
         * By default, it calls getQuickFilters() then renders UI for these
         * quick filters.
         *
         * We could use getQuickFilters() method for ShipVia too,
         * but this is for demonstration purposes
         */
        protected createQuickFilters(): void;
    }
}
declare namespace FormulationManagementSystems.BasicSamples {
    class InlineActionGrid extends Northwind.CustomerGrid {
        constructor(container: JQuery);
        protected getColumns(): Slick.Column[];
        protected onClick(e: JQueryEventObject, row: number, cell: number): void;
    }
}
declare namespace FormulationManagementSystems.BasicSamples {
    class InlineImageFormatter implements Slick.Formatter, Serenity.IInitializeColumn {
        format(ctx: Slick.FormatterContext): string;
        initializeColumn(column: Slick.Column): void;
        fileProperty: string;
        thumb: boolean;
    }
}
declare namespace FormulationManagementSystems.BasicSamples {
    class InlineImageInGrid extends Serenity.EntityGrid<Northwind.ProductRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): any;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
        protected getSlickOptions(): Slick.GridOptions;
    }
}
declare namespace FormulationManagementSystems.BasicSamples {
    class ProductExcelImportDialog extends Serenity.PropertyDialog<any, any> {
        private form;
        constructor();
        protected getDialogTitle(): string;
        protected getDialogButtons(): Serenity.DialogButton[];
    }
}
declare namespace FormulationManagementSystems.BasicSamples {
    class ProductExcelImportGrid extends Northwind.ProductGrid {
        constructor(container: JQuery);
        /**
         * This method is called to get list of buttons to be created.
         */
        protected getButtons(): Serenity.ToolButton[];
    }
}
declare namespace FormulationManagementSystems.BasicSamples {
    class QuickFilterCustomization extends Serenity.EntityGrid<Northwind.OrderRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof Northwind.OrderDialog;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
        /**
         * This method is called to get list of quick filters to be created for this grid.
         * By default, it returns quick filter objects corresponding to properties that
         * have a [QuickFilter] attribute at server side OrderColumns.cs
         */
        protected getQuickFilters(): Serenity.QuickFilter<Serenity.Widget<any>, any>[];
    }
}
declare namespace FormulationManagementSystems.BasicSamples {
    class RemovingAddButton extends Northwind.SupplierGrid {
        constructor(container: JQuery);
        /**
         * This method is called to get list of buttons to be created.
         */
        protected getButtons(): Serenity.ToolButton[];
    }
}
declare namespace FormulationManagementSystems.BasicSamples {
    class CustomerGrossSalesGrid extends Serenity.EntityGrid<Northwind.CustomerGrossSalesRow, any> {
        protected getColumnsKey(): string;
        protected getIdProperty(): string;
        protected getNameProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        private nextId;
        constructor(container: JQuery);
        /**
         * This method is called to preprocess data returned from the list service
         */
        protected onViewProcessData(response: Serenity.ListResponse<Northwind.SalesByCategoryRow>): Serenity.ListResponse<Northwind.SalesByCategoryRow>;
        protected getButtons(): any[];
        protected createSlickGrid(): Slick.Grid;
        protected getSlickOptions(): Slick.GridOptions;
        protected usePager(): boolean;
        protected getQuickFilters(): Serenity.QuickFilter<Serenity.Widget<any>, any>[];
    }
}
declare namespace FormulationManagementSystems.BasicSamples {
    class TreeGrid extends Northwind.OrderGrid {
        private treeMixin;
        constructor(container: JQuery);
        protected usePager(): boolean;
    }
}
declare namespace FormulationManagementSystems.BasicSamples {
    class ViewWithoutIDGrid extends Serenity.EntityGrid<Northwind.SalesByCategoryRow, any> {
        protected getColumnsKey(): string;
        protected getIdProperty(): string;
        protected getNameProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        private nextId;
        constructor(container: JQuery);
        /**
         * This method is called to preprocess data returned from the list service
         */
        protected onViewProcessData(response: Serenity.ListResponse<Northwind.SalesByCategoryRow>): Serenity.ListResponse<Northwind.SalesByCategoryRow>;
        protected getButtons(): any[];
    }
}
declare namespace FormulationManagementSystems.BasicSamples {
    class VSGalleryQAGrid extends Serenity.EntityGrid<BasicSamples.VSGalleryQAThread, any> {
        protected getColumnsKey(): string;
        protected getIdProperty(): string;
        protected getService(): string;
        constructor(container: JQuery);
        protected getButtons(): any[];
        protected getSlickOptions(): Slick.GridOptions;
        protected getColumns(): Slick.Column[];
        protected getInitialTitle(): any;
    }
}
declare namespace FormulationManagementSystems.BasicSamples {
    class WrappedHeadersGrid extends Northwind.OrderGrid {
        constructor(container: JQuery);
    }
}
declare namespace FormulationManagementSystems.LanguageList {
    function getValue(): string[][];
}
declare namespace FormulationManagementSystems.ScriptInitialization {
}
declare namespace FormulationManagementSystems {
    class BasicProgressDialog extends Serenity.TemplatedDialog<any> {
        constructor();
        cancelled: boolean;
        max: number;
        value: number;
        title: string;
        cancelTitle: string;
        getDialogOptions(): JQueryUI.DialogOptions;
        initDialog(): void;
        getTemplate(): string;
    }
}
declare namespace FormulationManagementSystems.DialogUtils {
    function pendingChangesConfirmation(element: JQuery, hasPendingChanges: () => boolean): void;
}
declare namespace FormulationManagementSystems.Common {
    class EnumSelectFormatter implements Slick.Formatter {
        constructor();
        format(ctx: Slick.FormatterContext): string;
        enumKey: string;
        allowClear: boolean;
        emptyItemText: string;
    }
}
declare namespace FormulationManagementSystems.Common {
    interface ExcelExportOptions {
        grid: Serenity.DataGrid<any, any>;
        service: string;
        onViewSubmit: () => boolean;
        title?: string;
        hint?: string;
        separator?: boolean;
    }
    namespace ExcelExportHelper {
        function createToolButton(options: ExcelExportOptions): Serenity.ToolButton;
    }
}
declare namespace FormulationManagementSystems {
    /**
     * This is an editor widget but it only displays a text, not edits it.
     *
     */
    class StaticTextBlock extends Serenity.Widget<StaticTextBlockOptions> implements Serenity.ISetEditValue {
        private value;
        constructor(container: JQuery, options: StaticTextBlockOptions);
        private updateElementContent();
        /**
         * By implementing ISetEditValue interface, we allow this editor to display its field value.
         * But only do this when our text content is not explicitly set in options
         */
        setEditValue(source: any, property: Serenity.PropertyItem): void;
    }
    interface StaticTextBlockOptions {
        text: string;
        isHtml: boolean;
        isLocalText: boolean;
        hideLabel: boolean;
    }
}
declare namespace FormulationManagementSystems.Common {
    class LanguageSelection extends Serenity.Widget<any> {
        constructor(select: JQuery, currentLanguage: string);
    }
}
declare namespace FormulationManagementSystems.Common {
    class SidebarSearch extends Serenity.Widget<any> {
        private menuUL;
        constructor(input: JQuery, menuUL: JQuery);
        protected updateMatchFlags(text: string): void;
    }
}
declare namespace FormulationManagementSystems.Common {
    class ThemeSelection extends Serenity.Widget<any> {
        constructor(select: JQuery);
        protected getCurrentTheme(): string;
    }
}
declare var jsPDF: any;
declare namespace FormulationManagementSystems.Common {
    interface PdfExportOptions {
        grid: Serenity.DataGrid<any, any>;
        onViewSubmit: () => boolean;
        title?: string;
        hint?: string;
        separator?: boolean;
        reportTitle?: string;
        titleTop?: number;
        titleFontSize?: number;
        fileName?: string;
        pageNumbers?: boolean;
        columnTitles?: {
            [key: string]: string;
        };
        tableOptions?: jsPDF.AutoTableOptions;
        output?: string;
        autoPrint?: boolean;
        printDateTimeHeader?: boolean;
    }
    namespace PdfExportHelper {
        function exportToPdf(options: PdfExportOptions): void;
        function createToolButton(options: PdfExportOptions): Serenity.ToolButton;
    }
}
declare var jsPDF: any;
declare namespace FormulationManagementSystems.Common {
    class ReportDialog extends Serenity.TemplatedDialog<ReportDialogOptions> {
        private report;
        private propertyGrid;
        constructor(options: ReportDialogOptions);
        protected getDialogButtons(): any;
        protected createPropertyGrid(): void;
        protected loadReport(reportKey: string): void;
        protected updateInterface(): void;
        executeReport(target: string, ext: string, download: boolean): void;
        getToolbarButtons(): {
            title: string;
            cssClass: string;
            onClick: () => void;
        }[];
    }
    interface ReportDialogOptions {
        reportKey: string;
    }
}
declare namespace FormulationManagementSystems.Common {
    interface ReportExecuteOptions {
        reportKey: string;
        download?: boolean;
        extension?: 'pdf' | 'htm' | 'html' | 'xlsx' | 'docx';
        getParams?: () => any;
        params?: {
            [key: string]: any;
        };
        target?: string;
    }
    interface ReportButtonOptions extends ReportExecuteOptions {
        title?: string;
        cssClass?: string;
        icon?: string;
    }
    namespace ReportHelper {
        function createToolButton(options: ReportButtonOptions): Serenity.ToolButton;
        function execute(options: ReportExecuteOptions): void;
    }
}
declare var jsPDF: any;
declare namespace FormulationManagementSystems.Common {
    class ReportPage extends Serenity.Widget<any> {
        private reportKey;
        private propertyItems;
        private propertyGrid;
        constructor(element: JQuery);
        protected updateMatchFlags(text: string): void;
        protected categoryClick(e: any): void;
        protected reportLinkClick(e: any): void;
    }
}
declare namespace FormulationManagementSystems.Common {
    class UserPreferenceStorage implements Serenity.SettingStorage {
        getItem(key: string): string;
        setItem(key: string, data: string): void;
    }
}
declare namespace FormulationManagementSystems.Membership {
    class ChangePasswordPanel extends Serenity.PropertyPanel<ChangePasswordRequest, any> {
        protected getFormKey(): string;
        private form;
        constructor(container: JQuery);
    }
}
declare namespace FormulationManagementSystems.Membership {
    class ForgotPasswordPanel extends Serenity.PropertyPanel<ForgotPasswordRequest, any> {
        protected getFormKey(): string;
        private form;
        constructor(container: JQuery);
    }
}
declare namespace FormulationManagementSystems.Membership {
    class ResetPasswordPanel extends Serenity.PropertyPanel<ResetPasswordRequest, any> {
        protected getFormKey(): string;
        private form;
        constructor(container: JQuery);
    }
}
declare namespace FormulationManagementSystems.Membership {
    class SignUpPanel extends Serenity.PropertyPanel<SignUpRequest, any> {
        protected getFormKey(): string;
        private form;
        constructor(container: JQuery);
    }
}
declare namespace FormulationManagementSystems.Northwind {
    class CustomerEditor extends Serenity.LookupEditorBase<Serenity.LookupEditorOptions, CustomerRow> {
        constructor(hidden: JQuery);
        protected getLookupKey(): string;
        protected getItemText(item: any, lookup: any): string;
    }
}
declare namespace FormulationManagementSystems.Northwind {
    class CustomerOrderDialog extends OrderDialog {
        constructor();
        updateInterface(): void;
    }
}
declare namespace FormulationManagementSystems.Northwind {
    class CustomerOrdersGrid extends OrderGrid {
        protected getDialogType(): typeof CustomerOrderDialog;
        constructor(container: JQuery);
        protected getColumns(): Slick.Column[];
        protected initEntityDialog(itemType: any, dialog: any): void;
        protected addButtonClick(): void;
        protected getInitialTitle(): any;
        protected getGridCanLoad(): boolean;
        private _customerID;
        customerID: string;
    }
}
declare namespace FormulationManagementSystems.Northwind {
    class EmployeeListFormatter implements Slick.Formatter {
        format(ctx: Slick.FormatterContext): string;
    }
}
declare namespace FormulationManagementSystems.Northwind {
    class EmployeeFormatter implements Slick.Formatter {
        format(ctx: Slick.FormatterContext): string;
        genderProperty: string;
        initializeColumn(column: Slick.Column): void;
    }
}
declare namespace FormulationManagementSystems.Northwind {
    class NoteDialog extends Serenity.TemplatedDialog<any> {
        private textEditor;
        constructor();
        protected getTemplate(): string;
        protected getDialogOptions(): JQueryUI.DialogOptions;
        text: string;
        okClick: () => void;
    }
}
declare namespace FormulationManagementSystems.Northwind {
    class NotesEditor extends Serenity.TemplatedWidget<any> implements Serenity.IGetEditValue, Serenity.ISetEditValue {
        private isDirty;
        private items;
        constructor(div: JQuery);
        protected getTemplate(): string;
        protected updateContent(): void;
        protected addClick(): void;
        protected editClick(e: any): void;
        deleteClick(e: any): void;
        value: NoteRow[];
        getEditValue(prop: Serenity.PropertyItem, target: any): void;
        setEditValue(source: any, prop: Serenity.PropertyItem): void;
        get_isDirty(): boolean;
        set_isDirty(value: any): void;
        onChange: () => void;
    }
}
declare namespace FormulationManagementSystems.Northwind {
    class FreightFormatter implements Slick.Formatter {
        format(ctx: Slick.FormatterContext): string;
    }
}
declare namespace FormulationManagementSystems.Northwind {
    class RegionDialog extends Serenity.EntityDialog<RegionRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: RegionForm;
        protected getLanguages(): string[][];
    }
}
declare namespace FormulationManagementSystems.Northwind {
    class RegionGrid extends Serenity.EntityGrid<RegionRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): any;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace FormulationManagementSystems.Northwind {
    class PhoneEditor extends Serenity.StringEditor {
        constructor(input: JQuery);
        protected formatValue(): void;
        protected getFormattedValue(): string;
        multiple: boolean;
        get_value(): string;
        set_value(value: string): void;
        static validate(phone: string, isMultiple: boolean): string;
        static isValidPhone(phone: string): boolean;
        static formatPhone(phone: any): any;
        static formatMulti(phone: string, format: (s: string) => string): string;
        static isValidMulti(phone: string, check: (s: string) => boolean): boolean;
    }
}
declare namespace FormulationManagementSystems.Northwind {
    class ShipperDialog extends Serenity.EntityDialog<ShipperRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: ShipperForm;
        protected getLanguages(): string[][];
    }
}
declare namespace FormulationManagementSystems.Northwind {
    class ShipperFormatter implements Slick.Formatter {
        format(ctx: Slick.FormatterContext): string;
    }
}
declare namespace FormulationManagementSystems.Northwind {
    class ShipperGrid extends Serenity.EntityGrid<ShipperRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): any;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace FormulationManagementSystems.Northwind {
    class TerritoryDialog extends Serenity.EntityDialog<TerritoryRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: TerritoryForm;
        protected getLanguages(): string[][];
    }
}
declare namespace FormulationManagementSystems.Northwind {
    class TerritoryGrid extends Serenity.EntityGrid<TerritoryRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): any;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace FormulationManagementSystems.VDSCSQL {
    class AdditonFormDialog extends Serenity.EntityDialog<AdditonFormRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: AdditonFormForm;
    }
}
declare namespace FormulationManagementSystems.VDSCSQL {
    class AdditonFormGrid extends Serenity.EntityGrid<AdditonFormRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof AdditonFormDialog;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace FormulationManagementSystems.VDSCSQL {
    class BulkBatchDialog extends Serenity.EntityDialog<BulkBatchRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: BulkBatchForm;
    }
}
declare namespace FormulationManagementSystems.VDSCSQL {
    class BulkBatchGrid extends Serenity.EntityGrid<BulkBatchRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof BulkBatchDialog;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace FormulationManagementSystems.VDSCSQL {
    class BulkBatchDataDialog extends Serenity.EntityDialog<BulkBatchDataRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: BulkBatchDataForm;
    }
}
declare namespace FormulationManagementSystems.VDSCSQL {
    class BulkBatchDataGrid extends Serenity.EntityGrid<BulkBatchDataRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof BulkBatchDataDialog;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace FormulationManagementSystems.VDSCSQL {
    class BulkScanDialog extends Serenity.EntityDialog<BulkScanRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: BulkScanForm;
    }
}
declare namespace FormulationManagementSystems.VDSCSQL {
    class BulkScanGrid extends Serenity.EntityGrid<BulkScanRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof BulkScanDialog;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace FormulationManagementSystems.VDSCSQL {
    class BulkStorageTankDialog extends Serenity.EntityDialog<BulkStorageTankRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: BulkStorageTankForm;
    }
}
declare namespace FormulationManagementSystems.VDSCSQL {
    class BulkStorageTankGrid extends Serenity.EntityGrid<BulkStorageTankRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof BulkStorageTankDialog;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace FormulationManagementSystems.VDSCSQL {
    class ConsumptionDialog extends Serenity.EntityDialog<ConsumptionRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: ConsumptionForm;
    }
}
declare namespace FormulationManagementSystems.VDSCSQL {
    class ConsumptionGrid extends Serenity.EntityGrid<ConsumptionRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof ConsumptionDialog;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace FormulationManagementSystems.VDSCSQL {
    class CustomerDialog extends Serenity.EntityDialog<CustomerRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: CustomerForm;
    }
}
declare namespace FormulationManagementSystems.VDSCSQL {
    class CustomerGrid extends Serenity.EntityGrid<CustomerRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof CustomerDialog;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace FormulationManagementSystems.VDSCSQL {
    class EmployeeDialog extends Serenity.EntityDialog<EmployeeRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: EmployeeForm;
    }
}
declare namespace FormulationManagementSystems.VDSCSQL {
    class EmployeeGrid extends Serenity.EntityGrid<EmployeeRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof EmployeeDialog;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace FormulationManagementSystems.VDSCSQL {
    class EmployeeOvertimeDialog extends Serenity.EntityDialog<EmployeeOvertimeRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: EmployeeOvertimeForm;
    }
}
declare namespace FormulationManagementSystems.VDSCSQL {
    class EmployeeOvertimeGrid extends Serenity.EntityGrid<EmployeeOvertimeRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof EmployeeOvertimeDialog;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace FormulationManagementSystems.VDSCSQL {
    class EmployeePhotoDialog extends Serenity.EntityDialog<EmployeePhotoRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: EmployeePhotoForm;
    }
}
declare namespace FormulationManagementSystems.VDSCSQL {
    class EmployeePhotoGrid extends Serenity.EntityGrid<EmployeePhotoRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof EmployeePhotoDialog;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace FormulationManagementSystems.VDSCSQL {
    class ManagerDialog extends Serenity.EntityDialog<ManagerRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: ManagerForm;
    }
}
declare namespace FormulationManagementSystems.VDSCSQL {
    class ManagerGrid extends Serenity.EntityGrid<ManagerRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof ManagerDialog;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace FormulationManagementSystems.VDSCSQL {
    class MaterialDialog extends Serenity.EntityDialog<MaterialRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: MaterialForm;
    }
}
declare namespace FormulationManagementSystems.VDSCSQL {
    class MaterialGrid extends Serenity.EntityGrid<MaterialRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof MaterialDialog;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace FormulationManagementSystems.VDSCSQL {
    class ProductionRequestDialog extends Serenity.EntityDialog<ProductionRequestRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: ProductionRequestForm;
    }
}
declare namespace FormulationManagementSystems.VDSCSQL {
    class ProductionRequestGrid extends Serenity.EntityGrid<ProductionRequestRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof ProductionRequestDialog;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace FormulationManagementSystems.VDSCSQL {
    class RecipeDialog extends Serenity.EntityDialog<RecipeRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: RecipeForm;
    }
}
declare namespace FormulationManagementSystems.VDSCSQL {
    class RecipeGrid extends Serenity.EntityGrid<RecipeRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof RecipeDialog;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace FormulationManagementSystems.VDSCSQL {
    class RecipePhaseDialog extends Serenity.EntityDialog<RecipePhaseRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: RecipePhaseForm;
    }
}
declare namespace FormulationManagementSystems.VDSCSQL {
    class RecipePhaseGrid extends Serenity.EntityGrid<RecipePhaseRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof RecipePhaseDialog;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace FormulationManagementSystems.VDSCSQL {
    class SrcDstPathDialog extends Serenity.EntityDialog<SrcDstPathRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: SrcDstPathForm;
    }
}
declare namespace FormulationManagementSystems.VDSCSQL {
    class SrcDstPathGrid extends Serenity.EntityGrid<SrcDstPathRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof SrcDstPathDialog;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace FormulationManagementSystems.VDSCSQL {
    class SrlBulkMovementDialog extends Serenity.EntityDialog<SrlBulkMovementRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: SrlBulkMovementForm;
    }
}
declare namespace FormulationManagementSystems.VDSCSQL {
    class SrlBulkMovementGrid extends Serenity.EntityGrid<SrlBulkMovementRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof SrlBulkMovementDialog;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace FormulationManagementSystems.VDSCSQL {
    class SrlBulkMovementDataDialog extends Serenity.EntityDialog<SrlBulkMovementDataRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        protected form: SrlBulkMovementDataForm;
    }
}
declare namespace FormulationManagementSystems.VDSCSQL {
    class SrlBulkMovementDataGrid extends Serenity.EntityGrid<SrlBulkMovementDataRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof SrlBulkMovementDataDialog;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace FormulationManagementSystems.VDSCSQL {
    class SrlBulkStorageTankDataDialog extends Serenity.EntityDialog<SrlBulkStorageTankDataRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: SrlBulkStorageTankDataForm;
    }
}
declare namespace FormulationManagementSystems.VDSCSQL {
    class SrlBulkStorageTankDataGrid extends Serenity.EntityGrid<SrlBulkStorageTankDataRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof SrlBulkStorageTankDataDialog;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace FormulationManagementSystems.VDSCSQL {
    class SrlBulkTerminalClearanceDialog extends Serenity.EntityDialog<SrlBulkTerminalClearanceRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: SrlBulkTerminalClearanceForm;
    }
}
declare namespace FormulationManagementSystems.VDSCSQL {
    class SrlBulkTerminalClearanceGrid extends Serenity.EntityGrid<SrlBulkTerminalClearanceRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof SrlBulkTerminalClearanceDialog;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace FormulationManagementSystems.VDSCSQL {
    class SrlCarrierDialog extends Serenity.EntityDialog<SrlCarrierRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: SrlCarrierForm;
    }
}
declare namespace FormulationManagementSystems.VDSCSQL {
    class SrlCarrierGrid extends Serenity.EntityGrid<SrlCarrierRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof SrlCarrierDialog;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace FormulationManagementSystems.VDSCSQL {
    class SrlMsdsDialog extends Serenity.EntityDialog<SrlMsdsRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        protected form: SrlMsdsForm;
    }
}
declare namespace FormulationManagementSystems.VDSCSQL {
    class SrlMsdsGrid extends Serenity.EntityGrid<SrlMsdsRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof SrlMsdsDialog;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace FormulationManagementSystems.VDSCSQL {
    class StepInstructionDialog extends Serenity.EntityDialog<StepInstructionRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: StepInstructionForm;
    }
}
declare namespace FormulationManagementSystems.VDSCSQL {
    class StepInstructionGrid extends Serenity.EntityGrid<StepInstructionRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof StepInstructionDialog;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace FormulationManagementSystems.VDSCSQL {
    class StepInstructionTypeDialog extends Serenity.EntityDialog<StepInstructionTypeRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: StepInstructionTypeForm;
    }
}
declare namespace FormulationManagementSystems.VDSCSQL {
    class StepInstructionTypeGrid extends Serenity.EntityGrid<StepInstructionTypeRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof StepInstructionTypeDialog;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace FormulationManagementSystems.VDSCSQL {
    class StepValueEntriesDialog extends Serenity.EntityDialog<StepValueEntriesRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: StepValueEntriesForm;
    }
}
declare namespace FormulationManagementSystems.VDSCSQL {
    class StepValueEntriesGrid extends Serenity.EntityGrid<StepValueEntriesRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof StepValueEntriesDialog;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace FormulationManagementSystems.VDSCSQL {
    class ValueEntriesDataDialog extends Serenity.EntityDialog<ValueEntriesDataRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: ValueEntriesDataForm;
    }
}
declare namespace FormulationManagementSystems.VDSCSQL {
    class ValueEntriesDataGrid extends Serenity.EntityGrid<ValueEntriesDataRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof ValueEntriesDataDialog;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace FormulationManagementSystems.VDSCSQL {
    class ValveListDialog extends Serenity.EntityDialog<ValveListRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: ValveListForm;
    }
}
declare namespace FormulationManagementSystems.VDSCSQL {
    class ValveListGrid extends Serenity.EntityGrid<ValveListRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof ValveListDialog;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace FormulationManagementSystems.VDSCSQL {
    class ValvePositionMapDialog extends Serenity.EntityDialog<ValvePositionMapRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: ValvePositionMapForm;
    }
}
declare namespace FormulationManagementSystems.VDSCSQL {
    class ValvePositionMapGrid extends Serenity.EntityGrid<ValvePositionMapRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof ValvePositionMapDialog;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace FormulationManagementSystems.VDSCSQL {
    class VdscAreaDialog extends Serenity.EntityDialog<VdscAreaRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: VdscAreaForm;
    }
}
declare namespace FormulationManagementSystems.VDSCSQL {
    class VdscAreaGrid extends Serenity.EntityGrid<VdscAreaRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof VdscAreaDialog;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace FormulationManagementSystems.VDSCSQL {
    class VdscAreaGroupDialog extends Serenity.EntityDialog<VdscAreaGroupRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        protected form: VdscAreaGroupForm;
    }
}
declare namespace FormulationManagementSystems.VDSCSQL {
    class VdscAreaGroupGrid extends Serenity.EntityGrid<VdscAreaGroupRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof VdscAreaGroupDialog;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace FormulationManagementSystems.VDSCSQL {
    class VdscDepartmentDialog extends Serenity.EntityDialog<VdscDepartmentRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: VdscDepartmentForm;
    }
}
declare namespace FormulationManagementSystems.VDSCSQL {
    class VdscDepartmentGrid extends Serenity.EntityGrid<VdscDepartmentRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof VdscDepartmentDialog;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
