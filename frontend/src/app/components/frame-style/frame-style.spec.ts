import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FrameStyle } from './frame-style';

describe('FrameStyle', () => {
  let component: FrameStyle;
  let fixture: ComponentFixture<FrameStyle>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FrameStyle]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FrameStyle);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
