function score(dice) {
    let arr = [];
    let score = 0;
    dice.join("").split("").forEach(element => 
        arr[element] = (arr[element] || 0) + 1);
    
    for(let i = 0; i <= 6; i++) {
        if(arr[i] != undefined) {
            switch (i) {
                case 1:
                    if(arr[i] >= 3) {
                        score += 1000;
                        if((arr[i] - 3) > 0) score += (arr[i] - 3)
                         * 100;
                    } else {
                        score += arr[i] * 100;
                    }
                    break;
                case 2:
                    if(arr[i] >= 3) result += 200;

                    break;

                case 3:
                    if(arr[i] >= 3) result += 300;

                    break;

                case 4:
                    if(arr[i] >= 3) result += 400;

                    break;
            }
        }
    }
}    