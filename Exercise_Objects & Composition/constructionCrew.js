function isWorkerDizzy(object) {
    if (object.dizziness) {
        let required = 0.1 * object.weight * object.experience;
        object.levelOfHydrated += required;
        object.dizziness = false;
    }
    return object;
}
isWorkerDizzy(
    { weight: 80,
    experience: 1,
    levelOfHydrated: 0,
    dizziness: true });