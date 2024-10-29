import React from 'react';
import { Link } from 'react-router-dom';
import { Search, TrendingUp, Shield, ArrowRight } from 'lucide-react';

const HomePage = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-purple-700 to-purple-900 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              インフルエンサーの力で<br />ブランドの価値を高めよう
            </h1>
            <p className="text-xl mb-8 text-purple-100">
              あなたの影響力を活かして、魅力的なブランドと協力しませんか？
              多彩な案件であなたの可能性を広げましょう。
            </p>
            <Link
              to="/campaigns"
              className="inline-flex items-center bg-white text-purple-700 px-8 py-3 rounded-lg font-semibold hover:bg-purple-50 transition"
            >
              案件を探す
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                <Search className="w-6 h-6 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">簡単案件検索</h3>
              <p className="text-gray-600">
                ジャンルや予算で絞り込んで、あなたに最適な案件を見つけることができます。
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                <TrendingUp className="w-6 h-6 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">成長機会</h3>
              <p className="text-gray-600">
                有名ブランドとの協業で、フォロワー数の増加とスキルアップを実現できます。
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                <Shield className="w-6 h-6 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">安心の取引</h3>
              <p className="text-gray-600">
                契約から報酬支払いまで、すべてのプロセスを安全にサポートします。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">今すぐ始めましょう</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            登録は無料です。魅力的な案件があなたを待っています。
          </p>
          <div className="flex justify-center gap-4">
            <Link
              to="/register"
              className="bg-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-purple-500 transition"
            >
              無料会員登録
            </Link>
            <Link
              to="/campaigns"
              className="bg-gray-100 text-gray-700 px-8 py-3 rounded-lg font-semibold hover:bg-gray-200 transition"
            >
              案件を見る
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;