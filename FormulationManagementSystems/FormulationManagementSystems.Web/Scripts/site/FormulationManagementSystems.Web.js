var FormulationManagementSystems;
(function (FormulationManagementSystems) {
    var Administration;
    (function (Administration) {
        var LanguageForm = (function (_super) {
            __extends(LanguageForm, _super);
            function LanguageForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!LanguageForm.init) {
                    LanguageForm.init = true;
                    var s = Serenity;
                    var w0 = s.StringEditor;
                    Q.initFormType(LanguageForm, [
                        'LanguageId', w0,
                        'LanguageName', w0
                    ]);
                }
                return _this;
            }
            return LanguageForm;
        }(Serenity.PrefixedContext));
        LanguageForm.formKey = 'Administration.Language';
        Administration.LanguageForm = LanguageForm;
    })(Administration = FormulationManagementSystems.Administration || (FormulationManagementSystems.Administration = {}));
})(FormulationManagementSystems || (FormulationManagementSystems = {}));
var FormulationManagementSystems;
(function (FormulationManagementSystems) {
    var Administration;
    (function (Administration) {
        var LanguageRow;
        (function (LanguageRow) {
            LanguageRow.idProperty = 'Id';
            LanguageRow.nameProperty = 'LanguageName';
            LanguageRow.localTextPrefix = 'Administration.Language';
            LanguageRow.lookupKey = 'Administration.Language';
            function getLookup() {
                return Q.getLookup('Administration.Language');
            }
            LanguageRow.getLookup = getLookup;
        })(LanguageRow = Administration.LanguageRow || (Administration.LanguageRow = {}));
    })(Administration = FormulationManagementSystems.Administration || (FormulationManagementSystems.Administration = {}));
})(FormulationManagementSystems || (FormulationManagementSystems = {}));
var FormulationManagementSystems;
(function (FormulationManagementSystems) {
    var Administration;
    (function (Administration) {
        var LanguageService;
        (function (LanguageService) {
            LanguageService.baseUrl = 'Administration/Language';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                LanguageService[x] = function (r, s, o) {
                    return Q.serviceRequest(LanguageService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(LanguageService = Administration.LanguageService || (Administration.LanguageService = {}));
    })(Administration = FormulationManagementSystems.Administration || (FormulationManagementSystems.Administration = {}));
})(FormulationManagementSystems || (FormulationManagementSystems = {}));
var FormulationManagementSystems;
(function (FormulationManagementSystems) {
    var Administration;
    (function (Administration) {
        var RoleForm = (function (_super) {
            __extends(RoleForm, _super);
            function RoleForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!RoleForm.init) {
                    RoleForm.init = true;
                    var s = Serenity;
                    var w0 = s.StringEditor;
                    Q.initFormType(RoleForm, [
                        'RoleName', w0
                    ]);
                }
                return _this;
            }
            return RoleForm;
        }(Serenity.PrefixedContext));
        RoleForm.formKey = 'Administration.Role';
        Administration.RoleForm = RoleForm;
    })(Administration = FormulationManagementSystems.Administration || (FormulationManagementSystems.Administration = {}));
})(FormulationManagementSystems || (FormulationManagementSystems = {}));
var FormulationManagementSystems;
(function (FormulationManagementSystems) {
    var Administration;
    (function (Administration) {
        var RolePermissionRow;
        (function (RolePermissionRow) {
            RolePermissionRow.idProperty = 'RolePermissionId';
            RolePermissionRow.nameProperty = 'PermissionKey';
            RolePermissionRow.localTextPrefix = 'Administration.RolePermission';
        })(RolePermissionRow = Administration.RolePermissionRow || (Administration.RolePermissionRow = {}));
    })(Administration = FormulationManagementSystems.Administration || (FormulationManagementSystems.Administration = {}));
})(FormulationManagementSystems || (FormulationManagementSystems = {}));
var FormulationManagementSystems;
(function (FormulationManagementSystems) {
    var Administration;
    (function (Administration) {
        var RolePermissionService;
        (function (RolePermissionService) {
            RolePermissionService.baseUrl = 'Administration/RolePermission';
            [
                'Update',
                'List'
            ].forEach(function (x) {
                RolePermissionService[x] = function (r, s, o) {
                    return Q.serviceRequest(RolePermissionService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(RolePermissionService = Administration.RolePermissionService || (Administration.RolePermissionService = {}));
    })(Administration = FormulationManagementSystems.Administration || (FormulationManagementSystems.Administration = {}));
})(FormulationManagementSystems || (FormulationManagementSystems = {}));
var FormulationManagementSystems;
(function (FormulationManagementSystems) {
    var Administration;
    (function (Administration) {
        var RoleRow;
        (function (RoleRow) {
            RoleRow.idProperty = 'RoleId';
            RoleRow.nameProperty = 'RoleName';
            RoleRow.localTextPrefix = 'Administration.Role';
            RoleRow.lookupKey = 'Administration.Role';
            function getLookup() {
                return Q.getLookup('Administration.Role');
            }
            RoleRow.getLookup = getLookup;
        })(RoleRow = Administration.RoleRow || (Administration.RoleRow = {}));
    })(Administration = FormulationManagementSystems.Administration || (FormulationManagementSystems.Administration = {}));
})(FormulationManagementSystems || (FormulationManagementSystems = {}));
var FormulationManagementSystems;
(function (FormulationManagementSystems) {
    var Administration;
    (function (Administration) {
        var RoleService;
        (function (RoleService) {
            RoleService.baseUrl = 'Administration/Role';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                RoleService[x] = function (r, s, o) {
                    return Q.serviceRequest(RoleService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(RoleService = Administration.RoleService || (Administration.RoleService = {}));
    })(Administration = FormulationManagementSystems.Administration || (FormulationManagementSystems.Administration = {}));
})(FormulationManagementSystems || (FormulationManagementSystems = {}));
var FormulationManagementSystems;
(function (FormulationManagementSystems) {
    var Administration;
    (function (Administration) {
        var TranslationService;
        (function (TranslationService) {
            TranslationService.baseUrl = 'Administration/Translation';
            [
                'List',
                'Update'
            ].forEach(function (x) {
                TranslationService[x] = function (r, s, o) {
                    return Q.serviceRequest(TranslationService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(TranslationService = Administration.TranslationService || (Administration.TranslationService = {}));
    })(Administration = FormulationManagementSystems.Administration || (FormulationManagementSystems.Administration = {}));
})(FormulationManagementSystems || (FormulationManagementSystems = {}));
var FormulationManagementSystems;
(function (FormulationManagementSystems) {
    var Administration;
    (function (Administration) {
        var UserForm = (function (_super) {
            __extends(UserForm, _super);
            function UserForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!UserForm.init) {
                    UserForm.init = true;
                    var s = Serenity;
                    var w0 = s.StringEditor;
                    var w1 = s.EmailEditor;
                    var w2 = s.ImageUploadEditor;
                    var w3 = s.PasswordEditor;
                    Q.initFormType(UserForm, [
                        'Username', w0,
                        'DisplayName', w0,
                        'Email', w1,
                        'UserImage', w2,
                        'Password', w3,
                        'PasswordConfirm', w3,
                        'Source', w0
                    ]);
                }
                return _this;
            }
            return UserForm;
        }(Serenity.PrefixedContext));
        UserForm.formKey = 'Administration.User';
        Administration.UserForm = UserForm;
    })(Administration = FormulationManagementSystems.Administration || (FormulationManagementSystems.Administration = {}));
})(FormulationManagementSystems || (FormulationManagementSystems = {}));
var FormulationManagementSystems;
(function (FormulationManagementSystems) {
    var Administration;
    (function (Administration) {
        var UserPermissionRow;
        (function (UserPermissionRow) {
            UserPermissionRow.idProperty = 'UserPermissionId';
            UserPermissionRow.nameProperty = 'PermissionKey';
            UserPermissionRow.localTextPrefix = 'Administration.UserPermission';
        })(UserPermissionRow = Administration.UserPermissionRow || (Administration.UserPermissionRow = {}));
    })(Administration = FormulationManagementSystems.Administration || (FormulationManagementSystems.Administration = {}));
})(FormulationManagementSystems || (FormulationManagementSystems = {}));
var FormulationManagementSystems;
(function (FormulationManagementSystems) {
    var Administration;
    (function (Administration) {
        var UserPermissionService;
        (function (UserPermissionService) {
            UserPermissionService.baseUrl = 'Administration/UserPermission';
            [
                'Update',
                'List',
                'ListRolePermissions',
                'ListPermissionKeys'
            ].forEach(function (x) {
                UserPermissionService[x] = function (r, s, o) {
                    return Q.serviceRequest(UserPermissionService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(UserPermissionService = Administration.UserPermissionService || (Administration.UserPermissionService = {}));
    })(Administration = FormulationManagementSystems.Administration || (FormulationManagementSystems.Administration = {}));
})(FormulationManagementSystems || (FormulationManagementSystems = {}));
var FormulationManagementSystems;
(function (FormulationManagementSystems) {
    var Administration;
    (function (Administration) {
        var UserRoleRow;
        (function (UserRoleRow) {
            UserRoleRow.idProperty = 'UserRoleId';
            UserRoleRow.localTextPrefix = 'Administration.UserRole';
        })(UserRoleRow = Administration.UserRoleRow || (Administration.UserRoleRow = {}));
    })(Administration = FormulationManagementSystems.Administration || (FormulationManagementSystems.Administration = {}));
})(FormulationManagementSystems || (FormulationManagementSystems = {}));
var FormulationManagementSystems;
(function (FormulationManagementSystems) {
    var Administration;
    (function (Administration) {
        var UserRoleService;
        (function (UserRoleService) {
            UserRoleService.baseUrl = 'Administration/UserRole';
            [
                'Update',
                'List'
            ].forEach(function (x) {
                UserRoleService[x] = function (r, s, o) {
                    return Q.serviceRequest(UserRoleService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(UserRoleService = Administration.UserRoleService || (Administration.UserRoleService = {}));
    })(Administration = FormulationManagementSystems.Administration || (FormulationManagementSystems.Administration = {}));
})(FormulationManagementSystems || (FormulationManagementSystems = {}));
var FormulationManagementSystems;
(function (FormulationManagementSystems) {
    var Administration;
    (function (Administration) {
        var UserRow;
        (function (UserRow) {
            UserRow.idProperty = 'UserId';
            UserRow.isActiveProperty = 'IsActive';
            UserRow.nameProperty = 'Username';
            UserRow.localTextPrefix = 'Administration.User';
            UserRow.lookupKey = 'Administration.User';
            function getLookup() {
                return Q.getLookup('Administration.User');
            }
            UserRow.getLookup = getLookup;
        })(UserRow = Administration.UserRow || (Administration.UserRow = {}));
    })(Administration = FormulationManagementSystems.Administration || (FormulationManagementSystems.Administration = {}));
})(FormulationManagementSystems || (FormulationManagementSystems = {}));
var FormulationManagementSystems;
(function (FormulationManagementSystems) {
    var Administration;
    (function (Administration) {
        var UserService;
        (function (UserService) {
            UserService.baseUrl = 'Administration/User';
            [
                'Create',
                'Update',
                'Delete',
                'Undelete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                UserService[x] = function (r, s, o) {
                    return Q.serviceRequest(UserService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(UserService = Administration.UserService || (Administration.UserService = {}));
    })(Administration = FormulationManagementSystems.Administration || (FormulationManagementSystems.Administration = {}));
})(FormulationManagementSystems || (FormulationManagementSystems = {}));
var FormulationManagementSystems;
(function (FormulationManagementSystems) {
    var BasicSamples;
    (function (BasicSamples) {
        var BasicSamplesService;
        (function (BasicSamplesService) {
            BasicSamplesService.baseUrl = 'BasicSamples/BasicSamples';
            [
                'OrdersByShipper',
                'OrderBulkAction'
            ].forEach(function (x) {
                BasicSamplesService[x] = function (r, s, o) {
                    return Q.serviceRequest(BasicSamplesService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(BasicSamplesService = BasicSamples.BasicSamplesService || (BasicSamples.BasicSamplesService = {}));
    })(BasicSamples = FormulationManagementSystems.BasicSamples || (FormulationManagementSystems.BasicSamples = {}));
})(FormulationManagementSystems || (FormulationManagementSystems = {}));
var FormulationManagementSystems;
(function (FormulationManagementSystems) {
    var BasicSamples;
    (function (BasicSamples) {
        var ChangingLookupTextForm = (function (_super) {
            __extends(ChangingLookupTextForm, _super);
            function ChangingLookupTextForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!ChangingLookupTextForm.init) {
                    ChangingLookupTextForm.init = true;
                    var s = Serenity;
                    var w0 = BasicSamples.ChangingLookupTextEditor;
                    var w1 = s.DecimalEditor;
                    var w2 = s.IntegerEditor;
                    Q.initFormType(ChangingLookupTextForm, [
                        'ProductID', w0,
                        'UnitPrice', w1,
                        'Quantity', w2,
                        'Discount', w1
                    ]);
                }
                return _this;
            }
            return ChangingLookupTextForm;
        }(Serenity.PrefixedContext));
        ChangingLookupTextForm.formKey = 'BasicSamples.ChangingLookupText';
        BasicSamples.ChangingLookupTextForm = ChangingLookupTextForm;
    })(BasicSamples = FormulationManagementSystems.BasicSamples || (FormulationManagementSystems.BasicSamples = {}));
})(FormulationManagementSystems || (FormulationManagementSystems = {}));
var FormulationManagementSystems;
(function (FormulationManagementSystems) {
    var BasicSamples;
    (function (BasicSamples) {
        var CustomerGrossSalesService;
        (function (CustomerGrossSalesService) {
            CustomerGrossSalesService.baseUrl = 'BasicSamples/CustomerGrossSales';
            [
                'List'
            ].forEach(function (x) {
                CustomerGrossSalesService[x] = function (r, s, o) {
                    return Q.serviceRequest(CustomerGrossSalesService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(CustomerGrossSalesService = BasicSamples.CustomerGrossSalesService || (BasicSamples.CustomerGrossSalesService = {}));
    })(BasicSamples = FormulationManagementSystems.BasicSamples || (FormulationManagementSystems.BasicSamples = {}));
})(FormulationManagementSystems || (FormulationManagementSystems = {}));
var FormulationManagementSystems;
(function (FormulationManagementSystems) {
    var BasicSamples;
    (function (BasicSamples) {
        var DragDropSampleForm = (function (_super) {
            __extends(DragDropSampleForm, _super);
            function DragDropSampleForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!DragDropSampleForm.init) {
                    DragDropSampleForm.init = true;
                    var s = Serenity;
                    var w0 = s.StringEditor;
                    Q.initFormType(DragDropSampleForm, [
                        'Title', w0
                    ]);
                }
                return _this;
            }
            return DragDropSampleForm;
        }(Serenity.PrefixedContext));
        DragDropSampleForm.formKey = 'BasicSamples.DragDropSample';
        BasicSamples.DragDropSampleForm = DragDropSampleForm;
    })(BasicSamples = FormulationManagementSystems.BasicSamples || (FormulationManagementSystems.BasicSamples = {}));
})(FormulationManagementSystems || (FormulationManagementSystems = {}));
var FormulationManagementSystems;
(function (FormulationManagementSystems) {
    var BasicSamples;
    (function (BasicSamples) {
        var DragDropSampleRow;
        (function (DragDropSampleRow) {
            DragDropSampleRow.idProperty = 'Id';
            DragDropSampleRow.nameProperty = 'Title';
            DragDropSampleRow.localTextPrefix = 'Northwind.DragDropSample';
        })(DragDropSampleRow = BasicSamples.DragDropSampleRow || (BasicSamples.DragDropSampleRow = {}));
    })(BasicSamples = FormulationManagementSystems.BasicSamples || (FormulationManagementSystems.BasicSamples = {}));
})(FormulationManagementSystems || (FormulationManagementSystems = {}));
var FormulationManagementSystems;
(function (FormulationManagementSystems) {
    var BasicSamples;
    (function (BasicSamples) {
        var DragDropSampleService;
        (function (DragDropSampleService) {
            DragDropSampleService.baseUrl = 'BasicSamples/DragDropSample';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                DragDropSampleService[x] = function (r, s, o) {
                    return Q.serviceRequest(DragDropSampleService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(DragDropSampleService = BasicSamples.DragDropSampleService || (BasicSamples.DragDropSampleService = {}));
    })(BasicSamples = FormulationManagementSystems.BasicSamples || (FormulationManagementSystems.BasicSamples = {}));
})(FormulationManagementSystems || (FormulationManagementSystems = {}));
var FormulationManagementSystems;
(function (FormulationManagementSystems) {
    var BasicSamples;
    (function (BasicSamples) {
        var FilteredLookupInDetailForm = (function (_super) {
            __extends(FilteredLookupInDetailForm, _super);
            function FilteredLookupInDetailForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!FilteredLookupInDetailForm.init) {
                    FilteredLookupInDetailForm.init = true;
                    var s = Serenity;
                    var w0 = FormulationManagementSystems.Northwind.CustomerEditor;
                    var w1 = s.DateEditor;
                    var w2 = s.LookupEditor;
                    var w3 = BasicSamples.FilteredLookupDetailEditor;
                    Q.initFormType(FilteredLookupInDetailForm, [
                        'CustomerID', w0,
                        'OrderDate', w1,
                        'CategoryID', w2,
                        'DetailList', w3
                    ]);
                }
                return _this;
            }
            return FilteredLookupInDetailForm;
        }(Serenity.PrefixedContext));
        FilteredLookupInDetailForm.formKey = 'BasicSamples.FilteredLookupInDetail';
        BasicSamples.FilteredLookupInDetailForm = FilteredLookupInDetailForm;
    })(BasicSamples = FormulationManagementSystems.BasicSamples || (FormulationManagementSystems.BasicSamples = {}));
})(FormulationManagementSystems || (FormulationManagementSystems = {}));
var FormulationManagementSystems;
(function (FormulationManagementSystems) {
    var BasicSamples;
    (function (BasicSamples) {
        var HardcodedValuesForm = (function (_super) {
            __extends(HardcodedValuesForm, _super);
            function HardcodedValuesForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!HardcodedValuesForm.init) {
                    HardcodedValuesForm.init = true;
                    var s = Serenity;
                    var w0 = BasicSamples.HardcodedValuesEditor;
                    Q.initFormType(HardcodedValuesForm, [
                        'SomeValue', w0
                    ]);
                }
                return _this;
            }
            return HardcodedValuesForm;
        }(Serenity.PrefixedContext));
        HardcodedValuesForm.formKey = 'BasicSamples.HarcodedValues';
        BasicSamples.HardcodedValuesForm = HardcodedValuesForm;
    })(BasicSamples = FormulationManagementSystems.BasicSamples || (FormulationManagementSystems.BasicSamples = {}));
})(FormulationManagementSystems || (FormulationManagementSystems = {}));
var FormulationManagementSystems;
(function (FormulationManagementSystems) {
    var BasicSamples;
    (function (BasicSamples) {
        var LookupFilterByMultipleForm = (function (_super) {
            __extends(LookupFilterByMultipleForm, _super);
            function LookupFilterByMultipleForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!LookupFilterByMultipleForm.init) {
                    LookupFilterByMultipleForm.init = true;
                    var s = Serenity;
                    var w0 = s.StringEditor;
                    var w1 = s.ImageUploadEditor;
                    var w2 = s.BooleanEditor;
                    var w3 = s.LookupEditor;
                    var w4 = BasicSamples.ProduceSeafoodCategoryEditor;
                    var w5 = s.DecimalEditor;
                    var w6 = s.IntegerEditor;
                    Q.initFormType(LookupFilterByMultipleForm, [
                        'ProductName', w0,
                        'ProductImage', w1,
                        'Discontinued', w2,
                        'SupplierID', w3,
                        'CategoryID', w4,
                        'QuantityPerUnit', w0,
                        'UnitPrice', w5,
                        'UnitsInStock', w6,
                        'UnitsOnOrder', w6,
                        'ReorderLevel', w6
                    ]);
                }
                return _this;
            }
            return LookupFilterByMultipleForm;
        }(Serenity.PrefixedContext));
        LookupFilterByMultipleForm.formKey = 'BasicSamples.LookupFilterByMultiple';
        BasicSamples.LookupFilterByMultipleForm = LookupFilterByMultipleForm;
    })(BasicSamples = FormulationManagementSystems.BasicSamples || (FormulationManagementSystems.BasicSamples = {}));
})(FormulationManagementSystems || (FormulationManagementSystems = {}));
var FormulationManagementSystems;
(function (FormulationManagementSystems) {
    var BasicSamples;
    (function (BasicSamples) {
        var PopulateLinkedDataForm = (function (_super) {
            __extends(PopulateLinkedDataForm, _super);
            function PopulateLinkedDataForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!PopulateLinkedDataForm.init) {
                    PopulateLinkedDataForm.init = true;
                    var s = Serenity;
                    var w0 = FormulationManagementSystems.Northwind.CustomerEditor;
                    var w1 = s.StringEditor;
                    var w2 = s.DateEditor;
                    var w3 = s.LookupEditor;
                    var w4 = FormulationManagementSystems.Northwind.OrderDetailsEditor;
                    Q.initFormType(PopulateLinkedDataForm, [
                        'CustomerID', w0,
                        'CustomerContactName', w1,
                        'CustomerContactTitle', w1,
                        'CustomerCity', w1,
                        'CustomerRegion', w1,
                        'CustomerCountry', w1,
                        'CustomerPhone', w1,
                        'CustomerFax', w1,
                        'OrderDate', w2,
                        'RequiredDate', w2,
                        'EmployeeID', w3,
                        'DetailList', w4
                    ]);
                }
                return _this;
            }
            return PopulateLinkedDataForm;
        }(Serenity.PrefixedContext));
        PopulateLinkedDataForm.formKey = 'BasicSamples.PopulateLinkedData';
        BasicSamples.PopulateLinkedDataForm = PopulateLinkedDataForm;
    })(BasicSamples = FormulationManagementSystems.BasicSamples || (FormulationManagementSystems.BasicSamples = {}));
})(FormulationManagementSystems || (FormulationManagementSystems = {}));
var FormulationManagementSystems;
(function (FormulationManagementSystems) {
    var BasicSamples;
    (function (BasicSamples) {
        var ProductExcelImportForm = (function (_super) {
            __extends(ProductExcelImportForm, _super);
            function ProductExcelImportForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!ProductExcelImportForm.init) {
                    ProductExcelImportForm.init = true;
                    var s = Serenity;
                    var w0 = s.ImageUploadEditor;
                    Q.initFormType(ProductExcelImportForm, [
                        'FileName', w0
                    ]);
                }
                return _this;
            }
            return ProductExcelImportForm;
        }(Serenity.PrefixedContext));
        ProductExcelImportForm.formKey = 'BasicSamples.ProductExcelImport';
        BasicSamples.ProductExcelImportForm = ProductExcelImportForm;
    })(BasicSamples = FormulationManagementSystems.BasicSamples || (FormulationManagementSystems.BasicSamples = {}));
})(FormulationManagementSystems || (FormulationManagementSystems = {}));
var FormulationManagementSystems;
(function (FormulationManagementSystems) {
    var BasicSamples;
    (function (BasicSamples) {
        var ProductExcelImportService;
        (function (ProductExcelImportService) {
            ProductExcelImportService.baseUrl = 'BasicSamples/ProductExcelImport';
            [
                'ExcelImport'
            ].forEach(function (x) {
                ProductExcelImportService[x] = function (r, s, o) {
                    return Q.serviceRequest(ProductExcelImportService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(ProductExcelImportService = BasicSamples.ProductExcelImportService || (BasicSamples.ProductExcelImportService = {}));
    })(BasicSamples = FormulationManagementSystems.BasicSamples || (FormulationManagementSystems.BasicSamples = {}));
})(FormulationManagementSystems || (FormulationManagementSystems = {}));
var FormulationManagementSystems;
(function (FormulationManagementSystems) {
    var BasicSamples;
    (function (BasicSamples) {
        var StaticTextBlockForm = (function (_super) {
            __extends(StaticTextBlockForm, _super);
            function StaticTextBlockForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!StaticTextBlockForm.init) {
                    StaticTextBlockForm.init = true;
                    var s = Serenity;
                    var w0 = FormulationManagementSystems.StaticTextBlock;
                    var w1 = s.StringEditor;
                    Q.initFormType(StaticTextBlockForm, [
                        'StaticText', w0,
                        'SomeInput', w1,
                        'HtmlList', w0,
                        'FromLocalText', w0,
                        'DisplayFieldValue', w0
                    ]);
                }
                return _this;
            }
            return StaticTextBlockForm;
        }(Serenity.PrefixedContext));
        StaticTextBlockForm.formKey = 'BasicSamples.StaticTextBlock';
        BasicSamples.StaticTextBlockForm = StaticTextBlockForm;
    })(BasicSamples = FormulationManagementSystems.BasicSamples || (FormulationManagementSystems.BasicSamples = {}));
})(FormulationManagementSystems || (FormulationManagementSystems = {}));
var FormulationManagementSystems;
(function (FormulationManagementSystems) {
    var BasicSamples;
    (function (BasicSamples) {
        var VSGalleryQAService;
        (function (VSGalleryQAService) {
            VSGalleryQAService.baseUrl = 'BasicSamples/VSGalleryQA';
            [
                'List'
            ].forEach(function (x) {
                VSGalleryQAService[x] = function (r, s, o) {
                    return Q.serviceRequest(VSGalleryQAService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(VSGalleryQAService = BasicSamples.VSGalleryQAService || (BasicSamples.VSGalleryQAService = {}));
    })(BasicSamples = FormulationManagementSystems.BasicSamples || (FormulationManagementSystems.BasicSamples = {}));
})(FormulationManagementSystems || (FormulationManagementSystems = {}));
var FormulationManagementSystems;
(function (FormulationManagementSystems) {
    var Common;
    (function (Common) {
        var UserPreferenceRow;
        (function (UserPreferenceRow) {
            UserPreferenceRow.idProperty = 'UserPreferenceId';
            UserPreferenceRow.nameProperty = 'Name';
            UserPreferenceRow.localTextPrefix = 'Common.UserPreference';
        })(UserPreferenceRow = Common.UserPreferenceRow || (Common.UserPreferenceRow = {}));
    })(Common = FormulationManagementSystems.Common || (FormulationManagementSystems.Common = {}));
})(FormulationManagementSystems || (FormulationManagementSystems = {}));
var FormulationManagementSystems;
(function (FormulationManagementSystems) {
    var Common;
    (function (Common) {
        var UserPreferenceService;
        (function (UserPreferenceService) {
            UserPreferenceService.baseUrl = 'Common/UserPreference';
            [
                'Update',
                'Retrieve'
            ].forEach(function (x) {
                UserPreferenceService[x] = function (r, s, o) {
                    return Q.serviceRequest(UserPreferenceService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(UserPreferenceService = Common.UserPreferenceService || (Common.UserPreferenceService = {}));
    })(Common = FormulationManagementSystems.Common || (FormulationManagementSystems.Common = {}));
})(FormulationManagementSystems || (FormulationManagementSystems = {}));
var FormulationManagementSystems;
(function (FormulationManagementSystems) {
    var Membership;
    (function (Membership) {
        var ChangePasswordForm = (function (_super) {
            __extends(ChangePasswordForm, _super);
            function ChangePasswordForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!ChangePasswordForm.init) {
                    ChangePasswordForm.init = true;
                    var s = Serenity;
                    var w0 = s.PasswordEditor;
                    Q.initFormType(ChangePasswordForm, [
                        'OldPassword', w0,
                        'NewPassword', w0,
                        'ConfirmPassword', w0
                    ]);
                }
                return _this;
            }
            return ChangePasswordForm;
        }(Serenity.PrefixedContext));
        ChangePasswordForm.formKey = 'Membership.ChangePassword';
        Membership.ChangePasswordForm = ChangePasswordForm;
    })(Membership = FormulationManagementSystems.Membership || (FormulationManagementSystems.Membership = {}));
})(FormulationManagementSystems || (FormulationManagementSystems = {}));
var FormulationManagementSystems;
(function (FormulationManagementSystems) {
    var Membership;
    (function (Membership) {
        var ForgotPasswordForm = (function (_super) {
            __extends(ForgotPasswordForm, _super);
            function ForgotPasswordForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!ForgotPasswordForm.init) {
                    ForgotPasswordForm.init = true;
                    var s = Serenity;
                    var w0 = s.EmailEditor;
                    Q.initFormType(ForgotPasswordForm, [
                        'Email', w0
                    ]);
                }
                return _this;
            }
            return ForgotPasswordForm;
        }(Serenity.PrefixedContext));
        ForgotPasswordForm.formKey = 'Membership.ForgotPassword';
        Membership.ForgotPasswordForm = ForgotPasswordForm;
    })(Membership = FormulationManagementSystems.Membership || (FormulationManagementSystems.Membership = {}));
})(FormulationManagementSystems || (FormulationManagementSystems = {}));
var FormulationManagementSystems;
(function (FormulationManagementSystems) {
    var Membership;
    (function (Membership) {
        var LoginForm = (function (_super) {
            __extends(LoginForm, _super);
            function LoginForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!LoginForm.init) {
                    LoginForm.init = true;
                    var s = Serenity;
                    var w0 = s.StringEditor;
                    var w1 = s.PasswordEditor;
                    Q.initFormType(LoginForm, [
                        'Username', w0,
                        'Password', w1
                    ]);
                }
                return _this;
            }
            return LoginForm;
        }(Serenity.PrefixedContext));
        LoginForm.formKey = 'Membership.Login';
        Membership.LoginForm = LoginForm;
    })(Membership = FormulationManagementSystems.Membership || (FormulationManagementSystems.Membership = {}));
})(FormulationManagementSystems || (FormulationManagementSystems = {}));
var FormulationManagementSystems;
(function (FormulationManagementSystems) {
    var Membership;
    (function (Membership) {
        var ResetPasswordForm = (function (_super) {
            __extends(ResetPasswordForm, _super);
            function ResetPasswordForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!ResetPasswordForm.init) {
                    ResetPasswordForm.init = true;
                    var s = Serenity;
                    var w0 = s.PasswordEditor;
                    Q.initFormType(ResetPasswordForm, [
                        'NewPassword', w0,
                        'ConfirmPassword', w0
                    ]);
                }
                return _this;
            }
            return ResetPasswordForm;
        }(Serenity.PrefixedContext));
        ResetPasswordForm.formKey = 'Membership.ResetPassword';
        Membership.ResetPasswordForm = ResetPasswordForm;
    })(Membership = FormulationManagementSystems.Membership || (FormulationManagementSystems.Membership = {}));
})(FormulationManagementSystems || (FormulationManagementSystems = {}));
var FormulationManagementSystems;
(function (FormulationManagementSystems) {
    var Membership;
    (function (Membership) {
        var SignUpForm = (function (_super) {
            __extends(SignUpForm, _super);
            function SignUpForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!SignUpForm.init) {
                    SignUpForm.init = true;
                    var s = Serenity;
                    var w0 = s.StringEditor;
                    var w1 = s.EmailEditor;
                    var w2 = s.PasswordEditor;
                    Q.initFormType(SignUpForm, [
                        'DisplayName', w0,
                        'Email', w1,
                        'ConfirmEmail', w1,
                        'Password', w2,
                        'ConfirmPassword', w2
                    ]);
                }
                return _this;
            }
            return SignUpForm;
        }(Serenity.PrefixedContext));
        SignUpForm.formKey = 'Membership.SignUp';
        Membership.SignUpForm = SignUpForm;
    })(Membership = FormulationManagementSystems.Membership || (FormulationManagementSystems.Membership = {}));
})(FormulationManagementSystems || (FormulationManagementSystems = {}));
var FormulationManagementSystems;
(function (FormulationManagementSystems) {
    var Northwind;
    (function (Northwind) {
        var CategoryForm = (function (_super) {
            __extends(CategoryForm, _super);
            function CategoryForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!CategoryForm.init) {
                    CategoryForm.init = true;
                    var s = Serenity;
                    var w0 = s.StringEditor;
                    Q.initFormType(CategoryForm, [
                        'CategoryName', w0,
                        'Description', w0
                    ]);
                }
                return _this;
            }
            return CategoryForm;
        }(Serenity.PrefixedContext));
        CategoryForm.formKey = 'Northwind.Category';
        Northwind.CategoryForm = CategoryForm;
    })(Northwind = FormulationManagementSystems.Northwind || (FormulationManagementSystems.Northwind = {}));
})(FormulationManagementSystems || (FormulationManagementSystems = {}));
var FormulationManagementSystems;
(function (FormulationManagementSystems) {
    var Northwind;
    (function (Northwind) {
        var CategoryLangRow;
        (function (CategoryLangRow) {
            CategoryLangRow.idProperty = 'Id';
            CategoryLangRow.nameProperty = 'CategoryName';
            CategoryLangRow.localTextPrefix = 'Northwind.CategoryLang';
        })(CategoryLangRow = Northwind.CategoryLangRow || (Northwind.CategoryLangRow = {}));
    })(Northwind = FormulationManagementSystems.Northwind || (FormulationManagementSystems.Northwind = {}));
})(FormulationManagementSystems || (FormulationManagementSystems = {}));
var FormulationManagementSystems;
(function (FormulationManagementSystems) {
    var Northwind;
    (function (Northwind) {
        var CategoryLangService;
        (function (CategoryLangService) {
            CategoryLangService.baseUrl = 'Northwind/CategoryLang';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                CategoryLangService[x] = function (r, s, o) {
                    return Q.serviceRequest(CategoryLangService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(CategoryLangService = Northwind.CategoryLangService || (Northwind.CategoryLangService = {}));
    })(Northwind = FormulationManagementSystems.Northwind || (FormulationManagementSystems.Northwind = {}));
})(FormulationManagementSystems || (FormulationManagementSystems = {}));
var FormulationManagementSystems;
(function (FormulationManagementSystems) {
    var Northwind;
    (function (Northwind) {
        var CategoryRow;
        (function (CategoryRow) {
            CategoryRow.idProperty = 'CategoryID';
            CategoryRow.nameProperty = 'CategoryName';
            CategoryRow.localTextPrefix = 'Northwind.Category';
            CategoryRow.lookupKey = 'Northwind.Category';
            function getLookup() {
                return Q.getLookup('Northwind.Category');
            }
            CategoryRow.getLookup = getLookup;
        })(CategoryRow = Northwind.CategoryRow || (Northwind.CategoryRow = {}));
    })(Northwind = FormulationManagementSystems.Northwind || (FormulationManagementSystems.Northwind = {}));
})(FormulationManagementSystems || (FormulationManagementSystems = {}));
var FormulationManagementSystems;
(function (FormulationManagementSystems) {
    var Northwind;
    (function (Northwind) {
        var CategoryService;
        (function (CategoryService) {
            CategoryService.baseUrl = 'Northwind/Category';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                CategoryService[x] = function (r, s, o) {
                    return Q.serviceRequest(CategoryService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(CategoryService = Northwind.CategoryService || (Northwind.CategoryService = {}));
    })(Northwind = FormulationManagementSystems.Northwind || (FormulationManagementSystems.Northwind = {}));
})(FormulationManagementSystems || (FormulationManagementSystems = {}));
var FormulationManagementSystems;
(function (FormulationManagementSystems) {
    var Northwind;
    (function (Northwind) {
        var CustomerCustomerDemoRow;
        (function (CustomerCustomerDemoRow) {
            CustomerCustomerDemoRow.idProperty = 'ID';
            CustomerCustomerDemoRow.nameProperty = 'CustomerID';
            CustomerCustomerDemoRow.localTextPrefix = 'Northwind.CustomerCustomerDemo';
        })(CustomerCustomerDemoRow = Northwind.CustomerCustomerDemoRow || (Northwind.CustomerCustomerDemoRow = {}));
    })(Northwind = FormulationManagementSystems.Northwind || (FormulationManagementSystems.Northwind = {}));
})(FormulationManagementSystems || (FormulationManagementSystems = {}));
var FormulationManagementSystems;
(function (FormulationManagementSystems) {
    var Northwind;
    (function (Northwind) {
        var CustomerDemographicRow;
        (function (CustomerDemographicRow) {
            CustomerDemographicRow.idProperty = 'ID';
            CustomerDemographicRow.nameProperty = 'CustomerTypeID';
            CustomerDemographicRow.localTextPrefix = 'Northwind.CustomerDemographic';
        })(CustomerDemographicRow = Northwind.CustomerDemographicRow || (Northwind.CustomerDemographicRow = {}));
    })(Northwind = FormulationManagementSystems.Northwind || (FormulationManagementSystems.Northwind = {}));
})(FormulationManagementSystems || (FormulationManagementSystems = {}));
var FormulationManagementSystems;
(function (FormulationManagementSystems) {
    var Northwind;
    (function (Northwind) {
        var CustomerDetailsRow;
        (function (CustomerDetailsRow) {
            CustomerDetailsRow.idProperty = 'Id';
            CustomerDetailsRow.nameProperty = 'Email';
            CustomerDetailsRow.localTextPrefix = 'Northwind.CustomerDetails';
        })(CustomerDetailsRow = Northwind.CustomerDetailsRow || (Northwind.CustomerDetailsRow = {}));
    })(Northwind = FormulationManagementSystems.Northwind || (FormulationManagementSystems.Northwind = {}));
})(FormulationManagementSystems || (FormulationManagementSystems = {}));
var FormulationManagementSystems;
(function (FormulationManagementSystems) {
    var Northwind;
    (function (Northwind) {
        var CustomerForm = (function (_super) {
            __extends(CustomerForm, _super);
            function CustomerForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!CustomerForm.init) {
                    CustomerForm.init = true;
                    var s = Serenity;
                    var w0 = s.StringEditor;
                    var w1 = s.LookupEditor;
                    var w2 = Northwind.NotesEditor;
                    var w3 = s.DateEditor;
                    var w4 = s.EmailEditor;
                    var w5 = s.BooleanEditor;
                    Q.initFormType(CustomerForm, [
                        'CustomerID', w0,
                        'CompanyName', w0,
                        'ContactName', w0,
                        'ContactTitle', w0,
                        'Representatives', w1,
                        'Address', w0,
                        'Country', w1,
                        'City', w1,
                        'Region', w0,
                        'PostalCode', w0,
                        'Phone', w0,
                        'Fax', w0,
                        'NoteList', w2,
                        'LastContactDate', w3,
                        'LastContactedBy', w1,
                        'Email', w4,
                        'SendBulletin', w5
                    ]);
                }
                return _this;
            }
            return CustomerForm;
        }(Serenity.PrefixedContext));
        CustomerForm.formKey = 'Northwind.Customer';
        Northwind.CustomerForm = CustomerForm;
    })(Northwind = FormulationManagementSystems.Northwind || (FormulationManagementSystems.Northwind = {}));
})(FormulationManagementSystems || (FormulationManagementSystems = {}));
var FormulationManagementSystems;
(function (FormulationManagementSystems) {
    var Northwind;
    (function (Northwind) {
        var CustomerGrossSalesRow;
        (function (CustomerGrossSalesRow) {
            CustomerGrossSalesRow.nameProperty = 'ContactName';
            CustomerGrossSalesRow.localTextPrefix = 'Northwind.CustomerGrossSales';
        })(CustomerGrossSalesRow = Northwind.CustomerGrossSalesRow || (Northwind.CustomerGrossSalesRow = {}));
    })(Northwind = FormulationManagementSystems.Northwind || (FormulationManagementSystems.Northwind = {}));
})(FormulationManagementSystems || (FormulationManagementSystems = {}));
var FormulationManagementSystems;
(function (FormulationManagementSystems) {
    var Northwind;
    (function (Northwind) {
        var CustomerRepresentativesRow;
        (function (CustomerRepresentativesRow) {
            CustomerRepresentativesRow.idProperty = 'RepresentativeId';
            CustomerRepresentativesRow.localTextPrefix = 'Northwind.CustomerRepresentatives';
        })(CustomerRepresentativesRow = Northwind.CustomerRepresentativesRow || (Northwind.CustomerRepresentativesRow = {}));
    })(Northwind = FormulationManagementSystems.Northwind || (FormulationManagementSystems.Northwind = {}));
})(FormulationManagementSystems || (FormulationManagementSystems = {}));
var FormulationManagementSystems;
(function (FormulationManagementSystems) {
    var Northwind;
    (function (Northwind) {
        var CustomerRow;
        (function (CustomerRow) {
            CustomerRow.idProperty = 'ID';
            CustomerRow.nameProperty = 'CompanyName';
            CustomerRow.localTextPrefix = 'Northwind.Customer';
            CustomerRow.lookupKey = 'Northwind.Customer';
            function getLookup() {
                return Q.getLookup('Northwind.Customer');
            }
            CustomerRow.getLookup = getLookup;
        })(CustomerRow = Northwind.CustomerRow || (Northwind.CustomerRow = {}));
    })(Northwind = FormulationManagementSystems.Northwind || (FormulationManagementSystems.Northwind = {}));
})(FormulationManagementSystems || (FormulationManagementSystems = {}));
var FormulationManagementSystems;
(function (FormulationManagementSystems) {
    var Northwind;
    (function (Northwind) {
        var CustomerService;
        (function (CustomerService) {
            CustomerService.baseUrl = 'Northwind/Customer';
            [
                'Create',
                'Update',
                'Delete',
                'GetNextNumber',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                CustomerService[x] = function (r, s, o) {
                    return Q.serviceRequest(CustomerService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(CustomerService = Northwind.CustomerService || (Northwind.CustomerService = {}));
    })(Northwind = FormulationManagementSystems.Northwind || (FormulationManagementSystems.Northwind = {}));
})(FormulationManagementSystems || (FormulationManagementSystems = {}));
var FormulationManagementSystems;
(function (FormulationManagementSystems) {
    var Northwind;
    (function (Northwind) {
        var EmployeeRow;
        (function (EmployeeRow) {
            EmployeeRow.idProperty = 'EmployeeID';
            EmployeeRow.nameProperty = 'FullName';
            EmployeeRow.localTextPrefix = 'Northwind.Employee';
            EmployeeRow.lookupKey = 'Northwind.Employee';
            function getLookup() {
                return Q.getLookup('Northwind.Employee');
            }
            EmployeeRow.getLookup = getLookup;
        })(EmployeeRow = Northwind.EmployeeRow || (Northwind.EmployeeRow = {}));
    })(Northwind = FormulationManagementSystems.Northwind || (FormulationManagementSystems.Northwind = {}));
})(FormulationManagementSystems || (FormulationManagementSystems = {}));
var FormulationManagementSystems;
(function (FormulationManagementSystems) {
    var Northwind;
    (function (Northwind) {
        var EmployeeTerritoryRow;
        (function (EmployeeTerritoryRow) {
            EmployeeTerritoryRow.idProperty = 'EmployeeID';
            EmployeeTerritoryRow.nameProperty = 'TerritoryID';
            EmployeeTerritoryRow.localTextPrefix = 'Northwind.EmployeeTerritory';
        })(EmployeeTerritoryRow = Northwind.EmployeeTerritoryRow || (Northwind.EmployeeTerritoryRow = {}));
    })(Northwind = FormulationManagementSystems.Northwind || (FormulationManagementSystems.Northwind = {}));
})(FormulationManagementSystems || (FormulationManagementSystems = {}));
var FormulationManagementSystems;
(function (FormulationManagementSystems) {
    var Northwind;
    (function (Northwind) {
        var Gender;
        (function (Gender) {
            Gender[Gender["Male"] = 1] = "Male";
            Gender[Gender["Female"] = 2] = "Female";
        })(Gender = Northwind.Gender || (Northwind.Gender = {}));
        Serenity.Decorators.registerEnumType(Gender, 'FormulationManagementSystems.Northwind.Gender', 'FormulationManagementSystems.Northwind.Entities.Gender');
    })(Northwind = FormulationManagementSystems.Northwind || (FormulationManagementSystems.Northwind = {}));
})(FormulationManagementSystems || (FormulationManagementSystems = {}));
var FormulationManagementSystems;
(function (FormulationManagementSystems) {
    var Northwind;
    (function (Northwind) {
        var NoteRow;
        (function (NoteRow) {
            NoteRow.idProperty = 'NoteId';
            NoteRow.nameProperty = 'EntityType';
            NoteRow.localTextPrefix = 'Northwind.Note';
        })(NoteRow = Northwind.NoteRow || (Northwind.NoteRow = {}));
    })(Northwind = FormulationManagementSystems.Northwind || (FormulationManagementSystems.Northwind = {}));
})(FormulationManagementSystems || (FormulationManagementSystems = {}));
var FormulationManagementSystems;
(function (FormulationManagementSystems) {
    var Northwind;
    (function (Northwind) {
        var OrderDetailForm = (function (_super) {
            __extends(OrderDetailForm, _super);
            function OrderDetailForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!OrderDetailForm.init) {
                    OrderDetailForm.init = true;
                    var s = Serenity;
                    var w0 = s.LookupEditor;
                    var w1 = s.DecimalEditor;
                    var w2 = s.IntegerEditor;
                    Q.initFormType(OrderDetailForm, [
                        'ProductID', w0,
                        'UnitPrice', w1,
                        'Quantity', w2,
                        'Discount', w1
                    ]);
                }
                return _this;
            }
            return OrderDetailForm;
        }(Serenity.PrefixedContext));
        OrderDetailForm.formKey = 'Northwind.OrderDetail';
        Northwind.OrderDetailForm = OrderDetailForm;
    })(Northwind = FormulationManagementSystems.Northwind || (FormulationManagementSystems.Northwind = {}));
})(FormulationManagementSystems || (FormulationManagementSystems = {}));
var FormulationManagementSystems;
(function (FormulationManagementSystems) {
    var Northwind;
    (function (Northwind) {
        var OrderDetailRow;
        (function (OrderDetailRow) {
            OrderDetailRow.idProperty = 'DetailID';
            OrderDetailRow.localTextPrefix = 'Northwind.OrderDetail';
        })(OrderDetailRow = Northwind.OrderDetailRow || (Northwind.OrderDetailRow = {}));
    })(Northwind = FormulationManagementSystems.Northwind || (FormulationManagementSystems.Northwind = {}));
})(FormulationManagementSystems || (FormulationManagementSystems = {}));
var FormulationManagementSystems;
(function (FormulationManagementSystems) {
    var Northwind;
    (function (Northwind) {
        var OrderDetailService;
        (function (OrderDetailService) {
            OrderDetailService.baseUrl = 'Northwind/OrderDetail';
            [
                'Retrieve',
                'List'
            ].forEach(function (x) {
                OrderDetailService[x] = function (r, s, o) {
                    return Q.serviceRequest(OrderDetailService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(OrderDetailService = Northwind.OrderDetailService || (Northwind.OrderDetailService = {}));
    })(Northwind = FormulationManagementSystems.Northwind || (FormulationManagementSystems.Northwind = {}));
})(FormulationManagementSystems || (FormulationManagementSystems = {}));
var FormulationManagementSystems;
(function (FormulationManagementSystems) {
    var Northwind;
    (function (Northwind) {
        var OrderForm = (function (_super) {
            __extends(OrderForm, _super);
            function OrderForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!OrderForm.init) {
                    OrderForm.init = true;
                    var s = Serenity;
                    var w0 = Northwind.CustomerEditor;
                    var w1 = s.DateEditor;
                    var w2 = s.LookupEditor;
                    var w3 = Northwind.OrderDetailsEditor;
                    var w4 = s.DecimalEditor;
                    var w5 = s.StringEditor;
                    Q.initFormType(OrderForm, [
                        'CustomerID', w0,
                        'OrderDate', w1,
                        'RequiredDate', w1,
                        'EmployeeID', w2,
                        'DetailList', w3,
                        'ShippedDate', w1,
                        'ShipVia', w2,
                        'Freight', w4,
                        'ShipName', w5,
                        'ShipAddress', w5,
                        'ShipCity', w5,
                        'ShipRegion', w5,
                        'ShipPostalCode', w5,
                        'ShipCountry', w5
                    ]);
                }
                return _this;
            }
            return OrderForm;
        }(Serenity.PrefixedContext));
        OrderForm.formKey = 'Northwind.Order';
        Northwind.OrderForm = OrderForm;
    })(Northwind = FormulationManagementSystems.Northwind || (FormulationManagementSystems.Northwind = {}));
})(FormulationManagementSystems || (FormulationManagementSystems = {}));
var FormulationManagementSystems;
(function (FormulationManagementSystems) {
    var Northwind;
    (function (Northwind) {
        var OrderRow;
        (function (OrderRow) {
            OrderRow.idProperty = 'OrderID';
            OrderRow.nameProperty = 'CustomerID';
            OrderRow.localTextPrefix = 'Northwind.Order';
        })(OrderRow = Northwind.OrderRow || (Northwind.OrderRow = {}));
    })(Northwind = FormulationManagementSystems.Northwind || (FormulationManagementSystems.Northwind = {}));
})(FormulationManagementSystems || (FormulationManagementSystems = {}));
var FormulationManagementSystems;
(function (FormulationManagementSystems) {
    var Northwind;
    (function (Northwind) {
        var OrderService;
        (function (OrderService) {
            OrderService.baseUrl = 'Northwind/Order';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                OrderService[x] = function (r, s, o) {
                    return Q.serviceRequest(OrderService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(OrderService = Northwind.OrderService || (Northwind.OrderService = {}));
    })(Northwind = FormulationManagementSystems.Northwind || (FormulationManagementSystems.Northwind = {}));
})(FormulationManagementSystems || (FormulationManagementSystems = {}));
var FormulationManagementSystems;
(function (FormulationManagementSystems) {
    var Northwind;
    (function (Northwind) {
        var OrderShippingState;
        (function (OrderShippingState) {
            OrderShippingState[OrderShippingState["NotShipped"] = 0] = "NotShipped";
            OrderShippingState[OrderShippingState["Shipped"] = 1] = "Shipped";
        })(OrderShippingState = Northwind.OrderShippingState || (Northwind.OrderShippingState = {}));
        Serenity.Decorators.registerEnumType(OrderShippingState, 'FormulationManagementSystems.Northwind.OrderShippingState', 'Northwind.OrderShippingState');
    })(Northwind = FormulationManagementSystems.Northwind || (FormulationManagementSystems.Northwind = {}));
})(FormulationManagementSystems || (FormulationManagementSystems = {}));
var FormulationManagementSystems;
(function (FormulationManagementSystems) {
    var Northwind;
    (function (Northwind) {
        var ProductForm = (function (_super) {
            __extends(ProductForm, _super);
            function ProductForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!ProductForm.init) {
                    ProductForm.init = true;
                    var s = Serenity;
                    var w0 = s.StringEditor;
                    var w1 = s.ImageUploadEditor;
                    var w2 = s.BooleanEditor;
                    var w3 = s.LookupEditor;
                    var w4 = s.DecimalEditor;
                    var w5 = s.IntegerEditor;
                    Q.initFormType(ProductForm, [
                        'ProductName', w0,
                        'ProductImage', w1,
                        'Discontinued', w2,
                        'SupplierID', w3,
                        'CategoryID', w3,
                        'QuantityPerUnit', w0,
                        'UnitPrice', w4,
                        'UnitsInStock', w5,
                        'UnitsOnOrder', w5,
                        'ReorderLevel', w5
                    ]);
                }
                return _this;
            }
            return ProductForm;
        }(Serenity.PrefixedContext));
        ProductForm.formKey = 'Northwind.Product';
        Northwind.ProductForm = ProductForm;
    })(Northwind = FormulationManagementSystems.Northwind || (FormulationManagementSystems.Northwind = {}));
})(FormulationManagementSystems || (FormulationManagementSystems = {}));
var FormulationManagementSystems;
(function (FormulationManagementSystems) {
    var Northwind;
    (function (Northwind) {
        var ProductLangRow;
        (function (ProductLangRow) {
            ProductLangRow.idProperty = 'Id';
            ProductLangRow.nameProperty = 'ProductName';
            ProductLangRow.localTextPrefix = 'Northwind.ProductLang';
        })(ProductLangRow = Northwind.ProductLangRow || (Northwind.ProductLangRow = {}));
    })(Northwind = FormulationManagementSystems.Northwind || (FormulationManagementSystems.Northwind = {}));
})(FormulationManagementSystems || (FormulationManagementSystems = {}));
var FormulationManagementSystems;
(function (FormulationManagementSystems) {
    var Northwind;
    (function (Northwind) {
        var ProductLangService;
        (function (ProductLangService) {
            ProductLangService.baseUrl = 'Northwind/ProductLang';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                ProductLangService[x] = function (r, s, o) {
                    return Q.serviceRequest(ProductLangService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(ProductLangService = Northwind.ProductLangService || (Northwind.ProductLangService = {}));
    })(Northwind = FormulationManagementSystems.Northwind || (FormulationManagementSystems.Northwind = {}));
})(FormulationManagementSystems || (FormulationManagementSystems = {}));
var FormulationManagementSystems;
(function (FormulationManagementSystems) {
    var Northwind;
    (function (Northwind) {
        var ProductLogRow;
        (function (ProductLogRow) {
            ProductLogRow.idProperty = 'ProductLogID';
            ProductLogRow.localTextPrefix = 'Northwind.ProductLog';
        })(ProductLogRow = Northwind.ProductLogRow || (Northwind.ProductLogRow = {}));
    })(Northwind = FormulationManagementSystems.Northwind || (FormulationManagementSystems.Northwind = {}));
})(FormulationManagementSystems || (FormulationManagementSystems = {}));
var FormulationManagementSystems;
(function (FormulationManagementSystems) {
    var Northwind;
    (function (Northwind) {
        var ProductRow;
        (function (ProductRow) {
            ProductRow.idProperty = 'ProductID';
            ProductRow.nameProperty = 'ProductName';
            ProductRow.localTextPrefix = 'Northwind.Product';
            ProductRow.lookupKey = 'Northwind.Product';
            function getLookup() {
                return Q.getLookup('Northwind.Product');
            }
            ProductRow.getLookup = getLookup;
        })(ProductRow = Northwind.ProductRow || (Northwind.ProductRow = {}));
    })(Northwind = FormulationManagementSystems.Northwind || (FormulationManagementSystems.Northwind = {}));
})(FormulationManagementSystems || (FormulationManagementSystems = {}));
var FormulationManagementSystems;
(function (FormulationManagementSystems) {
    var Northwind;
    (function (Northwind) {
        var ProductService;
        (function (ProductService) {
            ProductService.baseUrl = 'Northwind/Product';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                ProductService[x] = function (r, s, o) {
                    return Q.serviceRequest(ProductService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(ProductService = Northwind.ProductService || (Northwind.ProductService = {}));
    })(Northwind = FormulationManagementSystems.Northwind || (FormulationManagementSystems.Northwind = {}));
})(FormulationManagementSystems || (FormulationManagementSystems = {}));
var FormulationManagementSystems;
(function (FormulationManagementSystems) {
    var Northwind;
    (function (Northwind) {
        var RegionForm = (function (_super) {
            __extends(RegionForm, _super);
            function RegionForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!RegionForm.init) {
                    RegionForm.init = true;
                    var s = Serenity;
                    var w0 = s.IntegerEditor;
                    var w1 = s.StringEditor;
                    Q.initFormType(RegionForm, [
                        'RegionID', w0,
                        'RegionDescription', w1
                    ]);
                }
                return _this;
            }
            return RegionForm;
        }(Serenity.PrefixedContext));
        RegionForm.formKey = 'Northwind.Region';
        Northwind.RegionForm = RegionForm;
    })(Northwind = FormulationManagementSystems.Northwind || (FormulationManagementSystems.Northwind = {}));
})(FormulationManagementSystems || (FormulationManagementSystems = {}));
var FormulationManagementSystems;
(function (FormulationManagementSystems) {
    var Northwind;
    (function (Northwind) {
        var RegionRow;
        (function (RegionRow) {
            RegionRow.idProperty = 'RegionID';
            RegionRow.nameProperty = 'RegionDescription';
            RegionRow.localTextPrefix = 'Northwind.Region';
            RegionRow.lookupKey = 'Northwind.Region';
            function getLookup() {
                return Q.getLookup('Northwind.Region');
            }
            RegionRow.getLookup = getLookup;
        })(RegionRow = Northwind.RegionRow || (Northwind.RegionRow = {}));
    })(Northwind = FormulationManagementSystems.Northwind || (FormulationManagementSystems.Northwind = {}));
})(FormulationManagementSystems || (FormulationManagementSystems = {}));
var FormulationManagementSystems;
(function (FormulationManagementSystems) {
    var Northwind;
    (function (Northwind) {
        var RegionService;
        (function (RegionService) {
            RegionService.baseUrl = 'Northwind/Region';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                RegionService[x] = function (r, s, o) {
                    return Q.serviceRequest(RegionService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(RegionService = Northwind.RegionService || (Northwind.RegionService = {}));
    })(Northwind = FormulationManagementSystems.Northwind || (FormulationManagementSystems.Northwind = {}));
})(FormulationManagementSystems || (FormulationManagementSystems = {}));
var FormulationManagementSystems;
(function (FormulationManagementSystems) {
    var Northwind;
    (function (Northwind) {
        var SalesByCategoryRow;
        (function (SalesByCategoryRow) {
            SalesByCategoryRow.nameProperty = 'CategoryName';
            SalesByCategoryRow.localTextPrefix = 'Northwind.SalesByCategory';
        })(SalesByCategoryRow = Northwind.SalesByCategoryRow || (Northwind.SalesByCategoryRow = {}));
    })(Northwind = FormulationManagementSystems.Northwind || (FormulationManagementSystems.Northwind = {}));
})(FormulationManagementSystems || (FormulationManagementSystems = {}));
var FormulationManagementSystems;
(function (FormulationManagementSystems) {
    var Northwind;
    (function (Northwind) {
        var SalesByCategoryService;
        (function (SalesByCategoryService) {
            SalesByCategoryService.baseUrl = 'Northwind/SalesByCategory';
            [
                'List'
            ].forEach(function (x) {
                SalesByCategoryService[x] = function (r, s, o) {
                    return Q.serviceRequest(SalesByCategoryService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(SalesByCategoryService = Northwind.SalesByCategoryService || (Northwind.SalesByCategoryService = {}));
    })(Northwind = FormulationManagementSystems.Northwind || (FormulationManagementSystems.Northwind = {}));
})(FormulationManagementSystems || (FormulationManagementSystems = {}));
var FormulationManagementSystems;
(function (FormulationManagementSystems) {
    var Northwind;
    (function (Northwind) {
        var ShipperForm = (function (_super) {
            __extends(ShipperForm, _super);
            function ShipperForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!ShipperForm.init) {
                    ShipperForm.init = true;
                    var s = Serenity;
                    var w0 = s.StringEditor;
                    var w1 = Northwind.PhoneEditor;
                    Q.initFormType(ShipperForm, [
                        'CompanyName', w0,
                        'Phone', w1
                    ]);
                }
                return _this;
            }
            return ShipperForm;
        }(Serenity.PrefixedContext));
        ShipperForm.formKey = 'Northwind.Shipper';
        Northwind.ShipperForm = ShipperForm;
    })(Northwind = FormulationManagementSystems.Northwind || (FormulationManagementSystems.Northwind = {}));
})(FormulationManagementSystems || (FormulationManagementSystems = {}));
var FormulationManagementSystems;
(function (FormulationManagementSystems) {
    var Northwind;
    (function (Northwind) {
        var ShipperRow;
        (function (ShipperRow) {
            ShipperRow.idProperty = 'ShipperID';
            ShipperRow.nameProperty = 'CompanyName';
            ShipperRow.localTextPrefix = 'Northwind.Shipper';
            ShipperRow.lookupKey = 'Northwind.Shipper';
            function getLookup() {
                return Q.getLookup('Northwind.Shipper');
            }
            ShipperRow.getLookup = getLookup;
        })(ShipperRow = Northwind.ShipperRow || (Northwind.ShipperRow = {}));
    })(Northwind = FormulationManagementSystems.Northwind || (FormulationManagementSystems.Northwind = {}));
})(FormulationManagementSystems || (FormulationManagementSystems = {}));
var FormulationManagementSystems;
(function (FormulationManagementSystems) {
    var Northwind;
    (function (Northwind) {
        var ShipperService;
        (function (ShipperService) {
            ShipperService.baseUrl = 'Northwind/Shipper';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                ShipperService[x] = function (r, s, o) {
                    return Q.serviceRequest(ShipperService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(ShipperService = Northwind.ShipperService || (Northwind.ShipperService = {}));
    })(Northwind = FormulationManagementSystems.Northwind || (FormulationManagementSystems.Northwind = {}));
})(FormulationManagementSystems || (FormulationManagementSystems = {}));
var FormulationManagementSystems;
(function (FormulationManagementSystems) {
    var Northwind;
    (function (Northwind) {
        var SupplierForm = (function (_super) {
            __extends(SupplierForm, _super);
            function SupplierForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!SupplierForm.init) {
                    SupplierForm.init = true;
                    var s = Serenity;
                    var w0 = s.StringEditor;
                    Q.initFormType(SupplierForm, [
                        'CompanyName', w0,
                        'ContactName', w0,
                        'ContactTitle', w0,
                        'Address', w0,
                        'Region', w0,
                        'PostalCode', w0,
                        'Country', w0,
                        'City', w0,
                        'Phone', w0,
                        'Fax', w0,
                        'HomePage', w0
                    ]);
                }
                return _this;
            }
            return SupplierForm;
        }(Serenity.PrefixedContext));
        SupplierForm.formKey = 'Northwind.Supplier';
        Northwind.SupplierForm = SupplierForm;
    })(Northwind = FormulationManagementSystems.Northwind || (FormulationManagementSystems.Northwind = {}));
})(FormulationManagementSystems || (FormulationManagementSystems = {}));
var FormulationManagementSystems;
(function (FormulationManagementSystems) {
    var Northwind;
    (function (Northwind) {
        var SupplierRow;
        (function (SupplierRow) {
            SupplierRow.idProperty = 'SupplierID';
            SupplierRow.nameProperty = 'CompanyName';
            SupplierRow.localTextPrefix = 'Northwind.Supplier';
            SupplierRow.lookupKey = 'Northwind.Supplier';
            function getLookup() {
                return Q.getLookup('Northwind.Supplier');
            }
            SupplierRow.getLookup = getLookup;
        })(SupplierRow = Northwind.SupplierRow || (Northwind.SupplierRow = {}));
    })(Northwind = FormulationManagementSystems.Northwind || (FormulationManagementSystems.Northwind = {}));
})(FormulationManagementSystems || (FormulationManagementSystems = {}));
var FormulationManagementSystems;
(function (FormulationManagementSystems) {
    var Northwind;
    (function (Northwind) {
        var SupplierService;
        (function (SupplierService) {
            SupplierService.baseUrl = 'Northwind/Supplier';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                SupplierService[x] = function (r, s, o) {
                    return Q.serviceRequest(SupplierService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(SupplierService = Northwind.SupplierService || (Northwind.SupplierService = {}));
    })(Northwind = FormulationManagementSystems.Northwind || (FormulationManagementSystems.Northwind = {}));
})(FormulationManagementSystems || (FormulationManagementSystems = {}));
var FormulationManagementSystems;
(function (FormulationManagementSystems) {
    var Northwind;
    (function (Northwind) {
        var TerritoryForm = (function (_super) {
            __extends(TerritoryForm, _super);
            function TerritoryForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!TerritoryForm.init) {
                    TerritoryForm.init = true;
                    var s = Serenity;
                    var w0 = s.StringEditor;
                    var w1 = s.LookupEditor;
                    Q.initFormType(TerritoryForm, [
                        'TerritoryID', w0,
                        'TerritoryDescription', w0,
                        'RegionID', w1
                    ]);
                }
                return _this;
            }
            return TerritoryForm;
        }(Serenity.PrefixedContext));
        TerritoryForm.formKey = 'Northwind.Territory';
        Northwind.TerritoryForm = TerritoryForm;
    })(Northwind = FormulationManagementSystems.Northwind || (FormulationManagementSystems.Northwind = {}));
})(FormulationManagementSystems || (FormulationManagementSystems = {}));
var FormulationManagementSystems;
(function (FormulationManagementSystems) {
    var Northwind;
    (function (Northwind) {
        var TerritoryRow;
        (function (TerritoryRow) {
            TerritoryRow.idProperty = 'ID';
            TerritoryRow.nameProperty = 'TerritoryID';
            TerritoryRow.localTextPrefix = 'Northwind.Territory';
            TerritoryRow.lookupKey = 'Northwind.Territory';
            function getLookup() {
                return Q.getLookup('Northwind.Territory');
            }
            TerritoryRow.getLookup = getLookup;
        })(TerritoryRow = Northwind.TerritoryRow || (Northwind.TerritoryRow = {}));
    })(Northwind = FormulationManagementSystems.Northwind || (FormulationManagementSystems.Northwind = {}));
})(FormulationManagementSystems || (FormulationManagementSystems = {}));
var FormulationManagementSystems;
(function (FormulationManagementSystems) {
    var Northwind;
    (function (Northwind) {
        var TerritoryService;
        (function (TerritoryService) {
            TerritoryService.baseUrl = 'Northwind/Territory';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                TerritoryService[x] = function (r, s, o) {
                    return Q.serviceRequest(TerritoryService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(TerritoryService = Northwind.TerritoryService || (Northwind.TerritoryService = {}));
    })(Northwind = FormulationManagementSystems.Northwind || (FormulationManagementSystems.Northwind = {}));
})(FormulationManagementSystems || (FormulationManagementSystems = {}));
var FormulationManagementSystems;
(function (FormulationManagementSystems) {
    var VDSCSQL;
    (function (VDSCSQL) {
        var AdditonFormForm = (function (_super) {
            __extends(AdditonFormForm, _super);
            function AdditonFormForm() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            return AdditonFormForm;
        }(Serenity.PrefixedContext));
        AdditonFormForm.formKey = 'VDSCSQL.AdditonForm';
        VDSCSQL.AdditonFormForm = AdditonFormForm;
        [,
            ['FormId', function () { return Serenity.IntegerEditor; }],
            ['Description', function () { return Serenity.StringEditor; }]
        ].forEach(function (x) { return Object.defineProperty(AdditonFormForm.prototype, x[0], {
            get: function () {
                return this.w(x[0], x[1]());
            },
            enumerable: true,
            configurable: true
        }); });
    })(VDSCSQL = FormulationManagementSystems.VDSCSQL || (FormulationManagementSystems.VDSCSQL = {}));
})(FormulationManagementSystems || (FormulationManagementSystems = {}));
var FormulationManagementSystems;
(function (FormulationManagementSystems) {
    var VDSCSQL;
    (function (VDSCSQL) {
        var AdditonFormRow;
        (function (AdditonFormRow) {
            AdditonFormRow.idProperty = 'Id';
            AdditonFormRow.nameProperty = 'Description';
            AdditonFormRow.localTextPrefix = 'VDSCSQL.AdditonForm';
            var Fields;
            (function (Fields) {
            })(Fields = AdditonFormRow.Fields || (AdditonFormRow.Fields = {}));
            [
                'Id',
                'FormId',
                'Description'
            ].forEach(function (x) { return Fields[x] = x; });
        })(AdditonFormRow = VDSCSQL.AdditonFormRow || (VDSCSQL.AdditonFormRow = {}));
    })(VDSCSQL = FormulationManagementSystems.VDSCSQL || (FormulationManagementSystems.VDSCSQL = {}));
})(FormulationManagementSystems || (FormulationManagementSystems = {}));
var FormulationManagementSystems;
(function (FormulationManagementSystems) {
    var VDSCSQL;
    (function (VDSCSQL) {
        var AdditonFormService;
        (function (AdditonFormService) {
            AdditonFormService.baseUrl = 'VDSCSQL/AdditonForm';
            var Methods;
            (function (Methods) {
            })(Methods = AdditonFormService.Methods || (AdditonFormService.Methods = {}));
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                AdditonFormService[x] = function (r, s, o) {
                    return Q.serviceRequest(AdditonFormService.baseUrl + '/' + x, r, s, o);
                };
                Methods[x] = AdditonFormService.baseUrl + '/' + x;
            });
        })(AdditonFormService = VDSCSQL.AdditonFormService || (VDSCSQL.AdditonFormService = {}));
    })(VDSCSQL = FormulationManagementSystems.VDSCSQL || (FormulationManagementSystems.VDSCSQL = {}));
})(FormulationManagementSystems || (FormulationManagementSystems = {}));
var FormulationManagementSystems;
(function (FormulationManagementSystems) {
    var VDSCSQL;
    (function (VDSCSQL) {
        var BulkBatchDataForm = (function (_super) {
            __extends(BulkBatchDataForm, _super);
            function BulkBatchDataForm() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            return BulkBatchDataForm;
        }(Serenity.PrefixedContext));
        BulkBatchDataForm.formKey = 'VDSCSQL.BulkBatchData';
        VDSCSQL.BulkBatchDataForm = BulkBatchDataForm;
        [,
            ['BulkBatchId', function () { return Serenity.IntegerEditor; }],
            ['SourceTank', function () { return Serenity.StringEditor; }],
            ['DestinationTank', function () { return Serenity.StringEditor; }],
            ['Ingredient', function () { return Serenity.StringEditor; }],
            ['IngredientNumber', function () { return Serenity.IntegerEditor; }],
            ['Phase', function () { return Serenity.StringEditor; }],
            ['PhaseNumber', function () { return Serenity.IntegerEditor; }],
            ['StartTime', function () { return Serenity.DateEditor; }],
            ['EndTime', function () { return Serenity.DateEditor; }],
            ['Operator', function () { return Serenity.StringEditor; }],
            ['SupervisorOverride', function () { return Serenity.StringEditor; }],
            ['AdditionQty', function () { return Serenity.DecimalEditor; }],
            ['Status', function () { return Serenity.StringEditor; }],
            ['ScaleCheckOperator', function () { return Serenity.StringEditor; }],
            ['ScaleCheckWt', function () { return Serenity.IntegerEditor; }],
            ['ScaleId', function () { return Serenity.StringEditor; }],
            ['ValvesOpen', function () { return Serenity.StringEditor; }],
            ['ValveOpenBypass', function () { return Serenity.StringEditor; }],
            ['ValvesClose', function () { return Serenity.StringEditor; }],
            ['ValveCloseBypass', function () { return Serenity.StringEditor; }],
            ['RecipePhaseId', function () { return Serenity.IntegerEditor; }],
            ['CurrentStepIndex', function () { return Serenity.IntegerEditor; }],
            ['OperatorId', function () { return Serenity.IntegerEditor; }],
            ['SupervisorOverrideId', function () { return Serenity.IntegerEditor; }],
            ['SrcStartWt', function () { return Serenity.DecimalEditor; }],
            ['DstStartWt', function () { return Serenity.DecimalEditor; }],
            ['SrcEndWt', function () { return Serenity.DecimalEditor; }],
            ['DstEndWt', function () { return Serenity.DecimalEditor; }],
            ['PhaseTankRemembered', function () { return Serenity.StringEditor; }]
        ].forEach(function (x) { return Object.defineProperty(BulkBatchDataForm.prototype, x[0], {
            get: function () {
                return this.w(x[0], x[1]());
            },
            enumerable: true,
            configurable: true
        }); });
    })(VDSCSQL = FormulationManagementSystems.VDSCSQL || (FormulationManagementSystems.VDSCSQL = {}));
})(FormulationManagementSystems || (FormulationManagementSystems = {}));
var FormulationManagementSystems;
(function (FormulationManagementSystems) {
    var VDSCSQL;
    (function (VDSCSQL) {
        var BulkBatchDataRow;
        (function (BulkBatchDataRow) {
            BulkBatchDataRow.idProperty = 'Id';
            BulkBatchDataRow.nameProperty = 'SourceTank';
            BulkBatchDataRow.localTextPrefix = 'VDSCSQL.BulkBatchData';
            var Fields;
            (function (Fields) {
            })(Fields = BulkBatchDataRow.Fields || (BulkBatchDataRow.Fields = {}));
            [
                'Id',
                'BulkBatchId',
                'SourceTank',
                'DestinationTank',
                'Ingredient',
                'IngredientNumber',
                'Phase',
                'PhaseNumber',
                'StartTime',
                'EndTime',
                'Operator',
                'SupervisorOverride',
                'AdditionQty',
                'Status',
                'ScaleCheckOperator',
                'ScaleCheckWt',
                'ScaleId',
                'ValvesOpen',
                'ValveOpenBypass',
                'ValvesClose',
                'ValveCloseBypass',
                'RecipePhaseId',
                'CurrentStepIndex',
                'OperatorId',
                'SupervisorOverrideId',
                'SrcStartWt',
                'DstStartWt',
                'SrcEndWt',
                'DstEndWt',
                'PhaseTankRemembered'
            ].forEach(function (x) { return Fields[x] = x; });
        })(BulkBatchDataRow = VDSCSQL.BulkBatchDataRow || (VDSCSQL.BulkBatchDataRow = {}));
    })(VDSCSQL = FormulationManagementSystems.VDSCSQL || (FormulationManagementSystems.VDSCSQL = {}));
})(FormulationManagementSystems || (FormulationManagementSystems = {}));
var FormulationManagementSystems;
(function (FormulationManagementSystems) {
    var VDSCSQL;
    (function (VDSCSQL) {
        var BulkBatchDataService;
        (function (BulkBatchDataService) {
            BulkBatchDataService.baseUrl = 'VDSCSQL/BulkBatchData';
            var Methods;
            (function (Methods) {
            })(Methods = BulkBatchDataService.Methods || (BulkBatchDataService.Methods = {}));
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                BulkBatchDataService[x] = function (r, s, o) {
                    return Q.serviceRequest(BulkBatchDataService.baseUrl + '/' + x, r, s, o);
                };
                Methods[x] = BulkBatchDataService.baseUrl + '/' + x;
            });
        })(BulkBatchDataService = VDSCSQL.BulkBatchDataService || (VDSCSQL.BulkBatchDataService = {}));
    })(VDSCSQL = FormulationManagementSystems.VDSCSQL || (FormulationManagementSystems.VDSCSQL = {}));
})(FormulationManagementSystems || (FormulationManagementSystems = {}));
var FormulationManagementSystems;
(function (FormulationManagementSystems) {
    var VDSCSQL;
    (function (VDSCSQL) {
        var BulkBatchForm = (function (_super) {
            __extends(BulkBatchForm, _super);
            function BulkBatchForm() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            return BulkBatchForm;
        }(Serenity.PrefixedContext));
        BulkBatchForm.formKey = 'VDSCSQL.BulkBatch';
        VDSCSQL.BulkBatchForm = BulkBatchForm;
        [,
            ['ProductionRequestId', function () { return Serenity.IntegerEditor; }],
            ['BatchNumber', function () { return Serenity.IntegerEditor; }],
            ['BatchTank', function () { return Serenity.StringEditor; }],
            ['DateCreated', function () { return Serenity.DateEditor; }],
            ['DateCompleted', function () { return Serenity.DateEditor; }],
            ['BatchQuantity', function () { return Serenity.DecimalEditor; }],
            ['BatchActive', function () { return Serenity.BooleanEditor; }],
            ['FpQty', function () { return Serenity.IntegerEditor; }],
            ['ReceivingTank', function () { return Serenity.StringEditor; }],
            ['RecipeId', function () { return Serenity.IntegerEditor; }]
        ].forEach(function (x) { return Object.defineProperty(BulkBatchForm.prototype, x[0], {
            get: function () {
                return this.w(x[0], x[1]());
            },
            enumerable: true,
            configurable: true
        }); });
    })(VDSCSQL = FormulationManagementSystems.VDSCSQL || (FormulationManagementSystems.VDSCSQL = {}));
})(FormulationManagementSystems || (FormulationManagementSystems = {}));
var FormulationManagementSystems;
(function (FormulationManagementSystems) {
    var VDSCSQL;
    (function (VDSCSQL) {
        var BulkBatchRow;
        (function (BulkBatchRow) {
            BulkBatchRow.idProperty = 'Id';
            BulkBatchRow.nameProperty = 'BatchTank';
            BulkBatchRow.localTextPrefix = 'VDSCSQL.BulkBatch';
            var Fields;
            (function (Fields) {
            })(Fields = BulkBatchRow.Fields || (BulkBatchRow.Fields = {}));
            [
                'Id',
                'ProductionRequestId',
                'BatchNumber',
                'BatchTank',
                'DateCreated',
                'DateCompleted',
                'BatchQuantity',
                'BatchActive',
                'FpQty',
                'ReceivingTank',
                'RecipeId',
                'ProductionRequestDateCreated',
                'ProductionRequestCustomerId',
                'ProductionRequestMaterialId',
                'ProductionRequestRecipeId',
                'ProductionRequestVdscAreaId',
                'ProductionRequestQuantityRequested',
                'ProductionRequestOperators',
                'ProductionRequestStatus',
                'ProductionRequestBeginDate',
                'ProductionRequestEndDate',
                'ProductionRequestAttachments',
                'ProductionRequestNotes',
                'ProductionRequestUseAlternateRecipe',
                'ProductionRequestComputeBatch'
            ].forEach(function (x) { return Fields[x] = x; });
        })(BulkBatchRow = VDSCSQL.BulkBatchRow || (VDSCSQL.BulkBatchRow = {}));
    })(VDSCSQL = FormulationManagementSystems.VDSCSQL || (FormulationManagementSystems.VDSCSQL = {}));
})(FormulationManagementSystems || (FormulationManagementSystems = {}));
var FormulationManagementSystems;
(function (FormulationManagementSystems) {
    var VDSCSQL;
    (function (VDSCSQL) {
        var BulkBatchService;
        (function (BulkBatchService) {
            BulkBatchService.baseUrl = 'VDSCSQL/BulkBatch';
            var Methods;
            (function (Methods) {
            })(Methods = BulkBatchService.Methods || (BulkBatchService.Methods = {}));
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                BulkBatchService[x] = function (r, s, o) {
                    return Q.serviceRequest(BulkBatchService.baseUrl + '/' + x, r, s, o);
                };
                Methods[x] = BulkBatchService.baseUrl + '/' + x;
            });
        })(BulkBatchService = VDSCSQL.BulkBatchService || (VDSCSQL.BulkBatchService = {}));
    })(VDSCSQL = FormulationManagementSystems.VDSCSQL || (FormulationManagementSystems.VDSCSQL = {}));
})(FormulationManagementSystems || (FormulationManagementSystems = {}));
var FormulationManagementSystems;
(function (FormulationManagementSystems) {
    var VDSCSQL;
    (function (VDSCSQL) {
        var BulkScanForm = (function (_super) {
            __extends(BulkScanForm, _super);
            function BulkScanForm() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            return BulkScanForm;
        }(Serenity.PrefixedContext));
        BulkScanForm.formKey = 'VDSCSQL.BulkScan';
        VDSCSQL.BulkScanForm = BulkScanForm;
        [,
            ['BulkBatchDataId', function () { return Serenity.IntegerEditor; }],
            ['Barcode', function () { return Serenity.StringEditor; }],
            ['ScanDate', function () { return Serenity.DateEditor; }],
            ['MaterialQty', function () { return Serenity.DecimalEditor; }],
            ['Operator', function () { return Serenity.StringEditor; }],
            ['LotNumber', function () { return Serenity.StringEditor; }],
            ['QtyDate', function () { return Serenity.DateEditor; }]
        ].forEach(function (x) { return Object.defineProperty(BulkScanForm.prototype, x[0], {
            get: function () {
                return this.w(x[0], x[1]());
            },
            enumerable: true,
            configurable: true
        }); });
    })(VDSCSQL = FormulationManagementSystems.VDSCSQL || (FormulationManagementSystems.VDSCSQL = {}));
})(FormulationManagementSystems || (FormulationManagementSystems = {}));
var FormulationManagementSystems;
(function (FormulationManagementSystems) {
    var VDSCSQL;
    (function (VDSCSQL) {
        var BulkScanRow;
        (function (BulkScanRow) {
            BulkScanRow.idProperty = 'Id';
            BulkScanRow.nameProperty = 'Barcode';
            BulkScanRow.localTextPrefix = 'VDSCSQL.BulkScan';
            var Fields;
            (function (Fields) {
            })(Fields = BulkScanRow.Fields || (BulkScanRow.Fields = {}));
            [
                'Id',
                'BulkBatchDataId',
                'Barcode',
                'ScanDate',
                'MaterialQty',
                'Operator',
                'LotNumber',
                'QtyDate'
            ].forEach(function (x) { return Fields[x] = x; });
        })(BulkScanRow = VDSCSQL.BulkScanRow || (VDSCSQL.BulkScanRow = {}));
    })(VDSCSQL = FormulationManagementSystems.VDSCSQL || (FormulationManagementSystems.VDSCSQL = {}));
})(FormulationManagementSystems || (FormulationManagementSystems = {}));
var FormulationManagementSystems;
(function (FormulationManagementSystems) {
    var VDSCSQL;
    (function (VDSCSQL) {
        var BulkScanService;
        (function (BulkScanService) {
            BulkScanService.baseUrl = 'VDSCSQL/BulkScan';
            var Methods;
            (function (Methods) {
            })(Methods = BulkScanService.Methods || (BulkScanService.Methods = {}));
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                BulkScanService[x] = function (r, s, o) {
                    return Q.serviceRequest(BulkScanService.baseUrl + '/' + x, r, s, o);
                };
                Methods[x] = BulkScanService.baseUrl + '/' + x;
            });
        })(BulkScanService = VDSCSQL.BulkScanService || (VDSCSQL.BulkScanService = {}));
    })(VDSCSQL = FormulationManagementSystems.VDSCSQL || (FormulationManagementSystems.VDSCSQL = {}));
})(FormulationManagementSystems || (FormulationManagementSystems = {}));
var FormulationManagementSystems;
(function (FormulationManagementSystems) {
    var VDSCSQL;
    (function (VDSCSQL) {
        var BulkStorageTankForm = (function (_super) {
            __extends(BulkStorageTankForm, _super);
            function BulkStorageTankForm() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            return BulkStorageTankForm;
        }(Serenity.PrefixedContext));
        BulkStorageTankForm.formKey = 'VDSCSQL.BulkStorageTank';
        VDSCSQL.BulkStorageTankForm = BulkStorageTankForm;
        [,
            ['CustomerId', function () { return Serenity.IntegerEditor; }],
            ['MaterialId', function () { return Serenity.IntegerEditor; }],
            ['Product', function () { return Serenity.StringEditor; }],
            ['Building', function () { return Serenity.StringEditor; }],
            ['Bay', function () { return Serenity.StringEditor; }],
            ['Tank', function () { return Serenity.StringEditor; }],
            ['Capacity', function () { return Serenity.DecimalEditor; }],
            ['Dimension', function () { return Serenity.StringEditor; }],
            ['VaporPressureAdjustedTo76F', function () { return Serenity.DecimalEditor; }],
            ['VaporPressure', function () { return Serenity.DecimalEditor; }],
            ['StrapChart', function () { return Serenity.IntegerEditor; }],
            ['ShipmentClearance', function () { return Serenity.BooleanEditor; }],
            ['TankBarcode', function () { return Serenity.StringEditor; }],
            ['BulkTank', function () { return Serenity.BooleanEditor; }],
            ['FlashPoint', function () { return Serenity.StringEditor; }]
        ].forEach(function (x) { return Object.defineProperty(BulkStorageTankForm.prototype, x[0], {
            get: function () {
                return this.w(x[0], x[1]());
            },
            enumerable: true,
            configurable: true
        }); });
    })(VDSCSQL = FormulationManagementSystems.VDSCSQL || (FormulationManagementSystems.VDSCSQL = {}));
})(FormulationManagementSystems || (FormulationManagementSystems = {}));
var FormulationManagementSystems;
(function (FormulationManagementSystems) {
    var VDSCSQL;
    (function (VDSCSQL) {
        var BulkStorageTankRow;
        (function (BulkStorageTankRow) {
            BulkStorageTankRow.idProperty = 'Id';
            BulkStorageTankRow.nameProperty = 'Product';
            BulkStorageTankRow.localTextPrefix = 'VDSCSQL.BulkStorageTank';
            var Fields;
            (function (Fields) {
            })(Fields = BulkStorageTankRow.Fields || (BulkStorageTankRow.Fields = {}));
            [
                'Id',
                'CustomerId',
                'MaterialId',
                'Product',
                'Building',
                'Bay',
                'Tank',
                'Capacity',
                'Dimension',
                'VaporPressureAdjustedTo76F',
                'VaporPressure',
                'StrapChart',
                'ShipmentClearance',
                'TankBarcode',
                'BulkTank',
                'FlashPoint',
                'CustomerCompany',
                'CustomerCustomerIdent',
                'CustomerName',
                'MaterialVdscCode',
                'MaterialDescription',
                'MaterialCustomerId',
                'MaterialCustomerIdent',
                'MaterialGmid',
                'MaterialCustomerPartNumber',
                'MaterialUnitOfMeasure',
                'MaterialDensity',
                'MaterialUnitQty',
                'MaterialMaterialCode',
                'MaterialMaterialType',
                'MaterialProductionGoal',
                'MaterialDiscontinued',
                'MaterialMsds',
                'MaterialPalletSpaceWt',
                'MaterialBulkSr',
                'MaterialDrysr',
                'MaterialHotBoxItem',
                'MaterialBarcode'
            ].forEach(function (x) { return Fields[x] = x; });
        })(BulkStorageTankRow = VDSCSQL.BulkStorageTankRow || (VDSCSQL.BulkStorageTankRow = {}));
    })(VDSCSQL = FormulationManagementSystems.VDSCSQL || (FormulationManagementSystems.VDSCSQL = {}));
})(FormulationManagementSystems || (FormulationManagementSystems = {}));
var FormulationManagementSystems;
(function (FormulationManagementSystems) {
    var VDSCSQL;
    (function (VDSCSQL) {
        var BulkStorageTankService;
        (function (BulkStorageTankService) {
            BulkStorageTankService.baseUrl = 'VDSCSQL/BulkStorageTank';
            var Methods;
            (function (Methods) {
            })(Methods = BulkStorageTankService.Methods || (BulkStorageTankService.Methods = {}));
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                BulkStorageTankService[x] = function (r, s, o) {
                    return Q.serviceRequest(BulkStorageTankService.baseUrl + '/' + x, r, s, o);
                };
                Methods[x] = BulkStorageTankService.baseUrl + '/' + x;
            });
        })(BulkStorageTankService = VDSCSQL.BulkStorageTankService || (VDSCSQL.BulkStorageTankService = {}));
    })(VDSCSQL = FormulationManagementSystems.VDSCSQL || (FormulationManagementSystems.VDSCSQL = {}));
})(FormulationManagementSystems || (FormulationManagementSystems = {}));
var FormulationManagementSystems;
(function (FormulationManagementSystems) {
    var VDSCSQL;
    (function (VDSCSQL) {
        var ConsumptionForm = (function (_super) {
            __extends(ConsumptionForm, _super);
            function ConsumptionForm() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            return ConsumptionForm;
        }(Serenity.PrefixedContext));
        ConsumptionForm.formKey = 'VDSCSQL.Consumption';
        VDSCSQL.ConsumptionForm = ConsumptionForm;
        [,
            ['RecipePhaseId', function () { return Serenity.IntegerEditor; }],
            ['IngredientNumber', function () { return Serenity.IntegerEditor; }],
            ['IngredientMaterialId', function () { return Serenity.IntegerEditor; }],
            ['Percentage', function () { return Serenity.DecimalEditor; }],
            ['OptionalIngredient', function () { return Serenity.BooleanEditor; }],
            ['SrcDstPathIds', function () { return Serenity.StringEditor; }],
            ['TimeExpectation', function () { return Serenity.IntegerEditor; }],
            ['OpPrcHighLmt', function () { return Serenity.DecimalEditor; }],
            ['OpPrcLwLmt', function () { return Serenity.DecimalEditor; }],
            ['TlPrcHighLmt', function () { return Serenity.DecimalEditor; }],
            ['TlPrcLwLmt', function () { return Serenity.DecimalEditor; }],
            ['StepDescription', function () { return Serenity.StringEditor; }],
            ['HTemp1', function () { return Serenity.IntegerEditor; }],
            ['LTemp1', function () { return Serenity.IntegerEditor; }],
            ['AmPrcHighLmt', function () { return Serenity.DecimalEditor; }],
            ['AmPrcLwLmt', function () { return Serenity.DecimalEditor; }]
        ].forEach(function (x) { return Object.defineProperty(ConsumptionForm.prototype, x[0], {
            get: function () {
                return this.w(x[0], x[1]());
            },
            enumerable: true,
            configurable: true
        }); });
    })(VDSCSQL = FormulationManagementSystems.VDSCSQL || (FormulationManagementSystems.VDSCSQL = {}));
})(FormulationManagementSystems || (FormulationManagementSystems = {}));
var FormulationManagementSystems;
(function (FormulationManagementSystems) {
    var VDSCSQL;
    (function (VDSCSQL) {
        var ConsumptionRow;
        (function (ConsumptionRow) {
            ConsumptionRow.idProperty = 'Id';
            ConsumptionRow.nameProperty = 'SrcDstPathIds';
            ConsumptionRow.localTextPrefix = 'VDSCSQL.Consumption';
            var Fields;
            (function (Fields) {
            })(Fields = ConsumptionRow.Fields || (ConsumptionRow.Fields = {}));
            [
                'Id',
                'RecipePhaseId',
                'IngredientNumber',
                'IngredientMaterialId',
                'Percentage',
                'OptionalIngredient',
                'SrcDstPathIds',
                'TimeExpectation',
                'OpPrcHighLmt',
                'OpPrcLwLmt',
                'TlPrcHighLmt',
                'TlPrcLwLmt',
                'StepDescription',
                'HTemp1',
                'LTemp1',
                'AmPrcHighLmt',
                'AmPrcLwLmt',
                'RecipePhaseRecipeId',
                'RecipePhasePhaseName',
                'RecipePhasePhaseNumber',
                'RecipePhasePhaseOptional',
                'RecipePhaseProcedure',
                'RecipePhasePackagingInstructions',
                'IngredientMaterialVdscCode',
                'IngredientMaterialDescription',
                'IngredientMaterialCustomerId',
                'IngredientMaterialCustomerIdent',
                'IngredientMaterialGmid',
                'IngredientMaterialCustomerPartNumber',
                'IngredientMaterialUnitOfMeasure',
                'IngredientMaterialDensity',
                'IngredientMaterialUnitQty',
                'IngredientMaterialMaterialCode',
                'IngredientMaterialMaterialType',
                'IngredientMaterialProductionGoal',
                'IngredientMaterialDiscontinued',
                'IngredientMaterialMsds',
                'IngredientMaterialPalletSpaceWt',
                'IngredientMaterialBulkSr',
                'IngredientMaterialDrysr',
                'IngredientMaterialHotBoxItem',
                'IngredientMaterialBarcode'
            ].forEach(function (x) { return Fields[x] = x; });
        })(ConsumptionRow = VDSCSQL.ConsumptionRow || (VDSCSQL.ConsumptionRow = {}));
    })(VDSCSQL = FormulationManagementSystems.VDSCSQL || (FormulationManagementSystems.VDSCSQL = {}));
})(FormulationManagementSystems || (FormulationManagementSystems = {}));
var FormulationManagementSystems;
(function (FormulationManagementSystems) {
    var VDSCSQL;
    (function (VDSCSQL) {
        var ConsumptionService;
        (function (ConsumptionService) {
            ConsumptionService.baseUrl = 'VDSCSQL/Consumption';
            var Methods;
            (function (Methods) {
            })(Methods = ConsumptionService.Methods || (ConsumptionService.Methods = {}));
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                ConsumptionService[x] = function (r, s, o) {
                    return Q.serviceRequest(ConsumptionService.baseUrl + '/' + x, r, s, o);
                };
                Methods[x] = ConsumptionService.baseUrl + '/' + x;
            });
        })(ConsumptionService = VDSCSQL.ConsumptionService || (VDSCSQL.ConsumptionService = {}));
    })(VDSCSQL = FormulationManagementSystems.VDSCSQL || (FormulationManagementSystems.VDSCSQL = {}));
})(FormulationManagementSystems || (FormulationManagementSystems = {}));
var FormulationManagementSystems;
(function (FormulationManagementSystems) {
    var VDSCSQL;
    (function (VDSCSQL) {
        var CustomerForm = (function (_super) {
            __extends(CustomerForm, _super);
            function CustomerForm() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            return CustomerForm;
        }(Serenity.PrefixedContext));
        CustomerForm.formKey = 'VDSCSQL.Customer';
        VDSCSQL.CustomerForm = CustomerForm;
        [,
            ['Company', function () { return Serenity.StringEditor; }],
            ['CustomerIdent', function () { return Serenity.StringEditor; }],
            ['CustomerName', function () { return Serenity.StringEditor; }]
        ].forEach(function (x) { return Object.defineProperty(CustomerForm.prototype, x[0], {
            get: function () {
                return this.w(x[0], x[1]());
            },
            enumerable: true,
            configurable: true
        }); });
    })(VDSCSQL = FormulationManagementSystems.VDSCSQL || (FormulationManagementSystems.VDSCSQL = {}));
})(FormulationManagementSystems || (FormulationManagementSystems = {}));
var FormulationManagementSystems;
(function (FormulationManagementSystems) {
    var VDSCSQL;
    (function (VDSCSQL) {
        var CustomerRow;
        (function (CustomerRow) {
            CustomerRow.idProperty = 'Id';
            CustomerRow.nameProperty = 'Company';
            CustomerRow.localTextPrefix = 'VDSCSQL.Customer';
            var Fields;
            (function (Fields) {
            })(Fields = CustomerRow.Fields || (CustomerRow.Fields = {}));
            [
                'Id',
                'Company',
                'CustomerIdent',
                'CustomerName'
            ].forEach(function (x) { return Fields[x] = x; });
        })(CustomerRow = VDSCSQL.CustomerRow || (VDSCSQL.CustomerRow = {}));
    })(VDSCSQL = FormulationManagementSystems.VDSCSQL || (FormulationManagementSystems.VDSCSQL = {}));
})(FormulationManagementSystems || (FormulationManagementSystems = {}));
var FormulationManagementSystems;
(function (FormulationManagementSystems) {
    var VDSCSQL;
    (function (VDSCSQL) {
        var CustomerService;
        (function (CustomerService) {
            CustomerService.baseUrl = 'VDSCSQL/Customer';
            var Methods;
            (function (Methods) {
            })(Methods = CustomerService.Methods || (CustomerService.Methods = {}));
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                CustomerService[x] = function (r, s, o) {
                    return Q.serviceRequest(CustomerService.baseUrl + '/' + x, r, s, o);
                };
                Methods[x] = CustomerService.baseUrl + '/' + x;
            });
        })(CustomerService = VDSCSQL.CustomerService || (VDSCSQL.CustomerService = {}));
    })(VDSCSQL = FormulationManagementSystems.VDSCSQL || (FormulationManagementSystems.VDSCSQL = {}));
})(FormulationManagementSystems || (FormulationManagementSystems = {}));
var FormulationManagementSystems;
(function (FormulationManagementSystems) {
    var VDSCSQL;
    (function (VDSCSQL) {
        var EmployeeForm = (function (_super) {
            __extends(EmployeeForm, _super);
            function EmployeeForm() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            return EmployeeForm;
        }(Serenity.PrefixedContext));
        EmployeeForm.formKey = 'VDSCSQL.Employee';
        VDSCSQL.EmployeeForm = EmployeeForm;
        [,
            ['EmployeeIdent1', function () { return Serenity.StringEditor; }],
            ['VdscAreaId1', function () { return Serenity.IntegerEditor; }],
            ['FirstName1', function () { return Serenity.StringEditor; }],
            ['LastName1', function () { return Serenity.StringEditor; }],
            ['TeamLeader1', function () { return Serenity.BooleanEditor; }],
            ['AreaManager1', function () { return Serenity.BooleanEditor; }],
            ['OvertimePreference1', function () { return Serenity.BooleanEditor; }],
            ['Shift1', function () { return Serenity.StringEditor; }],
            ['ForkliftLicense1', function () { return Serenity.BooleanEditor; }],
            ['ShippingEmployee1', function () { return Serenity.BooleanEditor; }],
            ['EmploymentTerminated1', function () { return Serenity.BooleanEditor; }],
            ['EmpTermDate1', function () { return Serenity.DateEditor; }],
            ['EmpTermReason1', function () { return Serenity.StringEditor; }],
            ['VdscDepartmentId1', function () { return Serenity.IntegerEditor; }],
            ['EmpStartDate1', function () { return Serenity.DateEditor; }],
            ['EmpPhoneNum1', function () { return Serenity.StringEditor; }],
            ['EmpPhoneNum21', function () { return Serenity.StringEditor; }],
            ['EmpAddress1', function () { return Serenity.StringEditor; }],
            ['EmpTitle1', function () { return Serenity.StringEditor; }],
            ['EmpTimeCardNum1', function () { return Serenity.StringEditor; }],
            ['EmpLockerNum1', function () { return Serenity.StringEditor; }],
            ['UserName1', function () { return Serenity.StringEditor; }],
            ['Password1', function () { return Serenity.StringEditor; }]
        ].forEach(function (x) { return Object.defineProperty(EmployeeForm.prototype, x[0], {
            get: function () {
                return this.w(x[0], x[1]());
            },
            enumerable: true,
            configurable: true
        }); });
    })(VDSCSQL = FormulationManagementSystems.VDSCSQL || (FormulationManagementSystems.VDSCSQL = {}));
})(FormulationManagementSystems || (FormulationManagementSystems = {}));
var FormulationManagementSystems;
(function (FormulationManagementSystems) {
    var VDSCSQL;
    (function (VDSCSQL) {
        var EmployeeOvertimeForm = (function (_super) {
            __extends(EmployeeOvertimeForm, _super);
            function EmployeeOvertimeForm() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            return EmployeeOvertimeForm;
        }(Serenity.PrefixedContext));
        EmployeeOvertimeForm.formKey = 'VDSCSQL.EmployeeOvertime';
        VDSCSQL.EmployeeOvertimeForm = EmployeeOvertimeForm;
        [,
            ['EmployeeId', function () { return Serenity.IntegerEditor; }],
            ['DateWorked', function () { return Serenity.DateEditor; }],
            ['VdscAreaId', function () { return Serenity.IntegerEditor; }],
            ['Product', function () { return Serenity.StringEditor; }],
            ['DaysOfOvertimeWorked', function () { return Serenity.IntegerEditor; }]
        ].forEach(function (x) { return Object.defineProperty(EmployeeOvertimeForm.prototype, x[0], {
            get: function () {
                return this.w(x[0], x[1]());
            },
            enumerable: true,
            configurable: true
        }); });
    })(VDSCSQL = FormulationManagementSystems.VDSCSQL || (FormulationManagementSystems.VDSCSQL = {}));
})(FormulationManagementSystems || (FormulationManagementSystems = {}));
var FormulationManagementSystems;
(function (FormulationManagementSystems) {
    var VDSCSQL;
    (function (VDSCSQL) {
        var EmployeeOvertimeRow;
        (function (EmployeeOvertimeRow) {
            EmployeeOvertimeRow.idProperty = 'Id';
            EmployeeOvertimeRow.nameProperty = 'Product';
            EmployeeOvertimeRow.localTextPrefix = 'VDSCSQL.EmployeeOvertime';
            var Fields;
            (function (Fields) {
            })(Fields = EmployeeOvertimeRow.Fields || (EmployeeOvertimeRow.Fields = {}));
            [
                'Id',
                'EmployeeId',
                'DateWorked',
                'VdscAreaId',
                'Product',
                'DaysOfOvertimeWorked',
                'EmployeeIdent',
                'EmployeeVdscAreaId',
                'EmployeeFirstName',
                'EmployeeLastName',
                'EmployeeTeamLeader',
                'EmployeeAreaManager',
                'EmployeeOvertimePreference',
                'EmployeeShift',
                'EmployeeForkliftLicense',
                'EmployeeShippingEmployee',
                'EmployeeEmploymentTerminated',
                'EmployeeEmpTermDate',
                'EmployeeEmpTermReason',
                'EmployeeVdscDepartmentId',
                'EmployeeEmpStartDate',
                'EmployeeEmpPhoneNum',
                'EmployeeEmpPhoneNum2',
                'EmployeeEmpAddress',
                'EmployeeEmpTitle',
                'EmployeeEmpTimeCardNum',
                'EmployeeEmpLockerNum',
                'EmployeeUserName',
                'EmployeePassword',
                'VdscAreaGroupId',
                'VdscArea',
                'VdscAreaListOrder'
            ].forEach(function (x) { return Fields[x] = x; });
        })(EmployeeOvertimeRow = VDSCSQL.EmployeeOvertimeRow || (VDSCSQL.EmployeeOvertimeRow = {}));
    })(VDSCSQL = FormulationManagementSystems.VDSCSQL || (FormulationManagementSystems.VDSCSQL = {}));
})(FormulationManagementSystems || (FormulationManagementSystems = {}));
var FormulationManagementSystems;
(function (FormulationManagementSystems) {
    var VDSCSQL;
    (function (VDSCSQL) {
        var EmployeeOvertimeService;
        (function (EmployeeOvertimeService) {
            EmployeeOvertimeService.baseUrl = 'VDSCSQL/EmployeeOvertime';
            var Methods;
            (function (Methods) {
            })(Methods = EmployeeOvertimeService.Methods || (EmployeeOvertimeService.Methods = {}));
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                EmployeeOvertimeService[x] = function (r, s, o) {
                    return Q.serviceRequest(EmployeeOvertimeService.baseUrl + '/' + x, r, s, o);
                };
                Methods[x] = EmployeeOvertimeService.baseUrl + '/' + x;
            });
        })(EmployeeOvertimeService = VDSCSQL.EmployeeOvertimeService || (VDSCSQL.EmployeeOvertimeService = {}));
    })(VDSCSQL = FormulationManagementSystems.VDSCSQL || (FormulationManagementSystems.VDSCSQL = {}));
})(FormulationManagementSystems || (FormulationManagementSystems = {}));
var FormulationManagementSystems;
(function (FormulationManagementSystems) {
    var VDSCSQL;
    (function (VDSCSQL) {
        var EmployeePhotoForm = (function (_super) {
            __extends(EmployeePhotoForm, _super);
            function EmployeePhotoForm() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            return EmployeePhotoForm;
        }(Serenity.PrefixedContext));
        EmployeePhotoForm.formKey = 'VDSCSQL.EmployeePhoto';
        VDSCSQL.EmployeePhotoForm = EmployeePhotoForm;
        [,
            ['EmployeeId', function () { return Serenity.IntegerEditor; }],
            ['FileName', function () { return Serenity.StringEditor; }],
            ['ContentType', function () { return Serenity.StringEditor; }],
            ['EmployeePhoto', function () { return Serenity.StringEditor; }]
        ].forEach(function (x) { return Object.defineProperty(EmployeePhotoForm.prototype, x[0], {
            get: function () {
                return this.w(x[0], x[1]());
            },
            enumerable: true,
            configurable: true
        }); });
    })(VDSCSQL = FormulationManagementSystems.VDSCSQL || (FormulationManagementSystems.VDSCSQL = {}));
})(FormulationManagementSystems || (FormulationManagementSystems = {}));
var FormulationManagementSystems;
(function (FormulationManagementSystems) {
    var VDSCSQL;
    (function (VDSCSQL) {
        var EmployeePhotoRow;
        (function (EmployeePhotoRow) {
            EmployeePhotoRow.idProperty = 'Id';
            EmployeePhotoRow.nameProperty = 'FileName';
            EmployeePhotoRow.localTextPrefix = 'VDSCSQL.EmployeePhoto';
            var Fields;
            (function (Fields) {
            })(Fields = EmployeePhotoRow.Fields || (EmployeePhotoRow.Fields = {}));
            [
                'Id',
                'EmployeeId',
                'FileName',
                'ContentType',
                'EmployeePhoto'
            ].forEach(function (x) { return Fields[x] = x; });
        })(EmployeePhotoRow = VDSCSQL.EmployeePhotoRow || (VDSCSQL.EmployeePhotoRow = {}));
    })(VDSCSQL = FormulationManagementSystems.VDSCSQL || (FormulationManagementSystems.VDSCSQL = {}));
})(FormulationManagementSystems || (FormulationManagementSystems = {}));
var FormulationManagementSystems;
(function (FormulationManagementSystems) {
    var VDSCSQL;
    (function (VDSCSQL) {
        var EmployeePhotoService;
        (function (EmployeePhotoService) {
            EmployeePhotoService.baseUrl = 'VDSCSQL/EmployeePhoto';
            var Methods;
            (function (Methods) {
            })(Methods = EmployeePhotoService.Methods || (EmployeePhotoService.Methods = {}));
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                EmployeePhotoService[x] = function (r, s, o) {
                    return Q.serviceRequest(EmployeePhotoService.baseUrl + '/' + x, r, s, o);
                };
                Methods[x] = EmployeePhotoService.baseUrl + '/' + x;
            });
        })(EmployeePhotoService = VDSCSQL.EmployeePhotoService || (VDSCSQL.EmployeePhotoService = {}));
    })(VDSCSQL = FormulationManagementSystems.VDSCSQL || (FormulationManagementSystems.VDSCSQL = {}));
})(FormulationManagementSystems || (FormulationManagementSystems = {}));
var FormulationManagementSystems;
(function (FormulationManagementSystems) {
    var VDSCSQL;
    (function (VDSCSQL) {
        var EmployeeRow;
        (function (EmployeeRow) {
            EmployeeRow.idProperty = 'Id';
            EmployeeRow.nameProperty = 'EmployeeIdent1';
            EmployeeRow.localTextPrefix = 'VDSCSQL.Employee';
            var Fields;
            (function (Fields) {
            })(Fields = EmployeeRow.Fields || (EmployeeRow.Fields = {}));
            [
                'Id',
                'EmployeeIdent1',
                'VdscAreaId1',
                'FirstName1',
                'LastName1',
                'TeamLeader1',
                'AreaManager1',
                'OvertimePreference1',
                'Shift1',
                'ForkliftLicense1',
                'ShippingEmployee1',
                'EmploymentTerminated1',
                'EmpTermDate1',
                'EmpTermReason1',
                'VdscDepartmentId1',
                'EmpStartDate1',
                'EmpPhoneNum1',
                'EmpPhoneNum21',
                'EmpAddress1',
                'EmpTitle1',
                'EmpTimeCardNum1',
                'EmpLockerNum1',
                'UserName1',
                'Password1',
                'EmployeeIdent',
                'VdscAreaId',
                'FirstName',
                'LastName',
                'TeamLeader',
                'AreaManager',
                'OvertimePreference',
                'Shift',
                'ForkliftLicense',
                'ShippingEmployee',
                'EmploymentTerminated',
                'EmpTermDate',
                'EmpTermReason',
                'VdscDepartmentId',
                'EmpStartDate',
                'EmpPhoneNum',
                'EmpPhoneNum2',
                'EmpAddress',
                'EmpTitle',
                'EmpTimeCardNum',
                'EmpLockerNum',
                'UserName',
                'Password',
                'VdscAreaGroupId',
                'VdscArea',
                'VdscAreaListOrder'
            ].forEach(function (x) { return Fields[x] = x; });
        })(EmployeeRow = VDSCSQL.EmployeeRow || (VDSCSQL.EmployeeRow = {}));
    })(VDSCSQL = FormulationManagementSystems.VDSCSQL || (FormulationManagementSystems.VDSCSQL = {}));
})(FormulationManagementSystems || (FormulationManagementSystems = {}));
var FormulationManagementSystems;
(function (FormulationManagementSystems) {
    var VDSCSQL;
    (function (VDSCSQL) {
        var EmployeeService;
        (function (EmployeeService) {
            EmployeeService.baseUrl = 'VDSCSQL/Employee';
            var Methods;
            (function (Methods) {
            })(Methods = EmployeeService.Methods || (EmployeeService.Methods = {}));
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                EmployeeService[x] = function (r, s, o) {
                    return Q.serviceRequest(EmployeeService.baseUrl + '/' + x, r, s, o);
                };
                Methods[x] = EmployeeService.baseUrl + '/' + x;
            });
        })(EmployeeService = VDSCSQL.EmployeeService || (VDSCSQL.EmployeeService = {}));
    })(VDSCSQL = FormulationManagementSystems.VDSCSQL || (FormulationManagementSystems.VDSCSQL = {}));
})(FormulationManagementSystems || (FormulationManagementSystems = {}));
var FormulationManagementSystems;
(function (FormulationManagementSystems) {
    var VDSCSQL;
    (function (VDSCSQL) {
        var ManagerForm = (function (_super) {
            __extends(ManagerForm, _super);
            function ManagerForm() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            return ManagerForm;
        }(Serenity.PrefixedContext));
        ManagerForm.formKey = 'VDSCSQL.Manager';
        VDSCSQL.ManagerForm = ManagerForm;
        [,
            ['ManagerName', function () { return Serenity.StringEditor; }]
        ].forEach(function (x) { return Object.defineProperty(ManagerForm.prototype, x[0], {
            get: function () {
                return this.w(x[0], x[1]());
            },
            enumerable: true,
            configurable: true
        }); });
    })(VDSCSQL = FormulationManagementSystems.VDSCSQL || (FormulationManagementSystems.VDSCSQL = {}));
})(FormulationManagementSystems || (FormulationManagementSystems = {}));
var FormulationManagementSystems;
(function (FormulationManagementSystems) {
    var VDSCSQL;
    (function (VDSCSQL) {
        var ManagerRow;
        (function (ManagerRow) {
            ManagerRow.idProperty = 'Id';
            ManagerRow.nameProperty = 'ManagerName';
            ManagerRow.localTextPrefix = 'VDSCSQL.Manager';
            var Fields;
            (function (Fields) {
            })(Fields = ManagerRow.Fields || (ManagerRow.Fields = {}));
            [
                'Id',
                'ManagerName'
            ].forEach(function (x) { return Fields[x] = x; });
        })(ManagerRow = VDSCSQL.ManagerRow || (VDSCSQL.ManagerRow = {}));
    })(VDSCSQL = FormulationManagementSystems.VDSCSQL || (FormulationManagementSystems.VDSCSQL = {}));
})(FormulationManagementSystems || (FormulationManagementSystems = {}));
var FormulationManagementSystems;
(function (FormulationManagementSystems) {
    var VDSCSQL;
    (function (VDSCSQL) {
        var ManagerService;
        (function (ManagerService) {
            ManagerService.baseUrl = 'VDSCSQL/Manager';
            var Methods;
            (function (Methods) {
            })(Methods = ManagerService.Methods || (ManagerService.Methods = {}));
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                ManagerService[x] = function (r, s, o) {
                    return Q.serviceRequest(ManagerService.baseUrl + '/' + x, r, s, o);
                };
                Methods[x] = ManagerService.baseUrl + '/' + x;
            });
        })(ManagerService = VDSCSQL.ManagerService || (VDSCSQL.ManagerService = {}));
    })(VDSCSQL = FormulationManagementSystems.VDSCSQL || (FormulationManagementSystems.VDSCSQL = {}));
})(FormulationManagementSystems || (FormulationManagementSystems = {}));
var FormulationManagementSystems;
(function (FormulationManagementSystems) {
    var VDSCSQL;
    (function (VDSCSQL) {
        var MaterialForm = (function (_super) {
            __extends(MaterialForm, _super);
            function MaterialForm() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            return MaterialForm;
        }(Serenity.PrefixedContext));
        MaterialForm.formKey = 'VDSCSQL.Material';
        VDSCSQL.MaterialForm = MaterialForm;
        [,
            ['VdscCode', function () { return Serenity.StringEditor; }],
            ['Description', function () { return Serenity.StringEditor; }],
            ['CustomerId', function () { return Serenity.IntegerEditor; }],
            ['CustomerIdent', function () { return Serenity.StringEditor; }],
            ['Gmid', function () { return Serenity.StringEditor; }],
            ['CustomerPartNumber', function () { return Serenity.StringEditor; }],
            ['UnitOfMeasure', function () { return Serenity.StringEditor; }],
            ['Density', function () { return Serenity.DecimalEditor; }],
            ['UnitQty', function () { return Serenity.DecimalEditor; }],
            ['MaterialCode', function () { return Serenity.StringEditor; }],
            ['MaterialType', function () { return Serenity.StringEditor; }],
            ['ProductionGoal', function () { return Serenity.DecimalEditor; }],
            ['Discontinued', function () { return Serenity.BooleanEditor; }],
            ['Msds', function () { return Serenity.StringEditor; }],
            ['PalletSpaceWt', function () { return Serenity.DecimalEditor; }],
            ['BulkSr', function () { return Serenity.BooleanEditor; }],
            ['Drysr', function () { return Serenity.BooleanEditor; }],
            ['HotBoxItem', function () { return Serenity.BooleanEditor; }],
            ['Barcode', function () { return Serenity.StringEditor; }]
        ].forEach(function (x) { return Object.defineProperty(MaterialForm.prototype, x[0], {
            get: function () {
                return this.w(x[0], x[1]());
            },
            enumerable: true,
            configurable: true
        }); });
    })(VDSCSQL = FormulationManagementSystems.VDSCSQL || (FormulationManagementSystems.VDSCSQL = {}));
})(FormulationManagementSystems || (FormulationManagementSystems = {}));
var FormulationManagementSystems;
(function (FormulationManagementSystems) {
    var VDSCSQL;
    (function (VDSCSQL) {
        var MaterialRow;
        (function (MaterialRow) {
            MaterialRow.idProperty = 'Id';
            MaterialRow.nameProperty = 'VdscCode';
            MaterialRow.localTextPrefix = 'VDSCSQL.Material';
            var Fields;
            (function (Fields) {
            })(Fields = MaterialRow.Fields || (MaterialRow.Fields = {}));
            [
                'Id',
                'VdscCode',
                'Description',
                'CustomerId',
                'CustomerIdent',
                'Gmid',
                'CustomerPartNumber',
                'UnitOfMeasure',
                'Density',
                'UnitQty',
                'MaterialCode',
                'MaterialType',
                'ProductionGoal',
                'Discontinued',
                'Msds',
                'PalletSpaceWt',
                'BulkSr',
                'Drysr',
                'HotBoxItem',
                'Barcode',
                'CustomerCompany',
                'CustomerCustomerIdent',
                'CustomerName'
            ].forEach(function (x) { return Fields[x] = x; });
        })(MaterialRow = VDSCSQL.MaterialRow || (VDSCSQL.MaterialRow = {}));
    })(VDSCSQL = FormulationManagementSystems.VDSCSQL || (FormulationManagementSystems.VDSCSQL = {}));
})(FormulationManagementSystems || (FormulationManagementSystems = {}));
var FormulationManagementSystems;
(function (FormulationManagementSystems) {
    var VDSCSQL;
    (function (VDSCSQL) {
        var MaterialService;
        (function (MaterialService) {
            MaterialService.baseUrl = 'VDSCSQL/Material';
            var Methods;
            (function (Methods) {
            })(Methods = MaterialService.Methods || (MaterialService.Methods = {}));
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                MaterialService[x] = function (r, s, o) {
                    return Q.serviceRequest(MaterialService.baseUrl + '/' + x, r, s, o);
                };
                Methods[x] = MaterialService.baseUrl + '/' + x;
            });
        })(MaterialService = VDSCSQL.MaterialService || (VDSCSQL.MaterialService = {}));
    })(VDSCSQL = FormulationManagementSystems.VDSCSQL || (FormulationManagementSystems.VDSCSQL = {}));
})(FormulationManagementSystems || (FormulationManagementSystems = {}));
var FormulationManagementSystems;
(function (FormulationManagementSystems) {
    var VDSCSQL;
    (function (VDSCSQL) {
        var ProductionRequestForm = (function (_super) {
            __extends(ProductionRequestForm, _super);
            function ProductionRequestForm() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            return ProductionRequestForm;
        }(Serenity.PrefixedContext));
        ProductionRequestForm.formKey = 'VDSCSQL.ProductionRequest';
        VDSCSQL.ProductionRequestForm = ProductionRequestForm;
        [,
            ['DateCreated', function () { return Serenity.DateEditor; }],
            ['CustomerId', function () { return Serenity.IntegerEditor; }],
            ['MaterialId', function () { return Serenity.IntegerEditor; }],
            ['RecipeId', function () { return Serenity.IntegerEditor; }],
            ['VdscAreaId', function () { return Serenity.IntegerEditor; }],
            ['QuantityRequested', function () { return Serenity.IntegerEditor; }],
            ['Operators', function () { return Serenity.IntegerEditor; }],
            ['Status', function () { return Serenity.StringEditor; }],
            ['BeginDate', function () { return Serenity.DateEditor; }],
            ['EndDate', function () { return Serenity.DateEditor; }],
            ['Attachments', function () { return Serenity.StringEditor; }],
            ['Notes', function () { return Serenity.StringEditor; }],
            ['UseAlternateRecipe', function () { return Serenity.BooleanEditor; }],
            ['ComputeBatch', function () { return Serenity.BooleanEditor; }]
        ].forEach(function (x) { return Object.defineProperty(ProductionRequestForm.prototype, x[0], {
            get: function () {
                return this.w(x[0], x[1]());
            },
            enumerable: true,
            configurable: true
        }); });
    })(VDSCSQL = FormulationManagementSystems.VDSCSQL || (FormulationManagementSystems.VDSCSQL = {}));
})(FormulationManagementSystems || (FormulationManagementSystems = {}));
var FormulationManagementSystems;
(function (FormulationManagementSystems) {
    var VDSCSQL;
    (function (VDSCSQL) {
        var ProductionRequestRow;
        (function (ProductionRequestRow) {
            ProductionRequestRow.idProperty = 'Id';
            ProductionRequestRow.nameProperty = 'Status';
            ProductionRequestRow.localTextPrefix = 'VDSCSQL.ProductionRequest';
            var Fields;
            (function (Fields) {
            })(Fields = ProductionRequestRow.Fields || (ProductionRequestRow.Fields = {}));
            [
                'Id',
                'DateCreated',
                'CustomerId',
                'MaterialId',
                'RecipeId',
                'VdscAreaId',
                'QuantityRequested',
                'Operators',
                'Status',
                'BeginDate',
                'EndDate',
                'Attachments',
                'Notes',
                'UseAlternateRecipe',
                'ComputeBatch',
                'CustomerCompany',
                'CustomerCustomerIdent',
                'CustomerName',
                'MaterialVdscCode',
                'MaterialDescription',
                'MaterialCustomerId',
                'MaterialCustomerIdent',
                'MaterialGmid',
                'MaterialCustomerPartNumber',
                'MaterialUnitOfMeasure',
                'MaterialDensity',
                'MaterialUnitQty',
                'MaterialMaterialCode',
                'MaterialMaterialType',
                'MaterialProductionGoal',
                'MaterialDiscontinued',
                'MaterialMsds',
                'MaterialPalletSpaceWt',
                'MaterialBulkSr',
                'MaterialDrysr',
                'MaterialHotBoxItem',
                'MaterialBarcode',
                'RecipeMaterialId',
                'RecipeDescription',
                'RecipeDescriptionNotes',
                'RecipeBatchQty',
                'RecipeWeightRangeHigh',
                'RecipeWeightRangeLow',
                'VdscAreaGroupId',
                'VdscArea',
                'VdscAreaListOrder'
            ].forEach(function (x) { return Fields[x] = x; });
        })(ProductionRequestRow = VDSCSQL.ProductionRequestRow || (VDSCSQL.ProductionRequestRow = {}));
    })(VDSCSQL = FormulationManagementSystems.VDSCSQL || (FormulationManagementSystems.VDSCSQL = {}));
})(FormulationManagementSystems || (FormulationManagementSystems = {}));
var FormulationManagementSystems;
(function (FormulationManagementSystems) {
    var VDSCSQL;
    (function (VDSCSQL) {
        var ProductionRequestService;
        (function (ProductionRequestService) {
            ProductionRequestService.baseUrl = 'VDSCSQL/ProductionRequest';
            var Methods;
            (function (Methods) {
            })(Methods = ProductionRequestService.Methods || (ProductionRequestService.Methods = {}));
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                ProductionRequestService[x] = function (r, s, o) {
                    return Q.serviceRequest(ProductionRequestService.baseUrl + '/' + x, r, s, o);
                };
                Methods[x] = ProductionRequestService.baseUrl + '/' + x;
            });
        })(ProductionRequestService = VDSCSQL.ProductionRequestService || (VDSCSQL.ProductionRequestService = {}));
    })(VDSCSQL = FormulationManagementSystems.VDSCSQL || (FormulationManagementSystems.VDSCSQL = {}));
})(FormulationManagementSystems || (FormulationManagementSystems = {}));
var FormulationManagementSystems;
(function (FormulationManagementSystems) {
    var VDSCSQL;
    (function (VDSCSQL) {
        var RecipeForm = (function (_super) {
            __extends(RecipeForm, _super);
            function RecipeForm() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            return RecipeForm;
        }(Serenity.PrefixedContext));
        RecipeForm.formKey = 'VDSCSQL.Recipe';
        VDSCSQL.RecipeForm = RecipeForm;
        [,
            ['MaterialId', function () { return Serenity.IntegerEditor; }],
            ['Description', function () { return Serenity.StringEditor; }],
            ['DescriptionNotes', function () { return Serenity.StringEditor; }],
            ['BatchQty', function () { return Serenity.DecimalEditor; }],
            ['WeightRangeHigh', function () { return Serenity.DecimalEditor; }],
            ['WeightRangeLow', function () { return Serenity.DecimalEditor; }]
        ].forEach(function (x) { return Object.defineProperty(RecipeForm.prototype, x[0], {
            get: function () {
                return this.w(x[0], x[1]());
            },
            enumerable: true,
            configurable: true
        }); });
    })(VDSCSQL = FormulationManagementSystems.VDSCSQL || (FormulationManagementSystems.VDSCSQL = {}));
})(FormulationManagementSystems || (FormulationManagementSystems = {}));
var FormulationManagementSystems;
(function (FormulationManagementSystems) {
    var VDSCSQL;
    (function (VDSCSQL) {
        var RecipePhaseForm = (function (_super) {
            __extends(RecipePhaseForm, _super);
            function RecipePhaseForm() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            return RecipePhaseForm;
        }(Serenity.PrefixedContext));
        RecipePhaseForm.formKey = 'VDSCSQL.RecipePhase';
        VDSCSQL.RecipePhaseForm = RecipePhaseForm;
        [,
            ['RecipeId', function () { return Serenity.IntegerEditor; }],
            ['PhaseName', function () { return Serenity.StringEditor; }],
            ['PhaseNumber', function () { return Serenity.IntegerEditor; }],
            ['PhaseOptional', function () { return Serenity.BooleanEditor; }],
            ['Procedure', function () { return Serenity.StringEditor; }],
            ['PackagingInstructions', function () { return Serenity.StringEditor; }]
        ].forEach(function (x) { return Object.defineProperty(RecipePhaseForm.prototype, x[0], {
            get: function () {
                return this.w(x[0], x[1]());
            },
            enumerable: true,
            configurable: true
        }); });
    })(VDSCSQL = FormulationManagementSystems.VDSCSQL || (FormulationManagementSystems.VDSCSQL = {}));
})(FormulationManagementSystems || (FormulationManagementSystems = {}));
var FormulationManagementSystems;
(function (FormulationManagementSystems) {
    var VDSCSQL;
    (function (VDSCSQL) {
        var RecipePhaseRow;
        (function (RecipePhaseRow) {
            RecipePhaseRow.idProperty = 'Id';
            RecipePhaseRow.nameProperty = 'PhaseName';
            RecipePhaseRow.localTextPrefix = 'VDSCSQL.RecipePhase';
            var Fields;
            (function (Fields) {
            })(Fields = RecipePhaseRow.Fields || (RecipePhaseRow.Fields = {}));
            [
                'Id',
                'RecipeId',
                'PhaseName',
                'PhaseNumber',
                'PhaseOptional',
                'Procedure',
                'PackagingInstructions',
                'RecipeMaterialId',
                'RecipeDescription',
                'RecipeDescriptionNotes',
                'RecipeBatchQty',
                'RecipeWeightRangeHigh',
                'RecipeWeightRangeLow'
            ].forEach(function (x) { return Fields[x] = x; });
        })(RecipePhaseRow = VDSCSQL.RecipePhaseRow || (VDSCSQL.RecipePhaseRow = {}));
    })(VDSCSQL = FormulationManagementSystems.VDSCSQL || (FormulationManagementSystems.VDSCSQL = {}));
})(FormulationManagementSystems || (FormulationManagementSystems = {}));
var FormulationManagementSystems;
(function (FormulationManagementSystems) {
    var VDSCSQL;
    (function (VDSCSQL) {
        var RecipePhaseService;
        (function (RecipePhaseService) {
            RecipePhaseService.baseUrl = 'VDSCSQL/RecipePhase';
            var Methods;
            (function (Methods) {
            })(Methods = RecipePhaseService.Methods || (RecipePhaseService.Methods = {}));
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                RecipePhaseService[x] = function (r, s, o) {
                    return Q.serviceRequest(RecipePhaseService.baseUrl + '/' + x, r, s, o);
                };
                Methods[x] = RecipePhaseService.baseUrl + '/' + x;
            });
        })(RecipePhaseService = VDSCSQL.RecipePhaseService || (VDSCSQL.RecipePhaseService = {}));
    })(VDSCSQL = FormulationManagementSystems.VDSCSQL || (FormulationManagementSystems.VDSCSQL = {}));
})(FormulationManagementSystems || (FormulationManagementSystems = {}));
var FormulationManagementSystems;
(function (FormulationManagementSystems) {
    var VDSCSQL;
    (function (VDSCSQL) {
        var RecipeRow;
        (function (RecipeRow) {
            RecipeRow.idProperty = 'Id';
            RecipeRow.nameProperty = 'Description';
            RecipeRow.localTextPrefix = 'VDSCSQL.Recipe';
            var Fields;
            (function (Fields) {
            })(Fields = RecipeRow.Fields || (RecipeRow.Fields = {}));
            [
                'Id',
                'MaterialId',
                'Description',
                'DescriptionNotes',
                'BatchQty',
                'WeightRangeHigh',
                'WeightRangeLow',
                'MaterialVdscCode',
                'MaterialDescription',
                'MaterialCustomerId',
                'MaterialCustomerIdent',
                'MaterialGmid',
                'MaterialCustomerPartNumber',
                'MaterialUnitOfMeasure',
                'MaterialDensity',
                'MaterialUnitQty',
                'MaterialMaterialCode',
                'MaterialMaterialType',
                'MaterialProductionGoal',
                'MaterialDiscontinued',
                'MaterialMsds',
                'MaterialPalletSpaceWt',
                'MaterialBulkSr',
                'MaterialDrysr',
                'MaterialHotBoxItem',
                'MaterialBarcode'
            ].forEach(function (x) { return Fields[x] = x; });
        })(RecipeRow = VDSCSQL.RecipeRow || (VDSCSQL.RecipeRow = {}));
    })(VDSCSQL = FormulationManagementSystems.VDSCSQL || (FormulationManagementSystems.VDSCSQL = {}));
})(FormulationManagementSystems || (FormulationManagementSystems = {}));
var FormulationManagementSystems;
(function (FormulationManagementSystems) {
    var VDSCSQL;
    (function (VDSCSQL) {
        var RecipeService;
        (function (RecipeService) {
            RecipeService.baseUrl = 'VDSCSQL/Recipe';
            var Methods;
            (function (Methods) {
            })(Methods = RecipeService.Methods || (RecipeService.Methods = {}));
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                RecipeService[x] = function (r, s, o) {
                    return Q.serviceRequest(RecipeService.baseUrl + '/' + x, r, s, o);
                };
                Methods[x] = RecipeService.baseUrl + '/' + x;
            });
        })(RecipeService = VDSCSQL.RecipeService || (VDSCSQL.RecipeService = {}));
    })(VDSCSQL = FormulationManagementSystems.VDSCSQL || (FormulationManagementSystems.VDSCSQL = {}));
})(FormulationManagementSystems || (FormulationManagementSystems = {}));
var FormulationManagementSystems;
(function (FormulationManagementSystems) {
    var VDSCSQL;
    (function (VDSCSQL) {
        var SrcDstPathForm = (function (_super) {
            __extends(SrcDstPathForm, _super);
            function SrcDstPathForm() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            return SrcDstPathForm;
        }(Serenity.PrefixedContext));
        SrcDstPathForm.formKey = 'VDSCSQL.SrcDstPath';
        VDSCSQL.SrcDstPathForm = SrcDstPathForm;
        [,
            ['SrcTankId', function () { return Serenity.IntegerEditor; }],
            ['SrcPath', function () { return Serenity.StringEditor; }],
            ['DstTankId', function () { return Serenity.IntegerEditor; }],
            ['DstPath', function () { return Serenity.StringEditor; }],
            ['PathState', function () { return Serenity.StringEditor; }]
        ].forEach(function (x) { return Object.defineProperty(SrcDstPathForm.prototype, x[0], {
            get: function () {
                return this.w(x[0], x[1]());
            },
            enumerable: true,
            configurable: true
        }); });
    })(VDSCSQL = FormulationManagementSystems.VDSCSQL || (FormulationManagementSystems.VDSCSQL = {}));
})(FormulationManagementSystems || (FormulationManagementSystems = {}));
var FormulationManagementSystems;
(function (FormulationManagementSystems) {
    var VDSCSQL;
    (function (VDSCSQL) {
        var SrcDstPathRow;
        (function (SrcDstPathRow) {
            SrcDstPathRow.idProperty = 'Id';
            SrcDstPathRow.nameProperty = 'SrcPath';
            SrcDstPathRow.localTextPrefix = 'VDSCSQL.SrcDstPath';
            var Fields;
            (function (Fields) {
            })(Fields = SrcDstPathRow.Fields || (SrcDstPathRow.Fields = {}));
            [
                'Id',
                'SrcTankId',
                'SrcPath',
                'DstTankId',
                'DstPath',
                'PathState',
                'SrcTankCustomerId',
                'SrcTankMaterialId',
                'SrcTankProduct',
                'SrcTankBuilding',
                'SrcTankBay',
                'SrcTankTank',
                'SrcTankCapacity',
                'SrcTankDimension',
                'SrcTankVaporPressureAdjustedTo76F',
                'SrcTankVaporPressure',
                'SrcTankStrapChart',
                'SrcTankShipmentClearance',
                'SrcTankTankBarcode',
                'SrcTankBulkTank',
                'SrcTankFlashPoint',
                'DstTankCustomerId',
                'DstTankMaterialId',
                'DstTankProduct',
                'DstTankBuilding',
                'DstTankBay',
                'DstTankTank',
                'DstTankCapacity',
                'DstTankDimension',
                'DstTankVaporPressureAdjustedTo76F',
                'DstTankVaporPressure',
                'DstTankStrapChart',
                'DstTankShipmentClearance',
                'DstTankTankBarcode',
                'DstTankBulkTank',
                'DstTankFlashPoint'
            ].forEach(function (x) { return Fields[x] = x; });
        })(SrcDstPathRow = VDSCSQL.SrcDstPathRow || (VDSCSQL.SrcDstPathRow = {}));
    })(VDSCSQL = FormulationManagementSystems.VDSCSQL || (FormulationManagementSystems.VDSCSQL = {}));
})(FormulationManagementSystems || (FormulationManagementSystems = {}));
var FormulationManagementSystems;
(function (FormulationManagementSystems) {
    var VDSCSQL;
    (function (VDSCSQL) {
        var SrcDstPathService;
        (function (SrcDstPathService) {
            SrcDstPathService.baseUrl = 'VDSCSQL/SrcDstPath';
            var Methods;
            (function (Methods) {
            })(Methods = SrcDstPathService.Methods || (SrcDstPathService.Methods = {}));
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                SrcDstPathService[x] = function (r, s, o) {
                    return Q.serviceRequest(SrcDstPathService.baseUrl + '/' + x, r, s, o);
                };
                Methods[x] = SrcDstPathService.baseUrl + '/' + x;
            });
        })(SrcDstPathService = VDSCSQL.SrcDstPathService || (VDSCSQL.SrcDstPathService = {}));
    })(VDSCSQL = FormulationManagementSystems.VDSCSQL || (FormulationManagementSystems.VDSCSQL = {}));
})(FormulationManagementSystems || (FormulationManagementSystems = {}));
var FormulationManagementSystems;
(function (FormulationManagementSystems) {
    var VDSCSQL;
    (function (VDSCSQL) {
        var SrlBulkMovementDataForm = (function (_super) {
            __extends(SrlBulkMovementDataForm, _super);
            function SrlBulkMovementDataForm() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            return SrlBulkMovementDataForm;
        }(Serenity.PrefixedContext));
        SrlBulkMovementDataForm.formKey = 'VDSCSQL.SrlBulkMovementData';
        VDSCSQL.SrlBulkMovementDataForm = SrlBulkMovementDataForm;
        [,
            ['SrlBulkMovementId', function () { return Serenity.IntegerEditor; }],
            ['BulkStorageTankId', function () { return Serenity.IntegerEditor; }],
            ['StartPhysical', function () { return Serenity.DecimalEditor; }],
            ['EndPhysical', function () { return Serenity.DecimalEditor; }],
            ['MovementQuantity', function () { return Serenity.DecimalEditor; }]
        ].forEach(function (x) { return Object.defineProperty(SrlBulkMovementDataForm.prototype, x[0], {
            get: function () {
                return this.w(x[0], x[1]());
            },
            enumerable: true,
            configurable: true
        }); });
    })(VDSCSQL = FormulationManagementSystems.VDSCSQL || (FormulationManagementSystems.VDSCSQL = {}));
})(FormulationManagementSystems || (FormulationManagementSystems = {}));
var FormulationManagementSystems;
(function (FormulationManagementSystems) {
    var VDSCSQL;
    (function (VDSCSQL) {
        var SrlBulkMovementDataRow;
        (function (SrlBulkMovementDataRow) {
            SrlBulkMovementDataRow.idProperty = 'Id';
            SrlBulkMovementDataRow.localTextPrefix = 'VDSCSQL.SrlBulkMovementData';
            var Fields;
            (function (Fields) {
            })(Fields = SrlBulkMovementDataRow.Fields || (SrlBulkMovementDataRow.Fields = {}));
            [
                'Id',
                'SrlBulkMovementId',
                'BulkStorageTankId',
                'StartPhysical',
                'EndPhysical',
                'MovementQuantity'
            ].forEach(function (x) { return Fields[x] = x; });
        })(SrlBulkMovementDataRow = VDSCSQL.SrlBulkMovementDataRow || (VDSCSQL.SrlBulkMovementDataRow = {}));
    })(VDSCSQL = FormulationManagementSystems.VDSCSQL || (FormulationManagementSystems.VDSCSQL = {}));
})(FormulationManagementSystems || (FormulationManagementSystems = {}));
var FormulationManagementSystems;
(function (FormulationManagementSystems) {
    var VDSCSQL;
    (function (VDSCSQL) {
        var SrlBulkMovementDataService;
        (function (SrlBulkMovementDataService) {
            SrlBulkMovementDataService.baseUrl = 'VDSCSQL/SrlBulkMovementData';
            var Methods;
            (function (Methods) {
            })(Methods = SrlBulkMovementDataService.Methods || (SrlBulkMovementDataService.Methods = {}));
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                SrlBulkMovementDataService[x] = function (r, s, o) {
                    return Q.serviceRequest(SrlBulkMovementDataService.baseUrl + '/' + x, r, s, o);
                };
                Methods[x] = SrlBulkMovementDataService.baseUrl + '/' + x;
            });
        })(SrlBulkMovementDataService = VDSCSQL.SrlBulkMovementDataService || (VDSCSQL.SrlBulkMovementDataService = {}));
    })(VDSCSQL = FormulationManagementSystems.VDSCSQL || (FormulationManagementSystems.VDSCSQL = {}));
})(FormulationManagementSystems || (FormulationManagementSystems = {}));
var FormulationManagementSystems;
(function (FormulationManagementSystems) {
    var VDSCSQL;
    (function (VDSCSQL) {
        var SrlBulkMovementForm = (function (_super) {
            __extends(SrlBulkMovementForm, _super);
            function SrlBulkMovementForm() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            return SrlBulkMovementForm;
        }(Serenity.PrefixedContext));
        SrlBulkMovementForm.formKey = 'VDSCSQL.SrlBulkMovement';
        VDSCSQL.SrlBulkMovementForm = SrlBulkMovementForm;
        [,
            ['CarrierId', function () { return Serenity.IntegerEditor; }],
            ['TrailerNumber', function () { return Serenity.StringEditor; }],
            ['TankId', function () { return Serenity.IntegerEditor; }],
            ['MovementType', function () { return Serenity.StringEditor; }],
            ['BillofLading', function () { return Serenity.StringEditor; }],
            ['StartWeighTime', function () { return Serenity.DateEditor; }],
            ['StartPumpTime', function () { return Serenity.DateEditor; }],
            ['EndPumpTime', function () { return Serenity.DateEditor; }],
            ['EndWeighTime', function () { return Serenity.DateEditor; }],
            ['OperatorId', function () { return Serenity.IntegerEditor; }],
            ['MovementStartDate', function () { return Serenity.DateEditor; }],
            ['EntranceLocation', function () { return Serenity.StringEditor; }],
            ['PreviousMaterialId', function () { return Serenity.StringEditor; }],
            ['MovementArea', function () { return Serenity.StringEditor; }],
            ['MovementEndDate', function () { return Serenity.DateEditor; }],
            ['GrossWeight', function () { return Serenity.DecimalEditor; }],
            ['TareWeight', function () { return Serenity.DecimalEditor; }],
            ['Notes', function () { return Serenity.StringEditor; }],
            ['MovementQuantity', function () { return Serenity.DecimalEditor; }]
        ].forEach(function (x) { return Object.defineProperty(SrlBulkMovementForm.prototype, x[0], {
            get: function () {
                return this.w(x[0], x[1]());
            },
            enumerable: true,
            configurable: true
        }); });
    })(VDSCSQL = FormulationManagementSystems.VDSCSQL || (FormulationManagementSystems.VDSCSQL = {}));
})(FormulationManagementSystems || (FormulationManagementSystems = {}));
var FormulationManagementSystems;
(function (FormulationManagementSystems) {
    var VDSCSQL;
    (function (VDSCSQL) {
        var SrlBulkMovementRow;
        (function (SrlBulkMovementRow) {
            SrlBulkMovementRow.idProperty = 'Id';
            SrlBulkMovementRow.nameProperty = 'TrailerNumber';
            SrlBulkMovementRow.localTextPrefix = 'VDSCSQL.SrlBulkMovement';
            var Fields;
            (function (Fields) {
            })(Fields = SrlBulkMovementRow.Fields || (SrlBulkMovementRow.Fields = {}));
            [
                'Id',
                'CarrierId',
                'TrailerNumber',
                'TankId',
                'MovementType',
                'BillofLading',
                'StartWeighTime',
                'StartPumpTime',
                'EndPumpTime',
                'EndWeighTime',
                'OperatorId',
                'MovementStartDate',
                'EntranceLocation',
                'PreviousMaterialId',
                'MovementArea',
                'MovementEndDate',
                'GrossWeight',
                'TareWeight',
                'Notes',
                'MovementQuantity'
            ].forEach(function (x) { return Fields[x] = x; });
        })(SrlBulkMovementRow = VDSCSQL.SrlBulkMovementRow || (VDSCSQL.SrlBulkMovementRow = {}));
    })(VDSCSQL = FormulationManagementSystems.VDSCSQL || (FormulationManagementSystems.VDSCSQL = {}));
})(FormulationManagementSystems || (FormulationManagementSystems = {}));
var FormulationManagementSystems;
(function (FormulationManagementSystems) {
    var VDSCSQL;
    (function (VDSCSQL) {
        var SrlBulkMovementService;
        (function (SrlBulkMovementService) {
            SrlBulkMovementService.baseUrl = 'VDSCSQL/SrlBulkMovement';
            var Methods;
            (function (Methods) {
            })(Methods = SrlBulkMovementService.Methods || (SrlBulkMovementService.Methods = {}));
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                SrlBulkMovementService[x] = function (r, s, o) {
                    return Q.serviceRequest(SrlBulkMovementService.baseUrl + '/' + x, r, s, o);
                };
                Methods[x] = SrlBulkMovementService.baseUrl + '/' + x;
            });
        })(SrlBulkMovementService = VDSCSQL.SrlBulkMovementService || (VDSCSQL.SrlBulkMovementService = {}));
    })(VDSCSQL = FormulationManagementSystems.VDSCSQL || (FormulationManagementSystems.VDSCSQL = {}));
})(FormulationManagementSystems || (FormulationManagementSystems = {}));
var FormulationManagementSystems;
(function (FormulationManagementSystems) {
    var VDSCSQL;
    (function (VDSCSQL) {
        var SrlBulkStorageTankDataForm = (function (_super) {
            __extends(SrlBulkStorageTankDataForm, _super);
            function SrlBulkStorageTankDataForm() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            return SrlBulkStorageTankDataForm;
        }(Serenity.PrefixedContext));
        SrlBulkStorageTankDataForm.formKey = 'VDSCSQL.SrlBulkStorageTankData';
        VDSCSQL.SrlBulkStorageTankDataForm = SrlBulkStorageTankDataForm;
        [,
            ['BulkStorageTankId', function () { return Serenity.IntegerEditor; }],
            ['MaterialId', function () { return Serenity.IntegerEditor; }],
            ['ChangeDate', function () { return Serenity.DateEditor; }],
            ['Notes', function () { return Serenity.StringEditor; }],
            ['CleanoutResults', function () { return Serenity.StringEditor; }]
        ].forEach(function (x) { return Object.defineProperty(SrlBulkStorageTankDataForm.prototype, x[0], {
            get: function () {
                return this.w(x[0], x[1]());
            },
            enumerable: true,
            configurable: true
        }); });
    })(VDSCSQL = FormulationManagementSystems.VDSCSQL || (FormulationManagementSystems.VDSCSQL = {}));
})(FormulationManagementSystems || (FormulationManagementSystems = {}));
var FormulationManagementSystems;
(function (FormulationManagementSystems) {
    var VDSCSQL;
    (function (VDSCSQL) {
        var SrlBulkStorageTankDataRow;
        (function (SrlBulkStorageTankDataRow) {
            SrlBulkStorageTankDataRow.idProperty = 'Id';
            SrlBulkStorageTankDataRow.nameProperty = 'Notes';
            SrlBulkStorageTankDataRow.localTextPrefix = 'VDSCSQL.SrlBulkStorageTankData';
            var Fields;
            (function (Fields) {
            })(Fields = SrlBulkStorageTankDataRow.Fields || (SrlBulkStorageTankDataRow.Fields = {}));
            [
                'Id',
                'BulkStorageTankId',
                'MaterialId',
                'ChangeDate',
                'Notes',
                'CleanoutResults'
            ].forEach(function (x) { return Fields[x] = x; });
        })(SrlBulkStorageTankDataRow = VDSCSQL.SrlBulkStorageTankDataRow || (VDSCSQL.SrlBulkStorageTankDataRow = {}));
    })(VDSCSQL = FormulationManagementSystems.VDSCSQL || (FormulationManagementSystems.VDSCSQL = {}));
})(FormulationManagementSystems || (FormulationManagementSystems = {}));
var FormulationManagementSystems;
(function (FormulationManagementSystems) {
    var VDSCSQL;
    (function (VDSCSQL) {
        var SrlBulkStorageTankDataService;
        (function (SrlBulkStorageTankDataService) {
            SrlBulkStorageTankDataService.baseUrl = 'VDSCSQL/SrlBulkStorageTankData';
            var Methods;
            (function (Methods) {
            })(Methods = SrlBulkStorageTankDataService.Methods || (SrlBulkStorageTankDataService.Methods = {}));
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                SrlBulkStorageTankDataService[x] = function (r, s, o) {
                    return Q.serviceRequest(SrlBulkStorageTankDataService.baseUrl + '/' + x, r, s, o);
                };
                Methods[x] = SrlBulkStorageTankDataService.baseUrl + '/' + x;
            });
        })(SrlBulkStorageTankDataService = VDSCSQL.SrlBulkStorageTankDataService || (VDSCSQL.SrlBulkStorageTankDataService = {}));
    })(VDSCSQL = FormulationManagementSystems.VDSCSQL || (FormulationManagementSystems.VDSCSQL = {}));
})(FormulationManagementSystems || (FormulationManagementSystems = {}));
var FormulationManagementSystems;
(function (FormulationManagementSystems) {
    var VDSCSQL;
    (function (VDSCSQL) {
        var SrlBulkTerminalClearanceForm = (function (_super) {
            __extends(SrlBulkTerminalClearanceForm, _super);
            function SrlBulkTerminalClearanceForm() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            return SrlBulkTerminalClearanceForm;
        }(Serenity.PrefixedContext));
        SrlBulkTerminalClearanceForm.formKey = 'VDSCSQL.SrlBulkTerminalClearance';
        VDSCSQL.SrlBulkTerminalClearanceForm = SrlBulkTerminalClearanceForm;
        [,
            ['BulkStorageTankId', function () { return Serenity.IntegerEditor; }],
            ['ClearanceDate', function () { return Serenity.DateEditor; }],
            ['ClearanceName', function () { return Serenity.StringEditor; }],
            ['ClearRemovalText', function () { return Serenity.StringEditor; }],
            ['ClearanceRemoveDate', function () { return Serenity.DateEditor; }],
            ['ClearanceRemovalName', function () { return Serenity.StringEditor; }],
            ['LotNumber', function () { return Serenity.StringEditor; }],
            ['ClearanceDuration', function () { return Serenity.DecimalEditor; }],
            ['TankClearance', function () { return Serenity.BooleanEditor; }]
        ].forEach(function (x) { return Object.defineProperty(SrlBulkTerminalClearanceForm.prototype, x[0], {
            get: function () {
                return this.w(x[0], x[1]());
            },
            enumerable: true,
            configurable: true
        }); });
    })(VDSCSQL = FormulationManagementSystems.VDSCSQL || (FormulationManagementSystems.VDSCSQL = {}));
})(FormulationManagementSystems || (FormulationManagementSystems = {}));
var FormulationManagementSystems;
(function (FormulationManagementSystems) {
    var VDSCSQL;
    (function (VDSCSQL) {
        var SrlBulkTerminalClearanceRow;
        (function (SrlBulkTerminalClearanceRow) {
            SrlBulkTerminalClearanceRow.idProperty = 'Id';
            SrlBulkTerminalClearanceRow.nameProperty = 'ClearanceName';
            SrlBulkTerminalClearanceRow.localTextPrefix = 'VDSCSQL.SrlBulkTerminalClearance';
            var Fields;
            (function (Fields) {
            })(Fields = SrlBulkTerminalClearanceRow.Fields || (SrlBulkTerminalClearanceRow.Fields = {}));
            [
                'Id',
                'BulkStorageTankId',
                'ClearanceDate',
                'ClearanceName',
                'ClearRemovalText',
                'ClearanceRemoveDate',
                'ClearanceRemovalName',
                'LotNumber',
                'ClearanceDuration',
                'TankClearance'
            ].forEach(function (x) { return Fields[x] = x; });
        })(SrlBulkTerminalClearanceRow = VDSCSQL.SrlBulkTerminalClearanceRow || (VDSCSQL.SrlBulkTerminalClearanceRow = {}));
    })(VDSCSQL = FormulationManagementSystems.VDSCSQL || (FormulationManagementSystems.VDSCSQL = {}));
})(FormulationManagementSystems || (FormulationManagementSystems = {}));
var FormulationManagementSystems;
(function (FormulationManagementSystems) {
    var VDSCSQL;
    (function (VDSCSQL) {
        var SrlBulkTerminalClearanceService;
        (function (SrlBulkTerminalClearanceService) {
            SrlBulkTerminalClearanceService.baseUrl = 'VDSCSQL/SrlBulkTerminalClearance';
            var Methods;
            (function (Methods) {
            })(Methods = SrlBulkTerminalClearanceService.Methods || (SrlBulkTerminalClearanceService.Methods = {}));
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                SrlBulkTerminalClearanceService[x] = function (r, s, o) {
                    return Q.serviceRequest(SrlBulkTerminalClearanceService.baseUrl + '/' + x, r, s, o);
                };
                Methods[x] = SrlBulkTerminalClearanceService.baseUrl + '/' + x;
            });
        })(SrlBulkTerminalClearanceService = VDSCSQL.SrlBulkTerminalClearanceService || (VDSCSQL.SrlBulkTerminalClearanceService = {}));
    })(VDSCSQL = FormulationManagementSystems.VDSCSQL || (FormulationManagementSystems.VDSCSQL = {}));
})(FormulationManagementSystems || (FormulationManagementSystems = {}));
var FormulationManagementSystems;
(function (FormulationManagementSystems) {
    var VDSCSQL;
    (function (VDSCSQL) {
        var SrlCarrierForm = (function (_super) {
            __extends(SrlCarrierForm, _super);
            function SrlCarrierForm() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            return SrlCarrierForm;
        }(Serenity.PrefixedContext));
        SrlCarrierForm.formKey = 'VDSCSQL.SrlCarrier';
        VDSCSQL.SrlCarrierForm = SrlCarrierForm;
        [,
            ['CarrierName', function () { return Serenity.StringEditor; }]
        ].forEach(function (x) { return Object.defineProperty(SrlCarrierForm.prototype, x[0], {
            get: function () {
                return this.w(x[0], x[1]());
            },
            enumerable: true,
            configurable: true
        }); });
    })(VDSCSQL = FormulationManagementSystems.VDSCSQL || (FormulationManagementSystems.VDSCSQL = {}));
})(FormulationManagementSystems || (FormulationManagementSystems = {}));
var FormulationManagementSystems;
(function (FormulationManagementSystems) {
    var VDSCSQL;
    (function (VDSCSQL) {
        var SrlCarrierRow;
        (function (SrlCarrierRow) {
            SrlCarrierRow.idProperty = 'Id';
            SrlCarrierRow.nameProperty = 'CarrierName';
            SrlCarrierRow.localTextPrefix = 'VDSCSQL.SrlCarrier';
            var Fields;
            (function (Fields) {
            })(Fields = SrlCarrierRow.Fields || (SrlCarrierRow.Fields = {}));
            [
                'Id',
                'CarrierName'
            ].forEach(function (x) { return Fields[x] = x; });
        })(SrlCarrierRow = VDSCSQL.SrlCarrierRow || (VDSCSQL.SrlCarrierRow = {}));
    })(VDSCSQL = FormulationManagementSystems.VDSCSQL || (FormulationManagementSystems.VDSCSQL = {}));
})(FormulationManagementSystems || (FormulationManagementSystems = {}));
var FormulationManagementSystems;
(function (FormulationManagementSystems) {
    var VDSCSQL;
    (function (VDSCSQL) {
        var SrlCarrierService;
        (function (SrlCarrierService) {
            SrlCarrierService.baseUrl = 'VDSCSQL/SrlCarrier';
            var Methods;
            (function (Methods) {
            })(Methods = SrlCarrierService.Methods || (SrlCarrierService.Methods = {}));
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                SrlCarrierService[x] = function (r, s, o) {
                    return Q.serviceRequest(SrlCarrierService.baseUrl + '/' + x, r, s, o);
                };
                Methods[x] = SrlCarrierService.baseUrl + '/' + x;
            });
        })(SrlCarrierService = VDSCSQL.SrlCarrierService || (VDSCSQL.SrlCarrierService = {}));
    })(VDSCSQL = FormulationManagementSystems.VDSCSQL || (FormulationManagementSystems.VDSCSQL = {}));
})(FormulationManagementSystems || (FormulationManagementSystems = {}));
var FormulationManagementSystems;
(function (FormulationManagementSystems) {
    var VDSCSQL;
    (function (VDSCSQL) {
        var SrlMsdsForm = (function (_super) {
            __extends(SrlMsdsForm, _super);
            function SrlMsdsForm() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            return SrlMsdsForm;
        }(Serenity.PrefixedContext));
        SrlMsdsForm.formKey = 'VDSCSQL.SrlMsds';
        VDSCSQL.SrlMsdsForm = SrlMsdsForm;
        [,
            ['MaterialId', function () { return Serenity.IntegerEditor; }],
            ['StorageFile', function () { return Serenity.StringEditor; }]
        ].forEach(function (x) { return Object.defineProperty(SrlMsdsForm.prototype, x[0], {
            get: function () {
                return this.w(x[0], x[1]());
            },
            enumerable: true,
            configurable: true
        }); });
    })(VDSCSQL = FormulationManagementSystems.VDSCSQL || (FormulationManagementSystems.VDSCSQL = {}));
})(FormulationManagementSystems || (FormulationManagementSystems = {}));
var FormulationManagementSystems;
(function (FormulationManagementSystems) {
    var VDSCSQL;
    (function (VDSCSQL) {
        var SrlMsdsRow;
        (function (SrlMsdsRow) {
            SrlMsdsRow.idProperty = 'Id';
            SrlMsdsRow.localTextPrefix = 'VDSCSQL.SrlMsds';
            var Fields;
            (function (Fields) {
            })(Fields = SrlMsdsRow.Fields || (SrlMsdsRow.Fields = {}));
            [
                'Id',
                'MaterialId',
                'StorageFile'
            ].forEach(function (x) { return Fields[x] = x; });
        })(SrlMsdsRow = VDSCSQL.SrlMsdsRow || (VDSCSQL.SrlMsdsRow = {}));
    })(VDSCSQL = FormulationManagementSystems.VDSCSQL || (FormulationManagementSystems.VDSCSQL = {}));
})(FormulationManagementSystems || (FormulationManagementSystems = {}));
var FormulationManagementSystems;
(function (FormulationManagementSystems) {
    var VDSCSQL;
    (function (VDSCSQL) {
        var SrlMsdsService;
        (function (SrlMsdsService) {
            SrlMsdsService.baseUrl = 'VDSCSQL/SrlMsds';
            var Methods;
            (function (Methods) {
            })(Methods = SrlMsdsService.Methods || (SrlMsdsService.Methods = {}));
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                SrlMsdsService[x] = function (r, s, o) {
                    return Q.serviceRequest(SrlMsdsService.baseUrl + '/' + x, r, s, o);
                };
                Methods[x] = SrlMsdsService.baseUrl + '/' + x;
            });
        })(SrlMsdsService = VDSCSQL.SrlMsdsService || (VDSCSQL.SrlMsdsService = {}));
    })(VDSCSQL = FormulationManagementSystems.VDSCSQL || (FormulationManagementSystems.VDSCSQL = {}));
})(FormulationManagementSystems || (FormulationManagementSystems = {}));
var FormulationManagementSystems;
(function (FormulationManagementSystems) {
    var VDSCSQL;
    (function (VDSCSQL) {
        var StepInstructionForm = (function (_super) {
            __extends(StepInstructionForm, _super);
            function StepInstructionForm() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            return StepInstructionForm;
        }(Serenity.PrefixedContext));
        StepInstructionForm.formKey = 'VDSCSQL.StepInstruction';
        VDSCSQL.StepInstructionForm = StepInstructionForm;
        [,
            ['ConsumptionId', function () { return Serenity.IntegerEditor; }],
            ['StepInstructionTypeId', function () { return Serenity.IntegerEditor; }],
            ['Index', function () { return Serenity.IntegerEditor; }],
            ['Instruct1', function () { return Serenity.StringEditor; }],
            ['Hint1', function () { return Serenity.StringEditor; }],
            ['ScanValue1', function () { return Serenity.StringEditor; }],
            ['ErrorMsg1', function () { return Serenity.StringEditor; }]
        ].forEach(function (x) { return Object.defineProperty(StepInstructionForm.prototype, x[0], {
            get: function () {
                return this.w(x[0], x[1]());
            },
            enumerable: true,
            configurable: true
        }); });
    })(VDSCSQL = FormulationManagementSystems.VDSCSQL || (FormulationManagementSystems.VDSCSQL = {}));
})(FormulationManagementSystems || (FormulationManagementSystems = {}));
var FormulationManagementSystems;
(function (FormulationManagementSystems) {
    var VDSCSQL;
    (function (VDSCSQL) {
        var StepInstructionRow;
        (function (StepInstructionRow) {
            StepInstructionRow.idProperty = 'Id';
            StepInstructionRow.nameProperty = 'Instruct1';
            StepInstructionRow.localTextPrefix = 'VDSCSQL.StepInstruction';
            var Fields;
            (function (Fields) {
            })(Fields = StepInstructionRow.Fields || (StepInstructionRow.Fields = {}));
            [
                'Id',
                'ConsumptionId',
                'StepInstructionTypeId',
                'Index',
                'Instruct1',
                'Hint1',
                'ScanValue1',
                'ErrorMsg1',
                'ConsumptionRecipePhaseId',
                'ConsumptionIngredientNumber',
                'ConsumptionIngredientMaterialId',
                'ConsumptionPercentage',
                'ConsumptionOptionalIngredient',
                'ConsumptionSrcDstPathIds',
                'ConsumptionTimeExpectation',
                'ConsumptionOpPrcHighLmt',
                'ConsumptionOpPrcLwLmt',
                'ConsumptionTlPrcHighLmt',
                'ConsumptionTlPrcLwLmt',
                'ConsumptionStepDescription',
                'ConsumptionHTemp1',
                'ConsumptionLTemp1',
                'ConsumptionAmPrcHighLmt',
                'ConsumptionAmPrcLwLmt',
                'StepInstructionTypeStepInstructionName'
            ].forEach(function (x) { return Fields[x] = x; });
        })(StepInstructionRow = VDSCSQL.StepInstructionRow || (VDSCSQL.StepInstructionRow = {}));
    })(VDSCSQL = FormulationManagementSystems.VDSCSQL || (FormulationManagementSystems.VDSCSQL = {}));
})(FormulationManagementSystems || (FormulationManagementSystems = {}));
var FormulationManagementSystems;
(function (FormulationManagementSystems) {
    var VDSCSQL;
    (function (VDSCSQL) {
        var StepInstructionService;
        (function (StepInstructionService) {
            StepInstructionService.baseUrl = 'VDSCSQL/StepInstruction';
            var Methods;
            (function (Methods) {
            })(Methods = StepInstructionService.Methods || (StepInstructionService.Methods = {}));
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                StepInstructionService[x] = function (r, s, o) {
                    return Q.serviceRequest(StepInstructionService.baseUrl + '/' + x, r, s, o);
                };
                Methods[x] = StepInstructionService.baseUrl + '/' + x;
            });
        })(StepInstructionService = VDSCSQL.StepInstructionService || (VDSCSQL.StepInstructionService = {}));
    })(VDSCSQL = FormulationManagementSystems.VDSCSQL || (FormulationManagementSystems.VDSCSQL = {}));
})(FormulationManagementSystems || (FormulationManagementSystems = {}));
var FormulationManagementSystems;
(function (FormulationManagementSystems) {
    var VDSCSQL;
    (function (VDSCSQL) {
        var StepInstructionTypeForm = (function (_super) {
            __extends(StepInstructionTypeForm, _super);
            function StepInstructionTypeForm() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            return StepInstructionTypeForm;
        }(Serenity.PrefixedContext));
        StepInstructionTypeForm.formKey = 'VDSCSQL.StepInstructionType';
        VDSCSQL.StepInstructionTypeForm = StepInstructionTypeForm;
        [,
            ['StepInstructionName', function () { return Serenity.StringEditor; }]
        ].forEach(function (x) { return Object.defineProperty(StepInstructionTypeForm.prototype, x[0], {
            get: function () {
                return this.w(x[0], x[1]());
            },
            enumerable: true,
            configurable: true
        }); });
    })(VDSCSQL = FormulationManagementSystems.VDSCSQL || (FormulationManagementSystems.VDSCSQL = {}));
})(FormulationManagementSystems || (FormulationManagementSystems = {}));
var FormulationManagementSystems;
(function (FormulationManagementSystems) {
    var VDSCSQL;
    (function (VDSCSQL) {
        var StepInstructionTypeRow;
        (function (StepInstructionTypeRow) {
            StepInstructionTypeRow.idProperty = 'Id';
            StepInstructionTypeRow.nameProperty = 'StepInstructionName';
            StepInstructionTypeRow.localTextPrefix = 'VDSCSQL.StepInstructionType';
            var Fields;
            (function (Fields) {
            })(Fields = StepInstructionTypeRow.Fields || (StepInstructionTypeRow.Fields = {}));
            [
                'Id',
                'StepInstructionName'
            ].forEach(function (x) { return Fields[x] = x; });
        })(StepInstructionTypeRow = VDSCSQL.StepInstructionTypeRow || (VDSCSQL.StepInstructionTypeRow = {}));
    })(VDSCSQL = FormulationManagementSystems.VDSCSQL || (FormulationManagementSystems.VDSCSQL = {}));
})(FormulationManagementSystems || (FormulationManagementSystems = {}));
var FormulationManagementSystems;
(function (FormulationManagementSystems) {
    var VDSCSQL;
    (function (VDSCSQL) {
        var StepInstructionTypeService;
        (function (StepInstructionTypeService) {
            StepInstructionTypeService.baseUrl = 'VDSCSQL/StepInstructionType';
            var Methods;
            (function (Methods) {
            })(Methods = StepInstructionTypeService.Methods || (StepInstructionTypeService.Methods = {}));
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                StepInstructionTypeService[x] = function (r, s, o) {
                    return Q.serviceRequest(StepInstructionTypeService.baseUrl + '/' + x, r, s, o);
                };
                Methods[x] = StepInstructionTypeService.baseUrl + '/' + x;
            });
        })(StepInstructionTypeService = VDSCSQL.StepInstructionTypeService || (VDSCSQL.StepInstructionTypeService = {}));
    })(VDSCSQL = FormulationManagementSystems.VDSCSQL || (FormulationManagementSystems.VDSCSQL = {}));
})(FormulationManagementSystems || (FormulationManagementSystems = {}));
var FormulationManagementSystems;
(function (FormulationManagementSystems) {
    var VDSCSQL;
    (function (VDSCSQL) {
        var StepValueEntriesForm = (function (_super) {
            __extends(StepValueEntriesForm, _super);
            function StepValueEntriesForm() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            return StepValueEntriesForm;
        }(Serenity.PrefixedContext));
        StepValueEntriesForm.formKey = 'VDSCSQL.StepValueEntries';
        VDSCSQL.StepValueEntriesForm = StepValueEntriesForm;
        [,
            ['Description', function () { return Serenity.StringEditor; }],
            ['RecipePhaseId', function () { return Serenity.IntegerEditor; }]
        ].forEach(function (x) { return Object.defineProperty(StepValueEntriesForm.prototype, x[0], {
            get: function () {
                return this.w(x[0], x[1]());
            },
            enumerable: true,
            configurable: true
        }); });
    })(VDSCSQL = FormulationManagementSystems.VDSCSQL || (FormulationManagementSystems.VDSCSQL = {}));
})(FormulationManagementSystems || (FormulationManagementSystems = {}));
var FormulationManagementSystems;
(function (FormulationManagementSystems) {
    var VDSCSQL;
    (function (VDSCSQL) {
        var StepValueEntriesRow;
        (function (StepValueEntriesRow) {
            StepValueEntriesRow.idProperty = 'Id';
            StepValueEntriesRow.nameProperty = 'Description';
            StepValueEntriesRow.localTextPrefix = 'VDSCSQL.StepValueEntries';
            var Fields;
            (function (Fields) {
            })(Fields = StepValueEntriesRow.Fields || (StepValueEntriesRow.Fields = {}));
            [
                'Id',
                'Description',
                'RecipePhaseId'
            ].forEach(function (x) { return Fields[x] = x; });
        })(StepValueEntriesRow = VDSCSQL.StepValueEntriesRow || (VDSCSQL.StepValueEntriesRow = {}));
    })(VDSCSQL = FormulationManagementSystems.VDSCSQL || (FormulationManagementSystems.VDSCSQL = {}));
})(FormulationManagementSystems || (FormulationManagementSystems = {}));
var FormulationManagementSystems;
(function (FormulationManagementSystems) {
    var VDSCSQL;
    (function (VDSCSQL) {
        var StepValueEntriesService;
        (function (StepValueEntriesService) {
            StepValueEntriesService.baseUrl = 'VDSCSQL/StepValueEntries';
            var Methods;
            (function (Methods) {
            })(Methods = StepValueEntriesService.Methods || (StepValueEntriesService.Methods = {}));
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                StepValueEntriesService[x] = function (r, s, o) {
                    return Q.serviceRequest(StepValueEntriesService.baseUrl + '/' + x, r, s, o);
                };
                Methods[x] = StepValueEntriesService.baseUrl + '/' + x;
            });
        })(StepValueEntriesService = VDSCSQL.StepValueEntriesService || (VDSCSQL.StepValueEntriesService = {}));
    })(VDSCSQL = FormulationManagementSystems.VDSCSQL || (FormulationManagementSystems.VDSCSQL = {}));
})(FormulationManagementSystems || (FormulationManagementSystems = {}));
var FormulationManagementSystems;
(function (FormulationManagementSystems) {
    var VDSCSQL;
    (function (VDSCSQL) {
        var ValueEntriesDataForm = (function (_super) {
            __extends(ValueEntriesDataForm, _super);
            function ValueEntriesDataForm() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            return ValueEntriesDataForm;
        }(Serenity.PrefixedContext));
        ValueEntriesDataForm.formKey = 'VDSCSQL.ValueEntriesData';
        VDSCSQL.ValueEntriesDataForm = ValueEntriesDataForm;
        [,
            ['BulkBatchDataId', function () { return Serenity.IntegerEditor; }],
            ['StepValueEntriesId', function () { return Serenity.IntegerEditor; }],
            ['UserInput', function () { return Serenity.StringEditor; }]
        ].forEach(function (x) { return Object.defineProperty(ValueEntriesDataForm.prototype, x[0], {
            get: function () {
                return this.w(x[0], x[1]());
            },
            enumerable: true,
            configurable: true
        }); });
    })(VDSCSQL = FormulationManagementSystems.VDSCSQL || (FormulationManagementSystems.VDSCSQL = {}));
})(FormulationManagementSystems || (FormulationManagementSystems = {}));
var FormulationManagementSystems;
(function (FormulationManagementSystems) {
    var VDSCSQL;
    (function (VDSCSQL) {
        var ValueEntriesDataRow;
        (function (ValueEntriesDataRow) {
            ValueEntriesDataRow.idProperty = 'Id';
            ValueEntriesDataRow.nameProperty = 'UserInput';
            ValueEntriesDataRow.localTextPrefix = 'VDSCSQL.ValueEntriesData';
            var Fields;
            (function (Fields) {
            })(Fields = ValueEntriesDataRow.Fields || (ValueEntriesDataRow.Fields = {}));
            [
                'Id',
                'BulkBatchDataId',
                'StepValueEntriesId',
                'UserInput',
                'BulkBatchDataBulkBatchId',
                'BulkBatchDataSourceTank',
                'BulkBatchDataDestinationTank',
                'BulkBatchDataIngredient',
                'BulkBatchDataIngredientNumber',
                'BulkBatchDataPhase',
                'BulkBatchDataPhaseNumber',
                'BulkBatchDataStartTime',
                'BulkBatchDataEndTime',
                'BulkBatchDataOperator',
                'BulkBatchDataSupervisorOverride',
                'BulkBatchDataAdditionQty',
                'BulkBatchDataStatus',
                'BulkBatchDataScaleCheckOperator',
                'BulkBatchDataScaleCheckWt',
                'BulkBatchDataScaleId',
                'BulkBatchDataValvesOpen',
                'BulkBatchDataValveOpenBypass',
                'BulkBatchDataValvesClose',
                'BulkBatchDataValveCloseBypass',
                'BulkBatchDataRecipePhaseId',
                'BulkBatchDataCurrentStepIndex',
                'BulkBatchDataOperatorId',
                'BulkBatchDataSupervisorOverrideId',
                'BulkBatchDataSrcStartWt',
                'BulkBatchDataDstStartWt',
                'BulkBatchDataSrcEndWt',
                'BulkBatchDataDstEndWt',
                'BulkBatchDataPhaseTankRemembered',
                'StepValueEntriesDescription',
                'StepValueEntriesRecipePhaseId'
            ].forEach(function (x) { return Fields[x] = x; });
        })(ValueEntriesDataRow = VDSCSQL.ValueEntriesDataRow || (VDSCSQL.ValueEntriesDataRow = {}));
    })(VDSCSQL = FormulationManagementSystems.VDSCSQL || (FormulationManagementSystems.VDSCSQL = {}));
})(FormulationManagementSystems || (FormulationManagementSystems = {}));
var FormulationManagementSystems;
(function (FormulationManagementSystems) {
    var VDSCSQL;
    (function (VDSCSQL) {
        var ValueEntriesDataService;
        (function (ValueEntriesDataService) {
            ValueEntriesDataService.baseUrl = 'VDSCSQL/ValueEntriesData';
            var Methods;
            (function (Methods) {
            })(Methods = ValueEntriesDataService.Methods || (ValueEntriesDataService.Methods = {}));
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                ValueEntriesDataService[x] = function (r, s, o) {
                    return Q.serviceRequest(ValueEntriesDataService.baseUrl + '/' + x, r, s, o);
                };
                Methods[x] = ValueEntriesDataService.baseUrl + '/' + x;
            });
        })(ValueEntriesDataService = VDSCSQL.ValueEntriesDataService || (VDSCSQL.ValueEntriesDataService = {}));
    })(VDSCSQL = FormulationManagementSystems.VDSCSQL || (FormulationManagementSystems.VDSCSQL = {}));
})(FormulationManagementSystems || (FormulationManagementSystems = {}));
var FormulationManagementSystems;
(function (FormulationManagementSystems) {
    var VDSCSQL;
    (function (VDSCSQL) {
        var ValveListForm = (function (_super) {
            __extends(ValveListForm, _super);
            function ValveListForm() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            return ValveListForm;
        }(Serenity.PrefixedContext));
        ValveListForm.formKey = 'VDSCSQL.ValveList';
        VDSCSQL.ValveListForm = ValveListForm;
        [,
            ['ValveName', function () { return Serenity.StringEditor; }],
            ['ValveBarcode', function () { return Serenity.StringEditor; }],
            ['ValveDescription', function () { return Serenity.StringEditor; }],
            ['Bldg', function () { return Serenity.IntegerEditor; }]
        ].forEach(function (x) { return Object.defineProperty(ValveListForm.prototype, x[0], {
            get: function () {
                return this.w(x[0], x[1]());
            },
            enumerable: true,
            configurable: true
        }); });
    })(VDSCSQL = FormulationManagementSystems.VDSCSQL || (FormulationManagementSystems.VDSCSQL = {}));
})(FormulationManagementSystems || (FormulationManagementSystems = {}));
var FormulationManagementSystems;
(function (FormulationManagementSystems) {
    var VDSCSQL;
    (function (VDSCSQL) {
        var ValveListRow;
        (function (ValveListRow) {
            ValveListRow.idProperty = 'Id';
            ValveListRow.nameProperty = 'ValveName';
            ValveListRow.localTextPrefix = 'VDSCSQL.ValveList';
            var Fields;
            (function (Fields) {
            })(Fields = ValveListRow.Fields || (ValveListRow.Fields = {}));
            [
                'Id',
                'ValveName',
                'ValveBarcode',
                'ValveDescription',
                'Bldg'
            ].forEach(function (x) { return Fields[x] = x; });
        })(ValveListRow = VDSCSQL.ValveListRow || (VDSCSQL.ValveListRow = {}));
    })(VDSCSQL = FormulationManagementSystems.VDSCSQL || (FormulationManagementSystems.VDSCSQL = {}));
})(FormulationManagementSystems || (FormulationManagementSystems = {}));
var FormulationManagementSystems;
(function (FormulationManagementSystems) {
    var VDSCSQL;
    (function (VDSCSQL) {
        var ValveListService;
        (function (ValveListService) {
            ValveListService.baseUrl = 'VDSCSQL/ValveList';
            var Methods;
            (function (Methods) {
            })(Methods = ValveListService.Methods || (ValveListService.Methods = {}));
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                ValveListService[x] = function (r, s, o) {
                    return Q.serviceRequest(ValveListService.baseUrl + '/' + x, r, s, o);
                };
                Methods[x] = ValveListService.baseUrl + '/' + x;
            });
        })(ValveListService = VDSCSQL.ValveListService || (VDSCSQL.ValveListService = {}));
    })(VDSCSQL = FormulationManagementSystems.VDSCSQL || (FormulationManagementSystems.VDSCSQL = {}));
})(FormulationManagementSystems || (FormulationManagementSystems = {}));
var FormulationManagementSystems;
(function (FormulationManagementSystems) {
    var VDSCSQL;
    (function (VDSCSQL) {
        var ValvePositionMapForm = (function (_super) {
            __extends(ValvePositionMapForm, _super);
            function ValvePositionMapForm() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            return ValvePositionMapForm;
        }(Serenity.PrefixedContext));
        ValvePositionMapForm.formKey = 'VDSCSQL.ValvePositionMap';
        VDSCSQL.ValvePositionMapForm = ValvePositionMapForm;
        [,
            ['SrcDstPathId', function () { return Serenity.IntegerEditor; }],
            ['ValveListId', function () { return Serenity.IntegerEditor; }],
            ['ValveOrderNumber', function () { return Serenity.IntegerEditor; }],
            ['ValvePosition', function () { return Serenity.StringEditor; }]
        ].forEach(function (x) { return Object.defineProperty(ValvePositionMapForm.prototype, x[0], {
            get: function () {
                return this.w(x[0], x[1]());
            },
            enumerable: true,
            configurable: true
        }); });
    })(VDSCSQL = FormulationManagementSystems.VDSCSQL || (FormulationManagementSystems.VDSCSQL = {}));
})(FormulationManagementSystems || (FormulationManagementSystems = {}));
var FormulationManagementSystems;
(function (FormulationManagementSystems) {
    var VDSCSQL;
    (function (VDSCSQL) {
        var ValvePositionMapRow;
        (function (ValvePositionMapRow) {
            ValvePositionMapRow.idProperty = 'Id';
            ValvePositionMapRow.nameProperty = 'ValvePosition';
            ValvePositionMapRow.localTextPrefix = 'VDSCSQL.ValvePositionMap';
            var Fields;
            (function (Fields) {
            })(Fields = ValvePositionMapRow.Fields || (ValvePositionMapRow.Fields = {}));
            [
                'Id',
                'SrcDstPathId',
                'ValveListId',
                'ValveOrderNumber',
                'ValvePosition',
                'SrcDstPathSrcTankId',
                'SrcDstPathSrcPath',
                'SrcDstPathDstTankId',
                'SrcDstPathDstPath',
                'SrcDstPathPathState',
                'ValveListValveName',
                'ValveListValveBarcode',
                'ValveListValveDescription',
                'ValveListBldg'
            ].forEach(function (x) { return Fields[x] = x; });
        })(ValvePositionMapRow = VDSCSQL.ValvePositionMapRow || (VDSCSQL.ValvePositionMapRow = {}));
    })(VDSCSQL = FormulationManagementSystems.VDSCSQL || (FormulationManagementSystems.VDSCSQL = {}));
})(FormulationManagementSystems || (FormulationManagementSystems = {}));
var FormulationManagementSystems;
(function (FormulationManagementSystems) {
    var VDSCSQL;
    (function (VDSCSQL) {
        var ValvePositionMapService;
        (function (ValvePositionMapService) {
            ValvePositionMapService.baseUrl = 'VDSCSQL/ValvePositionMap';
            var Methods;
            (function (Methods) {
            })(Methods = ValvePositionMapService.Methods || (ValvePositionMapService.Methods = {}));
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                ValvePositionMapService[x] = function (r, s, o) {
                    return Q.serviceRequest(ValvePositionMapService.baseUrl + '/' + x, r, s, o);
                };
                Methods[x] = ValvePositionMapService.baseUrl + '/' + x;
            });
        })(ValvePositionMapService = VDSCSQL.ValvePositionMapService || (VDSCSQL.ValvePositionMapService = {}));
    })(VDSCSQL = FormulationManagementSystems.VDSCSQL || (FormulationManagementSystems.VDSCSQL = {}));
})(FormulationManagementSystems || (FormulationManagementSystems = {}));
var FormulationManagementSystems;
(function (FormulationManagementSystems) {
    var VDSCSQL;
    (function (VDSCSQL) {
        var VdscAreaForm = (function (_super) {
            __extends(VdscAreaForm, _super);
            function VdscAreaForm() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            return VdscAreaForm;
        }(Serenity.PrefixedContext));
        VdscAreaForm.formKey = 'VDSCSQL.VdscArea';
        VDSCSQL.VdscAreaForm = VdscAreaForm;
        [,
            ['VdscAreaGroupId', function () { return Serenity.IntegerEditor; }],
            ['Area', function () { return Serenity.StringEditor; }],
            ['ListOrder', function () { return Serenity.IntegerEditor; }]
        ].forEach(function (x) { return Object.defineProperty(VdscAreaForm.prototype, x[0], {
            get: function () {
                return this.w(x[0], x[1]());
            },
            enumerable: true,
            configurable: true
        }); });
    })(VDSCSQL = FormulationManagementSystems.VDSCSQL || (FormulationManagementSystems.VDSCSQL = {}));
})(FormulationManagementSystems || (FormulationManagementSystems = {}));
var FormulationManagementSystems;
(function (FormulationManagementSystems) {
    var VDSCSQL;
    (function (VDSCSQL) {
        var VdscAreaGroupForm = (function (_super) {
            __extends(VdscAreaGroupForm, _super);
            function VdscAreaGroupForm() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            return VdscAreaGroupForm;
        }(Serenity.PrefixedContext));
        VdscAreaGroupForm.formKey = 'VDSCSQL.VdscAreaGroup';
        VDSCSQL.VdscAreaGroupForm = VdscAreaGroupForm;
        [,
            ['DepartmentId', function () { return Serenity.IntegerEditor; }],
            ['ListOrder', function () { return Serenity.IntegerEditor; }],
            ['ManagerId', function () { return Serenity.IntegerEditor; }]
        ].forEach(function (x) { return Object.defineProperty(VdscAreaGroupForm.prototype, x[0], {
            get: function () {
                return this.w(x[0], x[1]());
            },
            enumerable: true,
            configurable: true
        }); });
    })(VDSCSQL = FormulationManagementSystems.VDSCSQL || (FormulationManagementSystems.VDSCSQL = {}));
})(FormulationManagementSystems || (FormulationManagementSystems = {}));
var FormulationManagementSystems;
(function (FormulationManagementSystems) {
    var VDSCSQL;
    (function (VDSCSQL) {
        var VdscAreaGroupRow;
        (function (VdscAreaGroupRow) {
            VdscAreaGroupRow.idProperty = 'Id';
            VdscAreaGroupRow.localTextPrefix = 'VDSCSQL.VdscAreaGroup';
            var Fields;
            (function (Fields) {
            })(Fields = VdscAreaGroupRow.Fields || (VdscAreaGroupRow.Fields = {}));
            [
                'Id',
                'DepartmentId',
                'ListOrder',
                'ManagerId',
                'ManagerName'
            ].forEach(function (x) { return Fields[x] = x; });
        })(VdscAreaGroupRow = VDSCSQL.VdscAreaGroupRow || (VDSCSQL.VdscAreaGroupRow = {}));
    })(VDSCSQL = FormulationManagementSystems.VDSCSQL || (FormulationManagementSystems.VDSCSQL = {}));
})(FormulationManagementSystems || (FormulationManagementSystems = {}));
var FormulationManagementSystems;
(function (FormulationManagementSystems) {
    var VDSCSQL;
    (function (VDSCSQL) {
        var VdscAreaGroupService;
        (function (VdscAreaGroupService) {
            VdscAreaGroupService.baseUrl = 'VDSCSQL/VdscAreaGroup';
            var Methods;
            (function (Methods) {
            })(Methods = VdscAreaGroupService.Methods || (VdscAreaGroupService.Methods = {}));
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                VdscAreaGroupService[x] = function (r, s, o) {
                    return Q.serviceRequest(VdscAreaGroupService.baseUrl + '/' + x, r, s, o);
                };
                Methods[x] = VdscAreaGroupService.baseUrl + '/' + x;
            });
        })(VdscAreaGroupService = VDSCSQL.VdscAreaGroupService || (VDSCSQL.VdscAreaGroupService = {}));
    })(VDSCSQL = FormulationManagementSystems.VDSCSQL || (FormulationManagementSystems.VDSCSQL = {}));
})(FormulationManagementSystems || (FormulationManagementSystems = {}));
var FormulationManagementSystems;
(function (FormulationManagementSystems) {
    var VDSCSQL;
    (function (VDSCSQL) {
        var VdscAreaRow;
        (function (VdscAreaRow) {
            VdscAreaRow.idProperty = 'Id';
            VdscAreaRow.nameProperty = 'Area';
            VdscAreaRow.localTextPrefix = 'VDSCSQL.VdscArea';
            var Fields;
            (function (Fields) {
            })(Fields = VdscAreaRow.Fields || (VdscAreaRow.Fields = {}));
            [
                'Id',
                'VdscAreaGroupId',
                'Area',
                'ListOrder',
                'VdscAreaGroupDepartmentId',
                'VdscAreaGroupListOrder',
                'VdscAreaGroupManagerId'
            ].forEach(function (x) { return Fields[x] = x; });
        })(VdscAreaRow = VDSCSQL.VdscAreaRow || (VDSCSQL.VdscAreaRow = {}));
    })(VDSCSQL = FormulationManagementSystems.VDSCSQL || (FormulationManagementSystems.VDSCSQL = {}));
})(FormulationManagementSystems || (FormulationManagementSystems = {}));
var FormulationManagementSystems;
(function (FormulationManagementSystems) {
    var VDSCSQL;
    (function (VDSCSQL) {
        var VdscAreaService;
        (function (VdscAreaService) {
            VdscAreaService.baseUrl = 'VDSCSQL/VdscArea';
            var Methods;
            (function (Methods) {
            })(Methods = VdscAreaService.Methods || (VdscAreaService.Methods = {}));
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                VdscAreaService[x] = function (r, s, o) {
                    return Q.serviceRequest(VdscAreaService.baseUrl + '/' + x, r, s, o);
                };
                Methods[x] = VdscAreaService.baseUrl + '/' + x;
            });
        })(VdscAreaService = VDSCSQL.VdscAreaService || (VDSCSQL.VdscAreaService = {}));
    })(VDSCSQL = FormulationManagementSystems.VDSCSQL || (FormulationManagementSystems.VDSCSQL = {}));
})(FormulationManagementSystems || (FormulationManagementSystems = {}));
var FormulationManagementSystems;
(function (FormulationManagementSystems) {
    var VDSCSQL;
    (function (VDSCSQL) {
        var VdscDepartmentForm = (function (_super) {
            __extends(VdscDepartmentForm, _super);
            function VdscDepartmentForm() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            return VdscDepartmentForm;
        }(Serenity.PrefixedContext));
        VdscDepartmentForm.formKey = 'VDSCSQL.VdscDepartment';
        VDSCSQL.VdscDepartmentForm = VdscDepartmentForm;
        [,
            ['DepartmentStr', function () { return Serenity.StringEditor; }],
            ['DepartmentCd', function () { return Serenity.StringEditor; }]
        ].forEach(function (x) { return Object.defineProperty(VdscDepartmentForm.prototype, x[0], {
            get: function () {
                return this.w(x[0], x[1]());
            },
            enumerable: true,
            configurable: true
        }); });
    })(VDSCSQL = FormulationManagementSystems.VDSCSQL || (FormulationManagementSystems.VDSCSQL = {}));
})(FormulationManagementSystems || (FormulationManagementSystems = {}));
var FormulationManagementSystems;
(function (FormulationManagementSystems) {
    var VDSCSQL;
    (function (VDSCSQL) {
        var VdscDepartmentRow;
        (function (VdscDepartmentRow) {
            VdscDepartmentRow.idProperty = 'Id';
            VdscDepartmentRow.nameProperty = 'DepartmentStr';
            VdscDepartmentRow.localTextPrefix = 'VDSCSQL.VdscDepartment';
            var Fields;
            (function (Fields) {
            })(Fields = VdscDepartmentRow.Fields || (VdscDepartmentRow.Fields = {}));
            [
                'Id',
                'DepartmentStr',
                'DepartmentCd'
            ].forEach(function (x) { return Fields[x] = x; });
        })(VdscDepartmentRow = VDSCSQL.VdscDepartmentRow || (VDSCSQL.VdscDepartmentRow = {}));
    })(VDSCSQL = FormulationManagementSystems.VDSCSQL || (FormulationManagementSystems.VDSCSQL = {}));
})(FormulationManagementSystems || (FormulationManagementSystems = {}));
var FormulationManagementSystems;
(function (FormulationManagementSystems) {
    var VDSCSQL;
    (function (VDSCSQL) {
        var VdscDepartmentService;
        (function (VdscDepartmentService) {
            VdscDepartmentService.baseUrl = 'VDSCSQL/VdscDepartment';
            var Methods;
            (function (Methods) {
            })(Methods = VdscDepartmentService.Methods || (VdscDepartmentService.Methods = {}));
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                VdscDepartmentService[x] = function (r, s, o) {
                    return Q.serviceRequest(VdscDepartmentService.baseUrl + '/' + x, r, s, o);
                };
                Methods[x] = VdscDepartmentService.baseUrl + '/' + x;
            });
        })(VdscDepartmentService = VDSCSQL.VdscDepartmentService || (VDSCSQL.VdscDepartmentService = {}));
    })(VDSCSQL = FormulationManagementSystems.VDSCSQL || (FormulationManagementSystems.VDSCSQL = {}));
})(FormulationManagementSystems || (FormulationManagementSystems = {}));
var FormulationManagementSystems;
(function (FormulationManagementSystems) {
    var Administration;
    (function (Administration) {
        var LanguageDialog = (function (_super) {
            __extends(LanguageDialog, _super);
            function LanguageDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Administration.LanguageForm(_this.idPrefix);
                return _this;
            }
            LanguageDialog.prototype.getFormKey = function () { return Administration.LanguageForm.formKey; };
            LanguageDialog.prototype.getIdProperty = function () { return Administration.LanguageRow.idProperty; };
            LanguageDialog.prototype.getLocalTextPrefix = function () { return Administration.LanguageRow.localTextPrefix; };
            LanguageDialog.prototype.getNameProperty = function () { return Administration.LanguageRow.nameProperty; };
            LanguageDialog.prototype.getService = function () { return Administration.LanguageService.baseUrl; };
            return LanguageDialog;
        }(Serenity.EntityDialog));
        LanguageDialog = __decorate([
            Serenity.Decorators.registerClass()
        ], LanguageDialog);
        Administration.LanguageDialog = LanguageDialog;
    })(Administration = FormulationManagementSystems.Administration || (FormulationManagementSystems.Administration = {}));
})(FormulationManagementSystems || (FormulationManagementSystems = {}));
var FormulationManagementSystems;
(function (FormulationManagementSystems) {
    var Administration;
    (function (Administration) {
        var LanguageGrid = (function (_super) {
            __extends(LanguageGrid, _super);
            function LanguageGrid(container) {
                return _super.call(this, container) || this;
            }
            LanguageGrid.prototype.getColumnsKey = function () { return "Administration.Language"; };
            LanguageGrid.prototype.getDialogType = function () { return Administration.LanguageDialog; };
            LanguageGrid.prototype.getIdProperty = function () { return Administration.LanguageRow.idProperty; };
            LanguageGrid.prototype.getLocalTextPrefix = function () { return Administration.LanguageRow.localTextPrefix; };
            LanguageGrid.prototype.getService = function () { return Administration.LanguageService.baseUrl; };
            LanguageGrid.prototype.getDefaultSortBy = function () {
                return [Administration.LanguageRow.Fields.LanguageName];
            };
            return LanguageGrid;
        }(Serenity.EntityGrid));
        LanguageGrid = __decorate([
            Serenity.Decorators.registerClass()
        ], LanguageGrid);
        Administration.LanguageGrid = LanguageGrid;
    })(Administration = FormulationManagementSystems.Administration || (FormulationManagementSystems.Administration = {}));
})(FormulationManagementSystems || (FormulationManagementSystems = {}));
var FormulationManagementSystems;
(function (FormulationManagementSystems) {
    var Administration;
    (function (Administration) {
        var RoleDialog = (function (_super) {
            __extends(RoleDialog, _super);
            function RoleDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Administration.RoleForm(_this.idPrefix);
                return _this;
            }
            RoleDialog.prototype.getFormKey = function () { return Administration.RoleForm.formKey; };
            RoleDialog.prototype.getIdProperty = function () { return Administration.RoleRow.idProperty; };
            RoleDialog.prototype.getLocalTextPrefix = function () { return Administration.RoleRow.localTextPrefix; };
            RoleDialog.prototype.getNameProperty = function () { return Administration.RoleRow.nameProperty; };
            RoleDialog.prototype.getService = function () { return Administration.RoleService.baseUrl; };
            RoleDialog.prototype.getToolbarButtons = function () {
                var _this = this;
                var buttons = _super.prototype.getToolbarButtons.call(this);
                buttons.push({
                    title: Q.text('Site.RolePermissionDialog.EditButton'),
                    cssClass: 'edit-permissions-button',
                    icon: 'fa-lock text-green',
                    onClick: function () {
                        new Administration.RolePermissionDialog({
                            roleID: _this.entity.RoleId,
                            title: _this.entity.RoleName
                        }).dialogOpen();
                    }
                });
                return buttons;
            };
            RoleDialog.prototype.updateInterface = function () {
                _super.prototype.updateInterface.call(this);
                this.toolbar.findButton("edit-permissions-button").toggleClass("disabled", this.isNewOrDeleted());
            };
            return RoleDialog;
        }(Serenity.EntityDialog));
        RoleDialog = __decorate([
            Serenity.Decorators.registerClass()
        ], RoleDialog);
        Administration.RoleDialog = RoleDialog;
    })(Administration = FormulationManagementSystems.Administration || (FormulationManagementSystems.Administration = {}));
})(FormulationManagementSystems || (FormulationManagementSystems = {}));
var FormulationManagementSystems;
(function (FormulationManagementSystems) {
    var Administration;
    (function (Administration) {
        var RoleGrid = (function (_super) {
            __extends(RoleGrid, _super);
            function RoleGrid(container) {
                return _super.call(this, container) || this;
            }
            RoleGrid.prototype.getColumnsKey = function () { return "Administration.Role"; };
            RoleGrid.prototype.getDialogType = function () { return Administration.RoleDialog; };
            RoleGrid.prototype.getIdProperty = function () { return Administration.RoleRow.idProperty; };
            RoleGrid.prototype.getLocalTextPrefix = function () { return Administration.RoleRow.localTextPrefix; };
            RoleGrid.prototype.getService = function () { return Administration.RoleService.baseUrl; };
            RoleGrid.prototype.getDefaultSortBy = function () {
                return [Administration.RoleRow.Fields.RoleName];
            };
            return RoleGrid;
        }(Serenity.EntityGrid));
        RoleGrid = __decorate([
            Serenity.Decorators.registerClass()
        ], RoleGrid);
        Administration.RoleGrid = RoleGrid;
    })(Administration = FormulationManagementSystems.Administration || (FormulationManagementSystems.Administration = {}));
})(FormulationManagementSystems || (FormulationManagementSystems = {}));
var FormulationManagementSystems;
(function (FormulationManagementSystems) {
    var Administration;
    (function (Administration) {
        var RolePermissionDialog = (function (_super) {
            __extends(RolePermissionDialog, _super);
            function RolePermissionDialog(opt) {
                var _this = _super.call(this, opt) || this;
                _this.permissions = new Administration.PermissionCheckEditor(_this.byId('Permissions'), {
                    showRevoke: false
                });
                Administration.RolePermissionService.List({
                    RoleID: _this.options.roleID,
                    Module: null,
                    Submodule: null
                }, function (response) {
                    _this.permissions.value = response.Entities.map(function (x) { return ({ PermissionKey: x }); });
                });
                _this.permissions.implicitPermissions = Q.getRemoteData('Administration.ImplicitPermissions');
                return _this;
            }
            RolePermissionDialog.prototype.getDialogOptions = function () {
                var _this = this;
                var opt = _super.prototype.getDialogOptions.call(this);
                opt.buttons = [
                    {
                        text: Q.text('Dialogs.OkButton'),
                        click: function (e) {
                            Administration.RolePermissionService.Update({
                                RoleID: _this.options.roleID,
                                Permissions: _this.permissions.value.map(function (x) { return x.PermissionKey; }),
                                Module: null,
                                Submodule: null
                            }, function (response) {
                                _this.dialogClose();
                                window.setTimeout(function () { return Q.notifySuccess(Q.text('Site.RolePermissionDialog.SaveSuccess')); }, 0);
                            });
                        }
                    }, {
                        text: Q.text('Dialogs.CancelButton'),
                        click: function () { return _this.dialogClose(); }
                    }
                ];
                opt.title = Q.format(Q.text('Site.RolePermissionDialog.DialogTitle'), this.options.title);
                return opt;
            };
            RolePermissionDialog.prototype.getTemplate = function () {
                return '<div id="~_Permissions"></div>';
            };
            return RolePermissionDialog;
        }(Serenity.TemplatedDialog));
        RolePermissionDialog = __decorate([
            Serenity.Decorators.registerClass()
        ], RolePermissionDialog);
        Administration.RolePermissionDialog = RolePermissionDialog;
    })(Administration = FormulationManagementSystems.Administration || (FormulationManagementSystems.Administration = {}));
})(FormulationManagementSystems || (FormulationManagementSystems = {}));
var FormulationManagementSystems;
(function (FormulationManagementSystems) {
    var Administration;
    (function (Administration) {
        var TranslationGrid = (function (_super) {
            __extends(TranslationGrid, _super);
            function TranslationGrid(container) {
                var _this = _super.call(this, container) || this;
                _this.element.on('keyup.' + _this.uniqueName + ' change.' + _this.uniqueName, 'input.custom-text', function (e) {
                    var value = Q.trimToNull($(e.target).val());
                    if (value === '') {
                        value = null;
                    }
                    _this.view.getItemById($(e.target).data('key')).CustomText = value;
                    _this.hasChanges = true;
                });
                return _this;
            }
            TranslationGrid.prototype.getIdProperty = function () { return "Key"; };
            TranslationGrid.prototype.getLocalTextPrefix = function () { return "Administration.Translation"; };
            TranslationGrid.prototype.getService = function () { return Administration.TranslationService.baseUrl; };
            TranslationGrid.prototype.onClick = function (e, row, cell) {
                var _this = this;
                _super.prototype.onClick.call(this, e, row, cell);
                if (e.isDefaultPrevented()) {
                    return;
                }
                var item = this.itemAt(row);
                var done;
                if ($(e.target).hasClass('source-text')) {
                    e.preventDefault();
                    done = function () {
                        item.CustomText = item.SourceText;
                        _this.view.updateItem(item.Key, item);
                        _this.hasChanges = true;
                    };
                    if (Q.isTrimmedEmpty(item.CustomText) ||
                        (Q.trimToEmpty(item.CustomText) === Q.trimToEmpty(item.SourceText))) {
                        done();
                        return;
                    }
                    Q.confirm(Q.text('Db.Administration.Translation.OverrideConfirmation'), done);
                    return;
                }
                if ($(e.target).hasClass('target-text')) {
                    e.preventDefault();
                    done = function () {
                        item.CustomText = item.TargetText;
                        _this.view.updateItem(item.Key, item);
                        _this.hasChanges = true;
                    };
                    if (Q.isTrimmedEmpty(item.CustomText) ||
                        (Q.trimToEmpty(item.CustomText) === Q.trimToEmpty(item.TargetText))) {
                        done();
                        return;
                    }
                    Q.confirm(Q.text('Db.Administration.Translation.OverrideConfirmation'), done);
                    return;
                }
            };
            TranslationGrid.prototype.getColumns = function () {
                var columns = [];
                columns.push({ field: 'Key', width: 300, sortable: false });
                columns.push({
                    field: 'SourceText',
                    width: 300,
                    sortable: false,
                    format: function (ctx) {
                        return Q.outerHtml($('<a/>')
                            .addClass('source-text')
                            .text(ctx.value || ''));
                    }
                });
                columns.push({
                    field: 'CustomText',
                    width: 300,
                    sortable: false,
                    format: function (ctx) { return Q.outerHtml($('<input/>')
                        .addClass('custom-text')
                        .attr('value', ctx.value)
                        .attr('type', 'text')
                        .attr('data-key', ctx.item.Key)); }
                });
                columns.push({
                    field: 'TargetText',
                    width: 300,
                    sortable: false,
                    format: function (ctx) { return Q.outerHtml($('<a/>')
                        .addClass('target-text')
                        .text(ctx.value || '')); }
                });
                return columns;
            };
            TranslationGrid.prototype.createToolbarExtensions = function () {
                var _this = this;
                _super.prototype.createToolbarExtensions.call(this);
                var opt = {
                    lookupKey: 'Administration.Language'
                };
                this.sourceLanguage = Serenity.Widget.create({
                    type: Serenity.LookupEditor,
                    element: function (el) { return el.appendTo(_this.toolbar.element).attr('placeholder', '--- ' +
                        Q.text('Db.Administration.Translation.SourceLanguage') + ' ---'); },
                    options: opt
                });
                this.sourceLanguage.changeSelect2(function (e) {
                    if (_this.hasChanges) {
                        _this.saveChanges(_this.targetLanguageKey).then(function () { return _this.refresh(); });
                    }
                    else {
                        _this.refresh();
                    }
                });
                this.targetLanguage = Serenity.Widget.create({
                    type: Serenity.LookupEditor,
                    element: function (el) { return el.appendTo(_this.toolbar.element).attr('placeholder', '--- ' +
                        Q.text('Db.Administration.Translation.TargetLanguage') + ' ---'); },
                    options: opt
                });
                this.targetLanguage.changeSelect2(function (e) {
                    if (_this.hasChanges) {
                        _this.saveChanges(_this.targetLanguageKey).then(function () { return _this.refresh(); });
                    }
                    else {
                        _this.refresh();
                    }
                });
            };
            TranslationGrid.prototype.saveChanges = function (language) {
                var _this = this;
                var translations = {};
                for (var _i = 0, _a = this.getItems(); _i < _a.length; _i++) {
                    var item = _a[_i];
                    translations[item.Key] = item.CustomText;
                }
                return Promise.resolve(Administration.TranslationService.Update({
                    TargetLanguageID: language,
                    Translations: translations
                })).then(function () {
                    _this.hasChanges = false;
                    language = Q.trimToNull(language) || 'invariant';
                    Q.notifySuccess('User translations in "' + language +
                        '" language are saved to "user.texts.' +
                        language + '.json" ' + 'file under "~/App_Data/texts/"', '');
                });
            };
            TranslationGrid.prototype.onViewSubmit = function () {
                var request = this.view.params;
                request.SourceLanguageID = this.sourceLanguage.value;
                this.targetLanguageKey = this.targetLanguage.value || '';
                request.TargetLanguageID = this.targetLanguageKey;
                this.hasChanges = false;
                return _super.prototype.onViewSubmit.call(this);
            };
            TranslationGrid.prototype.getButtons = function () {
                var _this = this;
                return [{
                        title: Q.text('Db.Administration.Translation.SaveChangesButton'),
                        onClick: function (e) { return _this.saveChanges(_this.targetLanguageKey).then(function () { return _this.refresh(); }); },
                        cssClass: 'apply-changes-button'
                    }];
            };
            TranslationGrid.prototype.createQuickSearchInput = function () {
                var _this = this;
                Serenity.GridUtils.addQuickSearchInputCustom(this.toolbar.element, function (field, searchText) {
                    _this.searchText = searchText;
                    _this.view.setItems(_this.view.getItems(), true);
                });
            };
            TranslationGrid.prototype.onViewFilter = function (item) {
                if (!_super.prototype.onViewFilter.call(this, item)) {
                    return false;
                }
                if (!this.searchText) {
                    return true;
                }
                var sd = Select2.util.stripDiacritics;
                var searching = sd(this.searchText).toLowerCase();
                function match(str) {
                    if (!str)
                        return false;
                    return str.toLowerCase().indexOf(searching) >= 0;
                }
                return Q.isEmptyOrNull(searching) || match(item.Key) || match(item.SourceText) ||
                    match(item.TargetText) || match(item.CustomText);
            };
            TranslationGrid.prototype.usePager = function () {
                return false;
            };
            return TranslationGrid;
        }(Serenity.EntityGrid));
        TranslationGrid = __decorate([
            Serenity.Decorators.registerClass()
        ], TranslationGrid);
        Administration.TranslationGrid = TranslationGrid;
    })(Administration = FormulationManagementSystems.Administration || (FormulationManagementSystems.Administration = {}));
})(FormulationManagementSystems || (FormulationManagementSystems = {}));
var FormulationManagementSystems;
(function (FormulationManagementSystems) {
    var Administration;
    (function (Administration) {
        var UserDialog = (function (_super) {
            __extends(UserDialog, _super);
            function UserDialog() {
                var _this = _super.call(this) || this;
                _this.form = new Administration.UserForm(_this.idPrefix);
                _this.form.Password.addValidationRule(_this.uniqueName, function (e) {
                    if (_this.form.Password.value.length < 7)
                        return "Password must be at least 7 characters!";
                });
                _this.form.PasswordConfirm.addValidationRule(_this.uniqueName, function (e) {
                    if (_this.form.Password.value != _this.form.PasswordConfirm.value)
                        return "The passwords entered doesn't match!";
                });
                return _this;
            }
            UserDialog.prototype.getFormKey = function () { return Administration.UserForm.formKey; };
            UserDialog.prototype.getIdProperty = function () { return Administration.UserRow.idProperty; };
            UserDialog.prototype.getIsActiveProperty = function () { return Administration.UserRow.isActiveProperty; };
            UserDialog.prototype.getLocalTextPrefix = function () { return Administration.UserRow.localTextPrefix; };
            UserDialog.prototype.getNameProperty = function () { return Administration.UserRow.nameProperty; };
            UserDialog.prototype.getService = function () { return Administration.UserService.baseUrl; };
            UserDialog.prototype.getToolbarButtons = function () {
                var _this = this;
                var buttons = _super.prototype.getToolbarButtons.call(this);
                buttons.push({
                    title: Q.text('Site.UserDialog.EditRolesButton'),
                    cssClass: 'edit-roles-button',
                    icon: 'fa-users text-blue',
                    onClick: function () {
                        new Administration.UserRoleDialog({
                            userID: _this.entity.UserId,
                            username: _this.entity.Username
                        }).dialogOpen();
                    }
                });
                buttons.push({
                    title: Q.text('Site.UserDialog.EditPermissionsButton'),
                    cssClass: 'edit-permissions-button',
                    icon: 'fa-lock text-green',
                    onClick: function () {
                        new Administration.UserPermissionDialog({
                            userID: _this.entity.UserId,
                            username: _this.entity.Username
                        }).dialogOpen();
                    }
                });
                return buttons;
            };
            UserDialog.prototype.updateInterface = function () {
                _super.prototype.updateInterface.call(this);
                this.toolbar.findButton('edit-roles-button').toggleClass('disabled', this.isNewOrDeleted());
                this.toolbar.findButton("edit-permissions-button").toggleClass("disabled", this.isNewOrDeleted());
            };
            UserDialog.prototype.afterLoadEntity = function () {
                _super.prototype.afterLoadEntity.call(this);
                // these fields are only required in new record mode
                this.form.Password.element.toggleClass('required', this.isNew())
                    .closest('.field').find('sup').toggle(this.isNew());
                this.form.PasswordConfirm.element.toggleClass('required', this.isNew())
                    .closest('.field').find('sup').toggle(this.isNew());
            };
            return UserDialog;
        }(Serenity.EntityDialog));
        UserDialog = __decorate([
            Serenity.Decorators.registerClass()
        ], UserDialog);
        Administration.UserDialog = UserDialog;
    })(Administration = FormulationManagementSystems.Administration || (FormulationManagementSystems.Administration = {}));
})(FormulationManagementSystems || (FormulationManagementSystems = {}));
var FormulationManagementSystems;
(function (FormulationManagementSystems) {
    var Administration;
    (function (Administration) {
        var UserGrid = (function (_super) {
            __extends(UserGrid, _super);
            function UserGrid(container) {
                return _super.call(this, container) || this;
            }
            UserGrid.prototype.getColumnsKey = function () { return "Administration.User"; };
            UserGrid.prototype.getDialogType = function () { return Administration.UserDialog; };
            UserGrid.prototype.getIdProperty = function () { return Administration.UserRow.idProperty; };
            UserGrid.prototype.getIsActiveProperty = function () { return Administration.UserRow.isActiveProperty; };
            UserGrid.prototype.getLocalTextPrefix = function () { return Administration.UserRow.localTextPrefix; };
            UserGrid.prototype.getService = function () { return Administration.UserService.baseUrl; };
            UserGrid.prototype.getDefaultSortBy = function () {
                return [Administration.UserRow.Fields.Username];
            };
            return UserGrid;
        }(Serenity.EntityGrid));
        UserGrid = __decorate([
            Serenity.Decorators.registerClass()
        ], UserGrid);
        Administration.UserGrid = UserGrid;
    })(Administration = FormulationManagementSystems.Administration || (FormulationManagementSystems.Administration = {}));
})(FormulationManagementSystems || (FormulationManagementSystems = {}));
var FormulationManagementSystems;
(function (FormulationManagementSystems) {
    var Authorization;
    (function (Authorization) {
        Object.defineProperty(Authorization, 'userDefinition', {
            get: function () {
                return Q.getRemoteData('UserData');
            }
        });
        function hasPermission(permissionKey) {
            var ud = Authorization.userDefinition;
            return ud.Username === 'admin' || !!ud.Permissions[permissionKey];
        }
        Authorization.hasPermission = hasPermission;
    })(Authorization = FormulationManagementSystems.Authorization || (FormulationManagementSystems.Authorization = {}));
})(FormulationManagementSystems || (FormulationManagementSystems = {}));
var FormulationManagementSystems;
(function (FormulationManagementSystems) {
    var Administration;
    (function (Administration) {
        var PermissionCheckEditor = (function (_super) {
            __extends(PermissionCheckEditor, _super);
            function PermissionCheckEditor(container, opt) {
                var _this = _super.call(this, container, opt) || this;
                _this._rolePermissions = {};
                _this._implicitPermissions = {};
                var titleByKey = {};
                var permissionKeys = _this.getSortedGroupAndPermissionKeys(titleByKey);
                var items = permissionKeys.map(function (key) { return ({
                    Key: key,
                    ParentKey: _this.getParentKey(key),
                    Title: titleByKey[key],
                    GrantRevoke: null,
                    IsGroup: key.charAt(key.length - 1) === ':'
                }); });
                _this.byParentKey = Q.toGrouping(items, function (x) { return x.ParentKey; });
                _this.setItems(items);
                return _this;
            }
            PermissionCheckEditor.prototype.getIdProperty = function () { return "Key"; };
            PermissionCheckEditor.prototype.getItemGrantRevokeClass = function (item, grant) {
                if (!item.IsGroup) {
                    return ((item.GrantRevoke === grant) ? ' checked' : '');
                }
                var desc = this.getDescendants(item, true);
                var granted = desc.filter(function (x) { return x.GrantRevoke === grant; });
                if (!granted.length) {
                    return '';
                }
                if (desc.length === granted.length) {
                    return 'checked';
                }
                return 'checked partial';
            };
            PermissionCheckEditor.prototype.roleOrImplicit = function (key) {
                if (this._rolePermissions[key])
                    return true;
                for (var _i = 0, _a = Object.keys(this._rolePermissions); _i < _a.length; _i++) {
                    var k = _a[_i];
                    var d = this._implicitPermissions[k];
                    if (d && d[key])
                        return true;
                }
                for (var _b = 0, _c = Object.keys(this._implicitPermissions); _b < _c.length; _b++) {
                    var i = _c[_b];
                    var item = this.view.getItemById(i);
                    if (item && item.GrantRevoke == true) {
                        var d = this._implicitPermissions[i];
                        if (d && d[key])
                            return true;
                    }
                }
            };
            PermissionCheckEditor.prototype.getItemEffectiveClass = function (item) {
                var _this = this;
                if (item.IsGroup) {
                    var desc = this.getDescendants(item, true);
                    var grantCount = Q.count(desc, function (x) { return x.GrantRevoke === true ||
                        (x.GrantRevoke == null && _this.roleOrImplicit(x.Key)); });
                    if (grantCount === desc.length || desc.length === 0) {
                        return 'allow';
                    }
                    if (grantCount === 0) {
                        return 'deny';
                    }
                    return 'partial';
                }
                var granted = item.GrantRevoke === true ||
                    (item.GrantRevoke == null && this.roleOrImplicit(item.Key));
                return (granted ? ' allow' : ' deny');
            };
            PermissionCheckEditor.prototype.getColumns = function () {
                var _this = this;
                var columns = [{
                        name: Q.text('Site.UserPermissionDialog.Permission'),
                        field: 'Title',
                        format: Serenity.SlickFormatting.treeToggle(function () { return _this.view; }, function (x) { return x.Key; }, function (ctx) {
                            var item = ctx.item;
                            var klass = _this.getItemEffectiveClass(item);
                            return '<span class="effective-permission ' + klass + '">' + Q.htmlEncode(ctx.value) + '</span>';
                        }),
                        width: 495,
                        sortable: false
                    }, {
                        name: Q.text('Site.UserPermissionDialog.Grant'), field: 'Grant',
                        format: function (ctx) {
                            var item1 = ctx.item;
                            var klass1 = _this.getItemGrantRevokeClass(item1, true);
                            return "<span class='check-box grant no-float " + klass1 + "'></span>";
                        },
                        width: 65,
                        sortable: false,
                        headerCssClass: 'align-center',
                        cssClass: 'align-center'
                    }];
                if (this.options.showRevoke) {
                    columns.push({
                        name: Q.text('Site.UserPermissionDialog.Revoke'), field: 'Revoke',
                        format: function (ctx) {
                            var item2 = ctx.item;
                            var klass2 = _this.getItemGrantRevokeClass(item2, false);
                            return '<span class="check-box revoke no-float ' + klass2 + '"></span>';
                        },
                        width: 65,
                        sortable: false,
                        headerCssClass: 'align-center',
                        cssClass: 'align-center'
                    });
                }
                return columns;
            };
            PermissionCheckEditor.prototype.setItems = function (items) {
                Serenity.SlickTreeHelper.setIndents(items, function (x) { return x.Key; }, function (x) { return x.ParentKey; }, false);
                this.view.setItems(items, true);
            };
            PermissionCheckEditor.prototype.onViewSubmit = function () {
                return false;
            };
            PermissionCheckEditor.prototype.onViewFilter = function (item) {
                var _this = this;
                if (!_super.prototype.onViewFilter.call(this, item)) {
                    return false;
                }
                if (!Serenity.SlickTreeHelper.filterById(item, this.view, function (x) { return x.ParentKey; }))
                    return false;
                if (this.searchText) {
                    return this.matchContains(item) || item.IsGroup && Q.any(this.getDescendants(item, false), function (x) { return _this.matchContains(x); });
                }
                return true;
            };
            PermissionCheckEditor.prototype.matchContains = function (item) {
                return Select2.util.stripDiacritics(item.Title || '').toLowerCase().indexOf(this.searchText) >= 0;
            };
            PermissionCheckEditor.prototype.getDescendants = function (item, excludeGroups) {
                var result = [];
                var stack = [item];
                while (stack.length > 0) {
                    var i = stack.pop();
                    var children = this.byParentKey[i.Key];
                    if (!children)
                        continue;
                    for (var _i = 0, children_1 = children; _i < children_1.length; _i++) {
                        var child = children_1[_i];
                        if (!excludeGroups || !child.IsGroup) {
                            result.push(child);
                        }
                        stack.push(child);
                    }
                }
                return result;
            };
            PermissionCheckEditor.prototype.onClick = function (e, row, cell) {
                _super.prototype.onClick.call(this, e, row, cell);
                if (!e.isDefaultPrevented()) {
                    Serenity.SlickTreeHelper.toggleClick(e, row, cell, this.view, function (x) { return x.Key; });
                }
                if (e.isDefaultPrevented()) {
                    return;
                }
                var target = $(e.target);
                var grant = target.hasClass('grant');
                if (grant || target.hasClass('revoke')) {
                    e.preventDefault();
                    var item = this.itemAt(row);
                    var checkedOrPartial = target.hasClass('checked') || target.hasClass('partial');
                    if (checkedOrPartial) {
                        grant = null;
                    }
                    else {
                        grant = grant !== checkedOrPartial;
                    }
                    if (item.IsGroup) {
                        for (var _i = 0, _a = this.getDescendants(item, true); _i < _a.length; _i++) {
                            var d = _a[_i];
                            d.GrantRevoke = grant;
                        }
                    }
                    else
                        item.GrantRevoke = grant;
                    this.slickGrid.invalidate();
                }
            };
            PermissionCheckEditor.prototype.getParentKey = function (key) {
                if (key.charAt(key.length - 1) === ':') {
                    key = key.substr(0, key.length - 1);
                }
                var idx = key.lastIndexOf(':');
                if (idx >= 0) {
                    return key.substr(0, idx + 1);
                }
                return null;
            };
            PermissionCheckEditor.prototype.getButtons = function () {
                return [];
            };
            PermissionCheckEditor.prototype.createToolbarExtensions = function () {
                var _this = this;
                _super.prototype.createToolbarExtensions.call(this);
                Serenity.GridUtils.addQuickSearchInputCustom(this.toolbar.element, function (field, text) {
                    _this.searchText = Select2.util.stripDiacritics(Q.trimToNull(text) || '').toLowerCase();
                    _this.view.setItems(_this.view.getItems(), true);
                });
            };
            PermissionCheckEditor.prototype.getSortedGroupAndPermissionKeys = function (titleByKey) {
                var keys = Q.getRemoteData('Administration.PermissionKeys').Entities;
                var titleWithGroup = {};
                for (var _i = 0, keys_1 = keys; _i < keys_1.length; _i++) {
                    var k = keys_1[_i];
                    var s = k;
                    if (!s) {
                        continue;
                    }
                    if (s.charAt(s.length - 1) == ':') {
                        s = s.substr(0, s.length - 1);
                        if (s.length === 0) {
                            continue;
                        }
                    }
                    if (titleByKey[s]) {
                        continue;
                    }
                    titleByKey[s] = Q.coalesce(Q.tryGetText('Permission.' + s), s);
                    var parts = s.split(':');
                    var group = '';
                    var groupTitle = '';
                    for (var i = 0; i < parts.length - 1; i++) {
                        group = group + parts[i] + ':';
                        var txt = Q.tryGetText('Permission.' + group);
                        if (txt == null) {
                            txt = parts[i];
                        }
                        titleByKey[group] = txt;
                        groupTitle = groupTitle + titleByKey[group] + ':';
                        titleWithGroup[group] = groupTitle;
                    }
                    titleWithGroup[s] = groupTitle + titleByKey[s];
                }
                keys = Object.keys(titleByKey);
                keys = keys.sort(function (x, y) { return Q.turkishLocaleCompare(titleWithGroup[x], titleWithGroup[y]); });
                return keys;
            };
            Object.defineProperty(PermissionCheckEditor.prototype, "value", {
                get: function () {
                    var result = [];
                    for (var _i = 0, _a = this.view.getItems(); _i < _a.length; _i++) {
                        var item = _a[_i];
                        if (item.GrantRevoke != null && item.Key.charAt(item.Key.length - 1) != ':') {
                            result.push({ PermissionKey: item.Key, Granted: item.GrantRevoke });
                        }
                    }
                    return result;
                },
                set: function (value) {
                    for (var _i = 0, _a = this.view.getItems(); _i < _a.length; _i++) {
                        var item = _a[_i];
                        item.GrantRevoke = null;
                    }
                    if (value != null) {
                        for (var _b = 0, value_1 = value; _b < value_1.length; _b++) {
                            var row = value_1[_b];
                            var r = this.view.getItemById(row.PermissionKey);
                            if (r) {
                                r.GrantRevoke = Q.coalesce(row.Granted, true);
                            }
                        }
                    }
                    this.setItems(this.getItems());
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(PermissionCheckEditor.prototype, "rolePermissions", {
                get: function () {
                    return Object.keys(this._rolePermissions);
                },
                set: function (value) {
                    this._rolePermissions = {};
                    if (value) {
                        for (var _i = 0, value_2 = value; _i < value_2.length; _i++) {
                            var k = value_2[_i];
                            this._rolePermissions[k] = true;
                        }
                    }
                    this.setItems(this.getItems());
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(PermissionCheckEditor.prototype, "implicitPermissions", {
                set: function (value) {
                    this._implicitPermissions = {};
                    if (value) {
                        for (var _i = 0, _a = Object.keys(value); _i < _a.length; _i++) {
                            var k = _a[_i];
                            this._implicitPermissions[k] = this._implicitPermissions[k] || {};
                            var l = value[k];
                            if (l) {
                                for (var _b = 0, l_1 = l; _b < l_1.length; _b++) {
                                    var s = l_1[_b];
                                    this._implicitPermissions[k][s] = true;
                                }
                            }
                        }
                    }
                },
                enumerable: true,
                configurable: true
            });
            return PermissionCheckEditor;
        }(Serenity.DataGrid));
        PermissionCheckEditor = __decorate([
            Serenity.Decorators.registerEditor([Serenity.IGetEditValue, Serenity.ISetEditValue])
        ], PermissionCheckEditor);
        Administration.PermissionCheckEditor = PermissionCheckEditor;
    })(Administration = FormulationManagementSystems.Administration || (FormulationManagementSystems.Administration = {}));
})(FormulationManagementSystems || (FormulationManagementSystems = {}));
var FormulationManagementSystems;
(function (FormulationManagementSystems) {
    var Administration;
    (function (Administration) {
        var UserPermissionDialog = (function (_super) {
            __extends(UserPermissionDialog, _super);
            function UserPermissionDialog(opt) {
                var _this = _super.call(this, opt) || this;
                _this.permissions = new Administration.PermissionCheckEditor(_this.byId('Permissions'), {
                    showRevoke: true
                });
                Administration.UserPermissionService.List({
                    UserID: _this.options.userID,
                    Module: null,
                    Submodule: null
                }, function (response) {
                    _this.permissions.value = response.Entities;
                });
                Administration.UserPermissionService.ListRolePermissions({
                    UserID: _this.options.userID,
                    Module: null,
                    Submodule: null,
                }, function (response) {
                    _this.permissions.rolePermissions = response.Entities;
                });
                _this.permissions.implicitPermissions = Q.getRemoteData('Administration.ImplicitPermissions');
                return _this;
            }
            UserPermissionDialog.prototype.getDialogOptions = function () {
                var _this = this;
                var opt = _super.prototype.getDialogOptions.call(this);
                opt.buttons = [
                    {
                        text: Q.text('Dialogs.OkButton'),
                        click: function (e) {
                            Administration.UserPermissionService.Update({
                                UserID: _this.options.userID,
                                Permissions: _this.permissions.value,
                                Module: null,
                                Submodule: null
                            }, function (response) {
                                _this.dialogClose();
                                window.setTimeout(function () { return Q.notifySuccess(Q.text('Site.UserPermissionDialog.SaveSuccess')); }, 0);
                            });
                        }
                    }, {
                        text: Q.text('Dialogs.CancelButton'),
                        click: function () { return _this.dialogClose(); }
                    }
                ];
                opt.title = Q.format(Q.text('Site.UserPermissionDialog.DialogTitle'), this.options.username);
                return opt;
            };
            UserPermissionDialog.prototype.getTemplate = function () {
                return '<div id="~_Permissions"></div>';
            };
            return UserPermissionDialog;
        }(Serenity.TemplatedDialog));
        UserPermissionDialog = __decorate([
            Serenity.Decorators.registerClass()
        ], UserPermissionDialog);
        Administration.UserPermissionDialog = UserPermissionDialog;
    })(Administration = FormulationManagementSystems.Administration || (FormulationManagementSystems.Administration = {}));
})(FormulationManagementSystems || (FormulationManagementSystems = {}));
var FormulationManagementSystems;
(function (FormulationManagementSystems) {
    var Administration;
    (function (Administration) {
        var RoleCheckEditor = (function (_super) {
            __extends(RoleCheckEditor, _super);
            function RoleCheckEditor(div) {
                return _super.call(this, div) || this;
            }
            RoleCheckEditor.prototype.createToolbarExtensions = function () {
                var _this = this;
                _super.prototype.createToolbarExtensions.call(this);
                Serenity.GridUtils.addQuickSearchInputCustom(this.toolbar.element, function (field, text) {
                    _this.searchText = Select2.util.stripDiacritics(text || '').toUpperCase();
                    _this.view.setItems(_this.view.getItems(), true);
                });
            };
            RoleCheckEditor.prototype.getButtons = function () {
                return [];
            };
            RoleCheckEditor.prototype.getTreeItems = function () {
                return Administration.RoleRow.getLookup().items.map(function (role) { return ({
                    id: role.RoleId.toString(),
                    text: role.RoleName
                }); });
            };
            RoleCheckEditor.prototype.onViewFilter = function (item) {
                return _super.prototype.onViewFilter.call(this, item) &&
                    (Q.isEmptyOrNull(this.searchText) ||
                        Select2.util.stripDiacritics(item.text || '')
                            .toUpperCase().indexOf(this.searchText) >= 0);
            };
            return RoleCheckEditor;
        }(Serenity.CheckTreeEditor));
        RoleCheckEditor = __decorate([
            Serenity.Decorators.registerEditor()
        ], RoleCheckEditor);
        Administration.RoleCheckEditor = RoleCheckEditor;
    })(Administration = FormulationManagementSystems.Administration || (FormulationManagementSystems.Administration = {}));
})(FormulationManagementSystems || (FormulationManagementSystems = {}));
var FormulationManagementSystems;
(function (FormulationManagementSystems) {
    var Administration;
    (function (Administration) {
        var UserRoleDialog = (function (_super) {
            __extends(UserRoleDialog, _super);
            function UserRoleDialog(opt) {
                var _this = _super.call(this, opt) || this;
                _this.permissions = new Administration.RoleCheckEditor(_this.byId('Roles'));
                Administration.UserRoleService.List({
                    UserID: _this.options.userID
                }, function (response) {
                    _this.permissions.value = response.Entities.map(function (x) { return x.toString(); });
                });
                return _this;
            }
            UserRoleDialog.prototype.getDialogOptions = function () {
                var _this = this;
                var opt = _super.prototype.getDialogOptions.call(this);
                opt.buttons = [{
                        text: Q.text('Dialogs.OkButton'),
                        click: function () {
                            Q.serviceRequest('Administration/UserRole/Update', {
                                UserID: _this.options.userID,
                                Roles: _this.permissions.value.map(function (x) { return parseInt(x, 10); })
                            }, function (response) {
                                _this.dialogClose();
                                Q.notifySuccess(Q.text('Site.UserRoleDialog.SaveSuccess'));
                            });
                        }
                    }, {
                        text: Q.text('Dialogs.CancelButton'),
                        click: function () { return _this.dialogClose(); }
                    }];
                opt.title = Q.format(Q.text('Site.UserRoleDialog.DialogTitle'), this.options.username);
                return opt;
            };
            UserRoleDialog.prototype.getTemplate = function () {
                return "<div id='~_Roles'></div>";
            };
            return UserRoleDialog;
        }(Serenity.TemplatedDialog));
        UserRoleDialog = __decorate([
            Serenity.Decorators.registerClass()
        ], UserRoleDialog);
        Administration.UserRoleDialog = UserRoleDialog;
    })(Administration = FormulationManagementSystems.Administration || (FormulationManagementSystems.Administration = {}));
})(FormulationManagementSystems || (FormulationManagementSystems = {}));
var FormulationManagementSystems;
(function (FormulationManagementSystems) {
    var BasicSamples;
    (function (BasicSamples) {
        var ChartInDialog = ChartInDialog_1 = (function (_super) {
            __extends(ChartInDialog, _super);
            function ChartInDialog() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            ChartInDialog.initializePage = function () {
                $(function () {
                    $('#LaunchDialogButton').click(function (e) {
                        (new ChartInDialog_1()).dialogOpen();
                    });
                });
            };
            ChartInDialog.prototype.onDialogOpen = function () {
                var _this = this;
                _super.prototype.onDialogOpen.call(this);
                BasicSamples.BasicSamplesService.OrdersByShipper({}, function (response) {
                    _this.areaChart = new Morris.Area({
                        element: _this.idPrefix + 'Chart',
                        resize: true, parseTime: false,
                        data: response.Values,
                        xkey: 'Month',
                        ykeys: response.ShipperKeys, labels: response.ShipperLabels, hideHover: 'auto'
                    });
                });
            };
            ChartInDialog.prototype.arrange = function () {
                _super.prototype.arrange.call(this);
                this.areaChart && this.areaChart.redraw();
            };
            ChartInDialog.prototype.getTemplate = function () {
                // you could also put this in a ChartInDialog.Template.html file. it's here for simplicity.
                return "<div id='~_Chart'></div>";
            };
            ChartInDialog.prototype.getDialogOptions = function () {
                var opt = _super.prototype.getDialogOptions.call(this);
                opt.title = 'Orders by Shipper';
                return opt;
            };
            return ChartInDialog;
        }(Serenity.TemplatedDialog));
        ChartInDialog = ChartInDialog_1 = __decorate([
            Serenity.Decorators.registerClass(),
            Serenity.Decorators.resizable(),
            Serenity.Decorators.maximizable()
        ], ChartInDialog);
        BasicSamples.ChartInDialog = ChartInDialog;
        var ChartInDialog_1;
    })(BasicSamples = FormulationManagementSystems.BasicSamples || (FormulationManagementSystems.BasicSamples = {}));
})(FormulationManagementSystems || (FormulationManagementSystems = {}));
var FormulationManagementSystems;
(function (FormulationManagementSystems) {
    var Northwind;
    (function (Northwind) {
        var ProductDialog = (function (_super) {
            __extends(ProductDialog, _super);
            function ProductDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Northwind.ProductForm(_this.idPrefix);
                return _this;
            }
            ProductDialog.prototype.getFormKey = function () { return Northwind.ProductForm.formKey; };
            ProductDialog.prototype.getIdProperty = function () { return Northwind.ProductRow.idProperty; };
            ProductDialog.prototype.getLocalTextPrefix = function () { return Northwind.ProductRow.localTextPrefix; };
            ProductDialog.prototype.getNameProperty = function () { return Northwind.ProductRow.nameProperty; };
            ProductDialog.prototype.getService = function () { return Northwind.ProductService.baseUrl; };
            return ProductDialog;
        }(Serenity.EntityDialog));
        ProductDialog = __decorate([
            Serenity.Decorators.registerClass(),
            Serenity.Decorators.maximizable()
        ], ProductDialog);
        Northwind.ProductDialog = ProductDialog;
    })(Northwind = FormulationManagementSystems.Northwind || (FormulationManagementSystems.Northwind = {}));
})(FormulationManagementSystems || (FormulationManagementSystems = {}));
/// <reference path="../../../Northwind/Product/ProductDialog.ts" />
var FormulationManagementSystems;
(function (FormulationManagementSystems) {
    var BasicSamples;
    (function (BasicSamples) {
        var CloneableEntityDialog = (function (_super) {
            __extends(CloneableEntityDialog, _super);
            function CloneableEntityDialog() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            CloneableEntityDialog.prototype.updateInterface = function () {
                // by default cloneButton is hidden in base UpdateInterface method
                _super.prototype.updateInterface.call(this);
                // here we show it if it is edit mode (not new)
                this.cloneButton.toggle(this.isEditMode());
            };
            /**
             * Overriding this method is optional to customize cloned entity
             */
            CloneableEntityDialog.prototype.getCloningEntity = function () {
                var clone = _super.prototype.getCloningEntity.call(this);
                // add (Clone) suffix if it's not already added
                var suffix = ' (Clone)';
                if (!Q.endsWith(clone.ProductName || '', suffix)) {
                    clone.ProductName = (clone.ProductName || '') + suffix;
                }
                // it's better to clear image for this sample
                // otherwise we would have to create a temporary copy of it
                // and upload
                clone.ProductImage = null;
                // let's clear fields not logical to be cloned
                clone.UnitsInStock = 0;
                clone.UnitsOnOrder = 0;
                return clone;
            };
            return CloneableEntityDialog;
        }(FormulationManagementSystems.Northwind.ProductDialog));
        CloneableEntityDialog = __decorate([
            Serenity.Decorators.registerClass(),
            Serenity.Decorators.maximizable()
        ], CloneableEntityDialog);
        BasicSamples.CloneableEntityDialog = CloneableEntityDialog;
    })(BasicSamples = FormulationManagementSystems.BasicSamples || (FormulationManagementSystems.BasicSamples = {}));
})(FormulationManagementSystems || (FormulationManagementSystems = {}));
var FormulationManagementSystems;
(function (FormulationManagementSystems) {
    var Northwind;
    (function (Northwind) {
        var ProductGrid = (function (_super) {
            __extends(ProductGrid, _super);
            function ProductGrid(container) {
                var _this = _super.call(this, container) || this;
                _this.pendingChanges = {};
                _this.slickContainer.on('change', '.edit:input', function (e) { return _this.inputsChange(e); });
                return _this;
            }
            ProductGrid.prototype.getColumnsKey = function () { return "Northwind.Product"; };
            ProductGrid.prototype.getDialogType = function () { return Northwind.ProductDialog; };
            ProductGrid.prototype.getIdProperty = function () { return Northwind.ProductRow.idProperty; };
            ProductGrid.prototype.getLocalTextPrefix = function () { return Northwind.ProductRow.localTextPrefix; };
            ProductGrid.prototype.getService = function () { return Northwind.ProductService.baseUrl; };
            ProductGrid.prototype.getButtons = function () {
                var _this = this;
                var buttons = _super.prototype.getButtons.call(this);
                buttons.push(FormulationManagementSystems.Common.ExcelExportHelper.createToolButton({
                    grid: this,
                    service: Northwind.ProductService.baseUrl + '/ListExcel',
                    onViewSubmit: function () { return _this.onViewSubmit(); },
                    separator: true
                }));
                buttons.push(FormulationManagementSystems.Common.PdfExportHelper.createToolButton({
                    grid: this,
                    onViewSubmit: function () { return _this.onViewSubmit(); },
                    reportTitle: 'Product List',
                    columnTitles: {
                        'Discontinued': 'Dis.',
                    },
                    tableOptions: {
                        columnStyles: {
                            ProductID: {
                                columnWidth: 25,
                                halign: 'right'
                            },
                            Discountinued: {
                                columnWidth: 25
                            }
                        }
                    }
                }));
                buttons.push({
                    title: 'Save Changes',
                    cssClass: 'apply-changes-button disabled',
                    onClick: function (e) { return _this.saveClick(); },
                    separator: true
                });
                return buttons;
            };
            ProductGrid.prototype.onViewProcessData = function (response) {
                this.pendingChanges = {};
                this.setSaveButtonState();
                return _super.prototype.onViewProcessData.call(this, response);
            };
            // PLEASE NOTE! Inline editing in grids is not something Serenity supports nor recommends.
            // SlickGrid has some set of limitations, UI is very hard to use on some devices like mobile, 
            // custom widgets and validations are not possible, and as a bonus the code can become a mess.
            // 
            // This was just a sample how-to after much requests, and is not supported. 
            // This is all we can offer, please don't ask us to Guide you...
            /**
             * It would be nice if we could use autonumeric, Serenity editors etc. here, to control input validation,
             * but it's not supported by SlickGrid as we are only allowed to return a string, and should attach
             * no event handlers to rendered cell contents
             */
            ProductGrid.prototype.numericInputFormatter = function (ctx) {
                var klass = 'edit numeric';
                var item = ctx.item;
                var pending = this.pendingChanges[item.ProductID];
                if (pending && pending[ctx.column.field] !== undefined) {
                    klass += ' dirty';
                }
                var value = this.getEffectiveValue(item, ctx.column.field);
                return "<input type='text' class='" + klass +
                    "' data-field='" + ctx.column.field +
                    "' value='" + Q.formatNumber(value, '0.##') + "'/>";
            };
            ProductGrid.prototype.stringInputFormatter = function (ctx) {
                var klass = 'edit string';
                var item = ctx.item;
                var pending = this.pendingChanges[item.ProductID];
                var column = ctx.column;
                if (pending && pending[column.field] !== undefined) {
                    klass += ' dirty';
                }
                var value = this.getEffectiveValue(item, column.field);
                return "<input type='text' class='" + klass +
                    "' data-field='" + column.field +
                    "' value='" + Q.attrEncode(value) +
                    "' maxlength='" + column.sourceItem.maxLength + "'/>";
            };
            /**
             * Sorry but you cannot use LookupEditor, e.g. Select2 here, only possible is a SELECT element
             */
            ProductGrid.prototype.selectFormatter = function (ctx, idField, lookup) {
                var klass = 'edit';
                var item = ctx.item;
                var pending = this.pendingChanges[item.ProductID];
                var column = ctx.column;
                if (pending && pending[idField] !== undefined) {
                    klass += ' dirty';
                }
                var value = this.getEffectiveValue(item, idField);
                var markup = "<select class='" + klass +
                    "' data-field='" + idField +
                    "' style='width: 100%; max-width: 100%'>";
                for (var _i = 0, _a = lookup.items; _i < _a.length; _i++) {
                    var c = _a[_i];
                    var id = c[lookup.idField];
                    markup += "<option value='" + Q.attrEncode(id) + "'";
                    if (id == value) {
                        markup += " selected";
                    }
                    markup += ">" + Q.htmlEncode(c[lookup.textField]) + "</option>";
                }
                return markup + "</select>";
            };
            ProductGrid.prototype.getEffectiveValue = function (item, field) {
                var pending = this.pendingChanges[item.ProductID];
                if (pending && pending[field] !== undefined) {
                    return pending[field];
                }
                return item[field];
            };
            ProductGrid.prototype.getColumns = function () {
                var _this = this;
                var columns = _super.prototype.getColumns.call(this);
                var num = function (ctx) { return _this.numericInputFormatter(ctx); };
                var str = function (ctx) { return _this.stringInputFormatter(ctx); };
                Q.first(columns, function (x) { return x.field === 'QuantityPerUnit'; }).format = str;
                var category = Q.first(columns, function (x) { return x.field === fld.CategoryName; });
                category.referencedFields = [fld.CategoryID];
                category.format = function (ctx) { return _this.selectFormatter(ctx, fld.CategoryID, Northwind.CategoryRow.getLookup()); };
                var supplier = Q.first(columns, function (x) { return x.field === fld.SupplierCompanyName; });
                supplier.referencedFields = [fld.SupplierID];
                supplier.format = function (ctx) { return _this.selectFormatter(ctx, fld.SupplierID, Northwind.SupplierRow.getLookup()); };
                Q.first(columns, function (x) { return x.field === fld.UnitPrice; }).format = num;
                Q.first(columns, function (x) { return x.field === fld.UnitsInStock; }).format = num;
                Q.first(columns, function (x) { return x.field === fld.UnitsOnOrder; }).format = num;
                Q.first(columns, function (x) { return x.field === fld.ReorderLevel; }).format = num;
                return columns;
            };
            ProductGrid.prototype.inputsChange = function (e) {
                var cell = this.slickGrid.getCellFromEvent(e);
                var item = this.itemAt(cell.row);
                var input = $(e.target);
                var field = input.data('field');
                var text = Q.coalesce(Q.trimToNull(input.val()), '0');
                var pending = this.pendingChanges[item.ProductID];
                var effective = this.getEffectiveValue(item, field);
                var oldText;
                if (input.hasClass("numeric"))
                    oldText = Q.formatNumber(effective, '0.##');
                else
                    oldText = effective;
                var value;
                if (field === 'UnitPrice') {
                    value = Q.parseDecimal(text);
                    if (value == null || isNaN(value)) {
                        Q.notifyError(Q.text('Validation.Decimal'), '', null);
                        input.val(oldText);
                        input.focus();
                        return;
                    }
                }
                else if (input.hasClass("numeric")) {
                    var i = Q.parseInteger(text);
                    if (isNaN(i) || i > 32767 || i < 0) {
                        Q.notifyError(Q.text('Validation.Integer'), '', null);
                        input.val(oldText);
                        input.focus();
                        return;
                    }
                    value = i;
                }
                else
                    value = text;
                if (!pending) {
                    this.pendingChanges[item.ProductID] = pending = {};
                }
                pending[field] = value;
                item[field] = value;
                this.view.refresh();
                if (input.hasClass("numeric"))
                    value = Q.formatNumber(value, '0.##');
                input.val(value).addClass('dirty');
                this.setSaveButtonState();
            };
            ProductGrid.prototype.setSaveButtonState = function () {
                this.toolbar.findButton('apply-changes-button').toggleClass('disabled', Object.keys(this.pendingChanges).length === 0);
            };
            ProductGrid.prototype.saveClick = function () {
                if (Object.keys(this.pendingChanges).length === 0) {
                    return;
                }
                // this calls save service for all modified rows, one by one
                // you could write a batch update service
                var keys = Object.keys(this.pendingChanges);
                var current = -1;
                var self = this;
                (function saveNext() {
                    if (++current >= keys.length) {
                        self.refresh();
                        return;
                    }
                    var key = keys[current];
                    var entity = Q.deepClone(self.pendingChanges[key]);
                    entity.ProductID = key;
                    Q.serviceRequest('Northwind/Product/Update', {
                        EntityId: key,
                        Entity: entity
                    }, function (response) {
                        delete self.pendingChanges[key];
                        saveNext();
                    });
                })();
            };
            ProductGrid.prototype.getQuickFilters = function () {
                var flt = _super.prototype.getQuickFilters.call(this);
                var q = Q.parseQueryString();
                if (q["cat"]) {
                    var category = Q.tryFirst(flt, function (x) { return x.field == "CategoryID"; });
                    category.init = function (e) {
                        e.element.getWidget(Serenity.LookupEditor).value = q["cat"];
                    };
                }
                return flt;
            };
            return ProductGrid;
        }(Serenity.EntityGrid));
        ProductGrid = __decorate([
            Serenity.Decorators.registerClass(),
            Serenity.Decorators.filterable()
        ], ProductGrid);
        Northwind.ProductGrid = ProductGrid;
    })(Northwind = FormulationManagementSystems.Northwind || (FormulationManagementSystems.Northwind = {}));
})(FormulationManagementSystems || (FormulationManagementSystems = {}));
/// <reference path="../../../Northwind/Product/ProductGrid.ts" />
var FormulationManagementSystems;
(function (FormulationManagementSystems) {
    var BasicSamples;
    (function (BasicSamples) {
        /**
         * Subclass of ProductGrid to override dialog type to CloneableEntityDialog
         */
        var CloneableEntityGrid = (function (_super) {
            __extends(CloneableEntityGrid, _super);
            function CloneableEntityGrid(container) {
                return _super.call(this, container) || this;
            }
            CloneableEntityGrid.prototype.getDialogType = function () { return BasicSamples.CloneableEntityDialog; };
            return CloneableEntityGrid;
        }(FormulationManagementSystems.Northwind.ProductGrid));
        CloneableEntityGrid = __decorate([
            Serenity.Decorators.registerClass()
        ], CloneableEntityGrid);
        BasicSamples.CloneableEntityGrid = CloneableEntityGrid;
    })(BasicSamples = FormulationManagementSystems.BasicSamples || (FormulationManagementSystems.BasicSamples = {}));
})(FormulationManagementSystems || (FormulationManagementSystems = {}));
var FormulationManagementSystems;
(function (FormulationManagementSystems) {
    var Northwind;
    (function (Northwind) {
        var OrderGrid = (function (_super) {
            __extends(OrderGrid, _super);
            function OrderGrid(container) {
                return _super.call(this, container) || this;
            }
            OrderGrid.prototype.getColumnsKey = function () { return "Northwind.Order"; };
            OrderGrid.prototype.getDialogType = function () { return Northwind.OrderDialog; };
            OrderGrid.prototype.getIdProperty = function () { return Northwind.OrderRow.idProperty; };
            OrderGrid.prototype.getLocalTextPrefix = function () { return Northwind.OrderRow.localTextPrefix; };
            OrderGrid.prototype.getService = function () { return Northwind.OrderService.baseUrl; };
            OrderGrid.prototype.getQuickFilters = function () {
                var _this = this;
                var filters = _super.prototype.getQuickFilters.call(this);
                filters.push({
                    type: Serenity.LookupEditor,
                    options: {
                        lookupKey: Northwind.ProductRow.lookupKey
                    },
                    field: 'ProductID',
                    title: 'Contains Product in Details',
                    handler: function (w) {
                        _this.view.params.ProductID = Q.toId(w.value);
                    },
                    cssClass: 'hidden-xs'
                });
                return filters;
            };
            OrderGrid.prototype.createQuickFilters = function () {
                _super.prototype.createQuickFilters.call(this);
                this.shippingStateFilter = this.findQuickFilter(Serenity.EnumEditor, fld.ShippingState);
            };
            OrderGrid.prototype.getButtons = function () {
                var _this = this;
                var buttons = _super.prototype.getButtons.call(this);
                buttons.push(FormulationManagementSystems.Common.ExcelExportHelper.createToolButton({
                    grid: this,
                    service: Northwind.OrderService.baseUrl + '/ListExcel',
                    onViewSubmit: function () { return _this.onViewSubmit(); },
                    separator: true
                }));
                buttons.push(FormulationManagementSystems.Common.PdfExportHelper.createToolButton({
                    grid: this,
                    onViewSubmit: function () { return _this.onViewSubmit(); }
                }));
                return buttons;
            };
            OrderGrid.prototype.getColumns = function () {
                var columns = _super.prototype.getColumns.call(this);
                columns.splice(1, 0, {
                    field: 'Print Invoice',
                    name: '',
                    format: function (ctx) { return '<a class="inline-action print-invoice" title="invoice">' +
                        '<i class="fa fa-file-pdf-o text-red"></i></a>'; },
                    width: 24,
                    minWidth: 24,
                    maxWidth: 24
                });
                return columns;
            };
            OrderGrid.prototype.onClick = function (e, row, cell) {
                _super.prototype.onClick.call(this, e, row, cell);
                if (e.isDefaultPrevented())
                    return;
                var item = this.itemAt(row);
                var target = $(e.target);
                // if user clicks "i" element, e.g. icon
                if (target.parent().hasClass('inline-action'))
                    target = target.parent();
                if (target.hasClass('inline-action')) {
                    e.preventDefault();
                    if (target.hasClass('print-invoice')) {
                        FormulationManagementSystems.Common.ReportHelper.execute({
                            reportKey: 'Northwind.OrderDetail',
                            params: {
                                OrderID: item.OrderID
                            }
                        });
                    }
                }
            };
            OrderGrid.prototype.set_shippingState = function (value) {
                this.shippingStateFilter.value = value == null ? '' : value.toString();
            };
            OrderGrid.prototype.addButtonClick = function () {
                var eq = this.view.params.EqualityFilter;
                this.editItem({
                    CustomerID: eq ? eq.CustomerID : null
                });
            };
            return OrderGrid;
        }(Serenity.EntityGrid));
        OrderGrid = __decorate([
            Serenity.Decorators.registerClass(),
            Serenity.Decorators.filterable()
        ], OrderGrid);
        Northwind.OrderGrid = OrderGrid;
    })(Northwind = FormulationManagementSystems.Northwind || (FormulationManagementSystems.Northwind = {}));
})(FormulationManagementSystems || (FormulationManagementSystems = {}));
/// <reference path="../../../Northwind/Order/OrderGrid.ts" />
var FormulationManagementSystems;
(function (FormulationManagementSystems) {
    var BasicSamples;
    (function (BasicSamples) {
        var DefaultValuesInNewGrid = (function (_super) {
            __extends(DefaultValuesInNewGrid, _super);
            function DefaultValuesInNewGrid(container) {
                return _super.call(this, container) || this;
            }
            /**
             * This method is called when New Item button is clicked.
             * By default, it calls EditItem with an empty entity.
             * This is a good place to fill in default values for New Item button.
             */
            DefaultValuesInNewGrid.prototype.addButtonClick = function () {
                this.editItem({
                    CustomerID: 'ANTON',
                    RequiredDate: Q.formatDate(new Date(), 'yyyy-MM-dd'),
                    EmployeeID: FormulationManagementSystems.Northwind.EmployeeRow.getLookup().items
                        .filter(function (x) { return x.FullName === 'Robert King'; })[0].EmployeeID,
                    ShipVia: FormulationManagementSystems.Northwind.ShipperRow.getLookup().items
                        .filter(function (x) { return x.CompanyName === 'Speedy Express'; })[0].ShipperID
                });
            };
            DefaultValuesInNewGrid.prototype.getButtons = function () {
                var _this = this;
                // preserving default New Item button
                var buttons = _super.prototype.getButtons.call(this);
                buttons.push({
                    title: 'Add Order from the Queen',
                    cssClass: 'add-button',
                    onClick: function () {
                        // using EditItem method as a shortcut to create a new Order dialog,
                        // bind to its events, load our order row, and open dialog
                        _this.editItem({
                            CustomerID: 'QUEEN',
                            EmployeeID: FormulationManagementSystems.Northwind.EmployeeRow.getLookup().items
                                .filter(function (x) { return x.FullName === 'Nancy Davolio'; })[0].EmployeeID,
                            ShipVia: FormulationManagementSystems.Northwind.ShipperRow.getLookup().items
                                .filter(function (x) { return x.CompanyName === 'United Package'; })[0].ShipperID
                        });
                    }
                });
                buttons.push({
                    title: 'Add Order with 5 Chai by Laura', cssClass: 'add-note-button',
                    onClick: function () {
                        // we could use EditItem here too, but for demonstration
                        // purposes we are manually creating dialog this time
                        var dlg = new FormulationManagementSystems.Northwind.OrderDialog();
                        // let grid watch for changes to manually created dialog, 
                        // so when a new item is saved, grid can refresh itself
                        _this.initDialog(dlg);
                        // get a reference to product Chai
                        var chai = FormulationManagementSystems.Northwind.ProductRow.getLookup().items
                            .filter(function (x) { return x.ProductName === 'Chai'; })[0];
                        // LoadEntityAndOpenDialog, loads an OrderRow 
                        // to dialog and opens it
                        var lauraCallahanID = FormulationManagementSystems.Northwind.EmployeeRow.getLookup().items
                            .filter(function (x) { return x.FullName === 'Laura Callahan'; })[0].EmployeeID;
                        dlg.loadEntityAndOpenDialog({
                            CustomerID: 'GOURL',
                            EmployeeID: lauraCallahanID,
                            DetailList: [{
                                    ProductID: chai.ProductID,
                                    ProductName: chai.ProductName,
                                    UnitPrice: chai.UnitPrice,
                                    Quantity: 5,
                                    LineTotal: chai.UnitPrice * 5
                                }]
                        });
                    }
                });
                return buttons;
            };
            return DefaultValuesInNewGrid;
        }(FormulationManagementSystems.Northwind.OrderGrid));
        DefaultValuesInNewGrid = __decorate([
            Serenity.Decorators.registerClass()
        ], DefaultValuesInNewGrid);
        BasicSamples.DefaultValuesInNewGrid = DefaultValuesInNewGrid;
    })(BasicSamples = FormulationManagementSystems.BasicSamples || (FormulationManagementSystems.BasicSamples = {}));
})(FormulationManagementSystems || (FormulationManagementSystems = {}));
var FormulationManagementSystems;
(function (FormulationManagementSystems) {
    var BasicSamples;
    (function (BasicSamples) {
        var DialogBoxes;
        (function (DialogBoxes) {
            function initializePage() {
                confirmDialogButtons();
                confirmWithCustomTitle();
                information();
                warning();
                alert();
                alertWithHtmlContent();
            }
            DialogBoxes.initializePage = initializePage;
            function confirmDialogButtons() {
                // here we demonstrate how you can detect which button user has clicked
                // second parameter is Yes handler and it is called only when user clicks Yes.
                // third parameter has some additional options, that you should only use when needed
                $('#ConfirmDialogButtons').click(function () {
                    Q.confirm("Click one of buttons, or close dialog with [x] on top right, i'll tell you what you did!", function () {
                        Q.notifySuccess("You clicked YES. Great!");
                    }, {
                        onNo: function () {
                            Q.notifyInfo("You clicked NO. Why?");
                        },
                        onCancel: function () {
                            Q.notifyError("You clicked X. Operation is cancelled. Will try again?");
                        }
                    });
                });
            }
            function confirmWithCustomTitle() {
                $('#ConfirmWithCustomTitle').click(function () {
                    Q.confirm("This confirmation has a custom title", function () {
                        Q.notifySuccess("Allright!");
                    }, {
                        title: 'Some Custom Confirmation Title'
                    });
                });
            }
            function information() {
                $('#Information').click(function () {
                    Q.information("What a nice day", function () {
                        Q.notifySuccess("No problem!");
                    });
                });
            }
            function warning() {
                $('#Warning').click(function () {
                    Q.warning("Hey, be careful!");
                });
            }
            function alert() {
                $('#Alert').click(function () {
                    Q.alert("Houston, we got a problem!");
                });
            }
            function alertWithHtmlContent() {
                $('#AlertWithHtmlContent').click(function () {
                    Q.alert("<h4>Here is some HTML content!</h4>" +
                        "<ul><li>Item 1</li><li>Item 2</li >" +
                        "<li>Visit <a href='http://serenity.is/' target='_blank' style='color: #ddf'>http://serenity.is/</a>!</li></ul>", {
                        htmlEncode: false
                    });
                });
            }
        })(DialogBoxes = BasicSamples.DialogBoxes || (BasicSamples.DialogBoxes = {}));
    })(BasicSamples = FormulationManagementSystems.BasicSamples || (FormulationManagementSystems.BasicSamples = {}));
})(FormulationManagementSystems || (FormulationManagementSystems = {}));
var FormulationManagementSystems;
(function (FormulationManagementSystems) {
    var Northwind;
    (function (Northwind) {
        var OrderDialog = (function (_super) {
            __extends(OrderDialog, _super);
            function OrderDialog() {
                var _this = _super.call(this) || this;
                _this.form = new Northwind.OrderForm(_this.idPrefix);
                return _this;
            }
            OrderDialog.prototype.getFormKey = function () { return Northwind.OrderForm.formKey; };
            OrderDialog.prototype.getIdProperty = function () { return Northwind.OrderRow.idProperty; };
            OrderDialog.prototype.getLocalTextPrefix = function () { return Northwind.OrderRow.localTextPrefix; };
            OrderDialog.prototype.getNameProperty = function () { return Northwind.OrderRow.nameProperty; };
            OrderDialog.prototype.getService = function () { return Northwind.OrderService.baseUrl; };
            OrderDialog.prototype.getToolbarButtons = function () {
                var _this = this;
                var buttons = _super.prototype.getToolbarButtons.call(this);
                buttons.push(FormulationManagementSystems.Common.ReportHelper.createToolButton({
                    title: 'Invoice',
                    cssClass: 'export-pdf-button',
                    reportKey: 'Northwind.OrderDetail',
                    getParams: function () { return ({
                        OrderID: _this.get_entityId()
                    }); }
                }));
                return buttons;
            };
            OrderDialog.prototype.updateInterface = function () {
                _super.prototype.updateInterface.call(this);
                this.toolbar.findButton('export-pdf-button').toggle(this.isEditMode());
            };
            return OrderDialog;
        }(Serenity.EntityDialog));
        OrderDialog = __decorate([
            Serenity.Decorators.registerClass(),
            Serenity.Decorators.panel()
        ], OrderDialog);
        Northwind.OrderDialog = OrderDialog;
    })(Northwind = FormulationManagementSystems.Northwind || (FormulationManagementSystems.Northwind = {}));
})(FormulationManagementSystems || (FormulationManagementSystems = {}));
/// <reference path="../../../Northwind/Order/OrderDialog.ts" />
var FormulationManagementSystems;
(function (FormulationManagementSystems) {
    var BasicSamples;
    (function (BasicSamples) {
        /**
         * A version of order dialog converted to a panel by adding Serenity.Decorators.panel decorator.
         */
        var EntityDialogAsPanel = (function (_super) {
            __extends(EntityDialogAsPanel, _super);
            function EntityDialogAsPanel() {
                return _super.call(this) || this;
            }
            EntityDialogAsPanel.prototype.updateInterface = function () {
                _super.prototype.updateInterface.call(this);
                this.deleteButton.hide();
                this.applyChangesButton.hide();
            };
            EntityDialogAsPanel.prototype.onSaveSuccess = function (response) {
                this.showSaveSuccessMessage(response);
            };
            return EntityDialogAsPanel;
        }(FormulationManagementSystems.Northwind.OrderDialog));
        EntityDialogAsPanel = __decorate([
            Serenity.Decorators.panel()
        ], EntityDialogAsPanel);
        BasicSamples.EntityDialogAsPanel = EntityDialogAsPanel;
    })(BasicSamples = FormulationManagementSystems.BasicSamples || (FormulationManagementSystems.BasicSamples = {}));
})(FormulationManagementSystems || (FormulationManagementSystems = {}));
var FormulationManagementSystems;
(function (FormulationManagementSystems) {
    var Northwind;
    (function (Northwind) {
        var CategoryDialog = (function (_super) {
            __extends(CategoryDialog, _super);
            function CategoryDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Northwind.CategoryForm(_this.idPrefix);
                return _this;
            }
            CategoryDialog.prototype.getFormKey = function () { return Northwind.CategoryForm.formKey; };
            CategoryDialog.prototype.getIdProperty = function () { return Northwind.CategoryRow.idProperty; };
            CategoryDialog.prototype.getLocalTextPrefix = function () { return Northwind.CategoryRow.localTextPrefix; };
            CategoryDialog.prototype.getNameProperty = function () { return Northwind.CategoryRow.nameProperty; };
            CategoryDialog.prototype.getService = function () { return Northwind.CategoryService.baseUrl; };
            return CategoryDialog;
        }(Serenity.EntityDialog));
        CategoryDialog = __decorate([
            Serenity.Decorators.registerClass()
        ], CategoryDialog);
        Northwind.CategoryDialog = CategoryDialog;
    })(Northwind = FormulationManagementSystems.Northwind || (FormulationManagementSystems.Northwind = {}));
})(FormulationManagementSystems || (FormulationManagementSystems = {}));
/// <reference path="../../../Northwind/Category/CategoryDialog.ts" />
var FormulationManagementSystems;
(function (FormulationManagementSystems) {
    var BasicSamples;
    (function (BasicSamples) {
        var GetInsertedRecordIdDialog = (function (_super) {
            __extends(GetInsertedRecordIdDialog, _super);
            function GetInsertedRecordIdDialog() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            /**
             * This method is called after the save request to service
             * is completed succesfully. This can be an insert or update.
             *
             * @param response Response that is returned from server
             */
            GetInsertedRecordIdDialog.prototype.onSaveSuccess = function (response) {
                // check that this is an insert
                if (this.isNew()) {
                    Q.notifySuccess("Just inserted a category with ID: " + response.EntityId);
                    // you could also open a new dialog
                    // new Northwind.CategoryDialog().loadByIdAndOpenDialog(response.EntityId);
                    // but let's better load inserted record using Retrieve service
                    FormulationManagementSystems.Northwind.CategoryService.Retrieve({
                        EntityId: response.EntityId
                    }, function (resp) {
                        Q.notifyInfo("Looks like the category you added has name: " + resp.Entity.CategoryName);
                    });
                }
            };
            return GetInsertedRecordIdDialog;
        }(FormulationManagementSystems.Northwind.CategoryDialog));
        GetInsertedRecordIdDialog = __decorate([
            Serenity.Decorators.registerClass()
        ], GetInsertedRecordIdDialog);
        BasicSamples.GetInsertedRecordIdDialog = GetInsertedRecordIdDialog;
    })(BasicSamples = FormulationManagementSystems.BasicSamples || (FormulationManagementSystems.BasicSamples = {}));
})(FormulationManagementSystems || (FormulationManagementSystems = {}));
var FormulationManagementSystems;
(function (FormulationManagementSystems) {
    var Northwind;
    (function (Northwind) {
        var CategoryGrid = (function (_super) {
            __extends(CategoryGrid, _super);
            function CategoryGrid(container) {
                return _super.call(this, container) || this;
            }
            CategoryGrid.prototype.getColumnsKey = function () { return "Northwind.Category"; };
            CategoryGrid.prototype.getDialogType = function () { return Northwind.CategoryDialog; };
            CategoryGrid.prototype.getIdProperty = function () { return Northwind.CategoryRow.idProperty; };
            CategoryGrid.prototype.getLocalTextPrefix = function () { return Northwind.CategoryRow.localTextPrefix; };
            CategoryGrid.prototype.getService = function () { return Northwind.CategoryService.baseUrl; };
            return CategoryGrid;
        }(Serenity.EntityGrid));
        CategoryGrid = __decorate([
            Serenity.Decorators.registerClass()
        ], CategoryGrid);
        Northwind.CategoryGrid = CategoryGrid;
    })(Northwind = FormulationManagementSystems.Northwind || (FormulationManagementSystems.Northwind = {}));
})(FormulationManagementSystems || (FormulationManagementSystems = {}));
/// <reference path="../../../Northwind/Category/CategoryGrid.ts" />
var FormulationManagementSystems;
(function (FormulationManagementSystems) {
    var BasicSamples;
    (function (BasicSamples) {
        /**
         * Subclass of CategoryGrid to override dialog type to GetInsertedRecordIdDialog
         */
        var GetInsertedRecordIdGrid = (function (_super) {
            __extends(GetInsertedRecordIdGrid, _super);
            function GetInsertedRecordIdGrid(container) {
                return _super.call(this, container) || this;
            }
            GetInsertedRecordIdGrid.prototype.getDialogType = function () { return BasicSamples.GetInsertedRecordIdDialog; };
            return GetInsertedRecordIdGrid;
        }(FormulationManagementSystems.Northwind.CategoryGrid));
        GetInsertedRecordIdGrid = __decorate([
            Serenity.Decorators.registerClass()
        ], GetInsertedRecordIdGrid);
        BasicSamples.GetInsertedRecordIdGrid = GetInsertedRecordIdGrid;
    })(BasicSamples = FormulationManagementSystems.BasicSamples || (FormulationManagementSystems.BasicSamples = {}));
})(FormulationManagementSystems || (FormulationManagementSystems = {}));
/// <reference path="../../../Northwind/Order/OrderDialog.ts" />
var FormulationManagementSystems;
(function (FormulationManagementSystems) {
    var BasicSamples;
    (function (BasicSamples) {
        /**
         * Our custom order dialog subclass that will have a tab to display and edit selected customer details.
         */
        var OtherFormInTabDialog = (function (_super) {
            __extends(OtherFormInTabDialog, _super);
            function OtherFormInTabDialog() {
                var _this = _super.call(this) || this;
                // entity dialogs by default creates a property grid on element with ID "PropertyGrid".
                // here we explicitly create another, the customer property grid (vertical form) on element with ID "CustomerPropertyGrid".
                _this.customerPropertyGrid = new Serenity.PropertyGrid(_this.byId("CustomerPropertyGrid"), {
                    idPrefix: _this.idPrefix + "_Customer_",
                    items: Q.getForm(FormulationManagementSystems.Northwind.CustomerForm.formKey).filter(function (x) { return x.name != 'CustomerID'; }),
                    useCategories: true
                });
                // this is just a helper to access editors if needed
                _this.customerForm = new FormulationManagementSystems.Northwind.CustomerForm(_this.customerPropertyGrid.idPrefix);
                // initialize validator for customer form
                _this.customerValidator = _this.byId("CustomerForm").validate(Q.validateOptions({}));
                var selfChange = 0;
                // creating another toolbar for customer tab that will only save Customer
                new Serenity.Toolbar(_this.byId("CustomerToolbar"), {
                    buttons: [{
                            cssClass: "apply-changes-button",
                            title: Q.text("Controls.EntityDialog.SaveButton"),
                            onClick: function () {
                                var id = _this.getCustomerID();
                                if (!id)
                                    return;
                                if (!_this.customerValidator.form())
                                    return;
                                // prepare an empty entity to serialize customer details into
                                var c = {};
                                _this.customerPropertyGrid.save(c);
                                FormulationManagementSystems.Northwind.CustomerService.Update({
                                    EntityId: id,
                                    Entity: c
                                }, function (response) {
                                    // reload customer list just in case
                                    Q.reloadLookup(FormulationManagementSystems.Northwind.CustomerRow.lookupKey);
                                    // set flag that we are triggering customer select change event
                                    // otherwise active tab will change to first one
                                    selfChange++;
                                    try {
                                        // trigger change so that customer select updates its text
                                        // in case if Company Name is changed
                                        _this.form.CustomerID.element.change();
                                    }
                                    finally {
                                        selfChange--;
                                    }
                                    Q.notifySuccess("Saved customer details");
                                });
                            }
                        }]
                });
                _this.form.CustomerID.change(function (e) {
                    if (selfChange)
                        return;
                    var customerID = _this.getCustomerID();
                    Serenity.TabsExtensions.setDisabled(_this.tabs, 'Customer', !customerID);
                    if (!customerID) {
                        // no customer is selected, just load an empty entity
                        _this.customerPropertyGrid.load({});
                        return;
                    }
                    // load selected customer into customer form by calling CustomerService
                    FormulationManagementSystems.Northwind.CustomerService.Retrieve({
                        EntityId: customerID
                    }, function (response) {
                        _this.customerPropertyGrid.load(response.Entity);
                    });
                });
                return _this;
            }
            OtherFormInTabDialog.prototype.getCustomerID = function () {
                var customerID = this.form.CustomerID.value;
                if (Q.isEmptyOrNull(customerID))
                    return null;
                // unfortunately, CustomerID (a string) used in this form and 
                // the ID (auto increment ID) are different, so we need to 
                // find numeric ID from customer lookups. 
                // you'll probably won't need this step.
                return Q.first(FormulationManagementSystems.Northwind.CustomerRow.getLookup().items, function (x) { return x.CustomerID == customerID; }).ID;
            };
            OtherFormInTabDialog.prototype.loadEntity = function (entity) {
                _super.prototype.loadEntity.call(this, entity);
                Serenity.TabsExtensions.setDisabled(this.tabs, 'Customer', !this.getCustomerID());
            };
            return OtherFormInTabDialog;
        }(FormulationManagementSystems.Northwind.OrderDialog));
        OtherFormInTabDialog = __decorate([
            Serenity.Decorators.registerClass()
        ], OtherFormInTabDialog);
        BasicSamples.OtherFormInTabDialog = OtherFormInTabDialog;
    })(BasicSamples = FormulationManagementSystems.BasicSamples || (FormulationManagementSystems.BasicSamples = {}));
})(FormulationManagementSystems || (FormulationManagementSystems = {}));
/// <reference path="../../../Northwind/Order/OrderGrid.ts" />
var FormulationManagementSystems;
(function (FormulationManagementSystems) {
    var BasicSamples;
    (function (BasicSamples) {
        /**
         * Subclass of OrderGrid to override dialog type to OtherFormInTabDialog
         */
        var OtherFormInTabGrid = (function (_super) {
            __extends(OtherFormInTabGrid, _super);
            function OtherFormInTabGrid(container) {
                return _super.call(this, container) || this;
            }
            OtherFormInTabGrid.prototype.getDialogType = function () { return BasicSamples.OtherFormInTabDialog; };
            return OtherFormInTabGrid;
        }(FormulationManagementSystems.Northwind.OrderGrid));
        OtherFormInTabGrid = __decorate([
            Serenity.Decorators.registerClass()
        ], OtherFormInTabGrid);
        BasicSamples.OtherFormInTabGrid = OtherFormInTabGrid;
    })(BasicSamples = FormulationManagementSystems.BasicSamples || (FormulationManagementSystems.BasicSamples = {}));
})(FormulationManagementSystems || (FormulationManagementSystems = {}));
/// <reference path="../../../Northwind/Order/OrderDialog.ts" />
var FormulationManagementSystems;
(function (FormulationManagementSystems) {
    var BasicSamples;
    (function (BasicSamples) {
        /**
         * Our custom order dialog subclass that will have a tab to display and edit selected customer details.
         * With single toolbar for all forms
         */
        var OtherFormOneBarDialog = (function (_super) {
            __extends(OtherFormOneBarDialog, _super);
            function OtherFormOneBarDialog() {
                var _this = _super.call(this) || this;
                _this.selfChange = 0;
                // entity dialogs by default creates a property grid on element with ID "PropertyGrid".
                // here we explicitly create another, the customer property grid (vertical form) on element with ID "CustomerPropertyGrid".
                _this.customerPropertyGrid = new Serenity.PropertyGrid(_this.byId("CustomerPropertyGrid"), {
                    items: Q.getForm(FormulationManagementSystems.Northwind.CustomerForm.formKey).filter(function (x) { return x.name != 'CustomerID'; }),
                    idPrefix: _this.idPrefix + "_Customer_",
                    useCategories: true
                });
                // this is just a helper to access editors if needed
                _this.customerForm = new FormulationManagementSystems.Northwind.CustomerForm(_this.customerPropertyGrid.idPrefix);
                // initialize validator for customer form
                _this.customerValidator = _this.byId("CustomerForm").validate(Q.validateOptions({}));
                _this.form.CustomerID.change(function (e) {
                    if (_this.selfChange)
                        return;
                    var customerID = _this.getCustomerID();
                    Serenity.TabsExtensions.setDisabled(_this.tabs, 'Customer', !customerID);
                    if (!customerID) {
                        // no customer is selected, just load an empty entity
                        _this.customerPropertyGrid.load({});
                        return;
                    }
                    // load selected customer into customer form by calling CustomerService
                    FormulationManagementSystems.Northwind.CustomerService.Retrieve({
                        EntityId: customerID
                    }, function (response) {
                        _this.customerPropertyGrid.load(response.Entity);
                    });
                });
                return _this;
            }
            OtherFormOneBarDialog.prototype.getCustomerID = function () {
                var customerID = this.form.CustomerID.value;
                if (Q.isEmptyOrNull(customerID))
                    return null;
                // unfortunately, CustomerID (a string) used in this form and 
                // the ID (auto increment ID) are different, so we need to 
                // find numeric ID from customer lookups. 
                // you'll probably won't need this step.
                return Q.first(FormulationManagementSystems.Northwind.CustomerRow.getLookup().items, function (x) { return x.CustomerID == customerID; }).ID;
            };
            OtherFormOneBarDialog.prototype.loadEntity = function (entity) {
                _super.prototype.loadEntity.call(this, entity);
                Serenity.TabsExtensions.setDisabled(this.tabs, 'Customer', !this.getCustomerID());
            };
            // Save the customer and the order 
            OtherFormOneBarDialog.prototype.saveCustomer = function (callback, onSuccess) {
                var _this = this;
                var id = this.getCustomerID();
                if (!id) {
                    // If id of Customer isn't present, we save only Order entity
                    onSuccess(null);
                }
                else {
                    // Get current tab
                    var currTab = Serenity.TabsExtensions.activeTabKey(this.tabs);
                    // Select the correct tab and validate to see the error message in tab
                    Serenity.TabsExtensions.selectTab(this.tabs, "Customer");
                    if (!this.customerValidator.form()) {
                        return false;
                    }
                    // Re-select initial tab
                    Serenity.TabsExtensions.selectTab(this.tabs, currTab);
                    // prepare an empty entity to serialize customer details into
                    var c = {};
                    this.customerPropertyGrid.save(c);
                    FormulationManagementSystems.Northwind.CustomerService.Update({
                        EntityId: id,
                        Entity: c
                    }, function (response) {
                        // reload customer list just in case
                        Q.reloadLookup(FormulationManagementSystems.Northwind.CustomerRow.lookupKey);
                        // set flag that we are triggering customer select change event
                        // otherwise active tab will change to first one
                        _this.selfChange++;
                        try {
                            // trigger change so that customer select updates its text
                            // in case if Company Name is changed
                            _this.form.CustomerID.element.change();
                        }
                        finally {
                            _this.selfChange--;
                        }
                        onSuccess(response);
                    });
                }
                return true;
            };
            // Call super.save to save Order entity
            OtherFormOneBarDialog.prototype.saveOrder = function (callback) {
                _super.prototype.save.call(this, callback);
            };
            OtherFormOneBarDialog.prototype.saveAll = function (callback) {
                var _this = this;
                this.saveCustomer(callback, 
                // If customer successa, save Order entity
                function (resp) { return _this.saveOrder(callback); });
            };
            // This is called when save/update button is pressed
            OtherFormOneBarDialog.prototype.save = function (callback) {
                this.saveAll(callback);
            };
            return OtherFormOneBarDialog;
        }(FormulationManagementSystems.Northwind.OrderDialog));
        OtherFormOneBarDialog = __decorate([
            Serenity.Decorators.registerClass()
        ], OtherFormOneBarDialog);
        BasicSamples.OtherFormOneBarDialog = OtherFormOneBarDialog;
    })(BasicSamples = FormulationManagementSystems.BasicSamples || (FormulationManagementSystems.BasicSamples = {}));
})(FormulationManagementSystems || (FormulationManagementSystems = {}));
/// <reference path="../../../Northwind/Order/OrderGrid.ts" />
var FormulationManagementSystems;
(function (FormulationManagementSystems) {
    var BasicSamples;
    (function (BasicSamples) {
        /**
         * Subclass of OrderGrid to override dialog type to OtherFormInTabOneBarDialog
         */
        var OtherFormInTabOneBarGrid = (function (_super) {
            __extends(OtherFormInTabOneBarGrid, _super);
            function OtherFormInTabOneBarGrid(container) {
                return _super.call(this, container) || this;
            }
            OtherFormInTabOneBarGrid.prototype.getDialogType = function () { return BasicSamples.OtherFormOneBarDialog; };
            return OtherFormInTabOneBarGrid;
        }(FormulationManagementSystems.Northwind.OrderGrid));
        OtherFormInTabOneBarGrid = __decorate([
            Serenity.Decorators.registerClass()
        ], OtherFormInTabOneBarGrid);
        BasicSamples.OtherFormInTabOneBarGrid = OtherFormInTabOneBarGrid;
    })(BasicSamples = FormulationManagementSystems.BasicSamples || (FormulationManagementSystems.BasicSamples = {}));
})(FormulationManagementSystems || (FormulationManagementSystems = {}));
var FormulationManagementSystems;
(function (FormulationManagementSystems) {
    var BasicSamples;
    (function (BasicSamples) {
        var PopulateLinkedDataDialog = (function (_super) {
            __extends(PopulateLinkedDataDialog, _super);
            function PopulateLinkedDataDialog() {
                var _this = _super.call(this) || this;
                _this.form = new BasicSamples.PopulateLinkedDataForm(_this.idPrefix);
                // "changeSelect2" is only fired when user changes the selection
                // but "change" is fired when dialog sets customer on load too
                // so we prefer "changeSelect2", as initial customer details 
                // will get populated by initial load, we don't want extra call
                _this.form.CustomerID.changeSelect2(function (e) {
                    var customerID = _this.form.CustomerID.value;
                    if (Q.isEmptyOrNull(customerID)) {
                        _this.setCustomerDetails({});
                        return;
                    }
                    // in northwind CustomerID is a string like "ALFKI", 
                    // while its actual integer ID value is 1.
                    // so we need to convert customer ID to ID.
                    // you won't have to do this conversion with your tables
                    var id = Q.first(FormulationManagementSystems.Northwind.CustomerRow.getLookup().items, function (x) { return x.CustomerID == customerID; }).ID;
                    FormulationManagementSystems.Northwind.CustomerService.Retrieve({
                        EntityId: id
                    }, function (response) {
                        _this.setCustomerDetails(response.Entity);
                    });
                });
                return _this;
            }
            PopulateLinkedDataDialog.prototype.getFormKey = function () { return BasicSamples.PopulateLinkedDataForm.formKey; };
            PopulateLinkedDataDialog.prototype.getIdProperty = function () { return FormulationManagementSystems.Northwind.OrderRow.idProperty; };
            PopulateLinkedDataDialog.prototype.getLocalTextPrefix = function () { return FormulationManagementSystems.Northwind.OrderRow.localTextPrefix; };
            PopulateLinkedDataDialog.prototype.getNameProperty = function () { return FormulationManagementSystems.Northwind.OrderRow.nameProperty; };
            PopulateLinkedDataDialog.prototype.getService = function () { return FormulationManagementSystems.Northwind.OrderService.baseUrl; };
            PopulateLinkedDataDialog.prototype.setCustomerDetails = function (details) {
                this.form.CustomerCity.value = details.City;
                this.form.CustomerContactName.value = details.ContactName;
                this.form.CustomerContactTitle.value = details.ContactTitle;
                this.form.CustomerCountry.value = details.Country;
                this.form.CustomerFax.value = details.Fax;
                this.form.CustomerPhone.value = details.Phone;
                this.form.CustomerRegion.value = details.Region;
            };
            /**
             * This dialog will have CSS class "s-PopulateLinkedDataDialog"
             * We are changing it here to "s-OrderDialog", to make it use default OrderDialog styles
             * This has no effect other than looks on populate linked data demonstration
             */
            PopulateLinkedDataDialog.prototype.getCssClass = function () {
                return _super.prototype.getCssClass.call(this) + " s-OrderDialog s-Northwind-OrderDialog";
            };
            return PopulateLinkedDataDialog;
        }(Serenity.EntityDialog));
        PopulateLinkedDataDialog = __decorate([
            Serenity.Decorators.registerClass()
        ], PopulateLinkedDataDialog);
        BasicSamples.PopulateLinkedDataDialog = PopulateLinkedDataDialog;
    })(BasicSamples = FormulationManagementSystems.BasicSamples || (FormulationManagementSystems.BasicSamples = {}));
})(FormulationManagementSystems || (FormulationManagementSystems = {}));
/// <reference path="../../../Northwind/Order/OrderGrid.ts" />
var FormulationManagementSystems;
(function (FormulationManagementSystems) {
    var BasicSamples;
    (function (BasicSamples) {
        /**
         * A subclass of OrderGrid that launches PopulateLinkedDataDialog
         */
        var PopulateLinkedDataGrid = (function (_super) {
            __extends(PopulateLinkedDataGrid, _super);
            function PopulateLinkedDataGrid(container) {
                return _super.call(this, container) || this;
            }
            PopulateLinkedDataGrid.prototype.getDialogType = function () { return BasicSamples.PopulateLinkedDataDialog; };
            return PopulateLinkedDataGrid;
        }(FormulationManagementSystems.Northwind.OrderGrid));
        PopulateLinkedDataGrid = __decorate([
            Serenity.Decorators.registerClass()
        ], PopulateLinkedDataGrid);
        BasicSamples.PopulateLinkedDataGrid = PopulateLinkedDataGrid;
    })(BasicSamples = FormulationManagementSystems.BasicSamples || (FormulationManagementSystems.BasicSamples = {}));
})(FormulationManagementSystems || (FormulationManagementSystems = {}));
var FormulationManagementSystems;
(function (FormulationManagementSystems) {
    var Northwind;
    (function (Northwind) {
        var SupplierDialog = (function (_super) {
            __extends(SupplierDialog, _super);
            function SupplierDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Northwind.SupplierForm(_this.idPrefix);
                return _this;
            }
            SupplierDialog.prototype.getFormKey = function () { return Northwind.SupplierForm.formKey; };
            SupplierDialog.prototype.getIdProperty = function () { return Northwind.SupplierRow.idProperty; };
            SupplierDialog.prototype.getLocalTextPrefix = function () { return Northwind.SupplierRow.localTextPrefix; };
            SupplierDialog.prototype.getNameProperty = function () { return Northwind.SupplierRow.nameProperty; };
            SupplierDialog.prototype.getService = function () { return Northwind.SupplierService.baseUrl; };
            SupplierDialog.prototype.getLanguages = function () {
                return FormulationManagementSystems.LanguageList.getValue();
            };
            return SupplierDialog;
        }(Serenity.EntityDialog));
        SupplierDialog = __decorate([
            Serenity.Decorators.registerClass()
        ], SupplierDialog);
        Northwind.SupplierDialog = SupplierDialog;
    })(Northwind = FormulationManagementSystems.Northwind || (FormulationManagementSystems.Northwind = {}));
})(FormulationManagementSystems || (FormulationManagementSystems = {}));
/// <reference path="../../../Northwind/Supplier/SupplierDialog.ts" />
var FormulationManagementSystems;
(function (FormulationManagementSystems) {
    var BasicSamples;
    (function (BasicSamples) {
        var ReadOnlyDialog = (function (_super) {
            __extends(ReadOnlyDialog, _super);
            function ReadOnlyDialog() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            /**
             * This is the method that gets list of tool
             * buttons to be created in a dialog.
             *
             * Here we'll remove save and close button, and
             * apply changes buttons.
             */
            ReadOnlyDialog.prototype.getToolbarButtons = function () {
                var buttons = _super.prototype.getToolbarButtons.call(this);
                buttons.splice(Q.indexOf(buttons, function (x) { return x.cssClass == "save-and-close-button"; }), 1);
                buttons.splice(Q.indexOf(buttons, function (x) { return x.cssClass == "apply-changes-button"; }), 1);
                // We could also remove delete button here, but for demonstration 
                // purposes we'll hide it in another method (updateInterface)
                // buttons.splice(Q.indexOf(buttons, x => x.cssClass == "delete-button"), 1);
                return buttons;
            };
            /**
             * This method is a good place to update states of
             * interface elements. It is called after dialog
             * is initialized and an entity is loaded into dialog.
             * This is also called in new item mode.
             */
            ReadOnlyDialog.prototype.updateInterface = function () {
                _super.prototype.updateInterface.call(this);
                // finding all editor elements and setting their readonly attribute
                // note that this helper method only works with basic inputs, 
                // some editors require widget based set readonly overload (setReadOnly)
                Serenity.EditorUtils.setReadonly(this.element.find('.editor'), true);
                // remove required asterisk (*)
                this.element.find('sup').hide();
                // here is a way to locate a button by its css class
                // note that this method is not available in 
                // getToolbarButtons() because buttons are not 
                // created there yet!
                // 
                // this.toolbar.findButton('delete-button').hide();
                // entity dialog also has reference variables to
                // its default buttons, lets use them to hide delete button
                this.deleteButton.hide();
                // we could also hide save buttons just like delete button,
                // but they are null now as we removed them in getToolbarButtons()
                // if we didn't we could write like this:
                // 
                // this.applyChangesButton.hide();
                // this.saveAndCloseButton.hide();
                // instead of hiding, we could disable a button
                // 
                // this.deleteButton.toggleClass('disabled', true);
            };
            /**
             * This method is called when dialog title needs to be updated.
             * Base class returns something like 'Edit xyz' for edit mode,
             * and 'New xyz' for new record mode.
             *
             * But our dialog is readonly, so we should change it to 'View xyz'
             */
            ReadOnlyDialog.prototype.getEntityTitle = function () {
                if (!this.isEditMode()) {
                    // we shouldn't hit here, but anyway for demo...
                    return "How did you manage to open this dialog in new record mode?";
                }
                else {
                    // entitySingular is type of record this dialog edits. something like 'Supplier'.
                    // you could hardcode it, but this is for demonstration
                    var entityType = _super.prototype.getEntitySingular.call(this);
                    // get name field value of record this dialog edits
                    var name_1 = this.getEntityNameFieldValue() || "";
                    // you could use Q.format with a local text, but again demo...
                    return 'View ' + entityType + " (" + name_1 + ")";
                }
            };
            /**
             * This method is actually the one that calls getEntityTitle()
             * and updates the dialog title. We could do it here too...
             */
            ReadOnlyDialog.prototype.updateTitle = function () {
                _super.prototype.updateTitle.call(this);
                // remove super.updateTitle() call above and uncomment 
                // below line if you'd like to use this version
                // 
                // this.dialogTitle = 'View Supplier (' + this.getEntityNameFieldValue() + ')';
            };
            return ReadOnlyDialog;
        }(FormulationManagementSystems.Northwind.SupplierDialog));
        ReadOnlyDialog = __decorate([
            Serenity.Decorators.registerClass()
        ], ReadOnlyDialog);
        BasicSamples.ReadOnlyDialog = ReadOnlyDialog;
    })(BasicSamples = FormulationManagementSystems.BasicSamples || (FormulationManagementSystems.BasicSamples = {}));
})(FormulationManagementSystems || (FormulationManagementSystems = {}));
var FormulationManagementSystems;
(function (FormulationManagementSystems) {
    var Northwind;
    (function (Northwind) {
        var SupplierGrid = (function (_super) {
            __extends(SupplierGrid, _super);
            function SupplierGrid(container) {
                return _super.call(this, container) || this;
            }
            SupplierGrid.prototype.getColumnsKey = function () { return "Northwind.Supplier"; };
            SupplierGrid.prototype.getDialogType = function () { return Northwind.SupplierDialog; };
            SupplierGrid.prototype.getIdProperty = function () { return Northwind.SupplierRow.idProperty; };
            SupplierGrid.prototype.getLocalTextPrefix = function () { return Northwind.SupplierRow.localTextPrefix; };
            SupplierGrid.prototype.getService = function () { return Northwind.SupplierService.baseUrl; };
            return SupplierGrid;
        }(Serenity.EntityGrid));
        SupplierGrid = __decorate([
            Serenity.Decorators.registerClass()
        ], SupplierGrid);
        Northwind.SupplierGrid = SupplierGrid;
    })(Northwind = FormulationManagementSystems.Northwind || (FormulationManagementSystems.Northwind = {}));
})(FormulationManagementSystems || (FormulationManagementSystems = {}));
/// <reference path="../../../Northwind/Supplier/SupplierGrid.ts" />
var FormulationManagementSystems;
(function (FormulationManagementSystems) {
    var BasicSamples;
    (function (BasicSamples) {
        /**
         * A readonly grid that launches ReadOnlyDialog
         */
        var ReadOnlyGrid = (function (_super) {
            __extends(ReadOnlyGrid, _super);
            function ReadOnlyGrid(container) {
                return _super.call(this, container) || this;
            }
            ReadOnlyGrid.prototype.getDialogType = function () { return BasicSamples.ReadOnlyDialog; };
            /**
             * Removing add button from grid using its css class
             */
            ReadOnlyGrid.prototype.getButtons = function () {
                var buttons = _super.prototype.getButtons.call(this);
                buttons.splice(Q.indexOf(buttons, function (x) { return x.cssClass == "add-button"; }), 1);
                return buttons;
            };
            return ReadOnlyGrid;
        }(FormulationManagementSystems.Northwind.SupplierGrid));
        ReadOnlyGrid = __decorate([
            Serenity.Decorators.registerClass()
        ], ReadOnlyGrid);
        BasicSamples.ReadOnlyGrid = ReadOnlyGrid;
    })(BasicSamples = FormulationManagementSystems.BasicSamples || (FormulationManagementSystems.BasicSamples = {}));
})(FormulationManagementSystems || (FormulationManagementSystems = {}));
var FormulationManagementSystems;
(function (FormulationManagementSystems) {
    var Northwind;
    (function (Northwind) {
        var CustomerDialog = (function (_super) {
            __extends(CustomerDialog, _super);
            function CustomerDialog() {
                var _this = _super.call(this) || this;
                _this.form = new Northwind.CustomerForm(_this.idPrefix);
                _this.ordersGrid = new Northwind.CustomerOrdersGrid(_this.byId('OrdersGrid'));
                // force order dialog to open in Dialog mode instead of Panel mode
                // which is set as default on OrderDialog with @panelAttribute
                _this.ordersGrid.openDialogsAsPanel = false;
                _this.byId('NoteList').closest('.field').hide().end().appendTo(_this.byId('TabNotes'));
                FormulationManagementSystems.DialogUtils.pendingChangesConfirmation(_this.element, function () { return _this.getSaveState() != _this.loadedState; });
                return _this;
            }
            CustomerDialog.prototype.getFormKey = function () { return Northwind.CustomerForm.formKey; };
            CustomerDialog.prototype.getIdProperty = function () { return Northwind.CustomerRow.idProperty; };
            CustomerDialog.prototype.getLocalTextPrefix = function () { return Northwind.CustomerRow.localTextPrefix; };
            CustomerDialog.prototype.getNameProperty = function () { return Northwind.CustomerRow.nameProperty; };
            CustomerDialog.prototype.getService = function () { return Northwind.CustomerService.baseUrl; };
            CustomerDialog.prototype.getSaveState = function () {
                try {
                    return $.toJSON(this.getSaveEntity());
                }
                catch (e) {
                    return null;
                }
            };
            CustomerDialog.prototype.loadResponse = function (data) {
                _super.prototype.loadResponse.call(this, data);
                this.loadedState = this.getSaveState();
            };
            CustomerDialog.prototype.loadEntity = function (entity) {
                _super.prototype.loadEntity.call(this, entity);
                Serenity.TabsExtensions.setDisabled(this.tabs, 'Orders', this.isNewOrDeleted());
                this.ordersGrid.customerID = entity.CustomerID;
            };
            CustomerDialog.prototype.onSaveSuccess = function (response) {
                _super.prototype.onSaveSuccess.call(this, response);
                Q.reloadLookup('Northwind.Customer');
            };
            return CustomerDialog;
        }(Serenity.EntityDialog));
        CustomerDialog = __decorate([
            Serenity.Decorators.registerClass(),
            Serenity.Decorators.panel()
        ], CustomerDialog);
        Northwind.CustomerDialog = CustomerDialog;
    })(Northwind = FormulationManagementSystems.Northwind || (FormulationManagementSystems.Northwind = {}));
})(FormulationManagementSystems || (FormulationManagementSystems = {}));
/// <reference path="../../../Northwind/Customer/CustomerDialog.ts" />
var FormulationManagementSystems;
(function (FormulationManagementSystems) {
    var BasicSamples;
    (function (BasicSamples) {
        var SerialAutoNumberDialog = (function (_super) {
            __extends(SerialAutoNumberDialog, _super);
            function SerialAutoNumberDialog() {
                var _this = _super.call(this) || this;
                _this.form.CustomerID.element.on('keyup', function (e) {
                    // only auto number when a key between 'A' and 'Z' is pressed
                    if (e.which >= 65 && e.which <= 90)
                        _this.getNextNumber();
                });
                return _this;
            }
            SerialAutoNumberDialog.prototype.afterLoadEntity = function () {
                _super.prototype.afterLoadEntity.call(this);
                // fill next number in new record mode
                if (this.isNew())
                    this.getNextNumber();
            };
            SerialAutoNumberDialog.prototype.getNextNumber = function () {
                var _this = this;
                var val = Q.trimToNull(this.form.CustomerID.value);
                // we will only get next number when customer ID is empty or 1 character in length
                if (!val || val.length <= 1) {
                    // if no customer ID yet (new record mode probably) use 'C' as a prefix
                    var prefix = (val || 'C').toUpperCase();
                    // call our service, see CustomerEndpoint.cs and CustomerRepository.cs
                    FormulationManagementSystems.Northwind.CustomerService.GetNextNumber({
                        Prefix: prefix,
                        Length: 5 // we want service to search for and return serials of 5 in length
                    }, function (response) {
                        _this.form.CustomerID.value = response.Serial;
                        // this is to mark numerical part after prefix
                        _this.form.CustomerID.element[0].setSelectionRange(prefix.length, response.Serial.length);
                    });
                }
            };
            return SerialAutoNumberDialog;
        }(FormulationManagementSystems.Northwind.CustomerDialog));
        SerialAutoNumberDialog = __decorate([
            Serenity.Decorators.registerClass()
        ], SerialAutoNumberDialog);
        BasicSamples.SerialAutoNumberDialog = SerialAutoNumberDialog;
    })(BasicSamples = FormulationManagementSystems.BasicSamples || (FormulationManagementSystems.BasicSamples = {}));
})(FormulationManagementSystems || (FormulationManagementSystems = {}));
var FormulationManagementSystems;
(function (FormulationManagementSystems) {
    var Northwind;
    (function (Northwind) {
        var CustomerGrid = (function (_super) {
            __extends(CustomerGrid, _super);
            function CustomerGrid(container) {
                return _super.call(this, container) || this;
            }
            CustomerGrid.prototype.getColumnsKey = function () { return "Northwind.Customer"; };
            CustomerGrid.prototype.getDialogType = function () { return Northwind.CustomerDialog; };
            CustomerGrid.prototype.getIdProperty = function () { return Northwind.CustomerRow.idProperty; };
            CustomerGrid.prototype.getLocalTextPrefix = function () { return Northwind.CustomerRow.localTextPrefix; };
            CustomerGrid.prototype.getService = function () { return Northwind.CustomerService.baseUrl; };
            CustomerGrid.prototype.getButtons = function () {
                var _this = this;
                var buttons = _super.prototype.getButtons.call(this);
                buttons.push(FormulationManagementSystems.Common.ExcelExportHelper.createToolButton({
                    grid: this,
                    onViewSubmit: function () { return _this.onViewSubmit(); },
                    service: 'Northwind/Customer/ListExcel',
                    separator: true
                }));
                buttons.push(FormulationManagementSystems.Common.PdfExportHelper.createToolButton({
                    grid: this,
                    onViewSubmit: function () { return _this.onViewSubmit(); }
                }));
                return buttons;
            };
            return CustomerGrid;
        }(Serenity.EntityGrid));
        CustomerGrid = __decorate([
            Serenity.Decorators.registerClass(),
            Serenity.Decorators.filterable()
        ], CustomerGrid);
        Northwind.CustomerGrid = CustomerGrid;
    })(Northwind = FormulationManagementSystems.Northwind || (FormulationManagementSystems.Northwind = {}));
})(FormulationManagementSystems || (FormulationManagementSystems = {}));
/// <reference path="../../../Northwind/Customer/CustomerGrid.ts" />
var FormulationManagementSystems;
(function (FormulationManagementSystems) {
    var BasicSamples;
    (function (BasicSamples) {
        /**
         * Subclass of CustomerGrid to override dialog type to SerialAutoNumberDialog
         */
        var SerialAutoNumberGrid = (function (_super) {
            __extends(SerialAutoNumberGrid, _super);
            function SerialAutoNumberGrid(container) {
                return _super.call(this, container) || this;
            }
            SerialAutoNumberGrid.prototype.getDialogType = function () { return BasicSamples.SerialAutoNumberDialog; };
            return SerialAutoNumberGrid;
        }(FormulationManagementSystems.Northwind.CustomerGrid));
        SerialAutoNumberGrid = __decorate([
            Serenity.Decorators.registerClass()
        ], SerialAutoNumberGrid);
        BasicSamples.SerialAutoNumberGrid = SerialAutoNumberGrid;
    })(BasicSamples = FormulationManagementSystems.BasicSamples || (FormulationManagementSystems.BasicSamples = {}));
})(FormulationManagementSystems || (FormulationManagementSystems = {}));
var FormulationManagementSystems;
(function (FormulationManagementSystems) {
    var Common;
    (function (Common) {
        var GridEditorDialog = (function (_super) {
            __extends(GridEditorDialog, _super);
            function GridEditorDialog() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            GridEditorDialog.prototype.getIdProperty = function () { return "__id"; };
            GridEditorDialog.prototype.destroy = function () {
                this.onSave = null;
                this.onDelete = null;
                _super.prototype.destroy.call(this);
            };
            GridEditorDialog.prototype.updateInterface = function () {
                _super.prototype.updateInterface.call(this);
                // apply changes button doesn't work properly with in-memory grids yet
                if (this.applyChangesButton) {
                    this.applyChangesButton.hide();
                }
            };
            GridEditorDialog.prototype.saveHandler = function (options, callback) {
                this.onSave && this.onSave(options, callback);
            };
            GridEditorDialog.prototype.deleteHandler = function (options, callback) {
                this.onDelete && this.onDelete(options, callback);
            };
            return GridEditorDialog;
        }(Serenity.EntityDialog));
        GridEditorDialog = __decorate([
            Serenity.Decorators.registerClass()
        ], GridEditorDialog);
        Common.GridEditorDialog = GridEditorDialog;
    })(Common = FormulationManagementSystems.Common || (FormulationManagementSystems.Common = {}));
})(FormulationManagementSystems || (FormulationManagementSystems = {}));
/// <reference path="../../../Common/Helpers/GridEditorDialog.ts" />
var FormulationManagementSystems;
(function (FormulationManagementSystems) {
    var BasicSamples;
    (function (BasicSamples) {
        var ChangingLookupTextDialog = (function (_super) {
            __extends(ChangingLookupTextDialog, _super);
            function ChangingLookupTextDialog() {
                var _this = _super.call(this) || this;
                _this.form = new BasicSamples.ChangingLookupTextForm(_this.idPrefix);
                _this.form.ProductID.changeSelect2(function (e) {
                    var productID = Q.toId(_this.form.ProductID.value);
                    if (productID != null) {
                        _this.form.UnitPrice.value = FormulationManagementSystems.Northwind.ProductRow.getLookup().itemById[productID].UnitPrice;
                    }
                });
                _this.form.Discount.addValidationRule(_this.uniqueName, function (e) {
                    var price = _this.form.UnitPrice.value;
                    var quantity = _this.form.Quantity.value;
                    var discount = _this.form.Discount.value;
                    if (price != null && quantity != null && discount != null &&
                        discount > 0 && discount >= price * quantity) {
                        return "Discount can't be higher than total price!";
                    }
                });
                return _this;
            }
            ChangingLookupTextDialog.prototype.getFormKey = function () { return BasicSamples.ChangingLookupTextForm.formKey; };
            ChangingLookupTextDialog.prototype.getLocalTextPrefix = function () { return FormulationManagementSystems.Northwind.OrderDetailRow.localTextPrefix; };
            ChangingLookupTextDialog.prototype.updateInterface = function () {
                _super.prototype.updateInterface.call(this);
                this.toolbar.findButton('apply-changes-button').hide();
                this.toolbar.findButton('save-and-close-button').hide();
            };
            return ChangingLookupTextDialog;
        }(FormulationManagementSystems.Common.GridEditorDialog));
        ChangingLookupTextDialog = __decorate([
            Serenity.Decorators.registerClass()
        ], ChangingLookupTextDialog);
        BasicSamples.ChangingLookupTextDialog = ChangingLookupTextDialog;
    })(BasicSamples = FormulationManagementSystems.BasicSamples || (FormulationManagementSystems.BasicSamples = {}));
})(FormulationManagementSystems || (FormulationManagementSystems = {}));
var FormulationManagementSystems;
(function (FormulationManagementSystems) {
    var BasicSamples;
    (function (BasicSamples) {
        /**
         * Our custom product editor type
         */
        var ChangingLookupTextEditor = (function (_super) {
            __extends(ChangingLookupTextEditor, _super);
            function ChangingLookupTextEditor(container, options) {
                return _super.call(this, container, options) || this;
            }
            ChangingLookupTextEditor.prototype.getLookupKey = function () {
                return FormulationManagementSystems.Northwind.ProductRow.lookupKey;
            };
            ChangingLookupTextEditor.prototype.getItemText = function (item, lookup) {
                return _super.prototype.getItemText.call(this, item, lookup) +
                    ' (' +
                    '$' + Q.formatNumber(item.UnitPrice, '#,##0.00') +
                    ', ' + (item.UnitsInStock > 0 ? (item.UnitsInStock + ' in stock') : 'out of stock') +
                    ', ' + (item.SupplierCompanyName || 'Unknown') +
                    ')';
            };
            return ChangingLookupTextEditor;
        }(Serenity.LookupEditorBase));
        ChangingLookupTextEditor = __decorate([
            Serenity.Decorators.registerEditor()
        ], ChangingLookupTextEditor);
        BasicSamples.ChangingLookupTextEditor = ChangingLookupTextEditor;
    })(BasicSamples = FormulationManagementSystems.BasicSamples || (FormulationManagementSystems.BasicSamples = {}));
})(FormulationManagementSystems || (FormulationManagementSystems = {}));
/// <reference path="../../Common/Helpers/GridEditorDialog.ts" />
var FormulationManagementSystems;
(function (FormulationManagementSystems) {
    var Northwind;
    (function (Northwind) {
        var OrderDetailDialog = (function (_super) {
            __extends(OrderDetailDialog, _super);
            function OrderDetailDialog() {
                var _this = _super.call(this) || this;
                _this.form = new Northwind.OrderDetailForm(_this.idPrefix);
                _this.form.ProductID.changeSelect2(function (e) {
                    var productID = Q.toId(_this.form.ProductID.value);
                    if (productID != null) {
                        _this.form.UnitPrice.value = Northwind.ProductRow.getLookup().itemById[productID].UnitPrice;
                    }
                });
                _this.form.Discount.addValidationRule(_this.uniqueName, function (e) {
                    var price = _this.form.UnitPrice.value;
                    var quantity = _this.form.Quantity.value;
                    var discount = _this.form.Discount.value;
                    if (price != null && quantity != null && discount != null &&
                        discount > 0 && discount >= price * quantity) {
                        return "Discount can't be higher than total price!";
                    }
                });
                return _this;
            }
            OrderDetailDialog.prototype.getFormKey = function () { return Northwind.OrderDetailForm.formKey; };
            OrderDetailDialog.prototype.getLocalTextPrefix = function () { return Northwind.OrderDetailRow.localTextPrefix; };
            return OrderDetailDialog;
        }(FormulationManagementSystems.Common.GridEditorDialog));
        OrderDetailDialog = __decorate([
            Serenity.Decorators.registerClass()
        ], OrderDetailDialog);
        Northwind.OrderDetailDialog = OrderDetailDialog;
    })(Northwind = FormulationManagementSystems.Northwind || (FormulationManagementSystems.Northwind = {}));
})(FormulationManagementSystems || (FormulationManagementSystems = {}));
/// <reference path="../../../Northwind/OrderDetail/OrderDetailDialog.ts" />
var FormulationManagementSystems;
(function (FormulationManagementSystems) {
    var BasicSamples;
    (function (BasicSamples) {
        /**
         * Our subclass of order detail dialog with a CategoryID property
         * that will be used to set CascadeValue of product editor
         */
        var FilteredLookupOrderDetailDialog = (function (_super) {
            __extends(FilteredLookupOrderDetailDialog, _super);
            function FilteredLookupOrderDetailDialog() {
                var _this = _super.call(this) || this;
                _this.form = new FormulationManagementSystems.Northwind.OrderDetailForm(_this.idPrefix);
                // we can set cascade field in constructor
                // we could also use FilterField but in this case, when CategoryID is null
                // lookup editor would show all products in any category
                _this.form.ProductID.cascadeField = FormulationManagementSystems.Northwind.ProductRow.Fields.CategoryID;
                return _this;
                // but CategoryID value is not yet available here as detail editor will set it 
                // after calling constructor (creating a detail dialog) so we'll use BeforeLoadEntity
            }
            /**
             * This method is called just before an entity is loaded to dialog
             * This is also called for new record mode with an empty entity
             */
            FilteredLookupOrderDetailDialog.prototype.beforeLoadEntity = function (entity) {
                _super.prototype.beforeLoadEntity.call(this, entity);
                // setting cascade value here
                // make sure you have [LookupInclude] on CategoryID property of ProductRow
                // otherwise this field won't be available in lookup script (will always be null),
                // so can't be filtered and you'll end up with an empty product list.
                this.form.ProductID.cascadeValue = this.categoryID;
            };
            return FilteredLookupOrderDetailDialog;
        }(FormulationManagementSystems.Northwind.OrderDetailDialog));
        FilteredLookupOrderDetailDialog = __decorate([
            Serenity.Decorators.registerClass()
        ], FilteredLookupOrderDetailDialog);
        BasicSamples.FilteredLookupOrderDetailDialog = FilteredLookupOrderDetailDialog;
    })(BasicSamples = FormulationManagementSystems.BasicSamples || (FormulationManagementSystems.BasicSamples = {}));
})(FormulationManagementSystems || (FormulationManagementSystems = {}));
var FormulationManagementSystems;
(function (FormulationManagementSystems) {
    var Common;
    (function (Common) {
        var GridEditorBase = (function (_super) {
            __extends(GridEditorBase, _super);
            function GridEditorBase(container) {
                var _this = _super.call(this, container) || this;
                _this.nextId = 1;
                return _this;
            }
            GridEditorBase.prototype.getIdProperty = function () { return "__id"; };
            GridEditorBase.prototype.id = function (entity) {
                return entity[this.getIdProperty()];
            };
            GridEditorBase.prototype.getNextId = function () {
                return "`" + this.nextId++;
            };
            GridEditorBase.prototype.setNewId = function (entity) {
                entity[this.getIdProperty()] = this.getNextId();
            };
            GridEditorBase.prototype.save = function (opt, callback) {
                var _this = this;
                var request = opt.request;
                var row = Q.deepClone(request.Entity);
                var id = this.id(row);
                if (id == null) {
                    row[this.getIdProperty()] = this.getNextId();
                }
                if (!this.validateEntity(row, id)) {
                    return;
                }
                var items = this.view.getItems().slice();
                if (id == null) {
                    items.push(row);
                }
                else {
                    var index = Q.indexOf(items, function (x) { return _this.id(x) === id; });
                    items[index] = Q.deepClone({}, items[index], row);
                }
                this.setEntities(items);
                callback({});
            };
            GridEditorBase.prototype.deleteEntity = function (id) {
                this.view.deleteItem(id);
                return true;
            };
            GridEditorBase.prototype.validateEntity = function (row, id) {
                return true;
            };
            GridEditorBase.prototype.setEntities = function (items) {
                this.view.setItems(items, true);
            };
            GridEditorBase.prototype.getNewEntity = function () {
                return {};
            };
            GridEditorBase.prototype.getButtons = function () {
                var _this = this;
                return [{
                        title: this.getAddButtonCaption(),
                        cssClass: 'add-button',
                        onClick: function () {
                            _this.createEntityDialog(_this.getItemType(), function (dlg) {
                                var dialog = dlg;
                                dialog.onSave = function (opt, callback) { return _this.save(opt, callback); };
                                dialog.loadEntityAndOpenDialog(_this.getNewEntity());
                            });
                        }
                    }];
            };
            GridEditorBase.prototype.editItem = function (entityOrId) {
                var _this = this;
                var id = entityOrId;
                var item = this.view.getItemById(id);
                this.createEntityDialog(this.getItemType(), function (dlg) {
                    var dialog = dlg;
                    dialog.onDelete = function (opt, callback) {
                        if (!_this.deleteEntity(id)) {
                            return;
                        }
                        callback({});
                    };
                    dialog.onSave = function (opt, callback) { return _this.save(opt, callback); };
                    dialog.loadEntityAndOpenDialog(item);
                });
                ;
            };
            GridEditorBase.prototype.getEditValue = function (property, target) {
                target[property.name] = this.value;
            };
            GridEditorBase.prototype.setEditValue = function (source, property) {
                this.value = source[property.name];
            };
            Object.defineProperty(GridEditorBase.prototype, "value", {
                get: function () {
                    var p = this.getIdProperty();
                    return this.view.getItems().map(function (x) {
                        var y = Q.deepClone(x);
                        var id = y[p];
                        if (id && id.toString().charAt(0) == '`')
                            delete y[p];
                        return y;
                    });
                },
                set: function (value) {
                    var _this = this;
                    var p = this.getIdProperty();
                    this.view.setItems((value || []).map(function (x) {
                        var y = Q.deepClone(x);
                        if (y[p] == null)
                            y[p] = "`" + _this.getNextId();
                        return y;
                    }), true);
                },
                enumerable: true,
                configurable: true
            });
            GridEditorBase.prototype.getGridCanLoad = function () {
                return false;
            };
            GridEditorBase.prototype.usePager = function () {
                return false;
            };
            GridEditorBase.prototype.getInitialTitle = function () {
                return null;
            };
            GridEditorBase.prototype.createQuickSearchInput = function () {
            };
            return GridEditorBase;
        }(Serenity.EntityGrid));
        GridEditorBase = __decorate([
            Serenity.Decorators.registerClass([Serenity.IGetEditValue, Serenity.ISetEditValue]),
            Serenity.Decorators.editor(),
            Serenity.Decorators.element("<div/>")
        ], GridEditorBase);
        Common.GridEditorBase = GridEditorBase;
    })(Common = FormulationManagementSystems.Common || (FormulationManagementSystems.Common = {}));
})(FormulationManagementSystems || (FormulationManagementSystems = {}));
/// <reference path="../../Common/Helpers/GridEditorBase.ts" />
var FormulationManagementSystems;
(function (FormulationManagementSystems) {
    var Northwind;
    (function (Northwind) {
        var OrderDetailsEditor = (function (_super) {
            __extends(OrderDetailsEditor, _super);
            function OrderDetailsEditor(container) {
                return _super.call(this, container) || this;
            }
            OrderDetailsEditor.prototype.getColumnsKey = function () { return "Northwind.OrderDetail"; };
            OrderDetailsEditor.prototype.getDialogType = function () { return Northwind.OrderDetailDialog; };
            OrderDetailsEditor.prototype.getLocalTextPrefix = function () { return Northwind.OrderDetailRow.localTextPrefix; };
            OrderDetailsEditor.prototype.validateEntity = function (row, id) {
                row.ProductID = Q.toId(row.ProductID);
                var sameProduct = Q.tryFirst(this.view.getItems(), function (x) { return x.ProductID === row.ProductID; });
                if (sameProduct && this.id(sameProduct) !== id) {
                    Q.alert('This product is already in order details!');
                    return false;
                }
                row.ProductName = Northwind.ProductRow.getLookup().itemById[row.ProductID].ProductName;
                row.LineTotal = (row.Quantity || 0) * (row.UnitPrice || 0) - (row.Discount || 0);
                return true;
            };
            return OrderDetailsEditor;
        }(FormulationManagementSystems.Common.GridEditorBase));
        OrderDetailsEditor = __decorate([
            Serenity.Decorators.registerClass()
        ], OrderDetailsEditor);
        Northwind.OrderDetailsEditor = OrderDetailsEditor;
    })(Northwind = FormulationManagementSystems.Northwind || (FormulationManagementSystems.Northwind = {}));
})(FormulationManagementSystems || (FormulationManagementSystems = {}));
/// <reference path="../../../Northwind/OrderDetail/OrderDetailsEditor.ts" />
var FormulationManagementSystems;
(function (FormulationManagementSystems) {
    var BasicSamples;
    (function (BasicSamples) {
        /**
         * Our subclass of Order Details editor with a CategoryID property
         */
        var FilteredLookupDetailEditor = (function (_super) {
            __extends(FilteredLookupDetailEditor, _super);
            function FilteredLookupDetailEditor(container) {
                return _super.call(this, container) || this;
            }
            FilteredLookupDetailEditor.prototype.getDialogType = function () { return BasicSamples.FilteredLookupOrderDetailDialog; };
            /**
             * This method is called to initialize an edit dialog created by
             * grid editor when Add button or an edit link is clicked
             * We have an opportunity here to pass CategoryID to edit dialog
             */
            FilteredLookupDetailEditor.prototype.initEntityDialog = function (itemType, dialog) {
                _super.prototype.initEntityDialog.call(this, itemType, dialog);
                // passing category ID from grid editor to detail dialog
                dialog.categoryID = this.categoryID;
            };
            return FilteredLookupDetailEditor;
        }(FormulationManagementSystems.Northwind.OrderDetailsEditor));
        FilteredLookupDetailEditor = __decorate([
            Serenity.Decorators.registerEditor()
        ], FilteredLookupDetailEditor);
        BasicSamples.FilteredLookupDetailEditor = FilteredLookupDetailEditor;
    })(BasicSamples = FormulationManagementSystems.BasicSamples || (FormulationManagementSystems.BasicSamples = {}));
})(FormulationManagementSystems || (FormulationManagementSystems = {}));
var FormulationManagementSystems;
(function (FormulationManagementSystems) {
    var BasicSamples;
    (function (BasicSamples) {
        /**
         * Basic order dialog with a category selection
         */
        var FilteredLookupInDetailDialog = (function (_super) {
            __extends(FilteredLookupInDetailDialog, _super);
            function FilteredLookupInDetailDialog() {
                var _this = _super.call(this) || this;
                _this.form = new BasicSamples.FilteredLookupInDetailForm(_this.idPrefix);
                _this.form.CategoryID.change(function (e) {
                    _this.form.DetailList.categoryID = Q.toId(_this.form.CategoryID.value);
                });
                return _this;
            }
            FilteredLookupInDetailDialog.prototype.getFormKey = function () { return BasicSamples.FilteredLookupInDetailForm.formKey; };
            FilteredLookupInDetailDialog.prototype.getIdProperty = function () { return FormulationManagementSystems.Northwind.OrderRow.idProperty; };
            FilteredLookupInDetailDialog.prototype.getLocalTextPrefix = function () { return FormulationManagementSystems.Northwind.OrderRow.localTextPrefix; };
            FilteredLookupInDetailDialog.prototype.getNameProperty = function () { return FormulationManagementSystems.Northwind.OrderRow.nameProperty; };
            FilteredLookupInDetailDialog.prototype.getService = function () { return FormulationManagementSystems.Northwind.OrderService.baseUrl; };
            return FilteredLookupInDetailDialog;
        }(Serenity.EntityDialog));
        FilteredLookupInDetailDialog = __decorate([
            Serenity.Decorators.registerClass()
        ], FilteredLookupInDetailDialog);
        BasicSamples.FilteredLookupInDetailDialog = FilteredLookupInDetailDialog;
    })(BasicSamples = FormulationManagementSystems.BasicSamples || (FormulationManagementSystems.BasicSamples = {}));
})(FormulationManagementSystems || (FormulationManagementSystems = {}));
/// <reference path="../../../Northwind/Order/OrderGrid.ts" />
var FormulationManagementSystems;
(function (FormulationManagementSystems) {
    var BasicSamples;
    (function (BasicSamples) {
        /**
         * Subclass of OrderGrid to override dialog type to FilteredLookupInDetailDialog
         */
        var FilteredLookupInDetailGrid = (function (_super) {
            __extends(FilteredLookupInDetailGrid, _super);
            function FilteredLookupInDetailGrid(container) {
                return _super.call(this, container) || this;
            }
            FilteredLookupInDetailGrid.prototype.getDialogType = function () { return BasicSamples.FilteredLookupInDetailDialog; };
            return FilteredLookupInDetailGrid;
        }(FormulationManagementSystems.Northwind.OrderGrid));
        FilteredLookupInDetailGrid = __decorate([
            Serenity.Decorators.registerClass()
        ], FilteredLookupInDetailGrid);
        BasicSamples.FilteredLookupInDetailGrid = FilteredLookupInDetailGrid;
    })(BasicSamples = FormulationManagementSystems.BasicSamples || (FormulationManagementSystems.BasicSamples = {}));
})(FormulationManagementSystems || (FormulationManagementSystems = {}));
/// <reference path="../../../Northwind/Product/ProductDialog.ts" />
var FormulationManagementSystems;
(function (FormulationManagementSystems) {
    var BasicSamples;
    (function (BasicSamples) {
        /**
         * This is our custom product dialog that uses a different product form
         * (LookupFilterByMultipleForm) with our special category editor.
         */
        var LookupFilterByMultipleDialog = (function (_super) {
            __extends(LookupFilterByMultipleDialog, _super);
            function LookupFilterByMultipleDialog() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            LookupFilterByMultipleDialog.prototype.getFormKey = function () { return BasicSamples.LookupFilterByMultipleForm.formKey; };
            return LookupFilterByMultipleDialog;
        }(FormulationManagementSystems.Northwind.ProductDialog));
        LookupFilterByMultipleDialog = __decorate([
            Serenity.Decorators.registerClass()
        ], LookupFilterByMultipleDialog);
        BasicSamples.LookupFilterByMultipleDialog = LookupFilterByMultipleDialog;
    })(BasicSamples = FormulationManagementSystems.BasicSamples || (FormulationManagementSystems.BasicSamples = {}));
})(FormulationManagementSystems || (FormulationManagementSystems = {}));
/// <reference path="../../../Northwind/Product/ProductGrid.ts" />
var FormulationManagementSystems;
(function (FormulationManagementSystems) {
    var BasicSamples;
    (function (BasicSamples) {
        /**
         * Subclass of ProductGrid to override dialog type to CloneableEntityDialog
         */
        var LookupFilterByMultipleGrid = (function (_super) {
            __extends(LookupFilterByMultipleGrid, _super);
            function LookupFilterByMultipleGrid(container) {
                return _super.call(this, container) || this;
            }
            LookupFilterByMultipleGrid.prototype.getDialogType = function () { return BasicSamples.LookupFilterByMultipleDialog; };
            /**
             * This method is called just before List request is sent to service.
             * You have an opportunity here to cancel request or modify it.
             * Here we'll add a custom criteria to list request.
             */
            LookupFilterByMultipleGrid.prototype.onViewSubmit = function () {
                if (!_super.prototype.onViewSubmit.call(this)) {
                    return false;
                }
                // this has no relation to our lookup editor but as we'll allow picking only 
                // categories of Produce and Seafood in product dialog, it's better to show
                // only products from these categories in grid too
                var request = this.view.params;
                request.Criteria = Serenity.Criteria.and(request.Criteria, [['CategoryName'], 'in', [['Produce', 'Seafood']]]);
                // brackets used are important above, NOT ['CategoryName', 'in', ['Produce', 'Seafood']]
                return true;
            };
            return LookupFilterByMultipleGrid;
        }(FormulationManagementSystems.Northwind.ProductGrid));
        LookupFilterByMultipleGrid = __decorate([
            Serenity.Decorators.registerClass()
        ], LookupFilterByMultipleGrid);
        BasicSamples.LookupFilterByMultipleGrid = LookupFilterByMultipleGrid;
    })(BasicSamples = FormulationManagementSystems.BasicSamples || (FormulationManagementSystems.BasicSamples = {}));
})(FormulationManagementSystems || (FormulationManagementSystems = {}));
var FormulationManagementSystems;
(function (FormulationManagementSystems) {
    var BasicSamples;
    (function (BasicSamples) {
        /**
         * This is our category editor that will show only categories of Produce and
         * Seafood. We are subclassing LookupEditorBase which also LookupEditor
         * derives from.
         *
         * After compiling and transforming templates, this editor type will be
         * available in server side to use in our LookupFilterByMultipleForm,
         * which is a version of ProductForm that uses our custom editor.
         */
        var ProduceSeafoodCategoryEditor = (function (_super) {
            __extends(ProduceSeafoodCategoryEditor, _super);
            function ProduceSeafoodCategoryEditor(container, opt) {
                return _super.call(this, container, opt) || this;
            }
            /**
             * Normally LookupEditor requires a lookup key to determine which set of
             * lookup data to show in editor. As our editor will only show category
             * data, we lock it to category lookup key.
             */
            ProduceSeafoodCategoryEditor.prototype.getLookupKey = function () {
                return FormulationManagementSystems.Northwind.CategoryRow.lookupKey;
            };
            /**
             * Here we are filtering by category name but you could filter by any field.
             * Just make sure the fields you filter on has [LookupInclude] attribute on them,
             * otherwise their value will be null in client side as they are not sent back
             * from server in lookup script.
             */
            ProduceSeafoodCategoryEditor.prototype.getItems = function (lookup) {
                return _super.prototype.getItems.call(this, lookup).filter(function (x) {
                    return x.CategoryName === 'Produce' || x.CategoryName === 'Seafood';
                });
            };
            return ProduceSeafoodCategoryEditor;
        }(Serenity.LookupEditorBase));
        ProduceSeafoodCategoryEditor = __decorate([
            Serenity.Decorators.registerEditor()
        ], ProduceSeafoodCategoryEditor);
        BasicSamples.ProduceSeafoodCategoryEditor = ProduceSeafoodCategoryEditor;
    })(BasicSamples = FormulationManagementSystems.BasicSamples || (FormulationManagementSystems.BasicSamples = {}));
})(FormulationManagementSystems || (FormulationManagementSystems = {}));
var FormulationManagementSystems;
(function (FormulationManagementSystems) {
    var BasicSamples;
    (function (BasicSamples) {
        var HardcodedValuesDialog = (function (_super) {
            __extends(HardcodedValuesDialog, _super);
            function HardcodedValuesDialog() {
                var _this = _super.call(this) || this;
                _this.form = new BasicSamples.HardcodedValuesForm(_this.idPrefix);
                _this.dialogTitle = "Please select some value";
                _this.form.SomeValue.changeSelect2(function (e) {
                    Q.notifySuccess("You selected item with key: " + _this.form.SomeValue.value);
                });
                return _this;
            }
            HardcodedValuesDialog.prototype.getFormKey = function () { return BasicSamples.HardcodedValuesForm.formKey; };
            return HardcodedValuesDialog;
        }(Serenity.PropertyDialog));
        HardcodedValuesDialog = __decorate([
            Serenity.Decorators.registerClass()
        ], HardcodedValuesDialog);
        BasicSamples.HardcodedValuesDialog = HardcodedValuesDialog;
    })(BasicSamples = FormulationManagementSystems.BasicSamples || (FormulationManagementSystems.BasicSamples = {}));
})(FormulationManagementSystems || (FormulationManagementSystems = {}));
var FormulationManagementSystems;
(function (FormulationManagementSystems) {
    var BasicSamples;
    (function (BasicSamples) {
        /**
         * Our select editor with hardcoded values.
         *
         * When you define a new editor type, make sure you build
         * and transform templates for it to be available
         * in server side forms, e.g. [HardCodedValuesEditor]
         */
        var HardcodedValuesEditor = (function (_super) {
            __extends(HardcodedValuesEditor, _super);
            function HardcodedValuesEditor(container) {
                var _this = _super.call(this, container, null) || this;
                // add option accepts a key (id) value and display text value
                _this.addOption("key1", "Text 1");
                _this.addOption("key2", "Text 2");
                // you may also use addItem which accepts a Select2Item parameter
                _this.addItem({
                    id: "key3",
                    text: "Text 3"
                });
                // don't let selecting this one (disabled)
                _this.addItem({
                    id: "key4",
                    text: "Text 4",
                    disabled: true
                });
                return _this;
            }
            return HardcodedValuesEditor;
        }(Serenity.Select2Editor));
        HardcodedValuesEditor = __decorate([
            Serenity.Decorators.registerEditor()
        ], HardcodedValuesEditor);
        BasicSamples.HardcodedValuesEditor = HardcodedValuesEditor;
    })(BasicSamples = FormulationManagementSystems.BasicSamples || (FormulationManagementSystems.BasicSamples = {}));
})(FormulationManagementSystems || (FormulationManagementSystems = {}));
var FormulationManagementSystems;
(function (FormulationManagementSystems) {
    var BasicSamples;
    (function (BasicSamples) {
        var StaticTextBlockDialog = (function (_super) {
            __extends(StaticTextBlockDialog, _super);
            function StaticTextBlockDialog() {
                var _this = _super.call(this) || this;
                _this.form = new BasicSamples.StaticTextBlockForm(_this.idPrefix);
                _this.dialogTitle = "A form with static text blocks";
                return _this;
            }
            StaticTextBlockDialog.prototype.getFormKey = function () { return BasicSamples.StaticTextBlockForm.formKey; };
            /**
             * Here we override loadInitialEntity method to set value for "DisplayFieldValue" field.
             * If this was an EntityDialog, your field value would be originating from server side entity.
             */
            StaticTextBlockDialog.prototype.loadInitialEntity = function () {
                this.propertyGrid.load({
                    DisplayFieldValue: 'This content comes from <b>the value</b> of <em>DisplayFieldValue</em> field.'
                });
            };
            StaticTextBlockDialog.prototype.getDialogOptions = function () {
                var opt = _super.prototype.getDialogOptions.call(this);
                opt.width = 650;
                return opt;
            };
            return StaticTextBlockDialog;
        }(Serenity.PropertyDialog));
        StaticTextBlockDialog = __decorate([
            Serenity.Decorators.registerClass()
        ], StaticTextBlockDialog);
        BasicSamples.StaticTextBlockDialog = StaticTextBlockDialog;
    })(BasicSamples = FormulationManagementSystems.BasicSamples || (FormulationManagementSystems.BasicSamples = {}));
})(FormulationManagementSystems || (FormulationManagementSystems = {}));
var FormulationManagementSystems;
(function (FormulationManagementSystems) {
    var Common;
    (function (Common) {
        var BulkServiceAction = (function () {
            function BulkServiceAction() {
            }
            BulkServiceAction.prototype.createProgressDialog = function () {
                this.progressDialog = new FormulationManagementSystems.BasicProgressDialog();
                this.progressDialog.dialogOpen();
                this.progressDialog.max = this.keys.length;
                this.progressDialog.value = 0;
            };
            BulkServiceAction.prototype.getConfirmationFormat = function () {
                return Q.text('Site.BulkServiceAction.ConfirmationFormat');
            };
            BulkServiceAction.prototype.getConfirmationMessage = function (targetCount) {
                return Q.format(this.getConfirmationFormat(), targetCount);
            };
            BulkServiceAction.prototype.confirm = function (targetCount, action) {
                Q.confirm(this.getConfirmationMessage(targetCount), action);
            };
            BulkServiceAction.prototype.getNothingToProcessMessage = function () {
                return Q.text('Site.BulkServiceAction.NothingToProcess');
            };
            BulkServiceAction.prototype.nothingToProcess = function () {
                Q.notifyError(this.getNothingToProcessMessage());
            };
            BulkServiceAction.prototype.getParallelRequests = function () {
                return 1;
            };
            BulkServiceAction.prototype.getBatchSize = function () {
                return 1;
            };
            BulkServiceAction.prototype.startParallelExecution = function () {
                this.createProgressDialog();
                this.successCount = 0;
                this.errorCount = 0;
                this.pendingRequests = 0;
                this.completedRequests = 0;
                this.errorCount = 0;
                this.errorByKey = {};
                this.queue = this.keys.slice();
                this.queueIndex = 0;
                var parallelRequests = this.getParallelRequests();
                while (parallelRequests-- > 0) {
                    this.executeNextBatch();
                }
            };
            BulkServiceAction.prototype.serviceCallCleanup = function () {
                this.pendingRequests--;
                this.completedRequests++;
                var title = Q.text((this.progressDialog.cancelled ?
                    'Site.BasicProgressDialog.CancelTitle' : 'Site.BasicProgressDialog.PleaseWait'));
                title += ' (';
                if (this.successCount > 0) {
                    title += Q.format(Q.text('Site.BulkServiceAction.SuccessCount'), this.successCount);
                }
                if (this.errorCount > 0) {
                    if (this.successCount > 0) {
                        title += ', ';
                    }
                    title += Q.format(Q.text('Site.BulkServiceAction.ErrorCount'), this.errorCount);
                }
                this.progressDialog.title = title + ')';
                this.progressDialog.value = this.successCount + this.errorCount;
                if (!this.progressDialog.cancelled && this.progressDialog.value < this.keys.length) {
                    this.executeNextBatch();
                }
                else if (this.pendingRequests === 0) {
                    this.progressDialog.dialogClose();
                    this.showResults();
                    if (this.done) {
                        this.done();
                        this.done = null;
                    }
                }
            };
            BulkServiceAction.prototype.executeForBatch = function (batch) {
            };
            BulkServiceAction.prototype.executeNextBatch = function () {
                var batchSize = this.getBatchSize();
                var batch = [];
                while (true) {
                    if (batch.length >= batchSize) {
                        break;
                    }
                    if (this.queueIndex >= this.queue.length) {
                        break;
                    }
                    batch.push(this.queue[this.queueIndex++]);
                }
                if (batch.length > 0) {
                    this.pendingRequests++;
                    this.executeForBatch(batch);
                }
            };
            BulkServiceAction.prototype.getAllHadErrorsFormat = function () {
                return Q.text('Site.BulkServiceAction.AllHadErrorsFormat');
            };
            BulkServiceAction.prototype.showAllHadErrors = function () {
                Q.notifyError(Q.format(this.getAllHadErrorsFormat(), this.errorCount));
            };
            BulkServiceAction.prototype.getSomeHadErrorsFormat = function () {
                return Q.text('Site.BulkServiceAction.SomeHadErrorsFormat');
            };
            BulkServiceAction.prototype.showSomeHadErrors = function () {
                Q.notifyWarning(Q.format(this.getSomeHadErrorsFormat(), this.successCount, this.errorCount));
            };
            BulkServiceAction.prototype.getAllSuccessFormat = function () {
                return Q.text('Site.BulkServiceAction.AllSuccessFormat');
            };
            BulkServiceAction.prototype.showAllSuccess = function () {
                Q.notifySuccess(Q.format(this.getAllSuccessFormat(), this.successCount));
            };
            BulkServiceAction.prototype.showResults = function () {
                if (this.errorCount === 0 && this.successCount === 0) {
                    this.nothingToProcess();
                    return;
                }
                if (this.errorCount > 0 && this.successCount === 0) {
                    this.showAllHadErrors();
                    return;
                }
                if (this.errorCount > 0) {
                    this.showSomeHadErrors();
                    return;
                }
                this.showAllSuccess();
            };
            BulkServiceAction.prototype.execute = function (keys) {
                var _this = this;
                this.keys = keys;
                if (this.keys.length === 0) {
                    this.nothingToProcess();
                    return;
                }
                this.confirm(this.keys.length, function () { return _this.startParallelExecution(); });
            };
            BulkServiceAction.prototype.get_successCount = function () {
                return this.successCount;
            };
            BulkServiceAction.prototype.set_successCount = function (value) {
                this.successCount = value;
            };
            BulkServiceAction.prototype.get_errorCount = function () {
                return this.errorCount;
            };
            BulkServiceAction.prototype.set_errorCount = function (value) {
                this.errorCount = value;
            };
            return BulkServiceAction;
        }());
        Common.BulkServiceAction = BulkServiceAction;
    })(Common = FormulationManagementSystems.Common || (FormulationManagementSystems.Common = {}));
})(FormulationManagementSystems || (FormulationManagementSystems = {}));
/// <reference path="../../../Common/Helpers/BulkServiceAction.ts" />
var FormulationManagementSystems;
(function (FormulationManagementSystems) {
    var BasicSamples;
    (function (BasicSamples) {
        var OrderBulkAction = (function (_super) {
            __extends(OrderBulkAction, _super);
            function OrderBulkAction() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            /**
             * This controls how many service requests will be used in parallel.
             * Determine this number based on how many requests your server
             * might be able to handle, and amount of wait on external resources.
             */
            OrderBulkAction.prototype.getParallelRequests = function () {
                return 10;
            };
            /**
             * These number of records IDs will be sent to your service in one
             * service call. If your service is designed to handle one record only,
             * set it to 1. But note that, if you have 5000 records, this will
             * result in 5000 service calls / requests.
             */
            OrderBulkAction.prototype.getBatchSize = function () {
                return 5;
            };
            /**
             * This is where you should call your service.
             * Batch parameter contains the selected order IDs
             * that should be processed in this service call.
             */
            OrderBulkAction.prototype.executeForBatch = function (batch) {
                var _this = this;
                BasicSamples.BasicSamplesService.OrderBulkAction({
                    OrderIDs: batch.map(function (x) { return Q.parseInteger(x); })
                }, function (response) { return _this.set_successCount(_this.get_successCount() + batch.length); }, {
                    blockUI: false,
                    onError: function (response) { return _this.set_errorCount(_this.get_errorCount() + batch.length); },
                    onCleanup: function () { return _this.serviceCallCleanup(); }
                });
            };
            return OrderBulkAction;
        }(FormulationManagementSystems.Common.BulkServiceAction));
        BasicSamples.OrderBulkAction = OrderBulkAction;
    })(BasicSamples = FormulationManagementSystems.BasicSamples || (FormulationManagementSystems.BasicSamples = {}));
})(FormulationManagementSystems || (FormulationManagementSystems = {}));
/// <reference path="../../../Northwind/Order/OrderGrid.ts" />
/// <reference path="OrderBulkAction.ts" />
var FormulationManagementSystems;
(function (FormulationManagementSystems) {
    var BasicSamples;
    (function (BasicSamples) {
        var CancellableBulkActionGrid = (function (_super) {
            __extends(CancellableBulkActionGrid, _super);
            function CancellableBulkActionGrid(container) {
                return _super.call(this, container) || this;
            }
            CancellableBulkActionGrid.prototype.createToolbarExtensions = function () {
                _super.prototype.createToolbarExtensions.call(this);
                this.rowSelection = new Serenity.GridRowSelectionMixin(this);
            };
            CancellableBulkActionGrid.prototype.getButtons = function () {
                var _this = this;
                return [{
                        title: 'Perform Bulk Action on Selected Orders',
                        cssClass: 'send-button',
                        onClick: function () {
                            if (!_this.onViewSubmit()) {
                                return;
                            }
                            var action = new BasicSamples.OrderBulkAction();
                            action.done = function () { return _this.rowSelection.resetCheckedAndRefresh(); };
                            action.execute(_this.rowSelection.getSelectedKeys());
                        }
                    }];
            };
            CancellableBulkActionGrid.prototype.getColumns = function () {
                var _this = this;
                var columns = _super.prototype.getColumns.call(this);
                columns.splice(0, 0, Serenity.GridRowSelectionMixin.createSelectColumn(function () { return _this.rowSelection; }));
                return columns;
            };
            CancellableBulkActionGrid.prototype.getViewOptions = function () {
                var opt = _super.prototype.getViewOptions.call(this);
                opt.rowsPerPage = 2500;
                return opt;
            };
            return CancellableBulkActionGrid;
        }(FormulationManagementSystems.Northwind.OrderGrid));
        CancellableBulkActionGrid = __decorate([
            Serenity.Decorators.registerClass()
        ], CancellableBulkActionGrid);
        BasicSamples.CancellableBulkActionGrid = CancellableBulkActionGrid;
    })(BasicSamples = FormulationManagementSystems.BasicSamples || (FormulationManagementSystems.BasicSamples = {}));
})(FormulationManagementSystems || (FormulationManagementSystems = {}));
var FormulationManagementSystems;
(function (FormulationManagementSystems) {
    var BasicSamples;
    (function (BasicSamples) {
        var ConditionalFormattingGrid = (function (_super) {
            __extends(ConditionalFormattingGrid, _super);
            function ConditionalFormattingGrid(container) {
                return _super.call(this, container) || this;
            }
            ConditionalFormattingGrid.prototype.getColumnsKey = function () { return "Northwind.Product"; };
            ConditionalFormattingGrid.prototype.getDialogType = function () { return FormulationManagementSystems.Northwind.ProductDialog; };
            ConditionalFormattingGrid.prototype.getIdProperty = function () { return FormulationManagementSystems.Northwind.ProductRow.idProperty; };
            ConditionalFormattingGrid.prototype.getLocalTextPrefix = function () { return FormulationManagementSystems.Northwind.ProductRow.localTextPrefix; };
            ConditionalFormattingGrid.prototype.getService = function () { return FormulationManagementSystems.Northwind.ProductService.baseUrl; };
            /**
             * We override getColumns() to be able to add a custom CSS class to UnitPrice
             * We could also add this class in ProductColumns.cs but didn't want to modify
             * it solely for this sample.
             */
            ConditionalFormattingGrid.prototype.getColumns = function () {
                var columns = _super.prototype.getColumns.call(this);
                // adding a specific css class to UnitPrice column, 
                // to be able to format cell with a different background
                Q.first(columns, function (x) { return x.field == fld.UnitPrice; }).cssClass += " col-unit-price";
                return columns;
            };
            /**
             * This method is called for all rows
             * @param item Data item for current row
             * @param index Index of the row in grid
             */
            ConditionalFormattingGrid.prototype.getItemCssClass = function (item, index) {
                var klass = "";
                if (item.Discontinued == true)
                    klass += " discontinued";
                else if (item.UnitsInStock <= 0)
                    klass += " out-of-stock";
                else if (item.UnitsInStock < 20)
                    klass += " critical-stock";
                else if (item.UnitsInStock > 50)
                    klass += " needs-reorder";
                if (item.UnitPrice >= 50)
                    klass += " high-price";
                else if (item.UnitPrice >= 20)
                    klass += " medium-price";
                else
                    klass += " low-price";
                return Q.trimToNull(klass);
            };
            return ConditionalFormattingGrid;
        }(Serenity.EntityGrid));
        ConditionalFormattingGrid = __decorate([
            Serenity.Decorators.registerClass()
        ], ConditionalFormattingGrid);
        BasicSamples.ConditionalFormattingGrid = ConditionalFormattingGrid;
    })(BasicSamples = FormulationManagementSystems.BasicSamples || (FormulationManagementSystems.BasicSamples = {}));
})(FormulationManagementSystems || (FormulationManagementSystems = {}));
/// <reference path="../../../Northwind/Order/OrderGrid.ts" />
var FormulationManagementSystems;
(function (FormulationManagementSystems) {
    var BasicSamples;
    (function (BasicSamples) {
        var CustomLinksInGrid = (function (_super) {
            __extends(CustomLinksInGrid, _super);
            function CustomLinksInGrid(container) {
                return _super.call(this, container) || this;
            }
            /**
             * We override getColumns() to change format functions for some columns.
             * You could also write them as formatter classes, and use them at server side
             */
            CustomLinksInGrid.prototype.getColumns = function () {
                var columns = _super.prototype.getColumns.call(this);
                Q.first(columns, function (x) { return x.field == fld.CustomerCompanyName; }).format =
                    function (ctx) { return "<a href=\"javascript:;\" class=\"customer-link\">" + Q.htmlEncode(ctx.value) + "</a>"; };
                Q.first(columns, function (x) { return x.field == fld.OrderDate; }).format =
                    function (ctx) { return "<a href=\"javascript:;\" class=\"date-link\">" + Q.formatDate(ctx.value) + "</a>"; };
                Q.first(columns, function (x) { return x.field == fld.EmployeeFullName; }).format =
                    function (ctx) { return "<a href=\"javascript:;\" class=\"employee-link\">" + Q.htmlEncode(ctx.value) + "</a>"; };
                Q.first(columns, function (x) { return x.field == fld.ShipCountry; }).format =
                    function (ctx) { return "<a href=\"javascript:;\" class=\"ship-country-link\">" + Q.htmlEncode(ctx.value) + "</a>"; };
                return columns;
            };
            CustomLinksInGrid.prototype.onClick = function (e, row, cell) {
                // let base grid handle clicks for its edit links
                _super.prototype.onClick.call(this, e, row, cell);
                // if base grid already handled, we shouldn"t handle it again
                if (e.isDefaultPrevented()) {
                    return;
                }
                // get reference to current item
                var item = this.itemAt(row);
                // get reference to clicked element
                var target = $(e.target);
                if (target.hasClass("customer-link")) {
                    e.preventDefault();
                    var message = Q.format("<p>You have clicked an order from customer: {0}.</p>" +
                        "<p>If you click Yes, i'll open Customer dialog.</p>" +
                        "<p>If you click No, i'll open Order dialog.</p>", Q.htmlEncode(item.CustomerCompanyName));
                    Q.confirm(message, function () {
                        // CustomerDialog doesn't use CustomerID but ID (identity)
                        // so need to find customer to get its actual ID
                        var customer = Q.first(FormulationManagementSystems.Northwind.CustomerRow.getLookup().items, function (x) { return x.CustomerID == item.CustomerID; });
                        new FormulationManagementSystems.Northwind.CustomerDialog().loadByIdAndOpenDialog(customer.ID);
                    }, {
                        htmlEncode: false,
                        onNo: function () {
                            new FormulationManagementSystems.Northwind.OrderDialog().loadByIdAndOpenDialog(item.OrderID);
                        }
                    });
                }
                else if (target.hasClass("date-link")) {
                    e.preventDefault();
                    var ordersInSameDate = Q.count(this.view.getItems(), function (x) { return x.OrderDate == item.OrderDate; });
                    Q.notifyInfo("You clicked an order from date " +
                        Q.formatDate(item.OrderDate) + ". There are " +
                        ordersInSameDate + " orders from the same date that is loaded in grid at the moment");
                }
                else if (target.hasClass("employee-link")) {
                    e.preventDefault();
                    Q.notifySuccess("You clicked an employee name, " +
                        "so i've opened a new Order Dialog from same customer " +
                        "with that employee prepopulated!");
                    new FormulationManagementSystems.Northwind.OrderDialog().loadEntityAndOpenDialog({
                        CustomerID: item.CustomerID,
                        EmployeeID: item.EmployeeID
                    });
                }
                else if (target.hasClass("ship-country-link")) {
                    e.preventDefault();
                    Q.notifySuccess("Let's filter the grid to orders from " + item.ShipCountry);
                    var countryFilter = this.findQuickFilter(Serenity.LookupEditor, FormulationManagementSystems.Northwind.OrderRow.Fields.ShipCountry);
                    countryFilter.value = item.ShipCountry;
                    this.refresh();
                }
            };
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
            CustomLinksInGrid.prototype.editItem = function (entityOrId) {
                // check that this is an edit link click, not add button, ID is always a string
                if (typeof entityOrId == "string") {
                    // convert ID to an integer, and find order with that ID
                    var item = this.view.getItemById(Q.toId(entityOrId));
                    // date is a ISO string, so need to parse it first
                    var date = Q.formatDate(item.OrderDate);
                    // ask for confirmation
                    Q.confirm(Q.format("You clicked edit link for order with ID: {0} and Date: {1}. Should i open that order?", item.OrderID, date), function () {
                        new FormulationManagementSystems.Northwind.OrderDialog().loadByIdAndOpenDialog(item.OrderID);
                    });
                }
                else {
                    _super.prototype.editItem.call(this, entityOrId);
                }
            };
            return CustomLinksInGrid;
        }(FormulationManagementSystems.Northwind.OrderGrid));
        CustomLinksInGrid = __decorate([
            Serenity.Decorators.registerClass()
        ], CustomLinksInGrid);
        BasicSamples.CustomLinksInGrid = CustomLinksInGrid;
    })(BasicSamples = FormulationManagementSystems.BasicSamples || (FormulationManagementSystems.BasicSamples = {}));
})(FormulationManagementSystems || (FormulationManagementSystems = {}));
var FormulationManagementSystems;
(function (FormulationManagementSystems) {
    var BasicSamples;
    (function (BasicSamples) {
        var DragDropSampleDialog = (function (_super) {
            __extends(DragDropSampleDialog, _super);
            function DragDropSampleDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new BasicSamples.DragDropSampleForm(_this.idPrefix);
                return _this;
            }
            DragDropSampleDialog.prototype.getFormKey = function () { return BasicSamples.DragDropSampleForm.formKey; };
            DragDropSampleDialog.prototype.getIdProperty = function () { return BasicSamples.DragDropSampleRow.idProperty; };
            DragDropSampleDialog.prototype.getLocalTextPrefix = function () { return BasicSamples.DragDropSampleRow.localTextPrefix; };
            DragDropSampleDialog.prototype.getNameProperty = function () { return BasicSamples.DragDropSampleRow.nameProperty; };
            DragDropSampleDialog.prototype.getService = function () { return BasicSamples.DragDropSampleService.baseUrl; };
            return DragDropSampleDialog;
        }(Serenity.EntityDialog));
        DragDropSampleDialog = __decorate([
            Serenity.Decorators.registerClass()
        ], DragDropSampleDialog);
        BasicSamples.DragDropSampleDialog = DragDropSampleDialog;
    })(BasicSamples = FormulationManagementSystems.BasicSamples || (FormulationManagementSystems.BasicSamples = {}));
})(FormulationManagementSystems || (FormulationManagementSystems = {}));
var FormulationManagementSystems;
(function (FormulationManagementSystems) {
    var BasicSamples;
    (function (BasicSamples) {
        var DragDropSampleGrid = (function (_super) {
            __extends(DragDropSampleGrid, _super);
            function DragDropSampleGrid(container) {
                var _this = _super.call(this, container) || this;
                new Serenity.TreeGridMixin({
                    grid: _this,
                    toggleField: BasicSamples.DragDropSampleRow.Fields.Title,
                    getParentId: function (x) { return x.ParentId; },
                    initialCollapse: function () { return false; },
                });
                // save prior drag target to restore its color during drag
                var priorDragTarget;
                // prevent the grid from cancelling drag'n'drop by default
                _this.slickGrid.onDragInit.subscribe(function (e, dd) {
                    e.stopImmediatePropagation();
                });
                // this method is called when an item is about to be dragged
                _this.slickGrid.onDragStart.subscribe(function (e, dd) {
                    // only allow edit links to be dragged
                    if (!$(e.target).hasClass('s-EditLink'))
                        return;
                    // make sure there is a cell in source location
                    var cell = _this.slickGrid.getCellFromEvent(e);
                    if (!cell) {
                        return;
                    }
                    // notify that we'll handle drag
                    e.stopImmediatePropagation();
                    // save details about dragged item
                    dd.row = cell.row;
                    var item = _this.itemAt(cell.row);
                    dd.item = item;
                    // a unique name for our operation
                    dd.mode = "move";
                    // create an absolute position helper shown during dragging
                    var helper = $("<span></span>")
                        .addClass('drag-helper')
                        .text("Moving " + item.Title)
                        .appendTo(document.body);
                    dd.helper = helper;
                });
                // this method is periodically called during drag
                _this.slickGrid.onDrag.subscribe(function (e, dd) {
                    // only handle our operation
                    if (dd.mode != "move") {
                        return;
                    }
                    // if we changed color of some target before, reset it
                    if (priorDragTarget && priorDragTarget != e.target) {
                        $(priorDragTarget).css('background-color', '');
                        priorDragTarget = null;
                    }
                    // find target, the source will drag into
                    var cell = _this.slickGrid.getCellFromEvent(e);
                    var target = !cell ? null : _this.itemAt(cell.row);
                    // accept only edit links and valid items as drag target
                    var reject = !$(e.target).hasClass('s-EditLink') || !_this.canMoveUnder(dd.item, target);
                    if (reject) {
                        dd.helper.text("Can't move " + dd.item.Title + " here");
                    }
                    else {
                        dd.helper.text("Move " + dd.item.Title + " under " + $(e.target).text());
                        // change color of current drag target
                        $(e.target).css('background-color', '#ddeeee');
                        priorDragTarget = e.target;
                    }
                    // toggle class of helper to show relevant accept / reject icon
                    dd.helper.toggleClass('reject', reject);
                    // position helper next to current mouse position
                    dd.helper.css({ top: e.pageY + 5, left: e.pageX + 4 });
                });
                // this is called when drag is completed
                _this.slickGrid.onDragEnd.subscribe(function (e, dd) {
                    if (dd.mode != "move") {
                        return;
                    }
                    // prevent browser from changing url
                    e.preventDefault();
                    // clear indicator color and drag helper
                    priorDragTarget && $(priorDragTarget).css('background-color', '');
                    dd.helper.remove();
                    // determine target row
                    var cell = _this.slickGrid.getCellFromEvent(e);
                    var item = dd.item;
                    var target = !cell ? null : _this.itemAt(cell.row);
                    // check again that this is valid drag target
                    if ($(e.target).hasClass('s-EditLink') && _this.canMoveUnder(item, target)) {
                        // this will move our primary drag source under new parent
                        var moveItem = function (onSuccess) {
                            BasicSamples.DragDropSampleService.Update({
                                EntityId: item.Id,
                                Entity: {
                                    ParentId: target.Id
                                }
                            }, onSuccess);
                        };
                        // if drag source has some children, need some confirmation
                        var children = _this.getChildren(dd.item);
                        if (children.length > 0) {
                            Q.confirm('Move its children alongside the item?', function () {
                                // if responded yes, moving item under new parent should be enough
                                moveItem(function () { return _this.refresh(); });
                            }, {
                                onNo: function () {
                                    // if responded no, children should move under old parent of item
                                    var oldParentId = item.ParentId == null ? null : item.ParentId;
                                    var moveNextChild = function (onSuccess) {
                                        var _this = this;
                                        if (children.length) {
                                            var x = children.shift();
                                            BasicSamples.DragDropSampleService.Update({
                                                EntityId: x.Id,
                                                Entity: {
                                                    ParentId: oldParentId || null
                                                }
                                            }, function () { return moveNextChild(onSuccess); }, {
                                                onError: function () { return _this.refresh(); }
                                            });
                                        }
                                        else
                                            onSuccess();
                                    };
                                    // first move item itself under new parent, 
                                    // then move its children under old parent one by one
                                    moveItem(function () { return moveNextChild(function () { return _this.refresh(); }); });
                                }
                            });
                        }
                        else {
                            // item has no children, just move it under new parent
                            moveItem(function () { return _this.refresh(); });
                        }
                    }
                    return false;
                });
                return _this;
            }
            DragDropSampleGrid.prototype.getColumnsKey = function () { return 'BasicSamples.DragDropSample'; };
            DragDropSampleGrid.prototype.getDialogType = function () { return BasicSamples.DragDropSampleDialog; };
            DragDropSampleGrid.prototype.getIdProperty = function () { return BasicSamples.DragDropSampleRow.idProperty; };
            DragDropSampleGrid.prototype.getLocalTextPrefix = function () { return BasicSamples.DragDropSampleRow.localTextPrefix; };
            DragDropSampleGrid.prototype.getService = function () { return BasicSamples.DragDropSampleService.baseUrl; };
            /**
             * This method will determine if item can be moved under a given target
             * An item can't be moved under itself, under one of its children
             */
            DragDropSampleGrid.prototype.canMoveUnder = function (item, target) {
                if (!item || !target || item.Id == target.Id || item.ParentId == target.Id)
                    return false;
                if (Q.any(this.getParents(target), function (x) { return x.Id == item.Id; }))
                    return false;
                return true;
            };
            /**
             * Gets children list of an item
             */
            DragDropSampleGrid.prototype.getChildren = function (item) {
                return this.getItems().filter(function (x) { return x.ParentId == item.Id; });
            };
            /**
             * Gets all parents of an item
             */
            DragDropSampleGrid.prototype.getParents = function (item) {
                // use this to prevent infinite recursion
                var visited = {};
                var result = [];
                // while item has a parent and not visited yet
                while (item.ParentId && !visited[item.ParentId]) {
                    // find parent by its ID
                    item = this.view.getItemById(item.ParentId);
                    if (!item)
                        break;
                    result.push(item);
                    visited[item.Id] = true;
                }
                return result;
            };
            DragDropSampleGrid.prototype.getButtons = function () {
                return [];
            };
            DragDropSampleGrid.prototype.usePager = function () {
                return false;
            };
            return DragDropSampleGrid;
        }(Serenity.EntityGrid));
        DragDropSampleGrid = __decorate([
            Serenity.Decorators.registerClass()
        ], DragDropSampleGrid);
        BasicSamples.DragDropSampleGrid = DragDropSampleGrid;
    })(BasicSamples = FormulationManagementSystems.BasicSamples || (FormulationManagementSystems.BasicSamples = {}));
})(FormulationManagementSystems || (FormulationManagementSystems = {}));
var FormulationManagementSystems;
(function (FormulationManagementSystems) {
    var SelectableEntityGrid = (function (_super) {
        __extends(SelectableEntityGrid, _super);
        function SelectableEntityGrid() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        SelectableEntityGrid.prototype.getSlickOptions = function () {
            var opt = _super.prototype.getSlickOptions.call(this);
            opt.enableTextSelectionOnCells = true;
            opt.selectedCellCssClass = "slick-row-selected";
            opt.enableCellNavigation = true;
            return opt;
        };
        SelectableEntityGrid.prototype.createSlickGrid = function () {
            var grid = _super.prototype.createSlickGrid.call(this);
            grid.setSelectionModel(new Slick.RowSelectionModel());
            return grid;
        };
        return SelectableEntityGrid;
    }(Serenity.EntityGrid));
    SelectableEntityGrid = __decorate([
        Serenity.Decorators.registerClass()
    ], SelectableEntityGrid);
    FormulationManagementSystems.SelectableEntityGrid = SelectableEntityGrid;
})(FormulationManagementSystems || (FormulationManagementSystems = {}));
/// <reference path="SelectableEntityGrid.ts" />
var FormulationManagementSystems;
(function (FormulationManagementSystems) {
    var BasicSamples;
    (function (BasicSamples) {
        var RowSelectionGrid = (function (_super) {
            __extends(RowSelectionGrid, _super);
            function RowSelectionGrid(container) {
                return _super.call(this, container) || this;
            }
            RowSelectionGrid.prototype.getColumnsKey = function () { return "Northwind.Supplier"; };
            RowSelectionGrid.prototype.getDialogType = function () { return FormulationManagementSystems.Northwind.SupplierDialog; };
            RowSelectionGrid.prototype.getIdProperty = function () { return FormulationManagementSystems.Northwind.SupplierRow.idProperty; };
            RowSelectionGrid.prototype.getLocalTextPrefix = function () { return FormulationManagementSystems.Northwind.SupplierRow.localTextPrefix; };
            RowSelectionGrid.prototype.getService = function () { return FormulationManagementSystems.Northwind.SupplierService.baseUrl; };
            return RowSelectionGrid;
        }(FormulationManagementSystems.SelectableEntityGrid));
        RowSelectionGrid = __decorate([
            Serenity.Decorators.registerClass()
        ], RowSelectionGrid);
        BasicSamples.RowSelectionGrid = RowSelectionGrid;
    })(BasicSamples = FormulationManagementSystems.BasicSamples || (FormulationManagementSystems.BasicSamples = {}));
})(FormulationManagementSystems || (FormulationManagementSystems = {}));
/// <reference path="../../../Northwind/Product/ProductGrid.ts" />
var FormulationManagementSystems;
(function (FormulationManagementSystems) {
    var BasicSamples;
    (function (BasicSamples) {
        var GridFilteredByCriteria = (function (_super) {
            __extends(GridFilteredByCriteria, _super);
            function GridFilteredByCriteria(container) {
                return _super.call(this, container) || this;
            }
            GridFilteredByCriteria.prototype.onViewSubmit = function () {
                // only continue if base class returns true (didn't cancel request)
                if (!_super.prototype.onViewSubmit.call(this)) {
                    return false;
                }
                // view object is the data source for grid (SlickRemoteView)
                // this is an EntityGrid so its Params object is a ListRequest
                var request = this.view.params;
                // list request has a Criteria parameter
                // we AND criteria here to existing one because 
                // otherwise we might clear filter set by 
                // an edit filter dialog if any.
                request.Criteria = Serenity.Criteria.and(request.Criteria, [['UnitsInStock'], '>', 10], [['CategoryName'], '!=', 'Condiments'], [['Discontinued'], '=', 0]);
                // TypeScript doesn't support operator overloading
                // so we had to use array syntax above to build criteria.
                // Make sure you write
                // [['Field'], '>', 10] (which means field A is greater than 10)
                // not 
                // ['A', '>', 10] (which means string 'A' is greater than 10
                return true;
            };
            return GridFilteredByCriteria;
        }(FormulationManagementSystems.Northwind.ProductGrid));
        GridFilteredByCriteria = __decorate([
            Serenity.Decorators.registerClass()
        ], GridFilteredByCriteria);
        BasicSamples.GridFilteredByCriteria = GridFilteredByCriteria;
    })(BasicSamples = FormulationManagementSystems.BasicSamples || (FormulationManagementSystems.BasicSamples = {}));
})(FormulationManagementSystems || (FormulationManagementSystems = {}));
/// <reference path="../../../Northwind/Product/ProductGrid.ts" />
var FormulationManagementSystems;
(function (FormulationManagementSystems) {
    var BasicSamples;
    (function (BasicSamples) {
        var GroupingAndSummariesInGrid = (function (_super) {
            __extends(GroupingAndSummariesInGrid, _super);
            function GroupingAndSummariesInGrid(container) {
                return _super.call(this, container) || this;
            }
            GroupingAndSummariesInGrid.prototype.createSlickGrid = function () {
                var grid = _super.prototype.createSlickGrid.call(this);
                // need to register this plugin for grouping or you'll have errors
                grid.registerPlugin(new Slick.Data.GroupItemMetadataProvider());
                this.view.setSummaryOptions({
                    aggregators: [
                        new Slick.Aggregators.Avg('UnitPrice'),
                        new Slick.Aggregators.Sum('UnitsInStock'),
                        new Slick.Aggregators.Max('UnitsOnOrder'),
                        new Slick.Aggregators.Avg('ReorderLevel')
                    ]
                });
                return grid;
            };
            GroupingAndSummariesInGrid.prototype.getColumns = function () {
                var columns = _super.prototype.getColumns.call(this);
                Q.first(columns, function (x) { return x.field === 'UnitsOnOrder'; })
                    .groupTotalsFormatter = function (totals, col) {
                    return (totals.max ? ('max: ' + Q.coalesce(totals.max[col.field], '')) : '');
                };
                Q.first(columns, function (x) { return x.field === 'ReorderLevel'; })
                    .groupTotalsFormatter = function (totals, col) {
                    return (totals.avg ? ('avg: ' + Q.coalesce(Q.formatNumber(totals.avg[col.field], '0.'), '')) : '');
                };
                return columns;
            };
            GroupingAndSummariesInGrid.prototype.getSlickOptions = function () {
                var opt = _super.prototype.getSlickOptions.call(this);
                opt.showFooterRow = true;
                return opt;
            };
            GroupingAndSummariesInGrid.prototype.usePager = function () {
                return false;
            };
            GroupingAndSummariesInGrid.prototype.getButtons = function () {
                var _this = this;
                return [{
                        title: 'Group By Category',
                        cssClass: 'expand-all-button',
                        onClick: function () { return _this.view.setGrouping([{
                                getter: 'CategoryName'
                            }]); }
                    },
                    {
                        title: 'Group By Category and Supplier',
                        cssClass: 'expand-all-button',
                        onClick: function () { return _this.view.setGrouping([{
                                formatter: function (x) { return 'Category: ' + x.value + ' (' + x.count + ' items)'; },
                                getter: 'CategoryName'
                            }, {
                                formatter: function (x) { return 'Supplier: ' + x.value + ' (' + x.count + ' items)'; },
                                getter: 'SupplierCompanyName'
                            }]); }
                    }, {
                        title: 'No Grouping',
                        cssClass: 'collapse-all-button',
                        onClick: function () { return _this.view.setGrouping([]); }
                    }];
            };
            return GroupingAndSummariesInGrid;
        }(FormulationManagementSystems.Northwind.ProductGrid));
        GroupingAndSummariesInGrid = __decorate([
            Serenity.Decorators.registerClass()
        ], GroupingAndSummariesInGrid);
        BasicSamples.GroupingAndSummariesInGrid = GroupingAndSummariesInGrid;
    })(BasicSamples = FormulationManagementSystems.BasicSamples || (FormulationManagementSystems.BasicSamples = {}));
})(FormulationManagementSystems || (FormulationManagementSystems = {}));
/// <reference path="../../../Northwind/Order/OrderGrid.ts" />
var FormulationManagementSystems;
(function (FormulationManagementSystems) {
    var BasicSamples;
    (function (BasicSamples) {
        var InitialValuesForQuickFilters = (function (_super) {
            __extends(InitialValuesForQuickFilters, _super);
            function InitialValuesForQuickFilters(container) {
                return _super.call(this, container) || this;
            }
            /**
             * This method is called to get list of quick filters to be created for this grid.
             * By default, it returns quick filter objects corresponding to properties that
             * have a [QuickFilter] attribute at server side OrderColumns.cs
             */
            InitialValuesForQuickFilters.prototype.getQuickFilters = function () {
                // get quick filter list from base class
                var filters = _super.prototype.getQuickFilters.call(this);
                // quick filter init method is a good place to set initial
                // value for a quick filter editor, just after it is created
                Q.first(filters, function (x) { return x.field == fld.OrderDate; }).init = function (w) {
                    // w is a reference to the editor for this quick filter widget
                    // here we cast it to DateEditor, and set its value as date.
                    // note that in Javascript, months are 0 based, so date below
                    // is actually 2016-05-01
                    w.valueAsDate = new Date(2016, 4, 1);
                    // setting start date was simple. but this quick filter is actually
                    // a combination of two date editors. to get reference to second one,
                    // need to find its next sibling element by its class
                    var endDate = w.element.nextAll(".s-DateEditor").getWidget(Serenity.DateEditor);
                    endDate.valueAsDate = new Date(2016, 6, 1);
                };
                Q.first(filters, function (x) { return x.field == fld.ShippingState; }).init = function (w) {
                    // enum editor has a string value, so need to call toString()
                    w.value = FormulationManagementSystems.Northwind.OrderShippingState.NotShipped.toString();
                };
                return filters;
            };
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
            InitialValuesForQuickFilters.prototype.createQuickFilters = function () {
                // let base class to create quick filters first
                _super.prototype.createQuickFilters.call(this);
                // find a quick filter widget by its field name
                this.findQuickFilter(Serenity.LookupEditor, fld.ShipVia).values = ["1", "2"];
            };
            return InitialValuesForQuickFilters;
        }(FormulationManagementSystems.Northwind.OrderGrid));
        InitialValuesForQuickFilters = __decorate([
            Serenity.Decorators.registerClass()
        ], InitialValuesForQuickFilters);
        BasicSamples.InitialValuesForQuickFilters = InitialValuesForQuickFilters;
    })(BasicSamples = FormulationManagementSystems.BasicSamples || (FormulationManagementSystems.BasicSamples = {}));
})(FormulationManagementSystems || (FormulationManagementSystems = {}));
/// <reference path="../../../Northwind/Customer/CustomerGrid.ts" />
var FormulationManagementSystems;
(function (FormulationManagementSystems) {
    var BasicSamples;
    (function (BasicSamples) {
        var InlineActionGrid = (function (_super) {
            __extends(InlineActionGrid, _super);
            function InlineActionGrid(container) {
                return _super.call(this, container) || this;
            }
            InlineActionGrid.prototype.getColumns = function () {
                var columns = _super.prototype.getColumns.call(this);
                columns.unshift({
                    field: 'Delete Row',
                    name: '',
                    format: function (ctx) { return '<a class="inline-action delete-row" title="delete">' +
                        '<i class="fa fa-trash-o text-red"></i></a>'; },
                    width: 24,
                    minWidth: 24,
                    maxWidth: 24
                });
                columns.splice(1, 0, {
                    field: 'View Details',
                    name: '',
                    format: function (ctx) { return '<a class="inline-action view-details" title="view details"></a>'; },
                    width: 24,
                    minWidth: 24,
                    maxWidth: 24
                });
                columns.splice(2, 0, {
                    field: 'New Order',
                    name: '',
                    format: function (ctx) { return '<a class="inline-action new-order" title="new order"></a>'; },
                    width: 24,
                    minWidth: 24,
                    maxWidth: 24
                });
                return columns;
            };
            InlineActionGrid.prototype.onClick = function (e, row, cell) {
                var _this = this;
                _super.prototype.onClick.call(this, e, row, cell);
                if (e.isDefaultPrevented())
                    return;
                var item = this.itemAt(row);
                var target = $(e.target);
                // if user clicks "i" element, e.g. icon
                if (target.parent().hasClass('inline-action'))
                    target = target.parent();
                if (target.hasClass('inline-action')) {
                    e.preventDefault();
                    if (target.hasClass('delete-row')) {
                        Q.confirm('Delete record?', function () {
                            FormulationManagementSystems.Northwind.CustomerService.Delete({
                                EntityId: item.ID,
                            }, function (response) {
                                _this.refresh();
                            });
                        });
                    }
                    else if (target.hasClass('view-details')) {
                        this.editItem(item.ID);
                    }
                    else if (target.hasClass('new-order')) {
                        var dlg = new FormulationManagementSystems.Northwind.OrderDialog();
                        this.initDialog(dlg);
                        dlg.loadEntityAndOpenDialog({
                            CustomerID: item.CustomerID
                        });
                    }
                }
            };
            return InlineActionGrid;
        }(FormulationManagementSystems.Northwind.CustomerGrid));
        InlineActionGrid = __decorate([
            Serenity.Decorators.registerClass()
        ], InlineActionGrid);
        BasicSamples.InlineActionGrid = InlineActionGrid;
    })(BasicSamples = FormulationManagementSystems.BasicSamples || (FormulationManagementSystems.BasicSamples = {}));
})(FormulationManagementSystems || (FormulationManagementSystems = {}));
var FormulationManagementSystems;
(function (FormulationManagementSystems) {
    var BasicSamples;
    (function (BasicSamples) {
        var InlineImageFormatter = (function () {
            function InlineImageFormatter() {
            }
            InlineImageFormatter.prototype.format = function (ctx) {
                var file = (this.fileProperty ? ctx.item[this.fileProperty] : ctx.value);
                if (!file || !file.length)
                    return "";
                var href = Q.resolveUrl("~/upload/" + file);
                if (this.thumb) {
                    var parts = file.split('.');
                    file = parts.slice(0, parts.length - 1).join('.') + '_t.jpg';
                }
                var src = Q.resolveUrl('~/upload/' + file);
                return "<a class=\"inline-image\" target='_blank' href=\"" + href + "\">" +
                    ("<img src=\"" + src + "\" style='max-height: 145px; max-width: 100%;' /></a>");
            };
            InlineImageFormatter.prototype.initializeColumn = function (column) {
                if (this.fileProperty) {
                    column.referencedFields = column.referencedFields || [];
                    column.referencedFields.push(this.fileProperty);
                }
            };
            return InlineImageFormatter;
        }());
        __decorate([
            Serenity.Decorators.option()
        ], InlineImageFormatter.prototype, "fileProperty", void 0);
        __decorate([
            Serenity.Decorators.option()
        ], InlineImageFormatter.prototype, "thumb", void 0);
        InlineImageFormatter = __decorate([
            Serenity.Decorators.registerFormatter()
        ], InlineImageFormatter);
        BasicSamples.InlineImageFormatter = InlineImageFormatter;
    })(BasicSamples = FormulationManagementSystems.BasicSamples || (FormulationManagementSystems.BasicSamples = {}));
})(FormulationManagementSystems || (FormulationManagementSystems = {}));
/// <reference path="../../../Northwind/Order/OrderGrid.ts" />
var FormulationManagementSystems;
(function (FormulationManagementSystems) {
    var BasicSamples;
    (function (BasicSamples) {
        var InlineImageInGrid = (function (_super) {
            __extends(InlineImageInGrid, _super);
            function InlineImageInGrid(container) {
                return _super.call(this, container) || this;
            }
            InlineImageInGrid.prototype.getColumnsKey = function () { return "BasicSamples.InlineImageInGrid"; };
            InlineImageInGrid.prototype.getDialogType = function () { return FormulationManagementSystems.Northwind.ProductDialog; };
            InlineImageInGrid.prototype.getIdProperty = function () { return FormulationManagementSystems.Northwind.ProductRow.idProperty; };
            InlineImageInGrid.prototype.getLocalTextPrefix = function () { return FormulationManagementSystems.Northwind.ProductRow.localTextPrefix; };
            InlineImageInGrid.prototype.getService = function () { return FormulationManagementSystems.Northwind.ProductService.baseUrl; };
            InlineImageInGrid.prototype.getSlickOptions = function () {
                var opt = _super.prototype.getSlickOptions.call(this);
                opt.rowHeight = 150;
                return opt;
            };
            return InlineImageInGrid;
        }(Serenity.EntityGrid));
        InlineImageInGrid = __decorate([
            Serenity.Decorators.registerClass()
        ], InlineImageInGrid);
        BasicSamples.InlineImageInGrid = InlineImageInGrid;
    })(BasicSamples = FormulationManagementSystems.BasicSamples || (FormulationManagementSystems.BasicSamples = {}));
})(FormulationManagementSystems || (FormulationManagementSystems = {}));
var FormulationManagementSystems;
(function (FormulationManagementSystems) {
    var BasicSamples;
    (function (BasicSamples) {
        var ProductExcelImportDialog = (function (_super) {
            __extends(ProductExcelImportDialog, _super);
            function ProductExcelImportDialog() {
                var _this = _super.call(this) || this;
                _this.form = new BasicSamples.ProductExcelImportForm(_this.idPrefix);
                return _this;
            }
            ProductExcelImportDialog.prototype.getDialogTitle = function () {
                return "Excel Import";
            };
            ProductExcelImportDialog.prototype.getDialogButtons = function () {
                var _this = this;
                return [
                    {
                        text: 'Import',
                        click: function () {
                            if (!_this.validateBeforeSave())
                                return;
                            if (_this.form.FileName.value == null ||
                                Q.isEmptyOrNull(_this.form.FileName.value.Filename)) {
                                Q.notifyError("Please select a file!");
                                return;
                            }
                            BasicSamples.ProductExcelImportService.ExcelImport({
                                FileName: _this.form.FileName.value.Filename
                            }, function (response) {
                                Q.notifyInfo('Inserted: ' + (response.Inserted || 0) +
                                    ', Updated: ' + (response.Updated || 0));
                                if (response.ErrorList != null && response.ErrorList.length > 0) {
                                    Q.notifyError(response.ErrorList.join(',\r\n '));
                                }
                                _this.dialogClose();
                            });
                        },
                    },
                    {
                        text: 'Cancel',
                        click: function () { return _this.dialogClose(); }
                    }
                ];
            };
            return ProductExcelImportDialog;
        }(Serenity.PropertyDialog));
        ProductExcelImportDialog = __decorate([
            Serenity.Decorators.registerClass()
        ], ProductExcelImportDialog);
        BasicSamples.ProductExcelImportDialog = ProductExcelImportDialog;
    })(BasicSamples = FormulationManagementSystems.BasicSamples || (FormulationManagementSystems.BasicSamples = {}));
})(FormulationManagementSystems || (FormulationManagementSystems = {}));
/// <reference path="../../../Northwind/Product/ProductGrid.ts" />
var FormulationManagementSystems;
(function (FormulationManagementSystems) {
    var BasicSamples;
    (function (BasicSamples) {
        var ProductExcelImportGrid = (function (_super) {
            __extends(ProductExcelImportGrid, _super);
            function ProductExcelImportGrid(container) {
                return _super.call(this, container) || this;
            }
            /**
             * This method is called to get list of buttons to be created.
             */
            ProductExcelImportGrid.prototype.getButtons = function () {
                var _this = this;
                // call base method to get list of buttons
                var buttons = _super.prototype.getButtons.call(this);
                // add our import button
                buttons.push({
                    title: 'Import From Excel',
                    cssClass: 'export-xlsx-button',
                    onClick: function () {
                        // open import dialog, let it handle rest
                        var dialog = new BasicSamples.ProductExcelImportDialog();
                        dialog.element.on('dialogclose', function () {
                            _this.refresh();
                            dialog = null;
                        });
                        dialog.dialogOpen();
                    }
                });
                return buttons;
            };
            return ProductExcelImportGrid;
        }(FormulationManagementSystems.Northwind.ProductGrid));
        ProductExcelImportGrid = __decorate([
            Serenity.Decorators.registerClass()
        ], ProductExcelImportGrid);
        BasicSamples.ProductExcelImportGrid = ProductExcelImportGrid;
    })(BasicSamples = FormulationManagementSystems.BasicSamples || (FormulationManagementSystems.BasicSamples = {}));
})(FormulationManagementSystems || (FormulationManagementSystems = {}));
/// <reference path="../../../Northwind/Order/OrderGrid.ts" />
var FormulationManagementSystems;
(function (FormulationManagementSystems) {
    var BasicSamples;
    (function (BasicSamples) {
        var QuickFilterCustomization = (function (_super) {
            __extends(QuickFilterCustomization, _super);
            function QuickFilterCustomization(container) {
                return _super.call(this, container) || this;
            }
            QuickFilterCustomization.prototype.getColumnsKey = function () { return "Northwind.Order"; };
            QuickFilterCustomization.prototype.getDialogType = function () { return FormulationManagementSystems.Northwind.OrderDialog; };
            QuickFilterCustomization.prototype.getIdProperty = function () { return FormulationManagementSystems.Northwind.OrderRow.idProperty; };
            QuickFilterCustomization.prototype.getLocalTextPrefix = function () { return FormulationManagementSystems.Northwind.OrderRow.localTextPrefix; };
            QuickFilterCustomization.prototype.getService = function () { return FormulationManagementSystems.Northwind.OrderService.baseUrl; };
            /**
             * This method is called to get list of quick filters to be created for this grid.
             * By default, it returns quick filter objects corresponding to properties that
             * have a [QuickFilter] attribute at server side OrderColumns.cs
             */
            QuickFilterCustomization.prototype.getQuickFilters = function () {
                // get quick filter list from base class, e.g. columns
                var filters = _super.prototype.getQuickFilters.call(this);
                // we start by turning CustomerID filter to a Not Equal one
                var filter = Q.first(filters, function (x) { return x.field == fld.CustomerID; });
                filter.title = "Customer Not Equal To";
                filter.handler = function (h) {
                    // if filter is active, e.g. editor has some value
                    if (h.active) {
                        h.request.Criteria = Serenity.Criteria.and(h.request.Criteria, [[fld.CustomerID], '!=', h.value]);
                    }
                };
                // turn order date filter to exact match, not a range
                filter = Q.first(filters, function (x) { return x.field == fld.OrderDate; });
                filter.title = "Order Date Is Exactly";
                // element method in DataGrid turns this into a range editor, clear it to prevent
                filter.element = function (e) { };
                // need to override handler too, otherwise default handler will try to handle a date range
                filter.handler = function (h) {
                    if (h.active) {
                        h.request.EqualityFilter[fld.OrderDate] = h.value;
                    }
                    else {
                        h.request.EqualityFilter[fld.OrderDate] = null;
                    }
                };
                // reset these as they also expect range editors
                filter.loadState = null;
                filter.saveState = null;
                filter.displayText = null;
                // make employee filter a textbox, instead of lookup, and search by starts with
                filter = Q.first(filters, function (x) { return x.field == fld.EmployeeID; });
                filter.title = "Employee Name Starts With";
                filter.type = Serenity.StringEditor;
                filter.handler = function (h) {
                    if (h.active) {
                        h.request.Criteria = Serenity.Criteria.and(h.request.Criteria, [[fld.EmployeeFullName], 'like', h.value + '%']);
                    }
                };
                // turn shipping state into a boolean filter
                filter = Q.first(filters, function (x) { return x.field == fld.ShippingState; });
                filter.title = "Show Only Shipped";
                filter.type = Serenity.BooleanEditor;
                filter.handler = function (h) {
                    h.active = !!h.value;
                    if (h.active) {
                        h.request.Criteria = Serenity.Criteria.and(h.request.Criteria, ['is not null', [fld.ShippedDate]]);
                    }
                };
                // ship via filters by NOT IN
                filter = Q.first(filters, function (x) { return x.field == fld.ShipVia; });
                filter.title = "Ship Via Not IN";
                filter.handler = function (h) {
                    if (h.active) {
                        h.request.Criteria = Serenity.Criteria.and(h.request.Criteria, [[fld.ShipVia], 'not in', [h.value]]);
                    }
                };
                // ship country filters by NOT contains
                filter = Q.first(filters, function (x) { return x.field == fld.ShipCountry; });
                filter.title = "Ship Country NOT Contains";
                filter.type = Serenity.StringEditor;
                filter.handler = function (h) {
                    if (h.active) {
                        h.request.Criteria = Serenity.Criteria.and(h.request.Criteria, [[fld.ShipCountry], 'not like', '%' + h.value + '%']);
                    }
                };
                // ship city filters by GREATER THAN (>)
                filter = Q.first(filters, function (x) { return x.field == fld.ShipCity; });
                filter.title = "Ship City Greater Than";
                filter.type = Serenity.StringEditor;
                filter.handler = function (h) {
                    if (h.active) {
                        h.request.Criteria = Serenity.Criteria.and(h.request.Criteria, [[fld.ShipCity], '>', h.value]);
                    }
                };
                // create a range editor for freight
                var endFreight = null;
                filters.push({
                    field: fld.Freight,
                    type: Serenity.DecimalEditor,
                    title: 'Freight Between',
                    element: function (e1) {
                        e1.css("width", "80px");
                        endFreight = Serenity.Widget.create({
                            type: Serenity.DecimalEditor,
                            element: function (e2) { return e2.insertAfter(e1).css("width", "80px"); }
                        });
                        endFreight.element.change(function (x) { return e1.triggerHandler("change"); });
                        $("<span/>").addClass("range-separator").text("-").insertAfter(e1);
                    },
                    handler: function (h) {
                        var active1 = h.value != null && !isNaN(h.value);
                        var active2 = endFreight.value != null && !isNaN(endFreight.value);
                        h.active = active1 || active2;
                        if (active1)
                            h.request.Criteria = Serenity.Criteria.and(h.request.Criteria, [[fld.Freight], '>=', h.value]);
                        if (active2)
                            h.request.Criteria = Serenity.Criteria.and(h.request.Criteria, [[fld.Freight], '<=', endFreight.value]);
                    }
                });
                return filters;
            };
            return QuickFilterCustomization;
        }(Serenity.EntityGrid));
        QuickFilterCustomization = __decorate([
            Serenity.Decorators.registerClass()
        ], QuickFilterCustomization);
        BasicSamples.QuickFilterCustomization = QuickFilterCustomization;
    })(BasicSamples = FormulationManagementSystems.BasicSamples || (FormulationManagementSystems.BasicSamples = {}));
})(FormulationManagementSystems || (FormulationManagementSystems = {}));
/// <reference path="../../../Northwind/Supplier/SupplierGrid.ts" />
var FormulationManagementSystems;
(function (FormulationManagementSystems) {
    var BasicSamples;
    (function (BasicSamples) {
        var RemovingAddButton = (function (_super) {
            __extends(RemovingAddButton, _super);
            function RemovingAddButton(container) {
                return _super.call(this, container) || this;
            }
            /**
             * This method is called to get list of buttons to be created.
             */
            RemovingAddButton.prototype.getButtons = function () {
                // call base method to get list of buttons
                // by default, base entity grid adds a few buttons, 
                // add, refresh, column selection in order.
                var buttons = _super.prototype.getButtons.call(this);
                // here is several methods to remove add button
                // only one is enabled, others are commented
                // METHOD 1
                // we would be able to simply return an empty button list,
                // but this would also remove all other buttons
                // return [];
                // METHOD 2
                // remove by splicing (something like delete by index)
                // here we hard code add button index (not nice!)
                // buttons.splice(0, 1);
                // METHOD 3 - recommended
                // remove by splicing, but this time find button index
                // by its css class. it is the best and safer method
                buttons.splice(Q.indexOf(buttons, function (x) { return x.cssClass == "add-button"; }), 1);
                return buttons;
            };
            return RemovingAddButton;
        }(FormulationManagementSystems.Northwind.SupplierGrid));
        RemovingAddButton = __decorate([
            Serenity.Decorators.registerClass()
        ], RemovingAddButton);
        BasicSamples.RemovingAddButton = RemovingAddButton;
    })(BasicSamples = FormulationManagementSystems.BasicSamples || (FormulationManagementSystems.BasicSamples = {}));
})(FormulationManagementSystems || (FormulationManagementSystems = {}));
var FormulationManagementSystems;
(function (FormulationManagementSystems) {
    var BasicSamples;
    (function (BasicSamples) {
        var CustomerGrossSalesGrid = (function (_super) {
            __extends(CustomerGrossSalesGrid, _super);
            function CustomerGrossSalesGrid(container) {
                var _this = _super.call(this, container) || this;
                _this.nextId = 1;
                return _this;
            }
            CustomerGrossSalesGrid.prototype.getColumnsKey = function () { return "BasicSamples.CustomerGrossSales"; };
            CustomerGrossSalesGrid.prototype.getIdProperty = function () { return "__id"; };
            CustomerGrossSalesGrid.prototype.getNameProperty = function () { return FormulationManagementSystems.Northwind.CustomerGrossSalesRow.nameProperty; };
            CustomerGrossSalesGrid.prototype.getLocalTextPrefix = function () { return FormulationManagementSystems.Northwind.CustomerGrossSalesRow.localTextPrefix; };
            CustomerGrossSalesGrid.prototype.getService = function () { return BasicSamples.CustomerGrossSalesService.baseUrl; };
            /**
             * This method is called to preprocess data returned from the list service
             */
            CustomerGrossSalesGrid.prototype.onViewProcessData = function (response) {
                response = _super.prototype.onViewProcessData.call(this, response);
                // there is no __id property in CustomerGrossSalesRow but 
                // this is javascript and we can set any property of an object
                for (var _i = 0, _a = response.Entities; _i < _a.length; _i++) {
                    var x = _a[_i];
                    x.__id = this.nextId++;
                }
                return response;
            };
            CustomerGrossSalesGrid.prototype.getButtons = function () {
                var _this = this;
                var buttons = [];
                buttons.push(FormulationManagementSystems.Common.ExcelExportHelper.createToolButton({
                    grid: this,
                    service: BasicSamples.CustomerGrossSalesService.baseUrl + '/ListExcel',
                    onViewSubmit: function () { return _this.onViewSubmit(); },
                    separator: true
                }));
                buttons.push(FormulationManagementSystems.Common.PdfExportHelper.createToolButton({
                    grid: this,
                    onViewSubmit: function () { return _this.onViewSubmit(); }
                }));
                return buttons;
            };
            CustomerGrossSalesGrid.prototype.createSlickGrid = function () {
                var grid = _super.prototype.createSlickGrid.call(this);
                // need to register this plugin for grouping or you'll have errors
                grid.registerPlugin(new Slick.Data.GroupItemMetadataProvider());
                this.view.setSummaryOptions({
                    aggregators: [
                        new Slick.Aggregators.Sum('GrossAmount')
                    ]
                });
                this.view.setGrouping([{
                        getter: 'ContactName'
                    }]);
                return grid;
            };
            CustomerGrossSalesGrid.prototype.getSlickOptions = function () {
                var opt = _super.prototype.getSlickOptions.call(this);
                opt.showFooterRow = true;
                return opt;
            };
            CustomerGrossSalesGrid.prototype.usePager = function () {
                return false;
            };
            CustomerGrossSalesGrid.prototype.getQuickFilters = function () {
                var filters = _super.prototype.getQuickFilters.call(this);
                // we create a date-range quick filter, which is a composite
                // filter with two date time editors
                var orderDate = this.dateRangeQuickFilter('OrderDate', 'Order Date');
                // need to override its handler, as default date-range filter will set Criteria parameter of list request.
                // we need to set StartDate and EndDate custom parameters of our CustomerGrossSalesListRequest
                orderDate.handler = function (args) {
                    // args.widget here is the start date editor. value of a date editor is a ISO date string
                    var start = args.widget.value;
                    // to find end date editor, need to search it by its css class among siblings
                    var end = args.widget.element.nextAll('.s-DateEditor')
                        .getWidget(Serenity.DateEditor).value;
                    args.request.StartDate = start;
                    args.request.EndDate = end;
                    // active option controls when a filter editor looks active, e.g. its label is blueish
                    args.active = !Q.isEmptyOrNull(start) || !Q.isEmptyOrNull(end);
                };
                filters.push(orderDate);
                return filters;
            };
            return CustomerGrossSalesGrid;
        }(Serenity.EntityGrid));
        CustomerGrossSalesGrid = __decorate([
            Serenity.Decorators.registerClass()
        ], CustomerGrossSalesGrid);
        BasicSamples.CustomerGrossSalesGrid = CustomerGrossSalesGrid;
    })(BasicSamples = FormulationManagementSystems.BasicSamples || (FormulationManagementSystems.BasicSamples = {}));
})(FormulationManagementSystems || (FormulationManagementSystems = {}));
/// <reference path="../../../Northwind/Order/OrderGrid.ts" />
var FormulationManagementSystems;
(function (FormulationManagementSystems) {
    var BasicSamples;
    (function (BasicSamples) {
        var TreeGrid = (function (_super) {
            __extends(TreeGrid, _super);
            function TreeGrid(container) {
                var _this = _super.call(this, container) || this;
                _this.treeMixin = new Serenity.TreeGridMixin({
                    grid: _this,
                    // bring tree items initially collapsed
                    initialCollapse: function () { return true; },
                    // which column to place tree toggle / expand/collapse button
                    toggleField: FormulationManagementSystems.Northwind.OrderRow.Fields.CustomerCompanyName,
                    getParentId: function (x) {
                        // as we don't have parentId column here, we are cheating by using modulus 10 and 50
                        // e.g. order with ID 1605 will have parent 1600, order with ID 1613 will have parent 1610
                        var parentId = Math.floor(x.OrderID / 10) * 10;
                        if (parentId == x.OrderID) {
                            parentId = Math.floor(x.OrderID / 50) * 50;
                            // orders with ID 16050 and 17000 should have NULL parent
                            if (parentId == x.OrderID)
                                return null;
                        }
                        // if you had a ParentID column, you'd just return x.ParentID
                        return parentId;
                    }
                });
                return _this;
            }
            TreeGrid.prototype.usePager = function () {
                return false;
            };
            return TreeGrid;
        }(FormulationManagementSystems.Northwind.OrderGrid));
        TreeGrid = __decorate([
            Serenity.Decorators.registerClass()
        ], TreeGrid);
        BasicSamples.TreeGrid = TreeGrid;
    })(BasicSamples = FormulationManagementSystems.BasicSamples || (FormulationManagementSystems.BasicSamples = {}));
})(FormulationManagementSystems || (FormulationManagementSystems = {}));
var FormulationManagementSystems;
(function (FormulationManagementSystems) {
    var BasicSamples;
    (function (BasicSamples) {
        var ViewWithoutIDGrid = (function (_super) {
            __extends(ViewWithoutIDGrid, _super);
            function ViewWithoutIDGrid(container) {
                var _this = _super.call(this, container) || this;
                // this is our autoincrementing counter
                _this.nextId = 1;
                return _this;
            }
            ViewWithoutIDGrid.prototype.getColumnsKey = function () { return "Northwind.SalesByCategory"; };
            ViewWithoutIDGrid.prototype.getIdProperty = function () { return "__id"; };
            ViewWithoutIDGrid.prototype.getNameProperty = function () { return FormulationManagementSystems.Northwind.SalesByCategoryRow.nameProperty; };
            ViewWithoutIDGrid.prototype.getLocalTextPrefix = function () { return FormulationManagementSystems.Northwind.SalesByCategoryRow.localTextPrefix; };
            ViewWithoutIDGrid.prototype.getService = function () { return FormulationManagementSystems.Northwind.SalesByCategoryService.baseUrl; };
            /**
             * This method is called to preprocess data returned from the list service
             */
            ViewWithoutIDGrid.prototype.onViewProcessData = function (response) {
                response = _super.prototype.onViewProcessData.call(this, response);
                // there is no __id property in SalesByCategoryRow but 
                // this is javascript and we can set any property of an object
                for (var _i = 0, _a = response.Entities; _i < _a.length; _i++) {
                    var x = _a[_i];
                    x.__id = this.nextId++;
                }
                return response;
            };
            ViewWithoutIDGrid.prototype.getButtons = function () {
                return [];
            };
            return ViewWithoutIDGrid;
        }(Serenity.EntityGrid));
        ViewWithoutIDGrid = __decorate([
            Serenity.Decorators.registerClass()
        ], ViewWithoutIDGrid);
        BasicSamples.ViewWithoutIDGrid = ViewWithoutIDGrid;
    })(BasicSamples = FormulationManagementSystems.BasicSamples || (FormulationManagementSystems.BasicSamples = {}));
})(FormulationManagementSystems || (FormulationManagementSystems = {}));
var FormulationManagementSystems;
(function (FormulationManagementSystems) {
    var BasicSamples;
    (function (BasicSamples) {
        var VSGalleryQAGrid = (function (_super) {
            __extends(VSGalleryQAGrid, _super);
            function VSGalleryQAGrid(container) {
                return _super.call(this, container) || this;
            }
            VSGalleryQAGrid.prototype.getColumnsKey = function () { return "BasicSamples.VSGalleryQA"; };
            VSGalleryQAGrid.prototype.getIdProperty = function () { return "ThreadId"; };
            VSGalleryQAGrid.prototype.getService = function () { return BasicSamples.VSGalleryQAService.baseUrl; };
            VSGalleryQAGrid.prototype.getButtons = function () {
                return [];
            };
            VSGalleryQAGrid.prototype.getSlickOptions = function () {
                var opt = _super.prototype.getSlickOptions.call(this);
                opt.rowHeight = 250;
                return opt;
            };
            VSGalleryQAGrid.prototype.getColumns = function () {
                var columns = _super.prototype.getColumns.call(this);
                Q.first(columns, function (x) { return x.field == 'Posts'; }).format = function (ctx) {
                    var posts = ctx.value;
                    if (!posts || !posts.length)
                        return "";
                    var i = 0;
                    var text = "<ul class='posts'>";
                    for (var _i = 0, posts_1 = posts; _i < posts_1.length; _i++) {
                        var post = posts_1[_i];
                        text += "<li class='" + (i++ % 2 == 0 ? 'even' : 'odd') + "'><h4>";
                        text += post.PostedByName + " - ";
                        text += Q.formatDate(post.PostedOn, 'g');
                        text += "</h4><pre>";
                        text += Q.htmlEncode(post.Message);
                        text += "</pre></li>";
                    }
                    text += "</ul>";
                    return text;
                };
                return columns;
            };
            VSGalleryQAGrid.prototype.getInitialTitle = function () {
                return null;
            };
            return VSGalleryQAGrid;
        }(Serenity.EntityGrid));
        VSGalleryQAGrid = __decorate([
            Serenity.Decorators.registerClass()
        ], VSGalleryQAGrid);
        BasicSamples.VSGalleryQAGrid = VSGalleryQAGrid;
    })(BasicSamples = FormulationManagementSystems.BasicSamples || (FormulationManagementSystems.BasicSamples = {}));
})(FormulationManagementSystems || (FormulationManagementSystems = {}));
/// <reference path="../../../Northwind/Order/OrderGrid.ts" />
var FormulationManagementSystems;
(function (FormulationManagementSystems) {
    var BasicSamples;
    (function (BasicSamples) {
        var WrappedHeadersGrid = (function (_super) {
            __extends(WrappedHeadersGrid, _super);
            function WrappedHeadersGrid(container) {
                return _super.call(this, container) || this;
            }
            return WrappedHeadersGrid;
        }(FormulationManagementSystems.Northwind.OrderGrid));
        WrappedHeadersGrid = __decorate([
            Serenity.Decorators.registerClass()
        ], WrappedHeadersGrid);
        BasicSamples.WrappedHeadersGrid = WrappedHeadersGrid;
    })(BasicSamples = FormulationManagementSystems.BasicSamples || (FormulationManagementSystems.BasicSamples = {}));
})(FormulationManagementSystems || (FormulationManagementSystems = {}));
var FormulationManagementSystems;
(function (FormulationManagementSystems) {
    var LanguageList;
    (function (LanguageList) {
        function getValue() {
            var result = [];
            for (var _i = 0, _a = FormulationManagementSystems.Administration.LanguageRow.getLookup().items; _i < _a.length; _i++) {
                var k = _a[_i];
                if (k.LanguageId !== 'en') {
                    result.push([k.Id.toString(), k.LanguageName]);
                }
            }
            return result;
        }
        LanguageList.getValue = getValue;
    })(LanguageList = FormulationManagementSystems.LanguageList || (FormulationManagementSystems.LanguageList = {}));
})(FormulationManagementSystems || (FormulationManagementSystems = {}));
/// <reference path="../Common/Helpers/LanguageList.ts" />
var FormulationManagementSystems;
(function (FormulationManagementSystems) {
    var ScriptInitialization;
    (function (ScriptInitialization) {
        Q.Config.responsiveDialogs = true;
        Q.Config.rootNamespaces.push('FormulationManagementSystems');
        Serenity.EntityDialog.defaultLanguageList = FormulationManagementSystems.LanguageList.getValue;
        if ($.fn['colorbox']) {
            $.fn['colorbox'].settings.maxWidth = "95%";
            $.fn['colorbox'].settings.maxHeight = "95%";
        }
        window.onerror = Q.ErrorHandling.runtimeErrorHandler;
    })(ScriptInitialization = FormulationManagementSystems.ScriptInitialization || (FormulationManagementSystems.ScriptInitialization = {}));
})(FormulationManagementSystems || (FormulationManagementSystems = {}));
var FormulationManagementSystems;
(function (FormulationManagementSystems) {
    var BasicProgressDialog = (function (_super) {
        __extends(BasicProgressDialog, _super);
        function BasicProgressDialog() {
            var _this = _super.call(this) || this;
            _this.byId('ProgressBar').progressbar({
                max: 100,
                value: 0,
                change: function (e, v) {
                    _this.byId('ProgressLabel').text(_this.value + ' / ' + _this.max);
                }
            });
            return _this;
        }
        Object.defineProperty(BasicProgressDialog.prototype, "max", {
            get: function () {
                return this.byId('ProgressBar').progressbar().progressbar('option', 'max');
            },
            set: function (value) {
                this.byId('ProgressBar').progressbar().progressbar('option', 'max', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(BasicProgressDialog.prototype, "value", {
            get: function () {
                return this.byId('ProgressBar').progressbar('value');
            },
            set: function (value) {
                this.byId('ProgressBar').progressbar().progressbar('value', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(BasicProgressDialog.prototype, "title", {
            get: function () {
                return this.element.dialog().dialog('option', 'title');
            },
            set: function (value) {
                this.element.dialog().dialog('option', 'title', value);
            },
            enumerable: true,
            configurable: true
        });
        BasicProgressDialog.prototype.getDialogOptions = function () {
            var _this = this;
            var opt = _super.prototype.getDialogOptions.call(this);
            opt.title = Q.text('Site.BasicProgressDialog.PleaseWait');
            opt.width = 600;
            opt.buttons = [{
                    text: Q.text('Dialogs.CancelButton'),
                    click: function () {
                        _this.cancelled = true;
                        _this.element.closest('.ui-dialog')
                            .find('.ui-dialog-buttonpane .ui-button')
                            .attr('disabled', 'disabled')
                            .css('opacity', '0.5');
                        _this.element.dialog('option', 'title', Q.trimToNull(_this.cancelTitle) ||
                            Q.text('Site.BasicProgressDialog.CancelTitle'));
                    }
                }];
            return opt;
        };
        BasicProgressDialog.prototype.initDialog = function () {
            _super.prototype.initDialog.call(this);
            this.element.closest('.ui-dialog').find('.ui-dialog-titlebar-close').hide();
        };
        BasicProgressDialog.prototype.getTemplate = function () {
            return ("<div class='s-DialogContent s-BasicProgressDialogContent'>" +
                "<div id='~_StatusText' class='status-text' ></div>" +
                "<div id='~_ProgressBar' class='progress-bar'>" +
                "<div id='~_ProgressLabel' class='progress-label' ></div>" +
                "</div>" +
                "</div>");
        };
        return BasicProgressDialog;
    }(Serenity.TemplatedDialog));
    FormulationManagementSystems.BasicProgressDialog = BasicProgressDialog;
})(FormulationManagementSystems || (FormulationManagementSystems = {}));
var FormulationManagementSystems;
(function (FormulationManagementSystems) {
    var DialogUtils;
    (function (DialogUtils) {
        function pendingChangesConfirmation(element, hasPendingChanges) {
            element.on('dialogbeforeclose panelbeforeclose', function (e) {
                if (!Serenity.WX.hasOriginalEvent(e) || !hasPendingChanges()) {
                    return;
                }
                e.preventDefault();
                Q.confirm('You have pending changes. Save them?', function () { return element.find('div.save-and-close-button').click(); }, {
                    onNo: function () {
                        if (element.hasClass('ui-dialog-content'))
                            element.dialog('close');
                        else if (element.hasClass('s-Panel'))
                            Serenity.TemplatedDialog.closePanel(element);
                    }
                });
            });
        }
        DialogUtils.pendingChangesConfirmation = pendingChangesConfirmation;
    })(DialogUtils = FormulationManagementSystems.DialogUtils || (FormulationManagementSystems.DialogUtils = {}));
})(FormulationManagementSystems || (FormulationManagementSystems = {}));
var FormulationManagementSystems;
(function (FormulationManagementSystems) {
    var Common;
    (function (Common) {
        var EnumSelectFormatter = (function () {
            function EnumSelectFormatter() {
                this.allowClear = true;
            }
            EnumSelectFormatter.prototype.format = function (ctx) {
                var enumType = Serenity.EnumTypeRegistry.get(this.enumKey);
                var sb = "<select>";
                if (this.allowClear) {
                    sb += '<option value="">';
                    sb += Q.htmlEncode(this.emptyItemText || Q.text("Controls.SelectEditor.EmptyItemText"));
                    sb += '</option>';
                }
                for (var _i = 0, _a = Object.keys(enumType).filter(function (v) { return !isNaN(parseInt(v, 10)); }); _i < _a.length; _i++) {
                    var x = _a[_i];
                    sb += '<option value="' + Q.attrEncode(x) + '"';
                    if (x == ctx.value)
                        sb += " selected";
                    var name = enumType[x];
                    sb += ">";
                    sb += Q.htmlEncode(Q.tryGetText("Enums." + this.enumKey + "." + name) || name);
                    sb += "</option>";
                }
                sb += "</select>";
                return sb;
            };
            return EnumSelectFormatter;
        }());
        __decorate([
            Serenity.Decorators.option()
        ], EnumSelectFormatter.prototype, "enumKey", void 0);
        __decorate([
            Serenity.Decorators.option()
        ], EnumSelectFormatter.prototype, "allowClear", void 0);
        __decorate([
            Serenity.Decorators.option()
        ], EnumSelectFormatter.prototype, "emptyItemText", void 0);
        EnumSelectFormatter = __decorate([
            Serenity.Decorators.registerFormatter()
        ], EnumSelectFormatter);
        Common.EnumSelectFormatter = EnumSelectFormatter;
    })(Common = FormulationManagementSystems.Common || (FormulationManagementSystems.Common = {}));
})(FormulationManagementSystems || (FormulationManagementSystems = {}));
var FormulationManagementSystems;
(function (FormulationManagementSystems) {
    var Common;
    (function (Common) {
        var ExcelExportHelper;
        (function (ExcelExportHelper) {
            function createToolButton(options) {
                return {
                    hint: Q.coalesce(options.hint, 'Excel'),
                    title: Q.coalesce(options.title, ''),
                    cssClass: 'export-xlsx-button',
                    onClick: function () {
                        if (!options.onViewSubmit()) {
                            return;
                        }
                        var grid = options.grid;
                        var request = Q.deepClone(grid.getView().params);
                        request.Take = 0;
                        request.Skip = 0;
                        var sortBy = grid.getView().sortBy;
                        if (sortBy) {
                            request.Sort = sortBy;
                        }
                        request.IncludeColumns = [];
                        var columns = grid.getGrid().getColumns();
                        for (var _i = 0, columns_1 = columns; _i < columns_1.length; _i++) {
                            var column = columns_1[_i];
                            request.IncludeColumns.push(column.id || column.field);
                        }
                        Q.postToService({ service: options.service, request: request, target: '_blank' });
                    },
                    separator: options.separator
                };
            }
            ExcelExportHelper.createToolButton = createToolButton;
        })(ExcelExportHelper = Common.ExcelExportHelper || (Common.ExcelExportHelper = {}));
    })(Common = FormulationManagementSystems.Common || (FormulationManagementSystems.Common = {}));
})(FormulationManagementSystems || (FormulationManagementSystems = {}));
var FormulationManagementSystems;
(function (FormulationManagementSystems) {
    /**
     * This is an editor widget but it only displays a text, not edits it.
     *
     */
    var StaticTextBlock = (function (_super) {
        __extends(StaticTextBlock, _super);
        function StaticTextBlock(container, options) {
            var _this = _super.call(this, container, options) || this;
            // hide the caption label for this editor if in a form. ugly hack
            if (_this.options.hideLabel)
                _this.element.closest('.field').find('.caption').hide();
            _this.updateElementContent();
            return _this;
        }
        StaticTextBlock.prototype.updateElementContent = function () {
            var text = Q.coalesce(this.options.text, this.value);
            // if isLocalText is set, text is actually a local text key
            if (this.options.isLocalText)
                text = Q.text(text);
            // don't html encode if isHtml option is true
            if (this.options.isHtml)
                this.element.html(text);
            else
                this.element.text(text);
        };
        /**
         * By implementing ISetEditValue interface, we allow this editor to display its field value.
         * But only do this when our text content is not explicitly set in options
         */
        StaticTextBlock.prototype.setEditValue = function (source, property) {
            if (this.options.text == null) {
                this.value = Q.coalesce(this.options.text, source[property.name]);
                this.updateElementContent();
            }
        };
        return StaticTextBlock;
    }(Serenity.Widget));
    StaticTextBlock = __decorate([
        Serenity.Decorators.element("<div/>"),
        Serenity.Decorators.registerEditor([Serenity.ISetEditValue])
    ], StaticTextBlock);
    FormulationManagementSystems.StaticTextBlock = StaticTextBlock;
})(FormulationManagementSystems || (FormulationManagementSystems = {}));
var FormulationManagementSystems;
(function (FormulationManagementSystems) {
    var Common;
    (function (Common) {
        var LanguageSelection = (function (_super) {
            __extends(LanguageSelection, _super);
            function LanguageSelection(select, currentLanguage) {
                var _this = _super.call(this, select) || this;
                currentLanguage = Q.coalesce(currentLanguage, 'en');
                _this.change(function (e) {
                    $.cookie('LanguagePreference', select.val(), {
                        path: Q.Config.applicationPath,
                        expires: 365
                    });
                    window.location.reload(true);
                });
                Q.getLookupAsync('Administration.Language').then(function (x) {
                    if (!Q.any(x.items, function (z) { return z.LanguageId === currentLanguage; })) {
                        var idx = currentLanguage.lastIndexOf('-');
                        if (idx >= 0) {
                            currentLanguage = currentLanguage.substr(0, idx);
                            if (!Q.any(x.items, function (y) { return y.LanguageId === currentLanguage; })) {
                                currentLanguage = 'en';
                            }
                        }
                        else {
                            currentLanguage = 'en';
                        }
                    }
                    for (var _i = 0, _a = x.items; _i < _a.length; _i++) {
                        var l = _a[_i];
                        Q.addOption(select, l.LanguageId, l.LanguageName);
                    }
                    select.val(currentLanguage);
                });
                return _this;
            }
            return LanguageSelection;
        }(Serenity.Widget));
        Common.LanguageSelection = LanguageSelection;
    })(Common = FormulationManagementSystems.Common || (FormulationManagementSystems.Common = {}));
})(FormulationManagementSystems || (FormulationManagementSystems = {}));
var FormulationManagementSystems;
(function (FormulationManagementSystems) {
    var Common;
    (function (Common) {
        var SidebarSearch = (function (_super) {
            __extends(SidebarSearch, _super);
            function SidebarSearch(input, menuUL) {
                var _this = _super.call(this, input) || this;
                new Serenity.QuickSearchInput(input, {
                    onSearch: function (field, text, success) {
                        _this.updateMatchFlags(text);
                        success(true);
                    }
                });
                _this.menuUL = menuUL;
                return _this;
            }
            SidebarSearch.prototype.updateMatchFlags = function (text) {
                var liList = this.menuUL.find('li').removeClass('non-match');
                text = Q.trimToNull(text);
                if (text == null) {
                    liList.show();
                    liList.removeClass('expanded');
                    return;
                }
                var parts = text.replace(',', ' ').split(' ').filter(function (x) { return !Q.isTrimmedEmpty(x); });
                for (var i = 0; i < parts.length; i++) {
                    parts[i] = Q.trimToNull(Select2.util.stripDiacritics(parts[i]).toUpperCase());
                }
                var items = liList;
                items.each(function (idx, e) {
                    var x = $(e);
                    var title = Select2.util.stripDiacritics(Q.coalesce(x.text(), '').toUpperCase());
                    for (var _i = 0, parts_1 = parts; _i < parts_1.length; _i++) {
                        var p = parts_1[_i];
                        if (p != null && !(title.indexOf(p) !== -1)) {
                            x.addClass('non-match');
                            break;
                        }
                    }
                });
                var matchingItems = items.not('.non-match');
                var visibles = matchingItems.parents('li').add(matchingItems);
                var nonVisibles = liList.not(visibles);
                nonVisibles.hide().addClass('non-match');
                visibles.show();
                liList.addClass('expanded');
            };
            return SidebarSearch;
        }(Serenity.Widget));
        Common.SidebarSearch = SidebarSearch;
    })(Common = FormulationManagementSystems.Common || (FormulationManagementSystems.Common = {}));
})(FormulationManagementSystems || (FormulationManagementSystems = {}));
var FormulationManagementSystems;
(function (FormulationManagementSystems) {
    var Common;
    (function (Common) {
        var ThemeSelection = (function (_super) {
            __extends(ThemeSelection, _super);
            function ThemeSelection(select) {
                var _this = _super.call(this, select) || this;
                _this.change(function (e) {
                    var path = Q.Config.applicationPath;
                    if (path && path != '/' && Q.endsWith(path, '/'))
                        path = path.substr(0, path.length - 1);
                    $.cookie('ThemePreference', select.val(), {
                        path: path,
                        expires: 365
                    });
                    var theme = select.val() || '';
                    var darkSidebar = theme.indexOf('light') < 0;
                    $('body').removeClass('skin-' + _this.getCurrentTheme());
                    $('body').addClass('skin-' + theme)
                        .toggleClass('dark-sidebar', darkSidebar)
                        .toggleClass('light-sidebar', !darkSidebar);
                });
                Q.addOption(select, 'blue', Q.text('Site.Layout.ThemeBlue'));
                Q.addOption(select, 'blue-light', Q.text('Site.Layout.ThemeBlueLight'));
                Q.addOption(select, 'purple', Q.text('Site.Layout.ThemePurple'));
                Q.addOption(select, 'purple-light', Q.text('Site.Layout.ThemePurpleLight'));
                Q.addOption(select, 'red', Q.text('Site.Layout.ThemeRed'));
                Q.addOption(select, 'red-light', Q.text('Site.Layout.ThemeRedLight'));
                Q.addOption(select, 'green', Q.text('Site.Layout.ThemeGreen'));
                Q.addOption(select, 'green-light', Q.text('Site.Layout.ThemeGreenLight'));
                Q.addOption(select, 'yellow', Q.text('Site.Layout.ThemeYellow'));
                Q.addOption(select, 'yellow-light', Q.text('Site.Layout.ThemeYellowLight'));
                Q.addOption(select, 'black', Q.text('Site.Layout.ThemeBlack'));
                Q.addOption(select, 'black-light', Q.text('Site.Layout.ThemeBlackLight'));
                select.val(_this.getCurrentTheme());
                return _this;
            }
            ThemeSelection.prototype.getCurrentTheme = function () {
                var skinClass = Q.first(($('body').attr('class') || '').split(' '), function (x) { return Q.startsWith(x, 'skin-'); });
                if (skinClass) {
                    return skinClass.substr(5);
                }
                return 'blue';
            };
            return ThemeSelection;
        }(Serenity.Widget));
        Common.ThemeSelection = ThemeSelection;
    })(Common = FormulationManagementSystems.Common || (FormulationManagementSystems.Common = {}));
})(FormulationManagementSystems || (FormulationManagementSystems = {}));
var FormulationManagementSystems;
(function (FormulationManagementSystems) {
    var Common;
    (function (Common) {
        var PdfExportHelper;
        (function (PdfExportHelper) {
            function toAutoTableColumns(srcColumns, columnStyles, columnTitles) {
                return srcColumns.map(function (src) {
                    var col = {
                        dataKey: src.id || src.field,
                        title: src.name || ''
                    };
                    if (columnTitles && columnTitles[col.dataKey] != null)
                        col.title = columnTitles[col.dataKey];
                    var style = {};
                    if ((src.cssClass || '').indexOf("align-right") >= 0)
                        style.halign = 'right';
                    else if ((src.cssClass || '').indexOf("align-center") >= 0)
                        style.halign = 'center';
                    columnStyles[col.dataKey] = style;
                    return col;
                });
            }
            function toAutoTableData(entities, keys, srcColumns) {
                var el = document.createElement('span');
                var row = 0;
                return entities.map(function (item) {
                    var dst = {};
                    for (var cell = 0; cell < srcColumns.length; cell++) {
                        var src = srcColumns[cell];
                        var fld = src.field || '';
                        var key = keys[cell];
                        var txt = void 0;
                        var html = void 0;
                        if (src.formatter) {
                            html = src.formatter(row, cell, item[fld], src, item);
                        }
                        else if (src.format) {
                            html = src.format({ row: row, cell: cell, item: item, value: item[fld] });
                        }
                        else {
                            dst[key] = item[fld];
                            continue;
                        }
                        if (!html || (html.indexOf('<') < 0 && html.indexOf('&') < 0))
                            dst[key] = html;
                        else {
                            el.innerHTML = html;
                            if (el.children.length == 1 &&
                                $(el.children[0]).is(":input")) {
                                dst[key] = $(el.children[0]).val();
                            }
                            else if (el.children.length == 1 &&
                                $(el.children).is('.check-box')) {
                                dst[key] = $(el.children).hasClass("checked") ? "X" : "";
                            }
                            else
                                dst[key] = el.textContent || '';
                        }
                    }
                    row++;
                    return dst;
                });
            }
            function exportToPdf(options) {
                var g = options.grid;
                if (!options.onViewSubmit())
                    return;
                includeAutoTable();
                var request = Q.deepClone(g.view.params);
                request.Take = 0;
                request.Skip = 0;
                var sortBy = g.view.sortBy;
                if (sortBy != null)
                    request.Sort = sortBy;
                var gridColumns = g.slickGrid.getColumns();
                gridColumns = gridColumns.filter(function (x) { return x.id !== "__select__"; });
                request.IncludeColumns = [];
                for (var _i = 0, gridColumns_1 = gridColumns; _i < gridColumns_1.length; _i++) {
                    var column = gridColumns_1[_i];
                    request.IncludeColumns.push(column.id || column.field);
                }
                Q.serviceCall({
                    url: g.view.url,
                    request: request,
                    onSuccess: function (response) {
                        var doc = new jsPDF('l', 'pt');
                        var srcColumns = gridColumns;
                        var columnStyles = {};
                        var columns = toAutoTableColumns(srcColumns, columnStyles, options.columnTitles);
                        var keys = columns.map(function (x) { return x.dataKey; });
                        var entities = response.Entities || [];
                        var data = toAutoTableData(entities, keys, srcColumns);
                        doc.setFontSize(options.titleFontSize || 10);
                        doc.setFontStyle('bold');
                        var reportTitle = options.reportTitle || g.getTitle() || "Report";
                        doc.autoTableText(reportTitle, doc.internal.pageSize.width / 2, options.titleTop || 25, { halign: 'center' });
                        var totalPagesExp = "{{T}}";
                        var pageNumbers = options.pageNumbers == null || options.pageNumbers;
                        var autoOptions = $.extend({
                            margin: { top: 25, left: 25, right: 25, bottom: pageNumbers ? 25 : 30 },
                            startY: 60,
                            styles: {
                                fontSize: 8,
                                overflow: 'linebreak',
                                cellPadding: 2,
                                valign: 'middle'
                            },
                            columnStyles: columnStyles
                        }, options.tableOptions);
                        if (pageNumbers) {
                            var footer = function (data) {
                                var str = data.pageCount;
                                // Total page number plugin only available in jspdf v1.0+
                                if (typeof doc.putTotalPages === 'function') {
                                    str = str + " / " + totalPagesExp;
                                }
                                doc.autoTableText(str, doc.internal.pageSize.width / 2, doc.internal.pageSize.height - autoOptions.margin.bottom, {
                                    halign: 'center'
                                });
                            };
                            autoOptions.afterPageContent = footer;
                        }
                        // Print header of page
                        if (options.printDateTimeHeader == null || options.printDateTimeHeader) {
                            var beforePage = function (data) {
                                doc.setFontStyle('normal');
                                doc.setFontSize(8);
                                // Date and time of the report
                                doc.autoTableText(Q.formatDate(new Date(), "dd-MM-yyyy HH:mm"), doc.internal.pageSize.width - autoOptions.margin.right, 13, {
                                    halign: 'right'
                                });
                            };
                            autoOptions.beforePageContent = beforePage;
                        }
                        doc.autoTable(columns, data, autoOptions);
                        if (typeof doc.putTotalPages === 'function') {
                            doc.putTotalPages(totalPagesExp);
                        }
                        if (!options.output || options.output == "file") {
                            var fileName = options.fileName || options.reportTitle || "{0}_{1}.pdf";
                            fileName = Q.format(fileName, g.getTitle() || "report", Q.formatDate(new Date(), "yyyyMMdd_HHmm"));
                            doc.save(fileName);
                            return;
                        }
                        if (options.autoPrint)
                            doc.autoPrint();
                        var output = options.output;
                        if (output == 'newwindow' || '_blank')
                            output = 'dataurlnewwindow';
                        else if (output == 'window')
                            output = 'datauri';
                        if (output == 'datauri')
                            doc.output(output);
                        else {
                            var tmpOut = doc.output('datauristring');
                            if (output == 'dataurlnewwindow') {
                                var fileTmpName = options.reportTitle || g.getTitle();
                                var url_with_name = tmpOut.replace("data:application/pdf;", "data:application/pdf;name=" + fileTmpName + ".pdf;");
                                var html = '<html>' +
                                    '<style>html, body { padding: 0; margin: 0; } iframe { width: 100%; height: 100%; border: 0;}  </style>' +
                                    '<body>' +
                                    '<p></p>' +
                                    '<iframe type="application/pdf" src="' + url_with_name + '"></iframe>' +
                                    '</body></html>';
                                var a = window.open("about:blank", "_blank");
                                a.document.write(html);
                                a.document.close();
                            }
                        }
                    }
                });
            }
            PdfExportHelper.exportToPdf = exportToPdf;
            function createToolButton(options) {
                return {
                    title: options.title || '',
                    hint: options.hint || 'PDF',
                    cssClass: 'export-pdf-button',
                    onClick: function () { return exportToPdf(options); },
                    separator: options.separator
                };
            }
            PdfExportHelper.createToolButton = createToolButton;
            function includeJsPDF() {
                if (typeof jsPDF !== "undefined")
                    return;
                var script = $("jsPDFScript");
                if (script.length > 0)
                    return;
                $("<script/>")
                    .attr("type", "text/javascript")
                    .attr("id", "jsPDFScript")
                    .attr("src", Q.resolveUrl("~/Scripts/jspdf.min.js"))
                    .appendTo(document.head);
            }
            function includeAutoTable() {
                includeJsPDF();
                if (typeof jsPDF === "undefined" ||
                    typeof jsPDF.API == "undefined" ||
                    typeof jsPDF.API.autoTable !== "undefined")
                    return;
                var script = $("jsPDFAutoTableScript");
                if (script.length > 0)
                    return;
                $("<script/>")
                    .attr("type", "text/javascript")
                    .attr("id", "jsPDFAutoTableScript")
                    .attr("src", Q.resolveUrl("~/Scripts/jspdf.plugin.autotable.min.js"))
                    .appendTo(document.head);
            }
        })(PdfExportHelper = Common.PdfExportHelper || (Common.PdfExportHelper = {}));
    })(Common = FormulationManagementSystems.Common || (FormulationManagementSystems.Common = {}));
})(FormulationManagementSystems || (FormulationManagementSystems = {}));
var FormulationManagementSystems;
(function (FormulationManagementSystems) {
    var Common;
    (function (Common) {
        var ReportDialog = (function (_super) {
            __extends(ReportDialog, _super);
            function ReportDialog(options) {
                var _this = _super.call(this, options) || this;
                _this.updateInterface();
                _this.loadReport(_this.options.reportKey);
                return _this;
            }
            ReportDialog.prototype.getDialogButtons = function () {
                return null;
            };
            ReportDialog.prototype.createPropertyGrid = function () {
                this.propertyGrid && this.byId('PropertyGrid').html('').attr('class', '');
                this.propertyGrid = new Serenity.PropertyGrid(this.byId('PropertyGrid'), {
                    idPrefix: this.idPrefix,
                    useCategories: true,
                    items: this.report.Properties
                }).init(null);
            };
            ReportDialog.prototype.loadReport = function (reportKey) {
                var _this = this;
                Q.serviceCall({
                    url: Q.resolveUrl('~/Report/Retrieve'),
                    request: {
                        ReportKey: reportKey
                    },
                    onSuccess: function (response) {
                        _this.report = response;
                        _this.element.dialog().dialog('option', 'title', _this.report.Title);
                        _this.createPropertyGrid();
                        _this.propertyGrid.load(_this.report.InitialSettings || {});
                        _this.updateInterface();
                        _this.dialogOpen();
                    }
                });
            };
            ReportDialog.prototype.updateInterface = function () {
                this.toolbar.findButton('print-preview-button')
                    .toggle(this.report && !this.report.IsDataOnlyReport);
                this.toolbar.findButton('export-pdf-button')
                    .toggle(this.report && !this.report.IsDataOnlyReport);
                this.toolbar.findButton('export-xlsx-button')
                    .toggle(this.report && this.report.IsDataOnlyReport);
            };
            ReportDialog.prototype.executeReport = function (target, ext, download) {
                if (!this.validateForm()) {
                    return;
                }
                var opt = {};
                this.propertyGrid.save(opt);
                Common.ReportHelper.execute({
                    download: download,
                    reportKey: this.report.ReportKey,
                    extension: ext,
                    target: target,
                    params: opt
                });
            };
            ReportDialog.prototype.getToolbarButtons = function () {
                var _this = this;
                return [
                    {
                        title: 'Preview',
                        cssClass: 'print-preview-button',
                        onClick: function () { return _this.executeReport('_blank', null, false); }
                    },
                    {
                        title: 'PDF',
                        cssClass: 'export-pdf-button',
                        onClick: function () { return _this.executeReport('_blank', 'pdf', true); }
                    },
                    {
                        title: 'Excel',
                        cssClass: 'export-xlsx-button',
                        onClick: function () { return _this.executeReport('_blank', 'xlsx', true); }
                    }
                ];
            };
            return ReportDialog;
        }(Serenity.TemplatedDialog));
        Common.ReportDialog = ReportDialog;
    })(Common = FormulationManagementSystems.Common || (FormulationManagementSystems.Common = {}));
})(FormulationManagementSystems || (FormulationManagementSystems = {}));
var FormulationManagementSystems;
(function (FormulationManagementSystems) {
    var Common;
    (function (Common) {
        var ReportHelper;
        (function (ReportHelper) {
            function createToolButton(options) {
                return {
                    title: Q.coalesce(options.title, 'Report'),
                    cssClass: Q.coalesce(options.cssClass, 'print-button'),
                    icon: options.icon,
                    onClick: function () {
                        ReportHelper.execute(options);
                    }
                };
            }
            ReportHelper.createToolButton = createToolButton;
            function execute(options) {
                var opt = options.getParams ? options.getParams() : options.params;
                Q.postToUrl({
                    url: '~/Report/' + (options.download ? 'Download' : 'Render'),
                    params: {
                        key: options.reportKey,
                        ext: Q.coalesce(options.extension, 'pdf'),
                        opt: opt ? $.toJSON(opt) : ''
                    },
                    target: Q.coalesce(options.target, '_blank')
                });
            }
            ReportHelper.execute = execute;
        })(ReportHelper = Common.ReportHelper || (Common.ReportHelper = {}));
    })(Common = FormulationManagementSystems.Common || (FormulationManagementSystems.Common = {}));
})(FormulationManagementSystems || (FormulationManagementSystems = {}));
var FormulationManagementSystems;
(function (FormulationManagementSystems) {
    var Common;
    (function (Common) {
        var ReportPage = (function (_super) {
            __extends(ReportPage, _super);
            function ReportPage(element) {
                var _this = _super.call(this, element) || this;
                $('.report-link', element).click(function (e) { return _this.reportLinkClick(e); });
                $('div.line', element).click(function (e) { return _this.categoryClick(e); });
                new Serenity.QuickSearchInput($('.s-QuickSearchBar input', element), {
                    onSearch: function (field, text, done) {
                        _this.updateMatchFlags(text);
                        done(true);
                    }
                });
                return _this;
            }
            ReportPage.prototype.updateMatchFlags = function (text) {
                var liList = $('.report-list', this.element).find('li').removeClass('non-match');
                text = Q.trimToNull(text);
                if (!text) {
                    liList.children('ul').hide();
                    liList.show().removeClass('expanded');
                    return;
                }
                text = Select2.util.stripDiacritics(text).toUpperCase();
                var reportItems = liList.filter('.report-item');
                reportItems.each(function (ix, e) {
                    var x = $(e);
                    var title = Select2.util.stripDiacritics(Q.coalesce(x.text(), '').toUpperCase());
                    if (title.indexOf(text) < 0) {
                        x.addClass('non-match');
                    }
                });
                var matchingItems = reportItems.not('.non-match');
                var visibles = matchingItems.parents('li').add(matchingItems);
                var nonVisibles = liList.not(visibles);
                nonVisibles.hide().addClass('non-match');
                visibles.show();
                if (visibles.length <= 100) {
                    liList.children('ul').show();
                    liList.addClass('expanded');
                }
            };
            ReportPage.prototype.categoryClick = function (e) {
                var li = $(e.target).closest('li');
                if (li.hasClass('expanded')) {
                    li.find('ul').hide('fast');
                    li.removeClass('expanded');
                    li.find('li').removeClass('expanded');
                }
                else {
                    li.addClass('expanded');
                    li.children('ul').show('fast');
                    if (li.children('ul').children('li').length === 1 && !li.children('ul').children('li').hasClass('expanded')) {
                        li.children('ul').children('li').children('.line').click();
                    }
                }
            };
            ReportPage.prototype.reportLinkClick = function (e) {
                e.preventDefault();
                new Common.ReportDialog({
                    reportKey: $(e.target).data('key')
                }).dialogOpen();
            };
            return ReportPage;
        }(Serenity.Widget));
        Common.ReportPage = ReportPage;
    })(Common = FormulationManagementSystems.Common || (FormulationManagementSystems.Common = {}));
})(FormulationManagementSystems || (FormulationManagementSystems = {}));
var FormulationManagementSystems;
(function (FormulationManagementSystems) {
    var Common;
    (function (Common) {
        var UserPreferenceStorage = (function () {
            function UserPreferenceStorage() {
            }
            UserPreferenceStorage.prototype.getItem = function (key) {
                var value;
                Common.UserPreferenceService.Retrieve({
                    PreferenceType: "UserPreferenceStorage",
                    Name: key
                }, function (response) { return value = response.Value; }, {
                    async: false
                });
                return value;
            };
            UserPreferenceStorage.prototype.setItem = function (key, data) {
                Common.UserPreferenceService.Update({
                    PreferenceType: "UserPreferenceStorage",
                    Name: key,
                    Value: data
                });
            };
            return UserPreferenceStorage;
        }());
        Common.UserPreferenceStorage = UserPreferenceStorage;
    })(Common = FormulationManagementSystems.Common || (FormulationManagementSystems.Common = {}));
})(FormulationManagementSystems || (FormulationManagementSystems = {}));
var FormulationManagementSystems;
(function (FormulationManagementSystems) {
    var Membership;
    (function (Membership) {
        var ChangePasswordPanel = (function (_super) {
            __extends(ChangePasswordPanel, _super);
            function ChangePasswordPanel(container) {
                var _this = _super.call(this, container) || this;
                _this.form = new Membership.ChangePasswordForm(_this.idPrefix);
                _this.form.NewPassword.addValidationRule(_this.uniqueName, function (e) {
                    if (_this.form.w('ConfirmPassword', Serenity.PasswordEditor).value.length < 7) {
                        return Q.format(Q.text('Validation.MinRequiredPasswordLength'), 7);
                    }
                });
                _this.form.ConfirmPassword.addValidationRule(_this.uniqueName, function (e) {
                    if (_this.form.ConfirmPassword.value !== _this.form.NewPassword.value) {
                        return Q.text('Validation.PasswordConfirm');
                    }
                });
                _this.byId('SubmitButton').click(function (e) {
                    e.preventDefault();
                    if (!_this.validateForm()) {
                        return;
                    }
                    var request = _this.getSaveEntity();
                    Q.serviceCall({
                        url: Q.resolveUrl('~/Account/ChangePassword'),
                        request: request,
                        onSuccess: function (response) {
                            Q.information(Q.text('Forms.Membership.ChangePassword.Success'), function () {
                                window.location.href = Q.resolveUrl('~/');
                            });
                        }
                    });
                });
                return _this;
            }
            ChangePasswordPanel.prototype.getFormKey = function () { return Membership.ChangePasswordForm.formKey; };
            return ChangePasswordPanel;
        }(Serenity.PropertyPanel));
        ChangePasswordPanel = __decorate([
            Serenity.Decorators.registerClass()
        ], ChangePasswordPanel);
        Membership.ChangePasswordPanel = ChangePasswordPanel;
    })(Membership = FormulationManagementSystems.Membership || (FormulationManagementSystems.Membership = {}));
})(FormulationManagementSystems || (FormulationManagementSystems = {}));
var FormulationManagementSystems;
(function (FormulationManagementSystems) {
    var Membership;
    (function (Membership) {
        var ForgotPasswordPanel = (function (_super) {
            __extends(ForgotPasswordPanel, _super);
            function ForgotPasswordPanel(container) {
                var _this = _super.call(this, container) || this;
                _this.form = new Membership.ForgotPasswordForm(_this.idPrefix);
                _this.byId('SubmitButton').click(function (e) {
                    e.preventDefault();
                    if (!_this.validateForm()) {
                        return;
                    }
                    var request = _this.getSaveEntity();
                    Q.serviceCall({
                        url: Q.resolveUrl('~/Account/ForgotPassword'),
                        request: request,
                        onSuccess: function (response) {
                            Q.information(Q.text('Forms.Membership.ForgotPassword.Success'), function () {
                                window.location.href = Q.resolveUrl('~/');
                            });
                        }
                    });
                });
                return _this;
            }
            ForgotPasswordPanel.prototype.getFormKey = function () { return Membership.ForgotPasswordForm.formKey; };
            return ForgotPasswordPanel;
        }(Serenity.PropertyPanel));
        ForgotPasswordPanel = __decorate([
            Serenity.Decorators.registerClass()
        ], ForgotPasswordPanel);
        Membership.ForgotPasswordPanel = ForgotPasswordPanel;
    })(Membership = FormulationManagementSystems.Membership || (FormulationManagementSystems.Membership = {}));
})(FormulationManagementSystems || (FormulationManagementSystems = {}));
var FormulationManagementSystems;
(function (FormulationManagementSystems) {
    var Membership;
    (function (Membership) {
        var ResetPasswordPanel = (function (_super) {
            __extends(ResetPasswordPanel, _super);
            function ResetPasswordPanel(container) {
                var _this = _super.call(this, container) || this;
                _this.form = new Membership.ResetPasswordForm(_this.idPrefix);
                _this.form.NewPassword.addValidationRule(_this.uniqueName, function (e) {
                    if (_this.form.ConfirmPassword.value.length < 7) {
                        return Q.format(Q.text('Validation.MinRequiredPasswordLength'), 7);
                    }
                });
                _this.form.ConfirmPassword.addValidationRule(_this.uniqueName, function (e) {
                    if (_this.form.ConfirmPassword.value !== _this.form.NewPassword.value) {
                        return Q.text('Validation.PasswordConfirm');
                    }
                });
                _this.byId('SubmitButton').click(function (e) {
                    e.preventDefault();
                    if (!_this.validateForm()) {
                        return;
                    }
                    var request = _this.getSaveEntity();
                    request.Token = _this.byId('Token').val();
                    Q.serviceCall({
                        url: Q.resolveUrl('~/Account/ResetPassword'),
                        request: request,
                        onSuccess: function (response) {
                            Q.information(Q.text('Forms.Membership.ResetPassword.Success'), function () {
                                window.location.href = Q.resolveUrl('~/Account/Login');
                            });
                        }
                    });
                });
                return _this;
            }
            ResetPasswordPanel.prototype.getFormKey = function () { return Membership.ResetPasswordForm.formKey; };
            return ResetPasswordPanel;
        }(Serenity.PropertyPanel));
        ResetPasswordPanel = __decorate([
            Serenity.Decorators.registerClass()
        ], ResetPasswordPanel);
        Membership.ResetPasswordPanel = ResetPasswordPanel;
    })(Membership = FormulationManagementSystems.Membership || (FormulationManagementSystems.Membership = {}));
})(FormulationManagementSystems || (FormulationManagementSystems = {}));
var FormulationManagementSystems;
(function (FormulationManagementSystems) {
    var Membership;
    (function (Membership) {
        var SignUpPanel = (function (_super) {
            __extends(SignUpPanel, _super);
            function SignUpPanel(container) {
                var _this = _super.call(this, container) || this;
                _this.form = new Membership.SignUpForm(_this.idPrefix);
                _this.form.ConfirmEmail.addValidationRule(_this.uniqueName, function (e) {
                    if (_this.form.ConfirmEmail.value !== _this.form.Email.value) {
                        return Q.text('Validation.EmailConfirm');
                    }
                });
                _this.form.ConfirmPassword.addValidationRule(_this.uniqueName, function (e) {
                    if (_this.form.ConfirmPassword.value !== _this.form.Password.value) {
                        return Q.text('Validation.PasswordConfirm');
                    }
                });
                _this.byId('SubmitButton').click(function (e) {
                    e.preventDefault();
                    if (!_this.validateForm()) {
                        return;
                    }
                    Q.serviceCall({
                        url: Q.resolveUrl('~/Account/SignUp'),
                        request: {
                            DisplayName: _this.form.DisplayName.value,
                            Email: _this.form.Email.value,
                            Password: _this.form.Password.value
                        },
                        onSuccess: function (response) {
                            Q.information(Q.text('Forms.Membership.SignUp.Success'), function () {
                                window.location.href = Q.resolveUrl('~/');
                            });
                        }
                    });
                });
                return _this;
            }
            SignUpPanel.prototype.getFormKey = function () { return Membership.SignUpForm.formKey; };
            return SignUpPanel;
        }(Serenity.PropertyPanel));
        SignUpPanel = __decorate([
            Serenity.Decorators.registerClass()
        ], SignUpPanel);
        Membership.SignUpPanel = SignUpPanel;
    })(Membership = FormulationManagementSystems.Membership || (FormulationManagementSystems.Membership = {}));
})(FormulationManagementSystems || (FormulationManagementSystems = {}));
var FormulationManagementSystems;
(function (FormulationManagementSystems) {
    var Northwind;
    (function (Northwind) {
        var CustomerEditor = (function (_super) {
            __extends(CustomerEditor, _super);
            function CustomerEditor(hidden) {
                return _super.call(this, hidden) || this;
            }
            CustomerEditor.prototype.getLookupKey = function () {
                return Northwind.CustomerRow.lookupKey;
            };
            CustomerEditor.prototype.getItemText = function (item, lookup) {
                return _super.prototype.getItemText.call(this, item, lookup) + ' [' + item.CustomerID + ']';
            };
            return CustomerEditor;
        }(Serenity.LookupEditorBase));
        CustomerEditor = __decorate([
            Serenity.Decorators.registerEditor()
        ], CustomerEditor);
        Northwind.CustomerEditor = CustomerEditor;
    })(Northwind = FormulationManagementSystems.Northwind || (FormulationManagementSystems.Northwind = {}));
})(FormulationManagementSystems || (FormulationManagementSystems = {}));
/// <reference path="../Order/OrderDialog.ts" />
var FormulationManagementSystems;
(function (FormulationManagementSystems) {
    var Northwind;
    (function (Northwind) {
        var CustomerOrderDialog = (function (_super) {
            __extends(CustomerOrderDialog, _super);
            function CustomerOrderDialog() {
                return _super.call(this) || this;
            }
            CustomerOrderDialog.prototype.updateInterface = function () {
                _super.prototype.updateInterface.call(this);
                Serenity.EditorUtils.setReadOnly(this.form.CustomerID, true);
            };
            return CustomerOrderDialog;
        }(Northwind.OrderDialog));
        CustomerOrderDialog = __decorate([
            Serenity.Decorators.registerClass()
        ], CustomerOrderDialog);
        Northwind.CustomerOrderDialog = CustomerOrderDialog;
    })(Northwind = FormulationManagementSystems.Northwind || (FormulationManagementSystems.Northwind = {}));
})(FormulationManagementSystems || (FormulationManagementSystems = {}));
/// <reference path="../Order/OrderGrid.ts" />
var FormulationManagementSystems;
(function (FormulationManagementSystems) {
    var Northwind;
    (function (Northwind) {
        var CustomerOrdersGrid = (function (_super) {
            __extends(CustomerOrdersGrid, _super);
            function CustomerOrdersGrid(container) {
                return _super.call(this, container) || this;
            }
            CustomerOrdersGrid.prototype.getDialogType = function () { return Northwind.CustomerOrderDialog; };
            CustomerOrdersGrid.prototype.getColumns = function () {
                return _super.prototype.getColumns.call(this).filter(function (x) { return x.field !== fld.CustomerCompanyName; });
            };
            CustomerOrdersGrid.prototype.initEntityDialog = function (itemType, dialog) {
                _super.prototype.initEntityDialog.call(this, itemType, dialog);
                Serenity.SubDialogHelper.cascade(dialog, this.element.closest('.ui-dialog'));
            };
            CustomerOrdersGrid.prototype.addButtonClick = function () {
                this.editItem({ CustomerID: this.customerID });
            };
            CustomerOrdersGrid.prototype.getInitialTitle = function () {
                return null;
            };
            CustomerOrdersGrid.prototype.getGridCanLoad = function () {
                return _super.prototype.getGridCanLoad.call(this) && !!this.customerID;
            };
            Object.defineProperty(CustomerOrdersGrid.prototype, "customerID", {
                get: function () {
                    return this._customerID;
                },
                set: function (value) {
                    if (this._customerID !== value) {
                        this._customerID = value;
                        this.setEquality('CustomerID', value);
                        this.refresh();
                    }
                },
                enumerable: true,
                configurable: true
            });
            return CustomerOrdersGrid;
        }(Northwind.OrderGrid));
        CustomerOrdersGrid = __decorate([
            Serenity.Decorators.registerClass()
        ], CustomerOrdersGrid);
        Northwind.CustomerOrdersGrid = CustomerOrdersGrid;
    })(Northwind = FormulationManagementSystems.Northwind || (FormulationManagementSystems.Northwind = {}));
})(FormulationManagementSystems || (FormulationManagementSystems = {}));
var FormulationManagementSystems;
(function (FormulationManagementSystems) {
    var Northwind;
    (function (Northwind) {
        var EmployeeListFormatter = (function () {
            function EmployeeListFormatter() {
            }
            EmployeeListFormatter.prototype.format = function (ctx) {
                var idList = ctx.value;
                if (!idList || !idList.length)
                    return "";
                var byId = Northwind.EmployeeRow.getLookup().itemById;
                var z;
                return idList.map(function (x) { return ((z = byId[x]) ? z.FullName : x); }).join(", ");
            };
            return EmployeeListFormatter;
        }());
        EmployeeListFormatter = __decorate([
            Serenity.Decorators.registerFormatter()
        ], EmployeeListFormatter);
        Northwind.EmployeeListFormatter = EmployeeListFormatter;
    })(Northwind = FormulationManagementSystems.Northwind || (FormulationManagementSystems.Northwind = {}));
})(FormulationManagementSystems || (FormulationManagementSystems = {}));
var FormulationManagementSystems;
(function (FormulationManagementSystems) {
    var Northwind;
    (function (Northwind) {
        var EmployeeFormatter = (function () {
            function EmployeeFormatter() {
            }
            EmployeeFormatter.prototype.format = function (ctx) {
                var text = Q.htmlEncode(ctx.value);
                if (!this.genderProperty) {
                    return text;
                }
                var gender = ctx.item[this.genderProperty];
                return "<span class='" + ((gender === Northwind.Gender.Female) ?
                    'employee-symbol female' : 'employee-symbol male') +
                    "'>" + text + '</span>';
            };
            EmployeeFormatter.prototype.initializeColumn = function (column) {
                column.referencedFields = column.referencedFields || [];
                if (this.genderProperty)
                    column.referencedFields.push(this.genderProperty);
            };
            return EmployeeFormatter;
        }());
        __decorate([
            Serenity.Decorators.option()
        ], EmployeeFormatter.prototype, "genderProperty", void 0);
        EmployeeFormatter = __decorate([
            Serenity.Decorators.registerFormatter([Serenity.ISlickFormatter, Serenity.IInitializeColumn])
        ], EmployeeFormatter);
        Northwind.EmployeeFormatter = EmployeeFormatter;
    })(Northwind = FormulationManagementSystems.Northwind || (FormulationManagementSystems.Northwind = {}));
})(FormulationManagementSystems || (FormulationManagementSystems = {}));
var FormulationManagementSystems;
(function (FormulationManagementSystems) {
    var Northwind;
    (function (Northwind) {
        var NoteDialog = (function (_super) {
            __extends(NoteDialog, _super);
            function NoteDialog() {
                var _this = _super.call(this) || this;
                _this.textEditor = new Serenity.HtmlNoteContentEditor(_this.byId('Text'));
                return _this;
            }
            NoteDialog.prototype.getTemplate = function () {
                return ("<form id='~_Form' class='s-Form'>" +
                    "<textarea id='~_Text' class='required'></textarea>" +
                    "</form>");
            };
            NoteDialog.prototype.getDialogOptions = function () {
                var _this = this;
                var opt = _super.prototype.getDialogOptions.call(this);
                opt.buttons = [{
                        text: Q.text('Dialogs.OkButton'),
                        click: function () {
                            if (!_this.validateForm()) {
                                return;
                            }
                            _this.okClick && _this.okClick();
                        }
                    }, {
                        text: Q.text('Dialogs.CancelButton'),
                        click: function () { return _this.dialogClose(); }
                    }
                ];
                return opt;
            };
            Object.defineProperty(NoteDialog.prototype, "text", {
                get: function () {
                    return this.textEditor.value;
                },
                set: function (value) {
                    this.textEditor.value = value;
                },
                enumerable: true,
                configurable: true
            });
            return NoteDialog;
        }(Serenity.TemplatedDialog));
        NoteDialog = __decorate([
            Serenity.Decorators.registerClass()
        ], NoteDialog);
        Northwind.NoteDialog = NoteDialog;
    })(Northwind = FormulationManagementSystems.Northwind || (FormulationManagementSystems.Northwind = {}));
})(FormulationManagementSystems || (FormulationManagementSystems = {}));
var FormulationManagementSystems;
(function (FormulationManagementSystems) {
    var Northwind;
    (function (Northwind) {
        var NotesEditor = (function (_super) {
            __extends(NotesEditor, _super);
            function NotesEditor(div) {
                var _this = _super.call(this, div) || this;
                new Serenity.Toolbar(_this.byId('Toolbar'), {
                    buttons: [{
                            title: 'Add Note',
                            cssClass: 'add-button',
                            onClick: function (e) {
                                e.preventDefault();
                                _this.addClick();
                            }
                        }]
                });
                return _this;
            }
            NotesEditor.prototype.getTemplate = function () {
                return "<div><div id='~_Toolbar'></div><ul id='~_NoteList'></ul></div>";
            };
            NotesEditor.prototype.updateContent = function () {
                var _this = this;
                var noteList = this.byId('NoteList');
                noteList.children().remove();
                if (this.items) {
                    var index = 0;
                    for (var t1 = 0; t1 < this.items.length; t1++) {
                        var item = this.items[t1];
                        var li = $('<li/>');
                        $('<div/>').addClass('note-text').html(Q.coalesce(item.Text, '')).appendTo(li);
                        $('<a/>').attr('href', '#').addClass('note-date')
                            .text(item.InsertUserDisplayName + ' - ' +
                            Q.formatDate(item.InsertDate, 'g'))
                            .data('index', index).appendTo(li).click(function (e) { return _this.editClick(e); });
                        $('<a/>').attr('href', '#').addClass('note-delete')
                            .attr('title', 'delete note').data('index', index)
                            .appendTo(li).click(function (e) { return _this.deleteClick(e); });
                        li.appendTo(noteList);
                        index++;
                    }
                }
            };
            NotesEditor.prototype.addClick = function () {
                var _this = this;
                var dlg = new Northwind.NoteDialog();
                dlg.dialogTitle = 'Add Note';
                dlg.okClick = function () {
                    var text = Q.trimToNull(dlg.text);
                    if (text == null) {
                        return;
                    }
                    _this.items = _this.items || [];
                    Q.insert(_this.items, 0, {
                        Text: text,
                        InsertUserDisplayName: FormulationManagementSystems.Authorization.userDefinition.DisplayName,
                        InsertDate: Q.formatISODateTimeUTC(new Date())
                    });
                    _this.updateContent();
                    dlg.dialogClose();
                    _this.set_isDirty(true);
                    _this.onChange && _this.onChange();
                };
                dlg.dialogOpen();
            };
            NotesEditor.prototype.editClick = function (e) {
                var _this = this;
                e.preventDefault();
                var index = $(e.target).data('index');
                var old = this.items[index];
                var dlg = new Northwind.NoteDialog();
                dlg.dialogTitle = 'Edit Note';
                dlg.text = old.Text;
                dlg.okClick = function () {
                    var text = Q.trimToNull(dlg.text);
                    if (!text) {
                        return;
                    }
                    _this.items[index].Text = text;
                    _this.updateContent();
                    dlg.dialogClose();
                    _this.set_isDirty(true);
                    _this.onChange && _this.onChange();
                };
                dlg.dialogOpen();
            };
            NotesEditor.prototype.deleteClick = function (e) {
                var _this = this;
                e.preventDefault();
                var index = $(e.target).data('index');
                Q.confirm('Delete this note?', function () {
                    _this.items.splice(index, 1);
                    _this.updateContent();
                    _this.set_isDirty(true);
                    _this.onChange && _this.onChange();
                });
            };
            Object.defineProperty(NotesEditor.prototype, "value", {
                get: function () {
                    return this.items;
                },
                set: function (value) {
                    this.items = value || [];
                    this.set_isDirty(false);
                    this.updateContent();
                },
                enumerable: true,
                configurable: true
            });
            NotesEditor.prototype.getEditValue = function (prop, target) {
                target[prop.name] = this.value;
            };
            NotesEditor.prototype.setEditValue = function (source, prop) {
                this.value = source[prop.name] || [];
            };
            NotesEditor.prototype.get_isDirty = function () {
                return this.isDirty;
            };
            NotesEditor.prototype.set_isDirty = function (value) {
                this.isDirty = value;
            };
            return NotesEditor;
        }(Serenity.TemplatedWidget));
        NotesEditor = __decorate([
            Serenity.Decorators.registerEditor([Serenity.IGetEditValue, Serenity.ISetEditValue]),
            Serenity.Decorators.element("<div/>")
        ], NotesEditor);
        Northwind.NotesEditor = NotesEditor;
    })(Northwind = FormulationManagementSystems.Northwind || (FormulationManagementSystems.Northwind = {}));
})(FormulationManagementSystems || (FormulationManagementSystems = {}));
var FormulationManagementSystems;
(function (FormulationManagementSystems) {
    var Northwind;
    (function (Northwind) {
        var FreightFormatter = (function () {
            function FreightFormatter() {
            }
            FreightFormatter.prototype.format = function (ctx) {
                return "<span class='freight-symbol'>" + Q.htmlEncode(ctx.value) + '</span>';
            };
            return FreightFormatter;
        }());
        FreightFormatter = __decorate([
            Serenity.Decorators.registerFormatter()
        ], FreightFormatter);
        Northwind.FreightFormatter = FreightFormatter;
    })(Northwind = FormulationManagementSystems.Northwind || (FormulationManagementSystems.Northwind = {}));
})(FormulationManagementSystems || (FormulationManagementSystems = {}));
var FormulationManagementSystems;
(function (FormulationManagementSystems) {
    var Northwind;
    (function (Northwind) {
        var RegionDialog = (function (_super) {
            __extends(RegionDialog, _super);
            function RegionDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Northwind.RegionForm(_this.idPrefix);
                return _this;
            }
            RegionDialog.prototype.getFormKey = function () { return Northwind.RegionForm.formKey; };
            RegionDialog.prototype.getIdProperty = function () { return Northwind.RegionRow.idProperty; };
            RegionDialog.prototype.getLocalTextPrefix = function () { return Northwind.RegionRow.localTextPrefix; };
            RegionDialog.prototype.getNameProperty = function () { return Northwind.RegionRow.nameProperty; };
            RegionDialog.prototype.getService = function () { return Northwind.RegionService.baseUrl; };
            RegionDialog.prototype.getLanguages = function () {
                return FormulationManagementSystems.LanguageList.getValue();
            };
            return RegionDialog;
        }(Serenity.EntityDialog));
        RegionDialog = __decorate([
            Serenity.Decorators.registerClass()
        ], RegionDialog);
        Northwind.RegionDialog = RegionDialog;
    })(Northwind = FormulationManagementSystems.Northwind || (FormulationManagementSystems.Northwind = {}));
})(FormulationManagementSystems || (FormulationManagementSystems = {}));
var FormulationManagementSystems;
(function (FormulationManagementSystems) {
    var Northwind;
    (function (Northwind) {
        var RegionGrid = (function (_super) {
            __extends(RegionGrid, _super);
            function RegionGrid(container) {
                return _super.call(this, container) || this;
            }
            RegionGrid.prototype.getColumnsKey = function () { return "Northwind.Region"; };
            RegionGrid.prototype.getDialogType = function () { return Northwind.RegionDialog; };
            RegionGrid.prototype.getIdProperty = function () { return Northwind.RegionRow.idProperty; };
            RegionGrid.prototype.getLocalTextPrefix = function () { return Northwind.RegionRow.localTextPrefix; };
            RegionGrid.prototype.getService = function () { return Northwind.RegionService.baseUrl; };
            return RegionGrid;
        }(Serenity.EntityGrid));
        RegionGrid = __decorate([
            Serenity.Decorators.registerClass()
        ], RegionGrid);
        Northwind.RegionGrid = RegionGrid;
    })(Northwind = FormulationManagementSystems.Northwind || (FormulationManagementSystems.Northwind = {}));
})(FormulationManagementSystems || (FormulationManagementSystems = {}));
var FormulationManagementSystems;
(function (FormulationManagementSystems) {
    var Northwind;
    (function (Northwind) {
        var PhoneEditor = PhoneEditor_1 = (function (_super) {
            __extends(PhoneEditor, _super);
            function PhoneEditor(input) {
                var _this = _super.call(this, input) || this;
                _this.addValidationRule(_this.uniqueName, function (e) {
                    var value = Q.trimToNull(_this.get_value());
                    if (value == null) {
                        return null;
                    }
                    return PhoneEditor_1.validate(value, _this.multiple);
                });
                input.bind('change', function (e) {
                    if (!Serenity.WX.hasOriginalEvent(e)) {
                        return;
                    }
                    _this.formatValue();
                });
                input.bind('blur', function (e) {
                    if (_this.element.hasClass('valid')) {
                        _this.formatValue();
                    }
                });
                return _this;
            }
            PhoneEditor.prototype.formatValue = function () {
                this.element.val(this.getFormattedValue());
            };
            PhoneEditor.prototype.getFormattedValue = function () {
                var value = this.element.val();
                if (this.multiple) {
                    return PhoneEditor_1.formatMulti(value, PhoneEditor_1.formatPhone);
                }
                return PhoneEditor_1.formatPhone(value);
            };
            PhoneEditor.prototype.get_value = function () {
                return this.getFormattedValue();
            };
            PhoneEditor.prototype.set_value = function (value) {
                this.element.val(value);
            };
            PhoneEditor.validate = function (phone, isMultiple) {
                var valid = (isMultiple ? PhoneEditor_1.isValidMulti(phone, PhoneEditor_1.isValidPhone) : PhoneEditor_1.isValidPhone(phone));
                if (valid) {
                    return null;
                }
                return Q.text((isMultiple ? 'Validation.NorthwindPhoneMultiple' : 'Validation.NorthwindPhone'));
            };
            PhoneEditor.isValidPhone = function (phone) {
                if (Q.isEmptyOrNull(phone)) {
                    return false;
                }
                phone = Q.replaceAll(Q.replaceAll(phone, ' ', ''), '-', '');
                if (phone.length < 10) {
                    return false;
                }
                if (Q.startsWith(phone, '0')) {
                    phone = phone.substring(1);
                }
                if (Q.startsWith(phone, '(') && phone.charAt(4) === ')') {
                    phone = phone.substr(1, 3) + phone.substring(5);
                }
                if (phone.length !== 10) {
                    return false;
                }
                if (Q.startsWith(phone, '0')) {
                    return false;
                }
                for (var i = 0; i < phone.length; i++) {
                    var c = phone.charAt(i);
                    if (c < '0' || c > '9') {
                        return false;
                    }
                }
                return true;
            };
            PhoneEditor.formatPhone = function (phone) {
                if (!PhoneEditor_1.isValidPhone(phone)) {
                    return phone;
                }
                phone = Q.replaceAll(Q.replaceAll(Q.replaceAll(Q.replaceAll(phone, ' ', ''), '-', ''), '(', ''), ')', '');
                if (Q.startsWith(phone, '0')) {
                    phone = phone.substring(1);
                }
                phone = '(' + phone.substr(0, 3) + ') ' + phone.substr(3, 3) + '-' + phone.substr(6, 2) + phone.substr(8, 2);
                return phone;
            };
            PhoneEditor.formatMulti = function (phone, format) {
                var phones = Q.replaceAll(phone, String.fromCharCode(59), String.fromCharCode(44)).split(String.fromCharCode(44));
                var result = '';
                for (var _i = 0, phones_1 = phones; _i < phones_1.length; _i++) {
                    var x = phones_1[_i];
                    var s = Q.trimToNull(x);
                    if (s == null) {
                        continue;
                    }
                    if (result.length > 0) {
                        result += ', ';
                    }
                    result += format(s);
                }
                return result;
            };
            PhoneEditor.isValidMulti = function (phone, check) {
                if (Q.isEmptyOrNull(phone)) {
                    return false;
                }
                var phones = Q.replaceAll(phone, String.fromCharCode(59), String.fromCharCode(44)).split(String.fromCharCode(44));
                var anyValid = false;
                for (var $t1 = 0; $t1 < phones.length; $t1++) {
                    var x = phones[$t1];
                    var s = Q.trimToNull(x);
                    if (s == null) {
                        continue;
                    }
                    if (!check(s)) {
                        return false;
                    }
                    anyValid = true;
                }
                if (!anyValid) {
                    return false;
                }
                return true;
            };
            return PhoneEditor;
        }(Serenity.StringEditor));
        __decorate([
            Serenity.Decorators.option()
        ], PhoneEditor.prototype, "multiple", void 0);
        PhoneEditor = PhoneEditor_1 = __decorate([
            Serenity.Decorators.registerEditor()
        ], PhoneEditor);
        Northwind.PhoneEditor = PhoneEditor;
        var PhoneEditor_1;
    })(Northwind = FormulationManagementSystems.Northwind || (FormulationManagementSystems.Northwind = {}));
})(FormulationManagementSystems || (FormulationManagementSystems = {}));
var FormulationManagementSystems;
(function (FormulationManagementSystems) {
    var Northwind;
    (function (Northwind) {
        var ShipperDialog = (function (_super) {
            __extends(ShipperDialog, _super);
            function ShipperDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Northwind.ShipperForm(_this.idPrefix);
                return _this;
            }
            ShipperDialog.prototype.getFormKey = function () { return Northwind.ShipperForm.formKey; };
            ShipperDialog.prototype.getIdProperty = function () { return Northwind.ShipperRow.idProperty; };
            ShipperDialog.prototype.getLocalTextPrefix = function () { return Northwind.ShipperRow.localTextPrefix; };
            ShipperDialog.prototype.getNameProperty = function () { return Northwind.ShipperRow.nameProperty; };
            ShipperDialog.prototype.getService = function () { return Northwind.ShipperService.baseUrl; };
            ShipperDialog.prototype.getLanguages = function () {
                return FormulationManagementSystems.LanguageList.getValue();
            };
            return ShipperDialog;
        }(Serenity.EntityDialog));
        ShipperDialog = __decorate([
            Serenity.Decorators.registerClass()
        ], ShipperDialog);
        Northwind.ShipperDialog = ShipperDialog;
    })(Northwind = FormulationManagementSystems.Northwind || (FormulationManagementSystems.Northwind = {}));
})(FormulationManagementSystems || (FormulationManagementSystems = {}));
var FormulationManagementSystems;
(function (FormulationManagementSystems) {
    var Northwind;
    (function (Northwind) {
        var ShipperFormatter = (function () {
            function ShipperFormatter() {
            }
            ShipperFormatter.prototype.format = function (ctx) {
                return "<span class='shipper-symbol shipper-" +
                    Q.replaceAll((ctx.value || '').toString(), ' ', '') +
                    "'>" + Q.htmlEncode(ctx.value) + '</span>';
            };
            return ShipperFormatter;
        }());
        ShipperFormatter = __decorate([
            Serenity.Decorators.registerFormatter()
        ], ShipperFormatter);
        Northwind.ShipperFormatter = ShipperFormatter;
    })(Northwind = FormulationManagementSystems.Northwind || (FormulationManagementSystems.Northwind = {}));
})(FormulationManagementSystems || (FormulationManagementSystems = {}));
var FormulationManagementSystems;
(function (FormulationManagementSystems) {
    var Northwind;
    (function (Northwind) {
        var ShipperGrid = (function (_super) {
            __extends(ShipperGrid, _super);
            function ShipperGrid(container) {
                return _super.call(this, container) || this;
            }
            ShipperGrid.prototype.getColumnsKey = function () { return "Northwind.Shipper"; };
            ShipperGrid.prototype.getDialogType = function () { return Northwind.ShipperDialog; };
            ShipperGrid.prototype.getIdProperty = function () { return Northwind.ShipperRow.idProperty; };
            ShipperGrid.prototype.getLocalTextPrefix = function () { return Northwind.ShipperRow.localTextPrefix; };
            ShipperGrid.prototype.getService = function () { return Northwind.ShipperService.baseUrl; };
            return ShipperGrid;
        }(Serenity.EntityGrid));
        ShipperGrid = __decorate([
            Serenity.Decorators.registerClass()
        ], ShipperGrid);
        Northwind.ShipperGrid = ShipperGrid;
    })(Northwind = FormulationManagementSystems.Northwind || (FormulationManagementSystems.Northwind = {}));
})(FormulationManagementSystems || (FormulationManagementSystems = {}));
var FormulationManagementSystems;
(function (FormulationManagementSystems) {
    var Northwind;
    (function (Northwind) {
        var TerritoryDialog = (function (_super) {
            __extends(TerritoryDialog, _super);
            function TerritoryDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Northwind.TerritoryForm(_this.idPrefix);
                return _this;
            }
            TerritoryDialog.prototype.getFormKey = function () { return Northwind.TerritoryForm.formKey; };
            TerritoryDialog.prototype.getIdProperty = function () { return Northwind.TerritoryRow.idProperty; };
            TerritoryDialog.prototype.getLocalTextPrefix = function () { return Northwind.TerritoryRow.localTextPrefix; };
            TerritoryDialog.prototype.getNameProperty = function () { return Northwind.TerritoryRow.nameProperty; };
            TerritoryDialog.prototype.getService = function () { return Northwind.TerritoryService.baseUrl; };
            TerritoryDialog.prototype.getLanguages = function () {
                return FormulationManagementSystems.LanguageList.getValue();
            };
            return TerritoryDialog;
        }(Serenity.EntityDialog));
        TerritoryDialog = __decorate([
            Serenity.Decorators.registerClass()
        ], TerritoryDialog);
        Northwind.TerritoryDialog = TerritoryDialog;
    })(Northwind = FormulationManagementSystems.Northwind || (FormulationManagementSystems.Northwind = {}));
})(FormulationManagementSystems || (FormulationManagementSystems = {}));
var FormulationManagementSystems;
(function (FormulationManagementSystems) {
    var Northwind;
    (function (Northwind) {
        var TerritoryGrid = (function (_super) {
            __extends(TerritoryGrid, _super);
            function TerritoryGrid(container) {
                return _super.call(this, container) || this;
            }
            TerritoryGrid.prototype.getColumnsKey = function () { return "Northwind.Territory"; };
            TerritoryGrid.prototype.getDialogType = function () { return Northwind.TerritoryDialog; };
            TerritoryGrid.prototype.getIdProperty = function () { return Northwind.TerritoryRow.idProperty; };
            TerritoryGrid.prototype.getLocalTextPrefix = function () { return Northwind.TerritoryRow.localTextPrefix; };
            TerritoryGrid.prototype.getService = function () { return Northwind.TerritoryService.baseUrl; };
            return TerritoryGrid;
        }(Serenity.EntityGrid));
        TerritoryGrid = __decorate([
            Serenity.Decorators.registerClass()
        ], TerritoryGrid);
        Northwind.TerritoryGrid = TerritoryGrid;
    })(Northwind = FormulationManagementSystems.Northwind || (FormulationManagementSystems.Northwind = {}));
})(FormulationManagementSystems || (FormulationManagementSystems = {}));
var FormulationManagementSystems;
(function (FormulationManagementSystems) {
    var VDSCSQL;
    (function (VDSCSQL) {
        var AdditonFormDialog = (function (_super) {
            __extends(AdditonFormDialog, _super);
            function AdditonFormDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new VDSCSQL.AdditonFormForm(_this.idPrefix);
                return _this;
            }
            AdditonFormDialog.prototype.getFormKey = function () { return VDSCSQL.AdditonFormForm.formKey; };
            AdditonFormDialog.prototype.getIdProperty = function () { return VDSCSQL.AdditonFormRow.idProperty; };
            AdditonFormDialog.prototype.getLocalTextPrefix = function () { return VDSCSQL.AdditonFormRow.localTextPrefix; };
            AdditonFormDialog.prototype.getNameProperty = function () { return VDSCSQL.AdditonFormRow.nameProperty; };
            AdditonFormDialog.prototype.getService = function () { return VDSCSQL.AdditonFormService.baseUrl; };
            return AdditonFormDialog;
        }(Serenity.EntityDialog));
        AdditonFormDialog = __decorate([
            Serenity.Decorators.registerClass()
        ], AdditonFormDialog);
        VDSCSQL.AdditonFormDialog = AdditonFormDialog;
    })(VDSCSQL = FormulationManagementSystems.VDSCSQL || (FormulationManagementSystems.VDSCSQL = {}));
})(FormulationManagementSystems || (FormulationManagementSystems = {}));
var FormulationManagementSystems;
(function (FormulationManagementSystems) {
    var VDSCSQL;
    (function (VDSCSQL) {
        var AdditonFormGrid = (function (_super) {
            __extends(AdditonFormGrid, _super);
            function AdditonFormGrid(container) {
                return _super.call(this, container) || this;
            }
            AdditonFormGrid.prototype.getColumnsKey = function () { return 'VDSCSQL.AdditonForm'; };
            AdditonFormGrid.prototype.getDialogType = function () { return VDSCSQL.AdditonFormDialog; };
            AdditonFormGrid.prototype.getIdProperty = function () { return VDSCSQL.AdditonFormRow.idProperty; };
            AdditonFormGrid.prototype.getLocalTextPrefix = function () { return VDSCSQL.AdditonFormRow.localTextPrefix; };
            AdditonFormGrid.prototype.getService = function () { return VDSCSQL.AdditonFormService.baseUrl; };
            return AdditonFormGrid;
        }(Serenity.EntityGrid));
        AdditonFormGrid = __decorate([
            Serenity.Decorators.registerClass()
        ], AdditonFormGrid);
        VDSCSQL.AdditonFormGrid = AdditonFormGrid;
    })(VDSCSQL = FormulationManagementSystems.VDSCSQL || (FormulationManagementSystems.VDSCSQL = {}));
})(FormulationManagementSystems || (FormulationManagementSystems = {}));
var FormulationManagementSystems;
(function (FormulationManagementSystems) {
    var VDSCSQL;
    (function (VDSCSQL) {
        var BulkBatchDialog = (function (_super) {
            __extends(BulkBatchDialog, _super);
            function BulkBatchDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new VDSCSQL.BulkBatchForm(_this.idPrefix);
                return _this;
            }
            BulkBatchDialog.prototype.getFormKey = function () { return VDSCSQL.BulkBatchForm.formKey; };
            BulkBatchDialog.prototype.getIdProperty = function () { return VDSCSQL.BulkBatchRow.idProperty; };
            BulkBatchDialog.prototype.getLocalTextPrefix = function () { return VDSCSQL.BulkBatchRow.localTextPrefix; };
            BulkBatchDialog.prototype.getNameProperty = function () { return VDSCSQL.BulkBatchRow.nameProperty; };
            BulkBatchDialog.prototype.getService = function () { return VDSCSQL.BulkBatchService.baseUrl; };
            return BulkBatchDialog;
        }(Serenity.EntityDialog));
        BulkBatchDialog = __decorate([
            Serenity.Decorators.registerClass()
        ], BulkBatchDialog);
        VDSCSQL.BulkBatchDialog = BulkBatchDialog;
    })(VDSCSQL = FormulationManagementSystems.VDSCSQL || (FormulationManagementSystems.VDSCSQL = {}));
})(FormulationManagementSystems || (FormulationManagementSystems = {}));
var FormulationManagementSystems;
(function (FormulationManagementSystems) {
    var VDSCSQL;
    (function (VDSCSQL) {
        var BulkBatchGrid = (function (_super) {
            __extends(BulkBatchGrid, _super);
            function BulkBatchGrid(container) {
                return _super.call(this, container) || this;
            }
            BulkBatchGrid.prototype.getColumnsKey = function () { return 'VDSCSQL.BulkBatch'; };
            BulkBatchGrid.prototype.getDialogType = function () { return VDSCSQL.BulkBatchDialog; };
            BulkBatchGrid.prototype.getIdProperty = function () { return VDSCSQL.BulkBatchRow.idProperty; };
            BulkBatchGrid.prototype.getLocalTextPrefix = function () { return VDSCSQL.BulkBatchRow.localTextPrefix; };
            BulkBatchGrid.prototype.getService = function () { return VDSCSQL.BulkBatchService.baseUrl; };
            return BulkBatchGrid;
        }(Serenity.EntityGrid));
        BulkBatchGrid = __decorate([
            Serenity.Decorators.registerClass()
        ], BulkBatchGrid);
        VDSCSQL.BulkBatchGrid = BulkBatchGrid;
    })(VDSCSQL = FormulationManagementSystems.VDSCSQL || (FormulationManagementSystems.VDSCSQL = {}));
})(FormulationManagementSystems || (FormulationManagementSystems = {}));
var FormulationManagementSystems;
(function (FormulationManagementSystems) {
    var VDSCSQL;
    (function (VDSCSQL) {
        var BulkBatchDataDialog = (function (_super) {
            __extends(BulkBatchDataDialog, _super);
            function BulkBatchDataDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new VDSCSQL.BulkBatchDataForm(_this.idPrefix);
                return _this;
            }
            BulkBatchDataDialog.prototype.getFormKey = function () { return VDSCSQL.BulkBatchDataForm.formKey; };
            BulkBatchDataDialog.prototype.getIdProperty = function () { return VDSCSQL.BulkBatchDataRow.idProperty; };
            BulkBatchDataDialog.prototype.getLocalTextPrefix = function () { return VDSCSQL.BulkBatchDataRow.localTextPrefix; };
            BulkBatchDataDialog.prototype.getNameProperty = function () { return VDSCSQL.BulkBatchDataRow.nameProperty; };
            BulkBatchDataDialog.prototype.getService = function () { return VDSCSQL.BulkBatchDataService.baseUrl; };
            return BulkBatchDataDialog;
        }(Serenity.EntityDialog));
        BulkBatchDataDialog = __decorate([
            Serenity.Decorators.registerClass()
        ], BulkBatchDataDialog);
        VDSCSQL.BulkBatchDataDialog = BulkBatchDataDialog;
    })(VDSCSQL = FormulationManagementSystems.VDSCSQL || (FormulationManagementSystems.VDSCSQL = {}));
})(FormulationManagementSystems || (FormulationManagementSystems = {}));
var FormulationManagementSystems;
(function (FormulationManagementSystems) {
    var VDSCSQL;
    (function (VDSCSQL) {
        var BulkBatchDataGrid = (function (_super) {
            __extends(BulkBatchDataGrid, _super);
            function BulkBatchDataGrid(container) {
                return _super.call(this, container) || this;
            }
            BulkBatchDataGrid.prototype.getColumnsKey = function () { return 'VDSCSQL.BulkBatchData'; };
            BulkBatchDataGrid.prototype.getDialogType = function () { return VDSCSQL.BulkBatchDataDialog; };
            BulkBatchDataGrid.prototype.getIdProperty = function () { return VDSCSQL.BulkBatchDataRow.idProperty; };
            BulkBatchDataGrid.prototype.getLocalTextPrefix = function () { return VDSCSQL.BulkBatchDataRow.localTextPrefix; };
            BulkBatchDataGrid.prototype.getService = function () { return VDSCSQL.BulkBatchDataService.baseUrl; };
            return BulkBatchDataGrid;
        }(Serenity.EntityGrid));
        BulkBatchDataGrid = __decorate([
            Serenity.Decorators.registerClass()
        ], BulkBatchDataGrid);
        VDSCSQL.BulkBatchDataGrid = BulkBatchDataGrid;
    })(VDSCSQL = FormulationManagementSystems.VDSCSQL || (FormulationManagementSystems.VDSCSQL = {}));
})(FormulationManagementSystems || (FormulationManagementSystems = {}));
var FormulationManagementSystems;
(function (FormulationManagementSystems) {
    var VDSCSQL;
    (function (VDSCSQL) {
        var BulkScanDialog = (function (_super) {
            __extends(BulkScanDialog, _super);
            function BulkScanDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new VDSCSQL.BulkScanForm(_this.idPrefix);
                return _this;
            }
            BulkScanDialog.prototype.getFormKey = function () { return VDSCSQL.BulkScanForm.formKey; };
            BulkScanDialog.prototype.getIdProperty = function () { return VDSCSQL.BulkScanRow.idProperty; };
            BulkScanDialog.prototype.getLocalTextPrefix = function () { return VDSCSQL.BulkScanRow.localTextPrefix; };
            BulkScanDialog.prototype.getNameProperty = function () { return VDSCSQL.BulkScanRow.nameProperty; };
            BulkScanDialog.prototype.getService = function () { return VDSCSQL.BulkScanService.baseUrl; };
            return BulkScanDialog;
        }(Serenity.EntityDialog));
        BulkScanDialog = __decorate([
            Serenity.Decorators.registerClass()
        ], BulkScanDialog);
        VDSCSQL.BulkScanDialog = BulkScanDialog;
    })(VDSCSQL = FormulationManagementSystems.VDSCSQL || (FormulationManagementSystems.VDSCSQL = {}));
})(FormulationManagementSystems || (FormulationManagementSystems = {}));
var FormulationManagementSystems;
(function (FormulationManagementSystems) {
    var VDSCSQL;
    (function (VDSCSQL) {
        var BulkScanGrid = (function (_super) {
            __extends(BulkScanGrid, _super);
            function BulkScanGrid(container) {
                return _super.call(this, container) || this;
            }
            BulkScanGrid.prototype.getColumnsKey = function () { return 'VDSCSQL.BulkScan'; };
            BulkScanGrid.prototype.getDialogType = function () { return VDSCSQL.BulkScanDialog; };
            BulkScanGrid.prototype.getIdProperty = function () { return VDSCSQL.BulkScanRow.idProperty; };
            BulkScanGrid.prototype.getLocalTextPrefix = function () { return VDSCSQL.BulkScanRow.localTextPrefix; };
            BulkScanGrid.prototype.getService = function () { return VDSCSQL.BulkScanService.baseUrl; };
            return BulkScanGrid;
        }(Serenity.EntityGrid));
        BulkScanGrid = __decorate([
            Serenity.Decorators.registerClass()
        ], BulkScanGrid);
        VDSCSQL.BulkScanGrid = BulkScanGrid;
    })(VDSCSQL = FormulationManagementSystems.VDSCSQL || (FormulationManagementSystems.VDSCSQL = {}));
})(FormulationManagementSystems || (FormulationManagementSystems = {}));
var FormulationManagementSystems;
(function (FormulationManagementSystems) {
    var VDSCSQL;
    (function (VDSCSQL) {
        var BulkStorageTankDialog = (function (_super) {
            __extends(BulkStorageTankDialog, _super);
            function BulkStorageTankDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new VDSCSQL.BulkStorageTankForm(_this.idPrefix);
                return _this;
            }
            BulkStorageTankDialog.prototype.getFormKey = function () { return VDSCSQL.BulkStorageTankForm.formKey; };
            BulkStorageTankDialog.prototype.getIdProperty = function () { return VDSCSQL.BulkStorageTankRow.idProperty; };
            BulkStorageTankDialog.prototype.getLocalTextPrefix = function () { return VDSCSQL.BulkStorageTankRow.localTextPrefix; };
            BulkStorageTankDialog.prototype.getNameProperty = function () { return VDSCSQL.BulkStorageTankRow.nameProperty; };
            BulkStorageTankDialog.prototype.getService = function () { return VDSCSQL.BulkStorageTankService.baseUrl; };
            return BulkStorageTankDialog;
        }(Serenity.EntityDialog));
        BulkStorageTankDialog = __decorate([
            Serenity.Decorators.registerClass()
        ], BulkStorageTankDialog);
        VDSCSQL.BulkStorageTankDialog = BulkStorageTankDialog;
    })(VDSCSQL = FormulationManagementSystems.VDSCSQL || (FormulationManagementSystems.VDSCSQL = {}));
})(FormulationManagementSystems || (FormulationManagementSystems = {}));
var FormulationManagementSystems;
(function (FormulationManagementSystems) {
    var VDSCSQL;
    (function (VDSCSQL) {
        var BulkStorageTankGrid = (function (_super) {
            __extends(BulkStorageTankGrid, _super);
            function BulkStorageTankGrid(container) {
                return _super.call(this, container) || this;
            }
            BulkStorageTankGrid.prototype.getColumnsKey = function () { return 'VDSCSQL.BulkStorageTank'; };
            BulkStorageTankGrid.prototype.getDialogType = function () { return VDSCSQL.BulkStorageTankDialog; };
            BulkStorageTankGrid.prototype.getIdProperty = function () { return VDSCSQL.BulkStorageTankRow.idProperty; };
            BulkStorageTankGrid.prototype.getLocalTextPrefix = function () { return VDSCSQL.BulkStorageTankRow.localTextPrefix; };
            BulkStorageTankGrid.prototype.getService = function () { return VDSCSQL.BulkStorageTankService.baseUrl; };
            return BulkStorageTankGrid;
        }(Serenity.EntityGrid));
        BulkStorageTankGrid = __decorate([
            Serenity.Decorators.registerClass()
        ], BulkStorageTankGrid);
        VDSCSQL.BulkStorageTankGrid = BulkStorageTankGrid;
    })(VDSCSQL = FormulationManagementSystems.VDSCSQL || (FormulationManagementSystems.VDSCSQL = {}));
})(FormulationManagementSystems || (FormulationManagementSystems = {}));
var FormulationManagementSystems;
(function (FormulationManagementSystems) {
    var VDSCSQL;
    (function (VDSCSQL) {
        var ConsumptionDialog = (function (_super) {
            __extends(ConsumptionDialog, _super);
            function ConsumptionDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new VDSCSQL.ConsumptionForm(_this.idPrefix);
                return _this;
            }
            ConsumptionDialog.prototype.getFormKey = function () { return VDSCSQL.ConsumptionForm.formKey; };
            ConsumptionDialog.prototype.getIdProperty = function () { return VDSCSQL.ConsumptionRow.idProperty; };
            ConsumptionDialog.prototype.getLocalTextPrefix = function () { return VDSCSQL.ConsumptionRow.localTextPrefix; };
            ConsumptionDialog.prototype.getNameProperty = function () { return VDSCSQL.ConsumptionRow.nameProperty; };
            ConsumptionDialog.prototype.getService = function () { return VDSCSQL.ConsumptionService.baseUrl; };
            return ConsumptionDialog;
        }(Serenity.EntityDialog));
        ConsumptionDialog = __decorate([
            Serenity.Decorators.registerClass()
        ], ConsumptionDialog);
        VDSCSQL.ConsumptionDialog = ConsumptionDialog;
    })(VDSCSQL = FormulationManagementSystems.VDSCSQL || (FormulationManagementSystems.VDSCSQL = {}));
})(FormulationManagementSystems || (FormulationManagementSystems = {}));
var FormulationManagementSystems;
(function (FormulationManagementSystems) {
    var VDSCSQL;
    (function (VDSCSQL) {
        var ConsumptionGrid = (function (_super) {
            __extends(ConsumptionGrid, _super);
            function ConsumptionGrid(container) {
                return _super.call(this, container) || this;
            }
            ConsumptionGrid.prototype.getColumnsKey = function () { return 'VDSCSQL.Consumption'; };
            ConsumptionGrid.prototype.getDialogType = function () { return VDSCSQL.ConsumptionDialog; };
            ConsumptionGrid.prototype.getIdProperty = function () { return VDSCSQL.ConsumptionRow.idProperty; };
            ConsumptionGrid.prototype.getLocalTextPrefix = function () { return VDSCSQL.ConsumptionRow.localTextPrefix; };
            ConsumptionGrid.prototype.getService = function () { return VDSCSQL.ConsumptionService.baseUrl; };
            return ConsumptionGrid;
        }(Serenity.EntityGrid));
        ConsumptionGrid = __decorate([
            Serenity.Decorators.registerClass()
        ], ConsumptionGrid);
        VDSCSQL.ConsumptionGrid = ConsumptionGrid;
    })(VDSCSQL = FormulationManagementSystems.VDSCSQL || (FormulationManagementSystems.VDSCSQL = {}));
})(FormulationManagementSystems || (FormulationManagementSystems = {}));
var FormulationManagementSystems;
(function (FormulationManagementSystems) {
    var VDSCSQL;
    (function (VDSCSQL) {
        var CustomerDialog = (function (_super) {
            __extends(CustomerDialog, _super);
            function CustomerDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new VDSCSQL.CustomerForm(_this.idPrefix);
                return _this;
            }
            CustomerDialog.prototype.getFormKey = function () { return VDSCSQL.CustomerForm.formKey; };
            CustomerDialog.prototype.getIdProperty = function () { return VDSCSQL.CustomerRow.idProperty; };
            CustomerDialog.prototype.getLocalTextPrefix = function () { return VDSCSQL.CustomerRow.localTextPrefix; };
            CustomerDialog.prototype.getNameProperty = function () { return VDSCSQL.CustomerRow.nameProperty; };
            CustomerDialog.prototype.getService = function () { return VDSCSQL.CustomerService.baseUrl; };
            return CustomerDialog;
        }(Serenity.EntityDialog));
        CustomerDialog = __decorate([
            Serenity.Decorators.registerClass()
        ], CustomerDialog);
        VDSCSQL.CustomerDialog = CustomerDialog;
    })(VDSCSQL = FormulationManagementSystems.VDSCSQL || (FormulationManagementSystems.VDSCSQL = {}));
})(FormulationManagementSystems || (FormulationManagementSystems = {}));
var FormulationManagementSystems;
(function (FormulationManagementSystems) {
    var VDSCSQL;
    (function (VDSCSQL) {
        var CustomerGrid = (function (_super) {
            __extends(CustomerGrid, _super);
            function CustomerGrid(container) {
                return _super.call(this, container) || this;
            }
            CustomerGrid.prototype.getColumnsKey = function () { return 'VDSCSQL.Customer'; };
            CustomerGrid.prototype.getDialogType = function () { return VDSCSQL.CustomerDialog; };
            CustomerGrid.prototype.getIdProperty = function () { return VDSCSQL.CustomerRow.idProperty; };
            CustomerGrid.prototype.getLocalTextPrefix = function () { return VDSCSQL.CustomerRow.localTextPrefix; };
            CustomerGrid.prototype.getService = function () { return VDSCSQL.CustomerService.baseUrl; };
            return CustomerGrid;
        }(Serenity.EntityGrid));
        CustomerGrid = __decorate([
            Serenity.Decorators.registerClass()
        ], CustomerGrid);
        VDSCSQL.CustomerGrid = CustomerGrid;
    })(VDSCSQL = FormulationManagementSystems.VDSCSQL || (FormulationManagementSystems.VDSCSQL = {}));
})(FormulationManagementSystems || (FormulationManagementSystems = {}));
var FormulationManagementSystems;
(function (FormulationManagementSystems) {
    var VDSCSQL;
    (function (VDSCSQL) {
        var EmployeeDialog = (function (_super) {
            __extends(EmployeeDialog, _super);
            function EmployeeDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new VDSCSQL.EmployeeForm(_this.idPrefix);
                return _this;
            }
            EmployeeDialog.prototype.getFormKey = function () { return VDSCSQL.EmployeeForm.formKey; };
            EmployeeDialog.prototype.getIdProperty = function () { return VDSCSQL.EmployeeRow.idProperty; };
            EmployeeDialog.prototype.getLocalTextPrefix = function () { return VDSCSQL.EmployeeRow.localTextPrefix; };
            EmployeeDialog.prototype.getNameProperty = function () { return VDSCSQL.EmployeeRow.nameProperty; };
            EmployeeDialog.prototype.getService = function () { return VDSCSQL.EmployeeService.baseUrl; };
            return EmployeeDialog;
        }(Serenity.EntityDialog));
        EmployeeDialog = __decorate([
            Serenity.Decorators.registerClass()
        ], EmployeeDialog);
        VDSCSQL.EmployeeDialog = EmployeeDialog;
    })(VDSCSQL = FormulationManagementSystems.VDSCSQL || (FormulationManagementSystems.VDSCSQL = {}));
})(FormulationManagementSystems || (FormulationManagementSystems = {}));
var FormulationManagementSystems;
(function (FormulationManagementSystems) {
    var VDSCSQL;
    (function (VDSCSQL) {
        var EmployeeGrid = (function (_super) {
            __extends(EmployeeGrid, _super);
            function EmployeeGrid(container) {
                return _super.call(this, container) || this;
            }
            EmployeeGrid.prototype.getColumnsKey = function () { return 'VDSCSQL.Employee'; };
            EmployeeGrid.prototype.getDialogType = function () { return VDSCSQL.EmployeeDialog; };
            EmployeeGrid.prototype.getIdProperty = function () { return VDSCSQL.EmployeeRow.idProperty; };
            EmployeeGrid.prototype.getLocalTextPrefix = function () { return VDSCSQL.EmployeeRow.localTextPrefix; };
            EmployeeGrid.prototype.getService = function () { return VDSCSQL.EmployeeService.baseUrl; };
            return EmployeeGrid;
        }(Serenity.EntityGrid));
        EmployeeGrid = __decorate([
            Serenity.Decorators.registerClass()
        ], EmployeeGrid);
        VDSCSQL.EmployeeGrid = EmployeeGrid;
    })(VDSCSQL = FormulationManagementSystems.VDSCSQL || (FormulationManagementSystems.VDSCSQL = {}));
})(FormulationManagementSystems || (FormulationManagementSystems = {}));
var FormulationManagementSystems;
(function (FormulationManagementSystems) {
    var VDSCSQL;
    (function (VDSCSQL) {
        var EmployeeOvertimeDialog = (function (_super) {
            __extends(EmployeeOvertimeDialog, _super);
            function EmployeeOvertimeDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new VDSCSQL.EmployeeOvertimeForm(_this.idPrefix);
                return _this;
            }
            EmployeeOvertimeDialog.prototype.getFormKey = function () { return VDSCSQL.EmployeeOvertimeForm.formKey; };
            EmployeeOvertimeDialog.prototype.getIdProperty = function () { return VDSCSQL.EmployeeOvertimeRow.idProperty; };
            EmployeeOvertimeDialog.prototype.getLocalTextPrefix = function () { return VDSCSQL.EmployeeOvertimeRow.localTextPrefix; };
            EmployeeOvertimeDialog.prototype.getNameProperty = function () { return VDSCSQL.EmployeeOvertimeRow.nameProperty; };
            EmployeeOvertimeDialog.prototype.getService = function () { return VDSCSQL.EmployeeOvertimeService.baseUrl; };
            return EmployeeOvertimeDialog;
        }(Serenity.EntityDialog));
        EmployeeOvertimeDialog = __decorate([
            Serenity.Decorators.registerClass()
        ], EmployeeOvertimeDialog);
        VDSCSQL.EmployeeOvertimeDialog = EmployeeOvertimeDialog;
    })(VDSCSQL = FormulationManagementSystems.VDSCSQL || (FormulationManagementSystems.VDSCSQL = {}));
})(FormulationManagementSystems || (FormulationManagementSystems = {}));
var FormulationManagementSystems;
(function (FormulationManagementSystems) {
    var VDSCSQL;
    (function (VDSCSQL) {
        var EmployeeOvertimeGrid = (function (_super) {
            __extends(EmployeeOvertimeGrid, _super);
            function EmployeeOvertimeGrid(container) {
                return _super.call(this, container) || this;
            }
            EmployeeOvertimeGrid.prototype.getColumnsKey = function () { return 'VDSCSQL.EmployeeOvertime'; };
            EmployeeOvertimeGrid.prototype.getDialogType = function () { return VDSCSQL.EmployeeOvertimeDialog; };
            EmployeeOvertimeGrid.prototype.getIdProperty = function () { return VDSCSQL.EmployeeOvertimeRow.idProperty; };
            EmployeeOvertimeGrid.prototype.getLocalTextPrefix = function () { return VDSCSQL.EmployeeOvertimeRow.localTextPrefix; };
            EmployeeOvertimeGrid.prototype.getService = function () { return VDSCSQL.EmployeeOvertimeService.baseUrl; };
            return EmployeeOvertimeGrid;
        }(Serenity.EntityGrid));
        EmployeeOvertimeGrid = __decorate([
            Serenity.Decorators.registerClass()
        ], EmployeeOvertimeGrid);
        VDSCSQL.EmployeeOvertimeGrid = EmployeeOvertimeGrid;
    })(VDSCSQL = FormulationManagementSystems.VDSCSQL || (FormulationManagementSystems.VDSCSQL = {}));
})(FormulationManagementSystems || (FormulationManagementSystems = {}));
var FormulationManagementSystems;
(function (FormulationManagementSystems) {
    var VDSCSQL;
    (function (VDSCSQL) {
        var EmployeePhotoDialog = (function (_super) {
            __extends(EmployeePhotoDialog, _super);
            function EmployeePhotoDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new VDSCSQL.EmployeePhotoForm(_this.idPrefix);
                return _this;
            }
            EmployeePhotoDialog.prototype.getFormKey = function () { return VDSCSQL.EmployeePhotoForm.formKey; };
            EmployeePhotoDialog.prototype.getIdProperty = function () { return VDSCSQL.EmployeePhotoRow.idProperty; };
            EmployeePhotoDialog.prototype.getLocalTextPrefix = function () { return VDSCSQL.EmployeePhotoRow.localTextPrefix; };
            EmployeePhotoDialog.prototype.getNameProperty = function () { return VDSCSQL.EmployeePhotoRow.nameProperty; };
            EmployeePhotoDialog.prototype.getService = function () { return VDSCSQL.EmployeePhotoService.baseUrl; };
            return EmployeePhotoDialog;
        }(Serenity.EntityDialog));
        EmployeePhotoDialog = __decorate([
            Serenity.Decorators.registerClass()
        ], EmployeePhotoDialog);
        VDSCSQL.EmployeePhotoDialog = EmployeePhotoDialog;
    })(VDSCSQL = FormulationManagementSystems.VDSCSQL || (FormulationManagementSystems.VDSCSQL = {}));
})(FormulationManagementSystems || (FormulationManagementSystems = {}));
var FormulationManagementSystems;
(function (FormulationManagementSystems) {
    var VDSCSQL;
    (function (VDSCSQL) {
        var EmployeePhotoGrid = (function (_super) {
            __extends(EmployeePhotoGrid, _super);
            function EmployeePhotoGrid(container) {
                return _super.call(this, container) || this;
            }
            EmployeePhotoGrid.prototype.getColumnsKey = function () { return 'VDSCSQL.EmployeePhoto'; };
            EmployeePhotoGrid.prototype.getDialogType = function () { return VDSCSQL.EmployeePhotoDialog; };
            EmployeePhotoGrid.prototype.getIdProperty = function () { return VDSCSQL.EmployeePhotoRow.idProperty; };
            EmployeePhotoGrid.prototype.getLocalTextPrefix = function () { return VDSCSQL.EmployeePhotoRow.localTextPrefix; };
            EmployeePhotoGrid.prototype.getService = function () { return VDSCSQL.EmployeePhotoService.baseUrl; };
            return EmployeePhotoGrid;
        }(Serenity.EntityGrid));
        EmployeePhotoGrid = __decorate([
            Serenity.Decorators.registerClass()
        ], EmployeePhotoGrid);
        VDSCSQL.EmployeePhotoGrid = EmployeePhotoGrid;
    })(VDSCSQL = FormulationManagementSystems.VDSCSQL || (FormulationManagementSystems.VDSCSQL = {}));
})(FormulationManagementSystems || (FormulationManagementSystems = {}));
var FormulationManagementSystems;
(function (FormulationManagementSystems) {
    var VDSCSQL;
    (function (VDSCSQL) {
        var ManagerDialog = (function (_super) {
            __extends(ManagerDialog, _super);
            function ManagerDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new VDSCSQL.ManagerForm(_this.idPrefix);
                return _this;
            }
            ManagerDialog.prototype.getFormKey = function () { return VDSCSQL.ManagerForm.formKey; };
            ManagerDialog.prototype.getIdProperty = function () { return VDSCSQL.ManagerRow.idProperty; };
            ManagerDialog.prototype.getLocalTextPrefix = function () { return VDSCSQL.ManagerRow.localTextPrefix; };
            ManagerDialog.prototype.getNameProperty = function () { return VDSCSQL.ManagerRow.nameProperty; };
            ManagerDialog.prototype.getService = function () { return VDSCSQL.ManagerService.baseUrl; };
            return ManagerDialog;
        }(Serenity.EntityDialog));
        ManagerDialog = __decorate([
            Serenity.Decorators.registerClass()
        ], ManagerDialog);
        VDSCSQL.ManagerDialog = ManagerDialog;
    })(VDSCSQL = FormulationManagementSystems.VDSCSQL || (FormulationManagementSystems.VDSCSQL = {}));
})(FormulationManagementSystems || (FormulationManagementSystems = {}));
var FormulationManagementSystems;
(function (FormulationManagementSystems) {
    var VDSCSQL;
    (function (VDSCSQL) {
        var ManagerGrid = (function (_super) {
            __extends(ManagerGrid, _super);
            function ManagerGrid(container) {
                return _super.call(this, container) || this;
            }
            ManagerGrid.prototype.getColumnsKey = function () { return 'VDSCSQL.Manager'; };
            ManagerGrid.prototype.getDialogType = function () { return VDSCSQL.ManagerDialog; };
            ManagerGrid.prototype.getIdProperty = function () { return VDSCSQL.ManagerRow.idProperty; };
            ManagerGrid.prototype.getLocalTextPrefix = function () { return VDSCSQL.ManagerRow.localTextPrefix; };
            ManagerGrid.prototype.getService = function () { return VDSCSQL.ManagerService.baseUrl; };
            return ManagerGrid;
        }(Serenity.EntityGrid));
        ManagerGrid = __decorate([
            Serenity.Decorators.registerClass()
        ], ManagerGrid);
        VDSCSQL.ManagerGrid = ManagerGrid;
    })(VDSCSQL = FormulationManagementSystems.VDSCSQL || (FormulationManagementSystems.VDSCSQL = {}));
})(FormulationManagementSystems || (FormulationManagementSystems = {}));
var FormulationManagementSystems;
(function (FormulationManagementSystems) {
    var VDSCSQL;
    (function (VDSCSQL) {
        var MaterialDialog = (function (_super) {
            __extends(MaterialDialog, _super);
            function MaterialDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new VDSCSQL.MaterialForm(_this.idPrefix);
                return _this;
            }
            MaterialDialog.prototype.getFormKey = function () { return VDSCSQL.MaterialForm.formKey; };
            MaterialDialog.prototype.getIdProperty = function () { return VDSCSQL.MaterialRow.idProperty; };
            MaterialDialog.prototype.getLocalTextPrefix = function () { return VDSCSQL.MaterialRow.localTextPrefix; };
            MaterialDialog.prototype.getNameProperty = function () { return VDSCSQL.MaterialRow.nameProperty; };
            MaterialDialog.prototype.getService = function () { return VDSCSQL.MaterialService.baseUrl; };
            return MaterialDialog;
        }(Serenity.EntityDialog));
        MaterialDialog = __decorate([
            Serenity.Decorators.registerClass()
        ], MaterialDialog);
        VDSCSQL.MaterialDialog = MaterialDialog;
    })(VDSCSQL = FormulationManagementSystems.VDSCSQL || (FormulationManagementSystems.VDSCSQL = {}));
})(FormulationManagementSystems || (FormulationManagementSystems = {}));
var FormulationManagementSystems;
(function (FormulationManagementSystems) {
    var VDSCSQL;
    (function (VDSCSQL) {
        var MaterialGrid = (function (_super) {
            __extends(MaterialGrid, _super);
            function MaterialGrid(container) {
                return _super.call(this, container) || this;
            }
            MaterialGrid.prototype.getColumnsKey = function () { return 'VDSCSQL.Material'; };
            MaterialGrid.prototype.getDialogType = function () { return VDSCSQL.MaterialDialog; };
            MaterialGrid.prototype.getIdProperty = function () { return VDSCSQL.MaterialRow.idProperty; };
            MaterialGrid.prototype.getLocalTextPrefix = function () { return VDSCSQL.MaterialRow.localTextPrefix; };
            MaterialGrid.prototype.getService = function () { return VDSCSQL.MaterialService.baseUrl; };
            return MaterialGrid;
        }(Serenity.EntityGrid));
        MaterialGrid = __decorate([
            Serenity.Decorators.registerClass()
        ], MaterialGrid);
        VDSCSQL.MaterialGrid = MaterialGrid;
    })(VDSCSQL = FormulationManagementSystems.VDSCSQL || (FormulationManagementSystems.VDSCSQL = {}));
})(FormulationManagementSystems || (FormulationManagementSystems = {}));
var FormulationManagementSystems;
(function (FormulationManagementSystems) {
    var VDSCSQL;
    (function (VDSCSQL) {
        var ProductionRequestDialog = (function (_super) {
            __extends(ProductionRequestDialog, _super);
            function ProductionRequestDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new VDSCSQL.ProductionRequestForm(_this.idPrefix);
                return _this;
            }
            ProductionRequestDialog.prototype.getFormKey = function () { return VDSCSQL.ProductionRequestForm.formKey; };
            ProductionRequestDialog.prototype.getIdProperty = function () { return VDSCSQL.ProductionRequestRow.idProperty; };
            ProductionRequestDialog.prototype.getLocalTextPrefix = function () { return VDSCSQL.ProductionRequestRow.localTextPrefix; };
            ProductionRequestDialog.prototype.getNameProperty = function () { return VDSCSQL.ProductionRequestRow.nameProperty; };
            ProductionRequestDialog.prototype.getService = function () { return VDSCSQL.ProductionRequestService.baseUrl; };
            return ProductionRequestDialog;
        }(Serenity.EntityDialog));
        ProductionRequestDialog = __decorate([
            Serenity.Decorators.registerClass()
        ], ProductionRequestDialog);
        VDSCSQL.ProductionRequestDialog = ProductionRequestDialog;
    })(VDSCSQL = FormulationManagementSystems.VDSCSQL || (FormulationManagementSystems.VDSCSQL = {}));
})(FormulationManagementSystems || (FormulationManagementSystems = {}));
var FormulationManagementSystems;
(function (FormulationManagementSystems) {
    var VDSCSQL;
    (function (VDSCSQL) {
        var ProductionRequestGrid = (function (_super) {
            __extends(ProductionRequestGrid, _super);
            function ProductionRequestGrid(container) {
                return _super.call(this, container) || this;
            }
            ProductionRequestGrid.prototype.getColumnsKey = function () { return 'VDSCSQL.ProductionRequest'; };
            ProductionRequestGrid.prototype.getDialogType = function () { return VDSCSQL.ProductionRequestDialog; };
            ProductionRequestGrid.prototype.getIdProperty = function () { return VDSCSQL.ProductionRequestRow.idProperty; };
            ProductionRequestGrid.prototype.getLocalTextPrefix = function () { return VDSCSQL.ProductionRequestRow.localTextPrefix; };
            ProductionRequestGrid.prototype.getService = function () { return VDSCSQL.ProductionRequestService.baseUrl; };
            return ProductionRequestGrid;
        }(Serenity.EntityGrid));
        ProductionRequestGrid = __decorate([
            Serenity.Decorators.registerClass()
        ], ProductionRequestGrid);
        VDSCSQL.ProductionRequestGrid = ProductionRequestGrid;
    })(VDSCSQL = FormulationManagementSystems.VDSCSQL || (FormulationManagementSystems.VDSCSQL = {}));
})(FormulationManagementSystems || (FormulationManagementSystems = {}));
var FormulationManagementSystems;
(function (FormulationManagementSystems) {
    var VDSCSQL;
    (function (VDSCSQL) {
        var RecipeDialog = (function (_super) {
            __extends(RecipeDialog, _super);
            function RecipeDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new VDSCSQL.RecipeForm(_this.idPrefix);
                return _this;
            }
            RecipeDialog.prototype.getFormKey = function () { return VDSCSQL.RecipeForm.formKey; };
            RecipeDialog.prototype.getIdProperty = function () { return VDSCSQL.RecipeRow.idProperty; };
            RecipeDialog.prototype.getLocalTextPrefix = function () { return VDSCSQL.RecipeRow.localTextPrefix; };
            RecipeDialog.prototype.getNameProperty = function () { return VDSCSQL.RecipeRow.nameProperty; };
            RecipeDialog.prototype.getService = function () { return VDSCSQL.RecipeService.baseUrl; };
            return RecipeDialog;
        }(Serenity.EntityDialog));
        RecipeDialog = __decorate([
            Serenity.Decorators.registerClass()
        ], RecipeDialog);
        VDSCSQL.RecipeDialog = RecipeDialog;
    })(VDSCSQL = FormulationManagementSystems.VDSCSQL || (FormulationManagementSystems.VDSCSQL = {}));
})(FormulationManagementSystems || (FormulationManagementSystems = {}));
var FormulationManagementSystems;
(function (FormulationManagementSystems) {
    var VDSCSQL;
    (function (VDSCSQL) {
        var RecipeGrid = (function (_super) {
            __extends(RecipeGrid, _super);
            function RecipeGrid(container) {
                return _super.call(this, container) || this;
            }
            RecipeGrid.prototype.getColumnsKey = function () { return 'VDSCSQL.Recipe'; };
            RecipeGrid.prototype.getDialogType = function () { return VDSCSQL.RecipeDialog; };
            RecipeGrid.prototype.getIdProperty = function () { return VDSCSQL.RecipeRow.idProperty; };
            RecipeGrid.prototype.getLocalTextPrefix = function () { return VDSCSQL.RecipeRow.localTextPrefix; };
            RecipeGrid.prototype.getService = function () { return VDSCSQL.RecipeService.baseUrl; };
            return RecipeGrid;
        }(Serenity.EntityGrid));
        RecipeGrid = __decorate([
            Serenity.Decorators.registerClass()
        ], RecipeGrid);
        VDSCSQL.RecipeGrid = RecipeGrid;
    })(VDSCSQL = FormulationManagementSystems.VDSCSQL || (FormulationManagementSystems.VDSCSQL = {}));
})(FormulationManagementSystems || (FormulationManagementSystems = {}));
var FormulationManagementSystems;
(function (FormulationManagementSystems) {
    var VDSCSQL;
    (function (VDSCSQL) {
        var RecipePhaseDialog = (function (_super) {
            __extends(RecipePhaseDialog, _super);
            function RecipePhaseDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new VDSCSQL.RecipePhaseForm(_this.idPrefix);
                return _this;
            }
            RecipePhaseDialog.prototype.getFormKey = function () { return VDSCSQL.RecipePhaseForm.formKey; };
            RecipePhaseDialog.prototype.getIdProperty = function () { return VDSCSQL.RecipePhaseRow.idProperty; };
            RecipePhaseDialog.prototype.getLocalTextPrefix = function () { return VDSCSQL.RecipePhaseRow.localTextPrefix; };
            RecipePhaseDialog.prototype.getNameProperty = function () { return VDSCSQL.RecipePhaseRow.nameProperty; };
            RecipePhaseDialog.prototype.getService = function () { return VDSCSQL.RecipePhaseService.baseUrl; };
            return RecipePhaseDialog;
        }(Serenity.EntityDialog));
        RecipePhaseDialog = __decorate([
            Serenity.Decorators.registerClass()
        ], RecipePhaseDialog);
        VDSCSQL.RecipePhaseDialog = RecipePhaseDialog;
    })(VDSCSQL = FormulationManagementSystems.VDSCSQL || (FormulationManagementSystems.VDSCSQL = {}));
})(FormulationManagementSystems || (FormulationManagementSystems = {}));
var FormulationManagementSystems;
(function (FormulationManagementSystems) {
    var VDSCSQL;
    (function (VDSCSQL) {
        var RecipePhaseGrid = (function (_super) {
            __extends(RecipePhaseGrid, _super);
            function RecipePhaseGrid(container) {
                return _super.call(this, container) || this;
            }
            RecipePhaseGrid.prototype.getColumnsKey = function () { return 'VDSCSQL.RecipePhase'; };
            RecipePhaseGrid.prototype.getDialogType = function () { return VDSCSQL.RecipePhaseDialog; };
            RecipePhaseGrid.prototype.getIdProperty = function () { return VDSCSQL.RecipePhaseRow.idProperty; };
            RecipePhaseGrid.prototype.getLocalTextPrefix = function () { return VDSCSQL.RecipePhaseRow.localTextPrefix; };
            RecipePhaseGrid.prototype.getService = function () { return VDSCSQL.RecipePhaseService.baseUrl; };
            return RecipePhaseGrid;
        }(Serenity.EntityGrid));
        RecipePhaseGrid = __decorate([
            Serenity.Decorators.registerClass()
        ], RecipePhaseGrid);
        VDSCSQL.RecipePhaseGrid = RecipePhaseGrid;
    })(VDSCSQL = FormulationManagementSystems.VDSCSQL || (FormulationManagementSystems.VDSCSQL = {}));
})(FormulationManagementSystems || (FormulationManagementSystems = {}));
var FormulationManagementSystems;
(function (FormulationManagementSystems) {
    var VDSCSQL;
    (function (VDSCSQL) {
        var SrcDstPathDialog = (function (_super) {
            __extends(SrcDstPathDialog, _super);
            function SrcDstPathDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new VDSCSQL.SrcDstPathForm(_this.idPrefix);
                return _this;
            }
            SrcDstPathDialog.prototype.getFormKey = function () { return VDSCSQL.SrcDstPathForm.formKey; };
            SrcDstPathDialog.prototype.getIdProperty = function () { return VDSCSQL.SrcDstPathRow.idProperty; };
            SrcDstPathDialog.prototype.getLocalTextPrefix = function () { return VDSCSQL.SrcDstPathRow.localTextPrefix; };
            SrcDstPathDialog.prototype.getNameProperty = function () { return VDSCSQL.SrcDstPathRow.nameProperty; };
            SrcDstPathDialog.prototype.getService = function () { return VDSCSQL.SrcDstPathService.baseUrl; };
            return SrcDstPathDialog;
        }(Serenity.EntityDialog));
        SrcDstPathDialog = __decorate([
            Serenity.Decorators.registerClass()
        ], SrcDstPathDialog);
        VDSCSQL.SrcDstPathDialog = SrcDstPathDialog;
    })(VDSCSQL = FormulationManagementSystems.VDSCSQL || (FormulationManagementSystems.VDSCSQL = {}));
})(FormulationManagementSystems || (FormulationManagementSystems = {}));
var FormulationManagementSystems;
(function (FormulationManagementSystems) {
    var VDSCSQL;
    (function (VDSCSQL) {
        var SrcDstPathGrid = (function (_super) {
            __extends(SrcDstPathGrid, _super);
            function SrcDstPathGrid(container) {
                return _super.call(this, container) || this;
            }
            SrcDstPathGrid.prototype.getColumnsKey = function () { return 'VDSCSQL.SrcDstPath'; };
            SrcDstPathGrid.prototype.getDialogType = function () { return VDSCSQL.SrcDstPathDialog; };
            SrcDstPathGrid.prototype.getIdProperty = function () { return VDSCSQL.SrcDstPathRow.idProperty; };
            SrcDstPathGrid.prototype.getLocalTextPrefix = function () { return VDSCSQL.SrcDstPathRow.localTextPrefix; };
            SrcDstPathGrid.prototype.getService = function () { return VDSCSQL.SrcDstPathService.baseUrl; };
            return SrcDstPathGrid;
        }(Serenity.EntityGrid));
        SrcDstPathGrid = __decorate([
            Serenity.Decorators.registerClass()
        ], SrcDstPathGrid);
        VDSCSQL.SrcDstPathGrid = SrcDstPathGrid;
    })(VDSCSQL = FormulationManagementSystems.VDSCSQL || (FormulationManagementSystems.VDSCSQL = {}));
})(FormulationManagementSystems || (FormulationManagementSystems = {}));
var FormulationManagementSystems;
(function (FormulationManagementSystems) {
    var VDSCSQL;
    (function (VDSCSQL) {
        var SrlBulkMovementDialog = (function (_super) {
            __extends(SrlBulkMovementDialog, _super);
            function SrlBulkMovementDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new VDSCSQL.SrlBulkMovementForm(_this.idPrefix);
                return _this;
            }
            SrlBulkMovementDialog.prototype.getFormKey = function () { return VDSCSQL.SrlBulkMovementForm.formKey; };
            SrlBulkMovementDialog.prototype.getIdProperty = function () { return VDSCSQL.SrlBulkMovementRow.idProperty; };
            SrlBulkMovementDialog.prototype.getLocalTextPrefix = function () { return VDSCSQL.SrlBulkMovementRow.localTextPrefix; };
            SrlBulkMovementDialog.prototype.getNameProperty = function () { return VDSCSQL.SrlBulkMovementRow.nameProperty; };
            SrlBulkMovementDialog.prototype.getService = function () { return VDSCSQL.SrlBulkMovementService.baseUrl; };
            return SrlBulkMovementDialog;
        }(Serenity.EntityDialog));
        SrlBulkMovementDialog = __decorate([
            Serenity.Decorators.registerClass()
        ], SrlBulkMovementDialog);
        VDSCSQL.SrlBulkMovementDialog = SrlBulkMovementDialog;
    })(VDSCSQL = FormulationManagementSystems.VDSCSQL || (FormulationManagementSystems.VDSCSQL = {}));
})(FormulationManagementSystems || (FormulationManagementSystems = {}));
var FormulationManagementSystems;
(function (FormulationManagementSystems) {
    var VDSCSQL;
    (function (VDSCSQL) {
        var SrlBulkMovementGrid = (function (_super) {
            __extends(SrlBulkMovementGrid, _super);
            function SrlBulkMovementGrid(container) {
                return _super.call(this, container) || this;
            }
            SrlBulkMovementGrid.prototype.getColumnsKey = function () { return 'VDSCSQL.SrlBulkMovement'; };
            SrlBulkMovementGrid.prototype.getDialogType = function () { return VDSCSQL.SrlBulkMovementDialog; };
            SrlBulkMovementGrid.prototype.getIdProperty = function () { return VDSCSQL.SrlBulkMovementRow.idProperty; };
            SrlBulkMovementGrid.prototype.getLocalTextPrefix = function () { return VDSCSQL.SrlBulkMovementRow.localTextPrefix; };
            SrlBulkMovementGrid.prototype.getService = function () { return VDSCSQL.SrlBulkMovementService.baseUrl; };
            return SrlBulkMovementGrid;
        }(Serenity.EntityGrid));
        SrlBulkMovementGrid = __decorate([
            Serenity.Decorators.registerClass()
        ], SrlBulkMovementGrid);
        VDSCSQL.SrlBulkMovementGrid = SrlBulkMovementGrid;
    })(VDSCSQL = FormulationManagementSystems.VDSCSQL || (FormulationManagementSystems.VDSCSQL = {}));
})(FormulationManagementSystems || (FormulationManagementSystems = {}));
var FormulationManagementSystems;
(function (FormulationManagementSystems) {
    var VDSCSQL;
    (function (VDSCSQL) {
        var SrlBulkMovementDataDialog = (function (_super) {
            __extends(SrlBulkMovementDataDialog, _super);
            function SrlBulkMovementDataDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new VDSCSQL.SrlBulkMovementDataForm(_this.idPrefix);
                return _this;
            }
            SrlBulkMovementDataDialog.prototype.getFormKey = function () { return VDSCSQL.SrlBulkMovementDataForm.formKey; };
            SrlBulkMovementDataDialog.prototype.getIdProperty = function () { return VDSCSQL.SrlBulkMovementDataRow.idProperty; };
            SrlBulkMovementDataDialog.prototype.getLocalTextPrefix = function () { return VDSCSQL.SrlBulkMovementDataRow.localTextPrefix; };
            SrlBulkMovementDataDialog.prototype.getService = function () { return VDSCSQL.SrlBulkMovementDataService.baseUrl; };
            return SrlBulkMovementDataDialog;
        }(Serenity.EntityDialog));
        SrlBulkMovementDataDialog = __decorate([
            Serenity.Decorators.registerClass()
        ], SrlBulkMovementDataDialog);
        VDSCSQL.SrlBulkMovementDataDialog = SrlBulkMovementDataDialog;
    })(VDSCSQL = FormulationManagementSystems.VDSCSQL || (FormulationManagementSystems.VDSCSQL = {}));
})(FormulationManagementSystems || (FormulationManagementSystems = {}));
var FormulationManagementSystems;
(function (FormulationManagementSystems) {
    var VDSCSQL;
    (function (VDSCSQL) {
        var SrlBulkMovementDataGrid = (function (_super) {
            __extends(SrlBulkMovementDataGrid, _super);
            function SrlBulkMovementDataGrid(container) {
                return _super.call(this, container) || this;
            }
            SrlBulkMovementDataGrid.prototype.getColumnsKey = function () { return 'VDSCSQL.SrlBulkMovementData'; };
            SrlBulkMovementDataGrid.prototype.getDialogType = function () { return VDSCSQL.SrlBulkMovementDataDialog; };
            SrlBulkMovementDataGrid.prototype.getIdProperty = function () { return VDSCSQL.SrlBulkMovementDataRow.idProperty; };
            SrlBulkMovementDataGrid.prototype.getLocalTextPrefix = function () { return VDSCSQL.SrlBulkMovementDataRow.localTextPrefix; };
            SrlBulkMovementDataGrid.prototype.getService = function () { return VDSCSQL.SrlBulkMovementDataService.baseUrl; };
            return SrlBulkMovementDataGrid;
        }(Serenity.EntityGrid));
        SrlBulkMovementDataGrid = __decorate([
            Serenity.Decorators.registerClass()
        ], SrlBulkMovementDataGrid);
        VDSCSQL.SrlBulkMovementDataGrid = SrlBulkMovementDataGrid;
    })(VDSCSQL = FormulationManagementSystems.VDSCSQL || (FormulationManagementSystems.VDSCSQL = {}));
})(FormulationManagementSystems || (FormulationManagementSystems = {}));
var FormulationManagementSystems;
(function (FormulationManagementSystems) {
    var VDSCSQL;
    (function (VDSCSQL) {
        var SrlBulkStorageTankDataDialog = (function (_super) {
            __extends(SrlBulkStorageTankDataDialog, _super);
            function SrlBulkStorageTankDataDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new VDSCSQL.SrlBulkStorageTankDataForm(_this.idPrefix);
                return _this;
            }
            SrlBulkStorageTankDataDialog.prototype.getFormKey = function () { return VDSCSQL.SrlBulkStorageTankDataForm.formKey; };
            SrlBulkStorageTankDataDialog.prototype.getIdProperty = function () { return VDSCSQL.SrlBulkStorageTankDataRow.idProperty; };
            SrlBulkStorageTankDataDialog.prototype.getLocalTextPrefix = function () { return VDSCSQL.SrlBulkStorageTankDataRow.localTextPrefix; };
            SrlBulkStorageTankDataDialog.prototype.getNameProperty = function () { return VDSCSQL.SrlBulkStorageTankDataRow.nameProperty; };
            SrlBulkStorageTankDataDialog.prototype.getService = function () { return VDSCSQL.SrlBulkStorageTankDataService.baseUrl; };
            return SrlBulkStorageTankDataDialog;
        }(Serenity.EntityDialog));
        SrlBulkStorageTankDataDialog = __decorate([
            Serenity.Decorators.registerClass()
        ], SrlBulkStorageTankDataDialog);
        VDSCSQL.SrlBulkStorageTankDataDialog = SrlBulkStorageTankDataDialog;
    })(VDSCSQL = FormulationManagementSystems.VDSCSQL || (FormulationManagementSystems.VDSCSQL = {}));
})(FormulationManagementSystems || (FormulationManagementSystems = {}));
var FormulationManagementSystems;
(function (FormulationManagementSystems) {
    var VDSCSQL;
    (function (VDSCSQL) {
        var SrlBulkStorageTankDataGrid = (function (_super) {
            __extends(SrlBulkStorageTankDataGrid, _super);
            function SrlBulkStorageTankDataGrid(container) {
                return _super.call(this, container) || this;
            }
            SrlBulkStorageTankDataGrid.prototype.getColumnsKey = function () { return 'VDSCSQL.SrlBulkStorageTankData'; };
            SrlBulkStorageTankDataGrid.prototype.getDialogType = function () { return VDSCSQL.SrlBulkStorageTankDataDialog; };
            SrlBulkStorageTankDataGrid.prototype.getIdProperty = function () { return VDSCSQL.SrlBulkStorageTankDataRow.idProperty; };
            SrlBulkStorageTankDataGrid.prototype.getLocalTextPrefix = function () { return VDSCSQL.SrlBulkStorageTankDataRow.localTextPrefix; };
            SrlBulkStorageTankDataGrid.prototype.getService = function () { return VDSCSQL.SrlBulkStorageTankDataService.baseUrl; };
            return SrlBulkStorageTankDataGrid;
        }(Serenity.EntityGrid));
        SrlBulkStorageTankDataGrid = __decorate([
            Serenity.Decorators.registerClass()
        ], SrlBulkStorageTankDataGrid);
        VDSCSQL.SrlBulkStorageTankDataGrid = SrlBulkStorageTankDataGrid;
    })(VDSCSQL = FormulationManagementSystems.VDSCSQL || (FormulationManagementSystems.VDSCSQL = {}));
})(FormulationManagementSystems || (FormulationManagementSystems = {}));
var FormulationManagementSystems;
(function (FormulationManagementSystems) {
    var VDSCSQL;
    (function (VDSCSQL) {
        var SrlBulkTerminalClearanceDialog = (function (_super) {
            __extends(SrlBulkTerminalClearanceDialog, _super);
            function SrlBulkTerminalClearanceDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new VDSCSQL.SrlBulkTerminalClearanceForm(_this.idPrefix);
                return _this;
            }
            SrlBulkTerminalClearanceDialog.prototype.getFormKey = function () { return VDSCSQL.SrlBulkTerminalClearanceForm.formKey; };
            SrlBulkTerminalClearanceDialog.prototype.getIdProperty = function () { return VDSCSQL.SrlBulkTerminalClearanceRow.idProperty; };
            SrlBulkTerminalClearanceDialog.prototype.getLocalTextPrefix = function () { return VDSCSQL.SrlBulkTerminalClearanceRow.localTextPrefix; };
            SrlBulkTerminalClearanceDialog.prototype.getNameProperty = function () { return VDSCSQL.SrlBulkTerminalClearanceRow.nameProperty; };
            SrlBulkTerminalClearanceDialog.prototype.getService = function () { return VDSCSQL.SrlBulkTerminalClearanceService.baseUrl; };
            return SrlBulkTerminalClearanceDialog;
        }(Serenity.EntityDialog));
        SrlBulkTerminalClearanceDialog = __decorate([
            Serenity.Decorators.registerClass()
        ], SrlBulkTerminalClearanceDialog);
        VDSCSQL.SrlBulkTerminalClearanceDialog = SrlBulkTerminalClearanceDialog;
    })(VDSCSQL = FormulationManagementSystems.VDSCSQL || (FormulationManagementSystems.VDSCSQL = {}));
})(FormulationManagementSystems || (FormulationManagementSystems = {}));
var FormulationManagementSystems;
(function (FormulationManagementSystems) {
    var VDSCSQL;
    (function (VDSCSQL) {
        var SrlBulkTerminalClearanceGrid = (function (_super) {
            __extends(SrlBulkTerminalClearanceGrid, _super);
            function SrlBulkTerminalClearanceGrid(container) {
                return _super.call(this, container) || this;
            }
            SrlBulkTerminalClearanceGrid.prototype.getColumnsKey = function () { return 'VDSCSQL.SrlBulkTerminalClearance'; };
            SrlBulkTerminalClearanceGrid.prototype.getDialogType = function () { return VDSCSQL.SrlBulkTerminalClearanceDialog; };
            SrlBulkTerminalClearanceGrid.prototype.getIdProperty = function () { return VDSCSQL.SrlBulkTerminalClearanceRow.idProperty; };
            SrlBulkTerminalClearanceGrid.prototype.getLocalTextPrefix = function () { return VDSCSQL.SrlBulkTerminalClearanceRow.localTextPrefix; };
            SrlBulkTerminalClearanceGrid.prototype.getService = function () { return VDSCSQL.SrlBulkTerminalClearanceService.baseUrl; };
            return SrlBulkTerminalClearanceGrid;
        }(Serenity.EntityGrid));
        SrlBulkTerminalClearanceGrid = __decorate([
            Serenity.Decorators.registerClass()
        ], SrlBulkTerminalClearanceGrid);
        VDSCSQL.SrlBulkTerminalClearanceGrid = SrlBulkTerminalClearanceGrid;
    })(VDSCSQL = FormulationManagementSystems.VDSCSQL || (FormulationManagementSystems.VDSCSQL = {}));
})(FormulationManagementSystems || (FormulationManagementSystems = {}));
var FormulationManagementSystems;
(function (FormulationManagementSystems) {
    var VDSCSQL;
    (function (VDSCSQL) {
        var SrlCarrierDialog = (function (_super) {
            __extends(SrlCarrierDialog, _super);
            function SrlCarrierDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new VDSCSQL.SrlCarrierForm(_this.idPrefix);
                return _this;
            }
            SrlCarrierDialog.prototype.getFormKey = function () { return VDSCSQL.SrlCarrierForm.formKey; };
            SrlCarrierDialog.prototype.getIdProperty = function () { return VDSCSQL.SrlCarrierRow.idProperty; };
            SrlCarrierDialog.prototype.getLocalTextPrefix = function () { return VDSCSQL.SrlCarrierRow.localTextPrefix; };
            SrlCarrierDialog.prototype.getNameProperty = function () { return VDSCSQL.SrlCarrierRow.nameProperty; };
            SrlCarrierDialog.prototype.getService = function () { return VDSCSQL.SrlCarrierService.baseUrl; };
            return SrlCarrierDialog;
        }(Serenity.EntityDialog));
        SrlCarrierDialog = __decorate([
            Serenity.Decorators.registerClass()
        ], SrlCarrierDialog);
        VDSCSQL.SrlCarrierDialog = SrlCarrierDialog;
    })(VDSCSQL = FormulationManagementSystems.VDSCSQL || (FormulationManagementSystems.VDSCSQL = {}));
})(FormulationManagementSystems || (FormulationManagementSystems = {}));
var FormulationManagementSystems;
(function (FormulationManagementSystems) {
    var VDSCSQL;
    (function (VDSCSQL) {
        var SrlCarrierGrid = (function (_super) {
            __extends(SrlCarrierGrid, _super);
            function SrlCarrierGrid(container) {
                return _super.call(this, container) || this;
            }
            SrlCarrierGrid.prototype.getColumnsKey = function () { return 'VDSCSQL.SrlCarrier'; };
            SrlCarrierGrid.prototype.getDialogType = function () { return VDSCSQL.SrlCarrierDialog; };
            SrlCarrierGrid.prototype.getIdProperty = function () { return VDSCSQL.SrlCarrierRow.idProperty; };
            SrlCarrierGrid.prototype.getLocalTextPrefix = function () { return VDSCSQL.SrlCarrierRow.localTextPrefix; };
            SrlCarrierGrid.prototype.getService = function () { return VDSCSQL.SrlCarrierService.baseUrl; };
            return SrlCarrierGrid;
        }(Serenity.EntityGrid));
        SrlCarrierGrid = __decorate([
            Serenity.Decorators.registerClass()
        ], SrlCarrierGrid);
        VDSCSQL.SrlCarrierGrid = SrlCarrierGrid;
    })(VDSCSQL = FormulationManagementSystems.VDSCSQL || (FormulationManagementSystems.VDSCSQL = {}));
})(FormulationManagementSystems || (FormulationManagementSystems = {}));
var FormulationManagementSystems;
(function (FormulationManagementSystems) {
    var VDSCSQL;
    (function (VDSCSQL) {
        var SrlMsdsDialog = (function (_super) {
            __extends(SrlMsdsDialog, _super);
            function SrlMsdsDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new VDSCSQL.SrlMsdsForm(_this.idPrefix);
                return _this;
            }
            SrlMsdsDialog.prototype.getFormKey = function () { return VDSCSQL.SrlMsdsForm.formKey; };
            SrlMsdsDialog.prototype.getIdProperty = function () { return VDSCSQL.SrlMsdsRow.idProperty; };
            SrlMsdsDialog.prototype.getLocalTextPrefix = function () { return VDSCSQL.SrlMsdsRow.localTextPrefix; };
            SrlMsdsDialog.prototype.getService = function () { return VDSCSQL.SrlMsdsService.baseUrl; };
            return SrlMsdsDialog;
        }(Serenity.EntityDialog));
        SrlMsdsDialog = __decorate([
            Serenity.Decorators.registerClass()
        ], SrlMsdsDialog);
        VDSCSQL.SrlMsdsDialog = SrlMsdsDialog;
    })(VDSCSQL = FormulationManagementSystems.VDSCSQL || (FormulationManagementSystems.VDSCSQL = {}));
})(FormulationManagementSystems || (FormulationManagementSystems = {}));
var FormulationManagementSystems;
(function (FormulationManagementSystems) {
    var VDSCSQL;
    (function (VDSCSQL) {
        var SrlMsdsGrid = (function (_super) {
            __extends(SrlMsdsGrid, _super);
            function SrlMsdsGrid(container) {
                return _super.call(this, container) || this;
            }
            SrlMsdsGrid.prototype.getColumnsKey = function () { return 'VDSCSQL.SrlMsds'; };
            SrlMsdsGrid.prototype.getDialogType = function () { return VDSCSQL.SrlMsdsDialog; };
            SrlMsdsGrid.prototype.getIdProperty = function () { return VDSCSQL.SrlMsdsRow.idProperty; };
            SrlMsdsGrid.prototype.getLocalTextPrefix = function () { return VDSCSQL.SrlMsdsRow.localTextPrefix; };
            SrlMsdsGrid.prototype.getService = function () { return VDSCSQL.SrlMsdsService.baseUrl; };
            return SrlMsdsGrid;
        }(Serenity.EntityGrid));
        SrlMsdsGrid = __decorate([
            Serenity.Decorators.registerClass()
        ], SrlMsdsGrid);
        VDSCSQL.SrlMsdsGrid = SrlMsdsGrid;
    })(VDSCSQL = FormulationManagementSystems.VDSCSQL || (FormulationManagementSystems.VDSCSQL = {}));
})(FormulationManagementSystems || (FormulationManagementSystems = {}));
var FormulationManagementSystems;
(function (FormulationManagementSystems) {
    var VDSCSQL;
    (function (VDSCSQL) {
        var StepInstructionDialog = (function (_super) {
            __extends(StepInstructionDialog, _super);
            function StepInstructionDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new VDSCSQL.StepInstructionForm(_this.idPrefix);
                return _this;
            }
            StepInstructionDialog.prototype.getFormKey = function () { return VDSCSQL.StepInstructionForm.formKey; };
            StepInstructionDialog.prototype.getIdProperty = function () { return VDSCSQL.StepInstructionRow.idProperty; };
            StepInstructionDialog.prototype.getLocalTextPrefix = function () { return VDSCSQL.StepInstructionRow.localTextPrefix; };
            StepInstructionDialog.prototype.getNameProperty = function () { return VDSCSQL.StepInstructionRow.nameProperty; };
            StepInstructionDialog.prototype.getService = function () { return VDSCSQL.StepInstructionService.baseUrl; };
            return StepInstructionDialog;
        }(Serenity.EntityDialog));
        StepInstructionDialog = __decorate([
            Serenity.Decorators.registerClass()
        ], StepInstructionDialog);
        VDSCSQL.StepInstructionDialog = StepInstructionDialog;
    })(VDSCSQL = FormulationManagementSystems.VDSCSQL || (FormulationManagementSystems.VDSCSQL = {}));
})(FormulationManagementSystems || (FormulationManagementSystems = {}));
var FormulationManagementSystems;
(function (FormulationManagementSystems) {
    var VDSCSQL;
    (function (VDSCSQL) {
        var StepInstructionGrid = (function (_super) {
            __extends(StepInstructionGrid, _super);
            function StepInstructionGrid(container) {
                return _super.call(this, container) || this;
            }
            StepInstructionGrid.prototype.getColumnsKey = function () { return 'VDSCSQL.StepInstruction'; };
            StepInstructionGrid.prototype.getDialogType = function () { return VDSCSQL.StepInstructionDialog; };
            StepInstructionGrid.prototype.getIdProperty = function () { return VDSCSQL.StepInstructionRow.idProperty; };
            StepInstructionGrid.prototype.getLocalTextPrefix = function () { return VDSCSQL.StepInstructionRow.localTextPrefix; };
            StepInstructionGrid.prototype.getService = function () { return VDSCSQL.StepInstructionService.baseUrl; };
            return StepInstructionGrid;
        }(Serenity.EntityGrid));
        StepInstructionGrid = __decorate([
            Serenity.Decorators.registerClass()
        ], StepInstructionGrid);
        VDSCSQL.StepInstructionGrid = StepInstructionGrid;
    })(VDSCSQL = FormulationManagementSystems.VDSCSQL || (FormulationManagementSystems.VDSCSQL = {}));
})(FormulationManagementSystems || (FormulationManagementSystems = {}));
var FormulationManagementSystems;
(function (FormulationManagementSystems) {
    var VDSCSQL;
    (function (VDSCSQL) {
        var StepInstructionTypeDialog = (function (_super) {
            __extends(StepInstructionTypeDialog, _super);
            function StepInstructionTypeDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new VDSCSQL.StepInstructionTypeForm(_this.idPrefix);
                return _this;
            }
            StepInstructionTypeDialog.prototype.getFormKey = function () { return VDSCSQL.StepInstructionTypeForm.formKey; };
            StepInstructionTypeDialog.prototype.getIdProperty = function () { return VDSCSQL.StepInstructionTypeRow.idProperty; };
            StepInstructionTypeDialog.prototype.getLocalTextPrefix = function () { return VDSCSQL.StepInstructionTypeRow.localTextPrefix; };
            StepInstructionTypeDialog.prototype.getNameProperty = function () { return VDSCSQL.StepInstructionTypeRow.nameProperty; };
            StepInstructionTypeDialog.prototype.getService = function () { return VDSCSQL.StepInstructionTypeService.baseUrl; };
            return StepInstructionTypeDialog;
        }(Serenity.EntityDialog));
        StepInstructionTypeDialog = __decorate([
            Serenity.Decorators.registerClass()
        ], StepInstructionTypeDialog);
        VDSCSQL.StepInstructionTypeDialog = StepInstructionTypeDialog;
    })(VDSCSQL = FormulationManagementSystems.VDSCSQL || (FormulationManagementSystems.VDSCSQL = {}));
})(FormulationManagementSystems || (FormulationManagementSystems = {}));
var FormulationManagementSystems;
(function (FormulationManagementSystems) {
    var VDSCSQL;
    (function (VDSCSQL) {
        var StepInstructionTypeGrid = (function (_super) {
            __extends(StepInstructionTypeGrid, _super);
            function StepInstructionTypeGrid(container) {
                return _super.call(this, container) || this;
            }
            StepInstructionTypeGrid.prototype.getColumnsKey = function () { return 'VDSCSQL.StepInstructionType'; };
            StepInstructionTypeGrid.prototype.getDialogType = function () { return VDSCSQL.StepInstructionTypeDialog; };
            StepInstructionTypeGrid.prototype.getIdProperty = function () { return VDSCSQL.StepInstructionTypeRow.idProperty; };
            StepInstructionTypeGrid.prototype.getLocalTextPrefix = function () { return VDSCSQL.StepInstructionTypeRow.localTextPrefix; };
            StepInstructionTypeGrid.prototype.getService = function () { return VDSCSQL.StepInstructionTypeService.baseUrl; };
            return StepInstructionTypeGrid;
        }(Serenity.EntityGrid));
        StepInstructionTypeGrid = __decorate([
            Serenity.Decorators.registerClass()
        ], StepInstructionTypeGrid);
        VDSCSQL.StepInstructionTypeGrid = StepInstructionTypeGrid;
    })(VDSCSQL = FormulationManagementSystems.VDSCSQL || (FormulationManagementSystems.VDSCSQL = {}));
})(FormulationManagementSystems || (FormulationManagementSystems = {}));
var FormulationManagementSystems;
(function (FormulationManagementSystems) {
    var VDSCSQL;
    (function (VDSCSQL) {
        var StepValueEntriesDialog = (function (_super) {
            __extends(StepValueEntriesDialog, _super);
            function StepValueEntriesDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new VDSCSQL.StepValueEntriesForm(_this.idPrefix);
                return _this;
            }
            StepValueEntriesDialog.prototype.getFormKey = function () { return VDSCSQL.StepValueEntriesForm.formKey; };
            StepValueEntriesDialog.prototype.getIdProperty = function () { return VDSCSQL.StepValueEntriesRow.idProperty; };
            StepValueEntriesDialog.prototype.getLocalTextPrefix = function () { return VDSCSQL.StepValueEntriesRow.localTextPrefix; };
            StepValueEntriesDialog.prototype.getNameProperty = function () { return VDSCSQL.StepValueEntriesRow.nameProperty; };
            StepValueEntriesDialog.prototype.getService = function () { return VDSCSQL.StepValueEntriesService.baseUrl; };
            return StepValueEntriesDialog;
        }(Serenity.EntityDialog));
        StepValueEntriesDialog = __decorate([
            Serenity.Decorators.registerClass()
        ], StepValueEntriesDialog);
        VDSCSQL.StepValueEntriesDialog = StepValueEntriesDialog;
    })(VDSCSQL = FormulationManagementSystems.VDSCSQL || (FormulationManagementSystems.VDSCSQL = {}));
})(FormulationManagementSystems || (FormulationManagementSystems = {}));
var FormulationManagementSystems;
(function (FormulationManagementSystems) {
    var VDSCSQL;
    (function (VDSCSQL) {
        var StepValueEntriesGrid = (function (_super) {
            __extends(StepValueEntriesGrid, _super);
            function StepValueEntriesGrid(container) {
                return _super.call(this, container) || this;
            }
            StepValueEntriesGrid.prototype.getColumnsKey = function () { return 'VDSCSQL.StepValueEntries'; };
            StepValueEntriesGrid.prototype.getDialogType = function () { return VDSCSQL.StepValueEntriesDialog; };
            StepValueEntriesGrid.prototype.getIdProperty = function () { return VDSCSQL.StepValueEntriesRow.idProperty; };
            StepValueEntriesGrid.prototype.getLocalTextPrefix = function () { return VDSCSQL.StepValueEntriesRow.localTextPrefix; };
            StepValueEntriesGrid.prototype.getService = function () { return VDSCSQL.StepValueEntriesService.baseUrl; };
            return StepValueEntriesGrid;
        }(Serenity.EntityGrid));
        StepValueEntriesGrid = __decorate([
            Serenity.Decorators.registerClass()
        ], StepValueEntriesGrid);
        VDSCSQL.StepValueEntriesGrid = StepValueEntriesGrid;
    })(VDSCSQL = FormulationManagementSystems.VDSCSQL || (FormulationManagementSystems.VDSCSQL = {}));
})(FormulationManagementSystems || (FormulationManagementSystems = {}));
var FormulationManagementSystems;
(function (FormulationManagementSystems) {
    var VDSCSQL;
    (function (VDSCSQL) {
        var ValueEntriesDataDialog = (function (_super) {
            __extends(ValueEntriesDataDialog, _super);
            function ValueEntriesDataDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new VDSCSQL.ValueEntriesDataForm(_this.idPrefix);
                return _this;
            }
            ValueEntriesDataDialog.prototype.getFormKey = function () { return VDSCSQL.ValueEntriesDataForm.formKey; };
            ValueEntriesDataDialog.prototype.getIdProperty = function () { return VDSCSQL.ValueEntriesDataRow.idProperty; };
            ValueEntriesDataDialog.prototype.getLocalTextPrefix = function () { return VDSCSQL.ValueEntriesDataRow.localTextPrefix; };
            ValueEntriesDataDialog.prototype.getNameProperty = function () { return VDSCSQL.ValueEntriesDataRow.nameProperty; };
            ValueEntriesDataDialog.prototype.getService = function () { return VDSCSQL.ValueEntriesDataService.baseUrl; };
            return ValueEntriesDataDialog;
        }(Serenity.EntityDialog));
        ValueEntriesDataDialog = __decorate([
            Serenity.Decorators.registerClass()
        ], ValueEntriesDataDialog);
        VDSCSQL.ValueEntriesDataDialog = ValueEntriesDataDialog;
    })(VDSCSQL = FormulationManagementSystems.VDSCSQL || (FormulationManagementSystems.VDSCSQL = {}));
})(FormulationManagementSystems || (FormulationManagementSystems = {}));
var FormulationManagementSystems;
(function (FormulationManagementSystems) {
    var VDSCSQL;
    (function (VDSCSQL) {
        var ValueEntriesDataGrid = (function (_super) {
            __extends(ValueEntriesDataGrid, _super);
            function ValueEntriesDataGrid(container) {
                return _super.call(this, container) || this;
            }
            ValueEntriesDataGrid.prototype.getColumnsKey = function () { return 'VDSCSQL.ValueEntriesData'; };
            ValueEntriesDataGrid.prototype.getDialogType = function () { return VDSCSQL.ValueEntriesDataDialog; };
            ValueEntriesDataGrid.prototype.getIdProperty = function () { return VDSCSQL.ValueEntriesDataRow.idProperty; };
            ValueEntriesDataGrid.prototype.getLocalTextPrefix = function () { return VDSCSQL.ValueEntriesDataRow.localTextPrefix; };
            ValueEntriesDataGrid.prototype.getService = function () { return VDSCSQL.ValueEntriesDataService.baseUrl; };
            return ValueEntriesDataGrid;
        }(Serenity.EntityGrid));
        ValueEntriesDataGrid = __decorate([
            Serenity.Decorators.registerClass()
        ], ValueEntriesDataGrid);
        VDSCSQL.ValueEntriesDataGrid = ValueEntriesDataGrid;
    })(VDSCSQL = FormulationManagementSystems.VDSCSQL || (FormulationManagementSystems.VDSCSQL = {}));
})(FormulationManagementSystems || (FormulationManagementSystems = {}));
var FormulationManagementSystems;
(function (FormulationManagementSystems) {
    var VDSCSQL;
    (function (VDSCSQL) {
        var ValveListDialog = (function (_super) {
            __extends(ValveListDialog, _super);
            function ValveListDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new VDSCSQL.ValveListForm(_this.idPrefix);
                return _this;
            }
            ValveListDialog.prototype.getFormKey = function () { return VDSCSQL.ValveListForm.formKey; };
            ValveListDialog.prototype.getIdProperty = function () { return VDSCSQL.ValveListRow.idProperty; };
            ValveListDialog.prototype.getLocalTextPrefix = function () { return VDSCSQL.ValveListRow.localTextPrefix; };
            ValveListDialog.prototype.getNameProperty = function () { return VDSCSQL.ValveListRow.nameProperty; };
            ValveListDialog.prototype.getService = function () { return VDSCSQL.ValveListService.baseUrl; };
            return ValveListDialog;
        }(Serenity.EntityDialog));
        ValveListDialog = __decorate([
            Serenity.Decorators.registerClass()
        ], ValveListDialog);
        VDSCSQL.ValveListDialog = ValveListDialog;
    })(VDSCSQL = FormulationManagementSystems.VDSCSQL || (FormulationManagementSystems.VDSCSQL = {}));
})(FormulationManagementSystems || (FormulationManagementSystems = {}));
var FormulationManagementSystems;
(function (FormulationManagementSystems) {
    var VDSCSQL;
    (function (VDSCSQL) {
        var ValveListGrid = (function (_super) {
            __extends(ValveListGrid, _super);
            function ValveListGrid(container) {
                return _super.call(this, container) || this;
            }
            ValveListGrid.prototype.getColumnsKey = function () { return 'VDSCSQL.ValveList'; };
            ValveListGrid.prototype.getDialogType = function () { return VDSCSQL.ValveListDialog; };
            ValveListGrid.prototype.getIdProperty = function () { return VDSCSQL.ValveListRow.idProperty; };
            ValveListGrid.prototype.getLocalTextPrefix = function () { return VDSCSQL.ValveListRow.localTextPrefix; };
            ValveListGrid.prototype.getService = function () { return VDSCSQL.ValveListService.baseUrl; };
            return ValveListGrid;
        }(Serenity.EntityGrid));
        ValveListGrid = __decorate([
            Serenity.Decorators.registerClass()
        ], ValveListGrid);
        VDSCSQL.ValveListGrid = ValveListGrid;
    })(VDSCSQL = FormulationManagementSystems.VDSCSQL || (FormulationManagementSystems.VDSCSQL = {}));
})(FormulationManagementSystems || (FormulationManagementSystems = {}));
var FormulationManagementSystems;
(function (FormulationManagementSystems) {
    var VDSCSQL;
    (function (VDSCSQL) {
        var ValvePositionMapDialog = (function (_super) {
            __extends(ValvePositionMapDialog, _super);
            function ValvePositionMapDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new VDSCSQL.ValvePositionMapForm(_this.idPrefix);
                return _this;
            }
            ValvePositionMapDialog.prototype.getFormKey = function () { return VDSCSQL.ValvePositionMapForm.formKey; };
            ValvePositionMapDialog.prototype.getIdProperty = function () { return VDSCSQL.ValvePositionMapRow.idProperty; };
            ValvePositionMapDialog.prototype.getLocalTextPrefix = function () { return VDSCSQL.ValvePositionMapRow.localTextPrefix; };
            ValvePositionMapDialog.prototype.getNameProperty = function () { return VDSCSQL.ValvePositionMapRow.nameProperty; };
            ValvePositionMapDialog.prototype.getService = function () { return VDSCSQL.ValvePositionMapService.baseUrl; };
            return ValvePositionMapDialog;
        }(Serenity.EntityDialog));
        ValvePositionMapDialog = __decorate([
            Serenity.Decorators.registerClass()
        ], ValvePositionMapDialog);
        VDSCSQL.ValvePositionMapDialog = ValvePositionMapDialog;
    })(VDSCSQL = FormulationManagementSystems.VDSCSQL || (FormulationManagementSystems.VDSCSQL = {}));
})(FormulationManagementSystems || (FormulationManagementSystems = {}));
var FormulationManagementSystems;
(function (FormulationManagementSystems) {
    var VDSCSQL;
    (function (VDSCSQL) {
        var ValvePositionMapGrid = (function (_super) {
            __extends(ValvePositionMapGrid, _super);
            function ValvePositionMapGrid(container) {
                return _super.call(this, container) || this;
            }
            ValvePositionMapGrid.prototype.getColumnsKey = function () { return 'VDSCSQL.ValvePositionMap'; };
            ValvePositionMapGrid.prototype.getDialogType = function () { return VDSCSQL.ValvePositionMapDialog; };
            ValvePositionMapGrid.prototype.getIdProperty = function () { return VDSCSQL.ValvePositionMapRow.idProperty; };
            ValvePositionMapGrid.prototype.getLocalTextPrefix = function () { return VDSCSQL.ValvePositionMapRow.localTextPrefix; };
            ValvePositionMapGrid.prototype.getService = function () { return VDSCSQL.ValvePositionMapService.baseUrl; };
            return ValvePositionMapGrid;
        }(Serenity.EntityGrid));
        ValvePositionMapGrid = __decorate([
            Serenity.Decorators.registerClass()
        ], ValvePositionMapGrid);
        VDSCSQL.ValvePositionMapGrid = ValvePositionMapGrid;
    })(VDSCSQL = FormulationManagementSystems.VDSCSQL || (FormulationManagementSystems.VDSCSQL = {}));
})(FormulationManagementSystems || (FormulationManagementSystems = {}));
var FormulationManagementSystems;
(function (FormulationManagementSystems) {
    var VDSCSQL;
    (function (VDSCSQL) {
        var VdscAreaDialog = (function (_super) {
            __extends(VdscAreaDialog, _super);
            function VdscAreaDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new VDSCSQL.VdscAreaForm(_this.idPrefix);
                return _this;
            }
            VdscAreaDialog.prototype.getFormKey = function () { return VDSCSQL.VdscAreaForm.formKey; };
            VdscAreaDialog.prototype.getIdProperty = function () { return VDSCSQL.VdscAreaRow.idProperty; };
            VdscAreaDialog.prototype.getLocalTextPrefix = function () { return VDSCSQL.VdscAreaRow.localTextPrefix; };
            VdscAreaDialog.prototype.getNameProperty = function () { return VDSCSQL.VdscAreaRow.nameProperty; };
            VdscAreaDialog.prototype.getService = function () { return VDSCSQL.VdscAreaService.baseUrl; };
            return VdscAreaDialog;
        }(Serenity.EntityDialog));
        VdscAreaDialog = __decorate([
            Serenity.Decorators.registerClass()
        ], VdscAreaDialog);
        VDSCSQL.VdscAreaDialog = VdscAreaDialog;
    })(VDSCSQL = FormulationManagementSystems.VDSCSQL || (FormulationManagementSystems.VDSCSQL = {}));
})(FormulationManagementSystems || (FormulationManagementSystems = {}));
var FormulationManagementSystems;
(function (FormulationManagementSystems) {
    var VDSCSQL;
    (function (VDSCSQL) {
        var VdscAreaGrid = (function (_super) {
            __extends(VdscAreaGrid, _super);
            function VdscAreaGrid(container) {
                return _super.call(this, container) || this;
            }
            VdscAreaGrid.prototype.getColumnsKey = function () { return 'VDSCSQL.VdscArea'; };
            VdscAreaGrid.prototype.getDialogType = function () { return VDSCSQL.VdscAreaDialog; };
            VdscAreaGrid.prototype.getIdProperty = function () { return VDSCSQL.VdscAreaRow.idProperty; };
            VdscAreaGrid.prototype.getLocalTextPrefix = function () { return VDSCSQL.VdscAreaRow.localTextPrefix; };
            VdscAreaGrid.prototype.getService = function () { return VDSCSQL.VdscAreaService.baseUrl; };
            return VdscAreaGrid;
        }(Serenity.EntityGrid));
        VdscAreaGrid = __decorate([
            Serenity.Decorators.registerClass()
        ], VdscAreaGrid);
        VDSCSQL.VdscAreaGrid = VdscAreaGrid;
    })(VDSCSQL = FormulationManagementSystems.VDSCSQL || (FormulationManagementSystems.VDSCSQL = {}));
})(FormulationManagementSystems || (FormulationManagementSystems = {}));
var FormulationManagementSystems;
(function (FormulationManagementSystems) {
    var VDSCSQL;
    (function (VDSCSQL) {
        var VdscAreaGroupDialog = (function (_super) {
            __extends(VdscAreaGroupDialog, _super);
            function VdscAreaGroupDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new VDSCSQL.VdscAreaGroupForm(_this.idPrefix);
                return _this;
            }
            VdscAreaGroupDialog.prototype.getFormKey = function () { return VDSCSQL.VdscAreaGroupForm.formKey; };
            VdscAreaGroupDialog.prototype.getIdProperty = function () { return VDSCSQL.VdscAreaGroupRow.idProperty; };
            VdscAreaGroupDialog.prototype.getLocalTextPrefix = function () { return VDSCSQL.VdscAreaGroupRow.localTextPrefix; };
            VdscAreaGroupDialog.prototype.getService = function () { return VDSCSQL.VdscAreaGroupService.baseUrl; };
            return VdscAreaGroupDialog;
        }(Serenity.EntityDialog));
        VdscAreaGroupDialog = __decorate([
            Serenity.Decorators.registerClass()
        ], VdscAreaGroupDialog);
        VDSCSQL.VdscAreaGroupDialog = VdscAreaGroupDialog;
    })(VDSCSQL = FormulationManagementSystems.VDSCSQL || (FormulationManagementSystems.VDSCSQL = {}));
})(FormulationManagementSystems || (FormulationManagementSystems = {}));
var FormulationManagementSystems;
(function (FormulationManagementSystems) {
    var VDSCSQL;
    (function (VDSCSQL) {
        var VdscAreaGroupGrid = (function (_super) {
            __extends(VdscAreaGroupGrid, _super);
            function VdscAreaGroupGrid(container) {
                return _super.call(this, container) || this;
            }
            VdscAreaGroupGrid.prototype.getColumnsKey = function () { return 'VDSCSQL.VdscAreaGroup'; };
            VdscAreaGroupGrid.prototype.getDialogType = function () { return VDSCSQL.VdscAreaGroupDialog; };
            VdscAreaGroupGrid.prototype.getIdProperty = function () { return VDSCSQL.VdscAreaGroupRow.idProperty; };
            VdscAreaGroupGrid.prototype.getLocalTextPrefix = function () { return VDSCSQL.VdscAreaGroupRow.localTextPrefix; };
            VdscAreaGroupGrid.prototype.getService = function () { return VDSCSQL.VdscAreaGroupService.baseUrl; };
            return VdscAreaGroupGrid;
        }(Serenity.EntityGrid));
        VdscAreaGroupGrid = __decorate([
            Serenity.Decorators.registerClass()
        ], VdscAreaGroupGrid);
        VDSCSQL.VdscAreaGroupGrid = VdscAreaGroupGrid;
    })(VDSCSQL = FormulationManagementSystems.VDSCSQL || (FormulationManagementSystems.VDSCSQL = {}));
})(FormulationManagementSystems || (FormulationManagementSystems = {}));
var FormulationManagementSystems;
(function (FormulationManagementSystems) {
    var VDSCSQL;
    (function (VDSCSQL) {
        var VdscDepartmentDialog = (function (_super) {
            __extends(VdscDepartmentDialog, _super);
            function VdscDepartmentDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new VDSCSQL.VdscDepartmentForm(_this.idPrefix);
                return _this;
            }
            VdscDepartmentDialog.prototype.getFormKey = function () { return VDSCSQL.VdscDepartmentForm.formKey; };
            VdscDepartmentDialog.prototype.getIdProperty = function () { return VDSCSQL.VdscDepartmentRow.idProperty; };
            VdscDepartmentDialog.prototype.getLocalTextPrefix = function () { return VDSCSQL.VdscDepartmentRow.localTextPrefix; };
            VdscDepartmentDialog.prototype.getNameProperty = function () { return VDSCSQL.VdscDepartmentRow.nameProperty; };
            VdscDepartmentDialog.prototype.getService = function () { return VDSCSQL.VdscDepartmentService.baseUrl; };
            return VdscDepartmentDialog;
        }(Serenity.EntityDialog));
        VdscDepartmentDialog = __decorate([
            Serenity.Decorators.registerClass()
        ], VdscDepartmentDialog);
        VDSCSQL.VdscDepartmentDialog = VdscDepartmentDialog;
    })(VDSCSQL = FormulationManagementSystems.VDSCSQL || (FormulationManagementSystems.VDSCSQL = {}));
})(FormulationManagementSystems || (FormulationManagementSystems = {}));
var FormulationManagementSystems;
(function (FormulationManagementSystems) {
    var VDSCSQL;
    (function (VDSCSQL) {
        var VdscDepartmentGrid = (function (_super) {
            __extends(VdscDepartmentGrid, _super);
            function VdscDepartmentGrid(container) {
                return _super.call(this, container) || this;
            }
            VdscDepartmentGrid.prototype.getColumnsKey = function () { return 'VDSCSQL.VdscDepartment'; };
            VdscDepartmentGrid.prototype.getDialogType = function () { return VDSCSQL.VdscDepartmentDialog; };
            VdscDepartmentGrid.prototype.getIdProperty = function () { return VDSCSQL.VdscDepartmentRow.idProperty; };
            VdscDepartmentGrid.prototype.getLocalTextPrefix = function () { return VDSCSQL.VdscDepartmentRow.localTextPrefix; };
            VdscDepartmentGrid.prototype.getService = function () { return VDSCSQL.VdscDepartmentService.baseUrl; };
            return VdscDepartmentGrid;
        }(Serenity.EntityGrid));
        VdscDepartmentGrid = __decorate([
            Serenity.Decorators.registerClass()
        ], VdscDepartmentGrid);
        VDSCSQL.VdscDepartmentGrid = VdscDepartmentGrid;
    })(VDSCSQL = FormulationManagementSystems.VDSCSQL || (FormulationManagementSystems.VDSCSQL = {}));
})(FormulationManagementSystems || (FormulationManagementSystems = {}));
//# sourceMappingURL=FormulationManagementSystems.Web.js.map