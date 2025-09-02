import { NextResponse } from 'next/server';

export async function GET() {
  try {
    const lat = 4.570868;
    const lon = -74.297333;

    const response = await fetch(`https://rest.isric.org/soilgrids/v2.0/properties/query?lon=${lon}&lat=${lat}`);

    if (!response.ok) {
      throw new Error('Error al obtener datos de SoilGrids');
    }

    const data = await response.json();
    return NextResponse.json(data);
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
