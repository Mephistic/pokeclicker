class Achievement {
    constructor(
        public name: string,
        public description: string,
        public property: Requirement,
        public bonus: number,
        public region: GameConstants.Region,
        public unlocked = false
    ) {}

    public check() {
        if (this.isCompleted()) {
            Notifier.notify({
                title: `[Achievement] ${this.name}`,
                message: this.description,
                type: NotificationConstants.NotificationOption.warning,
                timeout: 1e4,
                sound: NotificationConstants.NotificationSound.achievement,
            });
            App.game.logbook.newLog(
                LogBookTypes.ACHIEVEMENT,
                `Earned "${this.name}".`);
            player.achievementsCompleted[this.name] = true;
            this.unlocked = true;
        }
    }

    public getProgress() {
        return this.isCompleted() ? this.property.requiredValue : this.property.getProgress();
    }

    public getProgressPercentage() {
        return this.isCompleted() ? '100.0' : this.property.getProgressPercentage();
    }

    public isCompleted: KnockoutComputed<boolean> = ko.pureComputed(() => {
        return this.unlocked || this.property.isCompleted();
    })

    public getBonus() {
        const max = AchievementHandler.maxBonus()[this.region] ;
        return (this.bonus / max * 100).toFixed(2);
    }

    public getProgressText: KnockoutComputed<string> = ko.pureComputed(() => {
        return `${this.getProgress()}/${this.property.requiredValue}`;
    })
}
