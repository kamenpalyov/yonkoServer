import { MyContext } from './../types';
import { Stock } from './../entities/Stock';
import { Arg, Ctx, Int, Mutation, Query, Resolver } from "type-graphql";

@Resolver()
export class StockResolver {
    @Query(() => [Stock]) 
        stocks(@Ctx() {em}: MyContext): Promise<Stock[]>{
            
            return em.find(Stock, {});
        } 
    @Mutation(()=> Stock)
        async createStock(
            @Arg("name", ()=> String) name: string,
            @Arg("warehouse", ()=>Int) warehouse: number,
            @Ctx() {em}:MyContext
            ):Promise<Stock> {
                const createNewStock = em.create(Stock,{ name: name, warehouse: warehouse});
                await em.persistAndFlush(createNewStock)
                return createNewStock
            }
    }