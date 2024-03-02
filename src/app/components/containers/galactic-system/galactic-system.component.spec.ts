import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GalacticSystemComponent } from './galactic-system.component';

describe('GalacticSystemComponent', () => {
  let component: GalacticSystemComponent;
  let fixture: ComponentFixture<GalacticSystemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GalacticSystemComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GalacticSystemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
