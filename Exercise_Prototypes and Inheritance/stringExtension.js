(function solve() {
    String.prototype.ensureStart = function(str) {
        if (!this.startsWith(str)) {
            return str.concat(this);
        } 
        return this.toString();
    }

    String.prototype.ensureEnd = function(str) {
        if (!this.endsWith(str)) {
            return this.concat(str);
        }
        return this.toString();
    }

    String.prototype.isEmpty = function() {
        if (this.length == 0) {
            return true;
        } 
        return false;
    }

    String.prototype.truncate = function(n) {
        if (n < 4) {
            return '.'.repeat(n);
        } 
        if (this.toString().length <= n) {
            return this.toString();
        }

        let lastSpace = this.toString().substring(0, n - 2).lastIndexOf(' ');

        if (lastSpace != -1) {
            return `${this.toString().substring(0, lastSpace)}...`;
        } else {
            return `${this.toString().substring(0, n - 3)}...`;
        }
    }

    String.format = function(str, ...params) {
        for (let i = 0; i < params.length; i++) {
            str = str.replace(`{${i}}`, params[i]);            
        }
        return str;
    }
})();