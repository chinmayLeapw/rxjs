import { Scheduler } from '../Scheduler';
import { Action } from './Action';
import { AsyncAction } from './AsyncAction';
import { TimerHandle } from './timerHandle';
export declare class AsyncScheduler extends Scheduler {
    actions: Array<AsyncAction<any>>;
    /**
     * A flag to indicate whether the Scheduler is currently executing a batch of
     * queued actions.
     * @internal
     */
    _active: boolean;
    /**
     * An internal ID used to track the latest asynchronous task such as those
     * coming from `setTimeout`, `setInterval`, `requestAnimationFrame`, and
     * others.
     * @internal
     */
    _scheduled: TimerHandle | undefined;
    constructor(SchedulerAction: typeof Action, now?: () => number);
    flush(action: AsyncAction<any>): void;
}
//# sourceMappingURL=AsyncScheduler.d.ts.map