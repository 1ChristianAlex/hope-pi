import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WhatHappenedPage } from './what-happened.page';

describe('WhatHappenedPage', () => {
  let component: WhatHappenedPage;
  let fixture: ComponentFixture<WhatHappenedPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WhatHappenedPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WhatHappenedPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
