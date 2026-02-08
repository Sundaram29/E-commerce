import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import { assets } from '../assets/assets'
import Title from '../components/Title'
import ProductItem from '../components/ProductItem'

const Collection = () => {
  const { products, search, showSearch } = useContext(ShopContext)

  const [showFilter, setShowFilter] = useState(false)
  const [openMen, setOpenMen] = useState(false)
  const [openWomen, setOpenWomen] = useState(false)
  const [openKids, setOpenKids] = useState(false)

  const [filterProducts, setFilterProducts] = useState([])
  const [category, setCategory] = useState([])
  const [subCategory, setSubCategory] = useState([])
  const [sortType, setSortType] = useState('relevant')

  const togglecategory = (e) => {
    if (category.includes(e.target.value)) {
      setCategory(prev => prev.filter(item => item !== e.target.value))
    } else {
      setCategory(prev => [...prev, e.target.value])
    }
  }

  const toggleSubcategory = (e) => {
    if (subCategory.includes(e.target.value)) {
      setSubCategory(prev => prev.filter(item => item !== e.target.value))
    } else {
      setSubCategory(prev => [...prev, e.target.value])
    }
  }

  const applyFilter = () => {
    let productsCopy = products.slice()

    if (showSearch && search) {
      productsCopy = productsCopy.filter(item =>
        item.name.toLowerCase().includes(search.toLowerCase())
      )
    }

    if (category.length > 0) {
      productsCopy = productsCopy.filter(item =>
        category.includes(item.category)
      )
    }

    if (subCategory.length > 0) {
      productsCopy = productsCopy.filter(item =>
        subCategory.includes(item.subCategory)
      )
    }

    setFilterProducts(productsCopy)
  }

  const sortProduct = () => {
    let fpCopy = filterProducts.slice()

    switch (sortType) {
      case 'low-high':
        setFilterProducts(fpCopy.sort((a, b) => a.price - b.price))
        break
      case 'high-low':
        setFilterProducts(fpCopy.sort((a, b) => b.price - a.price))
        break
      default:
        applyFilter()
        break
    }
  }

  useEffect(() => {
    applyFilter()
  }, [category, subCategory, search, showSearch, products])

  useEffect(() => {
    sortProduct()
  }, [sortType])

  return (
    <div className="flex flex-col sm:flex-row gap-8 pt-10 border-t">

      {/* LEFT FILTER */}
      <div className="min-w-64 space-y-6">

        <p
          onClick={() => setShowFilter(!showFilter)}
          className="text-xl font-semibold flex items-center gap-2 cursor-pointer"
        >
          FILTERS
          <img
            src={assets.dropdown_icon}
            className={`h-3 sm:hidden transition-transform ${showFilter ? 'rotate-90' : ''}`}
            alt=""
          />
        </p>

        {/* CATEGORIES */}
        <div className={`bg-white border border-gray-200 rounded-xl shadow-sm px-5 py-5 ${showFilter ? '' : 'hidden'} sm:block`}>
          <p className="text-sm font-semibold text-gray-800 mb-4 tracking-wide">
            CATEGORIES
          </p>

          {/* MEN */}
          <div className="mb-4">
            <div onClick={() => setOpenMen(!openMen)} className="flex items-center gap-3 cursor-pointer group">
              <input type="checkbox" value="Men" onChange={togglecategory} className="accent-black" />
              <span className="text-sm font-medium text-gray-700 group-hover:text-black">Men</span>
              <span className="ml-auto text-lg text-gray-400">{openMen ? '−' : '+'}</span>
            </div>

            <div className={`${openMen ? 'block' : 'hidden'} ml-7 mt-3 space-y-2`}>
              <label className="flex items-center gap-2 text-sm text-gray-600">
                <input type="checkbox" value="Topwear" onChange={toggleSubcategory} disabled={!category.includes('Men')} className="accent-black disabled:opacity-40" />
                Topwear
              </label>
              <label className="flex items-center gap-2 text-sm text-gray-600">
                <input type="checkbox" value="Bottomwear" onChange={toggleSubcategory} disabled={!category.includes('Men')} className="accent-black disabled:opacity-40" />
                Bottomwear
              </label>
              <label className="flex items-center gap-2 text-sm text-gray-600">
                <input type="checkbox" value="Winterwear" onChange={toggleSubcategory} disabled={!category.includes('Men')} className="accent-black disabled:opacity-40" />
                Winterwear
              </label>
            </div>
          </div>

          {/* WOMEN */}
          <div className="mb-4">
            <div onClick={() => setOpenWomen(!openWomen)} className="flex items-center gap-3 cursor-pointer group">
              <input type="checkbox" value="Women" onChange={togglecategory} className="accent-black" />
              <span className="text-sm font-medium text-gray-700 group-hover:text-black">Women</span>
              <span className="ml-auto text-lg text-gray-400">{openWomen ? '−' : '+'}</span>
            </div>

            <div className={`${openWomen ? 'block' : 'hidden'} ml-7 mt-3 space-y-2`}>
              <label className="flex items-center gap-2 text-sm text-gray-600">
                <input type="checkbox" value="Topwear" onChange={toggleSubcategory} disabled={!category.includes('Women')} className="accent-black disabled:opacity-40" />
                Topwear
              </label>
              <label className="flex items-center gap-2 text-sm text-gray-600">
                <input type="checkbox" value="Bottomwear" onChange={toggleSubcategory} disabled={!category.includes('Women')} className="accent-black disabled:opacity-40" />
                Bottomwear
              </label>
              <label className="flex items-center gap-2 text-sm text-gray-600">
                <input type="checkbox" value="CuteAndTrendy" onChange={toggleSubcategory} disabled={!category.includes('Women')} className="accent-black disabled:opacity-40" />
                Cute & Trendy
              </label>
            </div>
          </div>

          {/* KIDS */}
          <div>
            <div onClick={() => setOpenKids(!openKids)} className="flex items-center gap-3 cursor-pointer group">
              <input type="checkbox" value="Kids" onChange={togglecategory} className="accent-black" />
              <span className="text-sm font-medium text-gray-700 group-hover:text-black">Kids</span>
              <span className="ml-auto text-lg text-gray-400">{openKids ? '−' : '+'}</span>
            </div>

            <div className={`${openKids ? 'block' : 'hidden'} ml-7 mt-3 space-y-2`}>
              <label className="flex items-center gap-2 text-sm text-gray-600">
                <input type="checkbox" value="Topwear" onChange={toggleSubcategory} disabled={!category.includes('Kids')} className="accent-black disabled:opacity-40" />
                Topwear
              </label>
              <label className="flex items-center gap-2 text-sm text-gray-600">
                <input type="checkbox" value="Bottomwear" onChange={toggleSubcategory} disabled={!category.includes('Kids')} className="accent-black disabled:opacity-40" />
                Bottomwear
              </label>
              <label className="flex items-center gap-2 text-sm text-gray-600">
                <input type="checkbox" value="School & Casual Vibes" onChange={toggleSubcategory} disabled={!category.includes('Kids')} className="accent-black disabled:opacity-40" />
                School & Casual Vibes
              </label>
              <label className="flex items-center gap-2 text-sm text-gray-600">
                <input type="checkbox" value="Mini Mavericks" onChange={toggleSubcategory} disabled={!category.includes('Kids')} className="accent-black disabled:opacity-40" />
                Mini Mavericks
              </label>
            </div>
          </div>
        </div>

        {/* LATEST COLLECTIONS */}
        <div className={`bg-white border border-gray-200 rounded-xl shadow-sm px-5 py-5 ${showFilter ? '' : 'hidden'} sm:block`}>
          <p className="text-sm font-semibold text-gray-800 mb-4 tracking-wide">
            LATEST COLLECTIONS
          </p>

          <div className="space-y-3 text-sm text-gray-600">
            <label className="flex items-center gap-3 cursor-pointer hover:text-black">
              <input type="checkbox" className="accent-black" />
              New Arrivals
            </label>
            <label className="flex items-center gap-3 cursor-pointer hover:text-black">
              <input type="checkbox" className="accent-black" />
              Festive Favourites
            </label>
            <label className="flex items-center gap-3 cursor-pointer hover:text-black">
              <input type="checkbox" className="accent-black" />
              Wedding Specials
            </label>
          </div>
        </div>
      </div>

      {/* RIGHT SIDE */}
      <div className="flex-1">
        <div className="flex justify-between items-center mb-6">
          <Title text1="ALL" text2="COLLECTIONS" />
          <select onChange={(e) => setSortType(e.target.value)} className="border border-gray-300 text-sm px-3 py-1">
            <option value="relevant">Sort by: Relevant</option>
            <option value="low-high">Sort by: Low to High</option>
            <option value="high-low">Sort by: High to Low</option>
          </select>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 gap-y-6">
          {filterProducts.map((item, index) => (
            <ProductItem
              key={index}
              name={item.name}
              id={item._id}
              price={item.price}
              image={item.image}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Collection
