import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PessoaCrudComponent } from './pessoa-crud.component';

describe('PessoaCrudComponent', () => {
  let component: PessoaCrudComponent;
  let fixture: ComponentFixture<PessoaCrudComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PessoaCrudComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PessoaCrudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
