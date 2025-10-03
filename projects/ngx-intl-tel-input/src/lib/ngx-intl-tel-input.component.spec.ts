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
});
