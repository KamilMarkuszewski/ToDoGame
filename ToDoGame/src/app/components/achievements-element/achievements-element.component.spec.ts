import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AchievementsElementComponent } from './achievements-element.component';

describe('AchievementsElementComponent', () => {
  let component: AchievementsElementComponent;
  let fixture: ComponentFixture<AchievementsElementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AchievementsElementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AchievementsElementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
