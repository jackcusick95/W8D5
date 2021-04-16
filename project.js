class Clock {
    constructor() {
        const newDate = new Date();
        this.hours = newDate.getHours();
        this.mins = newDate.getMinutes();
        this.secs = newDate.getSeconds();

        this.printTime();


        setInterval(this._tick.bind(this), 1000);
    
       
        // 1. Create a Date object.
        // 2. Store the hours, minutes, and seconds.
        // 3. Call printTime.
        // 4. Schedule the tick at 1 second intervals.
    }

    printTime() {
        console.log(`${this.hours}:${this.mins}:${this.secs}`)
        // Format the time in HH:MM:SS
        // Use console.log to print it.
    }

    _tick() {
        debugger
        this.secs += 1;
        // 1. Increment the time by one second.
        this.printTime();


        // 2. Call printTime.
    }
}

const clock = new Clock();
// setInterval(clock._tick, 1000);
// clock.printTime();