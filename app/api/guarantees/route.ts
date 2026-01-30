import { Guarantee } from '@/types/guarantees';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
  try {

    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/mock-api/guarantees.json`,
      { cache: 'no-store' } 
    );

    if (!res.ok) {
      throw new Error('Failed to fetch guarantees');
    }

    const data = await res.json();
    const guarantees: Guarantee[] = data ?? [];

    return NextResponse.json({
      success: true,
      data: {
        guarantees,
      },
    });
  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        message:
          error instanceof Error ? error.message : 'An error occurred',
      },
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest) {
  try {
    const reqBody = await request.json();

    const newGuarantee: Guarantee = {
      id: crypto.randomUUID(), 
      ...reqBody,
      disabled: false,
      status: 'Pending',
    };

    return NextResponse.json({
      success: true,
      data: {
        guarantee: newGuarantee,
      },
    });
  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        message:
          error instanceof Error ? error.message : 'An error occurred',
      },
      { status: 500 }
    );
  }
}
