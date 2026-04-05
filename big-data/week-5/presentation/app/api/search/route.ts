import { NextRequest, NextResponse } from 'next/server';
import { searchCVEs, SearchQuery, getCVEStatistics } from '@/app/lib/searchEngine';

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;

  // Extract query parameters
  const query: SearchQuery = {
    library: searchParams.get('library') || undefined,
    severity: (searchParams.get('severity') as any) || undefined,
    cwe: searchParams.get('cwe') || undefined,
    cveId: searchParams.get('cveId') || undefined,
  };

  // If no query parameters, return stats
  if (!query.library && !query.severity && !query.cwe && !query.cveId) {
    const stats = getCVEStatistics();
    return NextResponse.json(stats);
  }

  // Perform search
  const results = searchCVEs(query);

  return NextResponse.json(results);
}
