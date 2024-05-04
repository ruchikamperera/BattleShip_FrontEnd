import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GameBoardComponent } from './game-board.component';
import { BattleShipService } from '../../services/battle-ship.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';


describe('GameBoardComponent', () => {
  let component: GameBoardComponent;
  let fixture: ComponentFixture<GameBoardComponent>;
  let battleShipServiceSpy: jasmine.SpyObj<BattleShipService>;

  beforeEach(async () => {
    const battleShipServiceSpyObj = jasmine.createSpyObj('BattleShipService', ['getData']);

    await TestBed.configureTestingModule({
      declarations: [GameBoardComponent],
      imports: [HttpClientTestingModule],
      providers: [
        { provide: BattleShipService}
      ]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GameBoardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    const service: BattleShipService = TestBed.inject(BattleShipService);
    expect(service).toBeTruthy();
    expect(component).toBeTruthy();
  });
});
