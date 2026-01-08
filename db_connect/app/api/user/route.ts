// app/api/users/route.js

import User from "@/app/model/User";
import dbConnect from "@/lib/dbConnec";
import { NextResponse } from "next/server";


export async function GET() {
  await dbConnect();
  const users = await User.find({});
  return NextResponse.json( users );
}