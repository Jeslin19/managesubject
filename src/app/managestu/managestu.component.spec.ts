import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagestuComponent } from './managestu.component';

describe('ManagestuComponent', () => {
  let component: ManagestuComponent;
  let fixture: ComponentFixture<ManagestuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ManagestuComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ManagestuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
