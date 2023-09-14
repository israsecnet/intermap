import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MapsvgComponent } from './mapsvg.component';

describe('MapsvgComponent', () => {
  let component: MapsvgComponent;
  let fixture: ComponentFixture<MapsvgComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MapsvgComponent]
    });
    fixture = TestBed.createComponent(MapsvgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
