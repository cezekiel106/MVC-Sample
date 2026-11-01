import { EventTarget } from 'cc';

export class GameEvent {
    private static _eventTarget: EventTarget = new EventTarget();

    /**
     * Register an event listener.
     * @param eventType The name of the event
     * @param callback The callback function when the event is triggered
     * @param target The target object (usually `this` in components for easy cleanup)
     */
    public static on(eventType: string | number, callback: (...args: any[]) => void, target?: any): void {
        this._eventTarget.on(eventType, callback, target);
    }

    /**
     * Register a one-time event listener. Automatically removes itself after firing once.
     */
    public static once(eventType: string | number, callback: (...args: any[]) => void, target?: any): void {
        this._eventTarget.once(eventType, callback, target);
    }

    /**
     * Remove an event listener.
     */
    public static off(eventType: string | number, callback?: (...args: any[]) => void, target?: any): void {
        this._eventTarget.off(eventType, callback, target);
    }

    /**
     * Trigger/Emit an event with optional arguments.
     */
    public static emit(eventType: string | number, ...args: any[]): void {
        this._eventTarget.emit(eventType, ...args);
    }

    /**
     * Remove all listeners associated with a specific target (useful in onDestroy).
     */
    public static targetOff(target: any): void {
        this._eventTarget.targetOff(target);
    }
}

