import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

//Pages
import Home from './pages/Home.jsx'
import Movie from './pages/Movie.jsx'
import Search from './pages/Search.jsx'

//Css
import './index.css'

//Main File
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<App />}>
        <Route path="/" element={<Home/>} />
        <Route path="/movie/:id" element={<Movie/>} />
        <Route path="/search" element={<Search/>} />
          {/* <Route path="/" element={<h1>Home</h1>} />
          <Route path="/about" element={<h1>About</h1>} />
          <Route path="/movies" element={<h1>Movies</h1>} />
          <Route path="/movies/:id" element={<h1>Movie Details</h1>} />
          <Route path="*" element={<h1>Page Not Found</h1>} />
          <Route path="/contact" element={<h1>Contact</h1>} />
          <Route path="/login" element={<h1>Login</h1>} />
          <Route path="/register" element={<h1>Register</h1>} />
          <Route path="/profile" element={<h1>Profile</h1>} />
          <Route path="/profile/edit" element={<h1>Edit Profile</h1>} />
          <Route path="/profile/settings" element={<h1>Profile Settings</h1>} />
          <Route path="/profile/favorites" element={<h1>Favorites</h1>} />
          <Route path="/profile/history" element={<h1>History</h1>} />
          <Route path="/profile/wishlist" element={<h1>Wishlist</h1>} />
          <Route path="/profile/notifications" element={<h1>Notifications</h1>} />
          <Route path="/profile/subscriptions" element={<h1>Subscriptions</h1>} />
          <Route path="/profile/subscriptions/:id" element={<h1>Subscription Details</h1>} />
          <Route path="/profile/subscriptions/:id/edit" element={<h1>Edit Subscription</h1>} />
          <Route path="/profile/subscriptions/:id/delete" element={<h1>Delete Subscription</h1>} />
          <Route path="/profile/subscriptions/:id/renew" element={<h1>Renew Subscription</h1>} />
          <Route path="/profile/subscriptions/:id/cancel" element={<h1>Cancel Subscription</h1>} />
          <Route path="/profile/subscriptions/:id/upgrade" element={<h1>Upgrade Subscription</h1>} />
          <Route path="/profile/subscriptions/:id/downgrade" element={<h1>Downgrade Subscription</h1>} />
          <Route path="/profile/subscriptions/:id/transfer" element={<h1>Transfer Subscription</h1>} />
          <Route path="/profile/subscriptions/:id/renewal-history" element={<h1>Renewal History</h1>} />
          <Route path="/profile/subscriptions/:id/payment-methods" element={<h1>Payment Methods</h1>} />
          <Route path="/profile/subscriptions/:id/invoices" element={<h1>Invoices</h1>} />
          <Route path="/profile/subscriptions/:id/transactions" element={<h1>Transactions</h1>} />
          <Route path="/profile/subscriptions/:id/transaction-history" element={<h1>Transaction History</h1>} />
          <Route path="/profile/subscriptions/:id/transaction-details" element={<h1>Transaction Details</h1>} />
          <Route path="/profile/subscriptions/:id/transaction-receipt" element={<h1>Transaction Receipt</h1>} />
          <Route path="/profile/subscriptions/:id/transaction-refund" element={<h1>Transaction Refund</h1>} />
          <Route path="/profile/subscriptions/:id/transaction-dispute" element={<h1>Transaction Dispute</h1>} />
          <Route path="/profile/subscriptions/:id/transaction-resolution" element={<h1>Transaction Resolution</h1>} />
          <Route path="/profile/subscriptions/:id/transaction-cancellation" element={<h1>Transaction Cancellation</h1>} />     */}
        </Route>
      </Routes>
    </BrowserRouter>

  </StrictMode>,
)
