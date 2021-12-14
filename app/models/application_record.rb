class ApplicationRecord < ActiveRecord::Base
  self.abstract_class = true

  def public_attributes
    attributes.reject { |k, _v| protected_attributes.include?(k) }
  end

  private

  def protected_attributes
    []
  end
end
