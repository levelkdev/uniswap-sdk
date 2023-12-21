"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SWAPR_ALGEBRA_QUOTER_ABI = void 0;
exports.SWAPR_ALGEBRA_QUOTER_ABI = [
    {
        inputs: [
            {
                internalType: 'address',
                name: '_factory',
                type: 'address',
            },
            {
                internalType: 'address',
                name: '_WNativeToken',
                type: 'address',
            },
            {
                internalType: 'address',
                name: '_poolDeployer',
                type: 'address',
            },
        ],
        stateMutability: 'nonpayable',
        type: 'constructor',
    },
    {
        inputs: [],
        name: 'WNativeToken',
        outputs: [
            {
                internalType: 'address',
                name: '',
                type: 'address',
            },
        ],
        stateMutability: 'view',
        type: 'function',
    },
    {
        inputs: [],
        name: 'factory',
        outputs: [
            {
                internalType: 'address',
                name: '',
                type: 'address',
            },
        ],
        stateMutability: 'view',
        type: 'function',
    },
    {
        inputs: [
            {
                internalType: 'int256',
                name: 'amount0Delta',
                type: 'int256',
            },
            {
                internalType: 'int256',
                name: 'amount1Delta',
                type: 'int256',
            },
            {
                internalType: 'bytes',
                name: 'path',
                type: 'bytes',
            },
        ],
        name: 'AlgebraSwapCallback',
        outputs: [],
        stateMutability: 'view',
        type: 'function',
    },
    {
        inputs: [],
        name: 'poolDeployer',
        outputs: [
            {
                internalType: 'address',
                name: '',
                type: 'address',
            },
        ],
        stateMutability: 'view',
        type: 'function',
    },
    {
        inputs: [
            {
                internalType: 'bytes',
                name: 'path',
                type: 'bytes',
            },
            {
                internalType: 'uint256',
                name: 'amountIn',
                type: 'uint256',
            },
        ],
        name: 'quoteExactInput',
        outputs: [
            {
                internalType: 'uint256',
                name: 'amountOut',
                type: 'uint256',
            },
        ],
        stateMutability: 'nonpayable',
        type: 'function',
    },
    {
        inputs: [
            {
                internalType: 'address',
                name: 'tokenIn',
                type: 'address',
            },
            {
                internalType: 'address',
                name: 'tokenOut',
                type: 'address',
            },
            {
                internalType: 'uint256',
                name: 'amountIn',
                type: 'uint256',
            },
            {
                internalType: 'uint160',
                name: 'sqrtPriceLimitX96',
                type: 'uint160',
            },
        ],
        name: 'quoteExactInputSingle',
        outputs: [
            {
                internalType: 'uint256',
                name: 'amountOut',
                type: 'uint256',
            },
        ],
        stateMutability: 'nonpayable',
        type: 'function',
    },
    {
        inputs: [
            {
                internalType: 'bytes',
                name: 'path',
                type: 'bytes',
            },
            {
                internalType: 'uint256',
                name: 'amountOut',
                type: 'uint256',
            },
        ],
        name: 'quoteExactOutput',
        outputs: [
            {
                internalType: 'uint256',
                name: 'amountIn',
                type: 'uint256',
            },
        ],
        stateMutability: 'nonpayable',
        type: 'function',
    },
    {
        inputs: [
            {
                internalType: 'address',
                name: 'tokenIn',
                type: 'address',
            },
            {
                internalType: 'address',
                name: 'tokenOut',
                type: 'address',
            },
            {
                internalType: 'uint256',
                name: 'amountOut',
                type: 'uint256',
            },
            {
                internalType: 'uint160',
                name: 'sqrtPriceLimitX96',
                type: 'uint160',
            },
        ],
        name: 'quoteExactOutputSingle',
        outputs: [
            {
                internalType: 'uint256',
                name: 'amountIn',
                type: 'uint256',
            },
        ],
        stateMutability: 'nonpayable',
        type: 'function',
    },
];
//# sourceMappingURL=swapr-algebra-quoter.js.map