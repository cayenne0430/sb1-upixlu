import React, { useState } from 'react';
import { Search, SlidersHorizontal } from 'lucide-react';
import CampaignCard from '../components/CampaignCard';

const genres = [
  'ビューティー',
  'ファッション',
  'フード',
  'テクノロジー',
  'ライフスタイル',
  'トラベル',
  'フィットネス',
  'エンタメ'
] as const;

const sortOptions = [
  { value: 'latest', label: '新着順' },
  { value: 'deadline', label: '締切が近い順' },
  { value: 'budget-high', label: '報酬が高い順' },
  { value: 'budget-low', label: '報酬が低い順' }
] as const;

interface Campaign {
  id: number;
  company: string;
  title: string;
  budget: string;
  platform: string;
  followers: string;
  deadline: string;
  image: string;
  genre: typeof genres[number];
}

const campaigns: Campaign[] = [
  {
    id: 1,
    company: "Beauty Co.",
    title: "春の新作コスメPRキャンペーン",
    budget: "¥50,000 - ¥100,000",
    platform: "Instagram",
    followers: "5,000+",
    deadline: "2024-04-30",
    image: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&q=80&w=500",
    genre: "ビューティー"
  },
  {
    id: 2,
    company: "Fitness Lab",
    title: "プロテインドリンク新商品PR",
    budget: "¥30,000 - ¥80,000",
    platform: "TikTok",
    followers: "10,000+",
    deadline: "2024-04-15",
    image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&q=80&w=500",
    genre: "フィットネス"
  },
  {
    id: 3,
    company: "Tech Gear",
    title: "ワイヤレスイヤホンレビュー募集",
    budget: "¥40,000 - ¥90,000",
    platform: "YouTube",
    followers: "8,000+",
    deadline: "2024-04-20",
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&q=80&w=500",
    genre: "テクノロジー"
  }
];

const CampaignsPage = () => {
  const [selectedGenres, setSelectedGenres] = useState<Set<string>>(new Set());
  const [sortBy, setSortBy] = useState('latest');
  const [searchQuery, setSearchQuery] = useState('');
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  const toggleGenre = (genre: string) => {
    const newGenres = new Set(selectedGenres);
    if (newGenres.has(genre)) {
      newGenres.delete(genre);
    } else {
      newGenres.add(genre);
    }
    setSelectedGenres(newGenres);
  };

  const filteredCampaigns = campaigns
    .filter(campaign => {
      const matchesGenre = selectedGenres.size === 0 || selectedGenres.has(campaign.genre);
      const matchesSearch = campaign.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          campaign.company.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesGenre && matchesSearch;
    })
    .sort((a, b) => {
      switch (sortBy) {
        case 'deadline':
          return new Date(a.deadline).getTime() - new Date(b.deadline).getTime();
        case 'budget-high':
          return parseInt(b.budget.replace(/[^0-9]/g, '')) - parseInt(a.budget.replace(/[^0-9]/g, ''));
        case 'budget-low':
          return parseInt(a.budget.replace(/[^0-9]/g, '')) - parseInt(b.budget.replace(/[^0-9]/g, ''));
        default:
          return b.id - a.id;
      }
    });

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-4">案件を探す</h1>
          
          {/* Search and Filter Controls */}
          <div className="flex flex-col md:flex-row gap-4 mb-6">
            <div className="relative flex-1">
              <input
                type="text"
                placeholder="キーワードで検索"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-purple-500 focus:border-purple-500"
              />
              <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
            </div>
            
            <div className="flex gap-4">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-purple-500 focus:border-purple-500 bg-white"
              >
                {sortOptions.map(option => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
              
              <button
                onClick={() => setIsFilterOpen(!isFilterOpen)}
                className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50"
              >
                <SlidersHorizontal className="h-5 w-5" />
                フィルター
              </button>
            </div>
          </div>

          {/* Genre Filter */}
          {isFilterOpen && (
            <div className="bg-white p-4 rounded-lg shadow-sm mb-6">
              <h3 className="font-semibold mb-3">ジャンル</h3>
              <div className="flex flex-wrap gap-2">
                {genres.map(genre => (
                  <button
                    key={genre}
                    onClick={() => toggleGenre(genre)}
                    className={`px-4 py-2 rounded-full text-sm ${
                      selectedGenres.has(genre)
                        ? 'bg-purple-600 text-white'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    {genre}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Campaign Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {filteredCampaigns.map(campaign => (
            <CampaignCard key={campaign.id} campaign={campaign} />
          ))}
        </div>

        {filteredCampaigns.length === 0 && (
          <div className="text-center py-12 text-gray-500">
            条件に一致する案件が見つかりませんでした。
          </div>
        )}
      </div>
    </div>
  );
};

export default CampaignsPage;