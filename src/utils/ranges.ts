export const makeRangeMapper = (
    oMin: number,
    oMax: number,
    nMin: number,
    nMax: number
) => {
    //range check
    if (oMin === oMax) {
        return undefined;
    }

    if (nMin === nMax) {
        return undefined;
    }

    //check reversed input range
    var reverseInput = false;
    let oldMin = Math.min(oMin, oMax);
    let oldMax = Math.max(oMin, oMax);
    if (oldMin !== oMin) {
        reverseInput = true;
    }

    //check reversed output range
    var reverseOutput = false;
    let newMin = Math.min(nMin, nMax);
    let newMax = Math.max(nMin, nMax);
    if (newMin !== nMin) {
        reverseOutput = true;
    }

    // Hot-rod the most common case.
    if (!reverseInput && !reverseOutput) {
        let dNew = newMax - newMin;
        let dOld = oldMax - oldMin;
        return (x: number) => {
            return ((x - oldMin) * dNew) / dOld + newMin;
        };
    }

    return (x: number) => {
        let portion;
        if (reverseInput) {
            portion = ((oldMax - x) * (newMax - newMin)) / (oldMax - oldMin);
        } else {
            portion = ((x - oldMin) * (newMax - newMin)) / (oldMax - oldMin);
        }
        let result;
        if (reverseOutput) {
            result = newMax - portion;
        } else {
            result = portion + newMin;
        }

        return result;
    };
};
