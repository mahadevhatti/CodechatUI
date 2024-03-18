import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PromptResponseComponent } from './prompt-response.component';

describe('PromptResponseComponent', () => {
  let component: PromptResponseComponent;
  let fixture: ComponentFixture<PromptResponseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PromptResponseComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PromptResponseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
