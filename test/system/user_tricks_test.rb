require "application_system_test_case"

class UserTricksTest < ApplicationSystemTestCase
  setup do
    @user_trick = user_tricks(:one)
  end

  test "visiting the index" do
    visit user_tricks_url
    assert_selector "h1", text: "User Tricks"
  end

  test "creating a User trick" do
    visit user_tricks_url
    click_on "New User Trick"

    fill_in "Trick", with: @user_trick.trick_id
    fill_in "User", with: @user_trick.user_id
    click_on "Create User trick"

    assert_text "User trick was successfully created"
    click_on "Back"
  end

  test "updating a User trick" do
    visit user_tricks_url
    click_on "Edit", match: :first

    fill_in "Trick", with: @user_trick.trick_id
    fill_in "User", with: @user_trick.user_id
    click_on "Update User trick"

    assert_text "User trick was successfully updated"
    click_on "Back"
  end

  test "destroying a User trick" do
    visit user_tricks_url
    page.accept_confirm do
      click_on "Destroy", match: :first
    end

    assert_text "User trick was successfully destroyed"
  end
end
