import { DragDropModule } from '@angular/cdk/drag-drop';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { NewFileComponent } from './new-file.component';

describe('NewFileComponent', () => {
  let component: NewFileComponent;
  let fixture: ComponentFixture<NewFileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewFileComponent ],
      imports: [
        NoopAnimationsModule,
        DragDropModule,
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewFileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
