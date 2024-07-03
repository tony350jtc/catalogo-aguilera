import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TequenosComponent } from './tequenos.component';

describe('TequenosComponent', () => {
  let component: TequenosComponent;
  let fixture: ComponentFixture<TequenosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TequenosComponent]
    });
    fixture = TestBed.createComponent(TequenosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
