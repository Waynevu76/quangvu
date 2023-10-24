
function sum_to_n_a(n: number): number {
    //functional complexity: O(1)
    if (n <= 0) {
        return 0;
    } else {
        return n * (n + 1) / 2;
    }
}

function sum_to_n_b(n: number): number {
    //functional complexity: O(n) or O(1)
    let res: number;
    if (n == 1) {
        return 1;
    } else {
        res = n + sum_to_n_b(n - 1);
    }
    return res;
}

function sum_to_n_c(n: number): number {
    //functional complexity: O(n)
    let res: number = 0;
    for (let i = 1; i <= n; i++) {
        res += i;
    }
    return res;
}
