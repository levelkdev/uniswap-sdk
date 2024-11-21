import { Currency } from '../../currency'
import { CurrencyAmount, Percent } from '../../fractions'
import { Trade } from '../interfaces/trade'

export interface EcoRouterResults {
  trades: Trade[]
  errors: any[]
}

export interface EcoRouterHookResults extends EcoRouterResults {
  loading: boolean
}

export interface EcoRouterHookCommonParams {
  /**
   * The user address to use for the trade.
   */
  user: string
  /**
   * Receiver address
   */
  receiver?: string
  /**
   * Allowed percentage
   */
  maximumSlippage: Percent
}

export interface EcoRouterBestExactInParams extends EcoRouterHookCommonParams {
  currencyAmountIn: CurrencyAmount
  currencyOut: Currency
}

export interface EcoRouterBestExactOutParams extends EcoRouterHookCommonParams {
  currencyAmountOut: CurrencyAmount
  currencyIn: Currency
}

export interface EcoRouterSourceOptionsParams {
  uniswapV2: {
    useMultihops?: boolean
  }
}
