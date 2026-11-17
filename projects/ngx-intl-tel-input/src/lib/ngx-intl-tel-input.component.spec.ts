import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';

import { NgxIntlTelInputComponent } from './ngx-intl-tel-input.component';
import { CountryCode } from './data/country-code';
import { NativeElementInjectorDirective } from './directives/native-element-injector.directive';

describe('NgxIntlTelInputComponent', () => {
  let component: NgxIntlTelInputComponent;
  let fixture: ComponentFixture<NgxIntlTelInputComponent>;

  beforeEach((() => {
    TestBed.configureTestingModule({
      declarations: [NgxIntlTelInputComponent, NativeElementInjectorDirective],
      imports: [FormsModule, ReactiveFormsModule, BsDropdownModule.forRoot(), NoopAnimationsModule],
      providers: [CountryCode],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxIntlTelInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('auto country select for a shared dial code', () => {
    const typeNumber = (phoneNumber: string) => {
      component.phoneNumber = phoneNumber;
      component.onPhoneNumberChange();
    };

    it('selects Russia for a Russian +7 number', () => {
      typeNumber('+79161234567');
      expect(component.selectedCountry.iso2).toBe('ru');
    });

    it('selects Kazakhstan for a Kazakh +7 number', () => {
      typeNumber('+77012345678');
      expect(component.selectedCountry.iso2).toBe('kz');
    });

    it('selects the main country by priority while the number is incomplete', () => {
      typeNumber('+791');
      expect(component.selectedCountry.iso2).toBe('ru');
    });

    it('keeps the selected country with the same dial code while the number is incomplete', () => {
      component.setSelectedCountry(component.allCountries.find(c => c.iso2 === 'kz')!);
      typeNumber('+77');
      expect(component.selectedCountry.iso2).toBe('kz');
    });
  });
});
