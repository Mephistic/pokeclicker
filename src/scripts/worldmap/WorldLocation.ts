abstract class WorldLocation {
    abstract requirements: WorldRequirement[];

    canAccess(): boolean {
        return this.requirements.every(requirement => {
            return requirement.isCompleted();
        });
    }

    lockedReason() {
        let res = '';
        this.requirements.forEach(requirement => {
            if (!requirement.isCompleted()) {
                res += `${requirement.lockedReason()}\n`;
            }
        });
        return res;
    }
}