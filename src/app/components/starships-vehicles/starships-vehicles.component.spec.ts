import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StarshipsVehiclesComponent } from './starships-vehicles.component';

describe('StarshipsVehiclesComponent', () => {
  let component: StarshipsVehiclesComponent;
  let fixture: ComponentFixture<StarshipsVehiclesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StarshipsVehiclesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(StarshipsVehiclesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
