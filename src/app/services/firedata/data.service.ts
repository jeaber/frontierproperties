import { Injectable, Inject } from '@angular/core';
import { AngularFire, FirebaseObjectObservable, FirebaseApp } from 'angularfire2';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class FireData {

	private _pinecityData: FirebaseObjectObservable<any[]>;
	private _moraData: FirebaseObjectObservable<any[]>;
	private _storage: any;
	private _pinecityData$: BehaviorSubject<any>;
	private _moraData$: BehaviorSubject<any>;
	// private _panelOpened = new BehaviorSubject<any>(false);;

	constructor(public af: AngularFire) {
		const context = this;
		this._pinecityData$ = new BehaviorSubject<any>(false);
		this._moraData$ = new BehaviorSubject<any>(false);
		
		this._pinecityData = af.database.object('/pinecity');
		this._moraData = af.database.object('/mora')
		
		this._pinecityData.subscribe((data) => {
			context._pinecityData$.next(data);
		});
		this._moraData.subscribe((data) => {
			context._moraData$.next(data);
		});
	}
	public get pinecity() {
		return this._pinecityData;
	}
	public get pinecitySubject() {
		return this._pinecityData$.asObservable();
	}
	public get mora() {
		return this._moraData;
	}
	public get moraSubject() {
		return this._moraData$.asObservable();
	}
	public get storage() {
		return this._storage
	}
}