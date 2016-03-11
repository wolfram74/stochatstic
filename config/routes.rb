Rails.application.routes.draw do
  mount JasmineRails::Engine => '/specs' if defined?(JasmineRails)
  root 'welcome#index'
  post 'message' => 'welcome#message'
end
