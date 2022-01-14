function cook(n, o1, o2, o3, o4, o5) {
    let num = Number(n);
    let commands = [o1, o2, o3, o4, o5];

    function chop() {
        return num / 2;
    }
    function dice() {
        return Math.sqrt(num);
    } 
    function spice() {
        return num + 1;
    }
    function bake() {
        return num * 3;
    }
    function fillet() {
        return num * 0.8;
    }
    for(let i = 0; i < commands.length; i++) {
        switch(commands[i]) {
            case 'chop':
                num = chop(num);
                break;
            case 'dice':
                num = dice(num);
                break;
            case 'spice':
                num = spice(num);
                break;
            case 'bake':
                num = bake(num);
                break;
            case 'fillet':
                num = fillet(num).toFixed(1);
                break;
        }
        console.log(num);
    }
}
cook('9', 'dice', 'spice', 'chop', 'bake', 'fillet');