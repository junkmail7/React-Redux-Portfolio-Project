require "test_helper"

class UserTricksControllerTest < ActionDispatch::IntegrationTest
  setup do
    @user_trick = user_tricks(:one)
  end

  test "should get index" do
    get user_tricks_url
    assert_response :success
  end

  test "should get new" do
    get new_user_trick_url
    assert_response :success
  end

  test "should create user_trick" do
    assert_difference('UserTrick.count') do
      post user_tricks_url, params: { user_trick: { trick_id: @user_trick.trick_id, user_id: @user_trick.user_id } }
    end

    assert_redirected_to user_trick_url(UserTrick.last)
  end

  test "should show user_trick" do
    get user_trick_url(@user_trick)
    assert_response :success
  end

  test "should get edit" do
    get edit_user_trick_url(@user_trick)
    assert_response :success
  end

  test "should update user_trick" do
    patch user_trick_url(@user_trick), params: { user_trick: { trick_id: @user_trick.trick_id, user_id: @user_trick.user_id } }
    assert_redirected_to user_trick_url(@user_trick)
  end

  test "should destroy user_trick" do
    assert_difference('UserTrick.count', -1) do
      delete user_trick_url(@user_trick)
    end

    assert_redirected_to user_tricks_url
  end
end
