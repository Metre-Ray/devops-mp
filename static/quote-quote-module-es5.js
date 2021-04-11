(function () {
  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

  function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

  function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

  function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

  function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e2) { throw _e2; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e3) { didErr = true; err = _e3; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

  function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

  function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

  function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

  function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

  function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

  function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

  function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

  function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

  function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

  function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

  function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["quote-quote-module"], {
    /***/
    "3Pt+":
    /*!********************************************************************!*\
      !*** ./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js ***!
      \********************************************************************/

    /*! exports provided: AbstractControl, AbstractControlDirective, AbstractFormGroupDirective, COMPOSITION_BUFFER_MODE, CheckboxControlValueAccessor, CheckboxRequiredValidator, ControlContainer, DefaultValueAccessor, EmailValidator, FormArray, FormArrayName, FormBuilder, FormControl, FormControlDirective, FormControlName, FormGroup, FormGroupDirective, FormGroupName, FormsModule, MaxLengthValidator, MinLengthValidator, NG_ASYNC_VALIDATORS, NG_VALIDATORS, NG_VALUE_ACCESSOR, NgControl, NgControlStatus, NgControlStatusGroup, NgForm, NgModel, NgModelGroup, NgSelectOption, NumberValueAccessor, PatternValidator, RadioControlValueAccessor, RangeValueAccessor, ReactiveFormsModule, RequiredValidator, SelectControlValueAccessor, SelectMultipleControlValueAccessor, VERSION, Validators, ɵInternalFormsSharedModule, ɵNgNoValidate, ɵNgSelectMultipleOption, ɵangular_packages_forms_forms_a, ɵangular_packages_forms_forms_b, ɵangular_packages_forms_forms_ba, ɵangular_packages_forms_forms_bb, ɵangular_packages_forms_forms_bc, ɵangular_packages_forms_forms_bd, ɵangular_packages_forms_forms_be, ɵangular_packages_forms_forms_c, ɵangular_packages_forms_forms_d, ɵangular_packages_forms_forms_e, ɵangular_packages_forms_forms_f, ɵangular_packages_forms_forms_g, ɵangular_packages_forms_forms_h, ɵangular_packages_forms_forms_i, ɵangular_packages_forms_forms_j, ɵangular_packages_forms_forms_k, ɵangular_packages_forms_forms_l, ɵangular_packages_forms_forms_m, ɵangular_packages_forms_forms_n, ɵangular_packages_forms_forms_o, ɵangular_packages_forms_forms_p, ɵangular_packages_forms_forms_q, ɵangular_packages_forms_forms_r, ɵangular_packages_forms_forms_s, ɵangular_packages_forms_forms_t, ɵangular_packages_forms_forms_u, ɵangular_packages_forms_forms_v, ɵangular_packages_forms_forms_w, ɵangular_packages_forms_forms_x, ɵangular_packages_forms_forms_y, ɵangular_packages_forms_forms_z */

    /***/
    function Pt(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AbstractControl", function () {
        return AbstractControl;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AbstractControlDirective", function () {
        return AbstractControlDirective;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AbstractFormGroupDirective", function () {
        return AbstractFormGroupDirective;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "COMPOSITION_BUFFER_MODE", function () {
        return COMPOSITION_BUFFER_MODE;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CheckboxControlValueAccessor", function () {
        return CheckboxControlValueAccessor;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CheckboxRequiredValidator", function () {
        return CheckboxRequiredValidator;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ControlContainer", function () {
        return ControlContainer;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DefaultValueAccessor", function () {
        return DefaultValueAccessor;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "EmailValidator", function () {
        return EmailValidator;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FormArray", function () {
        return FormArray;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FormArrayName", function () {
        return FormArrayName;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FormBuilder", function () {
        return FormBuilder;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FormControl", function () {
        return FormControl;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FormControlDirective", function () {
        return FormControlDirective;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FormControlName", function () {
        return FormControlName;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FormGroup", function () {
        return FormGroup;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FormGroupDirective", function () {
        return FormGroupDirective;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FormGroupName", function () {
        return FormGroupName;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FormsModule", function () {
        return FormsModule;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MaxLengthValidator", function () {
        return MaxLengthValidator;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MinLengthValidator", function () {
        return MinLengthValidator;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NG_ASYNC_VALIDATORS", function () {
        return NG_ASYNC_VALIDATORS;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NG_VALIDATORS", function () {
        return NG_VALIDATORS;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NG_VALUE_ACCESSOR", function () {
        return NG_VALUE_ACCESSOR;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NgControl", function () {
        return NgControl;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NgControlStatus", function () {
        return NgControlStatus;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NgControlStatusGroup", function () {
        return NgControlStatusGroup;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NgForm", function () {
        return NgForm;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NgModel", function () {
        return NgModel;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NgModelGroup", function () {
        return NgModelGroup;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NgSelectOption", function () {
        return NgSelectOption;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NumberValueAccessor", function () {
        return NumberValueAccessor;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PatternValidator", function () {
        return PatternValidator;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RadioControlValueAccessor", function () {
        return RadioControlValueAccessor;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RangeValueAccessor", function () {
        return RangeValueAccessor;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ReactiveFormsModule", function () {
        return ReactiveFormsModule;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RequiredValidator", function () {
        return RequiredValidator;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SelectControlValueAccessor", function () {
        return SelectControlValueAccessor;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SelectMultipleControlValueAccessor", function () {
        return SelectMultipleControlValueAccessor;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "VERSION", function () {
        return VERSION;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Validators", function () {
        return Validators;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ɵInternalFormsSharedModule", function () {
        return ɵInternalFormsSharedModule;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ɵNgNoValidate", function () {
        return ɵNgNoValidate;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ɵNgSelectMultipleOption", function () {
        return ɵNgSelectMultipleOption;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ɵangular_packages_forms_forms_a", function () {
        return SHARED_FORM_DIRECTIVES;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ɵangular_packages_forms_forms_b", function () {
        return TEMPLATE_DRIVEN_DIRECTIVES;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ɵangular_packages_forms_forms_ba", function () {
        return CHECKBOX_REQUIRED_VALIDATOR;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ɵangular_packages_forms_forms_bb", function () {
        return EMAIL_VALIDATOR;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ɵangular_packages_forms_forms_bc", function () {
        return MIN_LENGTH_VALIDATOR;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ɵangular_packages_forms_forms_bd", function () {
        return MAX_LENGTH_VALIDATOR;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ɵangular_packages_forms_forms_be", function () {
        return PATTERN_VALIDATOR;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ɵangular_packages_forms_forms_c", function () {
        return REACTIVE_DRIVEN_DIRECTIVES;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ɵangular_packages_forms_forms_d", function () {
        return ɵInternalFormsSharedModule;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ɵangular_packages_forms_forms_e", function () {
        return CHECKBOX_VALUE_ACCESSOR;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ɵangular_packages_forms_forms_f", function () {
        return DEFAULT_VALUE_ACCESSOR;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ɵangular_packages_forms_forms_g", function () {
        return AbstractControlStatus;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ɵangular_packages_forms_forms_h", function () {
        return ngControlStatusHost;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ɵangular_packages_forms_forms_i", function () {
        return formDirectiveProvider;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ɵangular_packages_forms_forms_j", function () {
        return formControlBinding;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ɵangular_packages_forms_forms_k", function () {
        return modelGroupProvider;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ɵangular_packages_forms_forms_l", function () {
        return NUMBER_VALUE_ACCESSOR;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ɵangular_packages_forms_forms_m", function () {
        return RADIO_VALUE_ACCESSOR;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ɵangular_packages_forms_forms_n", function () {
        return RadioControlRegistry;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ɵangular_packages_forms_forms_o", function () {
        return RANGE_VALUE_ACCESSOR;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ɵangular_packages_forms_forms_p", function () {
        return NG_MODEL_WITH_FORM_CONTROL_WARNING;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ɵangular_packages_forms_forms_q", function () {
        return formControlBinding$1;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ɵangular_packages_forms_forms_r", function () {
        return controlNameBinding;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ɵangular_packages_forms_forms_s", function () {
        return formDirectiveProvider$1;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ɵangular_packages_forms_forms_t", function () {
        return formGroupNameProvider;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ɵangular_packages_forms_forms_u", function () {
        return formArrayNameProvider;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ɵangular_packages_forms_forms_v", function () {
        return SELECT_VALUE_ACCESSOR;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ɵangular_packages_forms_forms_w", function () {
        return SELECT_MULTIPLE_VALUE_ACCESSOR;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ɵangular_packages_forms_forms_x", function () {
        return ɵNgSelectMultipleOption;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ɵangular_packages_forms_forms_y", function () {
        return ɵNgNoValidate;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ɵangular_packages_forms_forms_z", function () {
        return REQUIRED_VALIDATOR;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /**
       * @license Angular v11.1.2
       * (c) 2010-2020 Google LLC. https://angular.io/
       * License: MIT
       */

      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /**
       * Used to provide a `ControlValueAccessor` for form controls.
       *
       * See `DefaultValueAccessor` for how to implement one.
       *
       * @publicApi
       */


      var NG_VALUE_ACCESSOR = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('NgValueAccessor');
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      var CHECKBOX_VALUE_ACCESSOR = {
        provide: NG_VALUE_ACCESSOR,
        useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(function () {
          return CheckboxControlValueAccessor;
        }),
        multi: true
      };
      /**
       * @description
       * A `ControlValueAccessor` for writing a value and listening to changes on a checkbox input
       * element.
       *
       * @usageNotes
       *
       * ### Using a checkbox with a reactive form.
       *
       * The following example shows how to use a checkbox with a reactive form.
       *
       * ```ts
       * const rememberLoginControl = new FormControl();
       * ```
       *
       * ```
       * <input type="checkbox" [formControl]="rememberLoginControl">
       * ```
       *
       * @ngModule ReactiveFormsModule
       * @ngModule FormsModule
       * @publicApi
       */

      var CheckboxControlValueAccessor = /*#__PURE__*/function () {
        function CheckboxControlValueAccessor(_renderer, _elementRef) {
          _classCallCheck(this, CheckboxControlValueAccessor);

          this._renderer = _renderer;
          this._elementRef = _elementRef;
          /**
           * The registered callback function called when a change event occurs on the input element.
           * @nodoc
           */

          this.onChange = function (_) {};
          /**
           * The registered callback function called when a blur event occurs on the input element.
           * @nodoc
           */


          this.onTouched = function () {};
        }
        /**
         * Sets the "checked" property on the input element.
         * @nodoc
         */


        _createClass(CheckboxControlValueAccessor, [{
          key: "writeValue",
          value: function writeValue(value) {
            this._renderer.setProperty(this._elementRef.nativeElement, 'checked', value);
          }
          /**
           * Registers a function called when the control value changes.
           * @nodoc
           */

        }, {
          key: "registerOnChange",
          value: function registerOnChange(fn) {
            this.onChange = fn;
          }
          /**
           * Registers a function called when the control is touched.
           * @nodoc
           */

        }, {
          key: "registerOnTouched",
          value: function registerOnTouched(fn) {
            this.onTouched = fn;
          }
          /**
           * Sets the "disabled" property on the input element.
           * @nodoc
           */

        }, {
          key: "setDisabledState",
          value: function setDisabledState(isDisabled) {
            this._renderer.setProperty(this._elementRef.nativeElement, 'disabled', isDisabled);
          }
        }]);

        return CheckboxControlValueAccessor;
      }();

      CheckboxControlValueAccessor.ɵfac = function CheckboxControlValueAccessor_Factory(t) {
        return new (t || CheckboxControlValueAccessor)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]));
      };

      CheckboxControlValueAccessor.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
        type: CheckboxControlValueAccessor,
        selectors: [["input", "type", "checkbox", "formControlName", ""], ["input", "type", "checkbox", "formControl", ""], ["input", "type", "checkbox", "ngModel", ""]],
        hostBindings: function CheckboxControlValueAccessor_HostBindings(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function CheckboxControlValueAccessor_change_HostBindingHandler($event) {
              return ctx.onChange($event.target.checked);
            })("blur", function CheckboxControlValueAccessor_blur_HostBindingHandler() {
              return ctx.onTouched();
            });
          }
        },
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([CHECKBOX_VALUE_ACCESSOR])]
      });

      CheckboxControlValueAccessor.ctorParameters = function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
        }];
      };

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CheckboxControlValueAccessor, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
          args: [{
            selector: 'input[type=checkbox][formControlName],input[type=checkbox][formControl],input[type=checkbox][ngModel]',
            host: {
              '(change)': 'onChange($event.target.checked)',
              '(blur)': 'onTouched()'
            },
            providers: [CHECKBOX_VALUE_ACCESSOR]
          }]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
          }];
        }, null);
      })();
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */


      var DEFAULT_VALUE_ACCESSOR = {
        provide: NG_VALUE_ACCESSOR,
        useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(function () {
          return DefaultValueAccessor;
        }),
        multi: true
      };
      /**
       * We must check whether the agent is Android because composition events
       * behave differently between iOS and Android.
       */

      function _isAndroid() {
        var userAgent = Object(_angular_common__WEBPACK_IMPORTED_MODULE_1__["ɵgetDOM"])() ? Object(_angular_common__WEBPACK_IMPORTED_MODULE_1__["ɵgetDOM"])().getUserAgent() : '';
        return /android (\d+)/.test(userAgent.toLowerCase());
      }
      /**
       * @description
       * Provide this token to control if form directives buffer IME input until
       * the "compositionend" event occurs.
       * @publicApi
       */


      var COMPOSITION_BUFFER_MODE = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('CompositionEventMode');
      /**
       * @description
       *
       * {@searchKeywords ngDefaultControl}
       *
       * The default `ControlValueAccessor` for writing a value and listening to changes on input
       * elements. The accessor is used by the `FormControlDirective`, `FormControlName`, and
       * `NgModel` directives.
       *
       * @usageNotes
       *
       * ### Using the default value accessor
       *
       * The following example shows how to use an input element that activates the default value accessor
       * (in this case, a text field).
       *
       * ```ts
       * const firstNameControl = new FormControl();
       * ```
       *
       * ```
       * <input type="text" [formControl]="firstNameControl">
       * ```
       *
       * This value accessor is used by default for `<input type="text">` and `<textarea>` elements, but
       * you could also use it for custom components that have similar behavior and do not require special
       * processing. In order to attach the default value accessor to a custom element, add the
       * `ngDefaultControl` attribute as shown below.
       *
       * ```
       * <custom-input-component ngDefaultControl [(ngModel)]="value"></custom-input-component>
       * ```
       *
       * @ngModule ReactiveFormsModule
       * @ngModule FormsModule
       * @publicApi
       */

      var DefaultValueAccessor = /*#__PURE__*/function () {
        function DefaultValueAccessor(_renderer, _elementRef, _compositionMode) {
          _classCallCheck(this, DefaultValueAccessor);

          this._renderer = _renderer;
          this._elementRef = _elementRef;
          this._compositionMode = _compositionMode;
          /**
           * The registered callback function called when an input event occurs on the input element.
           * @nodoc
           */

          this.onChange = function (_) {};
          /**
           * The registered callback function called when a blur event occurs on the input element.
           * @nodoc
           */


          this.onTouched = function () {};
          /** Whether the user is creating a composition string (IME events). */


          this._composing = false;

          if (this._compositionMode == null) {
            this._compositionMode = !_isAndroid();
          }
        }
        /**
         * Sets the "value" property on the input element.
         * @nodoc
         */


        _createClass(DefaultValueAccessor, [{
          key: "writeValue",
          value: function writeValue(value) {
            var normalizedValue = value == null ? '' : value;

            this._renderer.setProperty(this._elementRef.nativeElement, 'value', normalizedValue);
          }
          /**
           * Registers a function called when the control value changes.
           * @nodoc
           */

        }, {
          key: "registerOnChange",
          value: function registerOnChange(fn) {
            this.onChange = fn;
          }
          /**
           * Registers a function called when the control is touched.
           * @nodoc
           */

        }, {
          key: "registerOnTouched",
          value: function registerOnTouched(fn) {
            this.onTouched = fn;
          }
          /**
           * Sets the "disabled" property on the input element.
           * @nodoc
           */

        }, {
          key: "setDisabledState",
          value: function setDisabledState(isDisabled) {
            this._renderer.setProperty(this._elementRef.nativeElement, 'disabled', isDisabled);
          }
          /** @internal */

        }, {
          key: "_handleInput",
          value: function _handleInput(value) {
            if (!this._compositionMode || this._compositionMode && !this._composing) {
              this.onChange(value);
            }
          }
          /** @internal */

        }, {
          key: "_compositionStart",
          value: function _compositionStart() {
            this._composing = true;
          }
          /** @internal */

        }, {
          key: "_compositionEnd",
          value: function _compositionEnd(value) {
            this._composing = false;
            this._compositionMode && this.onChange(value);
          }
        }]);

        return DefaultValueAccessor;
      }();

      DefaultValueAccessor.ɵfac = function DefaultValueAccessor_Factory(t) {
        return new (t || DefaultValueAccessor)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](COMPOSITION_BUFFER_MODE, 8));
      };

      DefaultValueAccessor.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
        type: DefaultValueAccessor,
        selectors: [["input", "formControlName", "", 3, "type", "checkbox"], ["textarea", "formControlName", ""], ["input", "formControl", "", 3, "type", "checkbox"], ["textarea", "formControl", ""], ["input", "ngModel", "", 3, "type", "checkbox"], ["textarea", "ngModel", ""], ["", "ngDefaultControl", ""]],
        hostBindings: function DefaultValueAccessor_HostBindings(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("input", function DefaultValueAccessor_input_HostBindingHandler($event) {
              return ctx._handleInput($event.target.value);
            })("blur", function DefaultValueAccessor_blur_HostBindingHandler() {
              return ctx.onTouched();
            })("compositionstart", function DefaultValueAccessor_compositionstart_HostBindingHandler() {
              return ctx._compositionStart();
            })("compositionend", function DefaultValueAccessor_compositionend_HostBindingHandler($event) {
              return ctx._compositionEnd($event.target.value);
            });
          }
        },
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([DEFAULT_VALUE_ACCESSOR])]
      });

      DefaultValueAccessor.ctorParameters = function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
        }, {
          type: Boolean,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
            args: [COMPOSITION_BUFFER_MODE]
          }]
        }];
      };

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DefaultValueAccessor, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
          args: [{
            selector: 'input:not([type=checkbox])[formControlName],textarea[formControlName],input:not([type=checkbox])[formControl],textarea[formControl],input:not([type=checkbox])[ngModel],textarea[ngModel],[ngDefaultControl]',
            // TODO: vsavkin replace the above selector with the one below it once
            // https://github.com/angular/angular/issues/3011 is implemented
            // selector: '[ngModel],[formControl],[formControlName]',
            host: {
              '(input)': '$any(this)._handleInput($event.target.value)',
              '(blur)': 'onTouched()',
              '(compositionstart)': '$any(this)._compositionStart()',
              '(compositionend)': '$any(this)._compositionEnd($event.target.value)'
            },
            providers: [DEFAULT_VALUE_ACCESSOR]
          }]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
          }, {
            type: Boolean,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
            }, {
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
              args: [COMPOSITION_BUFFER_MODE]
            }]
          }];
        }, null);
      })();
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */


      function isEmptyInputValue(value) {
        // we don't check for string here so it also works with arrays
        return value == null || value.length === 0;
      }

      function hasValidLength(value) {
        // non-strict comparison is intentional, to check for both `null` and `undefined` values
        return value != null && typeof value.length === 'number';
      }
      /**
       * @description
       * An `InjectionToken` for registering additional synchronous validators used with
       * `AbstractControl`s.
       *
       * @see `NG_ASYNC_VALIDATORS`
       *
       * @usageNotes
       *
       * ### Providing a custom validator
       *
       * The following example registers a custom validator directive. Adding the validator to the
       * existing collection of validators requires the `multi: true` option.
       *
       * ```typescript
       * @Directive({
       *   selector: '[customValidator]',
       *   providers: [{provide: NG_VALIDATORS, useExisting: CustomValidatorDirective, multi: true}]
       * })
       * class CustomValidatorDirective implements Validator {
       *   validate(control: AbstractControl): ValidationErrors | null {
       *     return { 'custom': true };
       *   }
       * }
       * ```
       *
       * @publicApi
       */


      var NG_VALIDATORS = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('NgValidators');
      /**
       * @description
       * An `InjectionToken` for registering additional asynchronous validators used with
       * `AbstractControl`s.
       *
       * @see `NG_VALIDATORS`
       *
       * @publicApi
       */

      var NG_ASYNC_VALIDATORS = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('NgAsyncValidators');
      /**
       * A regular expression that matches valid e-mail addresses.
       *
       * At a high level, this regexp matches e-mail addresses of the format `local-part@tld`, where:
       * - `local-part` consists of one or more of the allowed characters (alphanumeric and some
       *   punctuation symbols).
       * - `local-part` cannot begin or end with a period (`.`).
       * - `local-part` cannot be longer than 64 characters.
       * - `tld` consists of one or more `labels` separated by periods (`.`). For example `localhost` or
       *   `foo.com`.
       * - A `label` consists of one or more of the allowed characters (alphanumeric, dashes (`-`) and
       *   periods (`.`)).
       * - A `label` cannot begin or end with a dash (`-`) or a period (`.`).
       * - A `label` cannot be longer than 63 characters.
       * - The whole address cannot be longer than 254 characters.
       *
       * ## Implementation background
       *
       * This regexp was ported over from AngularJS (see there for git history):
       * https://github.com/angular/angular.js/blob/c133ef836/src/ng/directive/input.js#L27
       * It is based on the
       * [WHATWG version](https://html.spec.whatwg.org/multipage/input.html#valid-e-mail-address) with
       * some enhancements to incorporate more RFC rules (such as rules related to domain names and the
       * lengths of different parts of the address). The main differences from the WHATWG version are:
       *   - Disallow `local-part` to begin or end with a period (`.`).
       *   - Disallow `local-part` length to exceed 64 characters.
       *   - Disallow total address length to exceed 254 characters.
       *
       * See [this commit](https://github.com/angular/angular.js/commit/f3f5cf72e) for more details.
       */

      var EMAIL_REGEXP = /^(?=.{1,254}$)(?=.{1,64}@)[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+)*@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
      /**
       * @description
       * Provides a set of built-in validators that can be used by form controls.
       *
       * A validator is a function that processes a `FormControl` or collection of
       * controls and returns an error map or null. A null map means that validation has passed.
       *
       * @see [Form Validation](/guide/form-validation)
       *
       * @publicApi
       */

      var Validators = /*#__PURE__*/function () {
        function Validators() {
          _classCallCheck(this, Validators);
        }

        _createClass(Validators, null, [{
          key: "min",
          value:
          /**
           * @description
           * Validator that requires the control's value to be greater than or equal to the provided number.
           * The validator exists only as a function and not as a directive.
           *
           * @usageNotes
           *
           * ### Validate against a minimum of 3
           *
           * ```typescript
           * const control = new FormControl(2, Validators.min(3));
           *
           * console.log(control.errors); // {min: {min: 3, actual: 2}}
           * ```
           *
           * @returns A validator function that returns an error map with the
           * `min` property if the validation check fails, otherwise `null`.
           *
           * @see `updateValueAndValidity()`
           *
           */
          function min(_min) {
            return function (control) {
              if (isEmptyInputValue(control.value) || isEmptyInputValue(_min)) {
                return null; // don't validate empty values to allow optional controls
              }

              var value = parseFloat(control.value); // Controls with NaN values after parsing should be treated as not having a
              // minimum, per the HTML forms spec: https://www.w3.org/TR/html5/forms.html#attr-input-min

              return !isNaN(value) && value < _min ? {
                'min': {
                  'min': _min,
                  'actual': control.value
                }
              } : null;
            };
          }
          /**
           * @description
           * Validator that requires the control's value to be less than or equal to the provided number.
           * The validator exists only as a function and not as a directive.
           *
           * @usageNotes
           *
           * ### Validate against a maximum of 15
           *
           * ```typescript
           * const control = new FormControl(16, Validators.max(15));
           *
           * console.log(control.errors); // {max: {max: 15, actual: 16}}
           * ```
           *
           * @returns A validator function that returns an error map with the
           * `max` property if the validation check fails, otherwise `null`.
           *
           * @see `updateValueAndValidity()`
           *
           */

        }, {
          key: "max",
          value: function max(_max) {
            return function (control) {
              if (isEmptyInputValue(control.value) || isEmptyInputValue(_max)) {
                return null; // don't validate empty values to allow optional controls
              }

              var value = parseFloat(control.value); // Controls with NaN values after parsing should be treated as not having a
              // maximum, per the HTML forms spec: https://www.w3.org/TR/html5/forms.html#attr-input-max

              return !isNaN(value) && value > _max ? {
                'max': {
                  'max': _max,
                  'actual': control.value
                }
              } : null;
            };
          }
          /**
           * @description
           * Validator that requires the control have a non-empty value.
           *
           * @usageNotes
           *
           * ### Validate that the field is non-empty
           *
           * ```typescript
           * const control = new FormControl('', Validators.required);
           *
           * console.log(control.errors); // {required: true}
           * ```
           *
           * @returns An error map with the `required` property
           * if the validation check fails, otherwise `null`.
           *
           * @see `updateValueAndValidity()`
           *
           */

        }, {
          key: "required",
          value: function required(control) {
            return isEmptyInputValue(control.value) ? {
              'required': true
            } : null;
          }
          /**
           * @description
           * Validator that requires the control's value be true. This validator is commonly
           * used for required checkboxes.
           *
           * @usageNotes
           *
           * ### Validate that the field value is true
           *
           * ```typescript
           * const control = new FormControl('', Validators.requiredTrue);
           *
           * console.log(control.errors); // {required: true}
           * ```
           *
           * @returns An error map that contains the `required` property
           * set to `true` if the validation check fails, otherwise `null`.
           *
           * @see `updateValueAndValidity()`
           *
           */

        }, {
          key: "requiredTrue",
          value: function requiredTrue(control) {
            return control.value === true ? null : {
              'required': true
            };
          }
          /**
           * @description
           * Validator that requires the control's value pass an email validation test.
           *
           * Tests the value using a [regular
           * expression](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions)
           * pattern suitable for common usecases. The pattern is based on the definition of a valid email
           * address in the [WHATWG HTML
           * specification](https://html.spec.whatwg.org/multipage/input.html#valid-e-mail-address) with
           * some enhancements to incorporate more RFC rules (such as rules related to domain names and the
           * lengths of different parts of the address).
           *
           * The differences from the WHATWG version include:
           * - Disallow `local-part` (the part before the `@` symbol) to begin or end with a period (`.`).
           * - Disallow `local-part` to be longer than 64 characters.
           * - Disallow the whole address to be longer than 254 characters.
           *
           * If this pattern does not satisfy your business needs, you can use `Validators.pattern()` to
           * validate the value against a different pattern.
           *
           * @usageNotes
           *
           * ### Validate that the field matches a valid email pattern
           *
           * ```typescript
           * const control = new FormControl('bad@', Validators.email);
           *
           * console.log(control.errors); // {email: true}
           * ```
           *
           * @returns An error map with the `email` property
           * if the validation check fails, otherwise `null`.
           *
           * @see `updateValueAndValidity()`
           *
           */

        }, {
          key: "email",
          value: function email(control) {
            if (isEmptyInputValue(control.value)) {
              return null; // don't validate empty values to allow optional controls
            }

            return EMAIL_REGEXP.test(control.value) ? null : {
              'email': true
            };
          }
          /**
           * @description
           * Validator that requires the length of the control's value to be greater than or equal
           * to the provided minimum length. This validator is also provided by default if you use the
           * the HTML5 `minlength` attribute. Note that the `minLength` validator is intended to be used
           * only for types that have a numeric `length` property, such as strings or arrays. The
           * `minLength` validator logic is also not invoked for values when their `length` property is 0
           * (for example in case of an empty string or an empty array), to support optional controls. You
           * can use the standard `required` validator if empty values should not be considered valid.
           *
           * @usageNotes
           *
           * ### Validate that the field has a minimum of 3 characters
           *
           * ```typescript
           * const control = new FormControl('ng', Validators.minLength(3));
           *
           * console.log(control.errors); // {minlength: {requiredLength: 3, actualLength: 2}}
           * ```
           *
           * ```html
           * <input minlength="5">
           * ```
           *
           * @returns A validator function that returns an error map with the
           * `minlength` property if the validation check fails, otherwise `null`.
           *
           * @see `updateValueAndValidity()`
           *
           */

        }, {
          key: "minLength",
          value: function minLength(_minLength) {
            return function (control) {
              if (isEmptyInputValue(control.value) || !hasValidLength(control.value)) {
                // don't validate empty values to allow optional controls
                // don't validate values without `length` property
                return null;
              }

              return control.value.length < _minLength ? {
                'minlength': {
                  'requiredLength': _minLength,
                  'actualLength': control.value.length
                }
              } : null;
            };
          }
          /**
           * @description
           * Validator that requires the length of the control's value to be less than or equal
           * to the provided maximum length. This validator is also provided by default if you use the
           * the HTML5 `maxlength` attribute. Note that the `maxLength` validator is intended to be used
           * only for types that have a numeric `length` property, such as strings or arrays.
           *
           * @usageNotes
           *
           * ### Validate that the field has maximum of 5 characters
           *
           * ```typescript
           * const control = new FormControl('Angular', Validators.maxLength(5));
           *
           * console.log(control.errors); // {maxlength: {requiredLength: 5, actualLength: 7}}
           * ```
           *
           * ```html
           * <input maxlength="5">
           * ```
           *
           * @returns A validator function that returns an error map with the
           * `maxlength` property if the validation check fails, otherwise `null`.
           *
           * @see `updateValueAndValidity()`
           *
           */

        }, {
          key: "maxLength",
          value: function maxLength(_maxLength) {
            return function (control) {
              return hasValidLength(control.value) && control.value.length > _maxLength ? {
                'maxlength': {
                  'requiredLength': _maxLength,
                  'actualLength': control.value.length
                }
              } : null;
            };
          }
          /**
           * @description
           * Validator that requires the control's value to match a regex pattern. This validator is also
           * provided by default if you use the HTML5 `pattern` attribute.
           *
           * @usageNotes
           *
           * ### Validate that the field only contains letters or spaces
           *
           * ```typescript
           * const control = new FormControl('1', Validators.pattern('[a-zA-Z ]*'));
           *
           * console.log(control.errors); // {pattern: {requiredPattern: '^[a-zA-Z ]*$', actualValue: '1'}}
           * ```
           *
           * ```html
           * <input pattern="[a-zA-Z ]*">
           * ```
           *
           * ### Pattern matching with the global or sticky flag
           *
           * `RegExp` objects created with the `g` or `y` flags that are passed into `Validators.pattern`
           * can produce different results on the same input when validations are run consecutively. This is
           * due to how the behavior of `RegExp.prototype.test` is
           * specified in [ECMA-262](https://tc39.es/ecma262/#sec-regexpbuiltinexec)
           * (`RegExp` preserves the index of the last match when the global or sticky flag is used).
           * Due to this behavior, it is recommended that when using
           * `Validators.pattern` you **do not** pass in a `RegExp` object with either the global or sticky
           * flag enabled.
           *
           * ```typescript
           * // Not recommended (since the `g` flag is used)
           * const controlOne = new FormControl('1', Validators.pattern(/foo/g));
           *
           * // Good
           * const controlTwo = new FormControl('1', Validators.pattern(/foo/));
           * ```
           *
           * @param pattern A regular expression to be used as is to test the values, or a string.
           * If a string is passed, the `^` character is prepended and the `$` character is
           * appended to the provided string (if not already present), and the resulting regular
           * expression is used to test the values.
           *
           * @returns A validator function that returns an error map with the
           * `pattern` property if the validation check fails, otherwise `null`.
           *
           * @see `updateValueAndValidity()`
           *
           */

        }, {
          key: "pattern",
          value: function pattern(_pattern) {
            if (!_pattern) return Validators.nullValidator;
            var regex;
            var regexStr;

            if (typeof _pattern === 'string') {
              regexStr = '';
              if (_pattern.charAt(0) !== '^') regexStr += '^';
              regexStr += _pattern;
              if (_pattern.charAt(_pattern.length - 1) !== '$') regexStr += '$';
              regex = new RegExp(regexStr);
            } else {
              regexStr = _pattern.toString();
              regex = _pattern;
            }

            return function (control) {
              if (isEmptyInputValue(control.value)) {
                return null; // don't validate empty values to allow optional controls
              }

              var value = control.value;
              return regex.test(value) ? null : {
                'pattern': {
                  'requiredPattern': regexStr,
                  'actualValue': value
                }
              };
            };
          }
          /**
           * @description
           * Validator that performs no operation.
           *
           * @see `updateValueAndValidity()`
           *
           */

        }, {
          key: "nullValidator",
          value: function nullValidator(control) {
            return null;
          }
        }, {
          key: "compose",
          value: function compose(validators) {
            if (!validators) return null;
            var presentValidators = validators.filter(isPresent);
            if (presentValidators.length == 0) return null;
            return function (control) {
              return mergeErrors(executeValidators(control, presentValidators));
            };
          }
          /**
           * @description
           * Compose multiple async validators into a single function that returns the union
           * of the individual error objects for the provided control.
           *
           * @returns A validator function that returns an error map with the
           * merged error objects of the async validators if the validation check fails, otherwise `null`.
           *
           * @see `updateValueAndValidity()`
           *
           */

        }, {
          key: "composeAsync",
          value: function composeAsync(validators) {
            if (!validators) return null;
            var presentValidators = validators.filter(isPresent);
            if (presentValidators.length == 0) return null;
            return function (control) {
              var observables = executeValidators(control, presentValidators).map(toObservable);
              return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["forkJoin"])(observables).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(mergeErrors));
            };
          }
        }]);

        return Validators;
      }();

      function isPresent(o) {
        return o != null;
      }

      function toObservable(r) {
        var obs = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵisPromise"])(r) ? Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["from"])(r) : r;

        if (!Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵisObservable"])(obs) && (typeof ngDevMode === 'undefined' || ngDevMode)) {
          throw new Error("Expected validator to return Promise or Observable.");
        }

        return obs;
      }

      function mergeErrors(arrayOfErrors) {
        var res = {}; // Not using Array.reduce here due to a Chrome 80 bug
        // https://bugs.chromium.org/p/chromium/issues/detail?id=1049982

        arrayOfErrors.forEach(function (errors) {
          res = errors != null ? Object.assign(Object.assign({}, res), errors) : res;
        });
        return Object.keys(res).length === 0 ? null : res;
      }

      function executeValidators(control, validators) {
        return validators.map(function (validator) {
          return validator(control);
        });
      }

      function isValidatorFn(validator) {
        return !validator.validate;
      }
      /**
       * Given the list of validators that may contain both functions as well as classes, return the list
       * of validator functions (convert validator classes into validator functions). This is needed to
       * have consistent structure in validators list before composing them.
       *
       * @param validators The set of validators that may contain validators both in plain function form
       *     as well as represented as a validator class.
       */


      function normalizeValidators(validators) {
        return validators.map(function (validator) {
          return isValidatorFn(validator) ? validator : function (c) {
            return validator.validate(c);
          };
        });
      }
      /**
       * Merges synchronous validators into a single validator function (combined using
       * `Validators.compose`).
       */


      function composeValidators(validators) {
        return validators != null ? Validators.compose(normalizeValidators(validators)) : null;
      }
      /**
       * Merges asynchronous validators into a single validator function (combined using
       * `Validators.composeAsync`).
       */


      function composeAsyncValidators(validators) {
        return validators != null ? Validators.composeAsync(normalizeValidators(validators)) : null;
      }
      /**
       * Merges raw control validators with a given directive validator and returns the combined list of
       * validators as an array.
       */


      function mergeValidators(controlValidators, dirValidator) {
        if (controlValidators === null) return [dirValidator];
        return Array.isArray(controlValidators) ? [].concat(_toConsumableArray(controlValidators), [dirValidator]) : [controlValidators, dirValidator];
      }
      /**
       * Retrieves the list of raw synchronous validators attached to a given control.
       */


      function getControlValidators(control) {
        return control._rawValidators;
      }
      /**
       * Retrieves the list of raw asynchronous validators attached to a given control.
       */


      function getControlAsyncValidators(control) {
        return control._rawAsyncValidators;
      }
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /**
       * @description
       * Base class for control directives.
       *
       * This class is only used internally in the `ReactiveFormsModule` and the `FormsModule`.
       *
       * @publicApi
       */


      var AbstractControlDirective = /*#__PURE__*/function () {
        function AbstractControlDirective() {
          _classCallCheck(this, AbstractControlDirective);

          /**
           * Set of synchronous validators as they were provided while calling `setValidators` function.
           * @internal
           */
          this._rawValidators = [];
          /**
           * Set of asynchronous validators as they were provided while calling `setAsyncValidators`
           * function.
           * @internal
           */

          this._rawAsyncValidators = [];
          /*
           * The set of callbacks to be invoked when directive instance is being destroyed.
           */

          this._onDestroyCallbacks = [];
        }
        /**
         * @description
         * Reports the value of the control if it is present, otherwise null.
         */


        _createClass(AbstractControlDirective, [{
          key: "value",
          get: function get() {
            return this.control ? this.control.value : null;
          }
          /**
           * @description
           * Reports whether the control is valid. A control is considered valid if no
           * validation errors exist with the current value.
           * If the control is not present, null is returned.
           */

        }, {
          key: "valid",
          get: function get() {
            return this.control ? this.control.valid : null;
          }
          /**
           * @description
           * Reports whether the control is invalid, meaning that an error exists in the input value.
           * If the control is not present, null is returned.
           */

        }, {
          key: "invalid",
          get: function get() {
            return this.control ? this.control.invalid : null;
          }
          /**
           * @description
           * Reports whether a control is pending, meaning that that async validation is occurring and
           * errors are not yet available for the input value. If the control is not present, null is
           * returned.
           */

        }, {
          key: "pending",
          get: function get() {
            return this.control ? this.control.pending : null;
          }
          /**
           * @description
           * Reports whether the control is disabled, meaning that the control is disabled
           * in the UI and is exempt from validation checks and excluded from aggregate
           * values of ancestor controls. If the control is not present, null is returned.
           */

        }, {
          key: "disabled",
          get: function get() {
            return this.control ? this.control.disabled : null;
          }
          /**
           * @description
           * Reports whether the control is enabled, meaning that the control is included in ancestor
           * calculations of validity or value. If the control is not present, null is returned.
           */

        }, {
          key: "enabled",
          get: function get() {
            return this.control ? this.control.enabled : null;
          }
          /**
           * @description
           * Reports the control's validation errors. If the control is not present, null is returned.
           */

        }, {
          key: "errors",
          get: function get() {
            return this.control ? this.control.errors : null;
          }
          /**
           * @description
           * Reports whether the control is pristine, meaning that the user has not yet changed
           * the value in the UI. If the control is not present, null is returned.
           */

        }, {
          key: "pristine",
          get: function get() {
            return this.control ? this.control.pristine : null;
          }
          /**
           * @description
           * Reports whether the control is dirty, meaning that the user has changed
           * the value in the UI. If the control is not present, null is returned.
           */

        }, {
          key: "dirty",
          get: function get() {
            return this.control ? this.control.dirty : null;
          }
          /**
           * @description
           * Reports whether the control is touched, meaning that the user has triggered
           * a `blur` event on it. If the control is not present, null is returned.
           */

        }, {
          key: "touched",
          get: function get() {
            return this.control ? this.control.touched : null;
          }
          /**
           * @description
           * Reports the validation status of the control. Possible values include:
           * 'VALID', 'INVALID', 'DISABLED', and 'PENDING'.
           * If the control is not present, null is returned.
           */

        }, {
          key: "status",
          get: function get() {
            return this.control ? this.control.status : null;
          }
          /**
           * @description
           * Reports whether the control is untouched, meaning that the user has not yet triggered
           * a `blur` event on it. If the control is not present, null is returned.
           */

        }, {
          key: "untouched",
          get: function get() {
            return this.control ? this.control.untouched : null;
          }
          /**
           * @description
           * Returns a multicasting observable that emits a validation status whenever it is
           * calculated for the control. If the control is not present, null is returned.
           */

        }, {
          key: "statusChanges",
          get: function get() {
            return this.control ? this.control.statusChanges : null;
          }
          /**
           * @description
           * Returns a multicasting observable of value changes for the control that emits every time the
           * value of the control changes in the UI or programmatically.
           * If the control is not present, null is returned.
           */

        }, {
          key: "valueChanges",
          get: function get() {
            return this.control ? this.control.valueChanges : null;
          }
          /**
           * @description
           * Returns an array that represents the path from the top-level form to this control.
           * Each index is the string name of the control on that level.
           */

        }, {
          key: "path",
          get: function get() {
            return null;
          }
          /**
           * Sets synchronous validators for this directive.
           * @internal
           */

        }, {
          key: "_setValidators",
          value: function _setValidators(validators) {
            this._rawValidators = validators || [];
            this._composedValidatorFn = composeValidators(this._rawValidators);
          }
          /**
           * Sets asynchronous validators for this directive.
           * @internal
           */

        }, {
          key: "_setAsyncValidators",
          value: function _setAsyncValidators(validators) {
            this._rawAsyncValidators = validators || [];
            this._composedAsyncValidatorFn = composeAsyncValidators(this._rawAsyncValidators);
          }
          /**
           * @description
           * Synchronous validator function composed of all the synchronous validators registered with this
           * directive.
           */

        }, {
          key: "validator",
          get: function get() {
            return this._composedValidatorFn || null;
          }
          /**
           * @description
           * Asynchronous validator function composed of all the asynchronous validators registered with
           * this directive.
           */

        }, {
          key: "asyncValidator",
          get: function get() {
            return this._composedAsyncValidatorFn || null;
          }
          /**
           * Internal function to register callbacks that should be invoked
           * when directive instance is being destroyed.
           * @internal
           */

        }, {
          key: "_registerOnDestroy",
          value: function _registerOnDestroy(fn) {
            this._onDestroyCallbacks.push(fn);
          }
          /**
           * Internal function to invoke all registered "on destroy" callbacks.
           * Note: calling this function also clears the list of callbacks.
           * @internal
           */

        }, {
          key: "_invokeOnDestroyCallbacks",
          value: function _invokeOnDestroyCallbacks() {
            this._onDestroyCallbacks.forEach(function (fn) {
              return fn();
            });

            this._onDestroyCallbacks = [];
          }
          /**
           * @description
           * Resets the control with the provided value if the control is present.
           */

        }, {
          key: "reset",
          value: function reset() {
            var value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : undefined;
            if (this.control) this.control.reset(value);
          }
          /**
           * @description
           * Reports whether the control with the given path has the error specified.
           *
           * @param errorCode The code of the error to check
           * @param path A list of control names that designates how to move from the current control
           * to the control that should be queried for errors.
           *
           * @usageNotes
           * For example, for the following `FormGroup`:
           *
           * ```
           * form = new FormGroup({
           *   address: new FormGroup({ street: new FormControl() })
           * });
           * ```
           *
           * The path to the 'street' control from the root form would be 'address' -> 'street'.
           *
           * It can be provided to this method in one of two formats:
           *
           * 1. An array of string control names, e.g. `['address', 'street']`
           * 1. A period-delimited list of control names in one string, e.g. `'address.street'`
           *
           * If no path is given, this method checks for the error on the current control.
           *
           * @returns whether the given error is present in the control at the given path.
           *
           * If the control is not present, false is returned.
           */

        }, {
          key: "hasError",
          value: function hasError(errorCode, path) {
            return this.control ? this.control.hasError(errorCode, path) : false;
          }
          /**
           * @description
           * Reports error data for the control with the given path.
           *
           * @param errorCode The code of the error to check
           * @param path A list of control names that designates how to move from the current control
           * to the control that should be queried for errors.
           *
           * @usageNotes
           * For example, for the following `FormGroup`:
           *
           * ```
           * form = new FormGroup({
           *   address: new FormGroup({ street: new FormControl() })
           * });
           * ```
           *
           * The path to the 'street' control from the root form would be 'address' -> 'street'.
           *
           * It can be provided to this method in one of two formats:
           *
           * 1. An array of string control names, e.g. `['address', 'street']`
           * 1. A period-delimited list of control names in one string, e.g. `'address.street'`
           *
           * @returns error data for that particular error. If the control or error is not present,
           * null is returned.
           */

        }, {
          key: "getError",
          value: function getError(errorCode, path) {
            return this.control ? this.control.getError(errorCode, path) : null;
          }
        }]);

        return AbstractControlDirective;
      }();

      AbstractControlDirective.ɵfac = function AbstractControlDirective_Factory(t) {
        return new (t || AbstractControlDirective)();
      };

      AbstractControlDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
        type: AbstractControlDirective
      });
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /**
       * @description
       * A base class for directives that contain multiple registered instances of `NgControl`.
       * Only used by the forms module.
       *
       * @publicApi
       */

      var ControlContainer = /*#__PURE__*/function (_AbstractControlDirec) {
        _inherits(ControlContainer, _AbstractControlDirec);

        var _super = _createSuper(ControlContainer);

        function ControlContainer() {
          _classCallCheck(this, ControlContainer);

          return _super.apply(this, arguments);
        }

        _createClass(ControlContainer, [{
          key: "formDirective",
          get:
          /**
           * @description
           * The top-level form directive for the control.
           */
          function get() {
            return null;
          }
          /**
           * @description
           * The path to this group.
           */

        }, {
          key: "path",
          get: function get() {
            return null;
          }
        }]);

        return ControlContainer;
      }(AbstractControlDirective);

      ControlContainer.ɵfac = function ControlContainer_Factory(t) {
        return ɵControlContainer_BaseFactory(t || ControlContainer);
      };

      ControlContainer.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
        type: ControlContainer,
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]]
      });

      var ɵControlContainer_BaseFactory = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"](ControlContainer);
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /**
       * @description
       * A base class that all `FormControl`-based directives extend. It binds a `FormControl`
       * object to a DOM element.
       *
       * @publicApi
       */


      var NgControl = /*#__PURE__*/function (_AbstractControlDirec2) {
        _inherits(NgControl, _AbstractControlDirec2);

        var _super2 = _createSuper(NgControl);

        function NgControl() {
          var _this;

          _classCallCheck(this, NgControl);

          _this = _super2.apply(this, arguments);
          /**
           * @description
           * The parent form for the control.
           *
           * @internal
           */

          _this._parent = null;
          /**
           * @description
           * The name for the control
           */

          _this.name = null;
          /**
           * @description
           * The value accessor for the control
           */

          _this.valueAccessor = null;
          return _this;
        }

        return NgControl;
      }(AbstractControlDirective);
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */


      var AbstractControlStatus = /*#__PURE__*/function () {
        function AbstractControlStatus(cd) {
          _classCallCheck(this, AbstractControlStatus);

          this._cd = cd;
        }

        _createClass(AbstractControlStatus, [{
          key: "is",
          value: function is(status) {
            var _a, _b;

            return !!((_b = (_a = this._cd) === null || _a === void 0 ? void 0 : _a.control) === null || _b === void 0 ? void 0 : _b[status]);
          }
        }]);

        return AbstractControlStatus;
      }();

      var ngControlStatusHost = {
        '[class.ng-untouched]': 'is("untouched")',
        '[class.ng-touched]': 'is("touched")',
        '[class.ng-pristine]': 'is("pristine")',
        '[class.ng-dirty]': 'is("dirty")',
        '[class.ng-valid]': 'is("valid")',
        '[class.ng-invalid]': 'is("invalid")',
        '[class.ng-pending]': 'is("pending")'
      };
      /**
       * @description
       * Directive automatically applied to Angular form controls that sets CSS classes
       * based on control status.
       *
       * @usageNotes
       *
       * ### CSS classes applied
       *
       * The following classes are applied as the properties become true:
       *
       * * ng-valid
       * * ng-invalid
       * * ng-pending
       * * ng-pristine
       * * ng-dirty
       * * ng-untouched
       * * ng-touched
       *
       * @ngModule ReactiveFormsModule
       * @ngModule FormsModule
       * @publicApi
       */

      var NgControlStatus = /*#__PURE__*/function (_AbstractControlStatu) {
        _inherits(NgControlStatus, _AbstractControlStatu);

        var _super3 = _createSuper(NgControlStatus);

        function NgControlStatus(cd) {
          _classCallCheck(this, NgControlStatus);

          return _super3.call(this, cd);
        }

        return NgControlStatus;
      }(AbstractControlStatus);

      NgControlStatus.ɵfac = function NgControlStatus_Factory(t) {
        return new (t || NgControlStatus)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](NgControl, 2));
      };

      NgControlStatus.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
        type: NgControlStatus,
        selectors: [["", "formControlName", ""], ["", "ngModel", ""], ["", "formControl", ""]],
        hostVars: 14,
        hostBindings: function NgControlStatus_HostBindings(rf, ctx) {
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("ng-untouched", ctx.is("untouched"))("ng-touched", ctx.is("touched"))("ng-pristine", ctx.is("pristine"))("ng-dirty", ctx.is("dirty"))("ng-valid", ctx.is("valid"))("ng-invalid", ctx.is("invalid"))("ng-pending", ctx.is("pending"));
          }
        },
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]]
      });

      NgControlStatus.ctorParameters = function () {
        return [{
          type: NgControl,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Self"]
          }]
        }];
      };

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NgControlStatus, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
          args: [{
            selector: '[formControlName],[ngModel],[formControl]',
            host: ngControlStatusHost
          }]
        }], function () {
          return [{
            type: NgControl,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Self"]
            }]
          }];
        }, null);
      })();
      /**
       * @description
       * Directive automatically applied to Angular form groups that sets CSS classes
       * based on control status (valid/invalid/dirty/etc).
       *
       * @see `NgControlStatus`
       *
       * @ngModule ReactiveFormsModule
       * @ngModule FormsModule
       * @publicApi
       */


      var NgControlStatusGroup = /*#__PURE__*/function (_AbstractControlStatu2) {
        _inherits(NgControlStatusGroup, _AbstractControlStatu2);

        var _super4 = _createSuper(NgControlStatusGroup);

        function NgControlStatusGroup(cd) {
          _classCallCheck(this, NgControlStatusGroup);

          return _super4.call(this, cd);
        }

        return NgControlStatusGroup;
      }(AbstractControlStatus);

      NgControlStatusGroup.ɵfac = function NgControlStatusGroup_Factory(t) {
        return new (t || NgControlStatusGroup)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ControlContainer, 10));
      };

      NgControlStatusGroup.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
        type: NgControlStatusGroup,
        selectors: [["", "formGroupName", ""], ["", "formArrayName", ""], ["", "ngModelGroup", ""], ["", "formGroup", ""], ["form", 3, "ngNoForm", ""], ["", "ngForm", ""]],
        hostVars: 14,
        hostBindings: function NgControlStatusGroup_HostBindings(rf, ctx) {
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("ng-untouched", ctx.is("untouched"))("ng-touched", ctx.is("touched"))("ng-pristine", ctx.is("pristine"))("ng-dirty", ctx.is("dirty"))("ng-valid", ctx.is("valid"))("ng-invalid", ctx.is("invalid"))("ng-pending", ctx.is("pending"));
          }
        },
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]]
      });

      NgControlStatusGroup.ctorParameters = function () {
        return [{
          type: ControlContainer,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Self"]
          }]
        }];
      };

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NgControlStatusGroup, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
          args: [{
            selector: '[formGroupName],[formArrayName],[ngModelGroup],[formGroup],form:not([ngNoForm]),[ngForm]',
            host: ngControlStatusHost
          }]
        }], function () {
          return [{
            type: ControlContainer,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
            }, {
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Self"]
            }]
          }];
        }, null);
      })();
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */


      var NUMBER_VALUE_ACCESSOR = {
        provide: NG_VALUE_ACCESSOR,
        useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(function () {
          return NumberValueAccessor;
        }),
        multi: true
      };
      /**
       * @description
       * The `ControlValueAccessor` for writing a number value and listening to number input changes.
       * The value accessor is used by the `FormControlDirective`, `FormControlName`, and `NgModel`
       * directives.
       *
       * @usageNotes
       *
       * ### Using a number input with a reactive form.
       *
       * The following example shows how to use a number input with a reactive form.
       *
       * ```ts
       * const totalCountControl = new FormControl();
       * ```
       *
       * ```
       * <input type="number" [formControl]="totalCountControl">
       * ```
       *
       * @ngModule ReactiveFormsModule
       * @ngModule FormsModule
       * @publicApi
       */

      var NumberValueAccessor = /*#__PURE__*/function () {
        function NumberValueAccessor(_renderer, _elementRef) {
          _classCallCheck(this, NumberValueAccessor);

          this._renderer = _renderer;
          this._elementRef = _elementRef;
          /**
           * The registered callback function called when a change or input event occurs on the input
           * element.
           * @nodoc
           */

          this.onChange = function (_) {};
          /**
           * The registered callback function called when a blur event occurs on the input element.
           * @nodoc
           */


          this.onTouched = function () {};
        }
        /**
         * Sets the "value" property on the input element.
         * @nodoc
         */


        _createClass(NumberValueAccessor, [{
          key: "writeValue",
          value: function writeValue(value) {
            // The value needs to be normalized for IE9, otherwise it is set to 'null' when null
            var normalizedValue = value == null ? '' : value;

            this._renderer.setProperty(this._elementRef.nativeElement, 'value', normalizedValue);
          }
          /**
           * Registers a function called when the control value changes.
           * @nodoc
           */

        }, {
          key: "registerOnChange",
          value: function registerOnChange(fn) {
            this.onChange = function (value) {
              fn(value == '' ? null : parseFloat(value));
            };
          }
          /**
           * Registers a function called when the control is touched.
           * @nodoc
           */

        }, {
          key: "registerOnTouched",
          value: function registerOnTouched(fn) {
            this.onTouched = fn;
          }
          /**
           * Sets the "disabled" property on the input element.
           * @nodoc
           */

        }, {
          key: "setDisabledState",
          value: function setDisabledState(isDisabled) {
            this._renderer.setProperty(this._elementRef.nativeElement, 'disabled', isDisabled);
          }
        }]);

        return NumberValueAccessor;
      }();

      NumberValueAccessor.ɵfac = function NumberValueAccessor_Factory(t) {
        return new (t || NumberValueAccessor)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]));
      };

      NumberValueAccessor.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
        type: NumberValueAccessor,
        selectors: [["input", "type", "number", "formControlName", ""], ["input", "type", "number", "formControl", ""], ["input", "type", "number", "ngModel", ""]],
        hostBindings: function NumberValueAccessor_HostBindings(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("input", function NumberValueAccessor_input_HostBindingHandler($event) {
              return ctx.onChange($event.target.value);
            })("blur", function NumberValueAccessor_blur_HostBindingHandler() {
              return ctx.onTouched();
            });
          }
        },
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([NUMBER_VALUE_ACCESSOR])]
      });

      NumberValueAccessor.ctorParameters = function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
        }];
      };

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NumberValueAccessor, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
          args: [{
            selector: 'input[type=number][formControlName],input[type=number][formControl],input[type=number][ngModel]',
            host: {
              '(input)': 'onChange($event.target.value)',
              '(blur)': 'onTouched()'
            },
            providers: [NUMBER_VALUE_ACCESSOR]
          }]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
          }];
        }, null);
      })();
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */


      var RADIO_VALUE_ACCESSOR = {
        provide: NG_VALUE_ACCESSOR,
        useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(function () {
          return RadioControlValueAccessor;
        }),
        multi: true
      };

      function throwNameError() {
        throw new Error("\n      If you define both a name and a formControlName attribute on your radio button, their values\n      must match. Ex: <input type=\"radio\" formControlName=\"food\" name=\"food\">\n    ");
      }
      /**
       * @description
       * Class used by Angular to track radio buttons. For internal use only.
       */


      var RadioControlRegistry = /*#__PURE__*/function () {
        function RadioControlRegistry() {
          _classCallCheck(this, RadioControlRegistry);

          this._accessors = [];
        }
        /**
         * @description
         * Adds a control to the internal registry. For internal use only.
         */


        _createClass(RadioControlRegistry, [{
          key: "add",
          value: function add(control, accessor) {
            this._accessors.push([control, accessor]);
          }
          /**
           * @description
           * Removes a control from the internal registry. For internal use only.
           */

        }, {
          key: "remove",
          value: function remove(accessor) {
            for (var i = this._accessors.length - 1; i >= 0; --i) {
              if (this._accessors[i][1] === accessor) {
                this._accessors.splice(i, 1);

                return;
              }
            }
          }
          /**
           * @description
           * Selects a radio button. For internal use only.
           */

        }, {
          key: "select",
          value: function select(accessor) {
            var _this2 = this;

            this._accessors.forEach(function (c) {
              if (_this2._isSameGroup(c, accessor) && c[1] !== accessor) {
                c[1].fireUncheck(accessor.value);
              }
            });
          }
        }, {
          key: "_isSameGroup",
          value: function _isSameGroup(controlPair, accessor) {
            if (!controlPair[0].control) return false;
            return controlPair[0]._parent === accessor._control._parent && controlPair[1].name === accessor.name;
          }
        }]);

        return RadioControlRegistry;
      }();

      RadioControlRegistry.ɵfac = function RadioControlRegistry_Factory(t) {
        return new (t || RadioControlRegistry)();
      };

      RadioControlRegistry.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: RadioControlRegistry,
        factory: RadioControlRegistry.ɵfac
      });

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RadioControlRegistry, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
        }], function () {
          return [];
        }, null);
      })();
      /**
       * @description
       * The `ControlValueAccessor` for writing radio control values and listening to radio control
       * changes. The value accessor is used by the `FormControlDirective`, `FormControlName`, and
       * `NgModel` directives.
       *
       * @usageNotes
       *
       * ### Using radio buttons with reactive form directives
       *
       * The follow example shows how to use radio buttons in a reactive form. When using radio buttons in
       * a reactive form, radio buttons in the same group should have the same `formControlName`.
       * Providing a `name` attribute is optional.
       *
       * {@example forms/ts/reactiveRadioButtons/reactive_radio_button_example.ts region='Reactive'}
       *
       * @ngModule ReactiveFormsModule
       * @ngModule FormsModule
       * @publicApi
       */


      var RadioControlValueAccessor = /*#__PURE__*/function () {
        function RadioControlValueAccessor(_renderer, _elementRef, _registry, _injector) {
          _classCallCheck(this, RadioControlValueAccessor);

          this._renderer = _renderer;
          this._elementRef = _elementRef;
          this._registry = _registry;
          this._injector = _injector;
          /**
           * The registered callback function called when a change event occurs on the input element.
           * @nodoc
           */

          this.onChange = function () {};
          /**
           * The registered callback function called when a blur event occurs on the input element.
           * @nodoc
           */


          this.onTouched = function () {};
        }
        /** @nodoc */


        _createClass(RadioControlValueAccessor, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this._control = this._injector.get(NgControl);

            this._checkName();

            this._registry.add(this._control, this);
          }
          /** @nodoc */

        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this._registry.remove(this);
          }
          /**
           * Sets the "checked" property value on the radio input element.
           * @nodoc
           */

        }, {
          key: "writeValue",
          value: function writeValue(value) {
            this._state = value === this.value;

            this._renderer.setProperty(this._elementRef.nativeElement, 'checked', this._state);
          }
          /**
           * Registers a function called when the control value changes.
           * @nodoc
           */

        }, {
          key: "registerOnChange",
          value: function registerOnChange(fn) {
            var _this3 = this;

            this._fn = fn;

            this.onChange = function () {
              fn(_this3.value);

              _this3._registry.select(_this3);
            };
          }
          /**
           * Sets the "value" on the radio input element and unchecks it.
           *
           * @param value
           */

        }, {
          key: "fireUncheck",
          value: function fireUncheck(value) {
            this.writeValue(value);
          }
          /**
           * Registers a function called when the control is touched.
           * @nodoc
           */

        }, {
          key: "registerOnTouched",
          value: function registerOnTouched(fn) {
            this.onTouched = fn;
          }
          /**
           * Sets the "disabled" property on the input element.
           * @nodoc
           */

        }, {
          key: "setDisabledState",
          value: function setDisabledState(isDisabled) {
            this._renderer.setProperty(this._elementRef.nativeElement, 'disabled', isDisabled);
          }
        }, {
          key: "_checkName",
          value: function _checkName() {
            if (this.name && this.formControlName && this.name !== this.formControlName && (typeof ngDevMode === 'undefined' || ngDevMode)) {
              throwNameError();
            }

            if (!this.name && this.formControlName) this.name = this.formControlName;
          }
        }]);

        return RadioControlValueAccessor;
      }();

      RadioControlValueAccessor.ɵfac = function RadioControlValueAccessor_Factory(t) {
        return new (t || RadioControlValueAccessor)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](RadioControlRegistry), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"]));
      };

      RadioControlValueAccessor.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
        type: RadioControlValueAccessor,
        selectors: [["input", "type", "radio", "formControlName", ""], ["input", "type", "radio", "formControl", ""], ["input", "type", "radio", "ngModel", ""]],
        hostBindings: function RadioControlValueAccessor_HostBindings(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function RadioControlValueAccessor_change_HostBindingHandler() {
              return ctx.onChange();
            })("blur", function RadioControlValueAccessor_blur_HostBindingHandler() {
              return ctx.onTouched();
            });
          }
        },
        inputs: {
          name: "name",
          formControlName: "formControlName",
          value: "value"
        },
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([RADIO_VALUE_ACCESSOR])]
      });

      RadioControlValueAccessor.ctorParameters = function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
        }, {
          type: RadioControlRegistry
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"]
        }];
      };

      RadioControlValueAccessor.propDecorators = {
        name: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        formControlName: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        value: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      };

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RadioControlValueAccessor, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
          args: [{
            selector: 'input[type=radio][formControlName],input[type=radio][formControl],input[type=radio][ngModel]',
            host: {
              '(change)': 'onChange()',
              '(blur)': 'onTouched()'
            },
            providers: [RADIO_VALUE_ACCESSOR]
          }]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
          }, {
            type: RadioControlRegistry
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"]
          }];
        }, {
          name: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          formControlName: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          value: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }]
        });
      })();
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */


      var RANGE_VALUE_ACCESSOR = {
        provide: NG_VALUE_ACCESSOR,
        useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(function () {
          return RangeValueAccessor;
        }),
        multi: true
      };
      /**
       * @description
       * The `ControlValueAccessor` for writing a range value and listening to range input changes.
       * The value accessor is used by the `FormControlDirective`, `FormControlName`, and  `NgModel`
       * directives.
       *
       * @usageNotes
       *
       * ### Using a range input with a reactive form
       *
       * The following example shows how to use a range input with a reactive form.
       *
       * ```ts
       * const ageControl = new FormControl();
       * ```
       *
       * ```
       * <input type="range" [formControl]="ageControl">
       * ```
       *
       * @ngModule ReactiveFormsModule
       * @ngModule FormsModule
       * @publicApi
       */

      var RangeValueAccessor = /*#__PURE__*/function () {
        function RangeValueAccessor(_renderer, _elementRef) {
          _classCallCheck(this, RangeValueAccessor);

          this._renderer = _renderer;
          this._elementRef = _elementRef;
          /**
           * The registered callback function called when a change or input event occurs on the input
           * element.
           * @nodoc
           */

          this.onChange = function (_) {};
          /**
           * The registered callback function called when a blur event occurs on the input element.
           * @nodoc
           */


          this.onTouched = function () {};
        }
        /**
         * Sets the "value" property on the input element.
         * @nodoc
         */


        _createClass(RangeValueAccessor, [{
          key: "writeValue",
          value: function writeValue(value) {
            this._renderer.setProperty(this._elementRef.nativeElement, 'value', parseFloat(value));
          }
          /**
           * Registers a function called when the control value changes.
           * @nodoc
           */

        }, {
          key: "registerOnChange",
          value: function registerOnChange(fn) {
            this.onChange = function (value) {
              fn(value == '' ? null : parseFloat(value));
            };
          }
          /**
           * Registers a function called when the control is touched.
           * @nodoc
           */

        }, {
          key: "registerOnTouched",
          value: function registerOnTouched(fn) {
            this.onTouched = fn;
          }
          /**
           * Sets the "disabled" property on the range input element.
           * @nodoc
           */

        }, {
          key: "setDisabledState",
          value: function setDisabledState(isDisabled) {
            this._renderer.setProperty(this._elementRef.nativeElement, 'disabled', isDisabled);
          }
        }]);

        return RangeValueAccessor;
      }();

      RangeValueAccessor.ɵfac = function RangeValueAccessor_Factory(t) {
        return new (t || RangeValueAccessor)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]));
      };

      RangeValueAccessor.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
        type: RangeValueAccessor,
        selectors: [["input", "type", "range", "formControlName", ""], ["input", "type", "range", "formControl", ""], ["input", "type", "range", "ngModel", ""]],
        hostBindings: function RangeValueAccessor_HostBindings(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function RangeValueAccessor_change_HostBindingHandler($event) {
              return ctx.onChange($event.target.value);
            })("input", function RangeValueAccessor_input_HostBindingHandler($event) {
              return ctx.onChange($event.target.value);
            })("blur", function RangeValueAccessor_blur_HostBindingHandler() {
              return ctx.onTouched();
            });
          }
        },
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([RANGE_VALUE_ACCESSOR])]
      });

      RangeValueAccessor.ctorParameters = function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
        }];
      };

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RangeValueAccessor, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
          args: [{
            selector: 'input[type=range][formControlName],input[type=range][formControl],input[type=range][ngModel]',
            host: {
              '(change)': 'onChange($event.target.value)',
              '(input)': 'onChange($event.target.value)',
              '(blur)': 'onTouched()'
            },
            providers: [RANGE_VALUE_ACCESSOR]
          }]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
          }];
        }, null);
      })();
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */


      var FormErrorExamples = {
        formControlName: "\n    <div [formGroup]=\"myGroup\">\n      <input formControlName=\"firstName\">\n    </div>\n\n    In your class:\n\n    this.myGroup = new FormGroup({\n       firstName: new FormControl()\n    });",
        formGroupName: "\n    <div [formGroup]=\"myGroup\">\n       <div formGroupName=\"person\">\n          <input formControlName=\"firstName\">\n       </div>\n    </div>\n\n    In your class:\n\n    this.myGroup = new FormGroup({\n       person: new FormGroup({ firstName: new FormControl() })\n    });",
        formArrayName: "\n    <div [formGroup]=\"myGroup\">\n      <div formArrayName=\"cities\">\n        <div *ngFor=\"let city of cityArray.controls; index as i\">\n          <input [formControlName]=\"i\">\n        </div>\n      </div>\n    </div>\n\n    In your class:\n\n    this.cityArray = new FormArray([new FormControl('SF')]);\n    this.myGroup = new FormGroup({\n      cities: this.cityArray\n    });",
        ngModelGroup: "\n    <form>\n       <div ngModelGroup=\"person\">\n          <input [(ngModel)]=\"person.name\" name=\"firstName\">\n       </div>\n    </form>",
        ngModelWithFormGroup: "\n    <div [formGroup]=\"myGroup\">\n       <input formControlName=\"firstName\">\n       <input [(ngModel)]=\"showMoreControls\" [ngModelOptions]=\"{standalone: true}\">\n    </div>\n  "
      };
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      var ReactiveErrors = /*#__PURE__*/function () {
        function ReactiveErrors() {
          _classCallCheck(this, ReactiveErrors);
        }

        _createClass(ReactiveErrors, null, [{
          key: "controlParentException",
          value: function controlParentException() {
            throw new Error("formControlName must be used with a parent formGroup directive.  You'll want to add a formGroup\n       directive and pass it an existing FormGroup instance (you can create one in your class).\n\n      Example:\n\n      ".concat(FormErrorExamples.formControlName));
          }
        }, {
          key: "ngModelGroupException",
          value: function ngModelGroupException() {
            throw new Error("formControlName cannot be used with an ngModelGroup parent. It is only compatible with parents\n       that also have a \"form\" prefix: formGroupName, formArrayName, or formGroup.\n\n       Option 1:  Update the parent to be formGroupName (reactive form strategy)\n\n        ".concat(FormErrorExamples.formGroupName, "\n\n        Option 2: Use ngModel instead of formControlName (template-driven strategy)\n\n        ").concat(FormErrorExamples.ngModelGroup));
          }
        }, {
          key: "missingFormException",
          value: function missingFormException() {
            throw new Error("formGroup expects a FormGroup instance. Please pass one in.\n\n       Example:\n\n       ".concat(FormErrorExamples.formControlName));
          }
        }, {
          key: "groupParentException",
          value: function groupParentException() {
            throw new Error("formGroupName must be used with a parent formGroup directive.  You'll want to add a formGroup\n      directive and pass it an existing FormGroup instance (you can create one in your class).\n\n      Example:\n\n      ".concat(FormErrorExamples.formGroupName));
          }
        }, {
          key: "arrayParentException",
          value: function arrayParentException() {
            throw new Error("formArrayName must be used with a parent formGroup directive.  You'll want to add a formGroup\n       directive and pass it an existing FormGroup instance (you can create one in your class).\n\n        Example:\n\n        ".concat(FormErrorExamples.formArrayName));
          }
        }, {
          key: "disabledAttrWarning",
          value: function disabledAttrWarning() {
            console.warn("\n      It looks like you're using the disabled attribute with a reactive form directive. If you set disabled to true\n      when you set up this control in your component class, the disabled attribute will actually be set in the DOM for\n      you. We recommend using this approach to avoid 'changed after checked' errors.\n\n      Example:\n      form = new FormGroup({\n        first: new FormControl({value: 'Nancy', disabled: true}, Validators.required),\n        last: new FormControl('Drew', Validators.required)\n      });\n    ");
          }
        }, {
          key: "ngModelWarning",
          value: function ngModelWarning(directiveName) {
            console.warn("\n    It looks like you're using ngModel on the same form field as ".concat(directiveName, ".\n    Support for using the ngModel input property and ngModelChange event with\n    reactive form directives has been deprecated in Angular v6 and will be removed\n    in a future version of Angular.\n\n    For more information on this, see our API docs here:\n    https://angular.io/api/forms/").concat(directiveName === 'formControl' ? 'FormControlDirective' : 'FormControlName', "#use-with-ngmodel\n    "));
          }
        }]);

        return ReactiveErrors;
      }();
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */


      var SELECT_VALUE_ACCESSOR = {
        provide: NG_VALUE_ACCESSOR,
        useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(function () {
          return SelectControlValueAccessor;
        }),
        multi: true
      };

      function _buildValueString(id, value) {
        if (id == null) return "".concat(value);
        if (value && typeof value === 'object') value = 'Object';
        return "".concat(id, ": ").concat(value).slice(0, 50);
      }

      function _extractId(valueString) {
        return valueString.split(':')[0];
      }
      /**
       * @description
       * The `ControlValueAccessor` for writing select control values and listening to select control
       * changes. The value accessor is used by the `FormControlDirective`, `FormControlName`, and
       * `NgModel` directives.
       *
       * @usageNotes
       *
       * ### Using select controls in a reactive form
       *
       * The following examples show how to use a select control in a reactive form.
       *
       * {@example forms/ts/reactiveSelectControl/reactive_select_control_example.ts region='Component'}
       *
       * ### Using select controls in a template-driven form
       *
       * To use a select in a template-driven form, simply add an `ngModel` and a `name`
       * attribute to the main `<select>` tag.
       *
       * {@example forms/ts/selectControl/select_control_example.ts region='Component'}
       *
       * ### Customizing option selection
       *
       * Angular uses object identity to select option. It's possible for the identities of items
       * to change while the data does not. This can happen, for example, if the items are produced
       * from an RPC to the server, and that RPC is re-run. Even if the data hasn't changed, the
       * second response will produce objects with different identities.
       *
       * To customize the default option comparison algorithm, `<select>` supports `compareWith` input.
       * `compareWith` takes a **function** which has two arguments: `option1` and `option2`.
       * If `compareWith` is given, Angular selects option by the return value of the function.
       *
       * ```ts
       * const selectedCountriesControl = new FormControl();
       * ```
       *
       * ```
       * <select [compareWith]="compareFn"  [formControl]="selectedCountriesControl">
       *     <option *ngFor="let country of countries" [ngValue]="country">
       *         {{country.name}}
       *     </option>
       * </select>
       *
       * compareFn(c1: Country, c2: Country): boolean {
       *     return c1 && c2 ? c1.id === c2.id : c1 === c2;
       * }
       * ```
       *
       * **Note:** We listen to the 'change' event because 'input' events aren't fired
       * for selects in Firefox and IE:
       * https://bugzilla.mozilla.org/show_bug.cgi?id=1024350
       * https://developer.microsoft.com/en-us/microsoft-edge/platform/issues/4660045/
       *
       * @ngModule ReactiveFormsModule
       * @ngModule FormsModule
       * @publicApi
       */


      var SelectControlValueAccessor = /*#__PURE__*/function () {
        function SelectControlValueAccessor(_renderer, _elementRef) {
          _classCallCheck(this, SelectControlValueAccessor);

          this._renderer = _renderer;
          this._elementRef = _elementRef;
          /** @internal */

          this._optionMap = new Map();
          /** @internal */

          this._idCounter = 0;
          /**
           * The registered callback function called when a change event occurs on the input element.
           * @nodoc
           */

          this.onChange = function (_) {};
          /**
           * The registered callback function called when a blur event occurs on the input element.
           * @nodoc
           */


          this.onTouched = function () {};

          this._compareWith = Object.is;
        }
        /**
         * @description
         * Tracks the option comparison algorithm for tracking identities when
         * checking for changes.
         */


        _createClass(SelectControlValueAccessor, [{
          key: "compareWith",
          set: function set(fn) {
            if (typeof fn !== 'function' && (typeof ngDevMode === 'undefined' || ngDevMode)) {
              throw new Error("compareWith must be a function, but received ".concat(JSON.stringify(fn)));
            }

            this._compareWith = fn;
          }
          /**
           * Sets the "value" property on the input element. The "selectedIndex"
           * property is also set if an ID is provided on the option element.
           * @nodoc
           */

        }, {
          key: "writeValue",
          value: function writeValue(value) {
            this.value = value;

            var id = this._getOptionId(value);

            if (id == null) {
              this._renderer.setProperty(this._elementRef.nativeElement, 'selectedIndex', -1);
            }

            var valueString = _buildValueString(id, value);

            this._renderer.setProperty(this._elementRef.nativeElement, 'value', valueString);
          }
          /**
           * Registers a function called when the control value changes.
           * @nodoc
           */

        }, {
          key: "registerOnChange",
          value: function registerOnChange(fn) {
            var _this4 = this;

            this.onChange = function (valueString) {
              _this4.value = _this4._getOptionValue(valueString);
              fn(_this4.value);
            };
          }
          /**
           * Registers a function called when the control is touched.
           * @nodoc
           */

        }, {
          key: "registerOnTouched",
          value: function registerOnTouched(fn) {
            this.onTouched = fn;
          }
          /**
           * Sets the "disabled" property on the select input element.
           * @nodoc
           */

        }, {
          key: "setDisabledState",
          value: function setDisabledState(isDisabled) {
            this._renderer.setProperty(this._elementRef.nativeElement, 'disabled', isDisabled);
          }
          /** @internal */

        }, {
          key: "_registerOption",
          value: function _registerOption() {
            return (this._idCounter++).toString();
          }
          /** @internal */

        }, {
          key: "_getOptionId",
          value: function _getOptionId(value) {
            for (var _i = 0, _Array$from = Array.from(this._optionMap.keys()); _i < _Array$from.length; _i++) {
              var id = _Array$from[_i];
              if (this._compareWith(this._optionMap.get(id), value)) return id;
            }

            return null;
          }
          /** @internal */

        }, {
          key: "_getOptionValue",
          value: function _getOptionValue(valueString) {
            var id = _extractId(valueString);

            return this._optionMap.has(id) ? this._optionMap.get(id) : valueString;
          }
        }]);

        return SelectControlValueAccessor;
      }();

      SelectControlValueAccessor.ɵfac = function SelectControlValueAccessor_Factory(t) {
        return new (t || SelectControlValueAccessor)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]));
      };

      SelectControlValueAccessor.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
        type: SelectControlValueAccessor,
        selectors: [["select", "formControlName", "", 3, "multiple", ""], ["select", "formControl", "", 3, "multiple", ""], ["select", "ngModel", "", 3, "multiple", ""]],
        hostBindings: function SelectControlValueAccessor_HostBindings(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function SelectControlValueAccessor_change_HostBindingHandler($event) {
              return ctx.onChange($event.target.value);
            })("blur", function SelectControlValueAccessor_blur_HostBindingHandler() {
              return ctx.onTouched();
            });
          }
        },
        inputs: {
          compareWith: "compareWith"
        },
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([SELECT_VALUE_ACCESSOR])]
      });

      SelectControlValueAccessor.ctorParameters = function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
        }];
      };

      SelectControlValueAccessor.propDecorators = {
        compareWith: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      };

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SelectControlValueAccessor, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
          args: [{
            selector: 'select:not([multiple])[formControlName],select:not([multiple])[formControl],select:not([multiple])[ngModel]',
            host: {
              '(change)': 'onChange($event.target.value)',
              '(blur)': 'onTouched()'
            },
            providers: [SELECT_VALUE_ACCESSOR]
          }]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
          }];
        }, {
          compareWith: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }]
        });
      })();
      /**
       * @description
       * Marks `<option>` as dynamic, so Angular can be notified when options change.
       *
       * @see `SelectControlValueAccessor`
       *
       * @ngModule ReactiveFormsModule
       * @ngModule FormsModule
       * @publicApi
       */


      var NgSelectOption = /*#__PURE__*/function () {
        function NgSelectOption(_element, _renderer, _select) {
          _classCallCheck(this, NgSelectOption);

          this._element = _element;
          this._renderer = _renderer;
          this._select = _select;
          if (this._select) this.id = this._select._registerOption();
        }
        /**
         * @description
         * Tracks the value bound to the option element. Unlike the value binding,
         * ngValue supports binding to objects.
         */


        _createClass(NgSelectOption, [{
          key: "ngValue",
          set: function set(value) {
            if (this._select == null) return;

            this._select._optionMap.set(this.id, value);

            this._setElementValue(_buildValueString(this.id, value));

            this._select.writeValue(this._select.value);
          }
          /**
           * @description
           * Tracks simple string values bound to the option element.
           * For objects, use the `ngValue` input binding.
           */

        }, {
          key: "value",
          set: function set(value) {
            this._setElementValue(value);

            if (this._select) this._select.writeValue(this._select.value);
          }
          /** @internal */

        }, {
          key: "_setElementValue",
          value: function _setElementValue(value) {
            this._renderer.setProperty(this._element.nativeElement, 'value', value);
          }
          /** @nodoc */

        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            if (this._select) {
              this._select._optionMap["delete"](this.id);

              this._select.writeValue(this._select.value);
            }
          }
        }]);

        return NgSelectOption;
      }();

      NgSelectOption.ɵfac = function NgSelectOption_Factory(t) {
        return new (t || NgSelectOption)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](SelectControlValueAccessor, 9));
      };

      NgSelectOption.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
        type: NgSelectOption,
        selectors: [["option"]],
        inputs: {
          ngValue: "ngValue",
          value: "value"
        }
      });

      NgSelectOption.ctorParameters = function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]
        }, {
          type: SelectControlValueAccessor,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Host"]
          }]
        }];
      };

      NgSelectOption.propDecorators = {
        ngValue: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
          args: ['ngValue']
        }],
        value: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
          args: ['value']
        }]
      };

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NgSelectOption, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
          args: [{
            selector: 'option'
          }]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]
          }, {
            type: SelectControlValueAccessor,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
            }, {
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Host"]
            }]
          }];
        }, {
          ngValue: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['ngValue']
          }],
          value: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['value']
          }]
        });
      })();
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */


      var SELECT_MULTIPLE_VALUE_ACCESSOR = {
        provide: NG_VALUE_ACCESSOR,
        useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(function () {
          return SelectMultipleControlValueAccessor;
        }),
        multi: true
      };

      function _buildValueString$1(id, value) {
        if (id == null) return "".concat(value);
        if (typeof value === 'string') value = "'".concat(value, "'");
        if (value && typeof value === 'object') value = 'Object';
        return "".concat(id, ": ").concat(value).slice(0, 50);
      }

      function _extractId$1(valueString) {
        return valueString.split(':')[0];
      }
      /** Mock interface for HTMLCollection */


      var HTMLCollection = function HTMLCollection() {
        _classCallCheck(this, HTMLCollection);
      };
      /**
       * @description
       * The `ControlValueAccessor` for writing multi-select control values and listening to multi-select
       * control changes. The value accessor is used by the `FormControlDirective`, `FormControlName`, and
       * `NgModel` directives.
       *
       * @see `SelectControlValueAccessor`
       *
       * @usageNotes
       *
       * ### Using a multi-select control
       *
       * The follow example shows you how to use a multi-select control with a reactive form.
       *
       * ```ts
       * const countryControl = new FormControl();
       * ```
       *
       * ```
       * <select multiple name="countries" [formControl]="countryControl">
       *   <option *ngFor="let country of countries" [ngValue]="country">
       *     {{ country.name }}
       *   </option>
       * </select>
       * ```
       *
       * ### Customizing option selection
       *
       * To customize the default option comparison algorithm, `<select>` supports `compareWith` input.
       * See the `SelectControlValueAccessor` for usage.
       *
       * @ngModule ReactiveFormsModule
       * @ngModule FormsModule
       * @publicApi
       */


      var SelectMultipleControlValueAccessor = /*#__PURE__*/function () {
        function SelectMultipleControlValueAccessor(_renderer, _elementRef) {
          _classCallCheck(this, SelectMultipleControlValueAccessor);

          this._renderer = _renderer;
          this._elementRef = _elementRef;
          /** @internal */

          this._optionMap = new Map();
          /** @internal */

          this._idCounter = 0;
          /**
           * The registered callback function called when a change event occurs on the input element.
           * @nodoc
           */

          this.onChange = function (_) {};
          /**
           * The registered callback function called when a blur event occurs on the input element.
           * @nodoc
           */


          this.onTouched = function () {};

          this._compareWith = Object.is;
        }
        /**
         * @description
         * Tracks the option comparison algorithm for tracking identities when
         * checking for changes.
         */


        _createClass(SelectMultipleControlValueAccessor, [{
          key: "compareWith",
          set: function set(fn) {
            if (typeof fn !== 'function' && (typeof ngDevMode === 'undefined' || ngDevMode)) {
              throw new Error("compareWith must be a function, but received ".concat(JSON.stringify(fn)));
            }

            this._compareWith = fn;
          }
          /**
           * Sets the "value" property on one or of more of the select's options.
           * @nodoc
           */

        }, {
          key: "writeValue",
          value: function writeValue(value) {
            var _this5 = this;

            this.value = value;
            var optionSelectedStateSetter;

            if (Array.isArray(value)) {
              // convert values to ids
              var ids = value.map(function (v) {
                return _this5._getOptionId(v);
              });

              optionSelectedStateSetter = function optionSelectedStateSetter(opt, o) {
                opt._setSelected(ids.indexOf(o.toString()) > -1);
              };
            } else {
              optionSelectedStateSetter = function optionSelectedStateSetter(opt, o) {
                opt._setSelected(false);
              };
            }

            this._optionMap.forEach(optionSelectedStateSetter);
          }
          /**
           * Registers a function called when the control value changes
           * and writes an array of the selected options.
           * @nodoc
           */

        }, {
          key: "registerOnChange",
          value: function registerOnChange(fn) {
            var _this6 = this;

            this.onChange = function (_) {
              var selected = [];

              if (_.selectedOptions !== undefined) {
                var options = _.selectedOptions;

                for (var i = 0; i < options.length; i++) {
                  var opt = options.item(i);

                  var val = _this6._getOptionValue(opt.value);

                  selected.push(val);
                }
              } // Degrade on IE
              else {
                  var _options = _.options;

                  for (var _i2 = 0; _i2 < _options.length; _i2++) {
                    var _opt = _options.item(_i2);

                    if (_opt.selected) {
                      var _val = _this6._getOptionValue(_opt.value);

                      selected.push(_val);
                    }
                  }
                }

              _this6.value = selected;
              fn(selected);
            };
          }
          /**
           * Registers a function called when the control is touched.
           * @nodoc
           */

        }, {
          key: "registerOnTouched",
          value: function registerOnTouched(fn) {
            this.onTouched = fn;
          }
          /**
           * Sets the "disabled" property on the select input element.
           * @nodoc
           */

        }, {
          key: "setDisabledState",
          value: function setDisabledState(isDisabled) {
            this._renderer.setProperty(this._elementRef.nativeElement, 'disabled', isDisabled);
          }
          /** @internal */

        }, {
          key: "_registerOption",
          value: function _registerOption(value) {
            var id = (this._idCounter++).toString();

            this._optionMap.set(id, value);

            return id;
          }
          /** @internal */

        }, {
          key: "_getOptionId",
          value: function _getOptionId(value) {
            for (var _i3 = 0, _Array$from2 = Array.from(this._optionMap.keys()); _i3 < _Array$from2.length; _i3++) {
              var id = _Array$from2[_i3];
              if (this._compareWith(this._optionMap.get(id)._value, value)) return id;
            }

            return null;
          }
          /** @internal */

        }, {
          key: "_getOptionValue",
          value: function _getOptionValue(valueString) {
            var id = _extractId$1(valueString);

            return this._optionMap.has(id) ? this._optionMap.get(id)._value : valueString;
          }
        }]);

        return SelectMultipleControlValueAccessor;
      }();

      SelectMultipleControlValueAccessor.ɵfac = function SelectMultipleControlValueAccessor_Factory(t) {
        return new (t || SelectMultipleControlValueAccessor)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]));
      };

      SelectMultipleControlValueAccessor.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
        type: SelectMultipleControlValueAccessor,
        selectors: [["select", "multiple", "", "formControlName", ""], ["select", "multiple", "", "formControl", ""], ["select", "multiple", "", "ngModel", ""]],
        hostBindings: function SelectMultipleControlValueAccessor_HostBindings(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function SelectMultipleControlValueAccessor_change_HostBindingHandler($event) {
              return ctx.onChange($event.target);
            })("blur", function SelectMultipleControlValueAccessor_blur_HostBindingHandler() {
              return ctx.onTouched();
            });
          }
        },
        inputs: {
          compareWith: "compareWith"
        },
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([SELECT_MULTIPLE_VALUE_ACCESSOR])]
      });

      SelectMultipleControlValueAccessor.ctorParameters = function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
        }];
      };

      SelectMultipleControlValueAccessor.propDecorators = {
        compareWith: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      };

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SelectMultipleControlValueAccessor, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
          args: [{
            selector: 'select[multiple][formControlName],select[multiple][formControl],select[multiple][ngModel]',
            host: {
              '(change)': 'onChange($event.target)',
              '(blur)': 'onTouched()'
            },
            providers: [SELECT_MULTIPLE_VALUE_ACCESSOR]
          }]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
          }];
        }, {
          compareWith: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }]
        });
      })();
      /**
       * @description
       * Marks `<option>` as dynamic, so Angular can be notified when options change.
       *
       * @see `SelectMultipleControlValueAccessor`
       *
       * @ngModule ReactiveFormsModule
       * @ngModule FormsModule
       * @publicApi
       */


      var ɵNgSelectMultipleOption = /*#__PURE__*/function () {
        function ɵNgSelectMultipleOption(_element, _renderer, _select) {
          _classCallCheck(this, ɵNgSelectMultipleOption);

          this._element = _element;
          this._renderer = _renderer;
          this._select = _select;

          if (this._select) {
            this.id = this._select._registerOption(this);
          }
        }
        /**
         * @description
         * Tracks the value bound to the option element. Unlike the value binding,
         * ngValue supports binding to objects.
         */


        _createClass(ɵNgSelectMultipleOption, [{
          key: "ngValue",
          set: function set(value) {
            if (this._select == null) return;
            this._value = value;

            this._setElementValue(_buildValueString$1(this.id, value));

            this._select.writeValue(this._select.value);
          }
          /**
           * @description
           * Tracks simple string values bound to the option element.
           * For objects, use the `ngValue` input binding.
           */

        }, {
          key: "value",
          set: function set(value) {
            if (this._select) {
              this._value = value;

              this._setElementValue(_buildValueString$1(this.id, value));

              this._select.writeValue(this._select.value);
            } else {
              this._setElementValue(value);
            }
          }
          /** @internal */

        }, {
          key: "_setElementValue",
          value: function _setElementValue(value) {
            this._renderer.setProperty(this._element.nativeElement, 'value', value);
          }
          /** @internal */

        }, {
          key: "_setSelected",
          value: function _setSelected(selected) {
            this._renderer.setProperty(this._element.nativeElement, 'selected', selected);
          }
          /** @nodoc */

        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            if (this._select) {
              this._select._optionMap["delete"](this.id);

              this._select.writeValue(this._select.value);
            }
          }
        }]);

        return ɵNgSelectMultipleOption;
      }();

      ɵNgSelectMultipleOption.ɵfac = function ɵNgSelectMultipleOption_Factory(t) {
        return new (t || ɵNgSelectMultipleOption)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](SelectMultipleControlValueAccessor, 9));
      };

      ɵNgSelectMultipleOption.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
        type: ɵNgSelectMultipleOption,
        selectors: [["option"]],
        inputs: {
          ngValue: "ngValue",
          value: "value"
        }
      });

      ɵNgSelectMultipleOption.ctorParameters = function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]
        }, {
          type: SelectMultipleControlValueAccessor,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Host"]
          }]
        }];
      };

      ɵNgSelectMultipleOption.propDecorators = {
        ngValue: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
          args: ['ngValue']
        }],
        value: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
          args: ['value']
        }]
      };

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ɵNgSelectMultipleOption, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
          args: [{
            selector: 'option'
          }]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]
          }, {
            type: SelectMultipleControlValueAccessor,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
            }, {
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Host"]
            }]
          }];
        }, {
          ngValue: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['ngValue']
          }],
          value: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['value']
          }]
        });
      })();
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */


      function controlPath(name, parent) {
        return [].concat(_toConsumableArray(parent.path), [name]);
      }
      /**
       * Links a Form control and a Form directive by setting up callbacks (such as `onChange`) on both
       * instances. This function is typically invoked when form directive is being initialized.
       *
       * @param control Form control instance that should be linked.
       * @param dir Directive that should be linked with a given control.
       */


      function setUpControl(control, dir) {
        if (typeof ngDevMode === 'undefined' || ngDevMode) {
          if (!control) _throwError(dir, 'Cannot find control with');
          if (!dir.valueAccessor) _throwError(dir, 'No value accessor for form control with');
        }

        setUpValidators(control, dir,
        /* handleOnValidatorChange */
        true);
        dir.valueAccessor.writeValue(control.value);
        setUpViewChangePipeline(control, dir);
        setUpModelChangePipeline(control, dir);
        setUpBlurPipeline(control, dir);
        setUpDisabledChangeHandler(control, dir);
      }
      /**
       * Reverts configuration performed by the `setUpControl` control function.
       * Effectively disconnects form control with a given form directive.
       * This function is typically invoked when corresponding form directive is being destroyed.
       *
       * @param control Form control which should be cleaned up.
       * @param dir Directive that should be disconnected from a given control.
       * @param validateControlPresenceOnChange Flag that indicates whether onChange handler should
       *     contain asserts to verify that it's not called once directive is destroyed. We need this flag
       *     to avoid potentially breaking changes caused by better control cleanup introduced in #39235.
       */


      function cleanUpControl(control, dir) {
        var validateControlPresenceOnChange = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;

        var noop = function noop() {
          if (validateControlPresenceOnChange && (typeof ngDevMode === 'undefined' || ngDevMode)) {
            _noControlError(dir);
          }
        }; // The `valueAccessor` field is typically defined on FromControl and FormControlName directive
        // instances and there is a logic in `selectValueAccessor` function that throws if it's not the
        // case. We still check the presence of `valueAccessor` before invoking its methods to make sure
        // that cleanup works correctly if app code or tests are setup to ignore the error thrown from
        // `selectValueAccessor`. See https://github.com/angular/angular/issues/40521.


        if (dir.valueAccessor) {
          dir.valueAccessor.registerOnChange(noop);
          dir.valueAccessor.registerOnTouched(noop);
        }

        cleanUpValidators(control, dir,
        /* handleOnValidatorChange */
        true);

        if (control) {
          dir._invokeOnDestroyCallbacks();

          control._registerOnCollectionChange(function () {});
        }
      }

      function registerOnValidatorChange(validators, onChange) {
        validators.forEach(function (validator) {
          if (validator.registerOnValidatorChange) validator.registerOnValidatorChange(onChange);
        });
      }
      /**
       * Sets up disabled change handler function on a given form control if ControlValueAccessor
       * associated with a given directive instance supports the `setDisabledState` call.
       *
       * @param control Form control where disabled change handler should be setup.
       * @param dir Corresponding directive instance associated with this control.
       */


      function setUpDisabledChangeHandler(control, dir) {
        if (dir.valueAccessor.setDisabledState) {
          var onDisabledChange = function onDisabledChange(isDisabled) {
            dir.valueAccessor.setDisabledState(isDisabled);
          };

          control.registerOnDisabledChange(onDisabledChange); // Register a callback function to cleanup disabled change handler
          // from a control instance when a directive is destroyed.

          dir._registerOnDestroy(function () {
            control._unregisterOnDisabledChange(onDisabledChange);
          });
        }
      }
      /**
       * Sets up sync and async directive validators on provided form control.
       * This function merges validators from the directive into the validators of the control.
       *
       * @param control Form control where directive validators should be setup.
       * @param dir Directive instance that contains validators to be setup.
       * @param handleOnValidatorChange Flag that determines whether directive validators should be setup
       *     to handle validator input change.
       */


      function setUpValidators(control, dir, handleOnValidatorChange) {
        var validators = getControlValidators(control);

        if (dir.validator !== null) {
          control.setValidators(mergeValidators(validators, dir.validator));
        } else if (typeof validators === 'function') {
          // If sync validators are represented by a single validator function, we force the
          // `Validators.compose` call to happen by executing the `setValidators` function with
          // an array that contains that function. We need this to avoid possible discrepancies in
          // validators behavior, so sync validators are always processed by the `Validators.compose`.
          // Note: we should consider moving this logic inside the `setValidators` function itself, so we
          // have consistent behavior on AbstractControl API level. The same applies to the async
          // validators logic below.
          control.setValidators([validators]);
        }

        var asyncValidators = getControlAsyncValidators(control);

        if (dir.asyncValidator !== null) {
          control.setAsyncValidators(mergeValidators(asyncValidators, dir.asyncValidator));
        } else if (typeof asyncValidators === 'function') {
          control.setAsyncValidators([asyncValidators]);
        } // Re-run validation when validator binding changes, e.g. minlength=3 -> minlength=4


        if (handleOnValidatorChange) {
          var onValidatorChange = function onValidatorChange() {
            return control.updateValueAndValidity();
          };

          registerOnValidatorChange(dir._rawValidators, onValidatorChange);
          registerOnValidatorChange(dir._rawAsyncValidators, onValidatorChange);
        }
      }
      /**
       * Cleans up sync and async directive validators on provided form control.
       * This function reverts the setup performed by the `setUpValidators` function, i.e.
       * removes directive-specific validators from a given control instance.
       *
       * @param control Form control from where directive validators should be removed.
       * @param dir Directive instance that contains validators to be removed.
       * @param handleOnValidatorChange Flag that determines whether directive validators should also be
       *     cleaned up to stop handling validator input change (if previously configured to do so).
       * @returns true if a control was updated as a result of this action.
       */


      function cleanUpValidators(control, dir, handleOnValidatorChange) {
        var isControlUpdated = false;

        if (control !== null) {
          if (dir.validator !== null) {
            var validators = getControlValidators(control);

            if (Array.isArray(validators) && validators.length > 0) {
              // Filter out directive validator function.
              var updatedValidators = validators.filter(function (validator) {
                return validator !== dir.validator;
              });

              if (updatedValidators.length !== validators.length) {
                isControlUpdated = true;
                control.setValidators(updatedValidators);
              }
            }
          }

          if (dir.asyncValidator !== null) {
            var asyncValidators = getControlAsyncValidators(control);

            if (Array.isArray(asyncValidators) && asyncValidators.length > 0) {
              // Filter out directive async validator function.
              var updatedAsyncValidators = asyncValidators.filter(function (asyncValidator) {
                return asyncValidator !== dir.asyncValidator;
              });

              if (updatedAsyncValidators.length !== asyncValidators.length) {
                isControlUpdated = true;
                control.setAsyncValidators(updatedAsyncValidators);
              }
            }
          }
        }

        if (handleOnValidatorChange) {
          // Clear onValidatorChange callbacks by providing a noop function.
          var noop = function noop() {};

          registerOnValidatorChange(dir._rawValidators, noop);
          registerOnValidatorChange(dir._rawAsyncValidators, noop);
        }

        return isControlUpdated;
      }

      function setUpViewChangePipeline(control, dir) {
        dir.valueAccessor.registerOnChange(function (newValue) {
          control._pendingValue = newValue;
          control._pendingChange = true;
          control._pendingDirty = true;
          if (control.updateOn === 'change') updateControl(control, dir);
        });
      }

      function setUpBlurPipeline(control, dir) {
        dir.valueAccessor.registerOnTouched(function () {
          control._pendingTouched = true;
          if (control.updateOn === 'blur' && control._pendingChange) updateControl(control, dir);
          if (control.updateOn !== 'submit') control.markAsTouched();
        });
      }

      function updateControl(control, dir) {
        if (control._pendingDirty) control.markAsDirty();
        control.setValue(control._pendingValue, {
          emitModelToViewChange: false
        });
        dir.viewToModelUpdate(control._pendingValue);
        control._pendingChange = false;
      }

      function setUpModelChangePipeline(control, dir) {
        var onChange = function onChange(newValue, emitModelEvent) {
          // control -> view
          dir.valueAccessor.writeValue(newValue); // control -> ngModel

          if (emitModelEvent) dir.viewToModelUpdate(newValue);
        };

        control.registerOnChange(onChange); // Register a callback function to cleanup onChange handler
        // from a control instance when a directive is destroyed.

        dir._registerOnDestroy(function () {
          control._unregisterOnChange(onChange);
        });
      }
      /**
       * Links a FormGroup or FormArray instance and corresponding Form directive by setting up validators
       * present in the view.
       *
       * @param control FormGroup or FormArray instance that should be linked.
       * @param dir Directive that provides view validators.
       */


      function setUpFormContainer(control, dir) {
        if (control == null && (typeof ngDevMode === 'undefined' || ngDevMode)) _throwError(dir, 'Cannot find control with');
        setUpValidators(control, dir,
        /* handleOnValidatorChange */
        false);
      }
      /**
       * Reverts the setup performed by the `setUpFormContainer` function.
       *
       * @param control FormGroup or FormArray instance that should be cleaned up.
       * @param dir Directive that provided view validators.
       * @returns true if a control was updated as a result of this action.
       */


      function cleanUpFormContainer(control, dir) {
        return cleanUpValidators(control, dir,
        /* handleOnValidatorChange */
        false);
      }

      function _noControlError(dir) {
        return _throwError(dir, 'There is no FormControl instance attached to form control element with');
      }

      function _throwError(dir, message) {
        var messageEnd;

        if (dir.path.length > 1) {
          messageEnd = "path: '".concat(dir.path.join(' -> '), "'");
        } else if (dir.path[0]) {
          messageEnd = "name: '".concat(dir.path, "'");
        } else {
          messageEnd = 'unspecified name attribute';
        }

        throw new Error("".concat(message, " ").concat(messageEnd));
      }

      function isPropertyUpdated(changes, viewModel) {
        if (!changes.hasOwnProperty('model')) return false;
        var change = changes['model'];
        if (change.isFirstChange()) return true;
        return !Object.is(viewModel, change.currentValue);
      }

      var BUILTIN_ACCESSORS = [CheckboxControlValueAccessor, RangeValueAccessor, NumberValueAccessor, SelectControlValueAccessor, SelectMultipleControlValueAccessor, RadioControlValueAccessor];

      function isBuiltInAccessor(valueAccessor) {
        return BUILTIN_ACCESSORS.some(function (a) {
          return valueAccessor.constructor === a;
        });
      }

      function syncPendingControls(form, directives) {
        form._syncPendingControls();

        directives.forEach(function (dir) {
          var control = dir.control;

          if (control.updateOn === 'submit' && control._pendingChange) {
            dir.viewToModelUpdate(control._pendingValue);
            control._pendingChange = false;
          }
        });
      } // TODO: vsavkin remove it once https://github.com/angular/angular/issues/3011 is implemented


      function selectValueAccessor(dir, valueAccessors) {
        if (!valueAccessors) return null;
        if (!Array.isArray(valueAccessors) && (typeof ngDevMode === 'undefined' || ngDevMode)) _throwError(dir, 'Value accessor was not provided as an array for form control with');
        var defaultAccessor = undefined;
        var builtinAccessor = undefined;
        var customAccessor = undefined;
        valueAccessors.forEach(function (v) {
          if (v.constructor === DefaultValueAccessor) {
            defaultAccessor = v;
          } else if (isBuiltInAccessor(v)) {
            if (builtinAccessor && (typeof ngDevMode === 'undefined' || ngDevMode)) _throwError(dir, 'More than one built-in value accessor matches form control with');
            builtinAccessor = v;
          } else {
            if (customAccessor && (typeof ngDevMode === 'undefined' || ngDevMode)) _throwError(dir, 'More than one custom value accessor matches form control with');
            customAccessor = v;
          }
        });
        if (customAccessor) return customAccessor;
        if (builtinAccessor) return builtinAccessor;
        if (defaultAccessor) return defaultAccessor;

        if (typeof ngDevMode === 'undefined' || ngDevMode) {
          _throwError(dir, 'No valid value accessor for form control with');
        }

        return null;
      }

      function removeListItem(list, el) {
        var index = list.indexOf(el);
        if (index > -1) list.splice(index, 1);
      } // TODO(kara): remove after deprecation period


      function _ngModelWarning(name, type, instance, warningConfig) {
        if (warningConfig === 'never') return;

        if ((warningConfig === null || warningConfig === 'once') && !type._ngModelWarningSentOnce || warningConfig === 'always' && !instance._ngModelWarningSent) {
          ReactiveErrors.ngModelWarning(name);
          type._ngModelWarningSentOnce = true;
          instance._ngModelWarningSent = true;
        }
      }
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /**
       * Reports that a FormControl is valid, meaning that no errors exist in the input value.
       *
       * @see `status`
       */


      var VALID = 'VALID';
      /**
       * Reports that a FormControl is invalid, meaning that an error exists in the input value.
       *
       * @see `status`
       */

      var INVALID = 'INVALID';
      /**
       * Reports that a FormControl is pending, meaning that that async validation is occurring and
       * errors are not yet available for the input value.
       *
       * @see `markAsPending`
       * @see `status`
       */

      var PENDING = 'PENDING';
      /**
       * Reports that a FormControl is disabled, meaning that the control is exempt from ancestor
       * calculations of validity or value.
       *
       * @see `markAsDisabled`
       * @see `status`
       */

      var DISABLED = 'DISABLED';

      function _find(control, path, delimiter) {
        if (path == null) return null;

        if (!Array.isArray(path)) {
          path = path.split(delimiter);
        }

        if (Array.isArray(path) && path.length === 0) return null; // Not using Array.reduce here due to a Chrome 80 bug
        // https://bugs.chromium.org/p/chromium/issues/detail?id=1049982

        var controlToFind = control;
        path.forEach(function (name) {
          if (controlToFind instanceof FormGroup) {
            controlToFind = controlToFind.controls.hasOwnProperty(name) ? controlToFind.controls[name] : null;
          } else if (controlToFind instanceof FormArray) {
            controlToFind = controlToFind.at(name) || null;
          } else {
            controlToFind = null;
          }
        });
        return controlToFind;
      }
      /**
       * Gets validators from either an options object or given validators.
       */


      function pickValidators(validatorOrOpts) {
        return (isOptionsObj(validatorOrOpts) ? validatorOrOpts.validators : validatorOrOpts) || null;
      }
      /**
       * Creates validator function by combining provided validators.
       */


      function coerceToValidator(validator) {
        return Array.isArray(validator) ? composeValidators(validator) : validator || null;
      }
      /**
       * Gets async validators from either an options object or given validators.
       */


      function pickAsyncValidators(asyncValidator, validatorOrOpts) {
        return (isOptionsObj(validatorOrOpts) ? validatorOrOpts.asyncValidators : asyncValidator) || null;
      }
      /**
       * Creates async validator function by combining provided async validators.
       */


      function coerceToAsyncValidator(asyncValidator) {
        return Array.isArray(asyncValidator) ? composeAsyncValidators(asyncValidator) : asyncValidator || null;
      }

      function isOptionsObj(validatorOrOpts) {
        return validatorOrOpts != null && !Array.isArray(validatorOrOpts) && typeof validatorOrOpts === 'object';
      }
      /**
       * This is the base class for `FormControl`, `FormGroup`, and `FormArray`.
       *
       * It provides some of the shared behavior that all controls and groups of controls have, like
       * running validators, calculating status, and resetting state. It also defines the properties
       * that are shared between all sub-classes, like `value`, `valid`, and `dirty`. It shouldn't be
       * instantiated directly.
       *
       * @see [Forms Guide](/guide/forms)
       * @see [Reactive Forms Guide](/guide/reactive-forms)
       * @see [Dynamic Forms Guide](/guide/dynamic-form)
       *
       * @publicApi
       */


      var AbstractControl = /*#__PURE__*/function () {
        /**
         * Initialize the AbstractControl instance.
         *
         * @param validators The function or array of functions that is used to determine the validity of
         *     this control synchronously.
         * @param asyncValidators The function or array of functions that is used to determine validity of
         *     this control asynchronously.
         */
        function AbstractControl(validators, asyncValidators) {
          _classCallCheck(this, AbstractControl);

          /**
           * Indicates that a control has its own pending asynchronous validation in progress.
           *
           * @internal
           */
          this._hasOwnPendingAsyncValidator = false;
          /** @internal */

          this._onCollectionChange = function () {};

          this._parent = null;
          /**
           * A control is `pristine` if the user has not yet changed
           * the value in the UI.
           *
           * @returns True if the user has not yet changed the value in the UI; compare `dirty`.
           * Programmatic changes to a control's value do not mark it dirty.
           */

          this.pristine = true;
          /**
           * True if the control is marked as `touched`.
           *
           * A control is marked `touched` once the user has triggered
           * a `blur` event on it.
           */

          this.touched = false;
          /** @internal */

          this._onDisabledChange = [];
          this._rawValidators = validators;
          this._rawAsyncValidators = asyncValidators;
          this._composedValidatorFn = coerceToValidator(this._rawValidators);
          this._composedAsyncValidatorFn = coerceToAsyncValidator(this._rawAsyncValidators);
        }
        /**
         * The function that is used to determine the validity of this control synchronously.
         */


        _createClass(AbstractControl, [{
          key: "validator",
          get: function get() {
            return this._composedValidatorFn;
          },
          set: function set(validatorFn) {
            this._rawValidators = this._composedValidatorFn = validatorFn;
          }
          /**
           * The function that is used to determine the validity of this control asynchronously.
           */

        }, {
          key: "asyncValidator",
          get: function get() {
            return this._composedAsyncValidatorFn;
          },
          set: function set(asyncValidatorFn) {
            this._rawAsyncValidators = this._composedAsyncValidatorFn = asyncValidatorFn;
          }
          /**
           * The parent control.
           */

        }, {
          key: "parent",
          get: function get() {
            return this._parent;
          }
          /**
           * A control is `valid` when its `status` is `VALID`.
           *
           * @see {@link AbstractControl.status}
           *
           * @returns True if the control has passed all of its validation tests,
           * false otherwise.
           */

        }, {
          key: "valid",
          get: function get() {
            return this.status === VALID;
          }
          /**
           * A control is `invalid` when its `status` is `INVALID`.
           *
           * @see {@link AbstractControl.status}
           *
           * @returns True if this control has failed one or more of its validation checks,
           * false otherwise.
           */

        }, {
          key: "invalid",
          get: function get() {
            return this.status === INVALID;
          }
          /**
           * A control is `pending` when its `status` is `PENDING`.
           *
           * @see {@link AbstractControl.status}
           *
           * @returns True if this control is in the process of conducting a validation check,
           * false otherwise.
           */

        }, {
          key: "pending",
          get: function get() {
            return this.status == PENDING;
          }
          /**
           * A control is `disabled` when its `status` is `DISABLED`.
           *
           * Disabled controls are exempt from validation checks and
           * are not included in the aggregate value of their ancestor
           * controls.
           *
           * @see {@link AbstractControl.status}
           *
           * @returns True if the control is disabled, false otherwise.
           */

        }, {
          key: "disabled",
          get: function get() {
            return this.status === DISABLED;
          }
          /**
           * A control is `enabled` as long as its `status` is not `DISABLED`.
           *
           * @returns True if the control has any status other than 'DISABLED',
           * false if the status is 'DISABLED'.
           *
           * @see {@link AbstractControl.status}
           *
           */

        }, {
          key: "enabled",
          get: function get() {
            return this.status !== DISABLED;
          }
          /**
           * A control is `dirty` if the user has changed the value
           * in the UI.
           *
           * @returns True if the user has changed the value of this control in the UI; compare `pristine`.
           * Programmatic changes to a control's value do not mark it dirty.
           */

        }, {
          key: "dirty",
          get: function get() {
            return !this.pristine;
          }
          /**
           * True if the control has not been marked as touched
           *
           * A control is `untouched` if the user has not yet triggered
           * a `blur` event on it.
           */

        }, {
          key: "untouched",
          get: function get() {
            return !this.touched;
          }
          /**
           * Reports the update strategy of the `AbstractControl` (meaning
           * the event on which the control updates itself).
           * Possible values: `'change'` | `'blur'` | `'submit'`
           * Default value: `'change'`
           */

        }, {
          key: "updateOn",
          get: function get() {
            return this._updateOn ? this._updateOn : this.parent ? this.parent.updateOn : 'change';
          }
          /**
           * Sets the synchronous validators that are active on this control.  Calling
           * this overwrites any existing sync validators.
           *
           * When you add or remove a validator at run time, you must call
           * `updateValueAndValidity()` for the new validation to take effect.
           *
           */

        }, {
          key: "setValidators",
          value: function setValidators(newValidator) {
            this._rawValidators = newValidator;
            this._composedValidatorFn = coerceToValidator(newValidator);
          }
          /**
           * Sets the async validators that are active on this control. Calling this
           * overwrites any existing async validators.
           *
           * When you add or remove a validator at run time, you must call
           * `updateValueAndValidity()` for the new validation to take effect.
           *
           */

        }, {
          key: "setAsyncValidators",
          value: function setAsyncValidators(newValidator) {
            this._rawAsyncValidators = newValidator;
            this._composedAsyncValidatorFn = coerceToAsyncValidator(newValidator);
          }
          /**
           * Empties out the sync validator list.
           *
           * When you add or remove a validator at run time, you must call
           * `updateValueAndValidity()` for the new validation to take effect.
           *
           */

        }, {
          key: "clearValidators",
          value: function clearValidators() {
            this.validator = null;
          }
          /**
           * Empties out the async validator list.
           *
           * When you add or remove a validator at run time, you must call
           * `updateValueAndValidity()` for the new validation to take effect.
           *
           */

        }, {
          key: "clearAsyncValidators",
          value: function clearAsyncValidators() {
            this.asyncValidator = null;
          }
          /**
           * Marks the control as `touched`. A control is touched by focus and
           * blur events that do not change the value.
           *
           * @see `markAsUntouched()`
           * @see `markAsDirty()`
           * @see `markAsPristine()`
           *
           * @param opts Configuration options that determine how the control propagates changes
           * and emits events after marking is applied.
           * * `onlySelf`: When true, mark only this control. When false or not supplied,
           * marks all direct ancestors. Default is false.
           */

        }, {
          key: "markAsTouched",
          value: function markAsTouched() {
            var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
            this.touched = true;

            if (this._parent && !opts.onlySelf) {
              this._parent.markAsTouched(opts);
            }
          }
          /**
           * Marks the control and all its descendant controls as `touched`.
           * @see `markAsTouched()`
           */

        }, {
          key: "markAllAsTouched",
          value: function markAllAsTouched() {
            this.markAsTouched({
              onlySelf: true
            });

            this._forEachChild(function (control) {
              return control.markAllAsTouched();
            });
          }
          /**
           * Marks the control as `untouched`.
           *
           * If the control has any children, also marks all children as `untouched`
           * and recalculates the `touched` status of all parent controls.
           *
           * @see `markAsTouched()`
           * @see `markAsDirty()`
           * @see `markAsPristine()`
           *
           * @param opts Configuration options that determine how the control propagates changes
           * and emits events after the marking is applied.
           * * `onlySelf`: When true, mark only this control. When false or not supplied,
           * marks all direct ancestors. Default is false.
           */

        }, {
          key: "markAsUntouched",
          value: function markAsUntouched() {
            var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
            this.touched = false;
            this._pendingTouched = false;

            this._forEachChild(function (control) {
              control.markAsUntouched({
                onlySelf: true
              });
            });

            if (this._parent && !opts.onlySelf) {
              this._parent._updateTouched(opts);
            }
          }
          /**
           * Marks the control as `dirty`. A control becomes dirty when
           * the control's value is changed through the UI; compare `markAsTouched`.
           *
           * @see `markAsTouched()`
           * @see `markAsUntouched()`
           * @see `markAsPristine()`
           *
           * @param opts Configuration options that determine how the control propagates changes
           * and emits events after marking is applied.
           * * `onlySelf`: When true, mark only this control. When false or not supplied,
           * marks all direct ancestors. Default is false.
           */

        }, {
          key: "markAsDirty",
          value: function markAsDirty() {
            var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
            this.pristine = false;

            if (this._parent && !opts.onlySelf) {
              this._parent.markAsDirty(opts);
            }
          }
          /**
           * Marks the control as `pristine`.
           *
           * If the control has any children, marks all children as `pristine`,
           * and recalculates the `pristine` status of all parent
           * controls.
           *
           * @see `markAsTouched()`
           * @see `markAsUntouched()`
           * @see `markAsDirty()`
           *
           * @param opts Configuration options that determine how the control emits events after
           * marking is applied.
           * * `onlySelf`: When true, mark only this control. When false or not supplied,
           * marks all direct ancestors. Default is false.
           */

        }, {
          key: "markAsPristine",
          value: function markAsPristine() {
            var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
            this.pristine = true;
            this._pendingDirty = false;

            this._forEachChild(function (control) {
              control.markAsPristine({
                onlySelf: true
              });
            });

            if (this._parent && !opts.onlySelf) {
              this._parent._updatePristine(opts);
            }
          }
          /**
           * Marks the control as `pending`.
           *
           * A control is pending while the control performs async validation.
           *
           * @see {@link AbstractControl.status}
           *
           * @param opts Configuration options that determine how the control propagates changes and
           * emits events after marking is applied.
           * * `onlySelf`: When true, mark only this control. When false or not supplied,
           * marks all direct ancestors. Default is false.
           * * `emitEvent`: When true or not supplied (the default), the `statusChanges`
           * observable emits an event with the latest status the control is marked pending.
           * When false, no events are emitted.
           *
           */

        }, {
          key: "markAsPending",
          value: function markAsPending() {
            var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
            this.status = PENDING;

            if (opts.emitEvent !== false) {
              this.statusChanges.emit(this.status);
            }

            if (this._parent && !opts.onlySelf) {
              this._parent.markAsPending(opts);
            }
          }
          /**
           * Disables the control. This means the control is exempt from validation checks and
           * excluded from the aggregate value of any parent. Its status is `DISABLED`.
           *
           * If the control has children, all children are also disabled.
           *
           * @see {@link AbstractControl.status}
           *
           * @param opts Configuration options that determine how the control propagates
           * changes and emits events after the control is disabled.
           * * `onlySelf`: When true, mark only this control. When false or not supplied,
           * marks all direct ancestors. Default is false.
           * * `emitEvent`: When true or not supplied (the default), both the `statusChanges` and
           * `valueChanges`
           * observables emit events with the latest status and value when the control is disabled.
           * When false, no events are emitted.
           */

        }, {
          key: "disable",
          value: function disable() {
            var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

            // If parent has been marked artificially dirty we don't want to re-calculate the
            // parent's dirtiness based on the children.
            var skipPristineCheck = this._parentMarkedDirty(opts.onlySelf);

            this.status = DISABLED;
            this.errors = null;

            this._forEachChild(function (control) {
              control.disable(Object.assign(Object.assign({}, opts), {
                onlySelf: true
              }));
            });

            this._updateValue();

            if (opts.emitEvent !== false) {
              this.valueChanges.emit(this.value);
              this.statusChanges.emit(this.status);
            }

            this._updateAncestors(Object.assign(Object.assign({}, opts), {
              skipPristineCheck: skipPristineCheck
            }));

            this._onDisabledChange.forEach(function (changeFn) {
              return changeFn(true);
            });
          }
          /**
           * Enables the control. This means the control is included in validation checks and
           * the aggregate value of its parent. Its status recalculates based on its value and
           * its validators.
           *
           * By default, if the control has children, all children are enabled.
           *
           * @see {@link AbstractControl.status}
           *
           * @param opts Configure options that control how the control propagates changes and
           * emits events when marked as untouched
           * * `onlySelf`: When true, mark only this control. When false or not supplied,
           * marks all direct ancestors. Default is false.
           * * `emitEvent`: When true or not supplied (the default), both the `statusChanges` and
           * `valueChanges`
           * observables emit events with the latest status and value when the control is enabled.
           * When false, no events are emitted.
           */

        }, {
          key: "enable",
          value: function enable() {
            var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

            // If parent has been marked artificially dirty we don't want to re-calculate the
            // parent's dirtiness based on the children.
            var skipPristineCheck = this._parentMarkedDirty(opts.onlySelf);

            this.status = VALID;

            this._forEachChild(function (control) {
              control.enable(Object.assign(Object.assign({}, opts), {
                onlySelf: true
              }));
            });

            this.updateValueAndValidity({
              onlySelf: true,
              emitEvent: opts.emitEvent
            });

            this._updateAncestors(Object.assign(Object.assign({}, opts), {
              skipPristineCheck: skipPristineCheck
            }));

            this._onDisabledChange.forEach(function (changeFn) {
              return changeFn(false);
            });
          }
        }, {
          key: "_updateAncestors",
          value: function _updateAncestors(opts) {
            if (this._parent && !opts.onlySelf) {
              this._parent.updateValueAndValidity(opts);

              if (!opts.skipPristineCheck) {
                this._parent._updatePristine();
              }

              this._parent._updateTouched();
            }
          }
          /**
           * @param parent Sets the parent of the control
           */

        }, {
          key: "setParent",
          value: function setParent(parent) {
            this._parent = parent;
          }
          /**
           * Recalculates the value and validation status of the control.
           *
           * By default, it also updates the value and validity of its ancestors.
           *
           * @param opts Configuration options determine how the control propagates changes and emits events
           * after updates and validity checks are applied.
           * * `onlySelf`: When true, only update this control. When false or not supplied,
           * update all direct ancestors. Default is false.
           * * `emitEvent`: When true or not supplied (the default), both the `statusChanges` and
           * `valueChanges`
           * observables emit events with the latest status and value when the control is updated.
           * When false, no events are emitted.
           */

        }, {
          key: "updateValueAndValidity",
          value: function updateValueAndValidity() {
            var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

            this._setInitialStatus();

            this._updateValue();

            if (this.enabled) {
              this._cancelExistingSubscription();

              this.errors = this._runValidator();
              this.status = this._calculateStatus();

              if (this.status === VALID || this.status === PENDING) {
                this._runAsyncValidator(opts.emitEvent);
              }
            }

            if (opts.emitEvent !== false) {
              this.valueChanges.emit(this.value);
              this.statusChanges.emit(this.status);
            }

            if (this._parent && !opts.onlySelf) {
              this._parent.updateValueAndValidity(opts);
            }
          }
          /** @internal */

        }, {
          key: "_updateTreeValidity",
          value: function _updateTreeValidity() {
            var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
              emitEvent: true
            };

            this._forEachChild(function (ctrl) {
              return ctrl._updateTreeValidity(opts);
            });

            this.updateValueAndValidity({
              onlySelf: true,
              emitEvent: opts.emitEvent
            });
          }
        }, {
          key: "_setInitialStatus",
          value: function _setInitialStatus() {
            this.status = this._allControlsDisabled() ? DISABLED : VALID;
          }
        }, {
          key: "_runValidator",
          value: function _runValidator() {
            return this.validator ? this.validator(this) : null;
          }
        }, {
          key: "_runAsyncValidator",
          value: function _runAsyncValidator(emitEvent) {
            var _this7 = this;

            if (this.asyncValidator) {
              this.status = PENDING;
              this._hasOwnPendingAsyncValidator = true;
              var obs = toObservable(this.asyncValidator(this));
              this._asyncValidationSubscription = obs.subscribe(function (errors) {
                _this7._hasOwnPendingAsyncValidator = false; // This will trigger the recalculation of the validation status, which depends on
                // the state of the asynchronous validation (whether it is in progress or not). So, it is
                // necessary that we have updated the `_hasOwnPendingAsyncValidator` boolean flag first.

                _this7.setErrors(errors, {
                  emitEvent: emitEvent
                });
              });
            }
          }
        }, {
          key: "_cancelExistingSubscription",
          value: function _cancelExistingSubscription() {
            if (this._asyncValidationSubscription) {
              this._asyncValidationSubscription.unsubscribe();

              this._hasOwnPendingAsyncValidator = false;
            }
          }
          /**
           * Sets errors on a form control when running validations manually, rather than automatically.
           *
           * Calling `setErrors` also updates the validity of the parent control.
           *
           * @usageNotes
           *
           * ### Manually set the errors for a control
           *
           * ```
           * const login = new FormControl('someLogin');
           * login.setErrors({
           *   notUnique: true
           * });
           *
           * expect(login.valid).toEqual(false);
           * expect(login.errors).toEqual({ notUnique: true });
           *
           * login.setValue('someOtherLogin');
           *
           * expect(login.valid).toEqual(true);
           * ```
           */

        }, {
          key: "setErrors",
          value: function setErrors(errors) {
            var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
            this.errors = errors;

            this._updateControlsErrors(opts.emitEvent !== false);
          }
          /**
           * Retrieves a child control given the control's name or path.
           *
           * @param path A dot-delimited string or array of string/number values that define the path to the
           * control.
           *
           * @usageNotes
           * ### Retrieve a nested control
           *
           * For example, to get a `name` control nested within a `person` sub-group:
           *
           * * `this.form.get('person.name');`
           *
           * -OR-
           *
           * * `this.form.get(['person', 'name']);`
           */

        }, {
          key: "get",
          value: function get(path) {
            return _find(this, path, '.');
          }
          /**
           * @description
           * Reports error data for the control with the given path.
           *
           * @param errorCode The code of the error to check
           * @param path A list of control names that designates how to move from the current control
           * to the control that should be queried for errors.
           *
           * @usageNotes
           * For example, for the following `FormGroup`:
           *
           * ```
           * form = new FormGroup({
           *   address: new FormGroup({ street: new FormControl() })
           * });
           * ```
           *
           * The path to the 'street' control from the root form would be 'address' -> 'street'.
           *
           * It can be provided to this method in one of two formats:
           *
           * 1. An array of string control names, e.g. `['address', 'street']`
           * 1. A period-delimited list of control names in one string, e.g. `'address.street'`
           *
           * @returns error data for that particular error. If the control or error is not present,
           * null is returned.
           */

        }, {
          key: "getError",
          value: function getError(errorCode, path) {
            var control = path ? this.get(path) : this;
            return control && control.errors ? control.errors[errorCode] : null;
          }
          /**
           * @description
           * Reports whether the control with the given path has the error specified.
           *
           * @param errorCode The code of the error to check
           * @param path A list of control names that designates how to move from the current control
           * to the control that should be queried for errors.
           *
           * @usageNotes
           * For example, for the following `FormGroup`:
           *
           * ```
           * form = new FormGroup({
           *   address: new FormGroup({ street: new FormControl() })
           * });
           * ```
           *
           * The path to the 'street' control from the root form would be 'address' -> 'street'.
           *
           * It can be provided to this method in one of two formats:
           *
           * 1. An array of string control names, e.g. `['address', 'street']`
           * 1. A period-delimited list of control names in one string, e.g. `'address.street'`
           *
           * If no path is given, this method checks for the error on the current control.
           *
           * @returns whether the given error is present in the control at the given path.
           *
           * If the control is not present, false is returned.
           */

        }, {
          key: "hasError",
          value: function hasError(errorCode, path) {
            return !!this.getError(errorCode, path);
          }
          /**
           * Retrieves the top-level ancestor of this control.
           */

        }, {
          key: "root",
          get: function get() {
            var x = this;

            while (x._parent) {
              x = x._parent;
            }

            return x;
          }
          /** @internal */

        }, {
          key: "_updateControlsErrors",
          value: function _updateControlsErrors(emitEvent) {
            this.status = this._calculateStatus();

            if (emitEvent) {
              this.statusChanges.emit(this.status);
            }

            if (this._parent) {
              this._parent._updateControlsErrors(emitEvent);
            }
          }
          /** @internal */

        }, {
          key: "_initObservables",
          value: function _initObservables() {
            this.valueChanges = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
            this.statusChanges = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
          }
        }, {
          key: "_calculateStatus",
          value: function _calculateStatus() {
            if (this._allControlsDisabled()) return DISABLED;
            if (this.errors) return INVALID;
            if (this._hasOwnPendingAsyncValidator || this._anyControlsHaveStatus(PENDING)) return PENDING;
            if (this._anyControlsHaveStatus(INVALID)) return INVALID;
            return VALID;
          }
          /** @internal */

        }, {
          key: "_anyControlsHaveStatus",
          value: function _anyControlsHaveStatus(status) {
            return this._anyControls(function (control) {
              return control.status === status;
            });
          }
          /** @internal */

        }, {
          key: "_anyControlsDirty",
          value: function _anyControlsDirty() {
            return this._anyControls(function (control) {
              return control.dirty;
            });
          }
          /** @internal */

        }, {
          key: "_anyControlsTouched",
          value: function _anyControlsTouched() {
            return this._anyControls(function (control) {
              return control.touched;
            });
          }
          /** @internal */

        }, {
          key: "_updatePristine",
          value: function _updatePristine() {
            var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
            this.pristine = !this._anyControlsDirty();

            if (this._parent && !opts.onlySelf) {
              this._parent._updatePristine(opts);
            }
          }
          /** @internal */

        }, {
          key: "_updateTouched",
          value: function _updateTouched() {
            var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
            this.touched = this._anyControlsTouched();

            if (this._parent && !opts.onlySelf) {
              this._parent._updateTouched(opts);
            }
          }
          /** @internal */

        }, {
          key: "_isBoxedValue",
          value: function _isBoxedValue(formState) {
            return typeof formState === 'object' && formState !== null && Object.keys(formState).length === 2 && 'value' in formState && 'disabled' in formState;
          }
          /** @internal */

        }, {
          key: "_registerOnCollectionChange",
          value: function _registerOnCollectionChange(fn) {
            this._onCollectionChange = fn;
          }
          /** @internal */

        }, {
          key: "_setUpdateStrategy",
          value: function _setUpdateStrategy(opts) {
            if (isOptionsObj(opts) && opts.updateOn != null) {
              this._updateOn = opts.updateOn;
            }
          }
          /**
           * Check to see if parent has been marked artificially dirty.
           *
           * @internal
           */

        }, {
          key: "_parentMarkedDirty",
          value: function _parentMarkedDirty(onlySelf) {
            var parentDirty = this._parent && this._parent.dirty;
            return !onlySelf && !!parentDirty && !this._parent._anyControlsDirty();
          }
        }]);

        return AbstractControl;
      }();
      /**
       * Tracks the value and validation status of an individual form control.
       *
       * This is one of the three fundamental building blocks of Angular forms, along with
       * `FormGroup` and `FormArray`. It extends the `AbstractControl` class that
       * implements most of the base functionality for accessing the value, validation status,
       * user interactions and events. See [usage examples below](#usage-notes).
       *
       * @see `AbstractControl`
       * @see [Reactive Forms Guide](guide/reactive-forms)
       * @see [Usage Notes](#usage-notes)
       *
       * @usageNotes
       *
       * ### Initializing Form Controls
       *
       * Instantiate a `FormControl`, with an initial value.
       *
       * ```ts
       * const control = new FormControl('some value');
       * console.log(control.value);     // 'some value'
       *```
       *
       * The following example initializes the control with a form state object. The `value`
       * and `disabled` keys are required in this case.
       *
       * ```ts
       * const control = new FormControl({ value: 'n/a', disabled: true });
       * console.log(control.value);     // 'n/a'
       * console.log(control.status);    // 'DISABLED'
       * ```
       *
       * The following example initializes the control with a sync validator.
       *
       * ```ts
       * const control = new FormControl('', Validators.required);
       * console.log(control.value);      // ''
       * console.log(control.status);     // 'INVALID'
       * ```
       *
       * The following example initializes the control using an options object.
       *
       * ```ts
       * const control = new FormControl('', {
       *    validators: Validators.required,
       *    asyncValidators: myAsyncValidator
       * });
       * ```
       *
       * ### Configure the control to update on a blur event
       *
       * Set the `updateOn` option to `'blur'` to update on the blur `event`.
       *
       * ```ts
       * const control = new FormControl('', { updateOn: 'blur' });
       * ```
       *
       * ### Configure the control to update on a submit event
       *
       * Set the `updateOn` option to `'submit'` to update on a submit `event`.
       *
       * ```ts
       * const control = new FormControl('', { updateOn: 'submit' });
       * ```
       *
       * ### Reset the control back to an initial value
       *
       * You reset to a specific form state by passing through a standalone
       * value or a form state object that contains both a value and a disabled state
       * (these are the only two properties that cannot be calculated).
       *
       * ```ts
       * const control = new FormControl('Nancy');
       *
       * console.log(control.value); // 'Nancy'
       *
       * control.reset('Drew');
       *
       * console.log(control.value); // 'Drew'
       * ```
       *
       * ### Reset the control back to an initial value and disabled
       *
       * ```
       * const control = new FormControl('Nancy');
       *
       * console.log(control.value); // 'Nancy'
       * console.log(control.status); // 'VALID'
       *
       * control.reset({ value: 'Drew', disabled: true });
       *
       * console.log(control.value); // 'Drew'
       * console.log(control.status); // 'DISABLED'
       * ```
       *
       * @publicApi
       */


      var FormControl = /*#__PURE__*/function (_AbstractControl) {
        _inherits(FormControl, _AbstractControl);

        var _super5 = _createSuper(FormControl);

        /**
         * Creates a new `FormControl` instance.
         *
         * @param formState Initializes the control with an initial value,
         * or an object that defines the initial value and disabled state.
         *
         * @param validatorOrOpts A synchronous validator function, or an array of
         * such functions, or an `AbstractControlOptions` object that contains validation functions
         * and a validation trigger.
         *
         * @param asyncValidator A single async validator or array of async validator functions
         *
         */
        function FormControl() {
          var _this8;

          var formState = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
          var validatorOrOpts = arguments.length > 1 ? arguments[1] : undefined;
          var asyncValidator = arguments.length > 2 ? arguments[2] : undefined;

          _classCallCheck(this, FormControl);

          _this8 = _super5.call(this, pickValidators(validatorOrOpts), pickAsyncValidators(asyncValidator, validatorOrOpts));
          /** @internal */

          _this8._onChange = [];

          _this8._applyFormState(formState);

          _this8._setUpdateStrategy(validatorOrOpts);

          _this8._initObservables();

          _this8.updateValueAndValidity({
            onlySelf: true,
            // If `asyncValidator` is present, it will trigger control status change from `PENDING` to
            // `VALID` or `INVALID`.
            // The status should be broadcasted via the `statusChanges` observable, so we set `emitEvent`
            // to `true` to allow that during the control creation process.
            emitEvent: !!asyncValidator
          });

          return _this8;
        }
        /**
         * Sets a new value for the form control.
         *
         * @param value The new value for the control.
         * @param options Configuration options that determine how the control propagates changes
         * and emits events when the value changes.
         * The configuration options are passed to the {@link AbstractControl#updateValueAndValidity
         * updateValueAndValidity} method.
         *
         * * `onlySelf`: When true, each change only affects this control, and not its parent. Default is
         * false.
         * * `emitEvent`: When true or not supplied (the default), both the `statusChanges` and
         * `valueChanges`
         * observables emit events with the latest status and value when the control value is updated.
         * When false, no events are emitted.
         * * `emitModelToViewChange`: When true or not supplied  (the default), each change triggers an
         * `onChange` event to
         * update the view.
         * * `emitViewToModelChange`: When true or not supplied (the default), each change triggers an
         * `ngModelChange`
         * event to update the model.
         *
         */


        _createClass(FormControl, [{
          key: "setValue",
          value: function setValue(value) {
            var _this9 = this;

            var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
            this.value = this._pendingValue = value;

            if (this._onChange.length && options.emitModelToViewChange !== false) {
              this._onChange.forEach(function (changeFn) {
                return changeFn(_this9.value, options.emitViewToModelChange !== false);
              });
            }

            this.updateValueAndValidity(options);
          }
          /**
           * Patches the value of a control.
           *
           * This function is functionally the same as {@link FormControl#setValue setValue} at this level.
           * It exists for symmetry with {@link FormGroup#patchValue patchValue} on `FormGroups` and
           * `FormArrays`, where it does behave differently.
           *
           * @see `setValue` for options
           */

        }, {
          key: "patchValue",
          value: function patchValue(value) {
            var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
            this.setValue(value, options);
          }
          /**
           * Resets the form control, marking it `pristine` and `untouched`, and setting
           * the value to null.
           *
           * @param formState Resets the control with an initial value,
           * or an object that defines the initial value and disabled state.
           *
           * @param options Configuration options that determine how the control propagates changes
           * and emits events after the value changes.
           *
           * * `onlySelf`: When true, each change only affects this control, and not its parent. Default is
           * false.
           * * `emitEvent`: When true or not supplied (the default), both the `statusChanges` and
           * `valueChanges`
           * observables emit events with the latest status and value when the control is reset.
           * When false, no events are emitted.
           *
           */

        }, {
          key: "reset",
          value: function reset() {
            var formState = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
            var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

            this._applyFormState(formState);

            this.markAsPristine(options);
            this.markAsUntouched(options);
            this.setValue(this.value, options);
            this._pendingChange = false;
          }
          /**
           * @internal
           */

        }, {
          key: "_updateValue",
          value: function _updateValue() {}
          /**
           * @internal
           */

        }, {
          key: "_anyControls",
          value: function _anyControls(condition) {
            return false;
          }
          /**
           * @internal
           */

        }, {
          key: "_allControlsDisabled",
          value: function _allControlsDisabled() {
            return this.disabled;
          }
          /**
           * Register a listener for change events.
           *
           * @param fn The method that is called when the value changes
           */

        }, {
          key: "registerOnChange",
          value: function registerOnChange(fn) {
            this._onChange.push(fn);
          }
          /**
           * Internal function to unregister a change events listener.
           * @internal
           */

        }, {
          key: "_unregisterOnChange",
          value: function _unregisterOnChange(fn) {
            removeListItem(this._onChange, fn);
          }
          /**
           * Register a listener for disabled events.
           *
           * @param fn The method that is called when the disabled status changes.
           */

        }, {
          key: "registerOnDisabledChange",
          value: function registerOnDisabledChange(fn) {
            this._onDisabledChange.push(fn);
          }
          /**
           * Internal function to unregister a disabled event listener.
           * @internal
           */

        }, {
          key: "_unregisterOnDisabledChange",
          value: function _unregisterOnDisabledChange(fn) {
            removeListItem(this._onDisabledChange, fn);
          }
          /**
           * @internal
           */

        }, {
          key: "_forEachChild",
          value: function _forEachChild(cb) {}
          /** @internal */

        }, {
          key: "_syncPendingControls",
          value: function _syncPendingControls() {
            if (this.updateOn === 'submit') {
              if (this._pendingDirty) this.markAsDirty();
              if (this._pendingTouched) this.markAsTouched();

              if (this._pendingChange) {
                this.setValue(this._pendingValue, {
                  onlySelf: true,
                  emitModelToViewChange: false
                });
                return true;
              }
            }

            return false;
          }
        }, {
          key: "_applyFormState",
          value: function _applyFormState(formState) {
            if (this._isBoxedValue(formState)) {
              this.value = this._pendingValue = formState.value;
              formState.disabled ? this.disable({
                onlySelf: true,
                emitEvent: false
              }) : this.enable({
                onlySelf: true,
                emitEvent: false
              });
            } else {
              this.value = this._pendingValue = formState;
            }
          }
        }]);

        return FormControl;
      }(AbstractControl);
      /**
       * Tracks the value and validity state of a group of `FormControl` instances.
       *
       * A `FormGroup` aggregates the values of each child `FormControl` into one object,
       * with each control name as the key.  It calculates its status by reducing the status values
       * of its children. For example, if one of the controls in a group is invalid, the entire
       * group becomes invalid.
       *
       * `FormGroup` is one of the three fundamental building blocks used to define forms in Angular,
       * along with `FormControl` and `FormArray`.
       *
       * When instantiating a `FormGroup`, pass in a collection of child controls as the first
       * argument. The key for each child registers the name for the control.
       *
       * @usageNotes
       *
       * ### Create a form group with 2 controls
       *
       * ```
       * const form = new FormGroup({
       *   first: new FormControl('Nancy', Validators.minLength(2)),
       *   last: new FormControl('Drew'),
       * });
       *
       * console.log(form.value);   // {first: 'Nancy', last; 'Drew'}
       * console.log(form.status);  // 'VALID'
       * ```
       *
       * ### Create a form group with a group-level validator
       *
       * You include group-level validators as the second arg, or group-level async
       * validators as the third arg. These come in handy when you want to perform validation
       * that considers the value of more than one child control.
       *
       * ```
       * const form = new FormGroup({
       *   password: new FormControl('', Validators.minLength(2)),
       *   passwordConfirm: new FormControl('', Validators.minLength(2)),
       * }, passwordMatchValidator);
       *
       *
       * function passwordMatchValidator(g: FormGroup) {
       *    return g.get('password').value === g.get('passwordConfirm').value
       *       ? null : {'mismatch': true};
       * }
       * ```
       *
       * Like `FormControl` instances, you choose to pass in
       * validators and async validators as part of an options object.
       *
       * ```
       * const form = new FormGroup({
       *   password: new FormControl('')
       *   passwordConfirm: new FormControl('')
       * }, { validators: passwordMatchValidator, asyncValidators: otherValidator });
       * ```
       *
       * ### Set the updateOn property for all controls in a form group
       *
       * The options object is used to set a default value for each child
       * control's `updateOn` property. If you set `updateOn` to `'blur'` at the
       * group level, all child controls default to 'blur', unless the child
       * has explicitly specified a different `updateOn` value.
       *
       * ```ts
       * const c = new FormGroup({
       *   one: new FormControl()
       * }, { updateOn: 'blur' });
       * ```
       *
       * @publicApi
       */


      var FormGroup = /*#__PURE__*/function (_AbstractControl2) {
        _inherits(FormGroup, _AbstractControl2);

        var _super6 = _createSuper(FormGroup);

        /**
         * Creates a new `FormGroup` instance.
         *
         * @param controls A collection of child controls. The key for each child is the name
         * under which it is registered.
         *
         * @param validatorOrOpts A synchronous validator function, or an array of
         * such functions, or an `AbstractControlOptions` object that contains validation functions
         * and a validation trigger.
         *
         * @param asyncValidator A single async validator or array of async validator functions
         *
         */
        function FormGroup(controls, validatorOrOpts, asyncValidator) {
          var _this10;

          _classCallCheck(this, FormGroup);

          _this10 = _super6.call(this, pickValidators(validatorOrOpts), pickAsyncValidators(asyncValidator, validatorOrOpts));
          _this10.controls = controls;

          _this10._initObservables();

          _this10._setUpdateStrategy(validatorOrOpts);

          _this10._setUpControls();

          _this10.updateValueAndValidity({
            onlySelf: true,
            // If `asyncValidator` is present, it will trigger control status change from `PENDING` to
            // `VALID` or `INVALID`. The status should be broadcasted via the `statusChanges` observable,
            // so we set `emitEvent` to `true` to allow that during the control creation process.
            emitEvent: !!asyncValidator
          });

          return _this10;
        }
        /**
         * Registers a control with the group's list of controls.
         *
         * This method does not update the value or validity of the control.
         * Use {@link FormGroup#addControl addControl} instead.
         *
         * @param name The control name to register in the collection
         * @param control Provides the control for the given name
         */


        _createClass(FormGroup, [{
          key: "registerControl",
          value: function registerControl(name, control) {
            if (this.controls[name]) return this.controls[name];
            this.controls[name] = control;
            control.setParent(this);

            control._registerOnCollectionChange(this._onCollectionChange);

            return control;
          }
          /**
           * Add a control to this group.
           *
           * This method also updates the value and validity of the control.
           *
           * @param name The control name to add to the collection
           * @param control Provides the control for the given name
           */

        }, {
          key: "addControl",
          value: function addControl(name, control) {
            this.registerControl(name, control);
            this.updateValueAndValidity();

            this._onCollectionChange();
          }
          /**
           * Remove a control from this group.
           *
           * @param name The control name to remove from the collection
           */

        }, {
          key: "removeControl",
          value: function removeControl(name) {
            if (this.controls[name]) this.controls[name]._registerOnCollectionChange(function () {});
            delete this.controls[name];
            this.updateValueAndValidity();

            this._onCollectionChange();
          }
          /**
           * Replace an existing control.
           *
           * @param name The control name to replace in the collection
           * @param control Provides the control for the given name
           */

        }, {
          key: "setControl",
          value: function setControl(name, control) {
            if (this.controls[name]) this.controls[name]._registerOnCollectionChange(function () {});
            delete this.controls[name];
            if (control) this.registerControl(name, control);
            this.updateValueAndValidity();

            this._onCollectionChange();
          }
          /**
           * Check whether there is an enabled control with the given name in the group.
           *
           * Reports false for disabled controls. If you'd like to check for existence in the group
           * only, use {@link AbstractControl#get get} instead.
           *
           * @param controlName The control name to check for existence in the collection
           *
           * @returns false for disabled controls, true otherwise.
           */

        }, {
          key: "contains",
          value: function contains(controlName) {
            return this.controls.hasOwnProperty(controlName) && this.controls[controlName].enabled;
          }
          /**
           * Sets the value of the `FormGroup`. It accepts an object that matches
           * the structure of the group, with control names as keys.
           *
           * @usageNotes
           * ### Set the complete value for the form group
           *
           * ```
           * const form = new FormGroup({
           *   first: new FormControl(),
           *   last: new FormControl()
           * });
           *
           * console.log(form.value);   // {first: null, last: null}
           *
           * form.setValue({first: 'Nancy', last: 'Drew'});
           * console.log(form.value);   // {first: 'Nancy', last: 'Drew'}
           * ```
           *
           * @throws When strict checks fail, such as setting the value of a control
           * that doesn't exist or if you exclude a value of a control that does exist.
           *
           * @param value The new value for the control that matches the structure of the group.
           * @param options Configuration options that determine how the control propagates changes
           * and emits events after the value changes.
           * The configuration options are passed to the {@link AbstractControl#updateValueAndValidity
           * updateValueAndValidity} method.
           *
           * * `onlySelf`: When true, each change only affects this control, and not its parent. Default is
           * false.
           * * `emitEvent`: When true or not supplied (the default), both the `statusChanges` and
           * `valueChanges`
           * observables emit events with the latest status and value when the control value is updated.
           * When false, no events are emitted.
           */

        }, {
          key: "setValue",
          value: function setValue(value) {
            var _this11 = this;

            var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

            this._checkAllValuesPresent(value);

            Object.keys(value).forEach(function (name) {
              _this11._throwIfControlMissing(name);

              _this11.controls[name].setValue(value[name], {
                onlySelf: true,
                emitEvent: options.emitEvent
              });
            });
            this.updateValueAndValidity(options);
          }
          /**
           * Patches the value of the `FormGroup`. It accepts an object with control
           * names as keys, and does its best to match the values to the correct controls
           * in the group.
           *
           * It accepts both super-sets and sub-sets of the group without throwing an error.
           *
           * @usageNotes
           * ### Patch the value for a form group
           *
           * ```
           * const form = new FormGroup({
           *    first: new FormControl(),
           *    last: new FormControl()
           * });
           * console.log(form.value);   // {first: null, last: null}
           *
           * form.patchValue({first: 'Nancy'});
           * console.log(form.value);   // {first: 'Nancy', last: null}
           * ```
           *
           * @param value The object that matches the structure of the group.
           * @param options Configuration options that determine how the control propagates changes and
           * emits events after the value is patched.
           * * `onlySelf`: When true, each change only affects this control and not its parent. Default is
           * true.
           * * `emitEvent`: When true or not supplied (the default), both the `statusChanges` and
           * `valueChanges` observables emit events with the latest status and value when the control value
           * is updated. When false, no events are emitted. The configuration options are passed to
           * the {@link AbstractControl#updateValueAndValidity updateValueAndValidity} method.
           */

        }, {
          key: "patchValue",
          value: function patchValue(value) {
            var _this12 = this;

            var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
            // Even though the `value` argument type doesn't allow `null` and `undefined` values, the
            // `patchValue` can be called recursively and inner data structures might have these values, so
            // we just ignore such cases when a field containing FormGroup instance receives `null` or
            // `undefined` as a value.
            if (value == null
            /* both `null` and `undefined` */
            ) return;
            Object.keys(value).forEach(function (name) {
              if (_this12.controls[name]) {
                _this12.controls[name].patchValue(value[name], {
                  onlySelf: true,
                  emitEvent: options.emitEvent
                });
              }
            });
            this.updateValueAndValidity(options);
          }
          /**
           * Resets the `FormGroup`, marks all descendants `pristine` and `untouched` and sets
           * the value of all descendants to null.
           *
           * You reset to a specific form state by passing in a map of states
           * that matches the structure of your form, with control names as keys. The state
           * is a standalone value or a form state object with both a value and a disabled
           * status.
           *
           * @param value Resets the control with an initial value,
           * or an object that defines the initial value and disabled state.
           *
           * @param options Configuration options that determine how the control propagates changes
           * and emits events when the group is reset.
           * * `onlySelf`: When true, each change only affects this control, and not its parent. Default is
           * false.
           * * `emitEvent`: When true or not supplied (the default), both the `statusChanges` and
           * `valueChanges`
           * observables emit events with the latest status and value when the control is reset.
           * When false, no events are emitted.
           * The configuration options are passed to the {@link AbstractControl#updateValueAndValidity
           * updateValueAndValidity} method.
           *
           * @usageNotes
           *
           * ### Reset the form group values
           *
           * ```ts
           * const form = new FormGroup({
           *   first: new FormControl('first name'),
           *   last: new FormControl('last name')
           * });
           *
           * console.log(form.value);  // {first: 'first name', last: 'last name'}
           *
           * form.reset({ first: 'name', last: 'last name' });
           *
           * console.log(form.value);  // {first: 'name', last: 'last name'}
           * ```
           *
           * ### Reset the form group values and disabled status
           *
           * ```
           * const form = new FormGroup({
           *   first: new FormControl('first name'),
           *   last: new FormControl('last name')
           * });
           *
           * form.reset({
           *   first: {value: 'name', disabled: true},
           *   last: 'last'
           * });
           *
           * console.log(form.value);  // {last: 'last'}
           * console.log(form.get('first').status);  // 'DISABLED'
           * ```
           */

        }, {
          key: "reset",
          value: function reset() {
            var value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
            var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

            this._forEachChild(function (control, name) {
              control.reset(value[name], {
                onlySelf: true,
                emitEvent: options.emitEvent
              });
            });

            this._updatePristine(options);

            this._updateTouched(options);

            this.updateValueAndValidity(options);
          }
          /**
           * The aggregate value of the `FormGroup`, including any disabled controls.
           *
           * Retrieves all values regardless of disabled status.
           * The `value` property is the best way to get the value of the group, because
           * it excludes disabled controls in the `FormGroup`.
           */

        }, {
          key: "getRawValue",
          value: function getRawValue() {
            return this._reduceChildren({}, function (acc, control, name) {
              acc[name] = control instanceof FormControl ? control.value : control.getRawValue();
              return acc;
            });
          }
          /** @internal */

        }, {
          key: "_syncPendingControls",
          value: function _syncPendingControls() {
            var subtreeUpdated = this._reduceChildren(false, function (updated, child) {
              return child._syncPendingControls() ? true : updated;
            });

            if (subtreeUpdated) this.updateValueAndValidity({
              onlySelf: true
            });
            return subtreeUpdated;
          }
          /** @internal */

        }, {
          key: "_throwIfControlMissing",
          value: function _throwIfControlMissing(name) {
            if (!Object.keys(this.controls).length) {
              throw new Error("\n        There are no form controls registered with this group yet. If you're using ngModel,\n        you may want to check next tick (e.g. use setTimeout).\n      ");
            }

            if (!this.controls[name]) {
              throw new Error("Cannot find form control with name: ".concat(name, "."));
            }
          }
          /** @internal */

        }, {
          key: "_forEachChild",
          value: function _forEachChild(cb) {
            var _this13 = this;

            Object.keys(this.controls).forEach(function (key) {
              // The list of controls can change (for ex. controls might be removed) while the loop
              // is running (as a result of invoking Forms API in `valueChanges` subscription), so we
              // have to null check before invoking the callback.
              var control = _this13.controls[key];
              control && cb(control, key);
            });
          }
          /** @internal */

        }, {
          key: "_setUpControls",
          value: function _setUpControls() {
            var _this14 = this;

            this._forEachChild(function (control) {
              control.setParent(_this14);

              control._registerOnCollectionChange(_this14._onCollectionChange);
            });
          }
          /** @internal */

        }, {
          key: "_updateValue",
          value: function _updateValue() {
            this.value = this._reduceValue();
          }
          /** @internal */

        }, {
          key: "_anyControls",
          value: function _anyControls(condition) {
            for (var _i4 = 0, _Object$keys = Object.keys(this.controls); _i4 < _Object$keys.length; _i4++) {
              var controlName = _Object$keys[_i4];
              var control = this.controls[controlName];

              if (this.contains(controlName) && condition(control)) {
                return true;
              }
            }

            return false;
          }
          /** @internal */

        }, {
          key: "_reduceValue",
          value: function _reduceValue() {
            var _this15 = this;

            return this._reduceChildren({}, function (acc, control, name) {
              if (control.enabled || _this15.disabled) {
                acc[name] = control.value;
              }

              return acc;
            });
          }
          /** @internal */

        }, {
          key: "_reduceChildren",
          value: function _reduceChildren(initValue, fn) {
            var res = initValue;

            this._forEachChild(function (control, name) {
              res = fn(res, control, name);
            });

            return res;
          }
          /** @internal */

        }, {
          key: "_allControlsDisabled",
          value: function _allControlsDisabled() {
            for (var _i5 = 0, _Object$keys2 = Object.keys(this.controls); _i5 < _Object$keys2.length; _i5++) {
              var controlName = _Object$keys2[_i5];

              if (this.controls[controlName].enabled) {
                return false;
              }
            }

            return Object.keys(this.controls).length > 0 || this.disabled;
          }
          /** @internal */

        }, {
          key: "_checkAllValuesPresent",
          value: function _checkAllValuesPresent(value) {
            this._forEachChild(function (control, name) {
              if (value[name] === undefined) {
                throw new Error("Must supply a value for form control with name: '".concat(name, "'."));
              }
            });
          }
        }]);

        return FormGroup;
      }(AbstractControl);
      /**
       * Tracks the value and validity state of an array of `FormControl`,
       * `FormGroup` or `FormArray` instances.
       *
       * A `FormArray` aggregates the values of each child `FormControl` into an array.
       * It calculates its status by reducing the status values of its children. For example, if one of
       * the controls in a `FormArray` is invalid, the entire array becomes invalid.
       *
       * `FormArray` is one of the three fundamental building blocks used to define forms in Angular,
       * along with `FormControl` and `FormGroup`.
       *
       * @usageNotes
       *
       * ### Create an array of form controls
       *
       * ```
       * const arr = new FormArray([
       *   new FormControl('Nancy', Validators.minLength(2)),
       *   new FormControl('Drew'),
       * ]);
       *
       * console.log(arr.value);   // ['Nancy', 'Drew']
       * console.log(arr.status);  // 'VALID'
       * ```
       *
       * ### Create a form array with array-level validators
       *
       * You include array-level validators and async validators. These come in handy
       * when you want to perform validation that considers the value of more than one child
       * control.
       *
       * The two types of validators are passed in separately as the second and third arg
       * respectively, or together as part of an options object.
       *
       * ```
       * const arr = new FormArray([
       *   new FormControl('Nancy'),
       *   new FormControl('Drew')
       * ], {validators: myValidator, asyncValidators: myAsyncValidator});
       * ```
       *
       * ### Set the updateOn property for all controls in a form array
       *
       * The options object is used to set a default value for each child
       * control's `updateOn` property. If you set `updateOn` to `'blur'` at the
       * array level, all child controls default to 'blur', unless the child
       * has explicitly specified a different `updateOn` value.
       *
       * ```ts
       * const arr = new FormArray([
       *    new FormControl()
       * ], {updateOn: 'blur'});
       * ```
       *
       * ### Adding or removing controls from a form array
       *
       * To change the controls in the array, use the `push`, `insert`, `removeAt` or `clear` methods
       * in `FormArray` itself. These methods ensure the controls are properly tracked in the
       * form's hierarchy. Do not modify the array of `AbstractControl`s used to instantiate
       * the `FormArray` directly, as that result in strange and unexpected behavior such
       * as broken change detection.
       *
       * @publicApi
       */


      var FormArray = /*#__PURE__*/function (_AbstractControl3) {
        _inherits(FormArray, _AbstractControl3);

        var _super7 = _createSuper(FormArray);

        /**
         * Creates a new `FormArray` instance.
         *
         * @param controls An array of child controls. Each child control is given an index
         * where it is registered.
         *
         * @param validatorOrOpts A synchronous validator function, or an array of
         * such functions, or an `AbstractControlOptions` object that contains validation functions
         * and a validation trigger.
         *
         * @param asyncValidator A single async validator or array of async validator functions
         *
         */
        function FormArray(controls, validatorOrOpts, asyncValidator) {
          var _this16;

          _classCallCheck(this, FormArray);

          _this16 = _super7.call(this, pickValidators(validatorOrOpts), pickAsyncValidators(asyncValidator, validatorOrOpts));
          _this16.controls = controls;

          _this16._initObservables();

          _this16._setUpdateStrategy(validatorOrOpts);

          _this16._setUpControls();

          _this16.updateValueAndValidity({
            onlySelf: true,
            // If `asyncValidator` is present, it will trigger control status change from `PENDING` to
            // `VALID` or `INVALID`.
            // The status should be broadcasted via the `statusChanges` observable, so we set `emitEvent`
            // to `true` to allow that during the control creation process.
            emitEvent: !!asyncValidator
          });

          return _this16;
        }
        /**
         * Get the `AbstractControl` at the given `index` in the array.
         *
         * @param index Index in the array to retrieve the control
         */


        _createClass(FormArray, [{
          key: "at",
          value: function at(index) {
            return this.controls[index];
          }
          /**
           * Insert a new `AbstractControl` at the end of the array.
           *
           * @param control Form control to be inserted
           */

        }, {
          key: "push",
          value: function push(control) {
            this.controls.push(control);

            this._registerControl(control);

            this.updateValueAndValidity();

            this._onCollectionChange();
          }
          /**
           * Insert a new `AbstractControl` at the given `index` in the array.
           *
           * @param index Index in the array to insert the control
           * @param control Form control to be inserted
           */

        }, {
          key: "insert",
          value: function insert(index, control) {
            this.controls.splice(index, 0, control);

            this._registerControl(control);

            this.updateValueAndValidity();
          }
          /**
           * Remove the control at the given `index` in the array.
           *
           * @param index Index in the array to remove the control
           */

        }, {
          key: "removeAt",
          value: function removeAt(index) {
            if (this.controls[index]) this.controls[index]._registerOnCollectionChange(function () {});
            this.controls.splice(index, 1);
            this.updateValueAndValidity();
          }
          /**
           * Replace an existing control.
           *
           * @param index Index in the array to replace the control
           * @param control The `AbstractControl` control to replace the existing control
           */

        }, {
          key: "setControl",
          value: function setControl(index, control) {
            if (this.controls[index]) this.controls[index]._registerOnCollectionChange(function () {});
            this.controls.splice(index, 1);

            if (control) {
              this.controls.splice(index, 0, control);

              this._registerControl(control);
            }

            this.updateValueAndValidity();

            this._onCollectionChange();
          }
          /**
           * Length of the control array.
           */

        }, {
          key: "length",
          get: function get() {
            return this.controls.length;
          }
          /**
           * Sets the value of the `FormArray`. It accepts an array that matches
           * the structure of the control.
           *
           * This method performs strict checks, and throws an error if you try
           * to set the value of a control that doesn't exist or if you exclude the
           * value of a control.
           *
           * @usageNotes
           * ### Set the values for the controls in the form array
           *
           * ```
           * const arr = new FormArray([
           *   new FormControl(),
           *   new FormControl()
           * ]);
           * console.log(arr.value);   // [null, null]
           *
           * arr.setValue(['Nancy', 'Drew']);
           * console.log(arr.value);   // ['Nancy', 'Drew']
           * ```
           *
           * @param value Array of values for the controls
           * @param options Configure options that determine how the control propagates changes and
           * emits events after the value changes
           *
           * * `onlySelf`: When true, each change only affects this control, and not its parent. Default
           * is false.
           * * `emitEvent`: When true or not supplied (the default), both the `statusChanges` and
           * `valueChanges`
           * observables emit events with the latest status and value when the control value is updated.
           * When false, no events are emitted.
           * The configuration options are passed to the {@link AbstractControl#updateValueAndValidity
           * updateValueAndValidity} method.
           */

        }, {
          key: "setValue",
          value: function setValue(value) {
            var _this17 = this;

            var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

            this._checkAllValuesPresent(value);

            value.forEach(function (newValue, index) {
              _this17._throwIfControlMissing(index);

              _this17.at(index).setValue(newValue, {
                onlySelf: true,
                emitEvent: options.emitEvent
              });
            });
            this.updateValueAndValidity(options);
          }
          /**
           * Patches the value of the `FormArray`. It accepts an array that matches the
           * structure of the control, and does its best to match the values to the correct
           * controls in the group.
           *
           * It accepts both super-sets and sub-sets of the array without throwing an error.
           *
           * @usageNotes
           * ### Patch the values for controls in a form array
           *
           * ```
           * const arr = new FormArray([
           *    new FormControl(),
           *    new FormControl()
           * ]);
           * console.log(arr.value);   // [null, null]
           *
           * arr.patchValue(['Nancy']);
           * console.log(arr.value);   // ['Nancy', null]
           * ```
           *
           * @param value Array of latest values for the controls
           * @param options Configure options that determine how the control propagates changes and
           * emits events after the value changes
           *
           * * `onlySelf`: When true, each change only affects this control, and not its parent. Default
           * is false.
           * * `emitEvent`: When true or not supplied (the default), both the `statusChanges` and
           * `valueChanges` observables emit events with the latest status and value when the control value
           * is updated. When false, no events are emitted. The configuration options are passed to
           * the {@link AbstractControl#updateValueAndValidity updateValueAndValidity} method.
           */

        }, {
          key: "patchValue",
          value: function patchValue(value) {
            var _this18 = this;

            var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
            // Even though the `value` argument type doesn't allow `null` and `undefined` values, the
            // `patchValue` can be called recursively and inner data structures might have these values, so
            // we just ignore such cases when a field containing FormArray instance receives `null` or
            // `undefined` as a value.
            if (value == null
            /* both `null` and `undefined` */
            ) return;
            value.forEach(function (newValue, index) {
              if (_this18.at(index)) {
                _this18.at(index).patchValue(newValue, {
                  onlySelf: true,
                  emitEvent: options.emitEvent
                });
              }
            });
            this.updateValueAndValidity(options);
          }
          /**
           * Resets the `FormArray` and all descendants are marked `pristine` and `untouched`, and the
           * value of all descendants to null or null maps.
           *
           * You reset to a specific form state by passing in an array of states
           * that matches the structure of the control. The state is a standalone value
           * or a form state object with both a value and a disabled status.
           *
           * @usageNotes
           * ### Reset the values in a form array
           *
           * ```ts
           * const arr = new FormArray([
           *    new FormControl(),
           *    new FormControl()
           * ]);
           * arr.reset(['name', 'last name']);
           *
           * console.log(this.arr.value);  // ['name', 'last name']
           * ```
           *
           * ### Reset the values in a form array and the disabled status for the first control
           *
           * ```
           * this.arr.reset([
           *   {value: 'name', disabled: true},
           *   'last'
           * ]);
           *
           * console.log(this.arr.value);  // ['name', 'last name']
           * console.log(this.arr.get(0).status);  // 'DISABLED'
           * ```
           *
           * @param value Array of values for the controls
           * @param options Configure options that determine how the control propagates changes and
           * emits events after the value changes
           *
           * * `onlySelf`: When true, each change only affects this control, and not its parent. Default
           * is false.
           * * `emitEvent`: When true or not supplied (the default), both the `statusChanges` and
           * `valueChanges`
           * observables emit events with the latest status and value when the control is reset.
           * When false, no events are emitted.
           * The configuration options are passed to the {@link AbstractControl#updateValueAndValidity
           * updateValueAndValidity} method.
           */

        }, {
          key: "reset",
          value: function reset() {
            var value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
            var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

            this._forEachChild(function (control, index) {
              control.reset(value[index], {
                onlySelf: true,
                emitEvent: options.emitEvent
              });
            });

            this._updatePristine(options);

            this._updateTouched(options);

            this.updateValueAndValidity(options);
          }
          /**
           * The aggregate value of the array, including any disabled controls.
           *
           * Reports all values regardless of disabled status.
           * For enabled controls only, the `value` property is the best way to get the value of the array.
           */

        }, {
          key: "getRawValue",
          value: function getRawValue() {
            return this.controls.map(function (control) {
              return control instanceof FormControl ? control.value : control.getRawValue();
            });
          }
          /**
           * Remove all controls in the `FormArray`.
           *
           * @usageNotes
           * ### Remove all elements from a FormArray
           *
           * ```ts
           * const arr = new FormArray([
           *    new FormControl(),
           *    new FormControl()
           * ]);
           * console.log(arr.length);  // 2
           *
           * arr.clear();
           * console.log(arr.length);  // 0
           * ```
           *
           * It's a simpler and more efficient alternative to removing all elements one by one:
           *
           * ```ts
           * const arr = new FormArray([
           *    new FormControl(),
           *    new FormControl()
           * ]);
           *
           * while (arr.length) {
           *    arr.removeAt(0);
           * }
           * ```
           */

        }, {
          key: "clear",
          value: function clear() {
            if (this.controls.length < 1) return;

            this._forEachChild(function (control) {
              return control._registerOnCollectionChange(function () {});
            });

            this.controls.splice(0);
            this.updateValueAndValidity();
          }
          /** @internal */

        }, {
          key: "_syncPendingControls",
          value: function _syncPendingControls() {
            var subtreeUpdated = this.controls.reduce(function (updated, child) {
              return child._syncPendingControls() ? true : updated;
            }, false);
            if (subtreeUpdated) this.updateValueAndValidity({
              onlySelf: true
            });
            return subtreeUpdated;
          }
          /** @internal */

        }, {
          key: "_throwIfControlMissing",
          value: function _throwIfControlMissing(index) {
            if (!this.controls.length) {
              throw new Error("\n        There are no form controls registered with this array yet. If you're using ngModel,\n        you may want to check next tick (e.g. use setTimeout).\n      ");
            }

            if (!this.at(index)) {
              throw new Error("Cannot find form control at index ".concat(index));
            }
          }
          /** @internal */

        }, {
          key: "_forEachChild",
          value: function _forEachChild(cb) {
            this.controls.forEach(function (control, index) {
              cb(control, index);
            });
          }
          /** @internal */

        }, {
          key: "_updateValue",
          value: function _updateValue() {
            var _this19 = this;

            this.value = this.controls.filter(function (control) {
              return control.enabled || _this19.disabled;
            }).map(function (control) {
              return control.value;
            });
          }
          /** @internal */

        }, {
          key: "_anyControls",
          value: function _anyControls(condition) {
            return this.controls.some(function (control) {
              return control.enabled && condition(control);
            });
          }
          /** @internal */

        }, {
          key: "_setUpControls",
          value: function _setUpControls() {
            var _this20 = this;

            this._forEachChild(function (control) {
              return _this20._registerControl(control);
            });
          }
          /** @internal */

        }, {
          key: "_checkAllValuesPresent",
          value: function _checkAllValuesPresent(value) {
            this._forEachChild(function (control, i) {
              if (value[i] === undefined) {
                throw new Error("Must supply a value for form control at index: ".concat(i, "."));
              }
            });
          }
          /** @internal */

        }, {
          key: "_allControlsDisabled",
          value: function _allControlsDisabled() {
            var _iterator = _createForOfIteratorHelper(this.controls),
                _step;

            try {
              for (_iterator.s(); !(_step = _iterator.n()).done;) {
                var control = _step.value;
                if (control.enabled) return false;
              }
            } catch (err) {
              _iterator.e(err);
            } finally {
              _iterator.f();
            }

            return this.controls.length > 0 || this.disabled;
          }
        }, {
          key: "_registerControl",
          value: function _registerControl(control) {
            control.setParent(this);

            control._registerOnCollectionChange(this._onCollectionChange);
          }
        }]);

        return FormArray;
      }(AbstractControl);
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */


      var formDirectiveProvider = {
        provide: ControlContainer,
        useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(function () {
          return NgForm;
        })
      };

      var ɵ0 = function ɵ0() {
        return Promise.resolve(null);
      };

      var resolvedPromise = ɵ0();
      /**
       * @description
       * Creates a top-level `FormGroup` instance and binds it to a form
       * to track aggregate form value and validation status.
       *
       * As soon as you import the `FormsModule`, this directive becomes active by default on
       * all `<form>` tags.  You don't need to add a special selector.
       *
       * You optionally export the directive into a local template variable using `ngForm` as the key
       * (ex: `#myForm="ngForm"`). This is optional, but useful.  Many properties from the underlying
       * `FormGroup` instance are duplicated on the directive itself, so a reference to it
       * gives you access to the aggregate value and validity status of the form, as well as
       * user interaction properties like `dirty` and `touched`.
       *
       * To register child controls with the form, use `NgModel` with a `name`
       * attribute. You may use `NgModelGroup` to create sub-groups within the form.
       *
       * If necessary, listen to the directive's `ngSubmit` event to be notified when the user has
       * triggered a form submission. The `ngSubmit` event emits the original form
       * submission event.
       *
       * In template driven forms, all `<form>` tags are automatically tagged as `NgForm`.
       * To import the `FormsModule` but skip its usage in some forms,
       * for example, to use native HTML5 validation, add the `ngNoForm` and the `<form>`
       * tags won't create an `NgForm` directive. In reactive forms, using `ngNoForm` is
       * unnecessary because the `<form>` tags are inert. In that case, you would
       * refrain from using the `formGroup` directive.
       *
       * @usageNotes
       *
       * ### Listening for form submission
       *
       * The following example shows how to capture the form values from the "ngSubmit" event.
       *
       * {@example forms/ts/simpleForm/simple_form_example.ts region='Component'}
       *
       * ### Setting the update options
       *
       * The following example shows you how to change the "updateOn" option from its default using
       * ngFormOptions.
       *
       * ```html
       * <form [ngFormOptions]="{updateOn: 'blur'}">
       *    <input name="one" ngModel>  <!-- this ngModel will update on blur -->
       * </form>
       * ```
       *
       * ### Native DOM validation UI
       *
       * In order to prevent the native DOM form validation UI from interfering with Angular's form
       * validation, Angular automatically adds the `novalidate` attribute on any `<form>` whenever
       * `FormModule` or `ReactiveFormModule` are imported into the application.
       * If you want to explicitly enable native DOM validation UI with Angular forms, you can add the
       * `ngNativeValidate` attribute to the `<form>` element:
       *
       * ```html
       * <form ngNativeValidate>
       *   ...
       * </form>
       * ```
       *
       * @ngModule FormsModule
       * @publicApi
       */

      var NgForm = /*#__PURE__*/function (_ControlContainer) {
        _inherits(NgForm, _ControlContainer);

        var _super8 = _createSuper(NgForm);

        function NgForm(validators, asyncValidators) {
          var _this21;

          _classCallCheck(this, NgForm);

          _this21 = _super8.call(this);
          /**
           * @description
           * Returns whether the form submission has been triggered.
           */

          _this21.submitted = false;
          _this21._directives = [];
          /**
           * @description
           * Event emitter for the "ngSubmit" event
           */

          _this21.ngSubmit = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
          _this21.form = new FormGroup({}, composeValidators(validators), composeAsyncValidators(asyncValidators));
          return _this21;
        }
        /** @nodoc */


        _createClass(NgForm, [{
          key: "ngAfterViewInit",
          value: function ngAfterViewInit() {
            this._setUpdateStrategy();
          }
          /**
           * @description
           * The directive instance.
           */

        }, {
          key: "formDirective",
          get: function get() {
            return this;
          }
          /**
           * @description
           * The internal `FormGroup` instance.
           */

        }, {
          key: "control",
          get: function get() {
            return this.form;
          }
          /**
           * @description
           * Returns an array representing the path to this group. Because this directive
           * always lives at the top level of a form, it is always an empty array.
           */

        }, {
          key: "path",
          get: function get() {
            return [];
          }
          /**
           * @description
           * Returns a map of the controls in this group.
           */

        }, {
          key: "controls",
          get: function get() {
            return this.form.controls;
          }
          /**
           * @description
           * Method that sets up the control directive in this group, re-calculates its value
           * and validity, and adds the instance to the internal list of directives.
           *
           * @param dir The `NgModel` directive instance.
           */

        }, {
          key: "addControl",
          value: function addControl(dir) {
            var _this22 = this;

            resolvedPromise.then(function () {
              var container = _this22._findContainer(dir.path);

              dir.control = container.registerControl(dir.name, dir.control);
              setUpControl(dir.control, dir);
              dir.control.updateValueAndValidity({
                emitEvent: false
              });

              _this22._directives.push(dir);
            });
          }
          /**
           * @description
           * Retrieves the `FormControl` instance from the provided `NgModel` directive.
           *
           * @param dir The `NgModel` directive instance.
           */

        }, {
          key: "getControl",
          value: function getControl(dir) {
            return this.form.get(dir.path);
          }
          /**
           * @description
           * Removes the `NgModel` instance from the internal list of directives
           *
           * @param dir The `NgModel` directive instance.
           */

        }, {
          key: "removeControl",
          value: function removeControl(dir) {
            var _this23 = this;

            resolvedPromise.then(function () {
              var container = _this23._findContainer(dir.path);

              if (container) {
                container.removeControl(dir.name);
              }

              removeListItem(_this23._directives, dir);
            });
          }
          /**
           * @description
           * Adds a new `NgModelGroup` directive instance to the form.
           *
           * @param dir The `NgModelGroup` directive instance.
           */

        }, {
          key: "addFormGroup",
          value: function addFormGroup(dir) {
            var _this24 = this;

            resolvedPromise.then(function () {
              var container = _this24._findContainer(dir.path);

              var group = new FormGroup({});
              setUpFormContainer(group, dir);
              container.registerControl(dir.name, group);
              group.updateValueAndValidity({
                emitEvent: false
              });
            });
          }
          /**
           * @description
           * Removes the `NgModelGroup` directive instance from the form.
           *
           * @param dir The `NgModelGroup` directive instance.
           */

        }, {
          key: "removeFormGroup",
          value: function removeFormGroup(dir) {
            var _this25 = this;

            resolvedPromise.then(function () {
              var container = _this25._findContainer(dir.path);

              if (container) {
                container.removeControl(dir.name);
              }
            });
          }
          /**
           * @description
           * Retrieves the `FormGroup` for a provided `NgModelGroup` directive instance
           *
           * @param dir The `NgModelGroup` directive instance.
           */

        }, {
          key: "getFormGroup",
          value: function getFormGroup(dir) {
            return this.form.get(dir.path);
          }
          /**
           * Sets the new value for the provided `NgControl` directive.
           *
           * @param dir The `NgControl` directive instance.
           * @param value The new value for the directive's control.
           */

        }, {
          key: "updateModel",
          value: function updateModel(dir, value) {
            var _this26 = this;

            resolvedPromise.then(function () {
              var ctrl = _this26.form.get(dir.path);

              ctrl.setValue(value);
            });
          }
          /**
           * @description
           * Sets the value for this `FormGroup`.
           *
           * @param value The new value
           */

        }, {
          key: "setValue",
          value: function setValue(value) {
            this.control.setValue(value);
          }
          /**
           * @description
           * Method called when the "submit" event is triggered on the form.
           * Triggers the `ngSubmit` emitter to emit the "submit" event as its payload.
           *
           * @param $event The "submit" event object
           */

        }, {
          key: "onSubmit",
          value: function onSubmit($event) {
            this.submitted = true;
            syncPendingControls(this.form, this._directives);
            this.ngSubmit.emit($event);
            return false;
          }
          /**
           * @description
           * Method called when the "reset" event is triggered on the form.
           */

        }, {
          key: "onReset",
          value: function onReset() {
            this.resetForm();
          }
          /**
           * @description
           * Resets the form to an initial value and resets its submitted status.
           *
           * @param value The new value for the form.
           */

        }, {
          key: "resetForm",
          value: function resetForm() {
            var value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : undefined;
            this.form.reset(value);
            this.submitted = false;
          }
        }, {
          key: "_setUpdateStrategy",
          value: function _setUpdateStrategy() {
            if (this.options && this.options.updateOn != null) {
              this.form._updateOn = this.options.updateOn;
            }
          }
          /** @internal */

        }, {
          key: "_findContainer",
          value: function _findContainer(path) {
            path.pop();
            return path.length ? this.form.get(path) : this.form;
          }
        }]);

        return NgForm;
      }(ControlContainer);

      NgForm.ɵfac = function NgForm_Factory(t) {
        return new (t || NgForm)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](NG_VALIDATORS, 10), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](NG_ASYNC_VALIDATORS, 10));
      };

      NgForm.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
        type: NgForm,
        selectors: [["form", 3, "ngNoForm", "", 3, "formGroup", ""], ["ng-form"], ["", "ngForm", ""]],
        hostBindings: function NgForm_HostBindings(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("submit", function NgForm_submit_HostBindingHandler($event) {
              return ctx.onSubmit($event);
            })("reset", function NgForm_reset_HostBindingHandler() {
              return ctx.onReset();
            });
          }
        },
        inputs: {
          options: ["ngFormOptions", "options"]
        },
        outputs: {
          ngSubmit: "ngSubmit"
        },
        exportAs: ["ngForm"],
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([formDirectiveProvider]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]]
      });

      NgForm.ctorParameters = function () {
        return [{
          type: Array,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Self"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
            args: [NG_VALIDATORS]
          }]
        }, {
          type: Array,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Self"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
            args: [NG_ASYNC_VALIDATORS]
          }]
        }];
      };

      NgForm.propDecorators = {
        options: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
          args: ['ngFormOptions']
        }]
      };

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NgForm, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
          args: [{
            selector: 'form:not([ngNoForm]):not([formGroup]),ng-form,[ngForm]',
            providers: [formDirectiveProvider],
            host: {
              '(submit)': 'onSubmit($event)',
              '(reset)': 'onReset()'
            },
            outputs: ['ngSubmit'],
            exportAs: 'ngForm'
          }]
        }], function () {
          return [{
            type: Array,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
            }, {
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Self"]
            }, {
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
              args: [NG_VALIDATORS]
            }]
          }, {
            type: Array,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
            }, {
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Self"]
            }, {
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
              args: [NG_ASYNC_VALIDATORS]
            }]
          }];
        }, {
          options: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['ngFormOptions']
          }]
        });
      })();
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /**
       * @description
       * A base class for code shared between the `NgModelGroup` and `FormGroupName` directives.
       *
       * @publicApi
       */


      var AbstractFormGroupDirective = /*#__PURE__*/function (_ControlContainer2) {
        _inherits(AbstractFormGroupDirective, _ControlContainer2);

        var _super9 = _createSuper(AbstractFormGroupDirective);

        function AbstractFormGroupDirective() {
          _classCallCheck(this, AbstractFormGroupDirective);

          return _super9.apply(this, arguments);
        }

        _createClass(AbstractFormGroupDirective, [{
          key: "ngOnInit",
          value:
          /** @nodoc */
          function ngOnInit() {
            this._checkParentType(); // Register the group with its parent group.


            this.formDirective.addFormGroup(this);
          }
          /** @nodoc */

        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            if (this.formDirective) {
              // Remove the group from its parent group.
              this.formDirective.removeFormGroup(this);
            }
          }
          /**
           * @description
           * The `FormGroup` bound to this directive.
           */

        }, {
          key: "control",
          get: function get() {
            return this.formDirective.getFormGroup(this);
          }
          /**
           * @description
           * The path to this group from the top-level directive.
           */

        }, {
          key: "path",
          get: function get() {
            return controlPath(this.name == null ? this.name : this.name.toString(), this._parent);
          }
          /**
           * @description
           * The top-level directive for this group if present, otherwise null.
           */

        }, {
          key: "formDirective",
          get: function get() {
            return this._parent ? this._parent.formDirective : null;
          }
          /** @internal */

        }, {
          key: "_checkParentType",
          value: function _checkParentType() {}
        }]);

        return AbstractFormGroupDirective;
      }(ControlContainer);

      AbstractFormGroupDirective.ɵfac = function AbstractFormGroupDirective_Factory(t) {
        return ɵAbstractFormGroupDirective_BaseFactory(t || AbstractFormGroupDirective);
      };

      AbstractFormGroupDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
        type: AbstractFormGroupDirective,
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]]
      });

      var ɵAbstractFormGroupDirective_BaseFactory = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"](AbstractFormGroupDirective);

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AbstractFormGroupDirective, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"]
        }], null, null);
      })();
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */


      var TemplateDrivenErrors = /*#__PURE__*/function () {
        function TemplateDrivenErrors() {
          _classCallCheck(this, TemplateDrivenErrors);
        }

        _createClass(TemplateDrivenErrors, null, [{
          key: "modelParentException",
          value: function modelParentException() {
            throw new Error("\n      ngModel cannot be used to register form controls with a parent formGroup directive.  Try using\n      formGroup's partner directive \"formControlName\" instead.  Example:\n\n      ".concat(FormErrorExamples.formControlName, "\n\n      Or, if you'd like to avoid registering this form control, indicate that it's standalone in ngModelOptions:\n\n      Example:\n\n      ").concat(FormErrorExamples.ngModelWithFormGroup));
          }
        }, {
          key: "formGroupNameException",
          value: function formGroupNameException() {
            throw new Error("\n      ngModel cannot be used to register form controls with a parent formGroupName or formArrayName directive.\n\n      Option 1: Use formControlName instead of ngModel (reactive strategy):\n\n      ".concat(FormErrorExamples.formGroupName, "\n\n      Option 2:  Update ngModel's parent be ngModelGroup (template-driven strategy):\n\n      ").concat(FormErrorExamples.ngModelGroup));
          }
        }, {
          key: "missingNameException",
          value: function missingNameException() {
            throw new Error("If ngModel is used within a form tag, either the name attribute must be set or the form\n      control must be defined as 'standalone' in ngModelOptions.\n\n      Example 1: <input [(ngModel)]=\"person.firstName\" name=\"first\">\n      Example 2: <input [(ngModel)]=\"person.firstName\" [ngModelOptions]=\"{standalone: true}\">");
          }
        }, {
          key: "modelGroupParentException",
          value: function modelGroupParentException() {
            throw new Error("\n      ngModelGroup cannot be used with a parent formGroup directive.\n\n      Option 1: Use formGroupName instead of ngModelGroup (reactive strategy):\n\n      ".concat(FormErrorExamples.formGroupName, "\n\n      Option 2:  Use a regular form tag instead of the formGroup directive (template-driven strategy):\n\n      ").concat(FormErrorExamples.ngModelGroup));
          }
        }]);

        return TemplateDrivenErrors;
      }();
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */


      var modelGroupProvider = {
        provide: ControlContainer,
        useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(function () {
          return NgModelGroup;
        })
      };
      /**
       * @description
       * Creates and binds a `FormGroup` instance to a DOM element.
       *
       * This directive can only be used as a child of `NgForm` (within `<form>` tags).
       *
       * Use this directive to validate a sub-group of your form separately from the
       * rest of your form, or if some values in your domain model make more sense
       * to consume together in a nested object.
       *
       * Provide a name for the sub-group and it will become the key
       * for the sub-group in the form's full value. If you need direct access, export the directive into
       * a local template variable using `ngModelGroup` (ex: `#myGroup="ngModelGroup"`).
       *
       * @usageNotes
       *
       * ### Consuming controls in a grouping
       *
       * The following example shows you how to combine controls together in a sub-group
       * of the form.
       *
       * {@example forms/ts/ngModelGroup/ng_model_group_example.ts region='Component'}
       *
       * @ngModule FormsModule
       * @publicApi
       */

      var NgModelGroup = /*#__PURE__*/function (_AbstractFormGroupDir) {
        _inherits(NgModelGroup, _AbstractFormGroupDir);

        var _super10 = _createSuper(NgModelGroup);

        function NgModelGroup(parent, validators, asyncValidators) {
          var _this27;

          _classCallCheck(this, NgModelGroup);

          _this27 = _super10.call(this);
          _this27._parent = parent;

          _this27._setValidators(validators);

          _this27._setAsyncValidators(asyncValidators);

          return _this27;
        }
        /** @internal */


        _createClass(NgModelGroup, [{
          key: "_checkParentType",
          value: function _checkParentType() {
            if (!(this._parent instanceof NgModelGroup) && !(this._parent instanceof NgForm) && (typeof ngDevMode === 'undefined' || ngDevMode)) {
              TemplateDrivenErrors.modelGroupParentException();
            }
          }
        }]);

        return NgModelGroup;
      }(AbstractFormGroupDirective);

      NgModelGroup.ɵfac = function NgModelGroup_Factory(t) {
        return new (t || NgModelGroup)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ControlContainer, 5), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](NG_VALIDATORS, 10), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](NG_ASYNC_VALIDATORS, 10));
      };

      NgModelGroup.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
        type: NgModelGroup,
        selectors: [["", "ngModelGroup", ""]],
        inputs: {
          name: ["ngModelGroup", "name"]
        },
        exportAs: ["ngModelGroup"],
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([modelGroupProvider]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]]
      });

      NgModelGroup.ctorParameters = function () {
        return [{
          type: ControlContainer,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Host"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["SkipSelf"]
          }]
        }, {
          type: Array,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Self"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
            args: [NG_VALIDATORS]
          }]
        }, {
          type: Array,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Self"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
            args: [NG_ASYNC_VALIDATORS]
          }]
        }];
      };

      NgModelGroup.propDecorators = {
        name: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
          args: ['ngModelGroup']
        }]
      };

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NgModelGroup, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
          args: [{
            selector: '[ngModelGroup]',
            providers: [modelGroupProvider],
            exportAs: 'ngModelGroup'
          }]
        }], function () {
          return [{
            type: ControlContainer,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Host"]
            }, {
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["SkipSelf"]
            }]
          }, {
            type: Array,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
            }, {
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Self"]
            }, {
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
              args: [NG_VALIDATORS]
            }]
          }, {
            type: Array,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
            }, {
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Self"]
            }, {
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
              args: [NG_ASYNC_VALIDATORS]
            }]
          }];
        }, {
          name: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['ngModelGroup']
          }]
        });
      })();
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */


      var formControlBinding = {
        provide: NgControl,
        useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(function () {
          return NgModel;
        })
      };

      var ɵ0$1 = function ɵ0$1() {
        return Promise.resolve(null);
      };
      /**
       * `ngModel` forces an additional change detection run when its inputs change:
       * E.g.:
       * ```
       * <div>{{myModel.valid}}</div>
       * <input [(ngModel)]="myValue" #myModel="ngModel">
       * ```
       * I.e. `ngModel` can export itself on the element and then be used in the template.
       * Normally, this would result in expressions before the `input` that use the exported directive
       * to have an old value as they have been
       * dirty checked before. As this is a very common case for `ngModel`, we added this second change
       * detection run.
       *
       * Notes:
       * - this is just one extra run no matter how many `ngModel`s have been changed.
       * - this is a general problem when using `exportAs` for directives!
       */


      var resolvedPromise$1 = ɵ0$1();
      /**
       * @description
       * Creates a `FormControl` instance from a domain model and binds it
       * to a form control element.
       *
       * The `FormControl` instance tracks the value, user interaction, and
       * validation status of the control and keeps the view synced with the model. If used
       * within a parent form, the directive also registers itself with the form as a child
       * control.
       *
       * This directive is used by itself or as part of a larger form. Use the
       * `ngModel` selector to activate it.
       *
       * It accepts a domain model as an optional `Input`. If you have a one-way binding
       * to `ngModel` with `[]` syntax, changing the domain model's value in the component
       * class sets the value in the view. If you have a two-way binding with `[()]` syntax
       * (also known as 'banana-in-a-box syntax'), the value in the UI always syncs back to
       * the domain model in your class.
       *
       * To inspect the properties of the associated `FormControl` (like the validity state),
       * export the directive into a local template variable using `ngModel` as the key (ex:
       * `#myVar="ngModel"`). You can then access the control using the directive's `control` property.
       * However, the most commonly used properties (like `valid` and `dirty`) also exist on the control
       * for direct access. See a full list of properties directly available in
       * `AbstractControlDirective`.
       *
       * @see `RadioControlValueAccessor`
       * @see `SelectControlValueAccessor`
       *
       * @usageNotes
       *
       * ### Using ngModel on a standalone control
       *
       * The following examples show a simple standalone control using `ngModel`:
       *
       * {@example forms/ts/simpleNgModel/simple_ng_model_example.ts region='Component'}
       *
       * When using the `ngModel` within `<form>` tags, you'll also need to supply a `name` attribute
       * so that the control can be registered with the parent form under that name.
       *
       * In the context of a parent form, it's often unnecessary to include one-way or two-way binding,
       * as the parent form syncs the value for you. You access its properties by exporting it into a
       * local template variable using `ngForm` such as (`#f="ngForm"`). Use the variable where
       * needed on form submission.
       *
       * If you do need to populate initial values into your form, using a one-way binding for
       * `ngModel` tends to be sufficient as long as you use the exported form's value rather
       * than the domain model's value on submit.
       *
       * ### Using ngModel within a form
       *
       * The following example shows controls using `ngModel` within a form:
       *
       * {@example forms/ts/simpleForm/simple_form_example.ts region='Component'}
       *
       * ### Using a standalone ngModel within a group
       *
       * The following example shows you how to use a standalone ngModel control
       * within a form. This controls the display of the form, but doesn't contain form data.
       *
       * ```html
       * <form>
       *   <input name="login" ngModel placeholder="Login">
       *   <input type="checkbox" ngModel [ngModelOptions]="{standalone: true}"> Show more options?
       * </form>
       * <!-- form value: {login: ''} -->
       * ```
       *
       * ### Setting the ngModel `name` attribute through options
       *
       * The following example shows you an alternate way to set the name attribute. Here,
       * an attribute identified as name is used within a custom form control component. To still be able
       * to specify the NgModel's name, you must specify it using the `ngModelOptions` input instead.
       *
       * ```html
       * <form>
       *   <my-custom-form-control name="Nancy" ngModel [ngModelOptions]="{name: 'user'}">
       *   </my-custom-form-control>
       * </form>
       * <!-- form value: {user: ''} -->
       * ```
       *
       * @ngModule FormsModule
       * @publicApi
       */

      var NgModel = /*#__PURE__*/function (_NgControl) {
        _inherits(NgModel, _NgControl);

        var _super11 = _createSuper(NgModel);

        function NgModel(parent, validators, asyncValidators, valueAccessors) {
          var _this28;

          _classCallCheck(this, NgModel);

          _this28 = _super11.call(this);
          _this28.control = new FormControl();
          /** @internal */

          _this28._registered = false;
          /**
           * @description
           * Event emitter for producing the `ngModelChange` event after
           * the view model updates.
           */

          _this28.update = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
          _this28._parent = parent;

          _this28._setValidators(validators);

          _this28._setAsyncValidators(asyncValidators);

          _this28.valueAccessor = selectValueAccessor(_assertThisInitialized(_this28), valueAccessors);
          return _this28;
        }
        /** @nodoc */


        _createClass(NgModel, [{
          key: "ngOnChanges",
          value: function ngOnChanges(changes) {
            this._checkForErrors();

            if (!this._registered) this._setUpControl();

            if ('isDisabled' in changes) {
              this._updateDisabled(changes);
            }

            if (isPropertyUpdated(changes, this.viewModel)) {
              this._updateValue(this.model);

              this.viewModel = this.model;
            }
          }
          /** @nodoc */

        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this.formDirective && this.formDirective.removeControl(this);
          }
          /**
           * @description
           * Returns an array that represents the path from the top-level form to this control.
           * Each index is the string name of the control on that level.
           */

        }, {
          key: "path",
          get: function get() {
            return this._parent ? controlPath(this.name, this._parent) : [this.name];
          }
          /**
           * @description
           * The top-level directive for this control if present, otherwise null.
           */

        }, {
          key: "formDirective",
          get: function get() {
            return this._parent ? this._parent.formDirective : null;
          }
          /**
           * @description
           * Sets the new value for the view model and emits an `ngModelChange` event.
           *
           * @param newValue The new value emitted by `ngModelChange`.
           */

        }, {
          key: "viewToModelUpdate",
          value: function viewToModelUpdate(newValue) {
            this.viewModel = newValue;
            this.update.emit(newValue);
          }
        }, {
          key: "_setUpControl",
          value: function _setUpControl() {
            this._setUpdateStrategy();

            this._isStandalone() ? this._setUpStandalone() : this.formDirective.addControl(this);
            this._registered = true;
          }
        }, {
          key: "_setUpdateStrategy",
          value: function _setUpdateStrategy() {
            if (this.options && this.options.updateOn != null) {
              this.control._updateOn = this.options.updateOn;
            }
          }
        }, {
          key: "_isStandalone",
          value: function _isStandalone() {
            return !this._parent || !!(this.options && this.options.standalone);
          }
        }, {
          key: "_setUpStandalone",
          value: function _setUpStandalone() {
            setUpControl(this.control, this);
            this.control.updateValueAndValidity({
              emitEvent: false
            });
          }
        }, {
          key: "_checkForErrors",
          value: function _checkForErrors() {
            if (!this._isStandalone()) {
              this._checkParentType();
            }

            this._checkName();
          }
        }, {
          key: "_checkParentType",
          value: function _checkParentType() {
            if (typeof ngDevMode === 'undefined' || ngDevMode) {
              if (!(this._parent instanceof NgModelGroup) && this._parent instanceof AbstractFormGroupDirective) {
                TemplateDrivenErrors.formGroupNameException();
              } else if (!(this._parent instanceof NgModelGroup) && !(this._parent instanceof NgForm)) {
                TemplateDrivenErrors.modelParentException();
              }
            }
          }
        }, {
          key: "_checkName",
          value: function _checkName() {
            if (this.options && this.options.name) this.name = this.options.name;

            if (!this._isStandalone() && !this.name && (typeof ngDevMode === 'undefined' || ngDevMode)) {
              TemplateDrivenErrors.missingNameException();
            }
          }
        }, {
          key: "_updateValue",
          value: function _updateValue(value) {
            var _this29 = this;

            resolvedPromise$1.then(function () {
              _this29.control.setValue(value, {
                emitViewToModelChange: false
              });
            });
          }
        }, {
          key: "_updateDisabled",
          value: function _updateDisabled(changes) {
            var _this30 = this;

            var disabledValue = changes['isDisabled'].currentValue;
            var isDisabled = disabledValue === '' || disabledValue && disabledValue !== 'false';
            resolvedPromise$1.then(function () {
              if (isDisabled && !_this30.control.disabled) {
                _this30.control.disable();
              } else if (!isDisabled && _this30.control.disabled) {
                _this30.control.enable();
              }
            });
          }
        }]);

        return NgModel;
      }(NgControl);

      NgModel.ɵfac = function NgModel_Factory(t) {
        return new (t || NgModel)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ControlContainer, 9), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](NG_VALIDATORS, 10), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](NG_ASYNC_VALIDATORS, 10), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](NG_VALUE_ACCESSOR, 10));
      };

      NgModel.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
        type: NgModel,
        selectors: [["", "ngModel", "", 3, "formControlName", "", 3, "formControl", ""]],
        inputs: {
          name: "name",
          isDisabled: ["disabled", "isDisabled"],
          model: ["ngModel", "model"],
          options: ["ngModelOptions", "options"]
        },
        outputs: {
          update: "ngModelChange"
        },
        exportAs: ["ngModel"],
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([formControlBinding]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]]
      });

      NgModel.ctorParameters = function () {
        return [{
          type: ControlContainer,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Host"]
          }]
        }, {
          type: Array,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Self"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
            args: [NG_VALIDATORS]
          }]
        }, {
          type: Array,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Self"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
            args: [NG_ASYNC_VALIDATORS]
          }]
        }, {
          type: Array,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Self"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
            args: [NG_VALUE_ACCESSOR]
          }]
        }];
      };

      NgModel.propDecorators = {
        name: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        isDisabled: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
          args: ['disabled']
        }],
        model: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
          args: ['ngModel']
        }],
        options: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
          args: ['ngModelOptions']
        }],
        update: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"],
          args: ['ngModelChange']
        }]
      };

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NgModel, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
          args: [{
            selector: '[ngModel]:not([formControlName]):not([formControl])',
            providers: [formControlBinding],
            exportAs: 'ngModel'
          }]
        }], function () {
          return [{
            type: ControlContainer,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
            }, {
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Host"]
            }]
          }, {
            type: Array,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
            }, {
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Self"]
            }, {
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
              args: [NG_VALIDATORS]
            }]
          }, {
            type: Array,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
            }, {
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Self"]
            }, {
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
              args: [NG_ASYNC_VALIDATORS]
            }]
          }, {
            type: Array,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
            }, {
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Self"]
            }, {
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
              args: [NG_VALUE_ACCESSOR]
            }]
          }];
        }, {
          update: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"],
            args: ['ngModelChange']
          }],
          name: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          isDisabled: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['disabled']
          }],
          model: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['ngModel']
          }],
          options: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['ngModelOptions']
          }]
        });
      })();
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /**
       * @description
       *
       * Adds `novalidate` attribute to all forms by default.
       *
       * `novalidate` is used to disable browser's native form validation.
       *
       * If you want to use native validation with Angular forms, just add `ngNativeValidate` attribute:
       *
       * ```
       * <form ngNativeValidate></form>
       * ```
       *
       * @publicApi
       * @ngModule ReactiveFormsModule
       * @ngModule FormsModule
       */


      var ɵNgNoValidate = function ɵNgNoValidate() {
        _classCallCheck(this, ɵNgNoValidate);
      };

      ɵNgNoValidate.ɵfac = function ɵNgNoValidate_Factory(t) {
        return new (t || ɵNgNoValidate)();
      };

      ɵNgNoValidate.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
        type: ɵNgNoValidate,
        selectors: [["form", 3, "ngNoForm", "", 3, "ngNativeValidate", ""]],
        hostAttrs: ["novalidate", ""]
      });

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ɵNgNoValidate, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
          args: [{
            selector: 'form:not([ngNoForm]):not([ngNativeValidate])',
            host: {
              'novalidate': ''
            }
          }]
        }], null, null);
      })();
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /**
       * Token to provide to turn off the ngModel warning on formControl and formControlName.
       */


      var NG_MODEL_WITH_FORM_CONTROL_WARNING = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('NgModelWithFormControlWarning');
      var formControlBinding$1 = {
        provide: NgControl,
        useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(function () {
          return FormControlDirective;
        })
      };
      /**
       * @description
       * Synchronizes a standalone `FormControl` instance to a form control element.
       *
       * Note that support for using the `ngModel` input property and `ngModelChange` event with reactive
       * form directives was deprecated in Angular v6 and is scheduled for removal in
       * a future version of Angular.
       * For details, see [Deprecated features](guide/deprecations#ngmodel-with-reactive-forms).
       *
       * @see [Reactive Forms Guide](guide/reactive-forms)
       * @see `FormControl`
       * @see `AbstractControl`
       *
       * @usageNotes
       *
       * The following example shows how to register a standalone control and set its value.
       *
       * {@example forms/ts/simpleFormControl/simple_form_control_example.ts region='Component'}
       *
       * @ngModule ReactiveFormsModule
       * @publicApi
       */

      var FormControlDirective = /*#__PURE__*/function (_NgControl2) {
        _inherits(FormControlDirective, _NgControl2);

        var _super12 = _createSuper(FormControlDirective);

        function FormControlDirective(validators, asyncValidators, valueAccessors, _ngModelWarningConfig) {
          var _this31;

          _classCallCheck(this, FormControlDirective);

          _this31 = _super12.call(this);
          _this31._ngModelWarningConfig = _ngModelWarningConfig;
          /** @deprecated as of v6 */

          _this31.update = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
          /**
           * @description
           * Instance property used to track whether an ngModel warning has been sent out for this
           * particular `FormControlDirective` instance. Used to support warning config of "always".
           *
           * @internal
           */

          _this31._ngModelWarningSent = false;

          _this31._setValidators(validators);

          _this31._setAsyncValidators(asyncValidators);

          _this31.valueAccessor = selectValueAccessor(_assertThisInitialized(_this31), valueAccessors);
          return _this31;
        }
        /**
         * @description
         * Triggers a warning in dev mode that this input should not be used with reactive forms.
         */


        _createClass(FormControlDirective, [{
          key: "isDisabled",
          set: function set(isDisabled) {
            if (typeof ngDevMode === 'undefined' || ngDevMode) {
              ReactiveErrors.disabledAttrWarning();
            }
          }
          /** @nodoc */

        }, {
          key: "ngOnChanges",
          value: function ngOnChanges(changes) {
            if (this._isControlChanged(changes)) {
              var previousForm = changes['form'].previousValue;

              if (previousForm) {
                cleanUpControl(previousForm, this,
                /* validateControlPresenceOnChange */
                false);
              }

              setUpControl(this.form, this);

              if (this.control.disabled && this.valueAccessor.setDisabledState) {
                this.valueAccessor.setDisabledState(true);
              }

              this.form.updateValueAndValidity({
                emitEvent: false
              });
            }

            if (isPropertyUpdated(changes, this.viewModel)) {
              if (typeof ngDevMode === 'undefined' || ngDevMode) {
                _ngModelWarning('formControl', FormControlDirective, this, this._ngModelWarningConfig);
              }

              this.form.setValue(this.model);
              this.viewModel = this.model;
            }
          }
          /** @nodoc */

        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            if (this.form) {
              cleanUpControl(this.form, this,
              /* validateControlPresenceOnChange */
              false);
            }
          }
          /**
           * @description
           * Returns an array that represents the path from the top-level form to this control.
           * Each index is the string name of the control on that level.
           */

        }, {
          key: "path",
          get: function get() {
            return [];
          }
          /**
           * @description
           * The `FormControl` bound to this directive.
           */

        }, {
          key: "control",
          get: function get() {
            return this.form;
          }
          /**
           * @description
           * Sets the new value for the view model and emits an `ngModelChange` event.
           *
           * @param newValue The new value for the view model.
           */

        }, {
          key: "viewToModelUpdate",
          value: function viewToModelUpdate(newValue) {
            this.viewModel = newValue;
            this.update.emit(newValue);
          }
        }, {
          key: "_isControlChanged",
          value: function _isControlChanged(changes) {
            return changes.hasOwnProperty('form');
          }
        }]);

        return FormControlDirective;
      }(NgControl);

      FormControlDirective.ɵfac = function FormControlDirective_Factory(t) {
        return new (t || FormControlDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](NG_VALIDATORS, 10), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](NG_ASYNC_VALIDATORS, 10), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](NG_VALUE_ACCESSOR, 10), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](NG_MODEL_WITH_FORM_CONTROL_WARNING, 8));
      };

      FormControlDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
        type: FormControlDirective,
        selectors: [["", "formControl", ""]],
        inputs: {
          isDisabled: ["disabled", "isDisabled"],
          form: ["formControl", "form"],
          model: ["ngModel", "model"]
        },
        outputs: {
          update: "ngModelChange"
        },
        exportAs: ["ngForm"],
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([formControlBinding$1]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]]
      });
      /**
       * @description
       * Static property used to track whether any ngModel warnings have been sent across
       * all instances of FormControlDirective. Used to support warning config of "once".
       *
       * @internal
       */

      FormControlDirective._ngModelWarningSentOnce = false;

      FormControlDirective.ctorParameters = function () {
        return [{
          type: Array,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Self"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
            args: [NG_VALIDATORS]
          }]
        }, {
          type: Array,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Self"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
            args: [NG_ASYNC_VALIDATORS]
          }]
        }, {
          type: Array,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Self"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
            args: [NG_VALUE_ACCESSOR]
          }]
        }, {
          type: String,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
            args: [NG_MODEL_WITH_FORM_CONTROL_WARNING]
          }]
        }];
      };

      FormControlDirective.propDecorators = {
        form: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
          args: ['formControl']
        }],
        isDisabled: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
          args: ['disabled']
        }],
        model: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
          args: ['ngModel']
        }],
        update: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"],
          args: ['ngModelChange']
        }]
      };

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FormControlDirective, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
          args: [{
            selector: '[formControl]',
            providers: [formControlBinding$1],
            exportAs: 'ngForm'
          }]
        }], function () {
          return [{
            type: Array,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
            }, {
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Self"]
            }, {
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
              args: [NG_VALIDATORS]
            }]
          }, {
            type: Array,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
            }, {
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Self"]
            }, {
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
              args: [NG_ASYNC_VALIDATORS]
            }]
          }, {
            type: Array,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
            }, {
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Self"]
            }, {
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
              args: [NG_VALUE_ACCESSOR]
            }]
          }, {
            type: String,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
            }, {
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
              args: [NG_MODEL_WITH_FORM_CONTROL_WARNING]
            }]
          }];
        }, {
          update: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"],
            args: ['ngModelChange']
          }],
          isDisabled: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['disabled']
          }],
          form: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['formControl']
          }],
          model: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['ngModel']
          }]
        });
      })();
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */


      var formDirectiveProvider$1 = {
        provide: ControlContainer,
        useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(function () {
          return FormGroupDirective;
        })
      };
      /**
       * @description
       *
       * Binds an existing `FormGroup` to a DOM element.
       *
       * This directive accepts an existing `FormGroup` instance. It will then use this
       * `FormGroup` instance to match any child `FormControl`, `FormGroup`,
       * and `FormArray` instances to child `FormControlName`, `FormGroupName`,
       * and `FormArrayName` directives.
       *
       * @see [Reactive Forms Guide](guide/reactive-forms)
       * @see `AbstractControl`
       *
       * ### Register Form Group
       *
       * The following example registers a `FormGroup` with first name and last name controls,
       * and listens for the *ngSubmit* event when the button is clicked.
       *
       * {@example forms/ts/simpleFormGroup/simple_form_group_example.ts region='Component'}
       *
       * @ngModule ReactiveFormsModule
       * @publicApi
       */

      var FormGroupDirective = /*#__PURE__*/function (_ControlContainer3) {
        _inherits(FormGroupDirective, _ControlContainer3);

        var _super13 = _createSuper(FormGroupDirective);

        function FormGroupDirective(validators, asyncValidators) {
          var _this32;

          _classCallCheck(this, FormGroupDirective);

          _this32 = _super13.call(this);
          _this32.validators = validators;
          _this32.asyncValidators = asyncValidators;
          /**
           * @description
           * Reports whether the form submission has been triggered.
           */

          _this32.submitted = false;
          /**
           * Callback that should be invoked when controls in FormGroup or FormArray collection change
           * (added or removed). This callback triggers corresponding DOM updates.
           */

          _this32._onCollectionChange = function () {
            return _this32._updateDomValue();
          };
          /**
           * @description
           * Tracks the list of added `FormControlName` instances
           */


          _this32.directives = [];
          /**
           * @description
           * Tracks the `FormGroup` bound to this directive.
           */

          _this32.form = null;
          /**
           * @description
           * Emits an event when the form submission has been triggered.
           */

          _this32.ngSubmit = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();

          _this32._setValidators(validators);

          _this32._setAsyncValidators(asyncValidators);

          return _this32;
        }
        /** @nodoc */


        _createClass(FormGroupDirective, [{
          key: "ngOnChanges",
          value: function ngOnChanges(changes) {
            this._checkFormPresent();

            if (changes.hasOwnProperty('form')) {
              this._updateValidators();

              this._updateDomValue();

              this._updateRegistrations();

              this._oldForm = this.form;
            }
          }
          /** @nodoc */

        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            if (this.form) {
              cleanUpValidators(this.form, this,
              /* handleOnValidatorChange */
              false); // Currently the `onCollectionChange` callback is rewritten each time the
              // `_registerOnCollectionChange` function is invoked. The implication is that cleanup should
              // happen *only* when the `onCollectionChange` callback was set by this directive instance.
              // Otherwise it might cause overriding a callback of some other directive instances. We should
              // consider updating this logic later to make it similar to how `onChange` callbacks are
              // handled, see https://github.com/angular/angular/issues/39732 for additional info.

              if (this.form._onCollectionChange === this._onCollectionChange) {
                this.form._registerOnCollectionChange(function () {});
              }
            }
          }
          /**
           * @description
           * Returns this directive's instance.
           */

        }, {
          key: "formDirective",
          get: function get() {
            return this;
          }
          /**
           * @description
           * Returns the `FormGroup` bound to this directive.
           */

        }, {
          key: "control",
          get: function get() {
            return this.form;
          }
          /**
           * @description
           * Returns an array representing the path to this group. Because this directive
           * always lives at the top level of a form, it always an empty array.
           */

        }, {
          key: "path",
          get: function get() {
            return [];
          }
          /**
           * @description
           * Method that sets up the control directive in this group, re-calculates its value
           * and validity, and adds the instance to the internal list of directives.
           *
           * @param dir The `FormControlName` directive instance.
           */

        }, {
          key: "addControl",
          value: function addControl(dir) {
            var ctrl = this.form.get(dir.path);
            setUpControl(ctrl, dir);
            ctrl.updateValueAndValidity({
              emitEvent: false
            });
            this.directives.push(dir);
            return ctrl;
          }
          /**
           * @description
           * Retrieves the `FormControl` instance from the provided `FormControlName` directive
           *
           * @param dir The `FormControlName` directive instance.
           */

        }, {
          key: "getControl",
          value: function getControl(dir) {
            return this.form.get(dir.path);
          }
          /**
           * @description
           * Removes the `FormControlName` instance from the internal list of directives
           *
           * @param dir The `FormControlName` directive instance.
           */

        }, {
          key: "removeControl",
          value: function removeControl(dir) {
            cleanUpControl(dir.control || null, dir,
            /* validateControlPresenceOnChange */
            false);
            removeListItem(this.directives, dir);
          }
          /**
           * Adds a new `FormGroupName` directive instance to the form.
           *
           * @param dir The `FormGroupName` directive instance.
           */

        }, {
          key: "addFormGroup",
          value: function addFormGroup(dir) {
            this._setUpFormContainer(dir);
          }
          /**
           * Performs the necessary cleanup when a `FormGroupName` directive instance is removed from the
           * view.
           *
           * @param dir The `FormGroupName` directive instance.
           */

        }, {
          key: "removeFormGroup",
          value: function removeFormGroup(dir) {
            this._cleanUpFormContainer(dir);
          }
          /**
           * @description
           * Retrieves the `FormGroup` for a provided `FormGroupName` directive instance
           *
           * @param dir The `FormGroupName` directive instance.
           */

        }, {
          key: "getFormGroup",
          value: function getFormGroup(dir) {
            return this.form.get(dir.path);
          }
          /**
           * Performs the necessary setup when a `FormArrayName` directive instance is added to the view.
           *
           * @param dir The `FormArrayName` directive instance.
           */

        }, {
          key: "addFormArray",
          value: function addFormArray(dir) {
            this._setUpFormContainer(dir);
          }
          /**
           * Performs the necessary cleanup when a `FormArrayName` directive instance is removed from the
           * view.
           *
           * @param dir The `FormArrayName` directive instance.
           */

        }, {
          key: "removeFormArray",
          value: function removeFormArray(dir) {
            this._cleanUpFormContainer(dir);
          }
          /**
           * @description
           * Retrieves the `FormArray` for a provided `FormArrayName` directive instance.
           *
           * @param dir The `FormArrayName` directive instance.
           */

        }, {
          key: "getFormArray",
          value: function getFormArray(dir) {
            return this.form.get(dir.path);
          }
          /**
           * Sets the new value for the provided `FormControlName` directive.
           *
           * @param dir The `FormControlName` directive instance.
           * @param value The new value for the directive's control.
           */

        }, {
          key: "updateModel",
          value: function updateModel(dir, value) {
            var ctrl = this.form.get(dir.path);
            ctrl.setValue(value);
          }
          /**
           * @description
           * Method called with the "submit" event is triggered on the form.
           * Triggers the `ngSubmit` emitter to emit the "submit" event as its payload.
           *
           * @param $event The "submit" event object
           */

        }, {
          key: "onSubmit",
          value: function onSubmit($event) {
            this.submitted = true;
            syncPendingControls(this.form, this.directives);
            this.ngSubmit.emit($event);
            return false;
          }
          /**
           * @description
           * Method called when the "reset" event is triggered on the form.
           */

        }, {
          key: "onReset",
          value: function onReset() {
            this.resetForm();
          }
          /**
           * @description
           * Resets the form to an initial value and resets its submitted status.
           *
           * @param value The new value for the form.
           */

        }, {
          key: "resetForm",
          value: function resetForm() {
            var value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : undefined;
            this.form.reset(value);
            this.submitted = false;
          }
          /** @internal */

        }, {
          key: "_updateDomValue",
          value: function _updateDomValue() {
            var _this33 = this;

            this.directives.forEach(function (dir) {
              var newCtrl = _this33.form.get(dir.path);

              if (dir.control !== newCtrl) {
                // Note: the value of the `dir.control` may not be defined, for example when it's a first
                // `FormControl` that is added to a `FormGroup` instance (via `addControl` call).
                cleanUpControl(dir.control || null, dir);
                if (newCtrl) setUpControl(newCtrl, dir);
                dir.control = newCtrl;
              }
            });

            this.form._updateTreeValidity({
              emitEvent: false
            });
          }
        }, {
          key: "_setUpFormContainer",
          value: function _setUpFormContainer(dir) {
            var ctrl = this.form.get(dir.path);
            setUpFormContainer(ctrl, dir); // NOTE: this operation looks unnecessary in case no new validators were added in
            // `setUpFormContainer` call. Consider updating this code to match the logic in
            // `_cleanUpFormContainer` function.

            ctrl.updateValueAndValidity({
              emitEvent: false
            });
          }
        }, {
          key: "_cleanUpFormContainer",
          value: function _cleanUpFormContainer(dir) {
            if (this.form) {
              var ctrl = this.form.get(dir.path);

              if (ctrl) {
                var isControlUpdated = cleanUpFormContainer(ctrl, dir);

                if (isControlUpdated) {
                  // Run validity check only in case a control was updated (i.e. view validators were
                  // removed) as removing view validators might cause validity to change.
                  ctrl.updateValueAndValidity({
                    emitEvent: false
                  });
                }
              }
            }
          }
        }, {
          key: "_updateRegistrations",
          value: function _updateRegistrations() {
            this.form._registerOnCollectionChange(this._onCollectionChange);

            if (this._oldForm) {
              this._oldForm._registerOnCollectionChange(function () {});
            }
          }
        }, {
          key: "_updateValidators",
          value: function _updateValidators() {
            setUpValidators(this.form, this,
            /* handleOnValidatorChange */
            false);

            if (this._oldForm) {
              cleanUpValidators(this._oldForm, this,
              /* handleOnValidatorChange */
              false);
            }
          }
        }, {
          key: "_checkFormPresent",
          value: function _checkFormPresent() {
            if (!this.form && (typeof ngDevMode === 'undefined' || ngDevMode)) {
              ReactiveErrors.missingFormException();
            }
          }
        }]);

        return FormGroupDirective;
      }(ControlContainer);

      FormGroupDirective.ɵfac = function FormGroupDirective_Factory(t) {
        return new (t || FormGroupDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](NG_VALIDATORS, 10), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](NG_ASYNC_VALIDATORS, 10));
      };

      FormGroupDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
        type: FormGroupDirective,
        selectors: [["", "formGroup", ""]],
        hostBindings: function FormGroupDirective_HostBindings(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("submit", function FormGroupDirective_submit_HostBindingHandler($event) {
              return ctx.onSubmit($event);
            })("reset", function FormGroupDirective_reset_HostBindingHandler() {
              return ctx.onReset();
            });
          }
        },
        inputs: {
          form: ["formGroup", "form"]
        },
        outputs: {
          ngSubmit: "ngSubmit"
        },
        exportAs: ["ngForm"],
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([formDirectiveProvider$1]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]]
      });

      FormGroupDirective.ctorParameters = function () {
        return [{
          type: Array,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Self"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
            args: [NG_VALIDATORS]
          }]
        }, {
          type: Array,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Self"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
            args: [NG_ASYNC_VALIDATORS]
          }]
        }];
      };

      FormGroupDirective.propDecorators = {
        form: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
          args: ['formGroup']
        }],
        ngSubmit: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }]
      };

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FormGroupDirective, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
          args: [{
            selector: '[formGroup]',
            providers: [formDirectiveProvider$1],
            host: {
              '(submit)': 'onSubmit($event)',
              '(reset)': 'onReset()'
            },
            exportAs: 'ngForm'
          }]
        }], function () {
          return [{
            type: Array,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
            }, {
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Self"]
            }, {
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
              args: [NG_VALIDATORS]
            }]
          }, {
            type: Array,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
            }, {
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Self"]
            }, {
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
              args: [NG_ASYNC_VALIDATORS]
            }]
          }];
        }, {
          form: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['formGroup']
          }],
          ngSubmit: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
          }]
        });
      })();
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */


      var formGroupNameProvider = {
        provide: ControlContainer,
        useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(function () {
          return FormGroupName;
        })
      };
      /**
       * @description
       *
       * Syncs a nested `FormGroup` to a DOM element.
       *
       * This directive can only be used with a parent `FormGroupDirective`.
       *
       * It accepts the string name of the nested `FormGroup` to link, and
       * looks for a `FormGroup` registered with that name in the parent
       * `FormGroup` instance you passed into `FormGroupDirective`.
       *
       * Use nested form groups to validate a sub-group of a
       * form separately from the rest or to group the values of certain
       * controls into their own nested object.
       *
       * @see [Reactive Forms Guide](guide/reactive-forms)
       *
       * @usageNotes
       *
       * ### Access the group by name
       *
       * The following example uses the {@link AbstractControl#get get} method to access the
       * associated `FormGroup`
       *
       * ```ts
       *   this.form.get('name');
       * ```
       *
       * ### Access individual controls in the group
       *
       * The following example uses the {@link AbstractControl#get get} method to access
       * individual controls within the group using dot syntax.
       *
       * ```ts
       *   this.form.get('name.first');
       * ```
       *
       * ### Register a nested `FormGroup`.
       *
       * The following example registers a nested *name* `FormGroup` within an existing `FormGroup`,
       * and provides methods to retrieve the nested `FormGroup` and individual controls.
       *
       * {@example forms/ts/nestedFormGroup/nested_form_group_example.ts region='Component'}
       *
       * @ngModule ReactiveFormsModule
       * @publicApi
       */

      var FormGroupName = /*#__PURE__*/function (_AbstractFormGroupDir2) {
        _inherits(FormGroupName, _AbstractFormGroupDir2);

        var _super14 = _createSuper(FormGroupName);

        function FormGroupName(parent, validators, asyncValidators) {
          var _this34;

          _classCallCheck(this, FormGroupName);

          _this34 = _super14.call(this);
          _this34._parent = parent;

          _this34._setValidators(validators);

          _this34._setAsyncValidators(asyncValidators);

          return _this34;
        }
        /** @internal */


        _createClass(FormGroupName, [{
          key: "_checkParentType",
          value: function _checkParentType() {
            if (_hasInvalidParent(this._parent) && (typeof ngDevMode === 'undefined' || ngDevMode)) {
              ReactiveErrors.groupParentException();
            }
          }
        }]);

        return FormGroupName;
      }(AbstractFormGroupDirective);

      FormGroupName.ɵfac = function FormGroupName_Factory(t) {
        return new (t || FormGroupName)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ControlContainer, 13), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](NG_VALIDATORS, 10), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](NG_ASYNC_VALIDATORS, 10));
      };

      FormGroupName.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
        type: FormGroupName,
        selectors: [["", "formGroupName", ""]],
        inputs: {
          name: ["formGroupName", "name"]
        },
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([formGroupNameProvider]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]]
      });

      FormGroupName.ctorParameters = function () {
        return [{
          type: ControlContainer,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Host"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["SkipSelf"]
          }]
        }, {
          type: Array,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Self"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
            args: [NG_VALIDATORS]
          }]
        }, {
          type: Array,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Self"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
            args: [NG_ASYNC_VALIDATORS]
          }]
        }];
      };

      FormGroupName.propDecorators = {
        name: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
          args: ['formGroupName']
        }]
      };

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FormGroupName, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
          args: [{
            selector: '[formGroupName]',
            providers: [formGroupNameProvider]
          }]
        }], function () {
          return [{
            type: ControlContainer,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
            }, {
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Host"]
            }, {
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["SkipSelf"]
            }]
          }, {
            type: Array,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
            }, {
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Self"]
            }, {
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
              args: [NG_VALIDATORS]
            }]
          }, {
            type: Array,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
            }, {
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Self"]
            }, {
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
              args: [NG_ASYNC_VALIDATORS]
            }]
          }];
        }, {
          name: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['formGroupName']
          }]
        });
      })();

      var formArrayNameProvider = {
        provide: ControlContainer,
        useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(function () {
          return FormArrayName;
        })
      };
      /**
       * @description
       *
       * Syncs a nested `FormArray` to a DOM element.
       *
       * This directive is designed to be used with a parent `FormGroupDirective` (selector:
       * `[formGroup]`).
       *
       * It accepts the string name of the nested `FormArray` you want to link, and
       * will look for a `FormArray` registered with that name in the parent
       * `FormGroup` instance you passed into `FormGroupDirective`.
       *
       * @see [Reactive Forms Guide](guide/reactive-forms)
       * @see `AbstractControl`
       *
       * @usageNotes
       *
       * ### Example
       *
       * {@example forms/ts/nestedFormArray/nested_form_array_example.ts region='Component'}
       *
       * @ngModule ReactiveFormsModule
       * @publicApi
       */

      var FormArrayName = /*#__PURE__*/function (_ControlContainer4) {
        _inherits(FormArrayName, _ControlContainer4);

        var _super15 = _createSuper(FormArrayName);

        function FormArrayName(parent, validators, asyncValidators) {
          var _this35;

          _classCallCheck(this, FormArrayName);

          _this35 = _super15.call(this);
          _this35._parent = parent;

          _this35._setValidators(validators);

          _this35._setAsyncValidators(asyncValidators);

          return _this35;
        }
        /**
         * A lifecycle method called when the directive's inputs are initialized. For internal use only.
         * @throws If the directive does not have a valid parent.
         * @nodoc
         */


        _createClass(FormArrayName, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this._checkParentType();

            this.formDirective.addFormArray(this);
          }
          /**
           * A lifecycle method called before the directive's instance is destroyed. For internal use only.
           * @nodoc
           */

        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            if (this.formDirective) {
              this.formDirective.removeFormArray(this);
            }
          }
          /**
           * @description
           * The `FormArray` bound to this directive.
           */

        }, {
          key: "control",
          get: function get() {
            return this.formDirective.getFormArray(this);
          }
          /**
           * @description
           * The top-level directive for this group if present, otherwise null.
           */

        }, {
          key: "formDirective",
          get: function get() {
            return this._parent ? this._parent.formDirective : null;
          }
          /**
           * @description
           * Returns an array that represents the path from the top-level form to this control.
           * Each index is the string name of the control on that level.
           */

        }, {
          key: "path",
          get: function get() {
            return controlPath(this.name == null ? this.name : this.name.toString(), this._parent);
          }
        }, {
          key: "_checkParentType",
          value: function _checkParentType() {
            if (_hasInvalidParent(this._parent) && (typeof ngDevMode === 'undefined' || ngDevMode)) {
              ReactiveErrors.arrayParentException();
            }
          }
        }]);

        return FormArrayName;
      }(ControlContainer);

      FormArrayName.ɵfac = function FormArrayName_Factory(t) {
        return new (t || FormArrayName)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ControlContainer, 13), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](NG_VALIDATORS, 10), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](NG_ASYNC_VALIDATORS, 10));
      };

      FormArrayName.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
        type: FormArrayName,
        selectors: [["", "formArrayName", ""]],
        inputs: {
          name: ["formArrayName", "name"]
        },
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([formArrayNameProvider]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]]
      });

      FormArrayName.ctorParameters = function () {
        return [{
          type: ControlContainer,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Host"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["SkipSelf"]
          }]
        }, {
          type: Array,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Self"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
            args: [NG_VALIDATORS]
          }]
        }, {
          type: Array,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Self"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
            args: [NG_ASYNC_VALIDATORS]
          }]
        }];
      };

      FormArrayName.propDecorators = {
        name: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
          args: ['formArrayName']
        }]
      };

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FormArrayName, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
          args: [{
            selector: '[formArrayName]',
            providers: [formArrayNameProvider]
          }]
        }], function () {
          return [{
            type: ControlContainer,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
            }, {
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Host"]
            }, {
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["SkipSelf"]
            }]
          }, {
            type: Array,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
            }, {
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Self"]
            }, {
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
              args: [NG_VALIDATORS]
            }]
          }, {
            type: Array,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
            }, {
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Self"]
            }, {
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
              args: [NG_ASYNC_VALIDATORS]
            }]
          }];
        }, {
          name: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['formArrayName']
          }]
        });
      })();

      function _hasInvalidParent(parent) {
        return !(parent instanceof FormGroupName) && !(parent instanceof FormGroupDirective) && !(parent instanceof FormArrayName);
      }
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */


      var controlNameBinding = {
        provide: NgControl,
        useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(function () {
          return FormControlName;
        })
      };
      /**
       * @description
       * Syncs a `FormControl` in an existing `FormGroup` to a form control
       * element by name.
       *
       * @see [Reactive Forms Guide](guide/reactive-forms)
       * @see `FormControl`
       * @see `AbstractControl`
       *
       * @usageNotes
       *
       * ### Register `FormControl` within a group
       *
       * The following example shows how to register multiple form controls within a form group
       * and set their value.
       *
       * {@example forms/ts/simpleFormGroup/simple_form_group_example.ts region='Component'}
       *
       * To see `formControlName` examples with different form control types, see:
       *
       * * Radio buttons: `RadioControlValueAccessor`
       * * Selects: `SelectControlValueAccessor`
       *
       * ### Use with ngModel is deprecated
       *
       * Support for using the `ngModel` input property and `ngModelChange` event with reactive
       * form directives has been deprecated in Angular v6 and is scheduled for removal in
       * a future version of Angular.
       *
       * For details, see [Deprecated features](guide/deprecations#ngmodel-with-reactive-forms).
       *
       * @ngModule ReactiveFormsModule
       * @publicApi
       */

      var FormControlName = /*#__PURE__*/function (_NgControl3) {
        _inherits(FormControlName, _NgControl3);

        var _super16 = _createSuper(FormControlName);

        function FormControlName(parent, validators, asyncValidators, valueAccessors, _ngModelWarningConfig) {
          var _this36;

          _classCallCheck(this, FormControlName);

          _this36 = _super16.call(this);
          _this36._ngModelWarningConfig = _ngModelWarningConfig;
          _this36._added = false;
          /** @deprecated as of v6 */

          _this36.update = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
          /**
           * @description
           * Instance property used to track whether an ngModel warning has been sent out for this
           * particular FormControlName instance. Used to support warning config of "always".
           *
           * @internal
           */

          _this36._ngModelWarningSent = false;
          _this36._parent = parent;

          _this36._setValidators(validators);

          _this36._setAsyncValidators(asyncValidators);

          _this36.valueAccessor = selectValueAccessor(_assertThisInitialized(_this36), valueAccessors);
          return _this36;
        }
        /**
         * @description
         * Triggers a warning in dev mode that this input should not be used with reactive forms.
         */


        _createClass(FormControlName, [{
          key: "isDisabled",
          set: function set(isDisabled) {
            if (typeof ngDevMode === 'undefined' || ngDevMode) {
              ReactiveErrors.disabledAttrWarning();
            }
          }
          /** @nodoc */

        }, {
          key: "ngOnChanges",
          value: function ngOnChanges(changes) {
            if (!this._added) this._setUpControl();

            if (isPropertyUpdated(changes, this.viewModel)) {
              if (typeof ngDevMode === 'undefined' || ngDevMode) {
                _ngModelWarning('formControlName', FormControlName, this, this._ngModelWarningConfig);
              }

              this.viewModel = this.model;
              this.formDirective.updateModel(this, this.model);
            }
          }
          /** @nodoc */

        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            if (this.formDirective) {
              this.formDirective.removeControl(this);
            }
          }
          /**
           * @description
           * Sets the new value for the view model and emits an `ngModelChange` event.
           *
           * @param newValue The new value for the view model.
           */

        }, {
          key: "viewToModelUpdate",
          value: function viewToModelUpdate(newValue) {
            this.viewModel = newValue;
            this.update.emit(newValue);
          }
          /**
           * @description
           * Returns an array that represents the path from the top-level form to this control.
           * Each index is the string name of the control on that level.
           */

        }, {
          key: "path",
          get: function get() {
            return controlPath(this.name == null ? this.name : this.name.toString(), this._parent);
          }
          /**
           * @description
           * The top-level directive for this group if present, otherwise null.
           */

        }, {
          key: "formDirective",
          get: function get() {
            return this._parent ? this._parent.formDirective : null;
          }
        }, {
          key: "_checkParentType",
          value: function _checkParentType() {
            if (typeof ngDevMode === 'undefined' || ngDevMode) {
              if (!(this._parent instanceof FormGroupName) && this._parent instanceof AbstractFormGroupDirective) {
                ReactiveErrors.ngModelGroupException();
              } else if (!(this._parent instanceof FormGroupName) && !(this._parent instanceof FormGroupDirective) && !(this._parent instanceof FormArrayName)) {
                ReactiveErrors.controlParentException();
              }
            }
          }
        }, {
          key: "_setUpControl",
          value: function _setUpControl() {
            this._checkParentType();

            this.control = this.formDirective.addControl(this);

            if (this.control.disabled && this.valueAccessor.setDisabledState) {
              this.valueAccessor.setDisabledState(true);
            }

            this._added = true;
          }
        }]);

        return FormControlName;
      }(NgControl);

      FormControlName.ɵfac = function FormControlName_Factory(t) {
        return new (t || FormControlName)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ControlContainer, 13), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](NG_VALIDATORS, 10), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](NG_ASYNC_VALIDATORS, 10), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](NG_VALUE_ACCESSOR, 10), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](NG_MODEL_WITH_FORM_CONTROL_WARNING, 8));
      };

      FormControlName.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
        type: FormControlName,
        selectors: [["", "formControlName", ""]],
        inputs: {
          isDisabled: ["disabled", "isDisabled"],
          name: ["formControlName", "name"],
          model: ["ngModel", "model"]
        },
        outputs: {
          update: "ngModelChange"
        },
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([controlNameBinding]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]]
      });
      /**
       * @description
       * Static property used to track whether any ngModel warnings have been sent across
       * all instances of FormControlName. Used to support warning config of "once".
       *
       * @internal
       */

      FormControlName._ngModelWarningSentOnce = false;

      FormControlName.ctorParameters = function () {
        return [{
          type: ControlContainer,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Host"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["SkipSelf"]
          }]
        }, {
          type: Array,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Self"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
            args: [NG_VALIDATORS]
          }]
        }, {
          type: Array,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Self"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
            args: [NG_ASYNC_VALIDATORS]
          }]
        }, {
          type: Array,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Self"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
            args: [NG_VALUE_ACCESSOR]
          }]
        }, {
          type: String,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
            args: [NG_MODEL_WITH_FORM_CONTROL_WARNING]
          }]
        }];
      };

      FormControlName.propDecorators = {
        name: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
          args: ['formControlName']
        }],
        isDisabled: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
          args: ['disabled']
        }],
        model: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
          args: ['ngModel']
        }],
        update: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"],
          args: ['ngModelChange']
        }]
      };

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FormControlName, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
          args: [{
            selector: '[formControlName]',
            providers: [controlNameBinding]
          }]
        }], function () {
          return [{
            type: ControlContainer,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
            }, {
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Host"]
            }, {
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["SkipSelf"]
            }]
          }, {
            type: Array,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
            }, {
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Self"]
            }, {
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
              args: [NG_VALIDATORS]
            }]
          }, {
            type: Array,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
            }, {
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Self"]
            }, {
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
              args: [NG_ASYNC_VALIDATORS]
            }]
          }, {
            type: Array,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
            }, {
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Self"]
            }, {
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
              args: [NG_VALUE_ACCESSOR]
            }]
          }, {
            type: String,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
            }, {
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
              args: [NG_MODEL_WITH_FORM_CONTROL_WARNING]
            }]
          }];
        }, {
          update: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"],
            args: ['ngModelChange']
          }],
          isDisabled: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['disabled']
          }],
          name: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['formControlName']
          }],
          model: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['ngModel']
          }]
        });
      })();
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /**
       * @description
       * Provider which adds `RequiredValidator` to the `NG_VALIDATORS` multi-provider list.
       */


      var REQUIRED_VALIDATOR = {
        provide: NG_VALIDATORS,
        useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(function () {
          return RequiredValidator;
        }),
        multi: true
      };
      /**
       * @description
       * Provider which adds `CheckboxRequiredValidator` to the `NG_VALIDATORS` multi-provider list.
       */

      var CHECKBOX_REQUIRED_VALIDATOR = {
        provide: NG_VALIDATORS,
        useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(function () {
          return CheckboxRequiredValidator;
        }),
        multi: true
      };
      /**
       * @description
       * A directive that adds the `required` validator to any controls marked with the
       * `required` attribute. The directive is provided with the `NG_VALIDATORS` multi-provider list.
       *
       * @see [Form Validation](guide/form-validation)
       *
       * @usageNotes
       *
       * ### Adding a required validator using template-driven forms
       *
       * ```
       * <input name="fullName" ngModel required>
       * ```
       *
       * @ngModule FormsModule
       * @ngModule ReactiveFormsModule
       * @publicApi
       */

      var RequiredValidator = /*#__PURE__*/function () {
        function RequiredValidator() {
          _classCallCheck(this, RequiredValidator);

          this._required = false;
        }
        /**
         * @description
         * Tracks changes to the required attribute bound to this directive.
         */


        _createClass(RequiredValidator, [{
          key: "required",
          get: function get() {
            return this._required;
          },
          set: function set(value) {
            this._required = value != null && value !== false && "".concat(value) !== 'false';
            if (this._onChange) this._onChange();
          }
          /**
           * Method that validates whether the control is empty.
           * Returns the validation result if enabled, otherwise null.
           * @nodoc
           */

        }, {
          key: "validate",
          value: function validate(control) {
            return this.required ? Validators.required(control) : null;
          }
          /**
           * Registers a callback function to call when the validator inputs change.
           * @nodoc
           */

        }, {
          key: "registerOnValidatorChange",
          value: function registerOnValidatorChange(fn) {
            this._onChange = fn;
          }
        }]);

        return RequiredValidator;
      }();

      RequiredValidator.ɵfac = function RequiredValidator_Factory(t) {
        return new (t || RequiredValidator)();
      };

      RequiredValidator.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
        type: RequiredValidator,
        selectors: [["", "required", "", "formControlName", "", 3, "type", "checkbox"], ["", "required", "", "formControl", "", 3, "type", "checkbox"], ["", "required", "", "ngModel", "", 3, "type", "checkbox"]],
        hostVars: 1,
        hostBindings: function RequiredValidator_HostBindings(rf, ctx) {
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("required", ctx.required ? "" : null);
          }
        },
        inputs: {
          required: "required"
        },
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([REQUIRED_VALIDATOR])]
      });
      RequiredValidator.propDecorators = {
        required: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      };

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RequiredValidator, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
          args: [{
            selector: ':not([type=checkbox])[required][formControlName],:not([type=checkbox])[required][formControl],:not([type=checkbox])[required][ngModel]',
            providers: [REQUIRED_VALIDATOR],
            host: {
              '[attr.required]': 'required ? "" : null'
            }
          }]
        }], function () {
          return [];
        }, {
          required: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }]
        });
      })();
      /**
       * A Directive that adds the `required` validator to checkbox controls marked with the
       * `required` attribute. The directive is provided with the `NG_VALIDATORS` multi-provider list.
       *
       * @see [Form Validation](guide/form-validation)
       *
       * @usageNotes
       *
       * ### Adding a required checkbox validator using template-driven forms
       *
       * The following example shows how to add a checkbox required validator to an input attached to an
       * ngModel binding.
       *
       * ```
       * <input type="checkbox" name="active" ngModel required>
       * ```
       *
       * @publicApi
       * @ngModule FormsModule
       * @ngModule ReactiveFormsModule
       */


      var CheckboxRequiredValidator = /*#__PURE__*/function (_RequiredValidator) {
        _inherits(CheckboxRequiredValidator, _RequiredValidator);

        var _super17 = _createSuper(CheckboxRequiredValidator);

        function CheckboxRequiredValidator() {
          _classCallCheck(this, CheckboxRequiredValidator);

          return _super17.apply(this, arguments);
        }

        _createClass(CheckboxRequiredValidator, [{
          key: "validate",
          value:
          /**
           * Method that validates whether or not the checkbox has been checked.
           * Returns the validation result if enabled, otherwise null.
           * @nodoc
           */
          function validate(control) {
            return this.required ? Validators.requiredTrue(control) : null;
          }
        }]);

        return CheckboxRequiredValidator;
      }(RequiredValidator);

      CheckboxRequiredValidator.ɵfac = function CheckboxRequiredValidator_Factory(t) {
        return ɵCheckboxRequiredValidator_BaseFactory(t || CheckboxRequiredValidator);
      };

      CheckboxRequiredValidator.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
        type: CheckboxRequiredValidator,
        selectors: [["input", "type", "checkbox", "required", "", "formControlName", ""], ["input", "type", "checkbox", "required", "", "formControl", ""], ["input", "type", "checkbox", "required", "", "ngModel", ""]],
        hostVars: 1,
        hostBindings: function CheckboxRequiredValidator_HostBindings(rf, ctx) {
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("required", ctx.required ? "" : null);
          }
        },
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([CHECKBOX_REQUIRED_VALIDATOR]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]]
      });

      var ɵCheckboxRequiredValidator_BaseFactory = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"](CheckboxRequiredValidator);

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CheckboxRequiredValidator, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
          args: [{
            selector: 'input[type=checkbox][required][formControlName],input[type=checkbox][required][formControl],input[type=checkbox][required][ngModel]',
            providers: [CHECKBOX_REQUIRED_VALIDATOR],
            host: {
              '[attr.required]': 'required ? "" : null'
            }
          }]
        }], null, null);
      })();
      /**
       * @description
       * Provider which adds `EmailValidator` to the `NG_VALIDATORS` multi-provider list.
       */


      var EMAIL_VALIDATOR = {
        provide: NG_VALIDATORS,
        useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(function () {
          return EmailValidator;
        }),
        multi: true
      };
      /**
       * A directive that adds the `email` validator to controls marked with the
       * `email` attribute. The directive is provided with the `NG_VALIDATORS` multi-provider list.
       *
       * @see [Form Validation](guide/form-validation)
       *
       * @usageNotes
       *
       * ### Adding an email validator
       *
       * The following example shows how to add an email validator to an input attached to an ngModel
       * binding.
       *
       * ```
       * <input type="email" name="email" ngModel email>
       * <input type="email" name="email" ngModel email="true">
       * <input type="email" name="email" ngModel [email]="true">
       * ```
       *
       * @publicApi
       * @ngModule FormsModule
       * @ngModule ReactiveFormsModule
       */

      var EmailValidator = /*#__PURE__*/function () {
        function EmailValidator() {
          _classCallCheck(this, EmailValidator);

          this._enabled = false;
        }
        /**
         * @description
         * Tracks changes to the email attribute bound to this directive.
         */


        _createClass(EmailValidator, [{
          key: "email",
          set: function set(value) {
            this._enabled = value === '' || value === true || value === 'true';
            if (this._onChange) this._onChange();
          }
          /**
           * Method that validates whether an email address is valid.
           * Returns the validation result if enabled, otherwise null.
           * @nodoc
           */

        }, {
          key: "validate",
          value: function validate(control) {
            return this._enabled ? Validators.email(control) : null;
          }
          /**
           * Registers a callback function to call when the validator inputs change.
           * @nodoc
           */

        }, {
          key: "registerOnValidatorChange",
          value: function registerOnValidatorChange(fn) {
            this._onChange = fn;
          }
        }]);

        return EmailValidator;
      }();

      EmailValidator.ɵfac = function EmailValidator_Factory(t) {
        return new (t || EmailValidator)();
      };

      EmailValidator.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
        type: EmailValidator,
        selectors: [["", "email", "", "formControlName", ""], ["", "email", "", "formControl", ""], ["", "email", "", "ngModel", ""]],
        inputs: {
          email: "email"
        },
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([EMAIL_VALIDATOR])]
      });
      EmailValidator.propDecorators = {
        email: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      };

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](EmailValidator, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
          args: [{
            selector: '[email][formControlName],[email][formControl],[email][ngModel]',
            providers: [EMAIL_VALIDATOR]
          }]
        }], function () {
          return [];
        }, {
          email: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }]
        });
      })();
      /**
       * @description
       * Provider which adds `MinLengthValidator` to the `NG_VALIDATORS` multi-provider list.
       */


      var MIN_LENGTH_VALIDATOR = {
        provide: NG_VALIDATORS,
        useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(function () {
          return MinLengthValidator;
        }),
        multi: true
      };
      /**
       * A directive that adds minimum length validation to controls marked with the
       * `minlength` attribute. The directive is provided with the `NG_VALIDATORS` multi-provider list.
       *
       * @see [Form Validation](guide/form-validation)
       *
       * @usageNotes
       *
       * ### Adding a minimum length validator
       *
       * The following example shows how to add a minimum length validator to an input attached to an
       * ngModel binding.
       *
       * ```html
       * <input name="firstName" ngModel minlength="4">
       * ```
       *
       * @ngModule ReactiveFormsModule
       * @ngModule FormsModule
       * @publicApi
       */

      var MinLengthValidator = /*#__PURE__*/function () {
        function MinLengthValidator() {
          _classCallCheck(this, MinLengthValidator);

          this._validator = Validators.nullValidator;
        }
        /** @nodoc */


        _createClass(MinLengthValidator, [{
          key: "ngOnChanges",
          value: function ngOnChanges(changes) {
            if ('minlength' in changes) {
              this._createValidator();

              if (this._onChange) this._onChange();
            }
          }
          /**
           * Method that validates whether the value meets a minimum length requirement.
           * Returns the validation result if enabled, otherwise null.
           * @nodoc
           */

        }, {
          key: "validate",
          value: function validate(control) {
            return this.minlength == null ? null : this._validator(control);
          }
          /**
           * Registers a callback function to call when the validator inputs change.
           * @nodoc
           */

        }, {
          key: "registerOnValidatorChange",
          value: function registerOnValidatorChange(fn) {
            this._onChange = fn;
          }
        }, {
          key: "_createValidator",
          value: function _createValidator() {
            this._validator = Validators.minLength(typeof this.minlength === 'number' ? this.minlength : parseInt(this.minlength, 10));
          }
        }]);

        return MinLengthValidator;
      }();

      MinLengthValidator.ɵfac = function MinLengthValidator_Factory(t) {
        return new (t || MinLengthValidator)();
      };

      MinLengthValidator.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
        type: MinLengthValidator,
        selectors: [["", "minlength", "", "formControlName", ""], ["", "minlength", "", "formControl", ""], ["", "minlength", "", "ngModel", ""]],
        hostVars: 1,
        hostBindings: function MinLengthValidator_HostBindings(rf, ctx) {
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("minlength", ctx.minlength ? ctx.minlength : null);
          }
        },
        inputs: {
          minlength: "minlength"
        },
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([MIN_LENGTH_VALIDATOR]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]]
      });
      MinLengthValidator.propDecorators = {
        minlength: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      };

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MinLengthValidator, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
          args: [{
            selector: '[minlength][formControlName],[minlength][formControl],[minlength][ngModel]',
            providers: [MIN_LENGTH_VALIDATOR],
            host: {
              '[attr.minlength]': 'minlength ? minlength : null'
            }
          }]
        }], function () {
          return [];
        }, {
          minlength: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }]
        });
      })();
      /**
       * @description
       * Provider which adds `MaxLengthValidator` to the `NG_VALIDATORS` multi-provider list.
       */


      var MAX_LENGTH_VALIDATOR = {
        provide: NG_VALIDATORS,
        useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(function () {
          return MaxLengthValidator;
        }),
        multi: true
      };
      /**
       * A directive that adds max length validation to controls marked with the
       * `maxlength` attribute. The directive is provided with the `NG_VALIDATORS` multi-provider list.
       *
       * @see [Form Validation](guide/form-validation)
       *
       * @usageNotes
       *
       * ### Adding a maximum length validator
       *
       * The following example shows how to add a maximum length validator to an input attached to an
       * ngModel binding.
       *
       * ```html
       * <input name="firstName" ngModel maxlength="25">
       * ```
       *
       * @ngModule ReactiveFormsModule
       * @ngModule FormsModule
       * @publicApi
       */

      var MaxLengthValidator = /*#__PURE__*/function () {
        function MaxLengthValidator() {
          _classCallCheck(this, MaxLengthValidator);

          this._validator = Validators.nullValidator;
        }
        /** @nodoc */


        _createClass(MaxLengthValidator, [{
          key: "ngOnChanges",
          value: function ngOnChanges(changes) {
            if ('maxlength' in changes) {
              this._createValidator();

              if (this._onChange) this._onChange();
            }
          }
          /**
           * Method that validates whether the value exceeds the maximum length requirement.
           * @nodoc
           */

        }, {
          key: "validate",
          value: function validate(control) {
            return this.maxlength != null ? this._validator(control) : null;
          }
          /**
           * Registers a callback function to call when the validator inputs change.
           * @nodoc
           */

        }, {
          key: "registerOnValidatorChange",
          value: function registerOnValidatorChange(fn) {
            this._onChange = fn;
          }
        }, {
          key: "_createValidator",
          value: function _createValidator() {
            this._validator = Validators.maxLength(typeof this.maxlength === 'number' ? this.maxlength : parseInt(this.maxlength, 10));
          }
        }]);

        return MaxLengthValidator;
      }();

      MaxLengthValidator.ɵfac = function MaxLengthValidator_Factory(t) {
        return new (t || MaxLengthValidator)();
      };

      MaxLengthValidator.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
        type: MaxLengthValidator,
        selectors: [["", "maxlength", "", "formControlName", ""], ["", "maxlength", "", "formControl", ""], ["", "maxlength", "", "ngModel", ""]],
        hostVars: 1,
        hostBindings: function MaxLengthValidator_HostBindings(rf, ctx) {
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("maxlength", ctx.maxlength ? ctx.maxlength : null);
          }
        },
        inputs: {
          maxlength: "maxlength"
        },
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([MAX_LENGTH_VALIDATOR]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]]
      });
      MaxLengthValidator.propDecorators = {
        maxlength: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      };

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MaxLengthValidator, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
          args: [{
            selector: '[maxlength][formControlName],[maxlength][formControl],[maxlength][ngModel]',
            providers: [MAX_LENGTH_VALIDATOR],
            host: {
              '[attr.maxlength]': 'maxlength ? maxlength : null'
            }
          }]
        }], function () {
          return [];
        }, {
          maxlength: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }]
        });
      })();
      /**
       * @description
       * Provider which adds `PatternValidator` to the `NG_VALIDATORS` multi-provider list.
       */


      var PATTERN_VALIDATOR = {
        provide: NG_VALIDATORS,
        useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(function () {
          return PatternValidator;
        }),
        multi: true
      };
      /**
       * @description
       * A directive that adds regex pattern validation to controls marked with the
       * `pattern` attribute. The regex must match the entire control value.
       * The directive is provided with the `NG_VALIDATORS` multi-provider list.
       *
       * @see [Form Validation](guide/form-validation)
       *
       * @usageNotes
       *
       * ### Adding a pattern validator
       *
       * The following example shows how to add a pattern validator to an input attached to an
       * ngModel binding.
       *
       * ```html
       * <input name="firstName" ngModel pattern="[a-zA-Z ]*">
       * ```
       *
       * @ngModule ReactiveFormsModule
       * @ngModule FormsModule
       * @publicApi
       */

      var PatternValidator = /*#__PURE__*/function () {
        function PatternValidator() {
          _classCallCheck(this, PatternValidator);

          this._validator = Validators.nullValidator;
        }
        /** @nodoc */


        _createClass(PatternValidator, [{
          key: "ngOnChanges",
          value: function ngOnChanges(changes) {
            if ('pattern' in changes) {
              this._createValidator();

              if (this._onChange) this._onChange();
            }
          }
          /**
           * Method that validates whether the value matches the pattern requirement.
           * @nodoc
           */

        }, {
          key: "validate",
          value: function validate(control) {
            return this._validator(control);
          }
          /**
           * Registers a callback function to call when the validator inputs change.
           * @nodoc
           */

        }, {
          key: "registerOnValidatorChange",
          value: function registerOnValidatorChange(fn) {
            this._onChange = fn;
          }
        }, {
          key: "_createValidator",
          value: function _createValidator() {
            this._validator = Validators.pattern(this.pattern);
          }
        }]);

        return PatternValidator;
      }();

      PatternValidator.ɵfac = function PatternValidator_Factory(t) {
        return new (t || PatternValidator)();
      };

      PatternValidator.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
        type: PatternValidator,
        selectors: [["", "pattern", "", "formControlName", ""], ["", "pattern", "", "formControl", ""], ["", "pattern", "", "ngModel", ""]],
        hostVars: 1,
        hostBindings: function PatternValidator_HostBindings(rf, ctx) {
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("pattern", ctx.pattern ? ctx.pattern : null);
          }
        },
        inputs: {
          pattern: "pattern"
        },
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([PATTERN_VALIDATOR]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]]
      });
      PatternValidator.propDecorators = {
        pattern: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      };

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PatternValidator, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
          args: [{
            selector: '[pattern][formControlName],[pattern][formControl],[pattern][ngModel]',
            providers: [PATTERN_VALIDATOR],
            host: {
              '[attr.pattern]': 'pattern ? pattern : null'
            }
          }]
        }], function () {
          return [];
        }, {
          pattern: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }]
        });
      })();
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */


      var SHARED_FORM_DIRECTIVES = [ɵNgNoValidate, NgSelectOption, ɵNgSelectMultipleOption, DefaultValueAccessor, NumberValueAccessor, RangeValueAccessor, CheckboxControlValueAccessor, SelectControlValueAccessor, SelectMultipleControlValueAccessor, RadioControlValueAccessor, NgControlStatus, NgControlStatusGroup, RequiredValidator, MinLengthValidator, MaxLengthValidator, PatternValidator, CheckboxRequiredValidator, EmailValidator];
      var TEMPLATE_DRIVEN_DIRECTIVES = [NgModel, NgModelGroup, NgForm];
      var REACTIVE_DRIVEN_DIRECTIVES = [FormControlDirective, FormGroupDirective, FormControlName, FormGroupName, FormArrayName];
      /**
       * Internal module used for sharing directives between FormsModule and ReactiveFormsModule
       */

      var ɵInternalFormsSharedModule = function ɵInternalFormsSharedModule() {
        _classCallCheck(this, ɵInternalFormsSharedModule);
      };

      ɵInternalFormsSharedModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: ɵInternalFormsSharedModule
      });
      ɵInternalFormsSharedModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function ɵInternalFormsSharedModule_Factory(t) {
          return new (t || ɵInternalFormsSharedModule)();
        }
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ɵInternalFormsSharedModule, {
          declarations: [ɵNgNoValidate, NgSelectOption, ɵNgSelectMultipleOption, DefaultValueAccessor, NumberValueAccessor, RangeValueAccessor, CheckboxControlValueAccessor, SelectControlValueAccessor, SelectMultipleControlValueAccessor, RadioControlValueAccessor, NgControlStatus, NgControlStatusGroup, RequiredValidator, MinLengthValidator, MaxLengthValidator, PatternValidator, CheckboxRequiredValidator, EmailValidator],
          exports: [ɵNgNoValidate, NgSelectOption, ɵNgSelectMultipleOption, DefaultValueAccessor, NumberValueAccessor, RangeValueAccessor, CheckboxControlValueAccessor, SelectControlValueAccessor, SelectMultipleControlValueAccessor, RadioControlValueAccessor, NgControlStatus, NgControlStatusGroup, RequiredValidator, MinLengthValidator, MaxLengthValidator, PatternValidator, CheckboxRequiredValidator, EmailValidator]
        });
      })();

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ɵInternalFormsSharedModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            declarations: SHARED_FORM_DIRECTIVES,
            exports: SHARED_FORM_DIRECTIVES
          }]
        }], null, null);
      })();
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */


      function isAbstractControlOptions(options) {
        return options.asyncValidators !== undefined || options.validators !== undefined || options.updateOn !== undefined;
      }
      /**
       * @description
       * Creates an `AbstractControl` from a user-specified configuration.
       *
       * The `FormBuilder` provides syntactic sugar that shortens creating instances of a `FormControl`,
       * `FormGroup`, or `FormArray`. It reduces the amount of boilerplate needed to build complex
       * forms.
       *
       * @see [Reactive Forms Guide](/guide/reactive-forms)
       *
       * @publicApi
       */


      var FormBuilder = /*#__PURE__*/function () {
        function FormBuilder() {
          _classCallCheck(this, FormBuilder);
        }

        _createClass(FormBuilder, [{
          key: "group",
          value: function group(controlsConfig) {
            var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

            var controls = this._reduceControls(controlsConfig);

            var validators = null;
            var asyncValidators = null;
            var updateOn = undefined;

            if (options != null) {
              if (isAbstractControlOptions(options)) {
                // `options` are `AbstractControlOptions`
                validators = options.validators != null ? options.validators : null;
                asyncValidators = options.asyncValidators != null ? options.asyncValidators : null;
                updateOn = options.updateOn != null ? options.updateOn : undefined;
              } else {
                // `options` are legacy form group options
                validators = options['validator'] != null ? options['validator'] : null;
                asyncValidators = options['asyncValidator'] != null ? options['asyncValidator'] : null;
              }
            }

            return new FormGroup(controls, {
              asyncValidators: asyncValidators,
              updateOn: updateOn,
              validators: validators
            });
          }
          /**
           * @description
           * Construct a new `FormControl` with the given state, validators and options.
           *
           * @param formState Initializes the control with an initial state value, or
           * with an object that contains both a value and a disabled status.
           *
           * @param validatorOrOpts A synchronous validator function, or an array of
           * such functions, or an `AbstractControlOptions` object that contains
           * validation functions and a validation trigger.
           *
           * @param asyncValidator A single async validator or array of async validator
           * functions.
           *
           * @usageNotes
           *
           * ### Initialize a control as disabled
           *
           * The following example returns a control with an initial value in a disabled state.
           *
           * <code-example path="forms/ts/formBuilder/form_builder_example.ts" region="disabled-control">
           * </code-example>
           */

        }, {
          key: "control",
          value: function control(formState, validatorOrOpts, asyncValidator) {
            return new FormControl(formState, validatorOrOpts, asyncValidator);
          }
          /**
           * Constructs a new `FormArray` from the given array of configurations,
           * validators and options.
           *
           * @param controlsConfig An array of child controls or control configs. Each
           * child control is given an index when it is registered.
           *
           * @param validatorOrOpts A synchronous validator function, or an array of
           * such functions, or an `AbstractControlOptions` object that contains
           * validation functions and a validation trigger.
           *
           * @param asyncValidator A single async validator or array of async validator
           * functions.
           */

        }, {
          key: "array",
          value: function array(controlsConfig, validatorOrOpts, asyncValidator) {
            var _this37 = this;

            var controls = controlsConfig.map(function (c) {
              return _this37._createControl(c);
            });
            return new FormArray(controls, validatorOrOpts, asyncValidator);
          }
          /** @internal */

        }, {
          key: "_reduceControls",
          value: function _reduceControls(controlsConfig) {
            var _this38 = this;

            var controls = {};
            Object.keys(controlsConfig).forEach(function (controlName) {
              controls[controlName] = _this38._createControl(controlsConfig[controlName]);
            });
            return controls;
          }
          /** @internal */

        }, {
          key: "_createControl",
          value: function _createControl(controlConfig) {
            if (controlConfig instanceof FormControl || controlConfig instanceof FormGroup || controlConfig instanceof FormArray) {
              return controlConfig;
            } else if (Array.isArray(controlConfig)) {
              var value = controlConfig[0];
              var validator = controlConfig.length > 1 ? controlConfig[1] : null;
              var asyncValidator = controlConfig.length > 2 ? controlConfig[2] : null;
              return this.control(value, validator, asyncValidator);
            } else {
              return this.control(controlConfig);
            }
          }
        }]);

        return FormBuilder;
      }();

      FormBuilder.ɵfac = function FormBuilder_Factory(t) {
        return new (t || FormBuilder)();
      };

      FormBuilder.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: FormBuilder,
        factory: FormBuilder.ɵfac
      });

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FormBuilder, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
        }], null, null);
      })();
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /**
       * @publicApi
       */


      var VERSION = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["Version"]('11.1.2');
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /**
       * Exports the required providers and directives for template-driven forms,
       * making them available for import by NgModules that import this module.
       *
       * @see [Forms Overview](/guide/forms-overview)
       * @see [Template-driven Forms Guide](/guide/forms)
       *
       * @publicApi
       */

      var FormsModule = function FormsModule() {
        _classCallCheck(this, FormsModule);
      };

      FormsModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: FormsModule
      });
      FormsModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function FormsModule_Factory(t) {
          return new (t || FormsModule)();
        },
        providers: [RadioControlRegistry],
        imports: [ɵInternalFormsSharedModule]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](FormsModule, {
          declarations: [NgModel, NgModelGroup, NgForm],
          exports: [ɵInternalFormsSharedModule, NgModel, NgModelGroup, NgForm]
        });
      })();

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FormsModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            declarations: TEMPLATE_DRIVEN_DIRECTIVES,
            providers: [RadioControlRegistry],
            exports: [ɵInternalFormsSharedModule, TEMPLATE_DRIVEN_DIRECTIVES]
          }]
        }], null, null);
      })();
      /**
       * Exports the required infrastructure and directives for reactive forms,
       * making them available for import by NgModules that import this module.
       *
       * @see [Forms Overview](guide/forms-overview)
       * @see [Reactive Forms Guide](guide/reactive-forms)
       *
       * @publicApi
       */


      var ReactiveFormsModule = /*#__PURE__*/function () {
        function ReactiveFormsModule() {
          _classCallCheck(this, ReactiveFormsModule);
        }

        _createClass(ReactiveFormsModule, null, [{
          key: "withConfig",
          value:
          /**
           * @description
           * Provides options for configuring the reactive forms module.
           *
           * @param opts An object of configuration options
           * * `warnOnNgModelWithFormControl` Configures when to emit a warning when an `ngModel`
           * binding is used with reactive form directives.
           */
          function withConfig(opts) {
            return {
              ngModule: ReactiveFormsModule,
              providers: [{
                provide: NG_MODEL_WITH_FORM_CONTROL_WARNING,
                useValue: opts.warnOnNgModelWithFormControl
              }]
            };
          }
        }]);

        return ReactiveFormsModule;
      }();

      ReactiveFormsModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: ReactiveFormsModule
      });
      ReactiveFormsModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function ReactiveFormsModule_Factory(t) {
          return new (t || ReactiveFormsModule)();
        },
        providers: [FormBuilder, RadioControlRegistry],
        imports: [ɵInternalFormsSharedModule]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ReactiveFormsModule, {
          declarations: [FormControlDirective, FormGroupDirective, FormControlName, FormGroupName, FormArrayName],
          exports: [ɵInternalFormsSharedModule, FormControlDirective, FormGroupDirective, FormControlName, FormGroupName, FormArrayName]
        });
      })();

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ReactiveFormsModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            declarations: [REACTIVE_DRIVEN_DIRECTIVES],
            providers: [FormBuilder, RadioControlRegistry],
            exports: [ɵInternalFormsSharedModule, REACTIVE_DRIVEN_DIRECTIVES]
          }]
        }], null, null);
      })();
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
      // This file only reexports content of the `src` folder. Keep it that way.

      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /**
       * Generated bundle index. Do not edit.
       */
      //# sourceMappingURL=forms.js.map

      /***/

    },

    /***/
    "3gGh":
    /*!***************************************!*\
      !*** ./src/app/quote/quote.module.ts ***!
      \***************************************/

    /*! exports provided: QuoteModule */

    /***/
    function gGh(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "QuoteModule", function () {
        return QuoteModule;
      });
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./components */
      "trG8");
      /* harmony import */


      var _quote_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./quote-routing.module */
      "GaGK");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var COMPONENTS = [_components__WEBPACK_IMPORTED_MODULE_2__["QuoteContainerComponent"], _components__WEBPACK_IMPORTED_MODULE_2__["QuoteComponent"], _components__WEBPACK_IMPORTED_MODULE_2__["QuoteShareModalComponent"], _components__WEBPACK_IMPORTED_MODULE_2__["QuotePreviewComponent"], _components__WEBPACK_IMPORTED_MODULE_2__["ShareFormComponent"]];

      var QuoteModule = function QuoteModule() {
        _classCallCheck(this, QuoteModule);
      };

      QuoteModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({
        type: QuoteModule
      });
      QuoteModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({
        factory: function QuoteModule_Factory(t) {
          return new (t || QuoteModule)();
        },
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ReactiveFormsModule"], _quote_routing_module__WEBPACK_IMPORTED_MODULE_3__["QuoteRoutingModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](QuoteModule, {
          declarations: [_components__WEBPACK_IMPORTED_MODULE_2__["QuoteContainerComponent"], _components__WEBPACK_IMPORTED_MODULE_2__["QuoteComponent"], _components__WEBPACK_IMPORTED_MODULE_2__["QuoteShareModalComponent"], _components__WEBPACK_IMPORTED_MODULE_2__["QuotePreviewComponent"], _components__WEBPACK_IMPORTED_MODULE_2__["ShareFormComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ReactiveFormsModule"], _quote_routing_module__WEBPACK_IMPORTED_MODULE_3__["QuoteRoutingModule"]]
        });
      })();
      /***/

    },

    /***/
    "3jHS":
    /*!*************************************************!*\
      !*** ./src/app/quote/services/quote.service.ts ***!
      \*************************************************/

    /*! exports provided: QUOTESY, QuoteService */

    /***/
    function jHS(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "QUOTESY", function () {
        return QUOTESY;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "QuoteService", function () {
        return QuoteService;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var quotesy__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! quotesy */
      "oHDg");
      /* harmony import */


      var quotesy__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(quotesy__WEBPACK_IMPORTED_MODULE_1__);
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../../environments/environment */
      "AytR");
      /* harmony import */


      var _api_services__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../api-services */
      "UcrH");

      var QUOTESY = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('QUOTESY', {
        providedIn: 'root',
        factory: function factory() {
          return quotesy__WEBPACK_IMPORTED_MODULE_1___default.a;
        }
      });

      var QuoteService = /*#__PURE__*/function () {
        function QuoteService(quotesApi, quotes) {
          _classCallCheck(this, QuoteService);

          this.quotesApi = quotesApi;
          this.quotes = quotes;
          this.quote$$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](null);
          this.quote$ = this.quote$$.asObservable().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["distinctUntilChanged"])());
          this.hasApiUrl = !!_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].apiUrls.quote;
          this.hasShareApiUrl = !!_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].apiUrls.share;
        }

        _createClass(QuoteService, [{
          key: "getRandom",
          value: function getRandom() {
            var _this39 = this;

            return (this.hasApiUrl ? this.quotesApi.getRandom() : Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(this.quotes.random())).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (quote) {
              return _this39.emitQuote(Object.assign({}, quote));
            }));
          }
        }, {
          key: "share",
          value: function share(quote, contactData) {
            return this.hasShareApiUrl ? this.quotesApi.share(quote, contactData) : // eslint-disable-next-line no-console
            Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(null).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function () {
              return console.info('shared: ', quote, contactData);
            }));
          }
        }, {
          key: "emitQuote",
          value: function emitQuote(quote) {
            this.quote$$.next(Object.assign({}, quote));
          }
        }]);

        return QuoteService;
      }();

      QuoteService.ɵfac = function QuoteService_Factory(t) {
        return new (t || QuoteService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_api_services__WEBPACK_IMPORTED_MODULE_5__["QuoteApiService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](QUOTESY));
      };

      QuoteService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: QuoteService,
        factory: QuoteService.ɵfac,
        providedIn: 'root'
      });
      /***/
    },

    /***/
    "6U+y":
    /*!***************************************************************************!*\
      !*** ./src/app/quote/components/quote-preview/quote-preview.component.ts ***!
      \***************************************************************************/

    /*! exports provided: QuotePreviewComponent */

    /***/
    function UY(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "QuotePreviewComponent", function () {
        return QuotePreviewComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");

      function QuotePreviewComponent_blockquote_0_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "blockquote");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "cite");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "\xA0\xA9\xA0");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "em");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.quote.text);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.quote.author);
        }
      }

      var QuotePreviewComponent = function QuotePreviewComponent() {
        _classCallCheck(this, QuotePreviewComponent);
      };

      QuotePreviewComponent.ɵfac = function QuotePreviewComponent_Factory(t) {
        return new (t || QuotePreviewComponent)();
      };

      QuotePreviewComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: QuotePreviewComponent,
        selectors: [["app-quote-preview"]],
        inputs: {
          quote: "quote"
        },
        decls: 1,
        vars: 1,
        consts: [[4, "ngIf"]],
        template: function QuotePreviewComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, QuotePreviewComponent_blockquote_0_Template, 7, 2, "blockquote", 0);
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.quote);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"]],
        styles: ["@charset \"UTF-8\";\n[_nghost-%COMP%] {\n  flex-basis: 50%;\n}\nblockquote[_ngcontent-%COMP%] {\n  padding: 20px;\n  height: 100%;\n  background: #8ccddd;\n  color: #ffffff;\n}\nblockquote[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  padding: 20px;\n  font-size: 26px;\n  text-align: justify;\n  position: relative;\n  display: block;\n  margin-bottom: 20px;\n}\nblockquote[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%]:after, blockquote[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%]:before {\n  position: absolute;\n  font-family: \"icons\";\n}\nblockquote[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%]:before {\n  content: \"\u275D\";\n  top: 0;\n  left: 0;\n  transform: translate(-50%, -20%);\n}\nblockquote[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%]:after {\n  content: \"\uE800\";\n  right: 0;\n  bottom: 0;\n  transform: translate(50%, 20%);\n}\nblockquote[_ngcontent-%COMP%]   cite[_ngcontent-%COMP%] {\n  display: block;\n  text-align: right;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxccXVvdGUtcHJldmlldy5jb21wb25lbnQuc2NzcyIsIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXHNjc3NcXHZhcmlhYmxlcy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGdCQUFnQjtBQUVoQjtFQUNFLGVBQUE7QUFBRjtBQUdBO0VBQ0UsYUFBQTtFQUNBLFlBQUE7RUFDQSxtQkNDWTtFREFaLGNDRGE7QURDZjtBQUVFO0VBQ0UsYUFBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLG1CQUFBO0FBQUo7QUFFSTtFQUVFLGtCQUFBO0VBQ0Esb0JDbEJRO0FEaUJkO0FBSUk7RUFDRSxZQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxnQ0FBQTtBQUZOO0FBS0k7RUFDRSxZQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSw4QkFBQTtBQUhOO0FBT0U7RUFDRSxjQUFBO0VBQ0EsaUJBQUE7QUFMSiIsImZpbGUiOiJxdW90ZS1wcmV2aWV3LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGNoYXJzZXQgXCJVVEYtOFwiO1xuOmhvc3Qge1xuICBmbGV4LWJhc2lzOiA1MCU7XG59XG5cbmJsb2NrcXVvdGUge1xuICBwYWRkaW5nOiAyMHB4O1xuICBoZWlnaHQ6IDEwMCU7XG4gIGJhY2tncm91bmQ6ICM4Y2NkZGQ7XG4gIGNvbG9yOiAjZmZmZmZmO1xufVxuYmxvY2txdW90ZSBzdHJvbmcge1xuICBwYWRkaW5nOiAyMHB4O1xuICBmb250LXNpemU6IDI2cHg7XG4gIHRleHQtYWxpZ246IGp1c3RpZnk7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG59XG5ibG9ja3F1b3RlIHN0cm9uZzphZnRlciwgYmxvY2txdW90ZSBzdHJvbmc6YmVmb3JlIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBmb250LWZhbWlseTogXCJpY29uc1wiO1xufVxuYmxvY2txdW90ZSBzdHJvbmc6YmVmb3JlIHtcbiAgY29udGVudDogXCLinZ1cIjtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtMjAlKTtcbn1cbmJsb2NrcXVvdGUgc3Ryb25nOmFmdGVyIHtcbiAgY29udGVudDogXCLuoIBcIjtcbiAgcmlnaHQ6IDA7XG4gIGJvdHRvbTogMDtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoNTAlLCAyMCUpO1xufVxuYmxvY2txdW90ZSBjaXRlIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xufSIsIi8vIHR5cG9ncmFwaHlcbiRmb250OiBDYWxpYnJpO1xuJGZvbnRfX3NpemU6IDE2cHg7IC8vIDE0cHg7XG4kZm9udF9fZmFsbGJhY2s6IHNhbnMtc2VyaWY7XG4kZm9udF9fcHJpbWFyeTogJ1NvdXJjZVNhbnNQcm8nLCAkZm9udF9fZmFsbGJhY2s7XG4kZm9udF9faWNvbnM6ICdpY29ucyc7XG5cbi8vIGNvbG9yc1xuJGNvbG9yX19ibGFjazogIzAwMDAwMDtcbiRjb2xvcl9fd2hpdGU6ICNmZmZmZmY7XG4kY29sb3JfX2JsdWU6ICM4Y2NkZGQ7XG4kY29sb3JfX2JsdWVfbGlnaHRfZGFyazogIzdDQjZDNDtcbiRjb2xvcl9fYmx1ZV9kYXJrOiAjNjQ5MjlFO1xuXG4vLyBicmVha3BvaW50c1xuJGJyZWFrcG9pbnRfX3NtOiAzMjBweDtcbiRicmVha3BvaW50X19zbV9sOiA0ODBweDsgLy8gNTAwcHhcbiRicmVha3BvaW50X19tZF9zOiA2MjBweDtcbiRicmVha3BvaW50X19tZDogNzY4cHg7XG4kYnJlYWtwb2ludF9fbWRfbDogMTA4MHB4OyAvLyA5MjBweFxuJGJyZWFrcG9pbnRfX2xnOiAxMjgwcHg7XG4iXX0= */"],
        changeDetection: 0
      });
      /***/
    },

    /***/
    "GaGK":
    /*!***********************************************!*\
      !*** ./src/app/quote/quote-routing.module.ts ***!
      \***********************************************/

    /*! exports provided: QuoteRoutingModule */

    /***/
    function GaGK(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "QuoteRoutingModule", function () {
        return QuoteRoutingModule;
      });
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./components */
      "trG8");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var routes = [{
        path: '',
        component: _components__WEBPACK_IMPORTED_MODULE_1__["QuoteContainerComponent"]
      }];

      var QuoteRoutingModule = function QuoteRoutingModule() {
        _classCallCheck(this, QuoteRoutingModule);
      };

      QuoteRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
        type: QuoteRoutingModule
      });
      QuoteRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
        factory: function QuoteRoutingModule_Factory(t) {
          return new (t || QuoteRoutingModule)();
        },
        imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](QuoteRoutingModule, {
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]]
        });
      })();
      /***/

    },

    /***/
    "I6y0":
    /*!*******************************************************************************!*\
      !*** ./src/app/quote/components/quote-container/quote-container.component.ts ***!
      \*******************************************************************************/

    /*! exports provided: QuoteContainerComponent */

    /***/
    function I6y0(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "QuoteContainerComponent", function () {
        return QuoteContainerComponent;
      });
      /* harmony import */


      var _angular_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/animations */
      "R0Ic");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var _quote_share_modal_quote_share_modal_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../quote-share-modal/quote-share-modal.component */
      "OWr9");
      /* harmony import */


      var _view_models__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../view.models */
      "yHeB");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _services__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../../services */
      "fmTG");
      /* harmony import */


      var ngx_smart_modal__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ngx-smart-modal */
      "bqtT");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _quote_quote_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ../quote/quote.component */
      "Lw4S");

      function QuoteContainerComponent_ng_container_0_Template(rf, ctx) {
        if (rf & 1) {
          var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "app-quote", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "button", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function QuoteContainerComponent_ng_container_0_Template_button_click_3_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r3);

            var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();

            return ctx_r2.getRandomQuote();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](4, "async");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "button", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function QuoteContainerComponent_ng_container_0_Template_button_click_5_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r3);

            var quote_r1 = ctx.ngIf;

            var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();

            return ctx_r4.openShareModal(quote_r1);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          var quote_r1 = ctx.ngIf;

          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("quote", quote_r1);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("@isClicked", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](4, 2, ctx_r0.isRefreshBtnClicked$) ? "isClicked" : "");
        }
      }

      var QuoteContainerComponent = /*#__PURE__*/function () {
        function QuoteContainerComponent(quoteService, modalService) {
          _classCallCheck(this, QuoteContainerComponent);

          this.quoteService = quoteService;
          this.modalService = modalService;
          this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
          this.isRefreshBtnClicked$$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](false);
          this.isRefreshBtnClicked$ = this.isRefreshBtnClicked$$.asObservable().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["share"])());
          this.quote$ = this.quoteService.quote$;
        }

        _createClass(QuoteContainerComponent, [{
          key: "handleDoubleClick",
          value: function handleDoubleClick() {
            this.getRandomQuote();
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this40 = this;

            this.quoteService.getRandom().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["take"])(1)).subscribe();
            this.quote$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["takeUntil"])(this.destroy$), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["delay"])(300), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(function () {
              return _this40.isRefreshBtnClicked$$.next(false);
            })).subscribe();
            this.isRefreshBtnClicked$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["takeUntil"])(this.destroy$), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["filter"])(Boolean), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["switchMap"])(function () {
              return _this40.quoteService.getRandom();
            })).subscribe();
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this.destroy$.next();
            this.destroy$.complete();
          }
        }, {
          key: "getRandomQuote",
          value: function getRandomQuote() {
            this.isRefreshBtnClicked$$.next(true);
          }
        }, {
          key: "openShareModal",
          value: function openShareModal(quote) {
            this.listenToShareModalEvents(this.createAndOpenShareModalWithData(quote));
          }
        }, {
          key: "createAndOpenShareModalWithData",
          value: function createAndOpenShareModalWithData(quote) {
            return this.modalService.create(_view_models__WEBPACK_IMPORTED_MODULE_4__["ModalIds"].quoteShare, _quote_share_modal_quote_share_modal_component__WEBPACK_IMPORTED_MODULE_3__["QuoteShareModalComponent"]).setData({
              quote: quote
            }).open();
          }
        }, {
          key: "listenToShareModalEvents",
          value: function listenToShareModalEvents(modal) {
            var _this41 = this;

            // Listen to modal result
            Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["combineLatest"])([modal.onClose, modal.onDataAdded]).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["switchMap"])(function (_ref) {
              var _ref2 = _slicedToArray(_ref, 2),
                  data = _ref2[1];

              if (data) {
                var quote = data.quote,
                    email = data.email,
                    phone = data.phone;
                return _this41.quoteService.share(quote, email ? {
                  email: email
                } : {
                  phone: phone
                });
              }

              return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(null);
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["take"])(1)).subscribe(); // Destroy modal after its close/dismiss to not duplicate its instances within modalService

            Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["race"])(modal.onCloseFinished, modal.onDismissFinished).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(function () {
              return _this41.modalService.removeModal(_view_models__WEBPACK_IMPORTED_MODULE_4__["ModalIds"].quoteShare);
            })).subscribe();
          }
        }]);

        return QuoteContainerComponent;
      }();

      QuoteContainerComponent.ɵfac = function QuoteContainerComponent_Factory(t) {
        return new (t || QuoteContainerComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_services__WEBPACK_IMPORTED_MODULE_6__["QuoteService"]), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](ngx_smart_modal__WEBPACK_IMPORTED_MODULE_7__["NgxSmartModalService"]));
      };

      QuoteContainerComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({
        type: QuoteContainerComponent,
        selectors: [["app-quote-container"]],
        hostBindings: function QuoteContainerComponent_HostBindings(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("dblclick", function QuoteContainerComponent_dblclick_HostBindingHandler() {
              return ctx.handleDoubleClick();
            });
          }
        },
        decls: 2,
        vars: 3,
        consts: [[4, "ngIf"], [3, "quote"], [1, "quote-actions"], ["title", "Get another Quote", 1, "get-quote-btn", 3, "click"], ["title", "Share", 1, "share-quote-btn", 3, "click"]],
        template: function QuoteContainerComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](0, QuoteContainerComponent_ng_container_0_Template, 6, 4, "ng-container", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](1, "async");
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](1, 1, ctx.quote$));
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"], _quote_quote_component__WEBPACK_IMPORTED_MODULE_9__["QuoteComponent"]],
        pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_8__["AsyncPipe"]],
        styles: ["[_nghost-%COMP%] {\n  width: 100%;\n  height: 100%;\n  margin: 0 auto;\n  padding: 0 15px;\n  min-height: 100vh;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  color: #ffffff;\n}\n\n.quote-actions[_ngcontent-%COMP%] {\n  position: absolute;\n  display: flex;\n  outline: none;\n  right: 80px;\n  top: 120px;\n}\n\n.get-quote-btn[_ngcontent-%COMP%] {\n  position: relative;\n  margin: 5px;\n  top: 0;\n  width: 36px;\n  height: 36px;\n  background: url('refresh.svg') no-repeat center center;\n}\n\n@media (max-width: 620px) {\n  .get-quote-btn[_ngcontent-%COMP%] {\n    right: 10px;\n    top: 20px;\n  }\n}\n\n.share-quote-btn[_ngcontent-%COMP%] {\n  position: relative;\n  margin: 5px;\n  top: 0;\n  width: 36px;\n  height: 36px;\n  background: url('share.svg') no-repeat center center;\n}\n\n@media (max-width: 620px) {\n  .share-quote-btn[_ngcontent-%COMP%] {\n    right: 10px;\n    top: 20px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxccXVvdGUtY29udGFpbmVyLmNvbXBvbmVudC5zY3NzIiwiLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcc2Nzc1xcdmFyaWFibGVzLnNjc3MiLCIuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFxzY3NzXFxtaXhpbnMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFLQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsY0NMYTtBRENmOztBQU9BO0VBQ0Usa0JBQUE7RUFDQSxhQUFBO0VBQ0EsYUFBQTtFQUNBLFdBQUE7RUFDQSxVQUFBO0FBSkY7O0FBT0E7RUFDRSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxNQUFBO0VBQ0EsV0ExQlM7RUEyQlQsWUEzQlM7RUE0QlQsc0RBQUE7QUFKRjs7QUVORTtFRklGO0lBU0ksV0FBQTtJQUNBLFNBQUE7RUFIRjtBQUNGOztBQU1BO0VBQ0Usa0JBQUE7RUFDQSxXQUFBO0VBQ0EsTUFBQTtFQUNBLFdBeENTO0VBeUNULFlBekNTO0VBMENULG9EQUFBO0FBSEY7O0FFckJFO0VGa0JGO0lBU0ksV0FBQTtJQUNBLFNBQUE7RUFGRjtBQUNGIiwiZmlsZSI6InF1b3RlLWNvbnRhaW5lci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgXCJ+c2Nzcy9taXhpbnNcIjtcbkBpbXBvcnQgXCJ+c2Nzcy92YXJpYWJsZXNcIjtcblxuJGJ0bi1zaXplOiAzNnB4O1xuXG46aG9zdCB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIG1hcmdpbjogMCBhdXRvO1xuICBwYWRkaW5nOiAwIDE1cHg7XG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgY29sb3I6ICRjb2xvcl9fd2hpdGU7XG59XG5cbi5xdW90ZS1hY3Rpb25zIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBvdXRsaW5lOiBub25lO1xuICByaWdodDogODBweDtcbiAgdG9wOiAxMjBweDtcbn1cblxuLmdldC1xdW90ZS1idG4ge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG1hcmdpbjogNXB4O1xuICB0b3A6IDA7XG4gIHdpZHRoOiAkYnRuLXNpemU7XG4gIGhlaWdodDogJGJ0bi1zaXplO1xuICBiYWNrZ3JvdW5kOiB1cmwoJy4uLy4uLy4uLy4uL2Fzc2V0cy9zdGF0aWMvcmVmcmVzaC5zdmcnKSBuby1yZXBlYXQgY2VudGVyIGNlbnRlcjtcblxuICBAaW5jbHVkZSBtZF9zIHtcbiAgICByaWdodDogMTBweDtcbiAgICB0b3A6IDIwcHg7XG4gIH1cbn1cblxuLnNoYXJlLXF1b3RlLWJ0biB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgbWFyZ2luOiA1cHg7XG4gIHRvcDogMDtcbiAgd2lkdGg6ICRidG4tc2l6ZTtcbiAgaGVpZ2h0OiAkYnRuLXNpemU7XG4gIGJhY2tncm91bmQ6IHVybCgnLi4vLi4vLi4vLi4vYXNzZXRzL3N0YXRpYy9zaGFyZS5zdmcnKSBuby1yZXBlYXQgY2VudGVyIGNlbnRlcjtcblxuICBAaW5jbHVkZSBtZF9zIHtcbiAgICByaWdodDogMTBweDtcbiAgICB0b3A6IDIwcHg7XG4gIH1cbn1cbiIsIi8vIHR5cG9ncmFwaHlcbiRmb250OiBDYWxpYnJpO1xuJGZvbnRfX3NpemU6IDE2cHg7IC8vIDE0cHg7XG4kZm9udF9fZmFsbGJhY2s6IHNhbnMtc2VyaWY7XG4kZm9udF9fcHJpbWFyeTogJ1NvdXJjZVNhbnNQcm8nLCAkZm9udF9fZmFsbGJhY2s7XG4kZm9udF9faWNvbnM6ICdpY29ucyc7XG5cbi8vIGNvbG9yc1xuJGNvbG9yX19ibGFjazogIzAwMDAwMDtcbiRjb2xvcl9fd2hpdGU6ICNmZmZmZmY7XG4kY29sb3JfX2JsdWU6ICM4Y2NkZGQ7XG4kY29sb3JfX2JsdWVfbGlnaHRfZGFyazogIzdDQjZDNDtcbiRjb2xvcl9fYmx1ZV9kYXJrOiAjNjQ5MjlFO1xuXG4vLyBicmVha3BvaW50c1xuJGJyZWFrcG9pbnRfX3NtOiAzMjBweDtcbiRicmVha3BvaW50X19zbV9sOiA0ODBweDsgLy8gNTAwcHhcbiRicmVha3BvaW50X19tZF9zOiA2MjBweDtcbiRicmVha3BvaW50X19tZDogNzY4cHg7XG4kYnJlYWtwb2ludF9fbWRfbDogMTA4MHB4OyAvLyA5MjBweFxuJGJyZWFrcG9pbnRfX2xnOiAxMjgwcHg7XG4iLCJAaW1wb3J0ICcuL3ZhcmlhYmxlcyc7XG5cbkBtaXhpbiBtZCB7XG4gIEBtZWRpYSAobWF4LXdpZHRoOiAkYnJlYWtwb2ludF9fbWQpIHtcbiAgICBAY29udGVudDtcbiAgfVxufVxuXG5AbWl4aW4gbGcge1xuICBAbWVkaWEgKG1heC13aWR0aDogJGJyZWFrcG9pbnRfX2xnKSB7XG4gICAgQGNvbnRlbnQ7XG4gIH1cbn1cblxuQG1peGluIG1kX2wge1xuICBAbWVkaWEgKG1heC13aWR0aDogJGJyZWFrcG9pbnRfX21kX2wpIHtcbiAgICBAY29udGVudDtcbiAgfVxufVxuXG5AbWl4aW4gbWRfcyB7XG4gIEBtZWRpYSAobWF4LXdpZHRoOiAkYnJlYWtwb2ludF9fbWRfcykge1xuICAgIEBjb250ZW50O1xuICB9XG59XG5cbkBtaXhpbiBzbV9sIHtcbiAgQG1lZGlhIChtYXgtd2lkdGg6ICRicmVha3BvaW50X19zbV9sKSB7XG4gICAgQGNvbnRlbnQ7XG4gIH1cbn1cbiJdfQ== */"],
        data: {
          animation: [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('isClicked', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('isClicked', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
            transform: 'rotate(360deg)'
          })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('* => isClicked', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('300ms ease-out'))])]
        },
        changeDetection: 0
      });
      /***/
    },

    /***/
    "Lw4S":
    /*!***********************************************************!*\
      !*** ./src/app/quote/components/quote/quote.component.ts ***!
      \***********************************************************/

    /*! exports provided: QuoteComponent */

    /***/
    function Lw4S(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "QuoteComponent", function () {
        return QuoteComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");

      function QuoteComponent_ng_container_0_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "blockquote", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "cite");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r0.quote.text, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("\xA9", ctx_r0.quote.author, "");
        }
      }

      var QuoteComponent = function QuoteComponent() {
        _classCallCheck(this, QuoteComponent);
      };

      QuoteComponent.ɵfac = function QuoteComponent_Factory(t) {
        return new (t || QuoteComponent)();
      };

      QuoteComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: QuoteComponent,
        selectors: [["app-quote"]],
        inputs: {
          quote: "quote"
        },
        decls: 1,
        vars: 1,
        consts: [[4, "ngIf"], [1, "quote"], [1, "quote__blockquote"]],
        template: function QuoteComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, QuoteComponent_ng_container_0_Template, 7, 2, "ng-container", 0);
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.quote);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"]],
        styles: ["@charset \"UTF-8\";\n.quote[_ngcontent-%COMP%] {\n  max-width: 1100px;\n}\n.quote__blockquote[_ngcontent-%COMP%] {\n  position: relative;\n  margin: 0 auto;\n  padding: 190px 190px 190px;\n}\n@media (max-width: 1080px) {\n  .quote__blockquote[_ngcontent-%COMP%] {\n    padding: 155px 155px 155px;\n  }\n}\n@media (max-width: 768px) {\n  .quote__blockquote[_ngcontent-%COMP%] {\n    padding: 155px 155px 155px;\n  }\n}\n@media (max-width: 620px) {\n  .quote__blockquote[_ngcontent-%COMP%] {\n    padding: 110px 110px 110px;\n  }\n}\n@media (max-width: 480px) {\n  .quote__blockquote[_ngcontent-%COMP%] {\n    padding: 80px 15px 80px;\n  }\n}\n.quote__blockquote[_ngcontent-%COMP%]::before, .quote__blockquote[_ngcontent-%COMP%]::after {\n  font-family: \"icons\";\n  position: absolute;\n  font-size: 150px;\n  opacity: 0.5;\n}\n@media (max-width: 1080px) {\n  .quote__blockquote[_ngcontent-%COMP%]::before, .quote__blockquote[_ngcontent-%COMP%]::after {\n    font-size: 120px;\n  }\n}\n@media (max-width: 620px) {\n  .quote__blockquote[_ngcontent-%COMP%]::before, .quote__blockquote[_ngcontent-%COMP%]::after {\n    font-size: 100px;\n  }\n}\n@media (max-width: 480px) {\n  .quote__blockquote[_ngcontent-%COMP%]::before, .quote__blockquote[_ngcontent-%COMP%]::after {\n    font-size: 60px;\n  }\n}\n.quote__blockquote[_ngcontent-%COMP%]::before {\n  content: \"\u275D\";\n  left: 0;\n  top: 0;\n}\n.quote__blockquote[_ngcontent-%COMP%]::after {\n  content: \"\uE800\";\n  right: 0;\n  bottom: 0;\n}\n.quote__blockquote[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 40px;\n  text-align: justify;\n  line-height: 50px;\n}\n@media (max-width: 768px) {\n  .quote__blockquote[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    font-size: 35px;\n    line-height: 40px;\n  }\n}\n@media (max-width: 620px) {\n  .quote__blockquote[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    font-size: 20px;\n    line-height: 30px;\n  }\n}\n.quote__blockquote[_ngcontent-%COMP%]   cite[_ngcontent-%COMP%] {\n  margin-top: 20px;\n  font-size: 35px;\n  line-height: 60px;\n  text-align: right;\n  display: block;\n}\n@media (max-width: 768px) {\n  .quote__blockquote[_ngcontent-%COMP%]   cite[_ngcontent-%COMP%] {\n    line-height: 40px;\n    font-size: 30px;\n  }\n}\n@media (max-width: 620px) {\n  .quote__blockquote[_ngcontent-%COMP%]   cite[_ngcontent-%COMP%] {\n    font-size: 15px;\n    line-height: 25px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxccXVvdGUuY29tcG9uZW50LnNjc3MiLCIuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFxzY3NzXFxtaXhpbnMuc2NzcyIsIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXHNjc3NcXHZhcmlhYmxlcy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGdCQUFnQjtBQWNoQjtFQUNFLGlCQVpVO0FBQVo7QUFjRTtFQUNFLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLDBCQUFBO0FBWko7QUNPRTtFREVBO0lBTUksMEJBQUE7RUFYSjtBQUNGO0FDVkU7RURjQTtJQVVJLDBCQUFBO0VBVko7QUFDRjtBQ0dFO0VESkE7SUFjSSwwQkFBQTtFQVRKO0FBQ0Y7QUNJRTtFRFZBO0lBa0JJLHVCQUFBO0VBUko7QUFDRjtBQVVJO0VBRUUsb0JFbkNRO0VGb0NSLGtCQUFBO0VBQ0EsZ0JBakNtQjtFQWtDbkIsWUFBQTtBQVROO0FDbkJFO0VEdUJFO0lBUUksZ0JBcENlO0VBNEJyQjtBQUNGO0FDbEJFO0VEaUJFO0lBWUksZ0JBdkNlO0VBZ0NyQjtBQUNGO0FDakJFO0VEV0U7SUFnQkksZUExQ2U7RUFvQ3JCO0FBQ0Y7QUFTSTtFQUNFLFlBQUE7RUFDQSxPQUFBO0VBQ0EsTUFBQTtBQVBOO0FBVUk7RUFDRSxZQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7QUFSTjtBQWFFO0VBQ0UsZUFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7QUFYSjtBQzdERTtFRHFFQTtJQU1JLGVBQUE7SUFDQSxpQkFBQTtFQVZKO0FBQ0Y7QUNqREU7RURtREE7SUFXSSxlQUFBO0lBQ0EsaUJBQUE7RUFUSjtBQUNGO0FBYUU7RUFDRSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtBQVhKO0FDaEZFO0VEc0ZBO0lBUUksaUJBQUE7SUFDQSxlQUFBO0VBVko7QUFDRjtBQ3BFRTtFRG9FQTtJQWFJLGVBQUE7SUFDQSxpQkFBQTtFQVRKO0FBQ0YiLCJmaWxlIjoicXVvdGUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAY2hhcnNldCBcIlVURi04XCI7XG4ucXVvdGUge1xuICBtYXgtd2lkdGg6IDExMDBweDtcbn1cbi5xdW90ZV9fYmxvY2txdW90ZSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIHBhZGRpbmc6IDE5MHB4IDE5MHB4IDE5MHB4O1xufVxuQG1lZGlhIChtYXgtd2lkdGg6IDEwODBweCkge1xuICAucXVvdGVfX2Jsb2NrcXVvdGUge1xuICAgIHBhZGRpbmc6IDE1NXB4IDE1NXB4IDE1NXB4O1xuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgLnF1b3RlX19ibG9ja3F1b3RlIHtcbiAgICBwYWRkaW5nOiAxNTVweCAxNTVweCAxNTVweDtcbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDYyMHB4KSB7XG4gIC5xdW90ZV9fYmxvY2txdW90ZSB7XG4gICAgcGFkZGluZzogMTEwcHggMTEwcHggMTEwcHg7XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA0ODBweCkge1xuICAucXVvdGVfX2Jsb2NrcXVvdGUge1xuICAgIHBhZGRpbmc6IDgwcHggMTVweCA4MHB4O1xuICB9XG59XG4ucXVvdGVfX2Jsb2NrcXVvdGU6OmJlZm9yZSwgLnF1b3RlX19ibG9ja3F1b3RlOjphZnRlciB7XG4gIGZvbnQtZmFtaWx5OiBcImljb25zXCI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgZm9udC1zaXplOiAxNTBweDtcbiAgb3BhY2l0eTogMC41O1xufVxuQG1lZGlhIChtYXgtd2lkdGg6IDEwODBweCkge1xuICAucXVvdGVfX2Jsb2NrcXVvdGU6OmJlZm9yZSwgLnF1b3RlX19ibG9ja3F1b3RlOjphZnRlciB7XG4gICAgZm9udC1zaXplOiAxMjBweDtcbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDYyMHB4KSB7XG4gIC5xdW90ZV9fYmxvY2txdW90ZTo6YmVmb3JlLCAucXVvdGVfX2Jsb2NrcXVvdGU6OmFmdGVyIHtcbiAgICBmb250LXNpemU6IDEwMHB4O1xuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogNDgwcHgpIHtcbiAgLnF1b3RlX19ibG9ja3F1b3RlOjpiZWZvcmUsIC5xdW90ZV9fYmxvY2txdW90ZTo6YWZ0ZXIge1xuICAgIGZvbnQtc2l6ZTogNjBweDtcbiAgfVxufVxuLnF1b3RlX19ibG9ja3F1b3RlOjpiZWZvcmUge1xuICBjb250ZW50OiBcIuKdnVwiO1xuICBsZWZ0OiAwO1xuICB0b3A6IDA7XG59XG4ucXVvdGVfX2Jsb2NrcXVvdGU6OmFmdGVyIHtcbiAgY29udGVudDogXCLuoIBcIjtcbiAgcmlnaHQ6IDA7XG4gIGJvdHRvbTogMDtcbn1cbi5xdW90ZV9fYmxvY2txdW90ZSBwIHtcbiAgZm9udC1zaXplOiA0MHB4O1xuICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xuICBsaW5lLWhlaWdodDogNTBweDtcbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xuICAucXVvdGVfX2Jsb2NrcXVvdGUgcCB7XG4gICAgZm9udC1zaXplOiAzNXB4O1xuICAgIGxpbmUtaGVpZ2h0OiA0MHB4O1xuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogNjIwcHgpIHtcbiAgLnF1b3RlX19ibG9ja3F1b3RlIHAge1xuICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICBsaW5lLWhlaWdodDogMzBweDtcbiAgfVxufVxuLnF1b3RlX19ibG9ja3F1b3RlIGNpdGUge1xuICBtYXJnaW4tdG9wOiAyMHB4O1xuICBmb250LXNpemU6IDM1cHg7XG4gIGxpbmUtaGVpZ2h0OiA2MHB4O1xuICB0ZXh0LWFsaWduOiByaWdodDtcbiAgZGlzcGxheTogYmxvY2s7XG59XG5AbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgLnF1b3RlX19ibG9ja3F1b3RlIGNpdGUge1xuICAgIGxpbmUtaGVpZ2h0OiA0MHB4O1xuICAgIGZvbnQtc2l6ZTogMzBweDtcbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDYyMHB4KSB7XG4gIC5xdW90ZV9fYmxvY2txdW90ZSBjaXRlIHtcbiAgICBmb250LXNpemU6IDE1cHg7XG4gICAgbGluZS1oZWlnaHQ6IDI1cHg7XG4gIH1cbn0iLCJAaW1wb3J0ICcuL3ZhcmlhYmxlcyc7XG5cbkBtaXhpbiBtZCB7XG4gIEBtZWRpYSAobWF4LXdpZHRoOiAkYnJlYWtwb2ludF9fbWQpIHtcbiAgICBAY29udGVudDtcbiAgfVxufVxuXG5AbWl4aW4gbGcge1xuICBAbWVkaWEgKG1heC13aWR0aDogJGJyZWFrcG9pbnRfX2xnKSB7XG4gICAgQGNvbnRlbnQ7XG4gIH1cbn1cblxuQG1peGluIG1kX2wge1xuICBAbWVkaWEgKG1heC13aWR0aDogJGJyZWFrcG9pbnRfX21kX2wpIHtcbiAgICBAY29udGVudDtcbiAgfVxufVxuXG5AbWl4aW4gbWRfcyB7XG4gIEBtZWRpYSAobWF4LXdpZHRoOiAkYnJlYWtwb2ludF9fbWRfcykge1xuICAgIEBjb250ZW50O1xuICB9XG59XG5cbkBtaXhpbiBzbV9sIHtcbiAgQG1lZGlhIChtYXgtd2lkdGg6ICRicmVha3BvaW50X19zbV9sKSB7XG4gICAgQGNvbnRlbnQ7XG4gIH1cbn1cbiIsIi8vIHR5cG9ncmFwaHlcbiRmb250OiBDYWxpYnJpO1xuJGZvbnRfX3NpemU6IDE2cHg7IC8vIDE0cHg7XG4kZm9udF9fZmFsbGJhY2s6IHNhbnMtc2VyaWY7XG4kZm9udF9fcHJpbWFyeTogJ1NvdXJjZVNhbnNQcm8nLCAkZm9udF9fZmFsbGJhY2s7XG4kZm9udF9faWNvbnM6ICdpY29ucyc7XG5cbi8vIGNvbG9yc1xuJGNvbG9yX19ibGFjazogIzAwMDAwMDtcbiRjb2xvcl9fd2hpdGU6ICNmZmZmZmY7XG4kY29sb3JfX2JsdWU6ICM4Y2NkZGQ7XG4kY29sb3JfX2JsdWVfbGlnaHRfZGFyazogIzdDQjZDNDtcbiRjb2xvcl9fYmx1ZV9kYXJrOiAjNjQ5MjlFO1xuXG4vLyBicmVha3BvaW50c1xuJGJyZWFrcG9pbnRfX3NtOiAzMjBweDtcbiRicmVha3BvaW50X19zbV9sOiA0ODBweDsgLy8gNTAwcHhcbiRicmVha3BvaW50X19tZF9zOiA2MjBweDtcbiRicmVha3BvaW50X19tZDogNzY4cHg7XG4kYnJlYWtwb2ludF9fbWRfbDogMTA4MHB4OyAvLyA5MjBweFxuJGJyZWFrcG9pbnRfX2xnOiAxMjgwcHg7XG4iXX0= */"],
        changeDetection: 0
      });
      /***/
    },

    /***/
    "OWr9":
    /*!***********************************************************************************!*\
      !*** ./src/app/quote/components/quote-share-modal/quote-share-modal.component.ts ***!
      \***********************************************************************************/

    /*! exports provided: QuoteShareModalComponent */

    /***/
    function OWr9(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "QuoteShareModalComponent", function () {
        return QuoteShareModalComponent;
      });
      /* harmony import */


      var _view_models__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../view.models */
      "yHeB");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var ngx_smart_modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ngx-smart-modal */
      "bqtT");
      /* harmony import */


      var _quote_preview_quote_preview_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../quote-preview/quote-preview.component */
      "6U+y");
      /* harmony import */


      var _share_form_share_form_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../share-form/share-form.component */
      "VgV8");

      var QuoteShareModalComponent = /*#__PURE__*/function () {
        function QuoteShareModalComponent(modalService) {
          _classCallCheck(this, QuoteShareModalComponent);

          this.modalService = modalService;
        }

        _createClass(QuoteShareModalComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.modal = this.modalService.get(_view_models__WEBPACK_IMPORTED_MODULE_0__["ModalIds"].quoteShare);

            var _this$modal$getData = this.modal.getData(),
                quote = _this$modal$getData.quote;

            this.quote = quote;
          }
        }, {
          key: "onShareSubmit",
          value: function onShareSubmit(contactData) {
            this.modal.setData(Object.assign({
              quote: this.quote
            }, contactData), true);
            this.modal.close();
          }
        }, {
          key: "onShareCancel",
          value: function onShareCancel() {
            this.modal.setData(null, true);
            this.modal.close();
          }
        }]);

        return QuoteShareModalComponent;
      }();

      QuoteShareModalComponent.ɵfac = function QuoteShareModalComponent_Factory(t) {
        return new (t || QuoteShareModalComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](ngx_smart_modal__WEBPACK_IMPORTED_MODULE_2__["NgxSmartModalService"]));
      };

      QuoteShareModalComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: QuoteShareModalComponent,
        selectors: [["app-share-modal"]],
        decls: 2,
        vars: 1,
        consts: [[3, "quote"], [3, "shareSubmit", "shareCancel"]],
        template: function QuoteShareModalComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-quote-preview", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "app-share-form", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("shareSubmit", function QuoteShareModalComponent_Template_app_share_form_shareSubmit_1_listener($event) {
              return ctx.onShareSubmit($event);
            })("shareCancel", function QuoteShareModalComponent_Template_app_share_form_shareCancel_1_listener() {
              return ctx.onShareCancel();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("quote", ctx.quote);
          }
        },
        directives: [_quote_preview_quote_preview_component__WEBPACK_IMPORTED_MODULE_3__["QuotePreviewComponent"], _share_form_share_form_component__WEBPACK_IMPORTED_MODULE_4__["ShareFormComponent"]],
        styles: ["[_nghost-%COMP%] {\n  display: flex;\n}\n@media (max-width: 768px) {\n  [_nghost-%COMP%] {\n    flex-direction: column;\n  }\n}\n  ngx-smart-modal .overlay {\n  display: flex;\n}\n  .nsm-content {\n  padding: 0;\n  margin: 0;\n}\n  .nsm-dialog {\n  max-width: 768px;\n  align-self: center;\n  min-height: unset;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxccXVvdGUtc2hhcmUtbW9kYWwuY29tcG9uZW50LnNjc3MiLCIuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFxzY3NzXFxtaXhpbnMuc2NzcyIsIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXHNjc3NcXHZhcmlhYmxlcy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUdBO0VBQ0UsYUFBQTtBQUZGO0FDQ0U7RURBRjtJQUlJLHNCQUFBO0VBREY7QUFDRjtBQUtFO0VBQ0UsYUFBQTtBQUZKO0FBS0U7RUFDRSxVQUFBO0VBQ0EsU0FBQTtBQUhKO0FBTUU7RUFDRSxnQkVKYTtFRktiLGtCQUFBO0VBQ0EsaUJBQUE7QUFKSiIsImZpbGUiOiJxdW90ZS1zaGFyZS1tb2RhbC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgJ35zY3NzL3ZhcmlhYmxlcyc7XG5AaW1wb3J0ICd+c2Nzcy9taXhpbnMnO1xuXG46aG9zdCB7XG4gIGRpc3BsYXk6IGZsZXg7XG5cbiAgQGluY2x1ZGUgbWQge1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIH1cbn1cblxuOjpuZy1kZWVwIHtcbiAgbmd4LXNtYXJ0LW1vZGFsIC5vdmVybGF5IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICB9XG5cbiAgLm5zbS1jb250ZW50IHtcbiAgICBwYWRkaW5nOiAwO1xuICAgIG1hcmdpbjogMDtcbiAgfVxuXG4gIC5uc20tZGlhbG9nIHtcbiAgICBtYXgtd2lkdGg6ICRicmVha3BvaW50X19tZDtcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XG4gICAgbWluLWhlaWdodDogdW5zZXQ7XG4gIH1cbn1cbiIsIkBpbXBvcnQgJy4vdmFyaWFibGVzJztcblxuQG1peGluIG1kIHtcbiAgQG1lZGlhIChtYXgtd2lkdGg6ICRicmVha3BvaW50X19tZCkge1xuICAgIEBjb250ZW50O1xuICB9XG59XG5cbkBtaXhpbiBsZyB7XG4gIEBtZWRpYSAobWF4LXdpZHRoOiAkYnJlYWtwb2ludF9fbGcpIHtcbiAgICBAY29udGVudDtcbiAgfVxufVxuXG5AbWl4aW4gbWRfbCB7XG4gIEBtZWRpYSAobWF4LXdpZHRoOiAkYnJlYWtwb2ludF9fbWRfbCkge1xuICAgIEBjb250ZW50O1xuICB9XG59XG5cbkBtaXhpbiBtZF9zIHtcbiAgQG1lZGlhIChtYXgtd2lkdGg6ICRicmVha3BvaW50X19tZF9zKSB7XG4gICAgQGNvbnRlbnQ7XG4gIH1cbn1cblxuQG1peGluIHNtX2wge1xuICBAbWVkaWEgKG1heC13aWR0aDogJGJyZWFrcG9pbnRfX3NtX2wpIHtcbiAgICBAY29udGVudDtcbiAgfVxufVxuIiwiLy8gdHlwb2dyYXBoeVxuJGZvbnQ6IENhbGlicmk7XG4kZm9udF9fc2l6ZTogMTZweDsgLy8gMTRweDtcbiRmb250X19mYWxsYmFjazogc2Fucy1zZXJpZjtcbiRmb250X19wcmltYXJ5OiAnU291cmNlU2Fuc1BybycsICRmb250X19mYWxsYmFjaztcbiRmb250X19pY29uczogJ2ljb25zJztcblxuLy8gY29sb3JzXG4kY29sb3JfX2JsYWNrOiAjMDAwMDAwO1xuJGNvbG9yX193aGl0ZTogI2ZmZmZmZjtcbiRjb2xvcl9fYmx1ZTogIzhjY2RkZDtcbiRjb2xvcl9fYmx1ZV9saWdodF9kYXJrOiAjN0NCNkM0O1xuJGNvbG9yX19ibHVlX2Rhcms6ICM2NDkyOUU7XG5cbi8vIGJyZWFrcG9pbnRzXG4kYnJlYWtwb2ludF9fc206IDMyMHB4O1xuJGJyZWFrcG9pbnRfX3NtX2w6IDQ4MHB4OyAvLyA1MDBweFxuJGJyZWFrcG9pbnRfX21kX3M6IDYyMHB4O1xuJGJyZWFrcG9pbnRfX21kOiA3NjhweDtcbiRicmVha3BvaW50X19tZF9sOiAxMDgwcHg7IC8vIDkyMHB4XG4kYnJlYWtwb2ludF9fbGc6IDEyODBweDtcbiJdfQ== */"],
        changeDetection: 0
      });
      /***/
    },

    /***/
    "Qk7o":
    /*!*********************************************************!*\
      !*** ./src/app/quote/api-services/quote-api.service.ts ***!
      \*********************************************************/

    /*! exports provided: QuoteApiService */

    /***/
    function Qk7o(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "QuoteApiService", function () {
        return QuoteApiService;
      });
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../../environments/environment */
      "AytR");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var QuoteApiService = /*#__PURE__*/function () {
        function QuoteApiService(http) {
          _classCallCheck(this, QuoteApiService);

          this.http = http;
          this.apiBase = _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrls.quote;
          this.shareApiBase = _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrls.share;
        }
        /**
         *
         * @returns {Observable<Quote>}
         */


        _createClass(QuoteApiService, [{
          key: "getAll",
          value: function getAll() {
            var url = "".concat(this.apiBase, "/quotes");
            return this.http.get(url);
          }
          /**
           * @returns {Observable<Quote>}
           */

        }, {
          key: "getRandom",
          value: function getRandom() {
            var url = "".concat(this.apiBase, "/quotes/random");
            return this.http.get(url);
          }
          /**
           * @param {string} tag
           * @returns {Observable<Quote>}
           */

        }, {
          key: "getRandomByTag",
          value: function getRandomByTag(tag) {
            var url = "".concat(this.apiBase, "/quotes/random-by-tag");
            var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpParams"]({
              fromObject: {
                tag: tag
              }
            });
            return this.http.get(url, {
              params: params
            });
          }
        }, {
          key: "share",
          value: function share(quote, contactDetails) {
            var url = "".concat(this.shareApiBase, "/share");
            return this.http.post(url, Object.assign({
              quote: quote
            }, contactDetails));
          }
        }, {
          key: "create",
          value: function create(quote) {
            var url = "".concat(this.apiBase, "/quotes"); // TODO

            return this.http.post(url, {
              quote: quote
            });
          }
        }, {
          key: "delete",
          value: function _delete(quote) {
            var url = "".concat(this.apiBase, "/quotes"); // TODO

            return this.http["delete"](url);
          }
        }, {
          key: "edit",
          value: function edit(quote) {
            var url = "".concat(this.apiBase, "/quotes"); // TODO

            return this.http.put(url, quote);
          }
        }]);

        return QuoteApiService;
      }();

      QuoteApiService.ɵfac = function QuoteApiService_Factory(t) {
        return new (t || QuoteApiService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"]));
      };

      QuoteApiService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
        token: QuoteApiService,
        factory: QuoteApiService.ɵfac,
        providedIn: 'root'
      });
      /***/
    },

    /***/
    "UcrH":
    /*!*********************************************!*\
      !*** ./src/app/quote/api-services/index.ts ***!
      \*********************************************/

    /*! exports provided: QuoteApiService */

    /***/
    function UcrH(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _quote_api_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./quote-api.service */
      "Qk7o");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "QuoteApiService", function () {
        return _quote_api_service__WEBPACK_IMPORTED_MODULE_0__["QuoteApiService"];
      });
      /***/

    },

    /***/
    "VgV8":
    /*!*********************************************************************!*\
      !*** ./src/app/quote/components/share-form/share-form.component.ts ***!
      \*********************************************************************/

    /*! exports provided: ShareFormComponent */

    /***/
    function VgV8(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ShareFormComponent", function () {
        return ShareFormComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");

      function ShareFormComponent_ng_container_5_Template(rf, ctx) {
        if (rf & 1) {
          var _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ShareFormComponent_ng_container_5_Template_button_click_1_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4);

            var shareOption_r2 = ctx.$implicit;

            var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r3.selectShareOption(shareOption_r2);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          var shareOption_r2 = ctx.$implicit;

          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("active", ctx_r0.isShareOptionActive(shareOption_r2));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", shareOption_r2.title, " ");
        }
      }

      function ShareFormComponent_div_7_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "input", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("type", ctx_r1.selectedShareOption.inputType)("formControl", ctx_r1.shareFormControl)("placeholder", ctx_r1.selectedShareOption.placeholder);
        }
      } // eslint-disable-next-line max-len


      var EMAIL_REG_EX = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

      var ShareFormComponent = /*#__PURE__*/function () {
        function ShareFormComponent() {
          _classCallCheck(this, ShareFormComponent);

          this.shareOptions = [{
            type: 'email',
            inputType: 'email',
            title: 'Email',
            placeholder: 'email@example.com',
            validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern(EMAIL_REG_EX)]
          }, {
            type: 'phone',
            inputType: 'tel',
            title: 'Phone',
            placeholder: '+380999998877',
            validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(15)]
          }];
          this.selectedShareOption = this.shareOptions[0];
          this.shareSubmit = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
          this.shareCancel = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        }

        _createClass(ShareFormComponent, [{
          key: "selectShareOption",
          value: function selectShareOption(shareOption) {
            this.shareFormControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', shareOption.validators);
            this.selectedShareOption = shareOption;
          }
        }, {
          key: "isShareOptionActive",
          value: function isShareOptionActive(shareOption) {
            return this.selectedShareOption === shareOption;
          }
        }, {
          key: "submit",
          value: function submit() {
            if (!this.isShareFormValid) {
              return;
            }

            this.shareSubmit.emit(_defineProperty({}, this.selectedShareOption.type, this.shareFormControl.value));
          }
        }, {
          key: "dismiss",
          value: function dismiss() {
            this.shareCancel.emit();
          }
        }, {
          key: "isShareFormValid",
          get: function get() {
            return this.shareFormControl && this.shareFormControl.valid;
          }
        }]);

        return ShareFormComponent;
      }();

      ShareFormComponent.ɵfac = function ShareFormComponent_Factory(t) {
        return new (t || ShareFormComponent)();
      };

      ShareFormComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: ShareFormComponent,
        selectors: [["app-share-form"]],
        outputs: {
          shareSubmit: "shareSubmit",
          shareCancel: "shareCancel"
        },
        decls: 13,
        vars: 3,
        consts: [[1, "share-form-wrapper"], [1, "toggler-wrapper"], [1, "toggler-wrapper-options"], [4, "ngFor", "ngForOf"], ["class", "form-control-wrapper", 4, "ngIf"], [1, "button-wrapper"], ["type", "submit", 3, "disabled", "click"], [1, "cancel-btn", 3, "click"], [3, "click"], [1, "form-control-wrapper"], [3, "type", "formControl", "placeholder"]],
        template: function ShareFormComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Share via:\xA0");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, ShareFormComponent_ng_container_5_Template, 3, 3, "ng-container", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, ShareFormComponent_div_7_Template, 3, 3, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ShareFormComponent_Template_button_click_9_listener() {
              return ctx.submit();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " Send ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "button", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ShareFormComponent_Template_button_click_11_listener() {
              return ctx.dismiss();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Dismiss");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.shareOptions);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.selectedShareOption);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx.isShareFormValid);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlDirective"]],
        styles: ["[_nghost-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  flex-basis: 50%;\n  padding: 20px;\n}\n\n.share-form-wrapper[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  margin-bottom: auto;\n}\n\n.share-form-wrapper[_ngcontent-%COMP%]   .toggler-wrapper[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n}\n\n.share-form-wrapper[_ngcontent-%COMP%]   .toggler-wrapper[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  margin-bottom: 15px;\n}\n\n.share-form-wrapper[_ngcontent-%COMP%]   .toggler-wrapper-options[_ngcontent-%COMP%] {\n  display: flex;\n  border-radius: 10px;\n  overflow: hidden;\n  margin-right: auto;\n}\n\n.share-form-wrapper[_ngcontent-%COMP%]   .toggler-wrapper-options[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  padding: 10px 20px;\n  font-size: 14px;\n  font-weight: bold;\n  color: #ffffff;\n  background: #7CB6C4;\n}\n\n.share-form-wrapper[_ngcontent-%COMP%]   .toggler-wrapper-options[_ngcontent-%COMP%]   button.active[_ngcontent-%COMP%] {\n  background: #64929E;\n}\n\n.share-form-wrapper[_ngcontent-%COMP%]   .form-control-wrapper[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  width: 100%;\n  border: 2px solid #7CB6C4;\n  border-radius: 10px;\n  padding: 10px 20px;\n  margin-bottom: 20px;\n}\n\n.share-form-wrapper[_ngcontent-%COMP%]   .form-control-wrapper[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus {\n  border-color: #64929E;\n}\n\n.button-wrapper[_ngcontent-%COMP%] {\n  margin-top: auto;\n  align-self: flex-end;\n}\n\n.button-wrapper[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  padding: 10px 20px;\n  font-size: 14px;\n  background: #7CB6C4;\n  border-radius: 18px;\n  color: #fff;\n  font-weight: bold;\n}\n\n.button-wrapper[_ngcontent-%COMP%]   button.cancel-btn[_ngcontent-%COMP%] {\n  background: none;\n  color: #7CB6C4;\n  border-radius: 0;\n  border-bottom: 2px solid transparent;\n  padding: 5px 0;\n}\n\n.button-wrapper[_ngcontent-%COMP%]   button.cancel-btn[_ngcontent-%COMP%]:hover {\n  color: #64929E;\n  border-bottom: 2px solid #64929E;\n  background: none;\n}\n\n.button-wrapper[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover {\n  background: #64929E;\n}\n\n.button-wrapper[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:nth-child(2) {\n  margin-left: 15px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcc2hhcmUtZm9ybS5jb21wb25lbnQuc2NzcyIsIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXHNjc3NcXHZhcmlhYmxlcy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsZUFBQTtFQUNBLGFBQUE7QUFERjs7QUFJQTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0FBREY7O0FBR0U7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7QUFESjs7QUFHSTtFQUNFLG1CQUFBO0FBRE47O0FBSUk7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0FBRk47O0FBSU07RUFDRSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGNDdkJPO0VEd0JQLG1CQ3RCaUI7QURvQnpCOztBQUlRO0VBQ0UsbUJDeEJTO0FEc0JuQjs7QUFTSTtFQUNFLFdBQUE7RUFDQSx5QkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtBQVBOOztBQVNNO0VBQ0UscUJDdkNXO0FEZ0NuQjs7QUFhQTtFQUNFLGdCQUFBO0VBQ0Esb0JBQUE7QUFWRjs7QUFZRTtFQUNFLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQ3JEcUI7RURzRHJCLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLGlCQUFBO0FBVko7O0FBWUk7RUFDRSxnQkFBQTtFQUNBLGNDNURtQjtFRDZEbkIsZ0JBQUE7RUFDQSxvQ0FBQTtFQUNBLGNBQUE7QUFWTjs7QUFZTTtFQUNFLGNDakVXO0VEa0VYLGdDQUFBO0VBQ0EsZ0JBQUE7QUFWUjs7QUFjSTtFQUNFLG1CQ3hFYTtBRDREbkI7O0FBZUk7RUFDRSxpQkFBQTtBQWJOIiwiZmlsZSI6InNoYXJlLWZvcm0uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IFwifnNjc3MvdmFyaWFibGVzXCI7XG5cbjpob3N0IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgZmxleC1iYXNpczogNTAlO1xuICBwYWRkaW5nOiAyMHB4O1xufVxuXG4uc2hhcmUtZm9ybS13cmFwcGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgbWFyZ2luLWJvdHRvbTogYXV0bztcblxuICAudG9nZ2xlci13cmFwcGVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG5cbiAgICBsYWJlbCB7XG4gICAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xuICAgIH1cblxuICAgICYtb3B0aW9ucyB7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XG5cbiAgICAgIGJ1dHRvbiB7XG4gICAgICAgIHBhZGRpbmc6IDEwcHggMjBweDtcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgY29sb3I6ICRjb2xvcl9fd2hpdGU7XG4gICAgICAgIGJhY2tncm91bmQ6ICRjb2xvcl9fYmx1ZV9saWdodF9kYXJrO1xuXG4gICAgICAgICYuYWN0aXZlIHtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiAkY29sb3JfX2JsdWVfZGFyaztcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC5mb3JtLWNvbnRyb2wtd3JhcHBlciB7XG4gICAgaW5wdXQge1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICBib3JkZXI6IDJweCBzb2xpZCAkY29sb3JfX2JsdWVfbGlnaHRfZGFyaztcbiAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgICBwYWRkaW5nOiAxMHB4IDIwcHg7XG4gICAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuXG4gICAgICAmOmZvY3VzIHtcbiAgICAgICAgYm9yZGVyLWNvbG9yOiAkY29sb3JfX2JsdWVfZGFyaztcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuLmJ1dHRvbi13cmFwcGVyIHtcbiAgbWFyZ2luLXRvcDogYXV0bztcbiAgYWxpZ24tc2VsZjogZmxleC1lbmQ7XG5cbiAgYnV0dG9uIHtcbiAgICBwYWRkaW5nOiAxMHB4IDIwcHg7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIGJhY2tncm91bmQ6ICRjb2xvcl9fYmx1ZV9saWdodF9kYXJrO1xuICAgIGJvcmRlci1yYWRpdXM6IDE4cHg7XG4gICAgY29sb3I6ICNmZmY7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG5cbiAgICAmLmNhbmNlbC1idG4ge1xuICAgICAgYmFja2dyb3VuZDogbm9uZTtcbiAgICAgIGNvbG9yOiAkY29sb3JfX2JsdWVfbGlnaHRfZGFyaztcbiAgICAgIGJvcmRlci1yYWRpdXM6IDA7XG4gICAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgdHJhbnNwYXJlbnQ7XG4gICAgICBwYWRkaW5nOiA1cHggMDtcblxuICAgICAgJjpob3ZlciB7XG4gICAgICAgIGNvbG9yOiAkY29sb3JfX2JsdWVfZGFyaztcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICRjb2xvcl9fYmx1ZV9kYXJrO1xuICAgICAgICBiYWNrZ3JvdW5kOiBub25lO1xuICAgICAgfVxuICAgIH1cblxuICAgICY6aG92ZXIge1xuICAgICAgYmFja2dyb3VuZDogJGNvbG9yX19ibHVlX2Rhcms7XG4gICAgfVxuXG4gICAgJjpudGgtY2hpbGQoMikge1xuICAgICAgbWFyZ2luLWxlZnQ6IDE1cHg7XG4gICAgfVxuICB9XG59XG5cbiIsIi8vIHR5cG9ncmFwaHlcbiRmb250OiBDYWxpYnJpO1xuJGZvbnRfX3NpemU6IDE2cHg7IC8vIDE0cHg7XG4kZm9udF9fZmFsbGJhY2s6IHNhbnMtc2VyaWY7XG4kZm9udF9fcHJpbWFyeTogJ1NvdXJjZVNhbnNQcm8nLCAkZm9udF9fZmFsbGJhY2s7XG4kZm9udF9faWNvbnM6ICdpY29ucyc7XG5cbi8vIGNvbG9yc1xuJGNvbG9yX19ibGFjazogIzAwMDAwMDtcbiRjb2xvcl9fd2hpdGU6ICNmZmZmZmY7XG4kY29sb3JfX2JsdWU6ICM4Y2NkZGQ7XG4kY29sb3JfX2JsdWVfbGlnaHRfZGFyazogIzdDQjZDNDtcbiRjb2xvcl9fYmx1ZV9kYXJrOiAjNjQ5MjlFO1xuXG4vLyBicmVha3BvaW50c1xuJGJyZWFrcG9pbnRfX3NtOiAzMjBweDtcbiRicmVha3BvaW50X19zbV9sOiA0ODBweDsgLy8gNTAwcHhcbiRicmVha3BvaW50X19tZF9zOiA2MjBweDtcbiRicmVha3BvaW50X19tZDogNzY4cHg7XG4kYnJlYWtwb2ludF9fbWRfbDogMTA4MHB4OyAvLyA5MjBweFxuJGJyZWFrcG9pbnRfX2xnOiAxMjgwcHg7XG4iXX0= */"],
        changeDetection: 0
      });
      /***/
    },

    /***/
    "f5uD":
    /*!******************************************!*\
      !*** ./node_modules/quotesy/quotes.json ***!
      \******************************************/

    /*! exports provided: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100, 101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112, 113, 114, 115, 116, 117, 118, 119, 120, 121, 122, 123, 124, 125, 126, 127, 128, 129, 130, 131, 132, 133, 134, 135, 136, 137, 138, 139, 140, 141, 142, 143, 144, 145, 146, 147, 148, 149, 150, 151, 152, 153, 154, 155, 156, 157, 158, 159, 160, 161, 162, 163, 164, 165, 166, 167, 168, 169, 170, 171, 172, 173, 174, 175, 176, 177, 178, 179, 180, 181, 182, 183, 184, 185, 186, 187, 188, 189, 190, 191, 192, 193, 194, 195, 196, 197, 198, 199, 200, 201, 202, 203, 204, 205, 206, 207, 208, 209, 210, 211, 212, 213, 214, 215, 216, 217, 218, 219, 220, 221, 222, 223, 224, 225, 226, 227, 228, 229, 230, 231, 232, 233, 234, 235, 236, 237, 238, 239, 240, 241, 242, 243, 244, 245, 246, 247, 248, 249, 250, 251, 252, 253, 254, 255, 256, 257, 258, 259, 260, 261, 262, 263, 264, 265, 266, 267, 268, 269, 270, 271, 272, 273, 274, 275, 276, 277, 278, 279, 280, 281, 282, 283, 284, 285, 286, 287, 288, 289, 290, 291, 292, 293, 294, 295, 296, 297, 298, 299, 300, 301, 302, 303, 304, 305, 306, 307, 308, 309, 310, 311, 312, 313, 314, 315, 316, 317, 318, 319, 320, 321, 322, 323, 324, 325, 326, 327, 328, 329, 330, 331, 332, 333, 334, 335, 336, 337, 338, 339, 340, 341, 342, 343, 344, 345, 346, 347, 348, 349, 350, 351, 352, 353, 354, 355, 356, 357, 358, 359, 360, 361, 362, 363, 364, 365, 366, 367, 368, 369, 370, 371, 372, 373, 374, 375, 376, 377, 378, 379, 380, 381, 382, 383, 384, 385, 386, 387, 388, 389, 390, 391, 392, 393, 394, 395, 396, 397, 398, 399, 400, 401, 402, 403, 404, 405, 406, 407, 408, 409, 410, 411, 412, 413, 414, 415, 416, 417, 418, 419, 420, 421, 422, 423, 424, 425, 426, 427, 428, 429, 430, 431, 432, 433, 434, 435, 436, 437, 438, 439, 440, 441, 442, 443, 444, 445, 446, 447, 448, 449, 450, 451, 452, 453, 454, 455, 456, 457, 458, 459, 460, 461, 462, 463, 464, 465, 466, 467, 468, 469, 470, 471, 472, 473, 474, 475, 476, 477, 478, 479, 480, 481, 482, 483, 484, 485, 486, 487, 488, 489, 490, 491, 492, 493, 494, 495, 496, 497, 498, 499, 500, 501, 502, 503, 504, 505, 506, 507, 508, 509, 510, 511, 512, 513, 514, 515, 516, 517, 518, 519, 520, 521, 522, 523, 524, 525, 526, 527, 528, 529, 530, 531, 532, 533, 534, 535, 536, 537, 538, 539, 540, 541, 542, 543, 544, 545, 546, 547, 548, 549, 550, 551, 552, 553, 554, 555, 556, 557, 558, 559, 560, 561, 562, 563, 564, 565, 566, 567, 568, 569, 570, 571, 572, 573, 574, 575, 576, 577, 578, 579, 580, 581, 582, 583, 584, 585, 586, 587, 588, 589, 590, 591, 592, 593, 594, 595, 596, 597, 598, 599, 600, 601, 602, 603, 604, 605, 606, 607, 608, 609, 610, 611, 612, 613, 614, 615, 616, 617, 618, 619, 620, 621, 622, 623, 624, 625, 626, 627, 628, 629, 630, 631, 632, 633, 634, 635, 636, 637, 638, 639, 640, 641, 642, 643, 644, 645, 646, 647, 648, 649, 650, 651, 652, 653, 654, 655, 656, 657, 658, 659, 660, 661, 662, 663, 664, 665, 666, 667, 668, 669, 670, 671, 672, 673, 674, 675, 676, 677, 678, 679, 680, 681, 682, 683, 684, 685, 686, 687, 688, 689, 690, 691, 692, 693, 694, 695, 696, 697, 698, 699, 700, 701, 702, 703, 704, 705, 706, 707, 708, 709, 710, 711, 712, 713, 714, 715, 716, 717, 718, 719, 720, 721, 722, 723, 724, 725, 726, 727, 728, 729, 730, 731, 732, 733, 734, 735, 736, 737, 738, 739, 740, 741, 742, 743, 744, 745, 746, 747, 748, 749, 750, 751, 752, 753, 754, 755, 756, 757, 758, 759, 760, 761, 762, 763, 764, 765, 766, 767, 768, 769, 770, 771, 772, 773, 774, 775, 776, 777, 778, 779, 780, 781, 782, 783, 784, 785, 786, 787, 788, 789, 790, 791, 792, 793, 794, 795, 796, 797, 798, 799, 800, 801, 802, 803, 804, 805, 806, 807, 808, 809, 810, 811, 812, 813, 814, 815, 816, 817, 818, 819, 820, 821, 822, 823, 824, 825, 826, 827, 828, 829, 830, 831, 832, 833, 834, 835, 836, 837, 838, 839, 840, 841, 842, 843, 844, 845, 846, 847, 848, 849, 850, 851, 852, 853, 854, 855, 856, 857, 858, 859, 860, 861, 862, 863, 864, 865, 866, 867, 868, 869, 870, 871, 872, 873, 874, 875, 876, 877, 878, 879, 880, 881, 882, 883, 884, 885, 886, 887, 888, 889, 890, 891, 892, 893, 894, 895, 896, 897, 898, 899, 900, 901, 902, 903, 904, 905, 906, 907, 908, 909, 910, 911, 912, 913, 914, 915, 916, 917, 918, 919, 920, 921, 922, 923, 924, 925, 926, 927, 928, 929, 930, 931, 932, 933, 934, 935, 936, 937, 938, 939, 940, 941, 942, 943, 944, 945, 946, 947, 948, 949, 950, 951, 952, 953, 954, 955, 956, 957, 958, 959, 960, 961, 962, 963, 964, 965, 966, 967, 968, 969, 970, 971, 972, 973, 974, 975, 976, 977, 978, 979, 980, 981, 982, 983, 984, 985, 986, 987, 988, 989, 990, 991, 992, 993, 994, 995, 996, 997, 998, 999, 1000, 1001, 1002, 1003, 1004, 1005, 1006, 1007, 1008, 1009, 1010, 1011, 1012, 1013, 1014, 1015, 1016, 1017, 1018, 1019, 1020, 1021, 1022, 1023, 1024, 1025, 1026, 1027, 1028, 1029, 1030, 1031, 1032, 1033, 1034, 1035, 1036, 1037, 1038, 1039, 1040, 1041, 1042, 1043, 1044, 1045, 1046, 1047, 1048, 1049, 1050, 1051, 1052, 1053, 1054, 1055, 1056, 1057, 1058, 1059, 1060, 1061, 1062, 1063, 1064, 1065, 1066, 1067, 1068, 1069, 1070, 1071, 1072, 1073, 1074, 1075, 1076, 1077, 1078, 1079, 1080, 1081, 1082, 1083, 1084, 1085, 1086, 1087, 1088, 1089, 1090, 1091, 1092, 1093, 1094, 1095, 1096, 1097, 1098, 1099, 1100, 1101, 1102, 1103, 1104, 1105, 1106, 1107, 1108, 1109, 1110, 1111, 1112, 1113, 1114, 1115, 1116, 1117, 1118, 1119, 1120, 1121, 1122, 1123, 1124, 1125, 1126, 1127, 1128, 1129, 1130, 1131, 1132, 1133, 1134, 1135, 1136, 1137, 1138, 1139, 1140, 1141, 1142, 1143, 1144, 1145, 1146, 1147, 1148, 1149, 1150, 1151, 1152, 1153, 1154, 1155, 1156, 1157, 1158, 1159, 1160, 1161, 1162, 1163, 1164, 1165, 1166, 1167, 1168, 1169, 1170, 1171, 1172, 1173, 1174, 1175, 1176, 1177, 1178, 1179, 1180, 1181, 1182, 1183, 1184, 1185, 1186, 1187, 1188, 1189, 1190, 1191, 1192, 1193, 1194, 1195, 1196, 1197, 1198, 1199, 1200, 1201, 1202, 1203, 1204, 1205, 1206, 1207, 1208, 1209, 1210, 1211, 1212, 1213, 1214, 1215, 1216, 1217, 1218, 1219, 1220, 1221, 1222, 1223, 1224, 1225, 1226, 1227, 1228, 1229, 1230, 1231, 1232, 1233, 1234, 1235, 1236, 1237, 1238, 1239, 1240, 1241, 1242, 1243, 1244, 1245, 1246, 1247, 1248, 1249, 1250, 1251, 1252, 1253, 1254, 1255, 1256, 1257, 1258, 1259, 1260, 1261, 1262, 1263, 1264, 1265, 1266, 1267, 1268, 1269, 1270, 1271, 1272, 1273, 1274, 1275, 1276, 1277, 1278, 1279, 1280, 1281, 1282, 1283, 1284, 1285, 1286, 1287, 1288, 1289, 1290, 1291, 1292, 1293, 1294, 1295, 1296, 1297, 1298, 1299, 1300, 1301, 1302, 1303, 1304, 1305, 1306, 1307, 1308, 1309, 1310, 1311, 1312, 1313, 1314, 1315, 1316, 1317, 1318, 1319, 1320, 1321, 1322, 1323, 1324, 1325, 1326, 1327, 1328, 1329, 1330, 1331, 1332, 1333, 1334, 1335, 1336, 1337, 1338, 1339, 1340, 1341, 1342, 1343, 1344, 1345, 1346, 1347, 1348, 1349, 1350, 1351, 1352, 1353, 1354, 1355, 1356, 1357, 1358, 1359, 1360, 1361, 1362, 1363, 1364, 1365, 1366, 1367, 1368, 1369, 1370, 1371, 1372, 1373, 1374, 1375, 1376, 1377, 1378, 1379, 1380, 1381, 1382, 1383, 1384, 1385, 1386, 1387, 1388, 1389, 1390, 1391, 1392, 1393, 1394, 1395, 1396, 1397, 1398, 1399, 1400, 1401, 1402, 1403, 1404, 1405, 1406, 1407, 1408, 1409, 1410, 1411, 1412, 1413, 1414, 1415, 1416, 1417, 1418, 1419, 1420, 1421, 1422, 1423, 1424, 1425, 1426, 1427, 1428, 1429, 1430, 1431, 1432, 1433, 1434, 1435, 1436, 1437, 1438, 1439, 1440, 1441, 1442, 1443, 1444, 1445, 1446, 1447, 1448, 1449, 1450, 1451, 1452, 1453, 1454, 1455, 1456, 1457, 1458, 1459, 1460, 1461, 1462, 1463, 1464, 1465, 1466, 1467, 1468, 1469, 1470, 1471, 1472, 1473, 1474, 1475, 1476, 1477, 1478, 1479, 1480, 1481, 1482, 1483, 1484, 1485, 1486, 1487, 1488, 1489, 1490, 1491, 1492, 1493, 1494, 1495, 1496, 1497, 1498, 1499, 1500, 1501, 1502, 1503, 1504, 1505, 1506, 1507, 1508, 1509, 1510, 1511, 1512, 1513, 1514, 1515, 1516, 1517, 1518, 1519, 1520, 1521, 1522, 1523, 1524, 1525, 1526, 1527, 1528, 1529, 1530, 1531, 1532, 1533, 1534, 1535, 1536, 1537, 1538, 1539, 1540, 1541, 1542, 1543, 1544, 1545, 1546, 1547, 1548, 1549, 1550, 1551, 1552, 1553, 1554, 1555, 1556, 1557, 1558, 1559, 1560, 1561, 1562, 1563, 1564, 1565, 1566, 1567, 1568, 1569, 1570, 1571, 1572, 1573, 1574, 1575, 1576, 1577, 1578, 1579, 1580, 1581, 1582, 1583, 1584, 1585, 1586, 1587, 1588, 1589, 1590, 1591, 1592, 1593, 1594, default */

    /***/
    function f5uD(module) {
      module.exports = JSON.parse("[{\"author\":\"Abraham Lincoln\",\"text\":\"A house divided against itself cannot stand.\"},{\"author\":\"Abraham Lincoln\",\"text\":\"Important principles may, and must, be inflexible.\"},{\"author\":\"Abraham Lincoln\",\"text\":\"I destroy my enemies when I make them my friends.\"},{\"author\":\"Abraham Lincoln\",\"text\":\"You have to do your own growing no matter how tall your grandfather was.\"},{\"author\":\"Abraham Lincoln\",\"text\":\"Most people are about as happy as they make up their minds to be\"},{\"author\":\"Abraham Lincoln\",\"text\":\"Most folks are about as happy as they make up their minds to be.\"},{\"author\":\"Abraham Lincoln\",\"text\":\"Give me six hours to chop down a tree and I will spend the first four sharpening the axe.\"},{\"author\":\"Abraham Lincoln\",\"text\":\"When you have got an elephant by the hind legs and he is trying to run away, it's best to let him run.\"},{\"author\":\"Abraham Lincoln\",\"text\":\"The best thing about the future is that it only comes one day at a time.\"},{\"author\":\"Abraham Lincoln\",\"source\":\"https://www.goodreads.com/quotes/328848\",\"tags\":\"future, prediction, create, creation, life\",\"text\":\"The best way to predict your future is to create it.\"},{\"author\":\"Abraham Lincoln\",\"text\":\"Character is like a tree and reputation like a shadow. The shadow is what we think of it; the tree is the real thing.\"},{\"author\":\"Abraham Lincoln\",\"text\":\"As our case is new, we must think and act anew.\"},{\"author\":\"Abraham Lincoln\",\"text\":\"Be sure you put your feet in the right place, then stand firm.\"},{\"author\":\"Abraham Lincoln\",\"text\":\"Always bear in mind that your own resolution to succeed is more important than any one thing.\"},{\"author\":\"Abraham Lincoln\",\"text\":\"I walk slowly, but I never walk backward.\"},{\"author\":\"Abraham Lincoln\",\"text\":\"Truth is generally the best vindication against slander.\"},{\"author\":\"Abraham Lincoln\",\"text\":\"Most folks are as happy as they make up their minds to be.\"},{\"author\":\"Abraham Lincoln\",\"text\":\"I will prepare and some day my chance will come.\"},{\"author\":\"Abraham Maslow\",\"text\":\"What is necessary to change a person is to change his awareness of himself.\"},{\"author\":\"Aesop\",\"text\":\"No act of kindness, no matter how small, is ever wasted.\"},{\"author\":\"Ajahn Chah\",\"text\":\"If you let go a little, you will have a little peace. If you let go a lot, you will have a lot of peace.\"},{\"author\":\"Alan Watts\",\"text\":\"No valid plans for the future can be made by those who have no capacity for living now.\"},{\"author\":\"Albert Camus\",\"text\":\"Autumn is a second spring when every leaf is a flower.\"},{\"author\":\"Albert Camus\",\"text\":\"In the depth of winter, I finally learned that there was within me an invincible summer.\"},{\"author\":\"Albert Einstein\",\"text\":\"God always takes the simplest way.\"},{\"author\":\"Albert Einstein\",\"text\":\"Learn from yesterday, live for today, hope for tomorrow.\"},{\"author\":\"Albert Einstein\",\"text\":\"The only real valuable thing is intuition.\"},{\"author\":\"Albert Einstein\",\"text\":\"Once we accept our limits, we go beyond them.\"},{\"author\":\"Albert Einstein\",\"text\":\"Life is like riding a bicycle. To keep your balance you must keep moving.\"},{\"author\":\"Albert Einstein\",\"text\":\"Feeling and longing are the motive forces behind all human endeavor and human creations.\"},{\"author\":\"Albert Einstein\",\"text\":\"I believe that a simple and unassuming manner of life is best for everyone, best both for the body and the mind.\"},{\"author\":\"Albert Einstein\",\"text\":\"Try not to become a man of success, but rather try to become a man of value.\"},{\"author\":\"Albert Einstein\",\"text\":\"When the solution is simple, God is answering.\"},{\"author\":\"Albert Einstein\",\"text\":\"A man should look for what is, and not for what he thinks should be.\"},{\"author\":\"Albert Einstein\",\"text\":\"Imagination is more important than knowledge. For while knowledge defines all we currently know and understand, imagination points to all we might yet discover and create.\"},{\"author\":\"Albert Einstein\",\"text\":\"If A is success in life, then A equals x plus y plus z. Work is x; y is play; and z is keeping your mouth shut.\"},{\"author\":\"Albert Einstein\",\"text\":\"Reality is merely an illusion, albeit a very persistent one.\"},{\"author\":\"Albert Einstein\",\"text\":\"Peace cannot be kept by force. It can only be achieved by understanding.\"},{\"author\":\"Albert Einstein\",\"text\":\"We cannot solve our problems with the same thinking we used when we created them.\"},{\"author\":\"Albert Einstein\",\"text\":\"If you can't explain it simply, you don't understand it well enough.\"},{\"author\":\"Albert Einstein\",\"source\":\"https://www.goodreads.com/quotes/38836\",\"tags\":\"imagination, creativity, inspiration\",\"text\":\"Imagination is everything. It is the preview of life's coming attractions.\"},{\"author\":\"Albert Einstein\",\"source\":\"https://www.goodreads.com/quotes/297929\",\"tags\":\"imagination, creativity, intelligence\",\"text\":\"The true sign of intelligence is not knowledge but imagination.\"},{\"author\":\"Albert Einstein\",\"text\":\"In the middle of every difficulty lies opportunity.\"},{\"author\":\"Albert Einstein\",\"text\":\"Setting an example is not the main means of influencing another, it is the only means.\"},{\"author\":\"Albert Einstein\",\"text\":\"Logic will get you from A to B. Imagination will take you everywhere.\"},{\"author\":\"Albert Einstein\",\"text\":\"Great ideas often receive violent opposition from mediocre minds.\"},{\"author\":\"Albert Einstein\",\"text\":\"Anyone who doesn't take truth seriously in small matters cannot be trusted in large ones either.\"},{\"author\":\"Albert Einstein\",\"text\":\"There are only two ways to live your life. One is as though nothing is a miracle. The other is as though everything is a miracle.\"},{\"author\":\"Albert Einstein\",\"text\":\"One may say the eternal mystery of the world is its comprehensibility.\"},{\"author\":\"Albert Einstein\",\"text\":\"A person who never made a mistake never tried anything new.\"},{\"author\":\"Albert Einstein\",\"source\":\"https://www.goodreads.com/quotes/11458\",\"tags\":\"talent, curious, curiosity, passion\",\"text\":\"I have no special talent. I am only passionately curious.\"},{\"author\":\"Albert Gray\",\"text\":\"Winners have simply formed the habit of doing things losers don't like to do.\"},{\"author\":\"Albert Schweitzer\",\"text\":\"Do something wonderful, people may imitate it.\"},{\"author\":\"Albert Schweitzer\",\"text\":\"We should all be thankful for those people who rekindle the inner spirit.\"},{\"author\":\"Albert Schweitzer\",\"text\":\"One who gains strength by overcoming obstacles possesses the only strength which can overcome adversity.\"},{\"author\":\"Albert Schweitzer\",\"text\":\"Wherever a man turns he can find someone who needs him.\"},{\"author\":\"Albert Schweitzer\",\"text\":\"Constant kindness can accomplish much. As the sun makes ice melt, kindness causes misunderstanding, mistrust, and hostility to evaporate.\"},{\"author\":\"Albert Schweitzer\",\"text\":\"Success is not the key to happiness. Happiness is the key to success. If you love what you are doing, you will be successful.\"},{\"author\":\"Albert Schweitzer\",\"text\":\"An optimist is a person who sees a green light everywhere, while the pessimist sees only the red spotlight... The truly wise person is colour-blind.\"},{\"author\":\"Albert Schweitzer\",\"text\":\"Never say there is nothing beautiful in the world any more. There is always something to make you wonder in the shape of a tree, the trembling of a leaf.\"},{\"author\":\"Aldous Huxley\",\"text\":\"There is only one corner of the universe you can be certain of improving, and that's your own self.\"},{\"author\":\"Aldous Huxley\",\"text\":\"Experience is not what happens to a man. It is what a man does with what happens to him.\"},{\"author\":\"Alexander Pope\",\"text\":\"Do good by stealth, and blush to find it fame.\"},{\"author\":\"Alexander Pope\",\"text\":\"Blessed is the man who expects nothing, for he shall never be disappointed.\"},{\"author\":\"Alexander the Great\",\"text\":\"There is nothing impossible to him who will try.\"},{\"author\":\"Alexis Carrel\",\"text\":\"All great men are gifted with intuition. They know without reasoning or analysis, what they need to know.\"},{\"author\":\"Alfred Adler\",\"text\":\"Trust only movement. Life happens at the level of events, not of words. Trust movement.\"},{\"author\":\"Alfred Korzybski\",\"text\":\"There are two ways to slide easily through life: to believe everything or to doubt everything; both ways save us from thinking.\"},{\"author\":\"Alfred Painter\",\"text\":\"Saying thank you is more than good manners. It is good spirituality.\"},{\"author\":\"Alfred Sheinwold\",\"text\":\"Learn all you can from the mistakes of others. You won't have time to make them all yourself.\"},{\"author\":\"Alfred Tennyson\",\"text\":\"The happiness of a man in this life does not consist in the absence but in the mastery of his passions.\"},{\"author\":\"Alfred Whitehead\",\"text\":\"The art of progress is to preserve order amid change, and to preserve change amid order.\"},{\"author\":\"Alice Walker\",\"text\":\"No person is your friend who demands your silence, or denies your right to grow.\"},{\"author\":\"Alphonse Karr\",\"text\":\"Some people are always grumbling because roses have thorns; I am thankful that thorns have roses.\"},{\"author\":\"Ambrose Bierce\",\"text\":\"Speak when you are angry and you will make the best speech you will ever regret.\"},{\"author\":\"Amelia Earhart\",\"text\":\"Never do things others can do and will do, if there are things others cannot do or will not do.\"},{\"author\":\"American proverb\",\"text\":\"From little acorns mighty oaks do grow.\"},{\"author\":\"Amiel\",\"text\":\"Without passion man is a mere latent force and possibility, like the flint which awaits the shock of the iron before it can give forth its spark.\"},{\"author\":\"Amy Bloom\",\"text\":\"Love at first sight is easy to understand; its when two people have been looking at each other for a lifetime that it becomes a miracle.\"},{\"author\":\"Amy Tan\",\"text\":\"I am like a falling star who has finally found her place next to another in a lovely constellation, where we will sparkle in the heavens forever.\"},{\"author\":\"Anais Nin\",\"text\":\"Life shrinks or expands in proportion to one's courage.\"},{\"author\":\"Anais Nin\",\"text\":\"The possession of knowledge does not kill the sense of wonder and mystery. There is always more mystery.\"},{\"author\":\"Anais Nin\",\"text\":\"Dreams pass into the reality of action. From the actions stems the dream again; and this interdependence produces the highest form of living.\"},{\"author\":\"Anais Nin\",\"text\":\"The personal life deeply lived always expands into truths beyond itself.\"},{\"author\":\"Anais Nin\",\"text\":\"Age does not protect you from love. But love, to some extent, protects you from age.\"},{\"author\":\"Anais Nin\",\"text\":\"The dream was always running ahead of me. To catch up, to live for a moment in unison with it, that was the miracle.\"},{\"author\":\"Anais Nin\",\"text\":\"There is not one big cosmic meaning for all, there is only the meaning we each give to our life.\"},{\"author\":\"Anatole France\",\"text\":\"To accomplish great things, we must dream as well as act.\"},{\"author\":\"Anatole France\",\"text\":\"To accomplish great things, we must not only act, but also dream; not only plan, but also believe.\"},{\"author\":\"Anatole France\",\"text\":\"It is better to understand a little than to misunderstand a lot.\"},{\"author\":\"Anatole France\",\"text\":\"You learn to speak by speaking, to study by studying, to run by running, to work by working; in just the same way, you learn to love by loving.\"},{\"author\":\"Andre Gide\",\"text\":\"One does not discover new lands without consenting to lose sight of the shore for a very long time.\"},{\"author\":\"Andre Gide\",\"text\":\"The most decisive actions of our life... are most often unconsidered actions.\"},{\"author\":\"Andrew Gide\",\"text\":\"The most decisive actions of our life... are most often unconsidered actions.\"},{\"author\":\"Andy Rooney\",\"text\":\"If you smile when no one else is around, you really mean it.\"},{\"author\":\"Andy Warhol\",\"text\":\"They say that time changes things, but you actually have to change them yourself.\"},{\"author\":\"Angela Schwindt\",\"text\":\"While we try to teach our children all about life, our children teach us what life is all about.\"},{\"author\":\"Anna Pavlova\",\"text\":\"To follow, without halt, one aim: There is the secret of success.\"},{\"author\":\"Anne Bradstreet\",\"text\":\"If we had no winter, the spring would not be so pleasant; if we did not sometimes taste of adversity, prosperity would not be so welcome.\"},{\"author\":\"Anne Bronte\",\"text\":\"All our talents increase in the using, and the every faculty, both good and bad, strengthen by exercise.\"},{\"author\":\"Anne Frank\",\"text\":\"We all live with the objective of being happy; our lives are all different and yet the same.\"},{\"author\":\"Anne Frank\",\"text\":\"How wonderful it is that nobody need wait a single moment before starting to improve the world.\"},{\"author\":\"Anne Frank\",\"text\":\"No one has ever become poor by giving.\"},{\"author\":\"Anne Frank\",\"text\":\"Parents can only give good advice or put them on the right paths, but the final forming of a persons character lies in their own hands.\"},{\"author\":\"Anne Lamott\",\"text\":\"Joy is the best makeup.\"},{\"author\":\"Anne Lindbergh\",\"text\":\"If one is estranged from oneself, then one is estranged from others too. If one is out of touch with oneself, then one cannot touch others.\"},{\"author\":\"Anne Schaef\",\"text\":\"Life is a process. We are a process. The universe is a process.\"},{\"author\":\"Anne Wilson Schaef\",\"text\":\"Trusting our intuition often saves us from disaster.\"},{\"author\":\"Annie Dillard\",\"source\":\"https://www.goodreads.com/quotes/530337\",\"tags\":\"passion, try, live\",\"text\":\"How we spend our days is, of course, how we spend our lives.\"},{\"author\":\"Anthony D'Angelo\",\"text\":\"Listen to your intuition. It will tell you everything you need to know.\"},{\"author\":\"Anthony Robbins\",\"text\":\"Life is a gift, and it offers us the privilege, opportunity, and responsibility to give something back by becoming more\"},{\"author\":\"Anthony Robbins\",\"text\":\"The path to success is to take massive, determined action.\"},{\"author\":\"Anthony Robbins\",\"text\":\"To effectively communicate, we must realize that we are all different in the way we perceive the world and use this understanding as a guide to our communication with others.\"},{\"author\":\"Antoine de Saint-Exupery\",\"text\":\"It is only with the heart that one can see rightly, what is essential is invisible to the eye.\"},{\"author\":\"Antoine de Saint-Exupery\",\"text\":\"I know but one freedom and that is the freedom of the mind.\"},{\"author\":\"Antoine de Saint-Exupery\",\"text\":\"Love does not consist of gazing at each other, but in looking together in the same direction.\"},{\"author\":\"Arie de Gues\",\"text\":\"Your ability to learn faster than your competition is your only sustainable competitive advantage.\"},{\"author\":\"Aristotle\",\"text\":\"Well begun is half done.\"},{\"author\":\"Aristotle\",\"text\":\"Change in all things is sweet.\"},{\"author\":\"Aristotle\",\"text\":\"It is the mark of an educated mind to be able to entertain a thought without accepting it.\"},{\"author\":\"Aristotle\",\"text\":\"Happiness depends upon ourselves.\"},{\"author\":\"Aristotle\",\"text\":\"In all things of nature there is something of the marvellous.\"},{\"author\":\"Aristotle\",\"text\":\"We are what we repeatedly do. Excellence, then, is not an act, but a habit.\"},{\"author\":\"Aristotle\",\"text\":\"Those that know, do. Those that understand, teach.\"},{\"author\":\"Aristotle\",\"text\":\"Criticism is something you can easily avoid by saying nothing, doing nothing, and being nothing.\"},{\"author\":\"Aristotle\",\"text\":\"We are what we repeatedly do. Excellence, then, is not an act but a habit.\"},{\"author\":\"Aristotle\",\"text\":\"Moral excellence comes about as a result of habit. We become just by doing just acts, temperate by doing temperate acts, brave by doing brave acts.\"},{\"author\":\"Aristotle\",\"text\":\"The energy of the mind is the essence of life.\"},{\"author\":\"Aristotle\",\"text\":\"If one way be better than another, that you may be sure is natures way.\"},{\"author\":\"Arthur Conan Doyle\",\"text\":\"Whenever you have eliminated the impossible, whatever remains, however improbable, must be the truth.\"},{\"author\":\"Arthur Conan Doyle\",\"text\":\"Mediocrity knows nothing higher than itself, but talent instantly recognizes genius.\"},{\"author\":\"Arthur Rubinstein\",\"text\":\"Of course there is no formula for success except perhaps an unconditional acceptance of life and what it brings.\"},{\"author\":\"Arthur Schopenhauer\",\"text\":\"Every man takes the limits of his own field of vision for the limits of the world.\"},{\"author\":\"Audre Lorde\",\"text\":\"When I dare to be powerful, to use my strength in the service of my vision, then it becomes less and less important whether I am afraid.\"},{\"author\":\"Augustinus Sanctus\",\"text\":\"The world is a book, and those who do not travel read only a page.\"},{\"author\":\"Babatunde Olatunji\",\"text\":\"Yesterday is history. Tomorrow is a mystery. And today? Today is a gift. That is why we call it the present.\"},{\"author\":\"Babe Ruth\",\"text\":\"Yesterdays home runs don't win today's games.\"},{\"author\":\"Baltasar Gracian\",\"text\":\"Without courage, wisdom bears no fruit.\"},{\"author\":\"Barack Obama\",\"text\":\"If you're walking down the right path and you're willing to keep walking, eventually you'll make progress.\"},{\"author\":\"Barack Obama\",\"text\":\"Focusing your life solely on making a buck shows a poverty of ambition. It asks too little of yourself. And it will leave you unfulfilled.\"},{\"author\":\"Barack Obama\",\"text\":\"Change will not come if we wait for some other person or some other time. We are the ones weve been waiting for. We are the change that we seek.\"},{\"author\":\"Barbara Baron\",\"text\":\"Don't wait for your feelings to change to take the action. Take the action and your feelings will change.\"},{\"author\":\"Barbara De Angelis\",\"text\":\"We need to find the courage to say NO to the things and people that are not serving us if we want to rediscover ourselves and live our lives with authenticity.\"},{\"author\":\"Ben Stein\",\"text\":\"The first step to getting the things you want out of life is this: decide what you want.\"},{\"author\":\"Ben Sweetland\",\"text\":\"We cannot hold a torch to light another's path without brightening our own.\"},{\"author\":\"Benjamin Disraeli\",\"text\":\"The secret of success is constancy to purpose.\"},{\"author\":\"Benjamin Disraeli\",\"text\":\"Action may not always bring happiness; but there is no happiness without action.\"},{\"author\":\"Benjamin Disraeli\",\"text\":\"Through perseverance many people win success out of what seemed destined to be certain failure.\"},{\"author\":\"Benjamin Disraeli\",\"text\":\"Never apologize for showing feelings. When you do so, you apologize for the truth.\"},{\"author\":\"Benjamin Disraeli\",\"text\":\"One secret of success in life is for a man to be ready for his opportunity when it comes.\"},{\"author\":\"Benjamin Disraeli\",\"text\":\"The greatest good you can do for another is not just to share your riches but to reveal to him his own.\"},{\"author\":\"Benjamin Disraeli\",\"text\":\"The greatest good you can do for another is not just share your riches, but reveal to them their own.\"},{\"author\":\"Benjamin Disraeli\",\"text\":\"Ignorance never settle a question.\"},{\"author\":\"Benjamin Disraeli\",\"text\":\"Action may not always bring happiness, but there is no happiness without action.\"},{\"author\":\"Benjamin Disraeli\",\"text\":\"Never apologize for showing feeling. When you do so, you apologize for truth.\"},{\"author\":\"Benjamin Disraeli\",\"text\":\"We make our own fortunes and we call them fate.\"},{\"author\":\"Benjamin Franklin\",\"text\":\"Well done is better than well said.\"},{\"author\":\"Benjamin Franklin\",\"text\":\"One today is worth two tomorrows.\"},{\"author\":\"Benjamin Franklin\",\"text\":\"There never was a good knife made of bad steel.\"},{\"author\":\"Benjamin Franklin\",\"text\":\"Watch the little things; a small leak will sink a great ship.\"},{\"author\":\"Benjamin Franklin\",\"text\":\"Experience keeps a dear school, but fools will learn in no other.\"},{\"author\":\"Benjamin Haydon\",\"text\":\"There surely is in human nature an inherent propensity to extract all the good out of all the evil.\"},{\"author\":\"Benjamin Spock\",\"text\":\"Trust yourself. You know more than you think you do.\"},{\"author\":\"Bernadette Devlin\",\"text\":\"Yesterday I dared to struggle. Today I dare to win.\"},{\"author\":\"Bernard Shaw\",\"text\":\"Life isn't about finding yourself. Life is about creating yourself.\"},{\"author\":\"Bernard Shaw\",\"text\":\"A life spent making mistakes is not only more honourable but more useful than a life spent in doing nothing.\"},{\"author\":\"Bernard Shaw\",\"text\":\"I am of the opinion that my life belongs to the community, and as long as I live it is my privilege to do for it whatever I can.\"},{\"author\":\"Bernard Shaw\",\"text\":\"We don't stop playing because we grow old; we grow old because we stop playing.\"},{\"author\":\"Bernard Shaw\",\"source\":\"https://www.goodreads.com/quotes/8727\",\"tags\":\"meaning, creativity\",\"text\":\"Life isn't about finding yourself. Life is about creating yourself.\"},{\"author\":\"Bernice Reagon\",\"text\":\"Life's challenges are not supposed to paralyse you, they're supposed to help you discover who you are.\"},{\"author\":\"Bernice Reagon\",\"text\":\"Life's challenges are not supposed to paralyze you, they're supposed to help you discover who you are.\"},{\"author\":\"Bertrand Russell\",\"text\":\"The happiness that is genuinely satisfying is accompanied by the fullest exercise of our faculties and the fullest realization of the world in which we live.\"},{\"author\":\"Betty Friedan\",\"text\":\"It is easier to live through someone else than to become complete yourself.\"},{\"author\":\"Billie Armstrong\",\"text\":\"Our passion is our strength.\"},{\"author\":\"Billy Wilder\",\"text\":\"Trust your own instinct. Your mistakes might as well be your own, instead of someone elses.\"},{\"author\":\"Bishop Desmond Tutu\",\"text\":\"We must not allow ourselves to become like the system we oppose.\"},{\"author\":\"Blaise Pascal\",\"text\":\"The heart has its reasons which reason knows not of.\"},{\"author\":\"Blaise Pascal\",\"text\":\"Kind words do not cost much. Yet they accomplish much.\"},{\"author\":\"Blaise Pascal\",\"text\":\"Man is equally incapable of seeing the nothingness from which he emerges and the infinity in which he is engulfed.\"},{\"author\":\"Blaise Pascal\",\"text\":\"Imagination disposes of everything; it creates beauty, justice, and happiness, which are everything in this world.\"},{\"author\":\"Blaise Pascal\",\"text\":\"The least movement is of importance to all nature. The entire ocean is affected by a pebble.\"},{\"author\":\"Blaise Pascal\",\"text\":\"We are all something, but none of us are everything.\"},{\"author\":\"Blaise Pascal\",\"text\":\"We know the truth, not only by the reason, but by the heart.\"},{\"author\":\"Blaise Pascal\",\"text\":\"We must learn our limits. We are all something, but none of us are everything.\"},{\"author\":\"Bo Jackson\",\"text\":\"Set your goals high, and don't stop till you get there.\"},{\"author\":\"Bob Newhart\",\"text\":\"All I can say about life is, Oh God, enjoy it!\"},{\"author\":\"Bodhidharma\",\"text\":\"All know the way; few actually walk it.\"},{\"author\":\"Booker Washington\",\"text\":\"Excellence is to do a common thing in an uncommon way.\"},{\"author\":\"Booker Washington\",\"text\":\"The world cares very little about what a man or woman knows; it is what a man or woman is able to do that counts.\"},{\"author\":\"Brendan Francis\",\"text\":\"No yesterdays are ever wasted for those who give themselves to today.\"},{\"author\":\"Brian Tracy\",\"text\":\"Goals are the fuel in the furnace of achievement.\"},{\"author\":\"Brian Tracy\",\"text\":\"Whatever we expect with confidence becomes our own self-fulfilling prophecy.\"},{\"author\":\"Brian Tracy\",\"text\":\"You can only grow if you're willing to feel awkward and uncomfortable when you try something new.\"},{\"author\":\"Brian Tracy\",\"text\":\"There is never enough time to do everything, but there is always enough time to do the most important thing.\"},{\"author\":\"Brian Tracy\",\"source\":\"https://www.goodreads.com/quotes/28134\",\"tags\":\"future, inner power\",\"text\":\"You have within you, right now, everything you need to deal with whatever the world can throw at you.\"},{\"author\":\"Bruce Garrabrandt\",\"source\":\"https://www.google.com/search?q=Bruce+Garrabrandt+Creativity+doesn%27t+wait\",\"tags\":\"creativity, creative, perfect, waiting, ordinary\",\"text\":\"Creativity doesn't wait for that perfect moment. It fashions its own perfect moments out of ordinary ones.\"},{\"author\":\"Bruce Lee\",\"text\":\"If you spend too much time thinking about a thing, you'll never get it done.\"},{\"author\":\"Bruce Lee\",\"text\":\"A wise man can learn more from a foolish question than a fool can learn from a wise answer.\"},{\"author\":\"Bruce Lee\",\"text\":\"Notice that the stiffest tree is most easily cracked, while the bamboo or willow survives by bending with the wind.\"},{\"author\":\"Bruce Lee\",\"text\":\"Always be yourself, express yourself, have faith in yourself, do not go out and look for a successful personality and duplicate it.\"},{\"author\":\"Bruce Lee\",\"text\":\"Take no thought of who is right or wrong or who is better than. Be not for or against.\"},{\"author\":\"Bruce Lee\",\"text\":\"Take things as they are. Punch when you have to punch. Kick when you have to kick.\"},{\"author\":\"Bruce Lee\",\"text\":\"I'm not in this world to live up to your expectations and you're not in this world to live up to mine.\"},{\"author\":\"Bruce Lee\",\"text\":\"To know oneself is to study oneself in action with another person.\"},{\"author\":\"Bruce Lee\",\"text\":\"As you think, so shall you become.\"},{\"author\":\"Bruce Lee\",\"text\":\"Mistakes are always forgivable, if one has the courage to admit them.\"},{\"author\":\"Bruce Lee\",\"text\":\"If you love life, don't waste time, for time is what life is made up of.\"},{\"author\":\"Bruce Lee\",\"text\":\"All fixed set patterns are incapable of adaptability or pliability. The truth is outside of all fixed patterns.\"},{\"author\":\"Bruce Lee\",\"text\":\"The less effort, the faster and more powerful you will be.\"},{\"author\":\"Bruce Lee\",\"text\":\"To hell with circumstances; I create opportunities.\"},{\"author\":\"Bruce Lee\",\"text\":\"Im not in this world to live up to your expectations and you're not in this world to live up to mine.\"},{\"author\":\"Bruce Lee\",\"source\":\"https://www.goodreads.com/quotes/302319\",\"tags\":\"knowledge, action\",\"text\":\"Knowing is not enough, we must apply. Willing is not enough, we must do.\"},{\"author\":\"Buckminster Fuller\",\"text\":\"There is nothing in a caterpillar that tells you it's going to be a butterfly.\"},{\"author\":\"Buckminster Fuller\",\"source\":\"https://www.goodreads.com/quotes/13119\",\"tags\":\"future, progress, reality, new\",\"text\":\"You never change things by fighting the existing reality. To change something, build a new model that makes the existing model obsolete\"},{\"author\":\"Buddha\",\"text\":\"Peace comes from within. Do not seek it without.\"},{\"author\":\"Buddha\",\"text\":\"Work out your own salvation. Do not depend on others.\"},{\"author\":\"Buddha\",\"text\":\"He is able who thinks he is able.\"},{\"author\":\"Buddha\",\"text\":\"Those who are free of resentful thoughts surely find peace.\"},{\"author\":\"Buddha\",\"text\":\"What we think, we become.\"},{\"author\":\"Buddha\",\"text\":\"It is better to travel well than to arrive.\"},{\"author\":\"Buddha\",\"text\":\"The mind is everything. What you think you become.\"},{\"author\":\"Buddha\",\"text\":\"In separateness lies the world's great misery, in compassion lies the world's true strength.\"},{\"author\":\"Buddha\",\"text\":\"Happiness comes when your work and words are of benefit to yourself and others.\"},{\"author\":\"Buddha\",\"text\":\"Just as a candle cannot burn without fire, men cannot live without a spiritual life.\"},{\"author\":\"Buddha\",\"text\":\"If you light a lamp for somebody, it will also brighten your path.\"},{\"author\":\"Buddha\",\"text\":\"Your worst enemy cannot harm you as much as your own unguarded thoughts.\"},{\"author\":\"Buddha\",\"text\":\"The way is not in the sky. The way is in the heart.\"},{\"author\":\"Buddha\",\"text\":\"Three things cannot be long hidden: the sun, the moon, and the truth.\"},{\"author\":\"Buddha\",\"text\":\"You, yourself, as much as anybody in the entire universe, deserve your love and affection.\"},{\"author\":\"Buddha\",\"text\":\"You will not be punished for your anger, you will be punished by your anger.\"},{\"author\":\"Buddha\",\"text\":\"The thought manifests as the word. The word manifests as the deed. The deed develops into habit. And the habit hardens into character.\"},{\"author\":\"Buddha\",\"text\":\"In a controversy the instant we feel anger we have already ceased striving for the truth, and have begun striving for ourselves.\"},{\"author\":\"Buddha\",\"text\":\"Do not overrate what you have received, nor envy others. He who envies others does not obtain peace of mind.\"},{\"author\":\"Buddha\",\"text\":\"To keep the body in good health is a duty... otherwise we shall not be able to keep our mind strong and clear.\"},{\"author\":\"Buddha\",\"text\":\"There are only two mistakes one can make along the road to truth; not going all the way, and not starting.\"},{\"author\":\"Buddha\",\"text\":\"To live a pure unselfish life, one must count nothing as ones own in the midst of abundance.\"},{\"author\":\"Buddha\",\"text\":\"Do not dwell in the past, do not dream of the future, concentrate the mind on the present moment.\"},{\"author\":\"Buddha\",\"text\":\"We are what we think. All that we are arises with our thoughts. With our thoughts, we make the world.\"},{\"author\":\"Buddha\",\"text\":\"Your work is to discover your world and then with all your heart give yourself to it.\"},{\"author\":\"Buddha\",\"text\":\"All that we are is the result of what we have thought. The mind is everything. What we think we become.\"},{\"author\":\"Buddha\",\"text\":\"The foot feels the foot when it feels the ground.\"},{\"author\":\"Buddha\",\"text\":\"No one saves us but ourselves. No one can and no one may. We ourselves must walk the path.\"},{\"author\":\"Buddha\",\"text\":\"When you realize how perfect everything is you will tilt your head back and laugh at the sky.\"},{\"author\":\"Buddha\",\"text\":\"Thousands of candles can be lighted from a single candle, and the life of the candle will not be shortened. Happiness never decreases by being shared.\"},{\"author\":\"Buddha\",\"text\":\"He who experiences the unity of life sees his own Self in all beings, and all beings in his own Self, and looks on everything with an impartial eye.\"},{\"author\":\"Buddha\",\"text\":\"In the sky, there is no distinction of east and west; people create distinctions out of their own minds and then believe them to be true.\"},{\"author\":\"Buddha\",\"text\":\"Thousands of candles can be lit from a single, and the life of the candle will not be shortened. Happiness never decreases by being shared.\"},{\"author\":\"Buddha\",\"text\":\"Always be mindful of the kindness and not the faults of others.\"},{\"author\":\"Buddha\",\"text\":\"Better than a thousand hollow words, is one word that brings peace.\"},{\"author\":\"Buddha\",\"text\":\"A jug fills drop by drop.\"},{\"author\":\"Buddha\",\"text\":\"You only lose what you cling to.\"},{\"author\":\"Buddha\",\"text\":\"Every human being is the author of his own health or disease.\"},{\"author\":\"Buddha\",\"text\":\"Your body is precious. It is our vehicle for awakening. Treat it with care.\"},{\"author\":\"Buddha\",\"text\":\"Chaos is inherent in all compounded things. Strive on with diligence.\"},{\"author\":\"Buddha\",\"text\":\"No matter how hard the past, you can always begin again.\"},{\"author\":\"Buddha\",\"text\":\"Your work is to discover your work and then with all your heart to give yourself to it.\"},{\"author\":\"Buddha\",\"text\":\"If we could see the miracle of a single flower clearly, our whole life would change.\"},{\"author\":\"Buddha\",\"text\":\"You cannot travel the path until you have become the path itself.\"},{\"author\":\"Buddha\",\"text\":\"We are shaped by our thoughts; we become what we think. When the mind is pure, joy follows like a shadow that never leaves.\"},{\"author\":\"Buddha\",\"text\":\"Holding on to anger is like grasping a hot coal with the intent of throwing it at someone else; you are the one who gets burned.\"},{\"author\":\"Buddha\",\"text\":\"I do not believe in a fate that falls on men however they act; but I do believe in a fate that falls on them unless they act.\"},{\"author\":\"Buddha\",\"text\":\"Remembering a wrong is like carrying a burden on the mind.\"},{\"author\":\"Buddha\",\"text\":\"The only real failure in life is not to be true to the best one knows.\"},{\"author\":\"Buddha\",\"text\":\"However many holy words you read, However many you speak, What good will they do you If you do not act on upon them?\"},{\"author\":\"Buddha\",\"text\":\"Meditation brings wisdom; lack of mediation leaves ignorance. Know well what leads you forward and what hold you back, and choose the path that leads to wisdom.\"},{\"author\":\"Buddha\",\"text\":\"If you propose to speak, always ask yourself, is it true, is it necessary, is it kind.\"},{\"author\":\"Buddha\",\"text\":\"An idea that is developed and put into action is more important than an idea that exists only as an idea.\"},{\"author\":\"Buddha\",\"text\":\"However many holy words you read, however many you speak, what good will they do you if you do not act on upon them?\"},{\"author\":\"Buddha\",\"text\":\"Better than a thousand hollow words is one word that brings peace.\"},{\"author\":\"Buddha\",\"text\":\"What you are is what you have been. What you will be is what you do now.\"},{\"author\":\"Buddha\",\"text\":\"What you are is what you have been. What you'll be is what you do now.\"},{\"author\":\"Byron Pulsifer\",\"text\":\"Fate is in your hands and no one elses\"},{\"author\":\"Byron Pulsifer\",\"text\":\"What you give is what you get.\"},{\"author\":\"Byron Pulsifer\",\"text\":\"The best teacher is experience learned from failures.\"},{\"author\":\"Byron Pulsifer\",\"text\":\"What you fear is that which requires action to overcome.\"},{\"author\":\"Byron Pulsifer\",\"text\":\"If you cannot be silent be brilliant and thoughtful.\"},{\"author\":\"Byron Pulsifer\",\"text\":\"Someone is special only if you tell them.\"},{\"author\":\"Byron Pulsifer\",\"text\":\"Give thanks for the rain of life that propels us to reach new horizons.\"},{\"author\":\"Byron Pulsifer\",\"text\":\"Transformation doesn't take place with a vacuum; instead, it occurs when we are indirectly and directly connected to all those around us.\"},{\"author\":\"Byron Pulsifer\",\"text\":\"Your destiny isn't just fate; it is how you use your own developed abilities to get what you want.\"},{\"author\":\"Byron Pulsifer\",\"text\":\"Everyone can taste success when the going is easy, but few know how to taste victory when times get tough.\"},{\"author\":\"Byron Pulsifer\",\"text\":\"Patience is a virtue but you will never ever accomplish anything if you don't exercise action over patience.\"},{\"author\":\"Byron Pulsifer\",\"text\":\"Many people think of prosperity that concerns money only to forget that true prosperity is of the mind.\"},{\"author\":\"Byron Pulsifer\",\"text\":\"Today, give a stranger a smile without waiting for it may be the joy they need to have a great day.\"},{\"author\":\"Byron Pulsifer\",\"text\":\"Sadness may be part of life but there is no need to let it dominate your entire life.\"},{\"author\":\"Byron Pulsifer\",\"text\":\"To give hope to someone occurs when you teach them how to use the tools to do it for themselves.\"},{\"author\":\"Byron Pulsifer\",\"text\":\"You can be what you want to be. You have the power within and we will help you always.\"},{\"author\":\"Byron Pulsifer\",\"text\":\"Courage is not about taking risks unknowingly but putting your own being in front of challenges that others may not be able to.\"},{\"author\":\"Byron Pulsifer\",\"text\":\"Responsibility is not inherited, it is a choice that everyone needs to make at some point in their life.\"},{\"author\":\"Byron Pulsifer\",\"text\":\"You can't create in a vacuum. Life gives you the material and dreams can propel new beginnings.\"},{\"author\":\"Byron Pulsifer\",\"text\":\"You can't trust without risk but neither can you live in a cocoon.\"},{\"author\":\"Byron Pulsifer\",\"text\":\"Look forward to spring as a time when you can start to see what nature has to offer once again.\"},{\"author\":\"Byron Pulsifer\",\"text\":\"Fear of failure is one attitude that will keep you at the same point in your life.\"},{\"author\":\"Byron Pulsifer\",\"text\":\"To be thoughtful and kind only takes a few seconds compared to the timeless hurt caused by one rude gesture.\"},{\"author\":\"Byron Pulsifer\",\"text\":\"If you have no respect for your own values how can you be worthy of respect from others.\"},{\"author\":\"Byron Pulsifer\",\"text\":\"Wishes can be your best avenue of getting what you want when you turn wishes into action. Action moves your wish to the forefront from thought to reality.\"},{\"author\":\"Byron Pulsifer\",\"text\":\"Adversity isn't set against you to fail; adversity is a way to build your character so that you can succeed over and over again through perseverance.\"},{\"author\":\"Byron Pulsifer\",\"text\":\"Truth isn't all about what actually happens but more about how what has happened is interpreted.\"},{\"author\":\"Byron Pulsifer\",\"text\":\"Passion creates the desire for more and action fuelled by passion creates a future.\"},{\"author\":\"Byron Pulsifer\",\"text\":\"Experience can only be gained by doing not by thinking or dreaming.\"},{\"author\":\"Byron Pulsifer\",\"text\":\"It can't be spring if your heart is filled with past failures.\"},{\"author\":\"Byron Pulsifer\",\"text\":\"I may not know everything, but everything is not known yet anyway.\"},{\"author\":\"Byron Pulsifer\",\"text\":\"Transformation does not start with some one else changing you; transformation is an inner self reworking of what you are now to what you will be.\"},{\"author\":\"Byron Pulsifer\",\"text\":\"Time is not a measure the length of a day or month or year but more a measure of what you have accomplished.\"},{\"author\":\"Byron Pulsifer\",\"text\":\"Complaining doesn't change a thing only taking action does.\"},{\"author\":\"Byron Pulsifer\",\"text\":\"Strength to carry on despite the odds means you have faith in your own abilities and know how.\"},{\"author\":\"Byron Pulsifer\",\"text\":\"Spring is a time for rebirth and the fulfilment of new life.\"},{\"author\":\"Byron Pulsifer\",\"text\":\"Respect is not something that you can ask for, buy or borrow. Respect is what you earn from each person no matter their background or status.\"},{\"author\":\"Byron Pulsifer\",\"text\":\"Bold is not the act of foolishness but the attribute and inner strength to act when others will not so as to move forward not backward.\"},{\"author\":\"Byron Pulsifer\",\"text\":\"Staying in one place is the best path to be taken over and surpassed by many.\"},{\"author\":\"Byron Pulsifer\",\"text\":\"To know your purpose is to live a life of direction, and in that direction is found peace and tranquillity.\"},{\"author\":\"Byron Pulsifer\",\"text\":\"Into each life rain must fall but rain can be the giver of life and it is all in your attitude that makes rain produce sunshine.\"},{\"author\":\"Byron Roberts\",\"text\":\"It is not the mistake that has the most power, instead, it is learning from the mistake to advance your own attributes.\"},{\"author\":\"C. Pulsifer\",\"text\":\"When anger use your energy to do something productive.\"},{\"author\":\"Cadet Maxim\",\"text\":\"Risk more than others think is safe. Care more than others think is wise. Dream more than others think is practical.Expect more than others think is possible.\"},{\"author\":\"Calvin Coolidge\",\"text\":\"We cannot do everything at once, but we can do something at once.\"},{\"author\":\"Calvin Coolidge\",\"text\":\"I have never been hurt by anything I didn't say.\"},{\"author\":\"Cardinal Retz\",\"text\":\"A man who doesn't trust himself can never really trust anyone else.\"},{\"author\":\"Carl Bard\",\"text\":\"Though no one can go back and make a brand new start, anyone can start from not and make a brand new ending.\"},{\"author\":\"Carl Jung\",\"text\":\"Who looks outside, dreams; who looks inside, awakes.\"},{\"author\":\"Carl Jung\",\"text\":\"You are what you do, not what you say you do.\"},{\"author\":\"Carl Jung\",\"text\":\"The shoe that fits one person pinches another; there is no recipe for living that suits all cases.\"},{\"author\":\"Carl Jung\",\"text\":\"Everything that irritates us about others can lead us to an understanding about ourselves.\"},{\"author\":\"Carl Jung\",\"text\":\"Your vision will become clear only when you look into your heart. Who looks outside, dreams. Who looks inside, awakens.\"},{\"author\":\"Carl Jung\",\"text\":\"Everything that irritates us about others can lead us to an understanding of ourselves.\"},{\"author\":\"Carl Jung\",\"text\":\"In all chaos there is a cosmos, in all disorder a secret order.\"},{\"author\":\"Carl Jung\",\"text\":\"Without this playing with fantasy no creative work has ever yet come to birth. The debt we owe to the play of the imagination is incalculable.\"},{\"author\":\"Carl Jung\",\"text\":\"Through pride we are ever deceiving ourselves. But deep down below the surface of the average conscience a still, small voice says to us, Something is out of tune.\"},{\"author\":\"Carl Jung\",\"text\":\"Knowledge rests not upon truth alone, but upon error also.\"},{\"author\":\"Carl Jung\",\"text\":\"The least of things with a meaning is worth more in life than the greatest of things without it.\"},{\"author\":\"Carl Jung\",\"text\":\"Knowing your own darkness is the best method for dealing with the darknesses of other people.\"},{\"author\":\"Carl Jung\",\"text\":\"It all depends on how we look at things, and not how they are in themselves.\"},{\"author\":\"Carl Jung\",\"text\":\"Everything that irritates us about others can lead us to a better understanding of ourselves.\"},{\"author\":\"Carl Jung\",\"text\":\"Your vision will become clear only when you can look into your own heart. Who looks outside, dreams; who looks inside, awakes.\"},{\"author\":\"Carl Sagan\",\"text\":\"Imagination will often carry us to worlds that never were. But without it we go nowhere.\"},{\"author\":\"Carl Sandburg\",\"text\":\"Nothing happens unless first we dream.\"},{\"author\":\"Carla Gordon\",\"text\":\"If someone in your life talked to you the way you talk to yourself, you would have left them long ago.\"},{\"author\":\"Carlos Castaneda\",\"text\":\"The trick is in what one emphasizes. We either make ourselves miserable, or we make ourselves happy. The amount of work is the same.\"},{\"author\":\"Carlyle\",\"text\":\"Silence is deep as Eternity, Speech is shallow as Time.\"},{\"author\":\"Caroline Myss\",\"text\":\"You cannot change anything in your life with intention alone, which can become a watered-down, occasional hope that you'll get to tomorrow. Intention without action is useless.\"},{\"author\":\"Catherine Pulsifer\",\"text\":\"You can adopt the attitude there is nothing you can do, or you can see the challenge as your call to action.\"},{\"author\":\"Catherine Pulsifer\",\"text\":\"Being angry never solves anything.\"},{\"author\":\"Catherine Pulsifer\",\"text\":\"Rather than wishing for change, you first must be prepared to change.\"},{\"author\":\"Catherine Pulsifer\",\"text\":\"Our ability to achieve happiness and success depends on the strength of our wings.\"},{\"author\":\"Cathy Pulsifer\",\"text\":\"You are special, you are unique, you are the best!\"},{\"author\":\"Cavour\",\"text\":\"The man who trusts men will make fewer mistakes than he who distrusts them.\"},{\"author\":\"Cecil B. DeMille\",\"text\":\"The person who makes a success of living is the one who see his goal steadily and aims for it unswervingly. That is dedication.\"},{\"author\":\"Cervantes\",\"text\":\"Those who will play with cats must expect to be scratched.\"},{\"author\":\"Cervantes\",\"text\":\"Be slow of tongue and quick of eye.\"},{\"author\":\"Chalmers\",\"text\":\"The grand essentials of happiness are: something to do, something to love, and something to hope for.\"},{\"author\":\"Chanakya\",\"text\":\"A man is great by deeds, not by birth.\"},{\"author\":\"Channing\",\"text\":\"Error is discipline through which we advance.\"},{\"author\":\"Channing\",\"text\":\"Every man is a volume if you know how to read him.\"},{\"author\":\"Charles A. Lindbergh\",\"text\":\"Life a culmination of the past, an awareness of the present, an indication of the future beyond knowledge, the quality that gives a touch of divinity to matter.\"},{\"author\":\"Charles Chesnutt\",\"text\":\"Impossibilities are merely things which we have not yet learned.\"},{\"author\":\"Charles Darwin\",\"text\":\"The highest stage in moral ure at which we can arrive is when we recognize that we ought to control our thoughts.\"},{\"author\":\"Charles DeLint\",\"text\":\"The road leading to a goal does not separate you from the destination; it is essentially a part of it.\"},{\"author\":\"Charles Dickens\",\"text\":\"Don't leave a stone unturned. It's always something, to know you have done the most you could.\"},{\"author\":\"Charles Dubois\",\"text\":\"The important thing is this: to be able at any moment to sacrifice what we are for what we could become.\"},{\"author\":\"Charles Kettering\",\"text\":\"One fails forward toward success.\"},{\"author\":\"Charles Lamb\",\"text\":\"The greatest pleasure I know is to do a good action by stealth, and to have it found out by accident.\"},{\"author\":\"Charles Perkhurst\",\"text\":\"The heart has eyes which the brain knows nothing of.\"},{\"author\":\"Charles R. Swindoll\",\"text\":\"We are all faced with a series of great opportunities brilliantly disguised as impossible situations.\"},{\"author\":\"Charles Schwab\",\"text\":\"Keeping a little ahead of conditions is one of the secrets of business, the trailer seldom goes far.\"},{\"author\":\"Charles Swindoll\",\"text\":\"Life is 10% what happens to you and 90% how you react to it.\"},{\"author\":\"Charlotte Bronte\",\"text\":\"Life is so constructed that an event does not, cannot, will not, match the expectation.\"},{\"author\":\"Charlotte Gilman\",\"text\":\"Let us revere, let us worship, but erect and open-eyed, the highest, not the lowest; the future, not the past!\"},{\"author\":\"Charlotte Perkins Gilman\",\"text\":\"The first duty of a human being is to assume the right functional relationship to society more briefly, to find your real job, and do it.\"},{\"author\":\"Charlotte Perkins Gilman\",\"text\":\"The first duty of a human being is to assume the right functional relationship to society - more briefly, to find your real job, and do it.\"},{\"author\":\"Cheng Yen\",\"text\":\"Happiness does not come from having much, but from being attached to little.\"},{\"author\":\"Chinese proverb\",\"text\":\"Learning is a treasure that will follow its owner everywhere\"},{\"author\":\"Chinese proverb\",\"text\":\"Talk doesn't cook rice.\"},{\"author\":\"Chinese proverb\",\"text\":\"Tension is who you think you should be. Relaxation is who you are.\"},{\"author\":\"Chinese proverb\",\"text\":\"If you are patient in one moment of anger, you will escape one hundred days of sorrow.\"},{\"author\":\"Chinese proverb\",\"text\":\"People who say it cannot be done should not interrupt those who are doing it.\"},{\"author\":\"Chinese proverb\",\"text\":\"A gem cannot be polished without friction, nor a man perfected without trials.\"},{\"author\":\"Chinese proverb\",\"text\":\"He who deliberates fully before taking a step will spend his entire life on one leg.\"},{\"author\":\"Chinese proverb\",\"text\":\"A single conversation across the table with a wise person is worth a months study of books.\"},{\"author\":\"Christian Bovee\",\"text\":\"Example has more followers than reason.\"},{\"author\":\"Christopher Morley\",\"text\":\"There is only one success to be able to spend your life in your own way.\"},{\"author\":\"Christopher Morley\",\"text\":\"There is only one success - to be able to spend your life in your own way.\"},{\"author\":\"Christopher Reeve\",\"text\":\"Once you choose hope, anythings possible.\"},{\"author\":\"Chuang Tzu\",\"text\":\"When deeds and words are in accord, the whole world is transformed.\"},{\"author\":\"Chuang Tzu\",\"text\":\"Flow with whatever is happening and let your mind be free. Stay centred by accepting whatever you are doing. This is the ultimate.\"},{\"author\":\"Chuck Norris\",\"text\":\"A lot of times people look at the negative side of what they feel they can't do. I always look on the positive side of what I can do.\"},{\"author\":\"Chuck Norris\",\"text\":\"A lot of people give up just before theyre about to make it. You know you never know when that next obstacle is going to be the last one.\"},{\"author\":\"Cicero\",\"text\":\"We must not say every mistake is a foolish one.\"},{\"author\":\"Cicero\",\"text\":\"Gratitude is not only the greatest of virtues, but the paren't of all the others.\"},{\"author\":\"Claire Charmont\",\"text\":\"The one who always loses, is the only person who gets the reward.\"},{\"author\":\"Coco Chanel\",\"text\":\"There are people who have money and people who are rich.\"},{\"author\":\"Coco Chanel\",\"text\":\"How many cares one loses when one decides not to be something but to be someone.\"},{\"author\":\"Colette\",\"text\":\"I love my past. I love my present. I'm not ashamed of what Ive had, and I'm not sad because I have it no longer.\"},{\"author\":\"Colette\",\"text\":\"I love my past. I love my present. Im not ashamed of what Ive had, and Im not sad because I have it no longer.\"},{\"author\":\"Colin Powell\",\"text\":\"If you are going to achieve excellence in big things, you develop the habit in little matters. Excellence is not an exception, it is a prevailing attitude.\"},{\"author\":\"Confucius\",\"text\":\"Study the past, if you would divine the future.\"},{\"author\":\"Confucius\",\"text\":\"Silence is a true friend who never betrays.\"},{\"author\":\"Confucius\",\"source\":\"https://www.goodreads.com/quotes/961585\",\"tags\":\"future, tomorrow, past\",\"text\":\"Think of tomorrow, the past can't be mended.\"},{\"author\":\"Confucius\",\"text\":\"Wherever you go, go with all your heart.\"},{\"author\":\"Confucius\",\"text\":\"The more you know yourself, the more you forgive yourself.\"},{\"author\":\"Confucius\",\"text\":\"To be wrong is nothing unless you continue to remember it.\"},{\"author\":\"Confucius\",\"text\":\"The cautious seldom err.\"},{\"author\":\"Confucius\",\"text\":\"What you do not want done to yourself, do not do to others.\"},{\"author\":\"Confucius\",\"text\":\"Reviewing what you have learned and learning anew, you are fit to be a teacher.\"},{\"author\":\"Confucius\",\"text\":\"The superior man is satisfied and composed; the mean man is always full of distress.\"},{\"author\":\"Confucius\",\"text\":\"It does not matter how slowly you go as long as you do not stop.\"},{\"author\":\"Confucius\",\"text\":\"To study and not think is a waste. To think and not study is dangerous.\"},{\"author\":\"Confucius\",\"text\":\"I will not be concerned at other men is not knowing me;I will be concerned at my own want of ability.\"},{\"author\":\"Confucius\",\"text\":\"Choose a job you love, and you will never have to work a day in your life.\"},{\"author\":\"Confucius\",\"text\":\"When you see a man of worth, think of how you may emulate him. When you see one who is unworthy, examine yourself.\"},{\"author\":\"Confucius\",\"text\":\"Being in humaneness is good. If we select other goodness and thus are far apart from humaneness, how can we be the wise?\"},{\"author\":\"Confucius\",\"text\":\"When it is obvious that the goals cannot be reached, don't adjust the goals, adjust the action steps.\"},{\"author\":\"Confucius\",\"text\":\"I am not bothered by the fact that I am unknown. I am bothered when I do not know others.\"},{\"author\":\"Confucius\",\"text\":\"The superior man is modest in his speech, but exceeds in his actions.\"},{\"author\":\"Confucius\",\"text\":\"Silence is the true friend that never betrays.\"},{\"author\":\"Confucius\",\"text\":\"To be wronged is nothing unless you continue to remember it.\"},{\"author\":\"Confucius\",\"text\":\"They must often change, who would be constant in happiness or wisdom.\"},{\"author\":\"Confucius\",\"text\":\"When you see a good person, think of becoming like him. When you see someone not so good, reflect on your own weak points.\"},{\"author\":\"Confucius\",\"text\":\"When you meet someone better than yourself, turn your thoughts to becoming his equal. When you meet someone not as good as you are, look within and examine your own self.\"},{\"author\":\"Confucius\",\"text\":\"Everything has beauty, but not everyone sees it.\"},{\"author\":\"Confucius\",\"text\":\"I want you to be everything that's you, deep at the center of your being.\"},{\"author\":\"Confucius\",\"text\":\"The Superior Man is aware of Righteousness, the inferior man is aware of advantage.\"},{\"author\":\"Confucius\",\"text\":\"Fine words and an insinuating appearance are seldom associated with true virtue\"},{\"author\":\"Confucius\",\"text\":\"Our greatest glory is not in never falling, but in rising every time we fall.\"},{\"author\":\"Confucius\",\"text\":\"I hear and I forget. I see and I remember. I do and I understand.\"},{\"author\":\"Confucius\",\"text\":\"Ability will never catch up with the demand for it.\"},{\"author\":\"Confucius\",\"text\":\"The superior man acts before he speaks, and afterwards speaks according to his action.\"},{\"author\":\"Confucius\",\"text\":\"Learning without reflection is a waste, reflection without learning is dangerous.\"},{\"author\":\"Confucius\",\"text\":\"If you look into your own heart, and you find nothing wrong there, what is there to worry about? What is there to fear?\"},{\"author\":\"Confucius\",\"text\":\"Sincerity is the way of Heaven. The attainment of sincerity is the way of men.\"},{\"author\":\"Confucius\",\"text\":\"To give ones self earnestly to the duties due to men, and, while respecting spiritual beings, to keep aloof from them, may be called wisdom.\"},{\"author\":\"Confucius\",\"text\":\"He who wishes to secure the good of others, has already secured his own.\"},{\"author\":\"Confucius\",\"text\":\"Life is really simple, but we insist on making it complicated.\"},{\"author\":\"Corita Kent\",\"text\":\"Life is a succession of moments. To live each one is to succeed.\"},{\"author\":\"Cullen Hightower\",\"text\":\"When performance exceeds ambition, the overlap is called success.\"},{\"author\":\"Cynthia Ozick\",\"text\":\"To want to be what one can be is purpose in life.\"},{\"author\":\"Daisaku Ikeda\",\"text\":\"What matters is the value we've created in our lives, the people we've made happy and how much we've grown as people.\"},{\"author\":\"Daisaku Ikeda\",\"text\":\"The person who lives life fully, glowing with life's energy, is the person who lives a successful life.\"},{\"author\":\"Daisaku Ikeda\",\"text\":\"True happiness means forging a strong spirit that is undefeated, no matter how trying our circumstances.\"},{\"author\":\"Daisaku Ikeda\",\"text\":\"Genuine sincerity opens people's hearts, while manipulation causes them to close.\"},{\"author\":\"Daisaku Ikeda\",\"text\":\"If we look at the world with a love of life, the world will reveal its beauty to us.\"},{\"author\":\"Daisaku Ikeda\",\"text\":\"If you lose today, win tomorrow. In this never-ending spirit of challenge is the heart of a victor.\"},{\"author\":\"Dalai Lama\",\"text\":\"Be kind whenever possible. It is always possible.\"},{\"author\":\"Dalai Lama\",\"text\":\"I believe that we are fundamentally the same and have the same basic potential.\"},{\"author\":\"Dalai Lama\",\"text\":\"Love and compassion open our own inner life, reducing stress, distrust and loneliness.\"},{\"author\":\"Dalai Lama\",\"text\":\"More often than not, anger is actually an indication of weakness rather than of strength.\"},{\"author\":\"Dalai Lama\",\"text\":\"By going beyond your own problems and taking care of others, you gain inner strength, self-confidence, courage, and a greater sense of calm.\"},{\"author\":\"Dalai Lama\",\"text\":\"If we have a positive mental attitude, then even when surrounded by hostility, we shall not lack inner peace.\"},{\"author\":\"Dalai Lama\",\"text\":\"Genuine love should first be directed at oneself if we do not love ourselves, how can we love others?\"},{\"author\":\"Dalai Lama\",\"text\":\"With the realization of ones own potential and self-confidence in ones ability, one can build a better world.\"},{\"author\":\"Dalai Lama\",\"text\":\"The key to transforming our hearts and minds is to have an understanding of how our thoughts and emotions work.\"},{\"author\":\"Dalai Lama\",\"text\":\"I find hope in the darkest of days, and focus in the brightest. I do not judge the universe.\"},{\"author\":\"Dalai Lama\",\"text\":\"People take different roads seeking fulfilment and happiness. Just because theyre not on your road doesn't mean they've gotten lost.\"},{\"author\":\"Dalai Lama\",\"text\":\"With realization of ones own potential and self-confidence in ones ability, one can build a better world.\"},{\"author\":\"Dalai Lama\",\"text\":\"Happiness is not something ready made. It comes from your own actions.\"},{\"author\":\"Dalai Lama\",\"text\":\"Remember that sometimes not getting what you want is a wonderful stroke of luck.\"},{\"author\":\"Dalai Lama\",\"text\":\"Consider that not only do negative thoughts and emotions destroy our experience of peace, they also undermine our health.\"},{\"author\":\"Dalai Lama\",\"text\":\"The greatest antidote to insecurity and the sense of fear is compassion it brings one back to the basis of one's inner strength\"},{\"author\":\"Dalai Lama\",\"text\":\"There is no need for temples, no need for complicated philosophies. My brain and my heart are my temples; my philosophy is kindness.\"},{\"author\":\"Dalai Lama\",\"text\":\"Happiness mainly comes from our own attitude, rather than from external factors.\"},{\"author\":\"Dalai Lama\",\"text\":\"It is difficult to achieve a spirit of genuine cooperation as long as people remain indifferent to the feelings and happiness of others.\"},{\"author\":\"Dalai Lama\",\"text\":\"The most important thing is transforming our minds, for a new way of thinking, a new outlook: we should strive to develop a new inner world.\"},{\"author\":\"Dalai Lama\",\"text\":\"Compassion and happiness are not a sign of weakness but a sign of strength.\"},{\"author\":\"Dalai Lama\",\"text\":\"See the positive side, the potential, and make an effort.\"},{\"author\":\"Dalai Lama\",\"text\":\"Happiness does not come about only due to external circumstances; it mainly derives from inner attitudes.\"},{\"author\":\"Dalai Lama\",\"text\":\"Genuine love should first be directed at oneself - if we do not love ourselves, how can we love others?\"},{\"author\":\"Dalai Lama\",\"text\":\"The greatest antidote to insecurity and the sense of fear is compassion - it brings one back to the basis of one's inner strength\"},{\"author\":\"Dale Carnegie\",\"text\":\"Most of the important things in the world have been accomplished by people who have kept on trying when there seemed to be no hope at all.\"},{\"author\":\"Dale Carnegie\",\"text\":\"When fate hands us a lemon, lets try to make lemonade.\"},{\"author\":\"Dale Carnegie\",\"text\":\"Success is getting what you want. Happiness is wanting what you get.\"},{\"author\":\"Dale Earnhardt\",\"text\":\"The winner ain't the one with the fastest car it's the one who refuses to lose.\"},{\"author\":\"Danielle Ingrum\",\"text\":\"Give it all you've got because you never know if there's going to be a next time.\"},{\"author\":\"Danilo Dolci\",\"text\":\"It's important to know that words don't move mountains. Work, exacting work moves mountains.\"},{\"author\":\"Dave Weinbaum\",\"text\":\"The secret to a rich life is to have more beginnings than endings.\"},{\"author\":\"David Bader\",\"text\":\"Be here now. Be someplace else later. Is that so complicated?\"},{\"author\":\"David Bowie\",\"source\":\"https://www.goodreads.com/quotes/462535\",\"tags\":\"future, life, listen\",\"text\":\"Tomorrow belongs to those who can hear it coming\"},{\"author\":\"David Brinkley\",\"text\":\"A successful person is one who can lay a firm foundation with the bricks that others throw at him or her.\"},{\"author\":\"David Eddings\",\"text\":\"No day in which you learn something is a complete loss.\"},{\"author\":\"David Jordan\",\"text\":\"Wisdom is knowing what to do next; Skill is knowing how ot do it, and Virtue is doing it.\"},{\"author\":\"David McCullough\",\"text\":\"Real success is finding your lifework in the work that you love.\"},{\"author\":\"David Rockefeller\",\"text\":\"Success in business requires training and discipline and hard work. But if you're not frightened by these things, the opportunities are just as great today as they ever were.\"},{\"author\":\"David Seamans\",\"text\":\"We cannot change our memories, but we can change their meaning and the power they have over us.\"},{\"author\":\"Deepak Chopra\",\"source\":\"https://www.goodreads.com/quotes/381641\",\"tags\":\"future, choice, decision, change\",\"text\":\"When you make a choice, you change the future.\"},{\"author\":\"Demosthenes\",\"text\":\"Small opportunities are often the beginning of great enterprises.\"},{\"author\":\"Denis Waitley\",\"text\":\"There are two primary choices in life: to accept conditions as they exist, or accept the responsibility for changing them.\"},{\"author\":\"Denis Waitley\",\"text\":\"There are two primary choices in life: to accept conditions as they exist, or accept responsibility for changing them.\"},{\"author\":\"Denis Waitley\",\"text\":\"You must welcome change as the rule but not as your ruler.\"},{\"author\":\"Denis Waitley\",\"text\":\"Happiness cannot be travelled to, owned, earned, worn or consumed. Happiness is the spiritual experience of living every minute with love, grace and gratitude.\"},{\"author\":\"Denis Waitley\",\"text\":\"A dream is your creative vision for your life in the future. You must break out of your current comfort zone and become comfortable with the unfamiliar and the unknown.\"},{\"author\":\"Denis Waitley\",\"text\":\"The only person who never makes mistakes is the person who never does anything.\"},{\"author\":\"Dennis Kimbro\",\"text\":\"We see things not as they are, but as we are. Our perception is shaped by our previous experiences.\"},{\"author\":\"Desiderius Erasmus\",\"text\":\"The fox has many tricks. The hedgehog has but one. But that is the best of all.\"},{\"author\":\"Dhammapada\",\"text\":\"Just as a flower, which seems beautiful has color but no perfume, so are the fruitless words of a man who speaks them but does them not.\"},{\"author\":\"Dhammapada\",\"text\":\"Do not give your attention to what others do or fail to do; give it to what you do or fail to do.\"},{\"author\":\"Dieter F. Uchtdorf\",\"source\":\"https://www.goodreads.com/quotes/8070701\",\"tags\":\"creative, creativity, soul\",\"text\":\"The desire to create is one of the deepest yearnings of the human soul.\"},{\"author\":\"Donald Kircher\",\"text\":\"A man of ability and the desire to accomplish something can do anything.\"},{\"author\":\"Donald Trump\",\"text\":\"Everything in life is luck.\"},{\"author\":\"Donald Trump\",\"text\":\"Money was never a big motivation for me, except as a way to keep score. The real excitement is playing the game.\"},{\"author\":\"Donald Trump\",\"text\":\"As long as your going to be thinking anyway, think big.\"},{\"author\":\"Donald Trump\",\"text\":\"You have to think anyway, so why not think big?\"},{\"author\":\"Donald Trump\",\"text\":\"What separates the winners from the losers is how a person reacts to each new twist of fate.\"},{\"author\":\"Donald Trump\",\"text\":\"Sometimes by losing a battle you find a new way to win the war.\"},{\"author\":\"Doris Day\",\"text\":\"Gratitude is riches. Complaint is poverty.\"},{\"author\":\"Doris Mortman\",\"text\":\"Until you make peace with who you are, you will never be content with what you have.\"},{\"author\":\"Doris Mortman\",\"text\":\"Until you make peace with who you are, you'll never be content with what you have.\"},{\"author\":\"Dorothy Thompson\",\"text\":\"Fear grows in darkness; if you think theres a bogeyman around, turn on the light.\"},{\"author\":\"Dorothy Thompson\",\"text\":\"Only when we are no longer afraid do we begin to live.\"},{\"author\":\"Doug Horton\",\"text\":\"Be your own hero, it's cheaper than a movie ticket.\"},{\"author\":\"Doug Larson\",\"text\":\"Wisdom is the reward you get for a lifetime of listening when you'd have preferred to talk.\"},{\"author\":\"Douglas Adams\",\"text\":\"Human beings, who are almost unique in having the ability to learn from the experience of others, are also remarkable for their apparent disinclination to do so.\"},{\"author\":\"Dr. David M. Burns\",\"text\":\"Aim for success, not perfection. Never give up your right to be wrong, because then you will lose the ability to learn new things and move forward with your life.\"},{\"author\":\"Dr. Seuss\",\"text\":\"Don't cry because it's over. Smile because it happened.\"},{\"author\":\"E. E. Cummings\",\"text\":\"It takes courage to grow up and become who you really are.\"},{\"author\":\"E. M. Forster\",\"text\":\"One must be fond of people and trust them if one is not to make a mess of life.\"},{\"author\":\"Eckhart Tolle\",\"text\":\"It is not uncommon for people to spend their whole life waiting to start living.\"},{\"author\":\"Eckhart Tolle\",\"text\":\"You cannot find yourself by going into the past. You can find yourself by coming into the present.\"},{\"author\":\"Eckhart Tolle\",\"text\":\"The past has no power to stop you from being present now. Only your grievance about the past can do that.\"},{\"author\":\"Eckhart Tolle\",\"text\":\"Whenever something negative happens to you, there is a deep lesson concealed within it.\"},{\"author\":\"Eckhart Tolle\",\"text\":\"You do not become good by trying to be good, but by finding the goodness that is already within you.\"},{\"author\":\"Eckhart Tolle\",\"text\":\"The greater part of human pain is unnecessary. It is self-created as long as the unobserved mind runs your life.\"},{\"author\":\"Ed Cunningham\",\"text\":\"Friends are those rare people who ask how we are and then wait to hear the answer.\"},{\"author\":\"Eddie Cantor\",\"text\":\"Slow down and enjoy life. It's not only the scenery you miss by going too fast you also miss the sense of where you are going and why.\"},{\"author\":\"Eddie Cantor\",\"text\":\"Slow down and enjoy life. It's not only the scenery you miss by going too fast - you also miss the sense of where you are going and why.\"},{\"author\":\"Eden Phillpotts\",\"text\":\"The universe is full of magical things, patiently waiting for our wits to grow sharper.\"},{\"author\":\"Edgar Allan Poe\",\"text\":\"Those who dream by day are cognizant of many things which escape those who dream only by night.\"},{\"author\":\"Edith Södergran\",\"source\":\"https://www.goodreads.com/quotes/11458\",\"tags\":\"creativity, fire, passion\",\"text\":\"The inner fire is the most important thing mankind possesses.\"},{\"author\":\"Edith Wharton\",\"text\":\"If only wed stop trying to be happy wed have a pretty good time.\"},{\"author\":\"Edmond Rostand\",\"text\":\"A man is not old as long as he is seeking something.\"},{\"author\":\"Edmund Burke\",\"text\":\"Nobody made a greater mistake than he who did nothing because he could do only a little.\"},{\"author\":\"Edna Millay\",\"text\":\"I am glad that I paid so little attention to good advice; had I abided by it I might have been saved from some of my most valuable mistakes.\"},{\"author\":\"Edward Ericson\",\"text\":\"The cosmos is neither moral or immoral; only people are. He who would move the world must first move himself.\"},{\"author\":\"Edward Gibbon\",\"text\":\"The winds and waves are always on the side of the ablest navigators.\"},{\"author\":\"Edward Young\",\"text\":\"On every thorn, delightful wisdom grows, In every rill a sweet instruction flows.\"},{\"author\":\"Edward de Bono\",\"text\":\"It is better to have enough ideas for some of them to be wrong, than to be always right by having no ideas at all.\"},{\"author\":\"Edwin Chapin\",\"text\":\"Every action of our lives touches on some chord that will vibrate in eternity.\"},{\"author\":\"Edwin Markham\",\"text\":\"We have committed the Golden Rule to memory; let us now commit it to life.\"},{\"author\":\"Eknath Easwaran\",\"text\":\"Through meditation and by giving full attention to one thing at a time, we can learn to direct attention where we choose.\"},{\"author\":\"Elbert Hubbard\",\"text\":\"There is no failure except in no longer trying.\"},{\"author\":\"Elbert Hubbard\",\"text\":\"To avoid criticism, do nothing, say nothing, be nothing.\"},{\"author\":\"Elbert Hubbard\",\"text\":\"A little more persistence, a little more effort, and what seemed hopeless failure may turn to glorious success.\"},{\"author\":\"Elbert Hubbard\",\"text\":\"A failure is a man who has blundered but is not capable of cashing in on the experience.\"},{\"author\":\"Elbert Hubbard\",\"text\":\"The final proof of greatness lies in being able to endure criticism without resentment.\"},{\"author\":\"Elbert Hubbard\",\"text\":\"The greatest mistake you can make in life is to be continually fearing you will make one.\"},{\"author\":\"Eleanor Roosevelt\",\"text\":\"No one can make you feel inferior without your consent.\"},{\"author\":\"Eleanor Roosevelt\",\"text\":\"Do one thing every day that scares you.\"},{\"author\":\"Eleanor Roosevelt\",\"text\":\"The future belongs to those who believe in the beauty of their dreams.\"},{\"author\":\"Eleanor Roosevelt\",\"text\":\"I think somehow we learn who we really are and then live with that decision.\"},{\"author\":\"Eleanor Roosevelt\",\"text\":\"Friendship with oneself is all important because without it one cannot be friends with anybody else in the world.\"},{\"author\":\"Eleanor Roosevelt\",\"text\":\"Remember always that you not only have the right to be an individual, you have an obligation to be one.\"},{\"author\":\"Eleanor Roosevelt\",\"text\":\"People grow through experience if they meet life honestly and courageously. This is how character is built.\"},{\"author\":\"Eleanor Roosevelt\",\"text\":\"It is not fair to ask of others what you are unwilling to do yourself.\"},{\"author\":\"Eleanor Roosevelt\",\"text\":\"You must do the things you think you cannot do.\"},{\"author\":\"Elisabeth Kubler-Ross\",\"text\":\"I believe that we are solely responsible for our choices, and we have to accept the consequences of every deed, word, and thought throughout our lifetime.\"},{\"author\":\"Elizabeth Arden\",\"text\":\"I'm not interested in age. People who tell me their age are silly. You're as old as you feel.\"},{\"author\":\"Elizabeth Browning\",\"text\":\"Light tomorrow with today!\"},{\"author\":\"Elizabeth Browning\",\"text\":\"Love doesn't make the world go round, love is what makes the ride worthwhile.\"},{\"author\":\"Elizabeth Browning\",\"text\":\"Whoso loves, believes the impossible.\"},{\"author\":\"Elizabeth Kenny\",\"text\":\"He who angers you conquers you.\"},{\"author\":\"Elizabeth Montagu\",\"text\":\"I endeavour to be wise when I cannot be merry, easy when I cannot be glad, content with what cannot be mended and patient when there is no redress.\"},{\"author\":\"Ella Fitzgerald\",\"text\":\"It isn't where you come from, it's where you're going that counts.\"},{\"author\":\"Ella Wilcox\",\"text\":\"The truest greatness lies in being kind, the truest wisdom in a happy mind.\"},{\"author\":\"Ella Williams\",\"text\":\"Bite off more than you can chew, then chew it.\"},{\"author\":\"Ellen Gilchrist\",\"text\":\"Don't ruin the present with the ruined past.\"},{\"author\":\"Ellen Parr\",\"text\":\"The cure for boredom is curiosity. There is no cure for curiosity.\"},{\"author\":\"English proverb\",\"text\":\"Take heed: you do not find what you do not seek.\"},{\"author\":\"Epictetus\",\"text\":\"Freedom is the right to live as we wish.\"},{\"author\":\"Epictetus\",\"text\":\"Difficulties are things that show a person what they are.\"},{\"author\":\"Epictetus\",\"text\":\"If you wish to be a writer, write.\"},{\"author\":\"Epictetus\",\"text\":\"Practice yourself, for heavens sake in little things, and then proceed to greater.\"},{\"author\":\"Epictetus\",\"text\":\"Make the best use of what is in your power, and take the rest as it happens.\"},{\"author\":\"Epictetus\",\"text\":\"Nature gave us one tongue and two ears so we could hear twice as much as we speak.\"},{\"author\":\"Epictetus\",\"text\":\"He is a wise man who does not grieve for the things which he has not, but rejoices for those which he has.\"},{\"author\":\"Epictetus\",\"text\":\"There is only one way to happiness and that is to cease worrying about things which are beyond the power of our will.\"},{\"author\":\"Epictetus\",\"text\":\"If you seek truth you will not seek victory by dishonourable means, and if you find truth you will become invincible.\"},{\"author\":\"Epictetus\",\"text\":\"When you are offended at any man's fault, turn to yourself and study your own failings. Then you will forget your anger.\"},{\"author\":\"Epictetus\",\"text\":\"Know, first, who you are, and then adorn yourself accordingly.\"},{\"author\":\"Epictetus\",\"text\":\"Men are disturbed not by things, but by the view which they take of them.\"},{\"author\":\"Epictetus\",\"text\":\"We have two ears and one mouth so that we can listen twice as much as we speak.\"},{\"author\":\"Epictetus\",\"text\":\"Not every difficult and dangerous thing is suitable for training, but only that which is conducive to success in achieving the object of our effort.\"},{\"author\":\"Epictetus\",\"text\":\"No man is free who is not master of himself.\"},{\"author\":\"Epictetus\",\"text\":\"It's not what happens to you, but how you react to it that matters.\"},{\"author\":\"Epictetus\",\"text\":\"The world turns aside to let any man pass who knows where he is going.\"},{\"author\":\"Epictetus\",\"text\":\"First say to yourself what you would be; and then do what you have to do.\"},{\"author\":\"Epictetus\",\"text\":\"Keep silence for the most part, and speak only when you must, and then briefly.\"},{\"author\":\"Epictetus\",\"text\":\"It is impossible for a man to learn what he thinks he already knows.\"},{\"author\":\"Epictetus\",\"text\":\"One that desires to excel should endeavour in those things that are in themselves most excellent.\"},{\"author\":\"Eriksson\",\"text\":\"The greatest barrier to success is the fear of failure.\"},{\"author\":\"Ernest Hemingway\",\"source\":\"https://www.goodreads.com/quotes/353013\",\"tags\":\"listen, learn, learning\",\"text\":\"I like to listen. I have learned a great deal from listening carefully. Most people never listen.\"},{\"author\":\"Ernest Hemingway\",\"source\":\"https://www.goodreads.com/quotes/392801\",\"tags\":\"action, motion, mistake\",\"text\":\"Never mistake motion for action.\"},{\"author\":\"Etty Hillesum\",\"text\":\"Sometimes the most important thing in a whole day is the rest we take between two deep breaths.\"},{\"author\":\"Euripides\",\"text\":\"The wisest men follow their own direction.\"},{\"author\":\"Everett Dirksen\",\"text\":\"I am a man of fixed and unbending principles, the first of which is to be flexible at all times.\"},{\"author\":\"Fannie Hamer\",\"text\":\"There is one thing you have got to learn about our movement. Three people are better than no people.\"},{\"author\":\"Felix Adler\",\"text\":\"The truth which has made us free will in the end make us glad also.\"},{\"author\":\"Flora Whittemore\",\"text\":\"The doors we open and close each day decide the lives we live.\"},{\"author\":\"Florence Nightingale\",\"source\":\"https://www.goodreads.com/quotes/161358\",\"tags\":\"excuse, excuses, success\",\"text\":\"I attribute my success to this: I never gave or took an excuse.\"},{\"author\":\"Forrest Church\",\"text\":\"Do what you can. Want what you have. Be who you are.\"},{\"author\":\"Forrest Gump\",\"source\":\"https://www.rottentomatoes.com/m/forrest_gump/quotes\",\"tags\":\"fictional, movie, life\",\"text\":\"My mama always said: life is like a box of chocolate, you never know what you gonna get.\"},{\"author\":\"Fran Watson\",\"text\":\"As we risk ourselves, we grow. Each new experience is a risk.\"},{\"author\":\"Frances de Sales\",\"text\":\"Nothing is so strong as gentleness. Nothing is so gentle as real strength.\"},{\"author\":\"Francis Bacon\",\"text\":\"A prudent question is one half of wisdom.\"},{\"author\":\"Francis Bacon\",\"text\":\"A wise man will make more opportunities than he finds.\"},{\"author\":\"Francois de La Rochefoucauld\",\"text\":\"A true friend is the most precious of all possessions and the one we take the least thought about acquiring.\"},{\"author\":\"Francoise de Motteville\",\"text\":\"The true way to render ourselves happy is to love our work and find in it our pleasure.\"},{\"author\":\"Frank Crane\",\"text\":\"You may be deceived if you trust too much, but you will live in torment if you don't trust enough.\"},{\"author\":\"Frank Herbert\",\"text\":\"The beginning of knowledge is the discovery of something we do not understand.\"},{\"author\":\"Frank Tyger\",\"text\":\"Your future depends on many things, but mostly on you.\"},{\"author\":\"Frank Tyger\",\"text\":\"Learn to listen. Opportunity could be knocking at your door very softly.\"},{\"author\":\"Frank Tyger\",\"text\":\"Be a good listener. Your ears will never get you in trouble.\"},{\"author\":\"Frank Wright\",\"text\":\"The thing always happens that you really believe in; and the belief in a thing makes it happen.\"},{\"author\":\"Frank Wright\",\"text\":\"Respect should be earned by actions, and not acquired by years.\"},{\"author\":\"Franklin D. Roosevelt\",\"text\":\"It is common sense to take a method and try it. If it fails, admit it frankly and try another. But above all, try something.\"},{\"author\":\"Franklin Roosevelt\",\"text\":\"The only limit to our realization of tomorrow will be our doubts of today.\"},{\"author\":\"Franklin Roosevelt\",\"text\":\"Happiness is not in the mere possession of money; it lies in the joy of achievement, in the thrill of creative effort.\"},{\"author\":\"Franklin Roosevelt\",\"text\":\"When you come to the end of your rope, tie a knot and hang on.\"},{\"author\":\"Franz Liszt\",\"text\":\"Beware of missing chances; otherwise it may be altogether too late some day.\"},{\"author\":\"Frederick Douglass\",\"text\":\"If there is no struggle, there is no progress.\"},{\"author\":\"Frederick Douglass\",\"text\":\"I prefer to be true to myself, even at the hazard of incurring the ridicule of others, rather than to be false, and to incur my own abhorrence.\"},{\"author\":\"Frederick Wilcox\",\"text\":\"Progress always involves risks. You can't steal second base and keep your foot on first.\"},{\"author\":\"Friedrich von Schiller\",\"text\":\"Keep true to the dreams of thy youth.\"},{\"author\":\"Friedrich von Schiller\",\"text\":\"If you want to study yourself look into the hearts of other people. If you want to study other people look into your own heart.\"},{\"author\":\"Friedrich von Schiller\",\"text\":\"If you want to study yourself, look into the hearts of other people. If you want to study other people, look into your own heart.\"},{\"author\":\"G. K. Chesterton\",\"text\":\"I would maintain that thanks are the highest form of thought, and that gratitude is happiness doubled by wonder.\"},{\"author\":\"G. K. Chesterton\",\"text\":\"I do not believe in a fate that falls on men however they act; but I do believe in a fate that falls on man unless they act.\"},{\"author\":\"Gail Sheehy\",\"text\":\"To be tested is good. The challenged life may be the best therapist.\"},{\"author\":\"Galileo Galilei\",\"text\":\"All truths are easy to understand once they are discovered; the point is to discover them.\"},{\"author\":\"General Douglas MacArthur\",\"text\":\"It is fatal to enter any war without the will to win it.\"},{\"author\":\"Geoffrey F. Abert\",\"text\":\"Prosperity depends more on wanting what you have than having what you want.\"},{\"author\":\"Georg Lichtenberg\",\"text\":\"Everyone is a genius at least once a year. A real genius has his original ideas closer together.\"},{\"author\":\"Georg Lichtenberg\",\"text\":\"I cannot say whether things will get better if we change; what I can say is they must change if they are to get better.\"},{\"author\":\"George Allen\",\"text\":\"People of mediocre ability sometimes achieve outstanding success because they don't know when to quit. Most men succeed because they are determined to.\"},{\"author\":\"George Bernard Shaw\",\"text\":\"A life spent making mistakes is not only more honourable, but more useful than a life spent doing nothing.\"},{\"author\":\"George Bernard Shaw\",\"text\":\"The possibilities are numerous once we decide to act and not react.\"},{\"author\":\"George Eliot\",\"text\":\"It is never too late to be what you might have been.\"},{\"author\":\"George Eliot\",\"text\":\"What do we live for, if it is not to make life less difficult for each other?\"},{\"author\":\"George Matthew Adams\",\"text\":\"Each day can be one of triumph if you keep up your interests.\"},{\"author\":\"George Orwell\",\"text\":\"Myths which are believed in tend to become true.\"},{\"author\":\"George Patton\",\"text\":\"If a man does his best, what else is there?\"},{\"author\":\"George Patton\",\"text\":\"Accept challenges, so that you may feel the exhilaration of victory.\"},{\"author\":\"George Sand\",\"text\":\"There is only one happiness in life, to love and be loved.\"},{\"author\":\"George Santayan\",\"text\":\"Those who cannot learn from history are doomed to repeat it.\"},{\"author\":\"George Shaw\",\"text\":\"My reputation grows with every failure.\"},{\"author\":\"George Shaw\",\"text\":\"The reasonable man adapts himself to the world; the unreasonable man persists in trying to adapt the world to himself. Therefore, all progress depends on the unreasonable man.\"},{\"author\":\"George Sheehan\",\"text\":\"Success means having the courage, the determination, and the will to become the person you believe you were meant to be.\"},{\"author\":\"German proverb\",\"text\":\"Silence is a fence around wisdom.\"},{\"author\":\"German proverb\",\"text\":\"Begin to weave and God will give you the thread.\"},{\"author\":\"Gloria Steinem\",\"text\":\"If the shoe doesn't fit, must we change the foot?\"},{\"author\":\"Gloria Steinem\",\"text\":\"Without leaps of imagination, or dreaming, we lose the excitement of possibilities. Dreaming, after all, is a form of planning.\"},{\"author\":\"Goethe\",\"text\":\"A man sees in the world what he carries in his heart.\"},{\"author\":\"Goethe\",\"text\":\"What is not started today is never finished tomorrow.\"},{\"author\":\"Goethe\",\"text\":\"Just trust yourself, then you will know how to live.\"},{\"author\":\"Goethe\",\"source\":\"https://www.goodreads.com/quotes/6774650\",\"tags\":\"time, effectiveness\",\"text\":\"If I know how you spend your time, then I know what might become of you.\"},{\"author\":\"Gordon Hinckley\",\"text\":\"Our kindness may be the most persuasive argument for that which we believe.\"},{\"author\":\"Gordon Hinckley\",\"text\":\"Our lives are the only meaningful expression of what we believe and in Whom we believe. And the only real wealth, for any of us, lies in our faith.\"},{\"author\":\"Grandma Moses\",\"text\":\"Life is what you make of it. Always has been, always will be.\"},{\"author\":\"Gustave Flaubert\",\"text\":\"Reality does not conform to the ideal, but confirms it.\"},{\"author\":\"H. Bertram Lewis\",\"text\":\"The happy and efficient people in this world are those who accept trouble as a normal detail of human life and resolve to capitalize it when it comes along.\"},{\"author\":\"H. Jackson Browne\",\"text\":\"Don't be afraid to go out on a limb. That's where the fruit is.\"},{\"author\":\"H. W. Arnold\",\"text\":\"The worst bankrupt in the world is the person who has lost his enthusiasm.\"},{\"author\":\"Haddon Robinson\",\"text\":\"What worries you masters you.\"},{\"author\":\"Hannah Arendt\",\"text\":\"Promises are the uniquely human way of ordering the future, making it predictable and reliable to the extent that this is humanly possible.\"},{\"author\":\"Hannah More\",\"text\":\"It is not so important to know everything as to appreciate what we learn.\"},{\"author\":\"Hannah More\",\"text\":\"Obstacles are those things you see when you take your eyes off the goal.\"},{\"author\":\"Hannah Senesh\",\"text\":\"One needs something to believe in, something for which one can have whole-hearted enthusiasm. One needs to feel that ones life has meaning, that one is needed in this world.\"},{\"author\":\"Harold Nicolson\",\"text\":\"We are all inclined to judge ourselves by our ideals; others, by their acts.\"},{\"author\":\"Harriet Beecher Stowe\",\"text\":\"All serious daring starts from within.\"},{\"author\":\"Harriet Lerner\",\"text\":\"Only through our connectedness to others can we really know and enhance the self. And only through working on the self can we begin to enhance our connectedness to others.\"},{\"author\":\"Harriet Tubman\",\"text\":\"Every great dream begins with a dreamer. Always remember, you have within you the strength, the patience, and the passion to reach for the stars to change the world.\"},{\"author\":\"Harriet Woods\",\"text\":\"You can stand tall without standing on someone. You can be a victor without having victims.\"},{\"author\":\"Harry Banks\",\"text\":\"For success, attitude is equally as important as ability.\"},{\"author\":\"Harry Burchell Mathews\",\"text\":\"Translation is the paradigm, the exemplar of all writing. It is translation that demonstrates most vividly the yearning for transformation that underlies every act involving speech, that supremely human gift.\"},{\"author\":\"Harry Kemp\",\"text\":\"The poor man is not he who is without a cent, but he who is without a dream.\"},{\"author\":\"Hasidic saying\",\"text\":\"Everyone should carefully observe which way his heart draws him, and then choose that way with all his strength.\"},{\"author\":\"Hausa\",\"text\":\"Give thanks for a little and you will find a lot.\"},{\"author\":\"Havelock Ellis\",\"text\":\"It is on our failures that we base a new and different and better success.\"},{\"author\":\"Haynes Bayly\",\"text\":\"Absence makes the heart grow fonder.\"},{\"author\":\"Helen Keller\",\"text\":\"Keep yourself to the sunshine and you cannot see the shadow.\"},{\"author\":\"Helen Keller\",\"text\":\"Never bend your head. Always hold it high. Look the world right in the eye.\"},{\"author\":\"Helen Keller\",\"text\":\"The most beautiful things in the world cannot be seen or even touched. They must be felt with the heart.\"},{\"author\":\"Helen Keller\",\"text\":\"We could never learn to be brave and patient if there were only joy in the world.\"},{\"author\":\"Helen Keller\",\"text\":\"Face your deficiencies and acknowledge them; but do not let them master you. Let them teach you patience, sweetness, insight.\"},{\"author\":\"Helen Keller\",\"text\":\"No pessimist ever discovered the secrets of the stars, or sailed to an uncharted land, or opened a new heaven to the human spirit.\"},{\"author\":\"Helen Keller\",\"text\":\"Character cannot be developed in ease and quiet. Only through experience of trial and suffering can the soul be strengthened, vision cleared, ambition inspired, and success achieved.\"},{\"author\":\"Helen Keller\",\"text\":\"The best and most beautiful things in the world cannot be seen, nor touched... but are felt in the heart.\"},{\"author\":\"Helen Keller\",\"text\":\"When one door of happiness closes, another opens; but often we look so long at the closed door that we do not see the one which has been opened for us.\"},{\"author\":\"Henri Amiel\",\"text\":\"Almost everything comes from nothing.\"},{\"author\":\"Henri Bergson\",\"text\":\"To exist is to change, to change is to mature, to mature is to go on creating oneself endlessly.\"},{\"author\":\"Henri Bergson\",\"text\":\"The eye sees only what the mind is prepared to comprehend.\"},{\"author\":\"Henri L. Bergson\",\"text\":\"Think like a man of action; act like a man of thought.\"},{\"author\":\"Henri Matisse\",\"source\":\"https://www.goodreads.com/quotes/21433\",\"tags\":\"creativity, courage\",\"text\":\"Creativity takes courage.\"},{\"author\":\"Henri-Frederic Amiel\",\"text\":\"So long as a person is capable of self-renewal they are a living being.\"},{\"author\":\"Henri-Frederic Amiel\",\"text\":\"Work while you have the light. You are responsible for the talent that has been entrusted to you.\"},{\"author\":\"Henry Beecher\",\"text\":\"Gratitude is the fairest blossom which springs from the soul.\"},{\"author\":\"Henry David Thoreau\",\"text\":\"I cannot make my days longer so I strive to make them better.\"},{\"author\":\"Henry David Thoreau\",\"text\":\"If one advances confidently in the direction of his dream, and endeavours to live the life which he had imagines, he will meet with a success unexpected in common hours.\"},{\"author\":\"Henry David Thoreau\",\"source\":\"https://www.brainyquote.com/quotes/henry_david_thoreau_106427\",\"tags\":\"price, priorities, life\",\"text\":\"The price of anything is the amount of life you exchange for it.\"},{\"author\":\"Henry Ford\",\"text\":\"If you think you can, you can. And if you think you can't, you're right.\"},{\"author\":\"Henry Ford\",\"text\":\"Quality means doing it right when no one is looking.\"},{\"author\":\"Henry Ford\",\"text\":\"Obstacles are those frightful things you see when you take your eyes off your goal.\"},{\"author\":\"Henry J. Kaiser\",\"text\":\"Trouble is only opportunity in work clothes.\"},{\"author\":\"Henry James\",\"text\":\"Three things in human life are important. The first is to be kind. The second is to be kind. The third is to be kind.\"},{\"author\":\"Henry Longfellow\",\"text\":\"He that respects himself is safe from others; he wears a coat of mail that none can pierce.\"},{\"author\":\"Henry Longfellow\",\"text\":\"Perseverance is a great element of success. If you only knock long enough and loud enough at the gate, you are sure to wake up somebody.\"},{\"author\":\"Henry Miller\",\"text\":\"The moment one gives close attention to anything, even a blade of grass, it becomes a mysterious, awesome, indescribably magnificent world in itself.\"},{\"author\":\"Henry Miller\",\"text\":\"The moment one gives close attention to anything, it becomes a mysterious, awesome, indescribably magnificent world in itself.\"},{\"author\":\"Henry Moore\",\"text\":\"There is no retirement for an artist, it's your way of living so there is no end to it.\"},{\"author\":\"Henry Reed\",\"text\":\"Intuition is the very force or activity of the soul in its experience through whatever has been the experience of the soul itself.\"},{\"author\":\"Henry Thoreau\",\"text\":\"The only way to tell the truth is to speak with kindness. Only the words of a loving man can be heard.\"},{\"author\":\"Henry Thoreau\",\"text\":\"Things do not change, we change.\"},{\"author\":\"Henry Thoreau\",\"text\":\"The world is but a canvas to the imagination.\"},{\"author\":\"Henry Thoreau\",\"text\":\"Things do not change; we change.\"},{\"author\":\"Henry Van Dyke\",\"text\":\"Be glad of life because it gives you the chance to love, to work, to play, and to look up at the stars.\"},{\"author\":\"Henry Ward Beecher\",\"text\":\"Every artist dips his brush in his own soul, and paints his own nature into his pictures.\"},{\"author\":\"Heraclitus\",\"text\":\"All is flux; nothing stays still.\"},{\"author\":\"Heraclitus\",\"text\":\"You cannot step twice into the same river, for other waters are continually flowing in.\"},{\"author\":\"Herbert Swope\",\"text\":\"I cannot give you the formula for success, but I can give you the formula for failure: which is: Try to please everybody.\"},{\"author\":\"Hermann Hesse\",\"text\":\"If I know what love is, it is because of you.\"},{\"author\":\"Holmes\",\"text\":\"Fame usually comes to those who are thinking about something else.\"},{\"author\":\"Honore de Balzac\",\"text\":\"When you doubt your power, you give power to your doubt.\"},{\"author\":\"Honore de Balzac\",\"text\":\"The smallest flower is a thought, a life answering to some feature of the Great Whole, of whom they have a persistent intuition.\"},{\"author\":\"Horace\",\"text\":\"Adversity has the effect of eliciting talents, which in prosperous circumstances would have lain dormant.\"},{\"author\":\"Horace\",\"text\":\"Begin, be bold, and venture to be wise.\"},{\"author\":\"Horace Friess\",\"text\":\"All seasons are beautiful for the person who carries happiness within.\"},{\"author\":\"Hugh Miller\",\"text\":\"Problems are only opportunities with thorns on them.\"},{\"author\":\"Immanuel Kant\",\"text\":\"Science is organized knowledge. Wisdom is organized life.\"},{\"author\":\"Immanuel Kant\",\"text\":\"All our knowledge begins with the senses, proceeds then to the understanding, and ends with reason. There is nothing higher than reason.\"},{\"author\":\"Indira Gandhi\",\"text\":\"You can't shake hands with a clenched fist.\"},{\"author\":\"Ingrid Bergman\",\"text\":\"You must train your intuition you must trust the small voice inside you which tells you exactly what to say, what to decide.\"},{\"author\":\"Ingrid Bergman\",\"text\":\"You must train your intuition, you must trust the small voice inside you which tells you exactly what to say, what to decide.\"},{\"author\":\"Iris Murdoch\",\"text\":\"We can only learn to love by loving.\"},{\"author\":\"Isaac Asimov\",\"text\":\"A subtle thought that is in error may yet give rise to fruitful inquiry that can establish truths of great value.\"},{\"author\":\"Isocrates\",\"text\":\"The noblest worship is to make yourself as good and as just as you can.\"},{\"author\":\"Ivy Baker Priest\",\"text\":\"The world is round and the place which may seem like the end may also be the beginning.\"},{\"author\":\"J. Willard Marriott\",\"text\":\"Good timber does not grow with ease; the stronger the wind, the stronger the trees.\"},{\"author\":\"J.K. Rowling\",\"source\":\"https://www.goodreads.com/quotes/396385\",\"tags\":\"future, adversity, failure, life, foundation\",\"text\":\"Rock bottom became the solid foundation on which I rebuilt my life.\"},{\"author\":\"Jack Buck\",\"text\":\"Things turn out best for those who make the best of the way things turn out.\"},{\"author\":\"Jack Canfield\",\"source\":\"https://www.goodreads.com/quotes/495741\",\"tags\":\"overcome, action, try, persevere\",\"text\":\"Everything you want is on the other side of fear.\"},{\"author\":\"Jack Dixon\",\"text\":\"If you focus on results, you will never change. If you focus on change, you will get results.\"},{\"author\":\"Jacob Braude\",\"text\":\"Consider how hard it is to change yourself and you'll understand what little chance you have in trying to change others.\"},{\"author\":\"James Barrie\",\"text\":\"We never understand how little we need in this world until we know the loss of it.\"},{\"author\":\"James Faust\",\"text\":\"If you take each challenge one step at a time, with faith in every footstep, your strength and understanding will increase.\"},{\"author\":\"James Freeman Clarke\",\"text\":\"We are either progressing or retrograding all the while. There is no such thing as remaining stationary in this life.\"},{\"author\":\"James Lowell\",\"text\":\"A weed is no more than a flower in disguise.\"},{\"author\":\"James Openheim\",\"text\":\"The foolish man seeks happiness in the distance; the wise grows it under his feet.\"},{\"author\":\"James Oppenheim\",\"text\":\"The foolish man seeks happiness in the distance, the wise grows it under his feet.\"},{\"author\":\"James Pence\",\"text\":\"Success is determined by those whom prove the impossible, possible.\"},{\"author\":\"James Yorke\",\"text\":\"The most successful people are those who are good at plan B.\"},{\"author\":\"Jamie Paolinetti\",\"text\":\"Limitations live only in our minds. But if we use our imaginations, our possibilities become limitless.\"},{\"author\":\"Jane Addams\",\"text\":\"Our doubts are traitors and make us lose the good we often might win, by fearing to attempt.\"},{\"author\":\"Jane Addams\",\"text\":\"Nothing could be worse than the fear that one had given up too soon, and left one unexpended effort that might have saved the world.\"},{\"author\":\"Jane Roberts\",\"text\":\"By accepting yourself and being fully what you are, your presence can make others happy.\"},{\"author\":\"Janis Joplin\",\"text\":\"Don't compromise yourself. You are all you've got.\"},{\"author\":\"Japanese proverb\",\"text\":\"The day you decide to do it is your lucky day.\"},{\"author\":\"Japanese proverb\",\"text\":\"Vision without action is a daydream. Action without vision is a nightmare.\"},{\"author\":\"Jason Fried\",\"text\":\"No is easier to do. Yes is easier to say.\"},{\"author\":\"Jawaharlal Nehru\",\"text\":\"A leader or a man of action in a crisis almost always acts subconsciously and then thinks of the reasons for his action.\"},{\"author\":\"Jean Lacordaire\",\"text\":\"We are the leaves of one branch, the drops of one sea, the flowers of one garden.\"},{\"author\":\"Jean Lacordaire\",\"text\":\"Neither genius, fame, nor love show the greatness of the soul. Only kindness can do that.\"},{\"author\":\"Jean de la Bruyere\",\"source\":\"https://www.brainyquote.com/quotes/jean_de_la_bruyere_104446\",\"tags\":\"time, complain\",\"text\":\"Those who make the worse use of their time are the first to complain of its shortness\"},{\"author\":\"Jean de la Fontaine\",\"text\":\"Sadness flies away on the wings of time.\"},{\"author\":\"Jean-Paul Sartre\",\"text\":\"Man is not sum of what he has already, but rather the sum of what he does not yet have, of what he could have.\"},{\"author\":\"Jean-Paul Sartre\",\"text\":\"Freedom is what you do with what's been done to you.\"},{\"author\":\"Jessamyn West\",\"text\":\"It is very easy to forgive others their mistakes; it takes more grit to forgive them for having witnessed your own.\"},{\"author\":\"Jim Beggs\",\"text\":\"Before you put on a frown, make absolutely sure there are no smiles available.\"},{\"author\":\"Jim Bishop\",\"text\":\"The future is an opaque mirror. Anyone who tries to look into it sees nothing but the dim outlines of an old and worried face.\"},{\"author\":\"Jim Rohn\",\"text\":\"Either you run the day or the day runs you.\"},{\"author\":\"Jim Rohn\",\"text\":\"Give whatever you are doing and whoever you are with the gift of your attention.\"},{\"author\":\"Jim Rohn\",\"text\":\"The more you care, the stronger you can be.\"},{\"author\":\"Jim Rohn\",\"text\":\"If you don't design your own life plan, chances are you'll fall into someone else's plan. And guess what they have planned for you? Not much.\"},{\"author\":\"Jimmy Dean\",\"text\":\"I can't change the direction of the wind, but I can adjust my sails to always reach my destination.\"},{\"author\":\"Joan Didion\",\"text\":\"To free us from the expectations of others, to give us back to ourselves there lies the great, singular power of self-respect.\"},{\"author\":\"Joan Didion\",\"text\":\"To free us from the expectations of others, to give us back to ourselves - there lies the great, singular power of self-respect.\"},{\"author\":\"Joe Namath\",\"text\":\"If you aren't going all the way, why go at all?\"},{\"author\":\"Joe Paterno\",\"text\":\"Believe deep down in your heart that you're destined to do great things.\"},{\"author\":\"Johann Wolfgang von Goethe\",\"text\":\"Difficulties increase the nearer we get to the goal.\"},{\"author\":\"Johann Wolfgang von Goethe\",\"text\":\"Great talent finds happiness in execution.\"},{\"author\":\"Johann Wolfgang von Goethe\",\"text\":\"Character develops itself in the stream of life.\"},{\"author\":\"Johann Wolfgang von Goethe\",\"text\":\"A really great talent finds its happiness in execution.\"},{\"author\":\"Johann Wolfgang von Goethe\",\"text\":\"Mountains cannot be surmounted except by winding paths.\"},{\"author\":\"Johann Wolfgang von Goethe\",\"text\":\"Knowing is not enough; we must apply!\"},{\"author\":\"Johann Wolfgang von Goethe\",\"text\":\"In the end we retain from our studies only that which we practically apply.\"},{\"author\":\"Johann Wolfgang von Goethe\",\"text\":\"The person born with a talent they are meant to use will find their greatest happiness in using it.\"},{\"author\":\"Johann Wolfgang von Goethe\",\"text\":\"People are so constituted that everybody would rather undertake what they see others do, whether they have an aptitude for it or not.\"},{\"author\":\"Johann Wolfgang von Goethe\",\"text\":\"If you must tell me your opinions, tell me what you believe in. I have plenty of douts of my own.\"},{\"author\":\"Johann Wolfgang von Goethe\",\"text\":\"Treat people as if they were what they ought to be and you help them to become what they are capable of being.\"},{\"author\":\"Johann Wolfgang von Goethe\",\"text\":\"Correction does much, but encouragement does more.\"},{\"author\":\"Johann Wolfgang von Goethe\",\"text\":\"Kindness is the golden chain by which society is bound together.\"},{\"author\":\"Johann Wolfgang von Goethe\",\"text\":\"Wherever a man may happen to turn, whatever a man may undertake, he will always end up by returning to the path which nature has marked out for him.\"},{\"author\":\"Johann Wolfgang von Goethe\",\"text\":\"The really unhappy person is the one who leaves undone what they can do, and starts doing what they don't understand; no wonder they come to grief.\"},{\"author\":\"Johann Wolfgang von Goethe\",\"text\":\"Sometimes our fate resembles a fruit tree in winter. Who would think that those branches would turn green again and blossom, but we hope it, we know it.\"},{\"author\":\"Johannes Gaertner\",\"text\":\"To speak gratitude is courteous and pleasant, to enact gratitude is generous and noble, but to live gratitude is to touch Heaven.\"},{\"author\":\"John Acosta\",\"text\":\"You cannot have what you do not want.\"},{\"author\":\"John Adams\",\"text\":\"Patience and perseverance have a magical effect before which difficulties disappear and obstacles vanish.\"},{\"author\":\"John Astin\",\"text\":\"There are things so deep and complex that only intuition can reach it in our stage of development as human beings.\"},{\"author\":\"John Barrymore\",\"text\":\"Happiness often sneaks in through a door you didn't know you left open.\"},{\"author\":\"John Berry\",\"text\":\"The bird of paradise alights only upon the hand that does not grasp.\"},{\"author\":\"John Cleese\",\"source\":\"https://www.goodreads.com/quotes/548576\",\"tags\":\"urgent, important, trivial, thinking, \",\"text\":\"It's easier to do trivial things that are urgent than it is to do important things that are not, like thinking. And it's also easier to do little things we know we can do than to start on big things that we’re not so sure about.\"},{\"author\":\"John De Paola\",\"text\":\"Slow down and everything you are chasing will come around and catch you.\"},{\"author\":\"John Dewey\",\"text\":\"Without some goals and some efforts to reach it, no man can live.\"},{\"author\":\"John Dewey\",\"text\":\"Conflict is the gadfly of thought. It stirs us to observation and memory. It instigates to invention. It shocks us out of sheeplike passivity, and sets us at noting and contriving.\"},{\"author\":\"John Dewey\",\"text\":\"Arriving at one point is the starting point to another.\"},{\"author\":\"John Dewey\",\"text\":\"Every great advance in science has issued from a new audacity of the imagination.\"},{\"author\":\"John Dewey\",\"text\":\"The self is not something ready-made, but something in continuous formation through choice of action.\"},{\"author\":\"John Dryden\",\"text\":\"Fortune befriends the bold.\"},{\"author\":\"John Dryden\",\"text\":\"A thing well said will be wit in all languages.\"},{\"author\":\"John Eliot\",\"text\":\"All the great performers I have worked with are fuelled by a personal dream.\"},{\"author\":\"John F. Kennedy\",\"text\":\"As we express our gratitude, we must never forget that the highest appreciation is not to utter words, but to live by them.\"},{\"author\":\"John Holmes\",\"text\":\"Never tell a young person that anything cannot be done. God may have been waiting centuries for someone ignorant enough of the impossible to do that very thing.\"},{\"author\":\"John Junor\",\"text\":\"An ounce of emotion is equal to a ton of facts.\"},{\"author\":\"John Kennedy\",\"text\":\"Change is the law of life. And those who look only to the past or present are certain to miss the future.\"},{\"author\":\"John Kennedy\",\"text\":\"Let us resolve to be masters, not the victims, of our history, controlling our own destiny without giving way to blind suspicions and emotions.\"},{\"author\":\"John Lennon\",\"text\":\"Love is the flower you've got to let grow.\"},{\"author\":\"John Lennon\",\"text\":\"Reality leaves a lot to the imagination.\"},{\"author\":\"John Lennon\",\"text\":\"Time you enjoy wasting, was not wasted.\"},{\"author\":\"John Lennon\",\"text\":\"Yeah we all shine on, like the moon, and the stars, and the sun.\"},{\"author\":\"John Lennon\",\"text\":\"You may say I'm a dreamer, but I'm not the only one, I hope someday you will join us, and the world will live as one.\"},{\"author\":\"John Lennon\",\"text\":\"Life is what happens while you are making other plans.\"},{\"author\":\"John Lennon\",\"text\":\"Time you enjoyed wasting was not wasted.\"},{\"author\":\"John Lennon\",\"text\":\"Life is what happens to you while you're busy making other plans.\"},{\"author\":\"John Lennon\",\"text\":\"You may say Im a dreamer, but Im not the only one, I hope someday you will join us, and the world will live as one.\"},{\"author\":\"John Locke\",\"text\":\"I have always thought the actions of men the best interpreters of their thoughts.\"},{\"author\":\"John Lubbock\",\"text\":\"A day of worry is more exhausting than a day of work.\"},{\"author\":\"John Lubbock\",\"text\":\"What we see depends mainly on what we look for.\"},{\"author\":\"John Marshall\",\"text\":\"To listen well is as powerful a means of communication and influence as to talk well.\"},{\"author\":\"John Muir\",\"text\":\"When one tugs at a single thing in nature, he finds it attached to the rest of the world.\"},{\"author\":\"John Petit-Senn\",\"text\":\"Not what we have but what we enjoy constitutes our abundance.\"},{\"author\":\"John Pierrakos\",\"text\":\"Life is movement-we breathe, we eat, we walk, we move!\"},{\"author\":\"John Powell\",\"text\":\"The only real mistake is the one from which we learn nothing.\"},{\"author\":\"John Quincy Adams\",\"text\":\"If your actions inspire others to dream more, learn more, do more and become more, you are a leader.\"},{\"author\":\"John Ruskin\",\"text\":\"Quality is never an accident; it is always the result of intelligent effort.\"},{\"author\":\"John Ruskin\",\"text\":\"Sunshine is delicious, rain is refreshing, wind braces us up, snow is exhilarating; there is really no such thing as bad weather, only different kinds of good weather.\"},{\"author\":\"John Simone\",\"text\":\"If you're in a bad situation, don't worry it'll change. If you're in a good situation, don't worry it'll change.\"},{\"author\":\"John Steinbeck\",\"text\":\"If we could learn to like ourselves, even a little, maybe our cruelties and angers might melt away.\"},{\"author\":\"John Updike\",\"text\":\"Dreams come true. Without that possibility, nature would not incite us to have them.\"},{\"author\":\"John Wooden\",\"text\":\"Never mistake activity for achievement.\"},{\"author\":\"John Wooden\",\"text\":\"You can't let praise or criticism get to you. It's a weakness to get caught up in either one.\"},{\"author\":\"Jon Kabat-Zinn\",\"text\":\"You can't stop the waves, but you can learn to surf.\"},{\"author\":\"Jonas Salk\",\"text\":\"Intuition will tell the thinking mind where to look next.\"},{\"author\":\"Jonathan Kozol\",\"text\":\"Pick battles big enough to matter, small enough to win.\"},{\"author\":\"Jonathan Swift\",\"text\":\"Discovery consists of seeing what everybody has seen and thinking what nobody else has thought.\"},{\"author\":\"Joseph Campbell\",\"text\":\"When we quit thinking primarily about ourselves and our own self-preservation, we undergo a truly heroic transformation of consciousness.\"},{\"author\":\"Joseph Campbell\",\"text\":\"Your sacred space is where you can find yourself again and again.\"},{\"author\":\"Joseph Chilton Pearce\",\"source\":\"https://www.goodreads.com/quotes/30290\",\"tags\":\"creativity, life, fear\",\"text\":\"To live a creative life, we must lose our fear of being wrong.\"},{\"author\":\"Joseph Joubert\",\"text\":\"He who has imagination without learning has wings but no feet.\"},{\"author\":\"Joseph Roux\",\"text\":\"A fine quotation is a diamond on the finger of a man of wit, and a pebble in the hand of a fool.\"},{\"author\":\"Joseph Stalin\",\"text\":\"I believe in one thing only, the power of human will.\"},{\"author\":\"Joyce Brothers\",\"text\":\"Trust your hunches. They're usually based on facts filed away just below the conscious level.\"},{\"author\":\"Jules Poincare\",\"text\":\"It is through science that we prove, but through intuition that we discover.\"},{\"author\":\"Julie Morgenstern\",\"text\":\"Some people thrive on huge, dramatic change. Some people prefer the slow and steady route. Do what's right for you.\"},{\"author\":\"Julius Charles Hare\",\"text\":\"Be what you are. This is the first step toward becoming better than you are.\"},{\"author\":\"Kahlil Gibran\",\"text\":\"A little knowledge that acts is worth infinitely more than much knowledge that is idle.\"},{\"author\":\"Kahlil Gibran\",\"text\":\"To understand the heart and mind of a person, look not at what he has already achieved, but at what he aspires to do.\"},{\"author\":\"Kahlil Gibran\",\"text\":\"Beauty is not in the face; beauty is a light in the heart.\"},{\"author\":\"Kahlil Gibran\",\"text\":\"We choose our joys and sorrows long before we experience them.\"},{\"author\":\"Kahlil Gibran\",\"text\":\"Be like the flower, turn your face to the sun.\"},{\"author\":\"Karen Clark\",\"text\":\"Life is change. Growth is optional. Choose wisely.\"},{\"author\":\"Katherine Mansfield\",\"text\":\"Make it a rule of life never to regret and never to look back. Regret is an appalling waste of energy; you can't build on it; it's only for wallowing in.\"},{\"author\":\"Kathleen Norris\",\"text\":\"All that is necessary is to accept the impossible, do without the indispensable, and bear the intolerable.\"},{\"author\":\"Ken Robinson\",\"source\":\"https://www.ted.com/talks/sir_ken_robinson_do_schools_kill_creativity\",\"tags\":\"creative, creativity, original, originality, wrong, mistakes\",\"text\":\"If you're not prepared to be wrong, you'll never come up with anything original.\"},{\"author\":\"Ken S. Keyes\",\"text\":\"To be upset over what you don't have is to waste what you do have.\"},{\"author\":\"Kenji Miyazawa\",\"text\":\"We must embrace pain and burn it as fuel for our journey.\"},{\"author\":\"Kenneth Patton\",\"text\":\"We learn what we have said from those who listen to our speaking.\"},{\"author\":\"Keshavan Nair\",\"text\":\"With courage you will dare to take risks, have the strength to be compassionate, and the wisdom to be humble. Courage is the foundation of integrity.\"},{\"author\":\"Kin Hubbard\",\"text\":\"You won't skid if you stay in a rut.\"},{\"author\":\"Korean proverb\",\"text\":\"If you kick a stone in anger, you'll hurt your own foot.\"},{\"author\":\"Lama Yeshe\",\"text\":\"Be gentle first with yourself if you wish to be gentle with others.\"},{\"author\":\"Lama Yeshe\",\"text\":\"It is never too late. Even if you are going to die tomorrow, keep yourself straight and clear and be a happy human being today.\"},{\"author\":\"Lao Tzu\",\"text\":\"Be the chief but never the lord.\"},{\"author\":\"Lao Tzu\",\"text\":\"To lead people walk behind them.\"},{\"author\":\"Lao Tzu\",\"text\":\"Doing nothing is better than being busy doing nothing.\"},{\"author\":\"Lao Tzu\",\"text\":\"Anticipate the difficult by managing the easy.\"},{\"author\":\"Lao Tzu\",\"text\":\"He who talks more is sooner exhausted.\"},{\"author\":\"Lao Tzu\",\"text\":\"He who is contented is rich.\"},{\"author\":\"Lao Tzu\",\"text\":\"The journey of a thousand miles begins with one step.\"},{\"author\":\"Lao Tzu\",\"text\":\"An ant on the move does more than a dozing ox\"},{\"author\":\"Lao Tzu\",\"text\":\"If you correct your mind, the rest of your life will fall into place.\"},{\"author\":\"Lao Tzu\",\"text\":\"If you would take, you must first give, this is the beginning of intelligence.\"},{\"author\":\"Lao Tzu\",\"text\":\"The wise man does not lay up his own treasures. The more he gives to others, the more he has for his own.\"},{\"author\":\"Lao Tzu\",\"text\":\"Great indeed is the sublimity of the Creative, to which all beings owe their beginning and which permeates all heaven.\"},{\"author\":\"Lao Tzu\",\"text\":\"At the center of your being you have the answer; you know who you are and you know what you want.\"},{\"author\":\"Lao Tzu\",\"text\":\"When you are content to be simply yourself and don't compare or compete, everybody will respect you.\"},{\"author\":\"Lao Tzu\",\"text\":\"All difficult things have their origin in that which is easy, and great things in that which is small.\"},{\"author\":\"Lao Tzu\",\"text\":\"I have just three things to teach: simplicity, patience, compassion. These three are your greatest treasures.\"},{\"author\":\"Lao Tzu\",\"text\":\"When you realize there is nothing lacking, the whole world belongs to you.\"},{\"author\":\"Lao Tzu\",\"text\":\"By letting it go it all gets done. The world is won by those who let it go. But when you try and try. The world is beyond the winning.\"},{\"author\":\"Lao Tzu\",\"text\":\"He who conquers others is strong; He who conquers himself is mighty.\"},{\"author\":\"Lao Tzu\",\"text\":\"He who obtains has little. He who scatters has much.\"},{\"author\":\"Lao Tzu\",\"text\":\"Silence is a source of great strength.\"},{\"author\":\"Lao Tzu\",\"text\":\"If you do not change direction, you may end up where you are heading.\"},{\"author\":\"Lao Tzu\",\"text\":\"From wonder into wonder existence opens.\"},{\"author\":\"Lao Tzu\",\"text\":\"He who knows himself is enlightened.\"},{\"author\":\"Lao Tzu\",\"text\":\"Great acts are made up of small deeds.\"},{\"author\":\"Lao Tzu\",\"text\":\"Nothing is softer or more flexible than water, yet nothing can resist it.\"},{\"author\":\"Lao Tzu\",\"text\":\"When I let go of what I am, I become what I might be.\"},{\"author\":\"Lao Tzu\",\"text\":\"He who controls others may be powerful, but he who has mastered himself is mightier still.\"},{\"author\":\"Lao Tzu\",\"text\":\"To see things in the seed, that is genius.\"},{\"author\":\"Lao Tzu\",\"text\":\"The key to growth is the introduction of higher dimensions of consciousness into our awareness.\"},{\"author\":\"Lao Tzu\",\"text\":\"He who knows, does not speak. He who speaks, does not know.\"},{\"author\":\"Lao Tzu\",\"text\":\"Kindness in words creates confidence. Kindness in thinking creates profoundness. Kindness in giving creates love.\"},{\"author\":\"Lao Tzu\",\"text\":\"A leader is best when people barely know he exists, when his work is done, his aim fulfilled, they will say: we did it ourselves.\"},{\"author\":\"Lao Tzu\",\"text\":\"He who knows others is wise. He who knows himself is enlightened.\"},{\"author\":\"Lao Tzu\",\"text\":\"One who is too insistent on his own views, finds few to agree with him.\"},{\"author\":\"Lao Tzu\",\"text\":\"Give a man a fish and you feed him for a day. Teach him how to fish and you feed him for a lifetime.\"},{\"author\":\"Lao Tzu\",\"text\":\"He who knows that enough is enough will always have enough.\"},{\"author\":\"Lao Tzu\",\"text\":\"Music in the soul can be heard by the universe.\"},{\"author\":\"Lao-Tzu\",\"text\":\"All difficult things have their origin in that which is easy, and great things in that which is small.\"},{\"author\":\"Laozi\",\"text\":\"When you are content to be simply yourself and don't compare or compete, everybody will respect you.\"},{\"author\":\"Laozi\",\"text\":\"The power of intuitive understanding will protect you from harm until the end of your days.\"},{\"author\":\"Larry Elder\",\"text\":\"A goal without a plan is just a wish.\"},{\"author\":\"Laura Teresa Marquez\",\"text\":\"Arrogance and rudeness are training wheels on the bicycle of life for weak people who cannot keep their balance without them.\"},{\"author\":\"Lauren Bacall\",\"text\":\"Imagination is the highest kite one can fly.\"},{\"author\":\"Lauren Raffo\",\"text\":\"Sometimes the biggest act of courage is a small one.\"},{\"author\":\"Laurence J. Peter\",\"text\":\"There are two kinds of failures: those who thought and never did, and those who did and never thought.\"},{\"author\":\"Lawrence Peter\",\"text\":\"If you don't know where you are going, you will probably end up somewhere else.\"},{\"author\":\"Lazurus Long\",\"text\":\"Great is the art of beginning, but greater is the art of ending.\"},{\"author\":\"Lee Mildon\",\"text\":\"People seldom notice old clothes if you wear a big smile.\"},{\"author\":\"Lee Womack\",\"text\":\"I think you can have moderate success by copying something else, but if you really want to knock it out of the park, you have to do something different and take chances.\"},{\"author\":\"Lena Horne\",\"text\":\"Always be smarter than the people who hire you.\"},{\"author\":\"Leo Aikman\",\"text\":\"Blessed is the person who is too busy to worry in the daytime, and too sleepy to worry at night.\"},{\"author\":\"Leo Buscaglia\",\"text\":\"Never idealize others. They will never live up to your expectations.\"},{\"author\":\"Leo F. Buscaglia\",\"text\":\"Don't smother each other. No one can grow in the shade.\"},{\"author\":\"Leo Tolstoy\",\"text\":\"The two most powerful warriors are patience and time.\"},{\"author\":\"Leo Tolstoy\",\"text\":\"Everyone thinks of changing the world, but no one thinks of changing himself.\"},{\"author\":\"Leo Tolstoy\",\"text\":\"We lost because we told ourselves we lost.\"},{\"author\":\"Leon Blum\",\"text\":\"The free man is he who does not fear to go to the end of his thought.\"},{\"author\":\"Leonardo Ruiz\",\"text\":\"The only difference between your abilities and others is the ability to put yourself in their shoes and actually try.\"},{\"author\":\"Leonardo da Vinci\",\"text\":\"Who sows virtue reaps honour.\"},{\"author\":\"Leonardo da Vinci\",\"text\":\"All our knowledge has its origins in our perceptions.\"},{\"author\":\"Leonardo da Vinci\",\"text\":\"Nothing strengthens authority so much as silence.\"},{\"author\":\"Leonardo da Vinci\",\"text\":\"Iron rusts from disuse; water loses its purity from stagnation... even so does inaction sap the vigour of the mind.\"},{\"author\":\"Leonardo da Vinci\",\"text\":\"He who is fixed to a star does not change his mind.\"},{\"author\":\"Leonardo da Vinci\",\"text\":\"Time stays long enough for anyone who will use it.\"},{\"author\":\"Leonardo da Vinci\",\"text\":\"In rivers, the water that you touch is the last of what has passed and the first of that which comes; so with present time.\"},{\"author\":\"Leonardo da Vinci\",\"text\":\"I have been impressed with the urgency of doing. Knowing is not enough; we must apply. Being willing is not enough; we must do.\"},{\"author\":\"Les Brown\",\"text\":\"Shoot for the moon. Even if you miss, you'll land among the stars.\"},{\"author\":\"Lewis B. Smedes\",\"text\":\"To forgive is to set a prisoner free and realize that prisoner was you.\"},{\"author\":\"Lewis Cass\",\"text\":\"People may doubt what you say, but they will believe what you do.\"},{\"author\":\"Liberace\",\"text\":\"Nobody will believe in you unless you believe in yourself.\"},{\"author\":\"Lily Tomlin\",\"text\":\"I always wanted to be somebody, but I should have been more specific.\"},{\"author\":\"Lin-yutang\",\"text\":\"I have done my best: that is about all the philosophy of living one needs.\"},{\"author\":\"Linda Hogan\",\"text\":\"There is a way that nature speaks, that land speaks. Most of the time we are simply not patient enough, quiet enough, to pay attention to the story.\"},{\"author\":\"Lisa Alther\",\"text\":\"Thats the risk you take if you change: that people you've been involved with won't like the new you. But other people who do will come along.\"},{\"author\":\"Lloyd Jones\",\"text\":\"Those who try to do something and fail are infinitely better than those who try nothing and succeed.\"},{\"author\":\"Lord Herbert\",\"text\":\"The shortest answer is doing.\"},{\"author\":\"Lou Holtz\",\"text\":\"You were not born a winner, and you were not born a loser. You are what you make yourself be.\"},{\"author\":\"Lou Holtz\",\"text\":\"Ability is what you're capable of doing. Motivation determines what you do.Attitude determines how well you do it.\"},{\"author\":\"Lou Holtz\",\"text\":\"I can't believe that God put us on this earth to be ordinary.\"},{\"author\":\"Louis Pasteur\",\"source\":\"https://www.goodreads.com/quotes/9178\",\"tags\":\"creativity, prepared, preparedness\",\"text\":\"Chance favors the prepared mind.\"},{\"author\":\"Louis Pasteur\",\"text\":\"Let me tell you the secret that has led me to my goal: my strength lies solely in my tenacity.\"},{\"author\":\"Louisa Alcott\",\"text\":\"I'm not afraid of storms, for I'm learning how to sail my ship.\"},{\"author\":\"Louisa Alcott\",\"text\":\"I'm not afraid of storms, for Im learning how to sail my ship.\"},{\"author\":\"Louise Hay\",\"text\":\"The thoughts we choose to think are the tools we use to paint the canvas of our lives.\"},{\"author\":\"Lucille Ball\",\"text\":\"Id rather regret the things that I have done than the things that I have not done.\"},{\"author\":\"Lucille Ball\",\"text\":\"I have an everyday religion that works for me. Love yourself first, and everything else falls into line.\"},{\"author\":\"Luisa Sigea\",\"text\":\"Blaze with the fire that is never extinguished.\"},{\"author\":\"Lululemon\",\"text\":\"Your outlook on life is a direct reflection on how much you like yourself.\"},{\"author\":\"M. Scott Peck\",\"text\":\"Until you value yourself, you won't value your time. Until you value your time, you won't do anything with it.\"},{\"author\":\"Mabel Newcomber\",\"text\":\"It is more important to know where you are going than to get there quickly. Do not mistake activity for achievement.\"},{\"author\":\"Madame de Stael\",\"text\":\"Society develops wit, but its contemplation alone forms genius.\"},{\"author\":\"Madame de Stael\",\"text\":\"Wit lies in recognizing the resemblance among things which differ and the difference between things which are alike.\"},{\"author\":\"Mahatma Gandhi\",\"text\":\"We must become the change we want to see.\"},{\"author\":\"Mahatma Gandhi\",\"source\":\"https://www.goodreads.com/quotes/16418\",\"tags\":\"action, change, world, present, future, today\",\"text\":\"The future depends on what you do today.\"},{\"author\":\"Mahatma Gandhi\",\"text\":\"Live as if you were to die tomorrow. Learn as if you were to live forever.\"},{\"author\":\"Mahatma Gandhi\",\"text\":\"Strength does not come from physical capacity. It comes from an indomitable will.\"},{\"author\":\"Mahatma Gandhi\",\"text\":\"It is the quality of our work which will please God, not the quantity.\"},{\"author\":\"Mahatma Gandhi\",\"text\":\"Our greatness lies not so much in being able to remake the world as being able to remake ourselves.\"},{\"author\":\"Mahummad Ali\",\"text\":\"To be able to give away riches is mandatory if you wish to possess them. This is the only way that you will be truly rich.\"},{\"author\":\"Mal Pancoast\",\"text\":\"The odds of hitting your target go up dramatically when you aim at it.\"},{\"author\":\"Malcolm X\",\"source\":\"https://www.goodreads.com/quotes/788\",\"tags\":\"education, future, tomorrow, today\",\"text\":\"Education is our passport to the future, for tomorrow belongs to the people who prepare for it today.\"},{\"author\":\"Man Ray\",\"text\":\"It has never been my object to record my dreams, just to realize them.\"},{\"author\":\"Manuel Puig\",\"text\":\"I allow my intuition to lead my path.\"},{\"author\":\"Maori proverb\",\"text\":\"Turn your face toward the sun and the shadows will fall behind you.\"},{\"author\":\"Marcel Proust\",\"text\":\"Let us be grateful to people who make us happy; they are the charming gardeners who make our souls blossom.\"},{\"author\":\"Marcus Aurelius\",\"text\":\"Each day provides its own gifts.\"},{\"author\":\"Marcus Aurelius\",\"text\":\"Loss is nothing else but change,and change is Natures delight.\"},{\"author\":\"Marcus Aurelius\",\"text\":\"Everything that happens happens as it should, and if you observe carefully, you will find this to be so.\"},{\"author\":\"Marcus Aurelius\",\"text\":\"Very little is needed to make a happy life; it is all within yourself, in your way of thinking.\"},{\"author\":\"Marcus Aurelius\",\"text\":\"If it is not right do not do it; if it is not true do not say it.\"},{\"author\":\"Marcus Aurelius\",\"text\":\"You have power over your mind not outside events. Realize this, and you will find strength.\"},{\"author\":\"Marcus Aurelius\",\"text\":\"He who lives in harmony with himself lives in harmony with the universe.\"},{\"author\":\"Marcus Aurelius\",\"text\":\"The universe is transformation; our life is what our thoughts make it.\"},{\"author\":\"Marcus Aurelius\",\"text\":\"Look back over the past, with its changing empires that rose and fell, and you can foresee the future, too.\"},{\"author\":\"Marcus Aurelius\",\"text\":\"When you arise in the morning, think of what a precious privilege it is to be alive to breathe, to think, to enjoy, to love.\"},{\"author\":\"Marcus Aurelius\",\"text\":\"Accept the things to which fate binds you, and love the people with whom fate brings you together, but do so with all your heart.\"},{\"author\":\"Marcus Aurelius\",\"text\":\"Everything that exists is in a manner the seed of that which will be.\"},{\"author\":\"Marcus Aurelius\",\"text\":\"He who lives in harmony with himself lives in harmony with the world.\"},{\"author\":\"Marcus Aurelius\",\"text\":\"Waste no more time arguing about what a good man should be. Be one.\"},{\"author\":\"Marcus Aurelius\",\"text\":\"There is nothing happens to any person but what was in his power to go through with.\"},{\"author\":\"Marcus Aurelius\",\"text\":\"Everything we hear is an opinion, not a fact. Everything we see is a perspective, not the truth.\"},{\"author\":\"Marcus Aurelius\",\"text\":\"You have power over your mind, not outside events. Realize this, and you will find strength.\"},{\"author\":\"Marcus Aurelius\",\"text\":\"When you arise in the morning, think of what a precious privilege it is to be alive, to breathe, to think, to enjoy, to love.\"},{\"author\":\"Margaret Bonnano\",\"text\":\"It is only possible to live happily ever after on a day to day basis.\"},{\"author\":\"Margaret Cousins\",\"text\":\"Appreciation can make a day, even change a life. Your willingness to put it into words is all that is necessary.\"},{\"author\":\"Margaret Fuller\",\"text\":\"If you have knowledge, let others light their candles in it.\"},{\"author\":\"Margaret Laurence\",\"text\":\"Know that although in the eternal scheme of things you are small, you are also unique and irreplaceable, as are all your fellow humans everywhere in the world.\"},{\"author\":\"Margaret Mead\",\"text\":\"Never doubt that a small group of thoughtful, committed people can change the world. Indeed. It is the only thing that ever has.\"},{\"author\":\"Margaret Runbeck\",\"text\":\"Silences make the real conversations between friends. Not the saying but the never needing to say is what counts.\"},{\"author\":\"Margaret Sangster\",\"text\":\"Self-complacency is fatal to progress.\"},{\"author\":\"Margaret Smith\",\"text\":\"The right way is not always the popular and easy way. Standing for right when it is unpopular is a true test of moral character.\"},{\"author\":\"Margaret Wheatley\",\"text\":\"We know from science that nothing in the universe exists as an isolated or independent entity.\"},{\"author\":\"Marian Edelman\",\"text\":\"You're not obligated to win. You're obligated to keep trying to do the best you can every day.\"},{\"author\":\"Marian Edelman\",\"text\":\"You really can change the world if you care enough.\"},{\"author\":\"Marianne Williamson\",\"text\":\"Joy is what happens to us when we allow ourselves to recognize how good things really are.\"},{\"author\":\"Marie Curie\",\"text\":\"I never see what has been done; I only see what remains to be done.\"},{\"author\":\"Marie Curie\",\"text\":\"Nothing in life is to be feared. It is only to be understood.\"},{\"author\":\"Marie Curie\",\"text\":\"Nothing in life is to be feared, it is only to be understood. Now is the time to understand more, so that we may fear less.\"},{\"author\":\"Marie Curie\",\"text\":\"Be less curious about people and more curious about ideas.\"},{\"author\":\"Mark Twain\",\"text\":\"A thing long expected takes the form of the unexpected when at last it comes.\"},{\"author\":\"Mark Twain\",\"text\":\"Happiness is a Swedish sunset it is there for all, but most of us look the other way and lose it.\"},{\"author\":\"Mark Twain\",\"text\":\"Always tell the truth. That way, you don't have to remember what you said.\"},{\"author\":\"Mark Twain\",\"text\":\"When in doubt, tell the truth.\"},{\"author\":\"Mark Twain\",\"text\":\"Whoever is happy will make others happy, too.\"},{\"author\":\"Mark Twain\",\"text\":\"The exercise of an extraordinary gift is the supremest pleasure in life.\"},{\"author\":\"Mark Twain\",\"text\":\"Kindness is the language which the deaf can hear and the blind can see.\"},{\"author\":\"Mark Twain\",\"text\":\"There are basically two types of people. People who accomplish things, and people who claim to have accomplished things. The first group is less crowded.\"},{\"author\":\"Mark Twain\",\"text\":\"Wrinkles should merely indicate where smiles have been.\"},{\"author\":\"Mark Twain\",\"text\":\"To get the full value of joy you must have someone to divide it with.\"},{\"author\":\"Mark Twain\",\"text\":\"Happiness is a sunset - it is there for all, but most of us look the other way and lose it.\"},{\"author\":\"Marquis Vauvenargues\",\"text\":\"Wicked people are always surprised to find ability in those that are good.\"},{\"author\":\"Marsha Petrie Sue\",\"text\":\"Stay away from what might have been and look at what will be.\"},{\"author\":\"Martha Washington\",\"text\":\"The greatest part of our happiness depends on our dispositions, not our circumstances.\"},{\"author\":\"Martin Fischer\",\"text\":\"Knowledge is a process of piling up facts; wisdom lies in their simplification.\"},{\"author\":\"Martin Luther King, Jr.\",\"text\":\"Love is the only force capable of transforming an enemy into friend.\"},{\"author\":\"Mary Almanac\",\"text\":\"Who we are never changes. Who we think we are does.\"},{\"author\":\"Mary Bethune\",\"text\":\"Without faith, nothing is possible. With it, nothing is impossible.\"},{\"author\":\"Mary Kay Ash\",\"text\":\"Aerodynamically the bumblebee shouldn't be able to fly, but the bumblebee doesn't know that so it goes on flying anyway.\"},{\"author\":\"Mary Kay Ash\",\"text\":\"Those who are blessed with the most talent don't necessarily outperform everyone else. It's the people with follow-through who excel.\"},{\"author\":\"Mary Kay Ash\",\"text\":\"For every failure, there's an alternative course of action. You just have to find it. When you come to a roadblock, take a detour.\"},{\"author\":\"Mary Morrissey\",\"text\":\"You block your dream when you allow your fear to grow bigger than your faith.\"},{\"author\":\"Mary Parrish\",\"text\":\"Love vanquishes time. To lovers, a moment can be eternity, eternity can be the tick of a clock.\"},{\"author\":\"Mary Pickford\",\"text\":\"If you have made mistakes, there is always another chance for you. You may have a fresh start any moment you choose.\"},{\"author\":\"Mary Wollstonecraft\",\"text\":\"The beginning is always today.\"},{\"author\":\"Matt Zotti\",\"text\":\"Live through feeling and you will live through love. For feeling is the language of the soul, and feeling is truth.\"},{\"author\":\"Maureen Dowd\",\"text\":\"The minute you settle for less than you deserve, you get even less than you settled for.\"},{\"author\":\"Max Planck\",\"text\":\"It is not the possession of truth, but the success which attends the seeking after it, that enriches the seeker and brings happiness to him.\"},{\"author\":\"May Sarton\",\"text\":\"A garden is always a series of losses set against a few triumphs, like life itself.\"},{\"author\":\"Maya Angelou\",\"text\":\"I believe that every person is born with talent.\"},{\"author\":\"Maya Angelou\",\"text\":\"If you don't like something, change it. If you can't change it, change your attitude.\"},{\"author\":\"Maya Angelou\",\"text\":\"If one is lucky, a solitary fantasy can totally transform one million realities.\"},{\"author\":\"Maya Angelou\",\"text\":\"When you learn, teach. When you get, give.\"},{\"author\":\"Maya Angelou\",\"text\":\"All great achievements require time.\"},{\"author\":\"Maya Angelou\",\"text\":\"We may encounter many defeats but we must not be defeated.\"},{\"author\":\"Maya Angelou\",\"text\":\"Prejudice is a burden that confuses the past, threatens the future and renders the present inaccessible.\"},{\"author\":\"Maya Angelou\",\"text\":\"Nothing will work unless you do.\"},{\"author\":\"Maya Angelou\",\"source\":\"https://www.goodreads.com/quotes/153929\",\"tags\":\"curiosity, limitless\",\"text\":\"You can't use up creativity. The more you use, the more you have.\"},{\"author\":\"Maya Lin\",\"text\":\"To fly, we have to have resistance.\"},{\"author\":\"Melody Beattie\",\"text\":\"Gratitude makes sense of our past, brings peace for today, and creates a vision for tomorrow.\"},{\"author\":\"Michael Burke\",\"text\":\"Good instincts usually tell you what to do long before your head has figured it out.\"},{\"author\":\"Michael Jordan\",\"text\":\"If you accept the expectations of others, especially negative ones, then you never will change the outcome.\"},{\"author\":\"Michael Korda\",\"text\":\"To succeed, we must first believe that we can.\"},{\"author\":\"Michael Vance\",\"text\":\"Life is not measured by the breaths you take, but by its breathtaking moments.\"},{\"author\":\"Michel de Montaigne\",\"text\":\"I care not so much what I am to others as what I am to myself. I will be rich by myself, and not by borrowing.\"},{\"author\":\"Michelangelo\",\"text\":\"Faith in oneself is the best and safest course.\"},{\"author\":\"Michelangelo\",\"text\":\"There is no greater harm than that of time wasted.\"},{\"author\":\"Michelangelo\",\"text\":\"The greatest danger for most of us is not that our aim is too high and we miss it, but that it is too low and we reach it.\"},{\"author\":\"Michelangelo\",\"source\":\"https://www.brainyquote.com/quotes/michelangelo_183580\",\"tags\":\"time, waste\",\"text\":\"There is no greater harm than that of time wasted.\"},{\"author\":\"Mike Ditka\",\"text\":\"You're never a loser until you quit trying.\"},{\"author\":\"Mohandas Gandhi\",\"text\":\"Happiness is when what you think, what you say, and what you do are in harmony.\"},{\"author\":\"Mohandas Gandhi\",\"text\":\"The weak can never forgive. Forgiveness is the attribute of the strong.\"},{\"author\":\"Mohandas Gandhi\",\"text\":\"Freedom is not worth having if it does not connote freedom to err.\"},{\"author\":\"Mohandas Gandhi\",\"text\":\"Forgiveness is choosing to love. It is the first skill of self-giving love.\"},{\"author\":\"Mohandas Gandhi\",\"text\":\"The difference between what we do and what we are capable of doing would suffice to solve most of the worlds problems.\"},{\"author\":\"Mohandas Gandhi\",\"text\":\"Be the change that you want to see in the world.\"},{\"author\":\"Moliere\",\"text\":\"It is not only for what we do that we are held responsible, but also for what we do not do.\"},{\"author\":\"Moncure Conway\",\"text\":\"The best thing in every noble dream is the dreamer...\"},{\"author\":\"Morris West\",\"text\":\"If you spend your whole life waiting for the storm, you'll never enjoy the sunshine.\"},{\"author\":\"Mortimer Adler\",\"text\":\"The purpose of learning is growth, and our minds, unlike our bodies, can continue growing as we continue to live.\"},{\"author\":\"Mother Teresa\",\"text\":\"Every time you smile at someone, it is an action of love, a gift to that person, a beautiful thing.\"},{\"author\":\"Mother Teresa\",\"text\":\"Be faithful in small things because it is in them that your strength lies.\"},{\"author\":\"Mother Teresa\",\"text\":\"Let us always meet each other with smile, for the smile is the beginning of love.\"},{\"author\":\"Mother Teresa\",\"text\":\"We shall never know all the good that a simple smile can do.\"},{\"author\":\"Mother Teresa\",\"text\":\"If you can't feed a hundred people, then feed just one.\"},{\"author\":\"Mother Teresa\",\"text\":\"Peace begins with a smile.\"},{\"author\":\"Mother Teresa\",\"text\":\"Kind words can be short and easy to speak but their echoes are truly endless.\"},{\"author\":\"Mother Teresa\",\"text\":\"We can do no great things, only small things with great love.\"},{\"author\":\"Mother Teresa\",\"text\":\"Do not wait for leaders; do it alone, person to person.\"},{\"author\":\"Mother Teresa\",\"text\":\"Kind words can be short and easy to speak, but their echoes are truly endless.\"},{\"author\":\"Muriel Rukeyser\",\"text\":\"The universe is made of stories, not atoms.\"},{\"author\":\"Murray Gell-Mann\",\"text\":\"Think how hard physics would be if particles could think.\"},{\"author\":\"Naguib Mahfouz\",\"text\":\"You can tell whether a man is clever by his answers. You can tell whether a man is wise by his questions.\"},{\"author\":\"Naomi Williams\",\"text\":\"It is impossible to feel grateful and depressed in the same moment.\"},{\"author\":\"Napoleon Bonaparte\",\"text\":\"Victory belongs to the most persevering.\"},{\"author\":\"Napoleon Bonaparte\",\"text\":\"The truest wisdom is a resolute determination.\"},{\"author\":\"Napoleon Bonaparte\",\"text\":\"Imagination rules the world.\"},{\"author\":\"Napoleon Bonaparte\",\"text\":\"Take time to deliberate, but when the time for action has arrived, stop thinking and go in.\"},{\"author\":\"Napoleon Bonaparte\",\"text\":\"To do all that one is able to do, is to be a man; to do all that one would like to do, is to be a god.\"},{\"author\":\"Napoleon Bonaparte\",\"text\":\"He who fears being conquered is sure of defeat.\"},{\"author\":\"Napoleon Bonaparte\",\"text\":\"If you want a thing done well, do it yourself.\"},{\"author\":\"Napoleon Bonaparte\",\"text\":\"The best cure for the body is a quiet mind.\"},{\"author\":\"Napoleon Hill\",\"text\":\"Ideas are the beginning points of all fortunes.\"},{\"author\":\"Napoleon Hill\",\"text\":\"Don't wait. The time will never be just right.\"},{\"author\":\"Napoleon Hill\",\"text\":\"You give before you get.\"},{\"author\":\"Napoleon Hill\",\"text\":\"A goal is a dream with a deadline.\"},{\"author\":\"Napoleon Hill\",\"text\":\"You can do it if you believe you can!\"},{\"author\":\"Napoleon Hill\",\"text\":\"No alibi will save you from accepting the responsibility.\"},{\"author\":\"Napoleon Hill\",\"text\":\"Happiness is found in doing, not merely possessing.\"},{\"author\":\"Napoleon Hill\",\"text\":\"Fears are nothing more than a state of mind.\"},{\"author\":\"Napoleon Hill\",\"text\":\"Most great people have attained their greatest success just one step beyond their greatest failure.\"},{\"author\":\"Napoleon Hill\",\"text\":\"When your desires are strong enough you will appear to possess superhuman powers to achieve.\"},{\"author\":\"Napoleon Hill\",\"text\":\"No man can succeed in a line of endeavor which he does not like.\"},{\"author\":\"Napoleon Hill\",\"text\":\"If you cannot do great things, do small things in a great way.\"},{\"author\":\"Napoleon Hill\",\"text\":\"Cherish your visions and your dreams as they are the children of your soul, the blueprints of your ultimate achievements.\"},{\"author\":\"Napoleon Hill\",\"text\":\"Cherish your visions and your dreams as they are the children of your soul; the blueprints of your ultimate achievements.\"},{\"author\":\"Napoleon Hill\",\"text\":\"Edison failed 10,000 times before he made the electric light. Do not be discouraged if you fail a few times.\"},{\"author\":\"Napoleon Hill\",\"text\":\"Every adversity, every failure, every heartache carries with it the seed of an equal or greater benefit.\"},{\"author\":\"Napoleon Hill\",\"text\":\"All achievements, all earned riches, have their beginning in an idea.\"},{\"author\":\"Napoleon Hill\",\"text\":\"You might well remember that nothing can bring you success but yourself.\"},{\"author\":\"Napoleon Hill\",\"text\":\"Your big opportunity may be right where you are now.\"},{\"author\":\"Napoleon Hill\",\"text\":\"Opportunity often comes disguised in the form of misfortune, or temporary defeat.\"},{\"author\":\"Napoleon Hill\",\"text\":\"The ladder of success is never crowded at the top.\"},{\"author\":\"Napoleon Hill\",\"text\":\"The world has the habit of making room for the man whose actions show that he knows where he is going.\"},{\"author\":\"Napoleon Hill\",\"text\":\"First comes thought; then organization of that thought, into ideas and plans; then transformation of those plans into reality. The beginning, as you will observe, is in your imagination.\"},{\"author\":\"Napoleon Hill\",\"text\":\"There are no limitations to the mind except those we acknowledge.\"},{\"author\":\"Napoleon Hill\",\"text\":\"Here is one quality that one must possess to win, and that is definiteness of purpose, the knowledge of what one wants, and a burning desire to possess it.\"},{\"author\":\"Nathaniel Hawthorne\",\"text\":\"Happiness is as a butterfly which, when pursued, is always beyond our grasp, but which if you will sit down quietly, may alight upon you.\"},{\"author\":\"Nelson Mandela\",\"text\":\"There is nothing like returning to a place that remains unchanged to find the ways in which you yourself have altered.\"},{\"author\":\"Nelson Mandela\",\"text\":\"As we are liberated from our own fear, our presence automatically liberates others.\"},{\"author\":\"Nelson Mandela\",\"text\":\"And as we let our own light shine, we unconsciously give other people permission to do the same.\"},{\"author\":\"Niccolo Machiavelli\",\"text\":\"Men in general judge more from appearances than from reality. All men have eyes, but few have the gift of penetration.\"},{\"author\":\"Niels Bohr\",\"text\":\"How wonderful that we have met with a paradox. Now we have some hope of making progress.\"},{\"author\":\"Nietzsche\",\"text\":\"You need chaos in your soul to give birth to a dancing star.\"},{\"author\":\"Nikola Tesla\",\"text\":\"Our virtues and our failings are inseparable, like force and matter. When they separate, man is no more.\"},{\"author\":\"Nikola Tesla\",\"text\":\"Let the future tell the truth, and evaluate each one according to his work and accomplishments. The present is theirs; the future, for which I have really worked, is mine.\"},{\"author\":\"Nikos Kazantzakis\",\"text\":\"By believing passionately in something that does not yet exist, we create it.\"},{\"author\":\"Nora Roberts\",\"text\":\"If you don't go after what you want, you'll never have it. If you don't ask, the answer is always no. If you don't step forward, you're always in the same place.\"},{\"author\":\"Norman Cousins\",\"text\":\"Never deny a diagnosis, but do deny the negative verdict that may go with it.\"},{\"author\":\"Norman Peale\",\"text\":\"If you want things to be different, perhaps the answer is to become different yourself.\"},{\"author\":\"Norman Schwarzkopf\",\"text\":\"The truth of the matter is that you always know the right thing to do. The hard part is doing it.\"},{\"author\":\"Og Mandino\",\"text\":\"Each misfortune you encounter will carry in it the seed of tomorrows good luck.\"},{\"author\":\"Og Mandino\",\"text\":\"I will love the light for it shows me the way, yet I will endure the darkness because it shows me the stars.\"},{\"author\":\"Og Mandino\",\"text\":\"I seek constantly to improve my manners and graces, for they are the sugar to which all are attracted.\"},{\"author\":\"Og Mandino\",\"text\":\"Always do your best. What you plant now, you will harvest later.\"},{\"author\":\"Og Mandino\",\"text\":\"Always seek out the seed of triumph in every adversity.\"},{\"author\":\"Og Mandino\",\"text\":\"Failure will never overtake me if my determination to succeed is strong enough.\"},{\"author\":\"Old German proverb\",\"text\":\"You have to take it as it happens, but you should try to make it happen the way you want to take it.\"},{\"author\":\"Oliver Holmes\",\"text\":\"What lies behind us and what lies before us are small matters compared to what lies within us.\"},{\"author\":\"Oliver Holmes\",\"text\":\"A man may fulfil the object of his existence by asking a question he cannot answer, and attempting a task he cannot achieve.\"},{\"author\":\"Oliver Holmes\",\"text\":\"We do not quit playing because we grow old, we grow old because we quit playing.\"},{\"author\":\"Oliver Holmes\",\"text\":\"Love is the master key that opens the gates of happiness.\"},{\"author\":\"Oprah Winfrey\",\"text\":\"Follow your instincts. That is where true wisdom manifests itself.\"},{\"author\":\"Oprah Winfrey\",\"text\":\"I don't believe in failure. It is not failure if you enjoyed the process.\"},{\"author\":\"Oprah Winfrey\",\"text\":\"If you want your life to be more rewarding, you have to change the way you think.\"},{\"author\":\"Oprah Winfrey\",\"text\":\"The biggest adventure you can ever take is to live the life of your dreams.\"},{\"author\":\"Oprah Winfrey\",\"text\":\"Although there may be tragedy in your life, there's always a possibility to triumph. It doesn't matter who you are, where you come from. The ability to triumph begins with you. Always.\"},{\"author\":\"Oprah Winfrey\",\"text\":\"With every experience, you alone are painting your own canvas, thought by thought, choice by choice.\"},{\"author\":\"Oprah Winfrey\",\"text\":\"I don't believe in failure. It's not failure if you enjoyed the process.\"},{\"author\":\"Oprah Winfrey\",\"text\":\"Lots of people want to ride with you in the limo, but what you want is someone who will take the bus with you when the limo breaks down.\"},{\"author\":\"Oprah Winfrey\",\"text\":\"Don't settle for a relationship that won't let you be yourself.\"},{\"author\":\"Orison Marden\",\"text\":\"The Creator has not given you a longing to do that which you have no ability to do.\"},{\"author\":\"Orison Marden\",\"text\":\"Most of our obstacles would melt away if, instead of cowering before them, we should make up our minds to walk boldly through them.\"},{\"author\":\"Orison Marden\",\"text\":\"All men who have achieved great things have been great dreamers.\"},{\"author\":\"Oscar Wilde\",\"text\":\"Experience is simply the name we give our mistakes.\"},{\"author\":\"Oscar Wilde\",\"text\":\"The only thing to do with good advice is to pass it on. It is never of any use to oneself.\"},{\"author\":\"Oscar Wilde\",\"text\":\"The aim of life is self-development. To realize ones nature perfectly that is what each of us is here for.\"},{\"author\":\"Oscar Wilde\",\"text\":\"The smallest act of kindness is worth more than the grandest intention.\"},{\"author\":\"Oscar Wilde\",\"text\":\"Anybody can make history. Only a great man can write it.\"},{\"author\":\"Oscar Wilde\",\"text\":\"Be yourself; everyone else is already taken.\"},{\"author\":\"Ovid\",\"text\":\"The cause is hidden. The effect is visible to all.\"},{\"author\":\"Ovid\",\"text\":\"All things change; nothing perishes.\"},{\"author\":\"Ovid\",\"text\":\"Chance is always powerful. Let your hook be always cast; in the pool where you least expect it, there will be a fish.\"},{\"author\":\"Ovid\",\"text\":\"Let your hook always be cast; in the pool where you least expect it, there will be a fish.\"},{\"author\":\"Ovid\",\"text\":\"Take rest; a field that has rested gives a bountiful crop.\"},{\"author\":\"Paavo Nurmi\",\"text\":\"Mind is everything: muscle, pieces of rubber. All that I am, I am because of my mind.\"},{\"author\":\"Pablo Picasso\",\"text\":\"Everything you can imagine is real.\"},{\"author\":\"Pablo Picasso\",\"text\":\"Inspiration exists, but it has to find us working.\"},{\"author\":\"Pablo Picasso\",\"text\":\"He can who thinks he can, and he can't who thinks he can't. This is an inexorable, indisputable law.\"},{\"author\":\"Pablo Picasso\",\"text\":\"I am always doing that which I cannot do, in order that I may learn how to do it.\"},{\"author\":\"Pablo Picasso\",\"text\":\"I am always doing that which I can not do, in order that I may learn how to do it.\"},{\"author\":\"Pablo Picasso\",\"text\":\"Action is the foundational key to all success.\"},{\"author\":\"Pablo Picasso\",\"text\":\"I begin with an idea and then it becomes something else.\"},{\"author\":\"Pablo Picasso\",\"text\":\"All children are artists. The problem is how to remain an artist once he grows up.\"},{\"author\":\"Pat Riley\",\"text\":\"Courage is not the absence of fear, but simply moving on with dignity despite that fear.\"},{\"author\":\"Paul Boese\",\"text\":\"Forgiveness does not change the past, but it does enlarge the future.\"},{\"author\":\"Paul Cezanne\",\"text\":\"The awareness of our own strength makes us modest.\"},{\"author\":\"Paul Graham\",\"text\":\"The most dangerous way to lose time is not to spend it having fun, but to spend it doing fake work. When you spend time having fun, you know you're being self-indulgent.\"},{\"author\":\"Paul Tillich\",\"text\":\"Decision is a risk rooted in the courage of being free.\"},{\"author\":\"Paulo Coelho\",\"text\":\"Write your plans in pencil and give God the eraser.\"},{\"author\":\"Pearl Buck\",\"text\":\"One faces the future with ones past.\"},{\"author\":\"Pearl Buck\",\"text\":\"Growth itself contains the germ of happiness.\"},{\"author\":\"Pearl Buck\",\"text\":\"Every great mistake has a halfway moment, a split second when it can be recalled and perhaps remedied.\"},{\"author\":\"Pearl Buck\",\"text\":\"You cannot make yourself feel something you do not feel, but you can make yourself do right in spite of your feelings.\"},{\"author\":\"Pearl Buck\",\"text\":\"The truth is always exciting. Speak it, then. Life is dull without it.\"},{\"author\":\"Pearl Buck\",\"text\":\"The secret of joy in work is contained in one word excellence. To know how to do something well is to enjoy it.\"},{\"author\":\"Pearl Buck\",\"text\":\"The secret of joy in work is contained in one word: excellence. To know how to do something well is to enjoy it.\"},{\"author\":\"Pema Chodron\",\"text\":\"The truth you believe and cling to makes you unavailable to hear anything new.\"},{\"author\":\"Pema Chodron\",\"text\":\"When you begin to touch your heart or let your heart be touched, you begin to discover that it's bottomless.\"},{\"author\":\"Pema Chodron\",\"text\":\"If we learn to open our hearts, anyone, including the people who drive us crazy, can be our teacher.\"},{\"author\":\"Pema Chodron\",\"text\":\"Nothing ever goes away until it has taught us what we need to know.\"},{\"author\":\"Pema Chodron\",\"text\":\"The greatest obstacle to connecting with our joy is resentment.\"},{\"author\":\"Pema Chodron\",\"text\":\"The future is completely open, and we are writing it moment to moment.\"},{\"author\":\"Pema Chodron\",\"text\":\"To be fully alive, fully human, and completely awake is to be continually thrown out of the nest.\"},{\"author\":\"Pema Chodron\",\"text\":\"It isn't what happens to us that causes us to suffer; it's what we say to ourselves about what happens.\"},{\"author\":\"Percy Shelley\",\"text\":\"Fear not for the future, weep not for the past.\"},{\"author\":\"Pericles\",\"text\":\"Time is the wisest counsellor of all.\"},{\"author\":\"Peter Drucker\",\"text\":\"Efficiency is doing things right; effectiveness is doing the right things.\"},{\"author\":\"Peter Drucker\",\"text\":\"Follow effective action with quiet reflection. From the quiet reflection will come even more effective action.\"},{\"author\":\"Peter Drucker\",\"text\":\"There is nothing so useless as doing efficiently that which should not be done at all.\"},{\"author\":\"Peter Drucker\",\"text\":\"The best way to predict your future is to create it.\"},{\"author\":\"Peter Drucker\",\"source\":\"https://www.goodreads.com/quotes/784267\",\"tags\":\"time, management\",\"text\":\"Until we can manage time, we can manage nothing else.\"},{\"author\":\"Peter Elbow\",\"text\":\"Meaning is not what you start with but what you end up with.\"},{\"author\":\"Philip Breedveld\",\"text\":\"Moments of complete apathy are the best for new creations.\"},{\"author\":\"Philip Sidney\",\"text\":\"Either I will find a way, or I will make one.\"},{\"author\":\"Pierre Abelard\",\"text\":\"The beginning of wisdom is found in doubting; by doubting we come to the question, and by seeking we may come upon the truth.\"},{\"author\":\"Pierre Auguste Renoir\",\"text\":\"The pain passes, but the beauty remains.\"},{\"author\":\"Plato\",\"text\":\"A good decision is based on knowledge and not on numbers.\"},{\"author\":\"Plato\",\"text\":\"Bodily exercise, when compulsory, does no harm to the body; but knowledge which is acquired under compulsion obtains no hold on the mind.\"},{\"author\":\"Plato\",\"text\":\"Good actions give strength to ourselves and inspire good actions in others.\"},{\"author\":\"Plato\",\"text\":\"Wise men talk because they have something to say; fools, because they have to say something.\"},{\"author\":\"Plotinus\",\"text\":\"Knowledge has three degrees opinion, science, illumination. The means or instrument of the first is sense; of the second, dialectic; of the third, intuition.\"},{\"author\":\"Plutarch\",\"text\":\"What we achieve inwardly will change outer reality.\"},{\"author\":\"Plutarch\",\"text\":\"Know how to listen, and you will profit even from those who talk badly.\"},{\"author\":\"Plutarch\",\"text\":\"To make no mistakes is not in the power of man; but from their errors and mistakes the wise and good learn wisdom for the future.\"},{\"author\":\"Princess Diana\",\"text\":\"Only do what your heart tells you.\"},{\"author\":\"Publilius Syrus\",\"text\":\"A rolling stone gathers no moss.\"},{\"author\":\"Publilius Syrus\",\"text\":\"While we stop to think, we often miss our opportunity.\"},{\"author\":\"Publilius Syrus\",\"text\":\"Better be ignorant of a matter than half know it.\"},{\"author\":\"Publilius Syrus\",\"text\":\"I have often regretted my speech, never my silence.\"},{\"author\":\"Publilius Syrus\",\"text\":\"Do not turn back when you are just at the goal.\"},{\"author\":\"Publilius Syrus\",\"text\":\"Never promise more than you can perform.\"},{\"author\":\"Rabbi Hillel\",\"text\":\"If I am not for myself, who will be for me? If I am not for others, what am I? And if not now, when?\"},{\"author\":\"Rabindranath Tagore\",\"text\":\"We read the world wrong and say that it deceives us.\"},{\"author\":\"Rachel Carson\",\"text\":\"If facts are the seeds that later produce knowledge and wisdom, then the emotions and the impressions of the senses are the fertile soil in which the seeds must grow.\"},{\"author\":\"Ralph Blum\",\"text\":\"Nothing is predestined: The obstacles of your past can become the gateways that lead to new beginnings.\"},{\"author\":\"Ralph Emerson\",\"text\":\"Skill to do comes of doing.\"},{\"author\":\"Ralph Emerson\",\"text\":\"The years teach much which the days never know.\"},{\"author\":\"Ralph Emerson\",\"text\":\"Our distrust is very expensive.\"},{\"author\":\"Ralph Emerson\",\"text\":\"Good luck is another name for tenacity of purpose.\"},{\"author\":\"Ralph Emerson\",\"text\":\"Life is a progress, and not a station.\"},{\"author\":\"Ralph Emerson\",\"text\":\"The world makes way for the man who knows where he is going.\"},{\"author\":\"Ralph Emerson\",\"text\":\"Life is a succession of lessons, which must be lived to be understood.\"},{\"author\":\"Ralph Emerson\",\"text\":\"Great are they who see that spiritual is stronger than any material force, that thoughts rule the world.\"},{\"author\":\"Ralph Emerson\",\"text\":\"Do not waste yourself in rejection, nor bark against the bad, but chant the beauty of the good.\"},{\"author\":\"Ralph Emerson\",\"text\":\"If the single man plant himself indomitably on his instincts, and there abide, the huge world will come round to him.\"},{\"author\":\"Ralph Emerson\",\"text\":\"It is one of the blessings of old friends that you can afford to be stupid with them.\"},{\"author\":\"Ralph Emerson\",\"text\":\"If the stars should appear but one night every thousand years how man would marvel and adore.\"},{\"author\":\"Ralph Emerson\",\"text\":\"Do not be too timid and squeamish about your reactions. All life is an experiment. The more experiments you make the better.\"},{\"author\":\"Ralph Emerson\",\"text\":\"Do not go where the path may lead, go instead where there is no path and leave a trail.\"},{\"author\":\"Ralph Emerson\",\"text\":\"Self-trust is the first secret of success.\"},{\"author\":\"Ralph Emerson\",\"text\":\"Go put your creed into the deed. Nor speak with double tongue.\"},{\"author\":\"Ralph Emerson\",\"text\":\"We aim above the mark to hit the mark.\"},{\"author\":\"Ralph Emerson\",\"text\":\"Nature is a mutable cloud which is always and never the same.\"},{\"author\":\"Ralph Emerson\",\"text\":\"Build a better mousetrap and the world will beat a path to your door.\"},{\"author\":\"Ralph Emerson\",\"text\":\"Nothing is at last sacred but the integrity of your own mind.\"},{\"author\":\"Ralph Emerson\",\"text\":\"Nothing great was ever achieved without enthusiasm.\"},{\"author\":\"Ralph Emerson\",\"text\":\"Each man has his own vocation; his talent is his call. There is one direction in which all space is open to him.\"},{\"author\":\"Ralph Emerson\",\"text\":\"Truth, and goodness, and beauty are but different faces of the same all.\"},{\"author\":\"Ralph Emerson\",\"text\":\"To be great is to be misunderstood.\"},{\"author\":\"Ralph Emerson\",\"text\":\"Make the most of yourself, for that is all there is of you.\"},{\"author\":\"Ralph Emerson\",\"text\":\"Everything in the universe goes by indirection. There are no straight lines.\"},{\"author\":\"Ralph Emerson\",\"text\":\"Make the most of yourself for that is all there is of you.\"},{\"author\":\"Ralph Emerson\",\"text\":\"Thought is the blossom; language the bud; action the fruit behind it.\"},{\"author\":\"Ralph Emerson\",\"text\":\"We must be as courteous to a man as we are to a picture, which we are willing to give the advantage of a good light.\"},{\"author\":\"Ralph Emerson\",\"text\":\"What is a weed? A plant whose virtues have not yet been discovered.\"},{\"author\":\"Ralph Emerson\",\"text\":\"Belief consists in accepting the affirmations of the soul; Unbelief, in denying them.\"},{\"author\":\"Ralph Emerson\",\"text\":\"Good thoughts are no better than good dreams, unless they be executed.\"},{\"author\":\"Ralph Emerson\",\"text\":\"In skating over thin ice our safety is in our speed.\"},{\"author\":\"Ralph Emerson\",\"text\":\"So is cheerfulness, or a good temper, the more it is spent, the more remains.\"},{\"author\":\"Ralph Emerson\",\"text\":\"Bad times have a scientific value. These are occasions a good learner would not miss.\"},{\"author\":\"Ralph Emerson\",\"text\":\"The only way to have a friend is to be one.\"},{\"author\":\"Ralph Marston\",\"text\":\"Excellence is not a skill. It is an attitude.\"},{\"author\":\"Ralph Marston\",\"text\":\"Let go of your attachment to being right, and suddenly your mind is more open. You're able to benefit from the unique viewpoints of others, without being crippled by your own judgement.\"},{\"author\":\"Ralph Waldo Emerson\",\"text\":\"Our strength grows out of our weaknesses.\"},{\"author\":\"Ralph Waldo Emerson\",\"text\":\"It is only when the mind and character slumber that the dress can be seen.\"},{\"author\":\"Ralph Waldo Emerson\",\"text\":\"Happiness is a perfume you cannot pour on others without getting a few drops on yourself.\"},{\"author\":\"Ralph Waldo Emerson\",\"text\":\"A hero is no braver than an ordinary man, but he is braver five minutes longer.\"},{\"author\":\"Ralph Waldo Emerson\",\"text\":\"Imagination is not a talent of some men but is the health of every man.\"},{\"author\":\"Ralph Waldo Emerson\",\"text\":\"Most of the shadows of life are caused by standing in our own sunshine.\"},{\"author\":\"Ralph Waldo Emerson\",\"text\":\"Do not follow where the path may lead. Go, instead, where there is no path and leave a trail.\"},{\"author\":\"Ray Bradbury\",\"text\":\"Living at risk is jumping off the cliff and building your wings on the way down.\"},{\"author\":\"Remez Sasson\",\"text\":\"You get peace of mind not by thinking about it or imagining it, but by quietening and relaxing the restless mind.\"},{\"author\":\"Rene Descartes\",\"text\":\"It is not enough to have a good mind; the main thing is to use it well.\"},{\"author\":\"Rene Descartes\",\"text\":\"The greatest minds are capable of the greatest vices as well as of the greatest virtues.\"},{\"author\":\"Rene Descartes\",\"text\":\"Divide each difficulty into as many parts as is feasible and necessary to resolve it.\"},{\"author\":\"Richard Bach\",\"text\":\"Argue for your limitations, and sure enough theyre yours.\"},{\"author\":\"Richard Bach\",\"text\":\"In order to win, you must expect to win.\"},{\"author\":\"Richard Bach\",\"text\":\"The simplest things are often the truest.\"},{\"author\":\"Richard Bach\",\"text\":\"To bring anything into your life, imagine that it's already there.\"},{\"author\":\"Richard Bach\",\"text\":\"Strong beliefs win strong men, and then make them stronger.\"},{\"author\":\"Richard Bach\",\"text\":\"Every problem has a gift for you in its hands.\"},{\"author\":\"Richard Bach\",\"text\":\"The best way to pay for a lovely moment is to enjoy it.\"},{\"author\":\"Richard Bach\",\"text\":\"In order to live free and happily you must sacrifice boredom. It is not always an easy sacrifice.\"},{\"author\":\"Richard Bach\",\"text\":\"You are always free to change your mind and choose a different future, or a different past.\"},{\"author\":\"Richard Bach\",\"text\":\"Your friends will know you better in the first minute you meet than your acquaintances will know you in a thousand years.\"},{\"author\":\"Richard Bach\",\"text\":\"If you love someone, set them free. If they come back they're yours; if they don't they never were.\"},{\"author\":\"Richard Bach\",\"text\":\"Bad things are not the worst things that can happen to us. Nothing is the worst thing that can happen to us!\"},{\"author\":\"Richard Bach\",\"text\":\"Can miles truly separate you from friends... If you want to be with someone you love, aren't you already there?\"},{\"author\":\"Richard Bach\",\"text\":\"Don't turn away from possible futures before you're certain you don't have anything to learn from them.\"},{\"author\":\"Richard Bach\",\"text\":\"Don't believe what your eyes are telling you. All they show is limitation. Look with your understanding, find out what you already know, and you'll see the way to fly.\"},{\"author\":\"Richard Bach\",\"text\":\"Sooner or later, those who win are those who think they can.\"},{\"author\":\"Richard Bach\",\"text\":\"Happiness is the reward we get for living to the highest right we know.\"},{\"author\":\"Richard Bach\",\"text\":\"Every gift from a friend is a wish for your happiness.\"},{\"author\":\"Richard Bach\",\"text\":\"Learning is finding out what you already know.\"},{\"author\":\"Richard Bach\",\"text\":\"Ask yourself the secret of your success. Listen to your answer, and practice it.\"},{\"author\":\"Richard Bach\",\"text\":\"The meaning I picked, the one that changed my life: Overcome fear, behold wonder.\"},{\"author\":\"Richard Bach\",\"text\":\"Every person, all the events of your life are there because you have drawn them there. What you choose to do with them is up to you.\"},{\"author\":\"Richard Bach\",\"text\":\"To fly as fast as thought, you must begin by knowing that you have already arrived.\"},{\"author\":\"Richard Bach\",\"text\":\"Allow the world to live as it chooses, and allow yourself to live as you choose.\"},{\"author\":\"Richard Bach\",\"text\":\"I gave my life to become the person I am right now. Was it worth it?\"},{\"author\":\"Richard Bach\",\"text\":\"The mark of your ignorance is the depth of your belief in injustice and tragedy. What the caterpillar calls the end of the world, the Master calls the butterfly.\"},{\"author\":\"Richard Bach\",\"text\":\"Listen to what you know instead of what you fear.\"},{\"author\":\"Richard Bach\",\"text\":\"What the caterpillar calls the end of the world, the master calls a butterfly.\"},{\"author\":\"Richard Bach\",\"text\":\"You teach best what you most need to learn.\"},{\"author\":\"Richard Bach\",\"text\":\"Don't be dismayed by good-byes. A farewell is necessary before you can meet again. And meeting again, after moments or lifetimes, is certain for those who are friends.\"},{\"author\":\"Richard Bach\",\"text\":\"You are never given a wish without also being given the power to make it come true. You may have to work for it, however.\"},{\"author\":\"Richard Bach\",\"text\":\"Argue for your limitations, and sure enough they're yours.\"},{\"author\":\"Richard Braunstein\",\"text\":\"He who obtains has little. He who scatters has much.\"},{\"author\":\"Richard Evans\",\"text\":\"The undertaking of a new action brings new strength.\"},{\"author\":\"Richard Feynman\",\"source\":\"https://simple.wikiquote.org/wiki/Richard_Feynman\",\"tags\":\"create, creation, understand, understanding\",\"text\":\"What I cannot create, I do not understand.\"},{\"author\":\"Richard Garriott\",\"text\":\"Chaos and Order are not enemies, only opposites.\"},{\"author\":\"Richard Needham\",\"text\":\"Strong people make as many mistakes as weak people. Difference is that strong people admit their mistakes, laugh at them, learn from them. That is how they become strong.\"},{\"author\":\"Richard Whately\",\"text\":\"Lose an hour in the morning, and you will spend all day looking for it.\"},{\"author\":\"Rita Mae Brown\",\"text\":\"Creativity comes from trust. Trust your instincts. And never hope more than you work.\"},{\"author\":\"Robert Anthony\",\"text\":\"Forget about all the reasons why something may not work. You only need to find one good reason why it will.\"},{\"author\":\"Robert Brault\",\"text\":\"Enjoy the little things, for one day you may look back and realize they were the big things.\"},{\"author\":\"Robert C. Solomon\",\"text\":\"Spirituality can be severed from both vicious sectarianism and thoughtless banalities. Spirituality, I have come to see, is nothing less than the thoughtful love of life.\"},{\"author\":\"Robert Frost\",\"text\":\"The best way out is always through.\"},{\"author\":\"Robert Frost\",\"text\":\"In three words I can sum up everything Ive learned about life: it goes on.\"},{\"author\":\"Robert Fulghum\",\"text\":\"Peace is not something you wish for. It's something you make, something you do, something you are, and something you give away.\"},{\"author\":\"Robert Fulghum\",\"text\":\"If you break your neck, if you have nothing to eat, if your house is on fire, then you got a problem. Everything else is inconvenience.\"},{\"author\":\"Robert Graves\",\"text\":\"Intuition is the supra-logic that cuts out all the routine processes of thought and leaps straight from the problem to the answer.\"},{\"author\":\"Robert Heller\",\"text\":\"Never ignore a gut feeling, but never believe that it's enough.\"},{\"author\":\"Robert Kennedy\",\"text\":\"Only those who dare to fail greatly can ever achieve greatly.\"},{\"author\":\"Robert Louis Stevenson\",\"text\":\"There is no duty we so underrate as the duty of being happy. By being happy we sow anonymous benefits upon the world.\"},{\"author\":\"Robert Lynd\",\"text\":\"Any of us can achieve virtue, if by virtue we merely mean the avoidance of the vices that do not attract us.\"},{\"author\":\"Robert M. Pirsig\",\"text\":\"The place to improve the world is first in one's own heart and head and hands.\"},{\"author\":\"Robert McKain\",\"text\":\"The reason most goals are not achieved is that we spend our time doing second things first.\"},{\"author\":\"Robert Orben\",\"text\":\"Don't think of it as failure. Think of it as time-released success.\"},{\"author\":\"Robert Pirsig\",\"text\":\"The only Zen you find on the tops of mountains is the Zen you bring up there.\"},{\"author\":\"Robert Schuller\",\"text\":\"As we grow as unique persons, we learn to respect the uniqueness of others.\"},{\"author\":\"Robert Schuller\",\"text\":\"Failure doesn't mean you are a failure it just means you haven't succeeded yet.\"},{\"author\":\"Robert Southey\",\"text\":\"It is with words as with sunbeams. The more they are condensed, the deeper they burn.\"},{\"author\":\"Robert Stevenson\",\"text\":\"Don't judge each day by the harvest you reap but by the seeds you plant.\"},{\"author\":\"Robert Stevenson\",\"text\":\"To be what we are, and to become what we are capable of becoming, is the only end of life.\"},{\"author\":\"Robert Stevenson\",\"text\":\"Don't judge each day by the harvest you reap but by the seeds that you plant.\"},{\"author\":\"Rodin\",\"text\":\"Nothing is a waste of time if you use the experience wisely.\"},{\"author\":\"Rudolf Arnheim\",\"text\":\"All perceiving is also thinking, all reasoning is also intuition, all observation is also invention.\"},{\"author\":\"Rumi\",\"text\":\"Something opens our wings. Something makes boredom and hurt disappear. Someone fills the cup in front of us: We taste only sacredness.\"},{\"author\":\"Rumi\",\"text\":\"Everyone has been made for some particular work, and the desire for that work has been put in every heart.\"},{\"author\":\"Rumi\",\"text\":\"Let the beauty of what you love be what you do.\"},{\"author\":\"Rumi\",\"text\":\"Let yourself be silently drawn by the stronger pull of what you really love.\"},{\"author\":\"Sai Baba\",\"text\":\"What is new in the world? Nothing. What is old in the world? Nothing. Everything has always been and will always be.\"},{\"author\":\"Sai Baba\",\"text\":\"All action results from thought, so it is thoughts that matter.\"},{\"author\":\"Saint Augustine\",\"text\":\"Patience is the companion of wisdom.\"},{\"author\":\"Sam Keen\",\"text\":\"We come to love not by finding a perfect person, but by learning to see an imperfect person perfectly.\"},{\"author\":\"Sam Levenson\",\"text\":\"It's so simple to be wise. Just think of something stupid to say and then don't say it.\"},{\"author\":\"Sam Rayburn\",\"text\":\"No one has a finer command of language than the person who keeps his mouth shut.\"},{\"author\":\"Samuel Johnson\",\"text\":\"Memory is the mother of all wisdom.\"},{\"author\":\"Samuel Taylor Coleridge\",\"text\":\"Imagination is the living power and prime agent of all human perception.\"},{\"author\":\"Sarah Breathnach\",\"text\":\"Our deepest wishes are whispers of our authentic selves. We must learn to respect them. We must learn to listen.\"},{\"author\":\"Satchel Paige\",\"text\":\"Don't look back. Something might be gaining on you.\"},{\"author\":\"Saul Alinsky\",\"text\":\"As an organizer I start from where the world is, as it is, not as I would like it to be.\"},{\"author\":\"Seneca\",\"text\":\"Luck is what happens when preparation meets opportunity.\"},{\"author\":\"Seneca\",\"text\":\"No man was ever wise by chance.\"},{\"author\":\"Seneca\",\"text\":\"The greatest remedy for anger is delay.\"},{\"author\":\"Seneca\",\"text\":\"The mind unlearns with difficulty what it has long learned.\"},{\"author\":\"Seneca\",\"text\":\"Begin at once to live and count each separate day as a separate life.\"},{\"author\":\"Seneca\",\"text\":\"If one does not know to which port is sailing, no wind is favorable.\"},{\"author\":\"Seneca\",\"text\":\"The conditions of conquest are always easy. We have but to toil awhile, endure awhile, believe always, and never turn back.\"},{\"author\":\"Seneca\",\"text\":\"There is no great genius without some touch of madness.\"},{\"author\":\"Seneca\",\"text\":\"Most powerful is he who has himself in his own power.\"},{\"author\":\"Seneca\",\"text\":\"Things that were hard to bear are sweet to remember.\"},{\"author\":\"Shakti Gawain\",\"text\":\"The more light you allow within you, the brighter the world you live in will be.\"},{\"author\":\"Shannon L. Alder\",\"source\":\"https://www.goodreads.com/quotes/736095\",\"tags\":\"choices, courage, decisions, questions, avoid, avoiding, avoidance, procrastination\",\"text\":\"Courage doesn’t happen when you have all the answers. It happens when you are ready to face the questions you have been avoiding your whole life.\"},{\"author\":\"Sheldon Kopp\",\"text\":\"In the long run we get no more than we have been willing to risk giving.\"},{\"author\":\"Shunryu Suzuki\",\"text\":\"The most important point is to accept yourself and stand on your two feet.\"},{\"author\":\"Sigmund Freud\",\"text\":\"From error to error one discovers the entire truth.\"},{\"author\":\"Sigmund Freud\",\"text\":\"The most complicated achievements of thought are possible without the assistance of consciousness.\"},{\"author\":\"Simone Weil\",\"text\":\"Liberty, taking the word in its concrete sense, consists in the ability to choose.\"},{\"author\":\"Sinvyest Tan\",\"text\":\"Don't frown because you never know who is falling in love with your smile.\"},{\"author\":\"Socrates\",\"text\":\"Be as you wish to seem.\"},{\"author\":\"Socrates\",\"text\":\"Wisdom begins in wonder.\"},{\"author\":\"Socrates\",\"text\":\"The greatest way to live with honor in this world is to be what we pretend to be.\"},{\"author\":\"Socrates\",\"text\":\"The greatest way to live with honour in this world is to be what we pretend to be.\"},{\"author\":\"Sogyal Rinpoche\",\"text\":\"We must never forget that it is through our actions, words, and thoughts that we have a choice.\"},{\"author\":\"Sojourner Truth\",\"text\":\"Truth is powerful and it prevails.\"},{\"author\":\"Sophia Loren\",\"source\":\"https://www.goodreads.com/quotes/8746\",\"tags\":\"creativity, youth, age, mind\",\"text\":\"There is a fountain of youth: it is your mind, your talents, the creativity you bring to your life and the lives of people you love. When you learn to tap this source, you will truly have defeated age.\"},{\"author\":\"Sophocles\",\"text\":\"Wisdom is the supreme part of happiness.\"},{\"author\":\"Sophocles\",\"text\":\"A short saying often contains much wisdom.\"},{\"author\":\"Sophocles\",\"text\":\"A short saying oft contains much wisdom.\"},{\"author\":\"Sophocles\",\"text\":\"Men of perverse opinion do not know the excellence of what is in their hands, till some one dash it from them.\"},{\"author\":\"Sophocles\",\"text\":\"Ignorant men don't know what good they hold in their hands until they've flung it away.\"},{\"author\":\"Sophocles\",\"text\":\"Much wisdom often goes with fewer words.\"},{\"author\":\"Sophocles\",\"text\":\"Numberless are the worlds wonders, but none more wonderful than man.\"},{\"author\":\"Sri Chinmoy\",\"text\":\"Judge nothing, you will be happy. Forgive everything, you will be happier. Love everything, you will be happiest.\"},{\"author\":\"St. Augustine\",\"text\":\"Better to have loved and lost, than to have never loved at all.\"},{\"author\":\"Stephen Covey\",\"text\":\"We are not animals. We are not a product of what has happened to us in our past. We have the power of choice.\"},{\"author\":\"Stephen Kaggwa\",\"text\":\"Try and fail, but don't fail to try.\"},{\"author\":\"Stephen Sigmund\",\"text\":\"Learn wisdom from the ways of a seedling. A seedling which is never hardened off through stressful situations will never become a strong productive plant.\"},{\"author\":\"Sue Patton Thoele\",\"text\":\"Deep listening is miraculous for both listener and speaker.When someone receives us with open-hearted, non-judging, intensely interested listening, our spirits expand.\"},{\"author\":\"Sun Tzu\",\"text\":\"You have to believe in yourself.\"},{\"author\":\"Sun Tzu\",\"text\":\"Can you imagine what I would do if I could do all I can?\"},{\"author\":\"Swedish proverb\",\"text\":\"Worry often gives a small thing a big shadow.\"},{\"author\":\"Sydney Smith\",\"text\":\"It is the greatest of all mistakes to do nothing because you can only do little do what you can.\"},{\"author\":\"Sydney Smith\",\"text\":\"It is the greatest of all mistakes to do nothing because you can only do little - do what you can.\"},{\"author\":\"Sylvia Plath\",\"source\":\"https://www.goodreads.com/quotes/358562\",\"tags\":\"creativity, confidence, self-doubt, enemy\",\"text\":\"The worst enemy to creativity is self-doubt.\"},{\"author\":\"Sylvia Voirol\",\"text\":\"Rainbows apologize for angry skies.\"},{\"author\":\"Søren Kierkegaard\",\"source\":\"https://www.goodreads.com/quotes/6812\",\"tags\":\"fictional, movie, do, try, star wars\",\"text\":\"Life can only be understood backwards; but it must be lived forwards.\"},{\"author\":\"Søren Kierkegaard\",\"text\":\"To dare is to lose ones footing momentarily. To not dare is to lose oneself.\"},{\"author\":\"Tehyi Hsieh\",\"text\":\"Action will remove the doubts that theory cannot solve.\"},{\"author\":\"Tenzin Gyatso\",\"text\":\"To be aware of a single shortcoming in oneself is more useful than to be aware of a thousand in someone else.\"},{\"author\":\"Tenzin Gyatso\",\"text\":\"When we feel love and kindness toward others, it not only makes others feel loved and cared for, but it helps us also to develop inner happiness and peace.\"},{\"author\":\"Terry Tempest Williams\",\"source\":\"https://www.goodreads.com/quotes/784313\",\"tags\":\"creative, creativity\",\"text\":\"Creativity involves breaking out of expected patterns in order to look at things in a different way.\"},{\"author\":\"Theodore H. White\",\"text\":\"To go against the dominant thinking of your friends, of most of the people you see every day, is perhaps the most difficult act of heroism you can perform.\"},{\"author\":\"Theodore Roosevelt\",\"text\":\"Keep your eyes on the stars and your feet on the ground.\"},{\"author\":\"Theodore Rubin\",\"text\":\"Kindness is more important than wisdom, and the recognition of this is the beginning of wisdom.\"},{\"author\":\"Theophrastus\",\"text\":\"Time is the most valuable thing a man can spend.\"},{\"author\":\"Thich Nhat Hanh\",\"text\":\"Smile, breathe, and go slowly.\"},{\"author\":\"Thich Nhat Hanh\",\"text\":\"There is no way to happiness, happiness is the way.\"},{\"author\":\"Thich Nhat Hanh\",\"text\":\"May our hearts garden of awakening bloom with hundreds of flowers.\"},{\"author\":\"Thich Nhat Hanh\",\"text\":\"To be beautiful means to be yourself. You do not need to be accepted by others. You need to accept yourself.\"},{\"author\":\"Thich Nhat Hanh\",\"text\":\"The most precious gift we can offer anyone is our attention. When mindfulness embraces those we love, they will bloom like flowers.\"},{\"author\":\"Thich Nhat Hanh\",\"text\":\"Sometimes your joy is the source of your smile, but sometimes your smile can be the source of your joy.\"},{\"author\":\"Thich Nhat Hanh\",\"text\":\"By living deeply in the present moment we can understand the past better and we can prepare for a better future.\"},{\"author\":\"Thich Nhat Hanh\",\"text\":\"The amount of happiness that you have depends on the amount of freedom you have in your heart.\"},{\"author\":\"Thich Nhat Hanh\",\"text\":\"Smile, breathe and go slowly.\"},{\"author\":\"Thich Nhat Hanh\",\"text\":\"If we are not fully ourselves, truly in the present moment, we miss everything.\"},{\"author\":\"Thich Nhat Hanh\",\"text\":\"To be beautiful means to be yourself. You don't need to be accepted by others. You need to accept yourself.\"},{\"author\":\"Thomas Carlyle\",\"text\":\"By nature man hates change; seldom will he quit his old home till it has actually fallen around his ears.\"},{\"author\":\"Thomas Carlyle\",\"text\":\"This world, after all our science and sciences, is still a miracle; wonderful, inscrutable, magical and more, to whosoever will think of it.\"},{\"author\":\"Thomas Carlyle\",\"text\":\"Do not be embarrassed by your mistakes. Nothing can teach us better than our understanding of them. This is one of the best ways of self-education.\"},{\"author\":\"Thomas Carlyle\",\"text\":\"Instead of saying that man is the creature of circumstance, it would be nearer the mark to say that man is the architect of circumstance.\"},{\"author\":\"Thomas Dewar\",\"text\":\"Minds are like parachutes. They only function when open.\"},{\"author\":\"Thomas Edison\",\"text\":\"Genius is one percent inspiration and ninety-nine percent perspiration.\"},{\"author\":\"Thomas Edison\",\"text\":\"If we did the things we are capable of, we would astound ourselves.\"},{\"author\":\"Thomas Edison\",\"text\":\"Opportunity is missed by most because it is dressed in overalls and looks like work.\"},{\"author\":\"Thomas Edison\",\"text\":\"Many of life's failures are people who did not realize how close they were to success when they gave up.\"},{\"author\":\"Thomas Edison\",\"text\":\"The first requisite for success is the ability to apply your physical and mental energies to one problem incessantly without growing weary.\"},{\"author\":\"Thomas Fuller\",\"text\":\"No garden is without its weeds.\"},{\"author\":\"Thomas Fuller\",\"text\":\"An invincible determination can accomplish almost anything and in this lies the great distinction between great men and little men.\"},{\"author\":\"Thomas Hardy\",\"text\":\"Time changes everything except something within us which is always surprised by change.\"},{\"author\":\"Thomas Jefferson\",\"text\":\"Never put off till tomorrow what you can do today.\"},{\"author\":\"Thomas Jefferson\",\"text\":\"Do you want to know who you are? Don't ask. Act! Action will delineate and define you.\"},{\"author\":\"Thomas Jefferson\",\"text\":\"I'm a great believer in luck and I find the harder I work, the more I have of it.\"},{\"author\":\"Thomas Jefferson\",\"text\":\"Don't talk about what you have done or what you are going to do.\"},{\"author\":\"Thomas Jefferson\",\"text\":\"Reason and free inquiry are the only effectual agents against error.\"},{\"author\":\"Thomas Kempis\",\"text\":\"Be not angry that you cannot make others as you wish them to be, since you cannot make yourself as you wish to be.\"},{\"author\":\"Thomas Paine\",\"text\":\"The most formidable weapon against errors of every kind is reason.\"},{\"author\":\"Tom Jackson\",\"text\":\"Sometimes the cards we are dealt are not always fair. However you must keep smiling and moving on.\"},{\"author\":\"Tom Krause\",\"text\":\"There are no failures. Just experiences and your reactions to them.\"},{\"author\":\"Tom Krause\",\"text\":\"There are no failures, just experiences and your reactions to them.\"},{\"author\":\"Tom Lehrer\",\"text\":\"Life is like a sewer. What you get out of it depends on what you put into it.\"},{\"author\":\"Tom Peters\",\"text\":\"Formula for success: under promise and over deliver.\"},{\"author\":\"Tomas Eliot\",\"text\":\"Do not expect the world to look bright, if you habitually wear gray-brown glasses.\"},{\"author\":\"Toni Morrison\",\"text\":\"If you surrender to the wind, you can ride it.\"},{\"author\":\"Tony Blair\",\"text\":\"Sometimes it is better to lose and do the right thing than to win and do the wrong thing.\"},{\"author\":\"Tony Robbins\",\"text\":\"Whatever happens, take responsibility.\"},{\"author\":\"Tony Robbins\",\"text\":\"The path to success is to take massive, determined action.\"},{\"author\":\"Tony Robbins\",\"text\":\"Successful people ask better questions, and as a result, they get better answers.\"},{\"author\":\"Tony Robbins\",\"text\":\"It is in your moments of decision that your destiny is shaped.\"},{\"author\":\"Tony Robbins\",\"text\":\"The way we communicate with others and with ourselves ultimately determines the quality of our lives.\"},{\"author\":\"Tony Robbins\",\"text\":\"The only limit to your impact is your imagination and commitment.\"},{\"author\":\"Tony Robbins\",\"text\":\"You always succeed in producing a result.\"},{\"author\":\"Tony Robbins\",\"text\":\"Stay committed to your decisions, but stay flexible in your approach.\"},{\"author\":\"Tony Robbins\",\"text\":\"People are not lazy. They simply have impotent goals that is, goals that do not inspire them.\"},{\"author\":\"Tony Robbins\",\"text\":\"Setting goals is the first step in turning the invisible into the visible.\"},{\"author\":\"Tony Robbins\",\"text\":\"We can change our lives. We can do, have, and be exactly what we wish.\"},{\"author\":\"Tony Robbins\",\"text\":\"When people are like each other they tend to like each other.\"},{\"author\":\"Tony Robbins\",\"text\":\"If you do what you've always done, you'll get what youve always gotten.\"},{\"author\":\"Tony Robbins\",\"text\":\"Using the power of decision gives you the capacity to get past any excuse to change any and every part of your life in an instant.\"},{\"author\":\"Tony Robbins\",\"text\":\"People are not lazy. They simply have impotent goals - that is, goals that do not inspire them.\"},{\"author\":\"Tryon Edwards\",\"text\":\"He that never changes his opinions, never corrects his mistakes, and will never be wiser on the morrow than he is today.\"},{\"author\":\"Turkish proverb\",\"text\":\"Kind words will unlock an iron door.\"},{\"author\":\"Ursula Leguin\",\"source\":\"https://www.goodreads.com/quotes/1260096\",\"tags\":\"creative, creativity, child\",\"text\":\"The creative adult is the child who survived.\"},{\"author\":\"Usman Asif\",\"text\":\"Fear is a darkroom where negatives develop.\"},{\"author\":\"Uta Hagen\",\"text\":\"We must overcome the notion that we must be regular. It robs you of the chance to be extraordinary and leads you to the mediocre.\"},{\"author\":\"V. Naipaul\",\"text\":\"The world is always in movement.\"},{\"author\":\"Vaclav Havel\",\"text\":\"Work for something because it is good, not just because it stands a chance to succeed.\"},{\"author\":\"Vernon Cooper\",\"text\":\"These days people seek knowledge, not wisdom. Knowledge is of the past, wisdom is of the future.\"},{\"author\":\"Victor Frankl\",\"text\":\"Everything can be taken from a man but ... the last of the human freedoms to choose ones attitude in any given set of circumstances, to choose ones own way.\"},{\"author\":\"Victor Frankl\",\"text\":\"Everything can be taken from a man but ... the last of the human freedoms - to choose ones attitude in any given set of circumstances, to choose ones own way.\"},{\"author\":\"Victor Hugo\",\"text\":\"Life is the flower for which love is the honey.\"},{\"author\":\"Victor Hugo\",\"text\":\"An invasion of armies can be resisted, but not an idea whose time has come.\"},{\"author\":\"Victoria Holt\",\"text\":\"Never regret. If it's good, it's wonderful. If it's bad, it's experience.\"},{\"author\":\"Vince Lombardi\",\"text\":\"If you'll not settle for anything less than your best, you will be amazed at what you can accomplish in your lives.\"},{\"author\":\"Vince Lombardi\",\"text\":\"Leaders aren't born they are made. And they are made just like anything else, through hard work. And that's the price well have to pay to achieve that goal, or any goal.\"},{\"author\":\"Vincent Lombardi\",\"text\":\"The spirit, the will to win, and the will to excel, are the things that endure. These qualities are so much more important than the events that occur.\"},{\"author\":\"Virgil\",\"text\":\"Fortune favours the brave.\"},{\"author\":\"Virgil\",\"text\":\"They can do all because they think they can.\"},{\"author\":\"Virgil\",\"text\":\"They can conquer who believe they can.\"},{\"author\":\"Vista Kelly\",\"text\":\"Snowflakes are one of natures most fragile things, but just look what they can do when they stick together.\"},{\"author\":\"Voltaire\",\"text\":\"No snowflake in an avalanche ever feels responsible.\"},{\"author\":\"Voltaire\",\"text\":\"To enjoy life, we must touch much of it lightly.\"},{\"author\":\"Voltaire\",\"text\":\"Think for yourselves and let others enjoy the privilege to do so too.\"},{\"author\":\"Voltaire\",\"text\":\"The longer we dwell on our misfortunes, the greater is their power to harm us.\"},{\"author\":\"Voltaire\",\"text\":\"We never live; we are always in the expectation of living.\"},{\"author\":\"Voltaire\",\"text\":\"Meditation is the dissolution of thoughts in eternal awareness or Pure consciousness without objectification, knowing without thinking, merging finitude in infinity.\"},{\"author\":\"W. Clement Stone\",\"text\":\"No matter how carefully you plan your goals they will never be more that pipe dreams unless you pursue them with gusto.\"},{\"author\":\"W. Clement Stone\",\"text\":\"When you discover your mission, you will feel its demand. It will fill you with enthusiasm and a burning desire to get to work on it.\"},{\"author\":\"W. H. Auden\",\"text\":\"To choose what is difficult all ones days, as if it were easy, that is faith.\"},{\"author\":\"Walt Disney\",\"text\":\"If you can dream it, you can do it.\"},{\"author\":\"Walt Disney\",\"text\":\"Weve got to have a dream if we are going to make a dream come true.\"},{\"author\":\"Walt Emerson\",\"text\":\"What lies behind us and what lies before us are tiny matters compared to what lies within us.\"},{\"author\":\"Walter Anderson\",\"text\":\"Nothing diminishes anxiety faster than action.\"},{\"author\":\"Walter Benjamin\",\"text\":\"To be happy is to be able to become aware of oneself without fright.\"},{\"author\":\"Walter Cronkite\",\"text\":\"I can't imagine a person becoming a success who doesn't give this game of life everything hes got.\"},{\"author\":\"Walter Linn\",\"text\":\"It is surprising what a man can do when he has to, and how little most men will do when they don't have to.\"},{\"author\":\"Walter Lippmann\",\"text\":\"Ideals are an imaginative understanding of that which is desirable in that which is possible.\"},{\"author\":\"Walter Lippmann\",\"text\":\"Where all think alike, no one thinks very much.\"},{\"author\":\"Washington Irving\",\"text\":\"Love is never lost. If not reciprocated, it will flow back and soften and purify the heart.\"},{\"author\":\"Wayne Dyer\",\"text\":\"You'll see it when you believe it.\"},{\"author\":\"Wayne Dyer\",\"text\":\"Real magic in relationships means an absence of judgement of others.\"},{\"author\":\"Wayne Dyer\",\"text\":\"Our intention creates our reality.\"},{\"author\":\"Wayne Dyer\",\"text\":\"I think and that is all that I am.\"},{\"author\":\"Wayne Dyer\",\"text\":\"There is no way to prosperity, prosperity is the way.\"},{\"author\":\"Wayne Dyer\",\"text\":\"Everything is perfect in the universe even your desire to improve it.\"},{\"author\":\"Wayne Dyer\",\"text\":\"Be miserable. Or motivate yourself. Whatever has to be done, it's always your choice.\"},{\"author\":\"Wayne Dyer\",\"text\":\"If you change the way you look at things, the things you look at change.\"},{\"author\":\"Wayne Dyer\",\"text\":\"You are important enough to ask and you are blessed enough to receive back.\"},{\"author\":\"Wayne Dyer\",\"text\":\"What we think determines what happens to us, so if we want to change our lives, we need to stretch our minds.\"},{\"author\":\"Wayne Dyer\",\"text\":\"I cannot always control what goes on outside. But I can always control what goes on inside.\"},{\"author\":\"Wayne Dyer\",\"text\":\"Our lives are a sum total of the choices we have made.\"},{\"author\":\"Wayne Dyer\",\"text\":\"When you dance, your purpose is not to get to a certain place on the floor. It's to enjoy each step along the way.\"},{\"author\":\"Wayne Dyer\",\"text\":\"Anything you really want, you can attain, if you really go after it.\"},{\"author\":\"Wayne Dyer\",\"text\":\"Doing what you love is the cornerstone of having abundance in your life.\"},{\"author\":\"Wayne Dyer\",\"text\":\"Everything you are against weakens you. Everything you are for empowers you.\"},{\"author\":\"Wayne Dyer\",\"text\":\"You can't choose up sides on a round world.\"},{\"author\":\"Wayne Dyer\",\"text\":\"There is no scarcity of opportunity to make a living at what you love; theres only scarcity of resolve to make it happen.\"},{\"author\":\"Wayne Dyer\",\"text\":\"We are Divine enough to ask and we are important enough to receive.\"},{\"author\":\"Wayne Dyer\",\"text\":\"Maxim for life: You get treated in life the way you teach people to treat you.\"},{\"author\":\"Wayne Dyer\",\"text\":\"You cannot be lonely if you like the person you're alone with.\"},{\"author\":\"Wayne Dyer\",\"text\":\"Go for it now. The future is promised to no one.\"},{\"author\":\"Wayne Dyer\",\"text\":\"Miracles come in moments. Be ready and willing.\"},{\"author\":\"Wayne Dyer\",\"text\":\"When you judge another, you do not define them, you define yourself.\"},{\"author\":\"Wayne Dyer\",\"text\":\"Simply put, you believer that things or people make you unhappy, but this is not accurate. You make yourself unhappy.\"},{\"author\":\"Wayne Dyer\",\"text\":\"Everything is perfect in the universe - even your desire to improve it.\"},{\"author\":\"Whoopi Goldberg\",\"text\":\"Were here for a reason. I believe a bit of the reason is to throw little torches out to lead people through the dark.\"},{\"author\":\"Will Durant\",\"text\":\"The trouble with most people is that they think with their hopes or fears or wishes rather than with their minds.\"},{\"author\":\"Will Rogers\",\"text\":\"If you find yourself in a hole, the first thing to do is stop digging.\"},{\"author\":\"Willa Cather\",\"text\":\"Where there is great love, there are always miracles.\"},{\"author\":\"William Arthur Ward\",\"text\":\"Do more than dream: work.\"},{\"author\":\"William Arthur Ward\",\"text\":\"Four steps to achievement: Plan purposefully. Prepare prayerfully. Proceed positively. Pursue persistently.\"},{\"author\":\"William Blake\",\"text\":\"In seed time learn, in harvest teach, in winter enjoy.\"},{\"author\":\"William Blake\",\"text\":\"For everything that lives is holy, life delights in life.\"},{\"author\":\"William Burroughs\",\"text\":\"Your mind will answer most questions if you learn to relax and wait for the answer.\"},{\"author\":\"William Channing\",\"text\":\"Difficulties are meant to rouse, not discourage. The human spirit is to grow strong by conflict.\"},{\"author\":\"William Hazlitt\",\"text\":\"Just as much as we see in others we have in ourselves.\"},{\"author\":\"William James\",\"text\":\"The greatest discovery of our generation is that human beings can alter their lives by altering their attitudes of mind. As you think, so shall you be.\"},{\"author\":\"William James\",\"text\":\"Act as if what you do makes a difference. It does.\"},{\"author\":\"William James\",\"text\":\"To change ones life, start immediately, do it flamboyantly, no exceptions.\"},{\"author\":\"William James\",\"text\":\"The deepest craving of human nature is the need to be appreciated.\"},{\"author\":\"William Londen\",\"text\":\"To ensure good health: eat lightly, breathe deeply, live moderately, cultivate cheerfulness, and maintain an interest in life.\"},{\"author\":\"William Lyon Phelps\",\"text\":\"This is the final test of a gentleman: his respect for those who can be of no possible value to him.\"},{\"author\":\"William Menninger\",\"text\":\"Six essential qualities that are the key to success: Sincerity, personal integrity, humility, courtesy, wisdom, charity.\"},{\"author\":\"William Penn\",\"text\":\"True silence is the rest of the mind; it is to the spirit what sleep is to the body, nourishment and refreshment.\"},{\"author\":\"William R. Inge\",\"text\":\"Nature takes away any faculty that is not used.\"},{\"author\":\"William Saroyan\",\"text\":\"Good people are good because they've come to wisdom through failure. We get very little wisdom from success, you know.\"},{\"author\":\"William Scolavino\",\"text\":\"The height of your accomplishments will equal the depth of your convictions.\"},{\"author\":\"William Shakespeare\",\"text\":\"Having nothing, nothing can he lose.\"},{\"author\":\"William Shakespeare\",\"text\":\"Love all, trust a few, do wrong to none.\"},{\"author\":\"William Shakespeare\",\"text\":\"He that is giddy thinks the world turns round.\"},{\"author\":\"William Shakespeare\",\"text\":\"Speak low, if you speak love.\"},{\"author\":\"William Shakespeare\",\"text\":\"Be great in act, as you have been in thought.\"},{\"author\":\"William Shakespeare\",\"text\":\"Be not afraid of greatness: some are born great, some achieve greatness, and some have greatness thrust upon them.\"},{\"author\":\"William Shakespeare\",\"text\":\"How far that little candle throws its beams! So shines a good deed in a naughty world.\"},{\"author\":\"William Shakespeare\",\"text\":\"God has given you one face, and you make yourself another.\"},{\"author\":\"William Shakespeare\",\"text\":\"Go to your bosom: Knock there, and ask your heart what it doth know.\"},{\"author\":\"William Shakespeare\",\"text\":\"We know what we are, but know not what we may be.\"},{\"author\":\"William Shakespeare\",\"text\":\"All the world is a stage, And all the men and women merely players.They have their exits and entrances; Each man in his time plays many parts.\"},{\"author\":\"William Shakespeare\",\"text\":\"To climb steep hills requires a slow pace at first.\"},{\"author\":\"William Shakespeare\",\"text\":\"It is not in the stars to hold our destiny but in ourselves.\"},{\"author\":\"William Sloane Coffin\",\"text\":\"Hope arouses, as nothing else can arouse, a passion for the possible.\"},{\"author\":\"William Ward\",\"text\":\"When we seek to discover the best in others, we somehow bring out the best in ourselves.\"},{\"author\":\"William Ward\",\"text\":\"Adversity causes some men to break, others to break records.\"},{\"author\":\"William White\",\"text\":\"I am not afraid of tomorrow, for I have seen yesterday and I love today.\"},{\"author\":\"William Yeats\",\"text\":\"Think as a wise man but communicate in the language of the people.\"},{\"author\":\"Winifred Holtby\",\"text\":\"The things that one most wants to do are the things that are probably most worth doing.\"},{\"author\":\"Winston Churchill\",\"text\":\"Courage is going from failure to failure without losing enthusiasm.\"},{\"author\":\"Winston Churchill\",\"text\":\"Short words are best and the old words when short are best of all.\"},{\"author\":\"Winston Churchill\",\"text\":\"You have enemies? Good. That means you've stood up for something, sometime in your life.\"},{\"author\":\"Winston Churchill\",\"text\":\"Courage is what it takes to stand up and speak; courage is also what it takes to sit down and listen.\"},{\"author\":\"Winston Churchill\",\"text\":\"History will be kind to me for I intend to write it.\"},{\"author\":\"Winston Churchill\",\"text\":\"Before you can inspire with emotion, you must be swamped with it yourself. Before you can move their tears, your own must flow. To convince them, you must yourself believe.\"},{\"author\":\"Winston Churchill\",\"text\":\"The price of greatness is responsibility.\"},{\"author\":\"Winston Churchill\",\"text\":\"The pessimist sees difficulty in every opportunity. The optimist sees the opportunity in every difficulty.\"},{\"author\":\"Winston Churchill\",\"text\":\"I never worry about action, but only inaction.\"},{\"author\":\"Winston Churchill\",\"text\":\"Never, never, never give up.\"},{\"author\":\"Winston Churchill\",\"text\":\"We make a living by what we get, but we make a life by what we give.\"},{\"author\":\"Winston Churchill\",\"text\":\"Continuous effort, not strength or intelligence is the key to unlocking our potential.\"},{\"author\":\"Winston Churchill\",\"text\":\"Continuous effort - not strength or intelligence - is the key to unlocking our potential.\"},{\"author\":\"Wit\",\"text\":\"We choose our destiny in the way we treat others.\"},{\"author\":\"Wolfgang Amadeus Mozart\",\"text\":\"Neither a lofty degree of intelligence nor imagination nor both together go to the making of genius. Love, love, love, that is the soul of genius.\"},{\"author\":\"Woody Guthrie\",\"text\":\"Take it easy, but take it.\"},{\"author\":\"Woody Guthrie\",\"text\":\"Take it easy but take it.\"},{\"author\":\"Woody Guthrie\",\"text\":\"Take it easy - but take it.\"},{\"author\":\"Ymber Delecto\",\"text\":\"The time you think you're missing, misses you too.\"},{\"author\":\"Yoda\",\"text\":\"Do, or do not. There is no try.\"},{\"author\":\"Yogi Berra\",\"text\":\"You can observe a lot just by watching.\"},{\"author\":\"Yogi Berra\",\"text\":\"Life is a learning experience, only if you learn.\"},{\"author\":\"Yogi Berra\",\"text\":\"You got to be careful if you don't know where you're going, because you might not get there.\"},{\"author\":\"Zadok Rabinowitz\",\"text\":\"A man's dreams are an index to his greatness.\"},{\"author\":\"Zig Ziglar\",\"text\":\"Positive thinking will let you do everything better than negative thinking will.\"},{\"author\":\"Zig Ziglar\",\"text\":\"You are the only person on Earth who can use your ability.\"},{\"author\":\"Zig Ziglar\",\"text\":\"You are the only person on earth who can use your ability.\"},{\"author\":\"Zig Ziglar\",\"text\":\"Your attitude, not your aptitude, will determine your altitude.\"},{\"author\":\"Zig Ziglar\",\"text\":\"Remember that failure is an event, not a person.\"},{\"author\":\"Ziggy\",\"text\":\"You can complain because roses have thorns, or you can rejoice because thorns have roses.\"}]");
      /***/
    },

    /***/
    "fmTG":
    /*!*****************************************!*\
      !*** ./src/app/quote/services/index.ts ***!
      \*****************************************/

    /*! exports provided: QUOTESY, QuoteService */

    /***/
    function fmTG(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _quote_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./quote.service */
      "3jHS");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "QUOTESY", function () {
        return _quote_service__WEBPACK_IMPORTED_MODULE_0__["QUOTESY"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "QuoteService", function () {
        return _quote_service__WEBPACK_IMPORTED_MODULE_0__["QuoteService"];
      });
      /***/

    },

    /***/
    "oHDg":
    /*!*******************************************!*\
      !*** ./node_modules/quotesy/lib/index.js ***!
      \*******************************************/

    /*! no static exports found */

    /***/
    function oHDg(module, exports, __webpack_require__) {
      var quotes = __webpack_require__(
      /*! ../quotes.json */
      "f5uD");
      /**
       * `parse_json` returns and Array of quote Objects.
       */


      function parse_json() {
        return quotes;
      }
      /**
       * `random` returns a random quote
       * returns Object - a random quote from the list
       */


      function random() {
        return quotes[Math.floor(Math.random() * quotes.length)];
      }
      /**
       * `random_by_tag` returns a random quote for a specific tag
       * returns Object - a random quote from the list with the desired tag
       */


      function random_by_tag(tag) {
        var q_by_tag = quotes.filter(function (q) {
          return q.text.includes(tag) || q.tags && q.tags.includes(tag);
        });
        return q_by_tag[Math.floor(Math.random() * q_by_tag.length)];
      }

      module.exports = {
        parse_json: parse_json,
        random: random,
        random_by_tag: random_by_tag
      };
      /***/
    },

    /***/
    "trG8":
    /*!*******************************************!*\
      !*** ./src/app/quote/components/index.ts ***!
      \*******************************************/

    /*! exports provided: QuoteComponent, QuoteContainerComponent, QuoteShareModalComponent, QuotePreviewComponent, ShareFormComponent */

    /***/
    function trG8(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _quote_quote_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./quote/quote.component */
      "Lw4S");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "QuoteComponent", function () {
        return _quote_quote_component__WEBPACK_IMPORTED_MODULE_0__["QuoteComponent"];
      });
      /* harmony import */


      var _quote_container_quote_container_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./quote-container/quote-container.component */
      "I6y0");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "QuoteContainerComponent", function () {
        return _quote_container_quote_container_component__WEBPACK_IMPORTED_MODULE_1__["QuoteContainerComponent"];
      });
      /* harmony import */


      var _quote_share_modal_quote_share_modal_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./quote-share-modal/quote-share-modal.component */
      "OWr9");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "QuoteShareModalComponent", function () {
        return _quote_share_modal_quote_share_modal_component__WEBPACK_IMPORTED_MODULE_2__["QuoteShareModalComponent"];
      });
      /* harmony import */


      var _quote_preview_quote_preview_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./quote-preview/quote-preview.component */
      "6U+y");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "QuotePreviewComponent", function () {
        return _quote_preview_quote_preview_component__WEBPACK_IMPORTED_MODULE_3__["QuotePreviewComponent"];
      });
      /* harmony import */


      var _share_form_share_form_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./share-form/share-form.component */
      "VgV8");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "ShareFormComponent", function () {
        return _share_form_share_form_component__WEBPACK_IMPORTED_MODULE_4__["ShareFormComponent"];
      });
      /***/

    },

    /***/
    "yHeB":
    /*!*************************************************!*\
      !*** ./src/app/quote/components/view.models.ts ***!
      \*************************************************/

    /*! exports provided: ModalIds */

    /***/
    function yHeB(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ModalIds", function () {
        return ModalIds;
      });

      var ModalIds;

      (function (ModalIds) {
        ModalIds["quoteShare"] = "quoteShare";
      })(ModalIds || (ModalIds = {}));
      /***/

    }
  }]);
})();
//# sourceMappingURL=quote-quote-module-es5.js.map