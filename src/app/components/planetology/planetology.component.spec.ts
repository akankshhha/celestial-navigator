import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanetologyComponent } from './planetology.component';

describe('PlanetologyComponent', () => {
  let component: PlanetologyComponent;
  let fixture: ComponentFixture<PlanetologyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PlanetologyComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PlanetologyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
